const sass = require("sass")
const path = require("path")
const fs = require("fs")

const src_path = path.join(__dirname, "../scss/style.scss")
const dist_path = path.join(__dirname, "../static/css/dist.css")

const result = sass.compile(src_path, { style: "compressed" })

fs.writeFile(dist_path, result.css, err => {
  if (err) throw err
  console.log("正常に書き込みが完了しました")
})
