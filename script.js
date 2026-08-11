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
}, 'ff');

createAlign({
    mediaH: "Important Maps",
    src: "assets/Radcliffe.png",
    alt: `${img.src=="assets/Radcliffe.png"?"The Radcliffe Line":"Propaganda pro-Pakistan Map from the All-India Muslim League"}`,
    imgAttr: [
        ["onclick", "cycleImages(['assets/Radcliffe.png', 'assets/Propa.png'])"]
    ],
    explain: `
    The All-India Muslim League was an organisation founded by Islamist separatists for a partitioned India, and its desired
    Pakistan was created, albeit in a lesser form, which later partitioned with East Pakistan becoming Bangladesh. <br>
    The Indian National Congress on the other hand, founded by disciples of Mahatma Mohandas Karamchand Gandhi, strongly 
    wished for a united India, but the British reasoning of 'Divide and Conquer' and their rejection of previous plans that 
    would create even a slightly loose federation caused them to lose the debate. <br>
    Finally, the Partition was a bloody affair. The British called in a lawyer who knew nothing of the land, Cyril Radcliffe, 
    who had never been west of Paris. He drew a line based on simple statistics from an office within five weeks for the 
    quick exit the British needed, and the following massacre of the Partition as people crammed themselves onto trains and cattle
    to reach the land representing their religion was so horrible he refused his fee and vowed never to return.
    `,
    color: "rgb(255, 255, 255)"
}, 'ml');

function createAlign(data, id) {
    const temp = document.querySelector('#template');
  console.log('temp:', temp);
  console.log('temp.content:', temp.content);
  const workspace = temp.content.cloneNode(true);
  console.log('workspace:', workspace);
  console.log('workspace.children:', workspace.children);
  console.log('workspace.children[1]:', workspace.children[1]);
    
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
    workspace.children[1].style.backgroundColor=data.color;

    workspace.firstElementChild.style.color=data.color;

    console.log('About to append to:', document.getElementById(id));
    document.getElementById(id).appendChild(workspace);
    console.log('Appended successfully');
}