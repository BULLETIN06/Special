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
/* ===========================
Photo Slideshow
=========================== */

const photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg"

];

const chapters=[

{
title:"The Beginning",
text:"Every journey starts with one hello. Little did we know that simple conversations would become unforgettable memories."
},

{
title:"The Laughter",
text:"Every smile you gave me made life brighter. Every laugh became music to my heart."
},

{
title:"The Memories",
text:"Time passed, but every moment with you became another page in our beautiful story."
},

{
title:"The Promise",
text:"No matter where life takes us, I promise to always choose you, support you, and treasure you."
},

{
title:"Forever",
text:"Happy Girlfriend's Day. Thank you for making my world brighter every single day. ❤️"
}

];

let current=0;

const img=document.getElementById("photo");
const title=document.getElementById("chapter");
const text=document.getElementById("paragraph");

setInterval(()=>{

current++;

if(current>=photos.length){

document.getElementById("credits").classList.add("creditScroll");

return;

}

img.style.opacity=0;

setTimeout(()=>{

img.src=photos[current];

title.innerHTML=chapters[current].title;

text.innerHTML=chapters[current].text;

img.style.opacity=1;

},1000);

},8000);
/* ====================================
FINAL MOVIE SCENE
==================================== */

const message = `

My Dearest Love,

Today is more than just Girlfriend's Day.

It's a celebration of the incredible person who changed my life simply by being part of it.

Every smile you give me becomes a memory.

Every conversation becomes a treasure.

Every moment with you becomes another reason to believe that love truly exists.

Thank you for being my happiness.

Thank you for being my peace.

Thank you for being my favorite person.

No matter where life takes us...

No matter how many years pass...

I'll always be grateful that our paths crossed.

Happy Girlfriend's Day.

Forever Yours,

❤️ Engineer Nerrick ❤️

`;

function typeWriter(){

const box=document.getElementById("typeWriter");

let i=0;

function write(){

if(i<message.length){

box.innerHTML+=message.charAt(i);

i++;

setTimeout(write,40);

}

}

write();

}

/* Show ending after 60 seconds */

setTimeout(()=>{

document.getElementById("finalMessage").classList.add("show");

typeWriter();

},60000);

/* Rose petals */

setInterval(()=>{

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=(Math.random()*4+5)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},9000);

},300);

/* Simple Fireworks */

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function burst(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

for(let i=0;i<60;i++){

particles.push({

x,

y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,2,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

setInterval(burst,2000);
