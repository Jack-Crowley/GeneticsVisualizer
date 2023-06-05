let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const gb = document.querySelector(".game");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const score = document.querySelector(".scoreAmount");
const table = document.querySelector(".agentTable tbody")
const setScore = (amount) => {score.textContent = amount}