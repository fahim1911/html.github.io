
  const btn1 = document.getElementById("showbtn");
  const btn2 = document.getElementById("closebtn");
  const bg = document.getElementById("overlay");
  const box = document.getElementById("popup-box");

  // পপআপ খোলার জন্য
  btn1.onclick = () => {
    bg.style.display = "flex"; // CSS এ .overlay এর display: none আছে, তাই এটিকে 'flex' করছি
    box.style.animation = "zoomin 0.3s ease forwards ";
  };

  // পপআপ বন্ধ করার জন্য
  btn2.onclick = () => {
    box.style.animation = "zoomout 0.3s ease forwards";

    // অ্যানিমেশন শেষ হওয়ার পর overlay লুকিয়ে ফেলার জন্য
    setTimeout(() => {
      bg.style.display = "none";
    }, 380); // অ্যানিমেশনের সময় (0.4s = 400ms) থেকে সামান্য কম, যাতে মসৃণভাবে অদৃশ্য হয়
  };

  // overlay এর বাইরে ক্লিক করলে পপআপ বন্ধ করার জন্য (যদি এই কার্যকারিতা চান)
  bg.addEventListener("click", function (event) {
    // যদি ক্লিকটি সরাসরি overlay-এর উপর হয়, popup-box-এর উপর না
    if (event.target === bg) {
      box.style.animation = "zoomout 0.4s ease forwards";
      setTimeout(() => {
        bg.style.display = "none";
      }, 380);
    }
  });

  // Smooth animation জন্য এলিমেন্টগুলো সিলেক্ট করো
  const animatedelements = document.querySelectorAll(".animate");

  animatedelements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 300); // প্রতি এলিমেন্টে 0.3 সেকেন্ড পরে দেখাবে
  });
