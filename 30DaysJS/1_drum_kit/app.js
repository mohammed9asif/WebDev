let keys = document.querySelectorAll("kbd");

document.addEventListener("keydown",(event)=>{
    const keyName = event.key;
    
    keys.forEach((val)=>{
        if(keyName.toUpperCase()===val.innerText){
            let parent = val.parentElement;
            parent.classList.add("playing");
        }
    })
})

let keyDivs = document.querySelectorAll(".key");

function removeTransition(event){
    if(event.propertyName === "transform") 
        this.classList.remove("playing");

    
}
keyDivs.forEach(key=> key.addEventListener("transitionend",removeTransition));
