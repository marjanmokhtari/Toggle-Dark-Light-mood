const _bg= document.querySelector('.container')
const toggle=document.querySelector('.toggle')
toggle.addEventListener("click",()=>toggle.classList.toggle("active"))

toggle.addEventListener("click",()=>_bg.classList.toggle("dark"))
