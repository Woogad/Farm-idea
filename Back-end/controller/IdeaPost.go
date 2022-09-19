package controller

import (
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
	c.JSON(http.StatusOK, &new_idea_post)
}
