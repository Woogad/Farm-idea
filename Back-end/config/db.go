package config

import (
	"github/Woogad/farm-idea/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	var err error
	dsn := "farmidea:password@tcp(db:3306)/farm_idea?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&models.IdeaPost{}, &models.IdeaInvest{})
	DB = db
}
