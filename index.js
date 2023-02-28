const markAll = document.querySelector(".mark");
const container = document.querySelectorAll(".commentContainer")
const unreadMsg = document.querySelector(".num")
const numArr = [...document.querySelectorAll(".unread")]
const text = document.getElementById("text")
markAll.addEventListener("click", ()=>{
    container.forEach(ele=>{
        ele.classList.remove("unread")
        unreadMsg.innerHTML = 0
    })
})

container.forEach(ele=>{
    ele.addEventListener("click", function showTxt(){
        if(this.className.includes("unread")){
        this.classList.remove("unread")
            unreadMsg.innerHTML -= 1;
            if(unreadMsg.innerHTML === 0){
                return;
            }
        }
        let children = this.children[1]
        if (children.contains(text)){
            text.classList.toggle("show")
        }
    })
    })
    unreadMsg.innerHTML = numArr.length;