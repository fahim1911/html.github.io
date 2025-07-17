const btn1 = document.getElementById("showbtn");
const btn2 = document.getElementById("closebtn");
const bg = document.getElementById("overlay");
const box = document.getElementById("popup-box");

btn1.onclick = () =>{
    bg.style.display ="flex"
    box.style.animation = "zoomin 0.4s ease forwards "
}

btn2.onclick = () =>{
    box.style.animation ="zoomout 0.4s ease forwards";

    setTimeout(() => {
      bg.style.display ="none" ;
    }, 100);
}