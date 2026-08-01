/* ==========================================
   FOREVER US
   Written & Directed by Engineer Nerrick
========================================== */

// Romantic background music
const music = document.getElementById("music");

window.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

/* --------------------------
   Create Stars
---------------------------*/

for(let i = 0; i < 400; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "vw";

    star.style.top = Math.random()*100 + "vh";

    star.style.width = Math.random()*3 + "px";

    star.style.height = star.style.width;

    star.style.animationDuration =
        (Math.random()*4+2)+"s";

    document.body.appendChild(star);

}

/* --------------------------
   Floating Hearts
---------------------------*/

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (Math.random()*30+15)+"px";

    heart.style.animationDuration=
    (Math.random()*8+5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },13000);

},250);

/* --------------------------
   Movie Story
---------------------------*/

const scenes = [

{
title:"Chapter One",
text:"Every love story begins with a single hello. Neither of us knew that one conversation would become the beginning of something unforgettable."
},

{
title:"Chapter Two",
text:"The days turned into memories. Every message became a reason to smile. Every laugh became a memory worth keeping forever."
},

{
title:"Chapter Three",
text:"Distance never measured how close our hearts became. Even in silence, you remained my favorite thought."
},

{
title:"Chapter Four",
text:"Your smile became my sunrise. Your voice became my peace. Your happiness slowly became my greatest dream."
},

{
title:"Chapter Five",
text:"If someone asked me what happiness looks like... I wouldn't describe it. I'd simply show them you."
},

{
title:"Happy Girlfriend's Day",
text:"Thank you for being the most beautiful chapter of my life. No matter where life takes us, you'll always have a special place in my heart. ❤️"
}

];

const container = document.createElement("div");

container.id="scene1";

document.body.appendChild(container);

let index=0;

function nextScene(){

    if(index>=scenes.length){

        ending();

        return;

    }

    container.innerHTML=`

    <h1>${scenes[index].title}</h1>

    <p>${scenes[index].text}</p>

    `;

    container.style.opacity=0;

    setTimeout(()=>{

        container.style.transition="2s";

        container.style.opacity=1;

    },200);

    index++;

}

setTimeout(()=>{

nextScene();

setInterval(nextScene,9000);

},11000);

/* --------------------------
   Ending
---------------------------*/

function ending(){

container.innerHTML=`

<h1>THE END?</h1>

<p>

No...

Our story has only just begun.

<br><br>

❤️ Forever Yours ❤️

<br><br>

Written & Directed by

<br>

<b>Engineer Nerrick</b>

</p>

`;

}
