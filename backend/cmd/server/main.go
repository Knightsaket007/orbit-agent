package main;

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/Knightsaket007/orbit-agent/backend/internal/routes"
)

func main() {

	router := gin.New()

	router.Use(
		gin.Logger(),
		gin.Recovery(),
	)
	router.Use(cors.Default())

	routes.Register(router)

	router.Run(":4100")
}