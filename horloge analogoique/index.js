let heu = document.getElementById("heu");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(function(){
    let jour = new Date();
    let hh = jour.getHours()*30;
    let mm = jour.getMinutes() * 6;
    let ss = jour.getSeconds() * 6;

    heu.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
})

// digital code
setInterval(()=>{
    let heure = document.getElementById("hour")
let minutes = document.getElementById("minutes")
let secondes = document.getElementById("seconds")
let ampm = document.getElementById("ampm")

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am =(h>12)? "PM" : "AM" 

h = (h<10)? "0"+h :h
m = (m<10)? "0"+m :m
s = (s<10)? "0"+s :s

if(h>12){
    h = h-12;
}
heure.innerHTML=h;
minutes.innerHTML = m;
secondes.innerHTML=s;
ampm=am;

})


