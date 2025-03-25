import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils";
import { darkThemeToggleElement, getCheckBoxElements, getdeleteIcons, taskListElement, taskListlink, taskSearchBarButton } from "./elements";



//watch new edits in tasks and Update in UI 
export const initTaskListeners = () => {
    //
    getdeleteIcons().forEach((icon, index) => {
        icon.addEventListener("click", (e) => deleteTask(e, index))
    })
    getCheckBoxElements().forEach((box, index) => {
        box.addEventListener("click", (e) => toggleTask(e, index));//index of box
        box.addEventListener("keydown", (e) => e.key === "Enter" && toggleTask(e, index));
    });
};

//watch events and toggles in UI 
export const initListeners = () => {
    taskListlink.addEventListener("click", () => {
        taskListElement.classList.toggle("TaskList__list--hideCompleted");
        taskListlink.classList.toggle("TaskList__link--isActive");
    });
    
    taskSearchBarButton.addEventListener("click", addTask);
    darkThemeToggleElement.addEventListener("click", toggleDarkMode);//change theme
}