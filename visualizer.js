let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const gb = document.querySelector(".game");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const score = document.querySelector(".scoreAmount");
const table = document.querySelector(".agentTable tbody")
const agentStuff = document.querySelector(".agentStuff")
const simulationNum = document.querySelector(".simulationNum")
const frameTimeInput = document.querySelector("input.frameTime")
const frameTimeHeader = document.querySelector("span.frameTime")
const renderButton = document.querySelector(".render")
const getTimeBetweenFrames = () => {return frameTimeInput.value}
frameTimeInput.addEventListener("input", () => {frameTimeHeader.textContent = getTimeBetweenFrames()})
const setScore = (amount) => {score.textContent = amount}
const clearCanvas = () => {ctx.clearRect(0, 0, canvas.width, canvas.height);}