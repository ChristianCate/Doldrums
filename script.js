let wood = 0
let plantFiber = 0
let tog = -1;
let intervalId

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



const scavenge = () => {
    let chance = Math.floor(Math.random() * 100)
    
    move()
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
    let i = 0;
    if (i == 0) {
        i = 1;
        let elem = document.getElementById("thisprogress");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
        }
        }
    }
} 