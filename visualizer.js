let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const gb = document.querySelector(".game");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const score = document.querySelector(".scoreAmount");
const addScore = (amount) => {score.textContent = Number(score.textContent)+amount}
const setScore = (amount) => {score.textContent = amount}
const getScore = () => {return score.textContent}

let board = null;