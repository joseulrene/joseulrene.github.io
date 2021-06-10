var embedUrl = "";
var player = null; 
var playerLabel = null; 

document.addEventListener("DOMContentLoaded", function(event) {
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

function openModalWithCode(){
    var url = document.forms["newMomentForm"]["videoUrl"].value;
    var start = document.forms["newMomentForm"]["start"].value;
    var end = document.forms["newMomentForm"]["end"].value;
    var text = document.forms["newMomentForm"]["momentText"].value;
    var id = url.split('/').pop();
    var t = [...start.split(":"),...end.split(":")];
    for (i = 0; i < 4; i++) { 
        if (!t[i] || isNaN(t[i])) t[i] = 0;
    }
    console.log(url, start, end, text, id, t)
    return false;
}