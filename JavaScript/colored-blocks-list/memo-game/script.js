'use strict';

import { ColorSwitch as ColorSwitcher } from "./colorSwitch.js";

const blocksList = document.querySelector(".blocks-list");
const switchers = [];
const switchersCount = 4 * 4;

for (let i = 0; i <switchersCount; i++) {
    const element = document.createElement("div");
    element.classList.add("colored-block");
    const switcher = new ColorSwitcher(element,
        ["hsl(0, 85%, 80%)", "hsl(180, 85%, 80%)"],
        Math.floor(Math.random() * 2)
    );
    switchers.push(switcher)
    blocksList.appendChild(switcher.getElement());
}