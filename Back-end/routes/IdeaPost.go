package routes

import (
	"github/Woogad/farm-idea/controller"

	"github.com/gin-gonic/gin"
)

func IdeaPostRoute(router *gin.Engine) {
	router.GET("/", controller.GetIdeaPost)
	router.POST("/", controller.PostIdeaPost)
}
