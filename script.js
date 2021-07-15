const day=document.getElementById('idday');
const hour=document.getElementById('idhour');
const minute=document.getElementById('idmin');
const second=document.getElementById('idsec');

let newyeardate=new Date("1 jan 2022")
// console.log(Math.floor(((newyeardate-currentdate)/1000)/60))
const newyear = () =>{
    let currentdate=new Date();
    const totalsec=Math.floor((newyeardate-currentdate)/1000);
    const leftday=Math.floor(totalsec/86400);
    const lefthour=Math.floor(((totalsec)/3600)%24);
    const leftmin=Math.floor(((totalsec)/60)%60);
    const leftsec=Math.floor((totalsec)%60);
    // console.log(` ${leftday} ${lefthour} ${leftmin} ${leftsec}`);

    day.innerHTML=leftday;
    hour.innerHTML=lefthour;
    minute.innerHTML=leftmin;
    if(leftsec<10){
        second.innerHTML=(`0${leftsec}`);
    }
    else{
        second.innerHTML=leftsec;
    }
}

newyear();

setInterval(newyear,1000)