const input_box = document.getElementById("input-box");
const list_con = document.getElementById("list-container")

function addTask(){
    if (input_box.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_con.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = '';
    saveData();
}

list_con.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list_con.innerHTML);
}

function showList(){
    list_con.innerHTML = localStorage.getItem("data");
}

showList();
