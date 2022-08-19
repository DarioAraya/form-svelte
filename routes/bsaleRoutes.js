const express = require("express");
var router = express.Router();
const environment = process.env.NODE_ENV || "development";
const settings = require("../config/settings.json")[environment];
const ApiCall = require("../helpers/api_call");
const path = require('path')
const catchAsync = require("../helpers/catchAsync");


/*
//atrapando favicon.ico, esto se realiza ya que los navegadores por defecto
router.get("/favicon.ico", (req, res) => res.status(204));
*/
//llena el formulario con los datos de un usuario determinado por el id
router.get(
  "/formulario/:id",
  catchAsync(async (req, res) => {
    const id = req.params.id;
    const response = await ApiCall.request(
      `${settings.api}/v1/companies/${id}.json`,
      "get",
      req.params
    );
    let data = "";
    if (response.data != undefined && response.data.code == 200) {
      data = response.data.data;
    }
    res.sendFile(path.join(process.cwd(), 'views', 'layouts', 'index.html'))
  })
);



router.put("/formulario/gateway/:id", catchAsync(async(req, res,next) => {
    const data = await req.body;
    console.log(data);
    res.send(data);
  })
);

module.exports = router;
