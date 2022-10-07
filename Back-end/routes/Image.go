package routes

import (
	"github/Woogad/farm-idea/controller"

	"github.com/gin-gonic/gin"
)

func ImageRoute(router *gin.Engine) {
	router.GET("/image", controller.GetImages)
	router.DELETE("/image/:id", controller.DeleteImage)
}
