// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}
//Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
function renderCheese() {
  let cheese = document.getElementById('cheese');

  if (state.Cheese){
    cheese.style.display= "inherit";
  } else{
    cheese.style.display="none";
  }
}
//Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM

function renderTomatoes() {

  let tomatoes = document.getElementById("tomato");

  if (state.Tomatoes){
    tomatoes.style.display="inherit";
  }
  else{
    tomatoes.style.display="none";
  }
}
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

function renderOnions() {

  let onions = document.getElementById("onion");

  if (state.Onions){
    onions.style.display="inherit";
  }
  else{
    onions.style.display="none";
  }
}
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM

function renderLettuce() {

  let lettuce = document.getElementById("lettuce");

  if (state.Lettuce){
    lettuce.style.display="inherit";
  }
  else{
    lettuce.style.display="none";
  }
}

//////////////////////////////////////// TRIAL-2 //////////////////////////////////////////////////////////

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").addEventListener("click", function(){
  state.Cheese=!state.Cheese;
  renderAll();
});


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").addEventListener("click", function(){
  state.Tomatoes=!state.Tomatoes;
  renderAll();
});


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener("click", function(){
  state.Onions=!state.Onions;
  renderAll();
});


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener("click", function(){
  state.Lettuce=!state.Lettuce;
  renderAll();
});


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  if (state.Patty) {
    document.querySelector(".btn-patty").classList.add("active");
  } else{
    document.querySelector(".btn-patty").classList.remove("active");
  }

  if (state.Cheese){
    document.querySelector(".btn-cheese").classList.add("active");
  } else{
    document.querySelector(".btn-cheese").classList.remove("active");
  }

  if (state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.add("active");
  } else{
    document.querySelector(".btn-tomatoes").classList.remove("active");
  }

  if (state.Onions){
    document.querySelector(".btn-onions").classList.add("active");
  } else{
    document.querySelector(".btn-onions").classList.remove("active");
  }

  if (state.Lettuce){
    document.querySelector(".btn-lettuce").classList.add("active");
  } else{
    document.querySelector(".btn-lettuce").classList.remove("active");
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

var items = document.querySelectorAll(".items");

function renderIngredientsBoard(){
  if (state.Patty){
    items[0].textContent="patty";
  }
  else{
    items[0].textContent="";
  }

  if (state.Cheese){
    items[1].textContent="cheese";
  }
  else{
    items[1].textContent="";
  }

  if (state.Tomatoes){
    items[2].textContent="tomatoes";
  }
  else{
    items[2].textContent="";
  }

  if (state.Onions){
    items[3].textContent="onions";
  }
  else{
    items[3].textContent="";
  }

  if (state.Lettuce){
    items[4].textContent="lettuce";
  }
  else{
    items[4].textContent="";
  }
  
}



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

var price = document.querySelector(".price-details")

function renderPrice(){
  var total = 20
  if (state.Patty){
    total += ingredients.Patty;
  }

  if (state.Cheese){
    total += ingredients.Cheese;
  }

  
  if (state.Tomatoes){
    total += ingredients.Tomatoes;
  }

  
  if (state.Onions){
    total += ingredients.Onions;
  }

  
  if (state.Lettuce){
    total += ingredients.Lettuce;
  }

  price.textContent = total

}
