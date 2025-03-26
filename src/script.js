let tasks =[]
function ref(){
    let index = 0
    document.getElementById("tasks").innerHTML=""
    for (task of tasks){
        
        let content =`
                <div class="${tasks[index].aredone?'done':'task'}">
                    <div class="titletime">
                        <h3>${task.title}</h3>
                        <h4>${task.date}</h4>
                    </div>
                    <div class="events">
                        <button class="delet" onclick="delet(${index})">del</button>
                        <button id="btndone" class="${tasks[index].aredone?'not':'aredone'}" onclick="change(${index})">not</button>
                        <button class="mod" onclick="mod(${index})">mod</button>
                    </div>
                </div>`
        document.getElementById("tasks").innerHTML += content
        index++
    }
}

tasks= JSON.parse(localStorage.getItem("tasks"))
storage()
ref()

function storage() {
    let tostring = JSON.stringify(tasks)
    localStorage.setItem("tasks",tostring)
    
}
document.getElementById("addbtn").addEventListener("click",
    function() {
        let title = prompt("enter the title of task")
        let now = new Date()
        let date = now.getFullYear() +"/"+(now.getMonth()+1)+"/"+now.getDate()
        let task =  {
            title : title ,
            date : date  ,
            aredone : false
        }
        tasks.push(task)
        storage()
        ref()
    }
)

function delet(index){
    let confi = confirm(`are you sure for delete ${tasks[index].title} ?`)
    if (confi){
        tasks.splice(index,1)
        storage()
        ref()

    }
}
function mod(index){
    let newtitle = prompt("enter the new title of task")
    tasks[index].title=newtitle
    storage()
    ref()
}
function change(index){
    tasks[index].aredone= !tasks[index].aredone
    storage()
    ref()
}

