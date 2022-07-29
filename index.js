// const fs = require("fs");
// // dạng đồng bộ (synchronous)
// const txtIn = fs.readFileSync("./src/input.txt", "utf-8"); // đọc file

// const txtOut = `Welcome to Nodejs : \n ${txtIn} . Ngày tạo :  ${Date.now()}`;
// fs.writeFileSync("./src/output.txt", txtOut); // viết thêm file

// // bất đồng bộ ( async)

// const fs1 = require("fs1");
// fs1.readFile("./src/input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("Reading file....");

const express = require("express"); // tạo ra express
const app = express(); // gọi tới function , trả lại đối tượng là app
const port = 3000; //website trên port nào

app.get("/", (req, res) => {
  //   "/"  đường dẫn tới trang đầu tiên khi vào
  // get định nghĩa route
  return res.send(`Chào mừng bạn đã đến với express js 1`);
});

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
