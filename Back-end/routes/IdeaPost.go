package routes

import (
	"github/Woogad/farm-idea/controller"

	"github.com/gin-gonic/gin"
)

func IdeaPostRoute(router *gin.Engine) {
	router.GET("/idea-post", controller.GetIdeaPost)
	router.POST("/idea-post", controller.PostIdeaPost)
	router.GET("/idea-post/:id", controller.GetbyIdIdeaPost)
	router.DELETE("/idea-post/:id", controller.DeleteIdeaPost)
	router.PUT("/idea-post/:id", controller.UpdateIdeaPost)
}

func IdeaInvestRoute(router *gin.Engine) {
	router.GET("/idea-invest", controller.GetIdeaInvest)
}
