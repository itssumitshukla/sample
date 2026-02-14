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
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

itemForm.addEventListener("submit", addItem);
