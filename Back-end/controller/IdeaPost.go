package controller

import (
	"fmt"
	"github/Woogad/farm-idea/config"
	"github/Woogad/farm-idea/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetIdeaPost(c *gin.Context) {
	idea_post := []models.IdeaPost{}
	config.DB.Find(&idea_post)
	c.JSON(http.StatusOK, &idea_post)
}
func PostIdeaPost(c *gin.Context) {
	var new_idea_post models.IdeaPost
	c.BindJSON(&new_idea_post)
	config.DB.Create(&new_idea_post)
	c.JSON(http.StatusCreated, &new_idea_post)
}

func GetbyIdIdeaPost(c *gin.Context) {
	id := c.Param("id")
	idea_posts := []models.IdeaPost{}
	if result := config.DB.Where("id = ?", id).Find(&idea_posts); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, &idea_posts)
}

func DeleteIdeaPost(c *gin.Context) {
	id := c.Param("id")
	idea_post := []models.IdeaPost{}
	if result := config.DB.Where("id = ?", id).Delete(&idea_post); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &idea_post)
}

func UpdateIdeaPost(c *gin.Context) {
	var updata_ideapost models.IdeaPost
	id := c.Params.ByName("id")
	if err := config.DB.Where("id = ?", id).First(&updata_ideapost).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&updata_ideapost)
	config.DB.Save(&updata_ideapost)
	c.JSON(http.StatusNoContent, updata_ideapost)
}
