const btnElements = document.querySelectorAll('.row');
const commentElement = document.querySelector('.comment-box');
const resetbtnElement = document.querySelector('.reset-btn');
let nextMove = 0;
let steps = 9;
let disableClick = 0;
const winner = "";
const btn11 = document.querySelector('.row11');
const btn12 = document.querySelector('.row12');
const btn13 = document.querySelector('.row13');
const btn21 = document.querySelector('.row21');
const btn22 = document.querySelector('.row22');
const btn23 = document.querySelector('.row23');
const btn31 = document.querySelector('.row31');
const btn32 = document.querySelector('.row32');
const btn33 = document.querySelector('.row33');
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
    }, 1000);
    
    
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
        
        
        if(nextMove%2 === 0 && element.innerHTML === '' && disableClick !=1) {
            element.innerHTML = `<img src="cross.png" alt="" width="30px" style="margin-top: 9px; margin-left: 9px;"></img>`;
            nextMove++;
            steps--;
            if(checkTriplets()) {
                // console.log('cross is winner');
                commentElement.innerHTML = "<p>Cross Is Winner</p>";
                nextMove = 0;
            }
            else if(steps === 0) {
                // console.log("It's a Draw");
            }
            
            
        }else if(nextMove%2 === 1 && element.innerHTML==='' && disableClick != 1) {
            element.innerHTML = `<img src="tick.png" alt="" width="30px" style="margin-top: 9px; margin-left: 9px;"></img>`;
            nextMove++;
            steps--;
            if(checkTriplets()) {
                // console.log('tick is winner');
                commentElement.innerHTML = "<p>Tick Is Winner</p>";
                nextMove = 0;
            }
            else if(steps === 0) {
                // console.log("It's a Draw");
            } 
                
        }
        
        
    });
});
resetbtnElement.addEventListener('click',()=>{
    nextMove = 0;
    btnElements.forEach(element=>{
        element.innerHTML = "";
    });
    disableClick = 0;
    commentElement.innerHTML = '';
});