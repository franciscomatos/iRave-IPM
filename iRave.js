function loadAllLineUpData(lineUpData) {
  localStorage.setItem("AllLineUpData",JSON.stringify(lineUpData));
}

function loadAllRestaurantsData(restaurantsData) {
  localStorage.setItem("AllRestaurantsData",JSON.stringify(restaurantsData));
}

function selectBand(bandName) {
  localStorage.setItem("bandName", bandName);
}

function selectSchedule(bandSchedule) {
  localStorage.setItem("bandSchedule", bandSchedule);
}

function selectStage(bandStage) {
  localStorage.setItem("bandStage", bandStage);
}

function selectPic(bandPic) {
  localStorage.setItem("bandPic", bandPic);
}

function selectRestaurant(restaurantName) {
  localStorage.setItem("restaurantName", restaurantName);
}

function selectWaitingTime(waitingTime) {
  localStorage.setItem("waitingTime", waitingTime);
}

function selectRestaurantLogo(restaurantLogo) {
  localStorage.setItem("restaurantLogo", restaurantLogo);
}

function selectRestaurantMenu(restaurantMenu) {
  localStorage.setItem("restaurantMenu", restaurantMenu);
}

function selectRestaurantLocation(restaurantId) {
  localStorage.setItem('restaurantId', restaurantId);
}

function selectStageLocation(stage) {
  localStorage.setItem('stage',stage);
}

function getBandName() {
  return localStorage.getItem("bandName");
}

function getBandSchedule() {
  return localStorage.getItem("bandSchedule");
}

function getBandStage() {
  return localStorage.getItem("bandStage");
}

function getBandPic() {
  return localStorage.getItem("bandPic");
}

function getRestaurantName() {
  return localStorage.getItem("restaurantName");
}

function getWaitingTime() {
  return localStorage.getItem("waitingTime");
}

function getRestaurantLogo() {
  return localStorage.getItem("restaurantLogo");
}

function getRestaurantRating() {
  return localStorage.getItem("restaurantRating");
}

function getRestaurantMenu() {
  return localStorage.getItem("restaurantMenu");
}

function getRestaurantLocation() {
  return localStorage.getItem('restaurantId');
}

function getStage() {
  return localStorage.getItem('stage');
}

function displayBand() {
  document.getElementById("band-name").innerHTML = getBandName();
}

function displaySchedule() {
  document.getElementById("schedule").innerHTML = getBandSchedule();
}

function displayStage() {
  document.getElementById("button-location").innerHTML = getBandStage();
}

function displayPic() {
  document.getElementById("band-pic").innerHTML = "<img id='pic' src='" + getBandPic()+"'>";
}

function displayRestaurant() {
  document.getElementById("app-name").innerHTML = getRestaurantName();
}

function displayWaitingTime() {
  document.getElementById("waiting-time").innerHTML = getWaitingTime();
}

function displayRestaurantLogo() {
  document.getElementById("restaurant-logo").innerHTML = "<img id='pic' src='" + getRestaurantLogo() + "'>";
}

function displayRestaurantMenu() {
  document.getElementById("full").src=getRestaurantMenu();
}

function displayRestaurantLocation() {
  document.getElementById(getRestaurantLocation()).style.display = 'block';
  document.getElementById(getRestaurantLocation() + '-name').style.display = 'block';
}

function displayStageLocation() {
  document.getElementById('app-name').innerHTML = getBandStage();
  document.getElementById(getStage()).style.display = 'block';
  document.getElementById(getStage() + '-name').style.display = 'block';
}

function myFunction(sectiontohide) {
  var answer = document.getElementById(sectiontohide);
  if(answer.style.display =='none')
    answer.style.display ='block';
  else 
    answer.style.display = "none";
}
