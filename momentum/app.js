const h2 = document.querySelector("h2");

function handleTitleClick(){

    h2.classList.toggle("clicked");
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass)
    // }

    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor ==="blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
}
// function handleMouseEnter(){
//     h1.innerText = 'Mouse is here!';
// } 

// function handleMouseLeave(){
//     h1.innerText = 'Mouse is gone!';
// } 

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL GOOD");
// }

h2.addEventListener("click", handleTitleClick); // h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter", handleMouseEnter); //h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave); //h1.onmouseleave = handleMouseLeave;


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
