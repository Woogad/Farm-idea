package controller

import (
	"context"
	"fmt"
	"github/Woogad/farm-idea/config"
	"github/Woogad/farm-idea/models"
	"log"
	"net/http"
	"net/url"
	"os"

	"github.com/Azure/azure-storage-blob-go/azblob"
	"github.com/gin-gonic/gin"
)

func UploadFile(c *gin.Context) {

	accountName := os.Getenv("accountName")
	accountKey := os.Getenv("accountKey")
	containerName := os.Getenv("containerName")

	credential, err := azblob.NewSharedKeyCredential(accountName, accountKey)
	if err != nil {
		log.Fatal(err)
	}

	pipe := azblob.NewPipeline(credential, azblob.PipelineOptions{})
	ctx := context.Background() // This example uses a never-expiring context
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"file": "fail",
		})
	}
	log.Println(file.Filename)
	f, openerr := file.Open()
	if openerr != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"file": "fail",
		})
	}
	u, _ := url.Parse(fmt.Sprintf("https://%s.blob.core.windows.net/%s/%s", accountName, containerName, file.Filename))
	blockBlobURL := azblob.NewBlockBlobURL(*u, pipe)
	bufferSize := 2 * 1024 * 1024
	maxBuffers := 3

	_, err = azblob.UploadStreamToBlockBlob(ctx, f, blockBlobURL,
		azblob.UploadStreamToBlockBlobOptions{BufferSize: bufferSize, MaxBuffers: maxBuffers})
	if err != nil {
		log.Fatal(err)
	}

	var new_image models.Images
	c.BindJSON(&new_image)
	config.DB.Create(&new_image)

	c.JSON(http.StatusOK, gin.H{
		"file": new_image,
	})

}
