const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const ampmEl= document.getElementById("ampm");
function updateClock() {
    var h= new Date().getHours();
    var m= new Date().getMinutes();
    var s= new Date().getSeconds();
    var ap= "AM";
    if(h==0)
    {
        h=12;
    }
    else if(h>12) {
        h=h-12;
        ap="PM";
    }
    h=h<10? "0" + h: h;
    m=m<10? "0" + m: m;
    s=s<10? "0" + s: s;
    hoursEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;
    ampmEl.innerText=ap;
    let t = setTimeout(function(){ updateClock() }, 1000);
}
updateClock();