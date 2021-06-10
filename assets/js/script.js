var embedUrl = "";
var player = null; 
var playerLabel = null; 

$(document).ready(function() {
    player = document.getElementById("embed");
    playerLabel = document.getElementById("modalEmbedLabel"); 
});

function setEmbed(title,url) {
    embedUrl = url;
    if (player == null) player = document.getElementById("embed");
    if (playerLabel == null) var playerLabel = document.getElementById("modalEmbedLabel");
    player.setAttribute("src",url);
    playerLabel.innerText = title;
}

function reload(){
    if (player == null) player = document.getElementById("embed");
    player.setAttribute("src",embedUrl);
}