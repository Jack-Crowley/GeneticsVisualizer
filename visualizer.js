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
const frameSetting = document.querySelector("span.frameSetting")
frameSetting.textContent = "0";
const iterationSetting = document.querySelector("span.iterationSetting")
iterationSetting.textContent = "0";
const bestAgentSetting = document.querySelector("span.bestAgentSetting")
bestAgentSetting.textContent = "0";
const avgFrameSetting = document.querySelector("span.avgFrameSetting")
avgFrameSetting.textContent = "0";
const avgScoreSetting = document.querySelector("span.avgScoreSetting")
avgScoreSetting.textContent = "0";
canvas.width = Number(window.getComputedStyle(canvas).getPropertyValue('width').split("px")[0])
canvas.height = Number(window.getComputedStyle(canvas).getPropertyValue('height').split("px")[0])

ctx.beginPath();
ctx.arc(1, 1, 10, 0, 2 * Math.PI);
ctx.lineWidth = 3;
ctx.strokeStyle = "#0000000";
ctx.stroke();
ctx.closePath();
