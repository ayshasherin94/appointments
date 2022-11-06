var express = require('express');
var router = express.Router();

const doc = require('../data/doc-data.json');
const appointment = require('../data/appointment.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/appointment/:id', (req, res) => {
  const id = req.params.id;

  const result = appointment.filter(appointment => appointment.id == id);
  console.warn(appointment);
  res.json(result);
  

});
 

router.get('/api/docs', (req, res) => {
  res.json(doc);
});

router.get('/api/appoints', (req, res) => {
  res.json(appointment);
});

module.exports = router;

