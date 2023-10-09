const container = document.getElementById("container");
const con = document.createElement("ul");
let taskArray = [];

const createDivTask = (task) => {
    const listItem = document.createElement("li");

    container.appendChild(con);
    con.appendChild(listItem);
    con.setAttribute("class", "list-group");
    listItem.setAttribute("class", "list-group-item");

    const box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    
    const text = document.createElement("div");

    const buttonsCon = document.createElement("div");
    const del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("value", "Delete");
    const edit = document.createElement("input");
    edit.setAttribute("type", "button");
    edit.setAttribute("value", "Edit");
    buttonsCon.appendChild(del);
    buttonsCon.appendChild(edit);

    listItem.appendChild(box);
    listItem.appendChild(text);
    listItem.appendChild(buttonsCon);

    text.textContent = task;

    box.addEventListener("change", () => {
        if (box.checked) {
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
    });

    if (box.checked) {
        text.style.textDecoration = "line-through";
    } else {
        text.style.textDecoration = "none";
    }

    del.addEventListener("click", () => {
        container.removeChild(con);
    });

    edit.addEventListener("click", () => {
        text.textContent = document.getElementById("task").value;
        document.getElementById("task").value = '';
    });

    //BOOTSTRAP
    listItem.setAttribute("class", "d-flex justify-content-between align-items-center mt-2 border rounded-1 p-2");
    del.setAttribute("class", "btn btn-danger mx-1");
    edit.setAttribute("class", "btn btn-primary");
};

const createTask = () => {
    let taskValue = document.getElementById("task").value;
    taskArray.push(taskValue);
    createDivTask(taskValue);

    document.getElementById("task").value = '';

    return false;
};