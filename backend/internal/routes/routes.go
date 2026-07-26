package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/Knightsaket007/orbit-agent/backend/internal/handlers"
)

func Register(router *gin.Engine) {

	api := router.Group("/api")

	{
		api.POST("/task", handlers.ExecuteTask)
	}
}