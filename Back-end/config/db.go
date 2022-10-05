package config

import (
	"github/Woogad/farm-idea/models"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	var err error
	dsn := os.Getenv("DB")
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&models.IdeaPost{}, &models.IdeaInvest{})
	DB = db
}
