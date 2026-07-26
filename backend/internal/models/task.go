package models

type TaskRequest struct {
	Prompt string `json:"prompt" binding:"required"`
}

type TaskResponse struct {
	Success bool   `json:"success"`
	Status  string `json:"status"`
	Message string `json:"message,omitempty"`
	Prompt  string `json:"prompt,omitempty"`
}