const addBtn = document.querySelector(".boxAdd__button")

const taskInput = document.querySelector(".boxAdd__input")

const boxTasks = document.querySelector(".boxCards")


let arrTasks = [];
//addEventListener - несколько действий при клике
if(localStorage.getItem("arrTasks")){
    arrTasks = JSON.parse(localStorage.getItem("arrTasks"))
}

const updateLocal = () => {
    localStorage.setItem ("arrTask", JSON.stringify(arrTasks))
}


addBtn.addEventListener('click', function(){
    arrTasks.push({
        text: taskInput.value,
        check: false
    })
    //   console.log(arrTasks);

    updateLocal()

    displayHtml()

    taskInput.value = ""
})

const displayHtml = () => {
    boxTasks.innerHTML = ""
    arrTasks.forEach((item, index) => {
        boxTasks.innerHTML += `<div class="boxCards__card ${item.check ? "boxCards__card-completed" : ""}"> 
        <p class="boxCards__description">${item.text}</p> 
        <div>
            <input type="checkbox" onclick = "checkTask(${index})" ${item.check ? "checked" : ""} class="boxCards__checkbox"> 
            <button onclick = "checkRem(${index})" class="boxCards__button">Delete</button> 
        </div> 
    </div>
    `;
});
}
displayHtml()
//check -  

const checkTask = (index) =>{
    arrTasks[index].check = !arrTasks[index].check
    updateLocal()
    displayHtml()
}


const checkRem = (index) =>{
     arrTasks.splice(index,1)   
     updateLocal()
    displayHtml()
}