const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-List");

function addItem(e) {
  e.preventDefault();

  if (itemInput.value === "") {
    alert("Please ad an item");
    return;
  }

  console.log("Success");
}

itemForm.addEventListener("submit", addItem);
