

//TODO click event


window.addEventListener('load', function() {
    const audioElement = document.getElementById('audio');
    const startButton = document.getElementById('start-btn');
    const welcomeMessage = document.getElementById('welcome-message');

    startButton.addEventListener('click', function() {
        audioElement.play().catch(error => {
            console.log('Error playing audio:', error);
        });
        welcomeMessage.style.display = 'block'; 
        startButton.style.display = 'none'; 
    });
});

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
});

const testimonials = [
    {
        name: "- Nandor The Relentless",
        photoUrl: "https://pbs.twimg.com/profile_images/1689039265785618432/OC3kvNcg_400x400.jpg",
        text:"Guillermo is a fine bodyguard... for a human. He’s loyal, diligent, and, well, he hasn't let me die yet. Though I still can't believe he hasn't mastered the art of invisibility. How hard can it be?",
    },
    {
        name: "- Nadja of Antipaxos",
        photoUrl: "https://i.redd.it/u36n7g13kwq71.jpg",
        text:"Guillermo? Oh, he’s a darling, really. Always scurrying around like a little mouse, doing what we ask. But I do wish he’d stop with all that nervous sweating; it’s bad for the rugs. Still, he’s got a good heart... for a familiar.",
    },
    {
        name: "- Laszlo Cravensworth",
        photoUrl: "https://i.pinimg.com/564x/4b/1b/7e/4b1b7efcc90291e651c858e219adb16d.jpg",
        text:"Ah, Guillermo! The little fellow’s got guts, I’ll give him that—though he’s still a bit squeamish about cleaning up after a good feeding. But he’s always around when you need him, and that’s all you can ask for in a familiar, isn’t it?",
    },
    {
        name: "- Colin Robinson",
        photoUrl: "https://media.vanityfair.com/photos/62c5b2a9b85d53c00e8a73e4/1:1/w_1136,h_1136,c_limit/what-we-do-in-the-shadows-mark-proksch.jpg",
        text:"Guillermo is... adequate. He’s there, doing his thing, I guess. It’s kind of fascinating how he hasn’t quit yet despite the long hours, lack of sleep, and the constant threat of death. His energy really fuels my... conversations.",
    },
    {
        name: "- The Guide",
        photoUrl: "src/The_Guide_Profile_S4.jpg",
        text:"Ah, Guillermo... such a dedicated familiar. There’s something quite... alluring about the way he throws himself into his duties. It’s almost as if he enjoys the danger. Perhaps one day, I’ll have to see just how far his devotion truly goes.",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 12000);
}