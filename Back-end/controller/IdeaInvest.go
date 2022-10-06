package controller

import (
	"github/Woogad/farm-idea/config"
	"github/Woogad/farm-idea/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetIdeaInvest(c *gin.Context) {
	idea_invest := []models.IdeaInvest{}
	config.DB.Find(&idea_invest)
	c.JSON(http.StatusOK, &idea_invest)
}

func PostIdeaInvest(c *gin.Context) {
	var new_idea_invest models.IdeaInvest
	c.BindJSON(&new_idea_invest)
	config.DB.Create(&new_idea_invest)
	c.JSON(http.StatusCreated, &new_idea_invest)
}
