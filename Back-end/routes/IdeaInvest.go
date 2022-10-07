package routes

import (
	"github/Woogad/farm-idea/controller"

	"github.com/gin-gonic/gin"
)

func IdeaInvestRoute(router *gin.Engine) {
	router.GET("/idea-invest", controller.GetIdeaInvest)
	router.POST("/idea-invest", controller.PostIdeaInvest)
	router.POST("/upload", controller.UploadFile)
}
