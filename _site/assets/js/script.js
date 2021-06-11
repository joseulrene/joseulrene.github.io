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
    var date = document.forms["newMomentForm"]["momentDate"].value;
    var url = document.forms["newMomentForm"]["videoUrl"].value;
    var start = document.forms["newMomentForm"]["start"].value.split(":");
    var end = document.forms["newMomentForm"]["end"].value.split(":");
    var text = document.forms["newMomentForm"]["momentText"].value;
    var id = url.split('/').pop();
    var hasStart = document.forms["newMomentForm"]["urlHasStart"].checked;
    if (!start[1]) start[1] = 0;
    if (!end[1]) end[1] = 0;
    var t = [start[0],start[1],end[0],end[1]];
    for (i = 0; i < 4; i++) { 
        if (!t[i] || isNaN(t[i])) t[i] = 0;
    }
    console.log(url, start, end, text, id, t, hasStart)
    
    var startsecs = Number(t[0])*60+Number(t[1]);
    var endsecs = Number(t[2])*60+Number(t[3]);

    // var vliveurl = `https://vlive.tv/embed/${i.id}?&begin=${startsecs}&end=${endsecs}`;
    // var yturl = `https://youtube.com/embed/${i.id}?start=${start}&end=${end}`;
    var appendStartVlive = `?&begin=${startsecs}`;
    var appendStartYt = `?start=${startsecs}`;
    var appendEnd = `&end=${endsecs}`;
    if (!hasStart) 
        if (url.includes("vlive")) 
            url += appendStartVlive;
        else
            url += appendStartYt;
    url += appendEnd;
    var i = {
        id: id,
        start: startsecs == 0 ? endsecs : startsecs,
        url: url,
        date : date,
        text: text,
        bonus: ""
    }
    var result = ""
    for (var p in i){
        var newLine = `  ${p}: ${i[p]}\n`;
        if (p == "id") newLine = newLine.replace("  ","- ");
        result += newLine;
    }
    console.log(result)
    document.getElementById("newMoment").value = result;
    return false;
}