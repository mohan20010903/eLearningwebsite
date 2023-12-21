
//  ------------------------- GREETING MESSAGE -----------------------------------

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('customerID');

document.getElementById("username").innerHTML += " " + username;