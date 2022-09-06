let clock=()=>{
  let hh=document.getElementById('hour')  
  let mm=document.getElementById('munite')
  let ss=document.getElementById('second')
  let ampm=document.getElementById('ampm')

  let h=new Date().getHours()
  let m=new Date().getMinutes()
  let s=new Date().getSeconds()
  let am='AM'

  if(h>12){
    h=h-12;
    am='PM'

  }
  h=(h<10)?'0'+h:h;
  m=(m<10)?'0'+m:m;
  s=(s<10)?'0'+s:s;
  hh.innerHTML=`${h}`
  mm.innerHTML=`${m}`
  ss.innerHTML=`${s}`
  ampm.innerHTML=`${am}`
}
let interval=setInterval(clock,1000)

let cock=document.getElementsByClassName('clock')
console.log(cock[0])
cock[0].style.background='red'