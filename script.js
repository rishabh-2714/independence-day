const imgSrcs=["assets/IndiaFlag.png", "assets/IndiaEmblem.png", "assets/BengalTiger.png", "assets/Peacock.png", 
    "assets/Lotus.png", "assets/HapusMango.png", "assets/Banyan.png", "assets/IndianElephant.png"
];
const fFs=["assets/Gandhi.png", "assets/Nehru.png", "assets/Jinnah.png", "assets/Maulana.png", "assets/Patel.png",
    "assets/Liaquat.png", "assets/LBP.png", "assets/JhansiRani.png", "assets/Pandey.png"
]
let i=0;
function cycleImages(srcArr) {
    i=(i<srcArr.length-1?i+1:0);
    document.getElementById('symbols').src=imgSrcs[i];
}

createAlign({
    mediaH: "Freedom Fighters",
    src: "assets/Gandhi.png",
    alt: "Image of a Freedom Fighter",
    imgAttr: [
        ["onclick", "cycleImages(fFs)"]
    ],
    explain: `
    India's freedom was championed by many freedom fighters, such as Lal Bal Pal, Bhagat Singh, and the Indian National Congress
    among others, though they all differed on the way to accomplish it. There are two prominent eras: 
    <ul>
    <li>The early era, including revolutionaries like Lala Lajpat Rai, Bal Gangadhar Tilak, and Bipin Chandra Pal (Lal Bal Pal),
    as well as Mangal Pandey, Rani Lakshmibai of Jhansi, et cetera.</li>
    <li>The later era, consisting primarily of the Indian National Congress (MK Gandhi, Nehru, Vallabhbhai Patel, Maulana Azad, 
    et cetera) and the All-India Muslim League (Muhammad Ali Jinnah, Liaquat Ali Khan, et cetera).</li>
    </ul>
    `,
    color: "rgb(255, 103, 31)"
}, 'ff')

function createAlign(data, id) {
    const temp = document.querySelector('#template');
  console.log('temp:', temp);
  console.log('temp.content:', temp.content);
  const workspace = temp.content.cloneNode(true);
  console.log('workspace:', workspace);
  console.log('workspace.children:', workspace.children);
  console.log('workspace.firstElementChild:', workspace.firstElementChild);
    
    const media=workspace.querySelector('.pic');
    const mHead=media.querySelector('h2');
    mHead.innerHTML=data.mediaH;
    const img=media.querySelector('img');
    img.src=data.src;
    img.alt=data.alt;
    for(let i=0;i<data.imgAttr.length;i++){
        img.setAttribute(data.imgAttr[i][0], data.imgAttr[i][1]);
    }
    
    const explain=workspace.querySelector('.exp');
    const exp=explain.querySelector('p');
    exp.innerHTML=data.explain;
    workspace.firstElementChild.style.backgroundColor=data.color;

    console.log('About to append to:', document.getElementById(id));
    document.getElementById(id).appendChild(workspace);
    console.log('Appended successfully');
}