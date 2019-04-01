const express = require("express");
const db = require("../models")

const router = express.Router();

router.get("/", function(req, res) {

  db.Item.findAll({}).then(function(results){
    let handleObject = {
          item: results
        }
    res.render("index", handleObject)
  });
});

router.post("/api/items", function(req, res) {
  let item = req.body.item_name;
  console.log("The item we are adding is: " + item)
  db.Item.create({
    item_name: item
  }).then(function(result){
    console.log(result)
    res.json(result)
  })
  // item.add(col1, itemName, function(result) {
  //   res.json({ id: result.insertId });
  // });
});

router.put("/api/items/:id", function(req, res) {
  let condition = `id = ${req.params.id}`;
  let isPurchased = `purchased = ${req.body.purchased}`;
  console.log(condition, isPurchased);
  item.update(isPurchased, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/items/:id", function(req, res) {
  let id = req.params.id;
  item.delete("id", id, function() {
    res.end();
  });
});

module.exports = router;
