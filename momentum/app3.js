const bd = document.querySelector("body");
if (window.innerWidth >= 1200) {
  bd.className = "large"
} 
else if (window.innerWidth < 1200 && window.innerWidth > 900) {
  bd.className = "medium"
} 
else {
  bd.className = "small"
}
function changeColorHandler(){
    const widthSize = window.innerWidth;
    const Large = "large";
    const Medium = "medium";
    const Small = "small";
  
    if (widthSize >= 1200) {
      bd.classList.add(Large);
      bd.classList.remove(Medium);
    } 
    else if (widthSize < 1200 && widthSize > 900) {
      bd.classList.add(Medium);
      bd.classList.remove(Small);
      bd.classList.remove(Large);
    } 
    else {
      bd.classList.add(Small);
      bd.classList.remove(Medium);
    }
}

window.addEventListener("resize", changeColorHandler);