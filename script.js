const hourE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const AmPmE1 = document.getElementById("AmPm");
const DateE1 = document.getElementById("mydate");
const MonthE1 = document.getElementById("mymonth");
const YearE1 = document.getElementById("myyear");
const dayno = document.getElementById("demo");

array =["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" ,"Saturday","Sunday"];



function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    let d = new Date().getDate();
    let mth = new Date().getMonth();
    let yr = new Date().getFullYear();
    let day = new Date().getDay();
    let dayname = (array[day-1]);



  //  if(h>12){
  //    h = h-12;
  //  }
   if(h>=12){
    ampm = "PM";
   }

   h = h<10 ?"0" + h :h;
   m = m<10 ?"0" + m :m;
   s = s<10 ?"0" + s :s;

   hourE1.innerText = h;
   minutesE1.innerText = m;
   secondsE1.innerText = s;
   AmPmE1.innerText = ampm ;
   DateE1.innerText = d ;
   MonthE1.innerText = mth+1 ;
   YearE1.innerText = yr ;
   dayno.innerHTML = dayname;
   setTimeout(() => {
     updateClock();
   }, 1000); 
}

updateClock(); 