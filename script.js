const imgSrcs=["assets/IndiaFlag.png", "assets/IndiaEmblem.png", "assets/BengalTiger.png", "assets/Peacock.png", 
    "assets/Lotus.png", "assets/HapusMango.png", "assets/Banyan.png", "assets/IndianElephant.png"
];
let i=0;
function cycleImages() {
    i=(i<imgSrcs.length-1?i+1:0);
    document.getElementById('symbols').src=imgSrcs[i];
}