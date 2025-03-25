import emptyImage from '../assets/icon-empty.svg';
import { inputElement, mainElement, taskListElement } from "./elements";
import { initTaskListeners } from "./eventListeners";

export const toggleDarkMode = () => {
    mainElement.classList.toggle("App--isDark");// if 
    saveToLocalDB("darkModeFlag", mainElement?.classList.contains("App--isDark"));
    //check if App--isDark in classes and return true or false save value in DB
}

// fetchData from localStorage
export const fetchData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false; // ? make shor isnt empty
}

export const renderTaskList = (tasks) => {
    let taskList = '';// add tasks element here


    tasks.forEach(task => {
        taskList += `<li class="TaskList__taskContent${task.isCompleted ? " TaskList__taskContent--isActive" : ""
            }">
      <div class="TaskList__checkbox" tabindex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark" />
      </div>
      <div class="TaskList__valueContent">
        <p class="TaskList__value">
          ${task.value}
        </p>
        <img src="./assets/icon-basket.svg"
             class="TaskList__deleteIcon"
             alt="basket-icon"
        />
      </div>
    </li>`
    });

    taskListElement.innerHTML = taskList;
    inputElement.value = "";
};

export const deleteTask = (e, index) => {
    const answer = confirm("هل أنت متأكد من حذف المهمة؟");
    if (answer === false) return;

    const tasks = fetchData("tasks");

    tasks.splice(index, 1);
    saveToLocalDB("tasks", tasks);
    initTaskList(tasks); //Update UI 
}

//Update UI for Completed tasks and save in DB
export const toggleTask = (e, index) => {
    const tasks = fetchData("tasks")
    //give parent of checkbox new class or remove it (Toggle)
    e.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive");
    tasks[index].isCompleted = !tasks[index].isCompleted; //change value in obj at arr ture to false || false to true.
    saveToLocalDB("tasks", tasks);
}

export const addTask = (e) => {
    e.preventDefault();

    const taskValue = inputElement.value;

    if (!taskValue.trim()) return; 

    const task = {
        value: taskValue,
        isCompleted: false,
    }

    const tasks = fetchData("tasks") || [];//if false return []

    tasks.push(task);
    saveToLocalDB("tasks", tasks);

    //send tasks to UI 
    initTaskList(tasks);
};

// send data to local storege
export const saveToLocalDB = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))// (JSON.stringify)convert JSON to string
}

//[ ]Update UI evry time we add,remove,complete or change theme (DRY) 
export const initTaskList = (tasks) => {
    if (tasks?.length) { // if we have tasks in DB
        renderTaskList(tasks); //Add new task to UI
        initTaskListeners(); // to check event remove,complete and Update UI
    } else {
        renderEmptyState();
    }

}

//check theme and tasks from DB and show it in UI
export const initDataOnStartup = () => {
    fetchData("darkModeFlag") && toggleDarkMode(); //check if darkModeFlag true cal toogle and change theme and save in DB
    initTaskList(fetchData("tasks")); //get task and show it in UI 
};

export const renderEmptyState = () => {
    taskListElement.innerHTML = `<li class='EmptyList'>
      <img class='EmptyList__img' src="${emptyImage}" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>`;
};
