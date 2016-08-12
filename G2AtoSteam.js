var g2a_PRODUCTNAME = document.getElementsByClassName('apphub_AppName')[0].innerHTML;
var g2a_SEARCHPATH = 'https://www.g2a.com/?search=' + (g2a_PRODUCTNAME.replace(new RegExp(' ', 'g'),'%20') + '&as_sitesearch=g2a.com') + '?reflink=g2a2steam';
var g2a_PRICE;

var steamPurchaseArea_Text = "Buy via G2A.com";
var steamPurchaseArea_SubText = "Counter-Strike: Global Offensive STEAM CD-KEY GLOBAL";
var steamPurchaseArea_ButtonText = "View on G2A"
var steamPurchaseArea_Price = "$7.49 USD"

document.getElementById('game_area_purchase').innerHTML =  '<div class="game_area_purchase_game"><div class="game_area_purchase_platform"><p>' + steamPurchaseArea_SubText + '</p></div> <h1>' + steamPurchaseArea_Text + '</h1> <div class="game_purchase_action"> <div class="game_purchase_action_bg"> <div class="game_purchase_price price">' + steamPurchaseArea_Price + '</div> <div class="btn_addtocart"><a class="btnv6_green_white_innerfade btn_medium" href="' + g2a_SEARCHPATH + '"> <span>' + steamPurchaseArea_ButtonText + '</span> </a> </div> </div> </div> </div>' + document.getElementById('game_area_purchase').innerHTML;
