var items = [
    {
        id: "6436",
        vlive: true,
        date: 160315,
        text: "wendy thought seulrene were about to kiss in the ootn teaser",
        t: [7,36,8,2]
    },
    {
        id: "14431", //Z-SECWA3ev8 14431
        vlive: true,
        date: 161001,
        text: "about close friends (wendy are you watching?)",
        bonus: "they are so awkward singing together it's killing me and when irene just goes 'what??' omfg",
        t: [16,18,23,54]
    },
    {
        id: "14431",
        vlive: true, //yt
        date: 161001,
        text: "this whole thing honestly",
        t: [0,0,0,0]
    },
    {
        id: "14431",
        vlive: true, //yt
        date: 161001,
        text: "trainee stories part 1",
        t: [25,17,26,57]
    },
    {
        id: "14431",
        vlive: true, //yt
        date: 161001,
        text: "",
        t: [28,8,0,0,0]
    },
    {
        id: "",
        vlive: true, //yt
        date: null,
        text: "",
        t: [0,0,0,0]
    },
];

var i = 0;
items.sort((a,b) => {
    var r = a.date > b.date ? 1 : 
        a.date < b.date ? -1 :
            (!a.t[0] && !a.t[1]) ? 1 :
                (!b.t[0] && !b.t[1]) ? -1 : 
                    a.t[0] > b.t[0] ? 1 :
                        a.t[0] < b.t[0] ? -1 :
                            a.t[1] > b.t[1] ? 1 : -1
    i += 1;
    return r;
});


export const list = items.map(i => {
    var vliveurl = `https://vlive.tv/embed/${i.id}?&begin=${i.t[0]*60+i.t[1]}&end=${i.t[2]*60+i.t[3]}`;
    var yturl = `https://youtube.com/embed /${i.id}?start=${i.t[0]*60+i.t[1]}&end=${i.t[2]*60+i.t[3]}`;
    return {
        id: i.id,
        url: i.vlive ? vliveurl : yturl,
        date : i.date,
        text: i.text,
        bonus: i.bonus ? i.bonus : ""
    }
});
console.log(list);
var downloadLink = ""
const data = new Blob([JSON.stringify(list)], { type: 'text/plain' })
// this part avoids memory leaks
if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)
// update the download link state
downloadLink = window.URL.createObjectURL(data);
console.log(downloadLink)
document.getElementById("jsondata").setAttribute("href",downloadLink)
