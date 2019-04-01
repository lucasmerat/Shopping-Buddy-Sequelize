const item = require("../models/item");
const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  item.show(function(data) {
    let handleObject = {
      item: data
    };
    console.log(handleObject);
    res.render("index", handleObject);
  });
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

router.post("/api/items", function(req, res) {
  let col1 = "item_name";
  let itemName = req.body.item_name;
  console.log(itemName);
  item.add(col1, itemName, function(result) {
    res.json({ id: result.insertId });
  });
});

router.delete("/api/items/:id", function(req, res) {
  let id = req.params.id;
  item.delete("id", id, function() {
    res.end();
  });
});

module.exports = router;
