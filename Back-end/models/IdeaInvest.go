package models

import (
	"gorm.io/gorm"
)

type IdeaInvest struct {
	gorm.Model
	NameProject string `json:"nameProject"`
	Amount      string `json:"amount"`
	Tag         string `json:"tag"`
	Image       Images
	ImageID     uint
}
