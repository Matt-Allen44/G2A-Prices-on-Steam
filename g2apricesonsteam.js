/* THIS SCRIPT IS CALLED WHEN ANY STORE.STEAMPOWERED.COM DOMAIN IS LOADED */
var gameName = document.getElementsByClassName('apphub_AppName')[0].innerHTML;
console.log("Game Name: " + gameName);

var g2aSearchPath = 'https://www.g2a.com/?search=' + (gameName.replace(new RegExp(' ', 'g'),'%20') + '&as_sitesearch=g2a.com');
console.log("G2A Search Path: " + g2aSearchPath);

console.log('appended');
document.getElementById('game_area_purchase').innerHTML =  '<div class="game_area_purchase_game"><div class="game_area_purchase_platform"><p> Consider G2A for a cheaper price</p></div> <h1>Buy via G2A.com</h1> <div class="game_purchase_action"> <div class="game_purchase_action_bg"> <div class="game_purchase_price price"> G2A.COM </div> <div class="btn_addtocart"><a class="btnv6_green_white_innerfade btn_medium" href="' + g2aSearchPath + '"> <span>View Search Results</span> </a> </div> </div> </div> </div>' + document.getElementById('game_area_purchase').innerHTML;
