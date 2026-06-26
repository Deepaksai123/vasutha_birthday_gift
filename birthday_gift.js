/* ==========================================
        PAGE TRANSITIONS
========================================== */

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

function showLetter(){

    page1.classList.add("hidden");

    setTimeout(()=>{

        page2.classList.remove("hidden");

        startTyping();

    },900);

}

function showGallery(){

    page2.classList.add("hidden");

    setTimeout(()=>{

        page3.classList.remove("hidden");

        revealImages();

        startFireworks();

    },900);

}

/* ==========================================
        TYPEWRITER EFFECT
========================================== */

const message =

`Every birthday reminds us that the world became a little brighter on this very day.

Some people are admired for their beauty.

Some are remembered for their kindness.

Very few possess both with such grace.

May today bring countless smiles, unforgettable memories, and endless happiness.

This little surprise is simply a celebration of someone who makes ordinary moments feel beautiful.

Happy Birthday, Vasutha 🌸`;

let i = 0;

function startTyping(){

    const box = document.getElementById("typewriter");

    box.innerHTML="";

    function type(){

        if(i < message.length){

            box.innerHTML += message.charAt(i);

            i++;

            setTimeout(type,35);

        }

    }

    type();

}

/* ==========================================
        IMAGE REVEAL
========================================== */

function revealImages(){

    const ids=[
        "img1",
        "img2",
        "img3",
        "img4",
        "img5"
    ];

    ids.forEach((id,index)=>{

        setTimeout(()=>{

            document
            .getElementById(id)
            .classList
            .add("show");

        },index*1800);

    });

}

/* ==========================================
        FLOATING PETALS
========================================== */

const petals=document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="absolute";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-50px";

    petal.style.fontSize=(20+Math.random()*20)+"px";

    petal.style.opacity=Math.random();

    petal.style.transition="transform 10s linear";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.style.transform=

        `translateY(110vh)
         translateX(${Math.random()*150-75}px)
         rotate(${Math.random()*720}deg)`;

    },100);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,300);

/* ==========================================
        FLOATING HEARTS
========================================== */

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="absolute";

    heart.style.bottom="-40px";

    heart.style.left=Math.random()*100+"vw";

    heart.style.color="rgba(255,255,255,.6)";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.transition="all 9s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=

        `translateY(-110vh)
         translateX(${Math.random()*100-50}px)
         scale(1.5)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,800);

/* ==========================================
        TWINKLING STARS
========================================== */

const stars=document.getElementById("stars");

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.style.position="absolute";

    star.style.width="3px";

    star.style.height="3px";

    star.style.borderRadius="50%";

    star.style.background="white";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.animation=

    `twinkle ${1+Math.random()*3}s infinite`;

    stars.appendChild(star);

}

/* ==========================================
        FIREWORKS
========================================== */

function startFireworks(){

    const container=document.getElementById("fireworks");

    setInterval(()=>{

        const burst=document.createElement("div");

        burst.innerHTML="✨";

        burst.style.position="absolute";

        burst.style.left=Math.random()*100+"vw";

        burst.style.top=Math.random()*60+"vh";

        burst.style.fontSize="40px";

        burst.style.animation="explode 1.5s forwards";

        container.appendChild(burst);

        setTimeout(()=>{

            burst.remove();

        },1500);

    },500);

}

/* ==========================================
        CURSOR SPARKLES
========================================== */

document.addEventListener("mousemove",e=>{

    const spark=document.createElement("div");

    spark.innerHTML="✨";

    spark.style.position="fixed";

    spark.style.left=e.clientX+"px";

    spark.style.top=e.clientY+"px";

    spark.style.pointerEvents="none";

    spark.style.fontSize="12px";

    spark.style.transition="1s";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.transform="translateY(-40px)";

        spark.style.opacity="0";

    },50);

    setTimeout(()=>{

        spark.remove();

    },1000);

});
