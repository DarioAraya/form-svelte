//*******************************/
// Lista de rutas asociadas a ejemplos
//**************************** */

var express = require('express');
var router = express.Router();
var path = require('path');
var environment = process.env.NODE_ENV || "development";
var settings = require("../config/settings.json")[environment];
const ApiCall = require('../helpers/api_call');
const catchAsync = require('../helpers/catchAsync');


/* GET página principal en este ejemplo se despliega un formularios */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(process.cwd(), 'views', 'layouts', 'index.html'))
});

// Simulación de datos para cargar el formulario con ellos
router.get('/formulario/gateway/:id.json', async(req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const response = await ApiCall.request(
    `${settings.api}/v1/companies/${id}.json`,
    "get",
    req.params
  );
  let data = "";
  if (response.data != undefined && response.data.code == 200) {
    data = response.data.data;
  }
  res.json({ data });
})

module.exports = router;
