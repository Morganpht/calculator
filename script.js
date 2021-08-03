const screen = document.querySelector("#screen");
const button = document.querySelector("button");

const width = button.getBoundingClientRect().width;

screen.style.cssText = `width: ${width*3+8}px`;