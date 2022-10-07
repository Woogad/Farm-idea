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
	strurl := fmt.Sprintf("https://%s.blob.core.windows.net/%s/%s", accountName, containerName, file.Filename)
	new_image := models.Images{
		Name:    file.Filename,
		Pathimg: strurl,
	}
	c.BindJSON(&new_image)
	config.DB.Create(&new_image)
	c.JSON(http.StatusCreated, &new_image)

}

func GetImages(c *gin.Context) {
	image := []models.Images{}
	config.DB.Find(&image)
	c.JSON(http.StatusOK, &image)
}

func DeleteImage(c *gin.Context) {
	id := c.Param("id")
	image := []models.Images{}
	if result := config.DB.Where("id = ?", id).Delete(&image); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &image)
}
