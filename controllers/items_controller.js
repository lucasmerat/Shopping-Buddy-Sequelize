const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", function(req, res) {
  db.Item.findAll({}).then(function(results) {
    let handleObject = {
      item: results
    };
    res.render("index", handleObject);
  });
});

router.post("/api/items", function(req, res) {
  let item = req.body.item_name;
  db.Item.create({
    item_name: item
  }).then(function(result) {
    res.json(result);
  });
});

router.put("/api/items/:id", function(req, res) {
  db.Item.update(
    req.body, 
    {
      where:{
        id: req.params.id
    }
  }
  ).then(function(result){
    res.json(result);
  })
});

router.delete("/api/items/:id", function(req, res) {
  let id = req.params.id;
  db.Item.destroy({
    where:{
      id
    }
  }).then(function(result){
    res.json(result)
  });
});

module.exports = router;
