package models

import "gorm.io/gorm"

type IdeaPost struct {
	gorm.Model
	Title    string `json:"title"`
	Body     string `json:"body"`
	Contract string `json:"contract"`
}
