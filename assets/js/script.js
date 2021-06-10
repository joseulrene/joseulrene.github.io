function setEmbed(title,url) {
    var player = document.getElementById("embedplayer");
    var current = document.getElementById("currentEmbed");
    player.setAttribute("src",url);
    current.innerText = title;
}