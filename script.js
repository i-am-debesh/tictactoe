const btnElements = document.querySelectorAll('.row');
const commentElement = document.querySelector('.comment-box');
const resetbtnElement = document.querySelector('.reset-btn');
const crossPointElement = document.querySelector('.points-c');
const tickPointElement = document.querySelector('.points-t');
const clearDataElement = document.querySelector('.clear-btn');
let nextMove = 0;
let steps = 9;
let disableClick = 0;
let crossPoint = 0;
let tickPoint = 0;

const btn11 = document.querySelector('.row11');
const btn12 = document.querySelector('.row12');
const btn13 = document.querySelector('.row13');
const btn21 = document.querySelector('.row21');
const btn22 = document.querySelector('.row22');
const btn23 = document.querySelector('.row23');
const btn31 = document.querySelector('.row31');
const btn32 = document.querySelector('.row32');
const btn33 = document.querySelector('.row33');
let soundAllowed = 1;
const clickTone = new Audio('tones/click.mp3');
const gameOverTone = new Audio('tones/gameOver.mp3');
const winTone = new Audio('tones/win.wav');
function playSound(audio) {
    if(soundAllowed === 1) {
        audio.play();
    }
}

function isSame(v1,v2,v3) {
    if(v1 != '') {
        if(v1 === v2 && v2 === v3) {
            v1 = `30`
            return 1;
        }else{
            return 0;
        }
    }
    
}
function setColor(v1,v2,v3) {
    v1.classList.add('setbg');
    v2.classList.add('setbg');
    v3.classList.add('setbg');
    setTimeout(() => {
        v1.classList.remove('setbg');
        v2.classList.remove('setbg');
        v3.classList.remove('setbg');
    }, 2000);
    
    
}
function checkTriplets() {
    if(isSame(btn11.innerHTML,btn12.innerHTML,btn13.innerHTML)) {
        setColor(btn11,btn12,btn13);
        disableClick=1;
        return 1;
    }else if(isSame(btn21.innerHTML,btn22.innerHTML,btn23.innerHTML)) {
        setColor(btn21,btn22,btn23);
        disableClick =1;
        return 1;
    }else if(isSame(btn31.innerHTML,btn32.innerHTML,btn33.innerHTML)) {
        setColor(btn31,btn32,btn33);
        disableClick=1;
        return 1;
    }else if(isSame(btn11.innerHTML,btn21.innerHTML,btn31.innerHTML)) {
        setColor(btn11,btn21,btn31);
        disableClick=1;
        return 1;
    }else if(isSame(btn12.innerHTML,btn22.innerHTML,btn32.innerHTML)) {
        setColor(btn12,btn22,btn32);
        disableClick=1;
        return 1;
    }else if(isSame(btn13.innerHTML,btn23.innerHTML,btn33.innerHTML)) {
        setColor(btn13,btn23,btn33);
        disableClick =1;
        return 1;
    }else if(isSame(btn11.innerHTML,btn22.innerHTML,btn33.innerHTML)) {
        setColor(btn11,btn22,btn33);
        disableClick =1;
        return 1;
    }else if(isSame(btn13.innerHTML, btn22.innerHTML, btn31.innerHTML)) {
        setColor(btn13,btn22,btn31);
        disableClick =1;
        return 1;
    }

    return 0;
}

btnElements.forEach(element => {
    element.addEventListener('click',() =>{
        
        let winner = '';
        playSound(clickTone);
        if(element.innerHTML === '' && disableClick != 1) {
            if(nextMove%2 == 0) {
                element.innerHTML = `<img src="images/cross.png" alt="" width="30px" style="margin-top: 9px; margin-left: 9px;"></img>`;
                winner = 'cross';
                
            }else if(nextMove%2 == 1) {
                element.innerHTML = `<img src="images/tick.png" alt="" width="30px" style="margin-top: 9px; margin-left: 9px;"></img>`;
                winner = 'tick';
                
            }
            nextMove++;
            steps--;
            if(checkTriplets()) {
                playSound(winTone);
                commentElement.innerHTML = `<p>${winner} Is Winner</p>`;
                increasePoint(winner);
                nextMove = 0;
                steps = 9;
            }else if(steps === 0 && !checkTriplets()) {
                playSound(gameOverTone);
                commentElement.innerHTML = `<p style="color:white;">It's Draw</p>`;
                nextMove = 0;
                steps = 9;
                reset();

            } 
        }
        
    });
});

//resetBtn code::
function reset() {
        resetbtnElement.addEventListener('click',()=>{
        nextMove = 0;
        btnElements.forEach(element=>{
            element.innerHTML = "";
        });
        disableClick = 0;
        commentElement.innerHTML = '';
    });
    
}

resetbtnElement.addEventListener('click' ,()=>{
    reset();
});
//////////////////////////////////


//////Sound Btn code::
const circleBtn = document.querySelector('.circle');
const soundElement = document.querySelector('.sound-btn');
let isClicked = 0;
soundElement.addEventListener('click', ()=>{
    if(isClicked === 0) {
        circleBtn.innerHTML = `<p class="status">off</p>`;
        soundElement.classList.add('sound-btn-off');
        isClicked = 1;
        soundAllowed = 0;
    }else {
        circleBtn.innerHTML = `<p class="status">on</p>`
        soundElement.classList.remove('sound-btn-off');
        isClicked = 0;
        soundAllowed = 1;
    }
});

///pointsCalculation::::::::::

crossPoint = Number(crossPointElement.innerHTML);
tickPoint = Number(tickPointElement.innerHTML);

function increasePoint(winner) {
    if(winner === 'cross') {
        crossPoint += 1;
        crossPointElement.innerHTML = crossPoint;
    }else if(winner === 'tick') {
        tickPoint += 1;
        tickPointElement.innerHTML = tickPoint;
    }
}
function clearData() {
    crossPointElement.innerHTML = 0;
    tickPointElement.innerHTML = 0;
    
}

clearDataElement.addEventListener('click', ()=>{
    clearData();
});


