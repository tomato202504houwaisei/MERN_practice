const express = require("express"); //載入 Express 模組。用來建立 Web 伺服器。
const app = express(); //呼叫 express() 產生伺服器實例。之後所有路由、middleware、設定都寫在 app 上。
const mongoose = require("mongoose"); //載入 Mongoose。作用：提供操作 MongoDB 的 ODM（Object Data Modeling）。可讓你用「JavaScript 物件」去操作資料庫，而不是自己寫原生查詢語句。
const dotenv = require("dotenv"); //載入 dotenv。作用：讓 Node.js 可以讀取 .env 檔案（環境變數）
dotenv.config(); //讓 dotenv 實際啟動，把 .env 裡的環境變數讀進

// 連結MongoDB
// mongoose.connect("連接資料庫")
// 上面致個是promise物件 所以下面有.then表成功 執行內容 .catch 表失敗執行內容
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then(() => {
    console.log("Connecting to mongodb....");
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares;這兩行是「中介層 middleware」的設定，用來處理前端送進來的資料。
app.use(express.json()); //解析前端送來的 JSON 格式資料。
app.use(express.urlencoded({ extended: true })); //解析 <form> 表單送出的資料（application/x-www-form-urlencoded）。

// Express 在進入你的 route（路由）之前，
// 會先經過這些 middleware 進行資料解析。
// 前端
// Request
//      ↓
// express.json() → 處理 JSON
// express.urlencoded() → 處理 FORM
//      ↓
// 你的 app.get()/app.post() 路由

// .use = 在 Express 中「註冊 middleware（中介層）」的指令。

// 核心定義

// app.use() 的作用是：

// 把某個功能加入 Express 的處理流程中，讓所有進來的請求都先經過它。

//要跟port 3000錯開 因為recat預設3000
app.listen(8080, () => {
  console.log("後端伺服器聆聽在port 8080...");
});
