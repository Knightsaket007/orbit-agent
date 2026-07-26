package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/Knightsaket007/orbit-agent/backend/internal/models"
)

func ExecuteTask(c *gin.Context) {

	var request models.TaskRequest

	if err := c.ShouldBindJSON(&request); err != nil {

		c.JSON(http.StatusBadRequest, models.TaskResponse{
			Success: false,
			Status:  "failed",
			Message: "Prompt is required.",
		})

		return
	}

	response := models.TaskResponse{
		Success: true,
		Status:  "received",
		Prompt:  request.Prompt,
	}

	c.JSON(http.StatusOK, response)
}
