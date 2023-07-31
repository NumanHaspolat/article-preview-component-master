const shareIcon = document.querySelector(".share-icon")
const buble = document.querySelector(".bubble")

shareIcon.addEventListener("click",()=>{
    buble.classList.toggle("hidden")
})