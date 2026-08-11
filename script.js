const imgSrcs=["assets/IndiaFlag.png", "assets/IndiaEmblem.png", "assets/BengalTiger.png", "assets/Peacock.png", 
    "assets/Lotus.png", "assets/HapusMango.png", "assets/Banyan.png", "assets/IndianElephant.png"
];
let i=0;
function cycleImages() {
    i=(i<imgSrcs.length-1?i+1:0);
    document.getElementById('symbols').src=imgSrcs[i];
}

function createAlign(data, id) {
    const temp=document.querySelector('#template');
    const workspace=temp.content.cloneNode(true);
    
    const media=workspace.querySelector('.pic');
    const mHead=media.querySelector('h2');
    mHead.innerHTML=data.mediaH;
    const img=media.querySelector('img');
    img.src=data.Src;
    img.alt=data.Alt;
    
    const explain=workspace.querySelector('.exp');
    const exp=explain.querySelector('p');
    exp.innerHTML=data.explain;
    explain.style.border-radius=15px;
    workspace.style.background-color=data.color;
}