package models

import "gorm.io/gorm"

type Images struct {
	gorm.Model
	Name    string `json:"name"`
	Pathimg string `json:"pathimg"`
}
