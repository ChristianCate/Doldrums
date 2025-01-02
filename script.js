let wood = 0
let plantFiber = 0
let tog = -1;
let intervalId
let gold = 0;

const lowerL = document.getElementById('bottom-skill-info l')
const lowerR = document.getElementById('bottom-skill-info r')




const skillInfo = () => {
    lowerL.innerHTML = `
<div>Speed: ${this.speed}</div>
<div>Rate: ${this.incrementValue}</div>
<div>XP: ${this.xp}</div>
`
lowerL.style.display = 'flex'
}

const bonusInfo = () => {
   lowerR.innerHTML =  `<div>Speed Bonus: ${this.speedBonus}</div>
<div>Rate Bonus: ${this.incrementValueBonus}</div>
<div>XP Bonus: ${this.xpBonus}</div>
`
lowerR.style.display = 'flex'
}

const scavenge = () => {
    let chance = Math.floor(Math.random() * 100)
    move()
    skillInfo()
    bonusInfo()
  
   
    if (chance < 60) {
        wood = wood + 1
    }
    else if (chance > 60 && chance < 95) {
        plantFiber++
    }
    else if (chance >= 95) {
        wood++
        plantFiber++
    }
    document.getElementById('wood').textContent = wood;
    document.getElementById('plant-fiber').textContent = plantFiber;
}

//interval toggle
const toggle = (func) => {    
    tog = tog * -1   
    if (tog > 0) {
        intervalId = setInterval(func, 1000)        
    }
    else if(tog < 0) {
        clearInterval(intervalId)
        intervalId = null
    }
}

/* menu functionality, thanks w3*/
const drop = document.getElementsByClassName('drop')

for (let i = 0; i < drop.length; i++) {
    drop[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block'){
            panel.style.display = 'none'
        }
        else {
            panel.style.display = 'block'
        }
    })
}

const openPage = (evt, name) => {
    

    const pageContent = document.getElementsByClassName('page-content');
    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = 'none' 
    }

    const pageLinks = document.getElementsByClassName('page-link')
    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].className = pageLinks[i].className.replace('active', '')
    }

    document.getElementById(name).style.display = 'block';
    evt.currentTarget.className += 'active';
}
// progress bar functionality

function move() {
    let lastUpdate = Date.now();
    const duration = 1000; // 1 second
    let progress = 0;
    const interval = setInterval(() => {
        const now = Date.now();
        const deltaTime = now - lastUpdate;
        lastUpdate = now;

        progress += deltaTime / duration;
        progress = Math.min(progress, 1); // Ensure it doesn't exceed 100%
        document.getElementById("thisprogress").style.width = `${progress * 100}%`;

        if (progress >= 1) {
            clearInterval(interval);
            
        }
    }, 16); // Run every ~16ms for smoother updates
}

const skillObj= [
    {
        id : 'scavenge',
        interval: 3,
        incrementValue: 1,
        xp: 12,
    }
]