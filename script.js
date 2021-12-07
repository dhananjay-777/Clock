
  let hour=document.querySelector(".hour");
  let minute=document.querySelector(".minute");
  let second=document.querySelector(".second");

  let settime=()=>{
      let date=new Date();
      hour.innerHTML=date.getHours();
      minute.innerHTML=date.getMinutes();
      second.innerHTML=date.getSeconds();
  }
  //settime();
  setInterval(settime,500);
//    let date=new Date();
//    console.log(date.getHours());
