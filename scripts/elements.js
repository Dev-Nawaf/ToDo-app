export const darkThemeToggleElement = document.querySelector(".DarkThemeToggle");
export const mainElement = document.querySelector(".App");
export const taskSearchBarButton = document.querySelector(".TaskSearchBar__button");
export const inputElement = document.querySelector(".TaskSearchBar__input");
export const taskListElement = document.querySelector(".TaskList__list");
export const taskListlink = document.querySelector(".TaskList__link");

//we make this func to be icon can call delete any time not just 1 time (if we dont well return false from begginer)
export const getdeleteIcons = () => document.querySelectorAll(".TaskList__deleteIcon");

export const getCheckBoxElements = () => document.querySelectorAll(".TaskList__checkbox");