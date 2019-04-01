$(document).ready(
  $(".purchase-item").on("click", function() {
    let id = $(this).data("id");
    let isPurchased = $(this).data("purchased");
    console.log(isPurchased);
    //Checks which list the item is in and updates the purchase state accordingly
    if (isPurchased === 0) {
      let newPurchasedState = {
        purchased: 1
      };
      updatePurchased(newPurchasedState);
    }
    if (isPurchased === 1) {
      let newPurchasedState = {
        purchased: 0
      };
      updatePurchased(newPurchasedState);
    }

    function updatePurchased(newPurchasedState) {
      $.ajax("/api/items/" + id, {
        type: "PUT",
        data: newPurchasedState
      }).then(function() {
        location.reload();
      });
    }
  })
);

//Adds a enter key submit listener to trigger the add item function
$(".new-item").keyup(function(event) {
  if (event.keyCode === 13) {
    addItem();
  }
});

$(".add-item-button").on("click", addItem);

function addItem() {
  let itemName = $(".new-item").val();
  let item = {
    item_name: itemName
  };
  $.ajax("/api/items/", {
    type: "POST",
    data: item
  }).then(function() {
    console.log("item added");
    location.reload();
  });
}

$(".delete").on("click", function() {
  let id = $(this).data("id");

  $.ajax("/api/items/" + id, {
    type: "DELETE"
  }).then(function() {
    console.log("item deleted");
    location.reload();
  });
});
