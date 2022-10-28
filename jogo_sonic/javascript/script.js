/*let quad1 = document.getElementById("q1");



quad1.addEventListener("mouseover", ()=>{
    quad1.style.backgroundColor = "#fff"
})
quad1.addEventListener("mouseout",()=>{
    quad1.style.backgroundColor = ""
})
quad1.addEventListener("click", ()=>{
    quad1.style.border = "2px solid black" 
})
quad1.addEventListener("mousemove", ()=>{
    quad1.className = "ipp"
})*/

/*const god = document.getElementById("meclica");
const cab = document.getElementById("cab");

god.addEventListener("click", () => {
    if(cab.classList){
        cab.classList.toggle("open")
        
    }
})*/

const sonic = document.querySelector('.sonic');
const robot = document.querySelector('.robotnik');

function jump(){
    
    sonic.classList.add('jump')
    setTimeout(() =>{
        sonic.classList.remove('jump')
    }, 500)    
}


const loop = setInterval(() => {
        const robotPosition = robot.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");
        const death = new Audio('./audio/game-over-song.mp3')
        
        if(robotPosition <= 130 && robotPosition > 0 && sonicPosition < 130){
            robot.style.animation = 'none'
            robot.style.left = `${robotPosition}px`
            
            sonic.style.animation = 'none'
            sonic.style.bottom = `${sonicPosition}px`

            sonic.src = './images/sonic-game-over.png';
            sonic.style.width = '150px'

            death.play()
            clearInterval(loop);
        }
    }, 10)

document.addEventListener('keyup', jump)