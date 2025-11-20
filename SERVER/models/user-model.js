const mongoose = require("mongoose"); //載入 Mongoose 套件，之後你才能：
// 連MongoDB/建立 Schema/建立 Model/做資料 CRUD
const { Schema } = mongoose;
//從 mongoose 裡面取出 Schema 這個屬性，放進變數 Schema。
const bcrypt = require("bcrypt");
//bcrypt 是一個密碼雜湊（hash）函式庫，用來：把使用者密碼加密/比對加密後的密碼是否相同（登入時用）/確保資料庫不會存明碼

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// enum用來限制 在 Schema 中用來「限制欄位的可選值」。
// default 當欄位沒有提供值時，自動填入的預設值。
