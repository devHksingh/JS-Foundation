const hrsEl = document.querySelector('.hrs')
const minsEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const miniSecEl = document.querySelector('.min-sec')


console.log(hrsEl)

// hrsEl.textContent="asd"
let minSec =0 
let sec =0 
let min =0 
let hrs =0 

function clock(){
    
    
        
        // console.log(minSec);
        const minSecTimer =setInterval(()=>{
            minSec+=1
            miniSecEl.textContent=minSec
            if(minSec===100){
                sec+=1
            secEl.textContent=sec
            minSec=0
            }
            if(sec===60){
                min+=1
            minsEl.textContent=min
            sec=0
            }
            if(min===60){
                hrs+=1
            hrsEl.textContent=hrs
            min=0
            }
        },10)
        
    

}

clock()