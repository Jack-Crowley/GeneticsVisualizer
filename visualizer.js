let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const gb = document.querySelector(".game");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const score = document.querySelector(".scoreAmount");
const tableDiv = document.querySelector(".table")
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

tableDiv.style.height = canvas.height+"px"

const showFrame = document.querySelector(".rFrames")
showFrame.addEventListener("change", () => {
    if (frameSetting.parentElement.style.display === "none") frameSetting.parentElement.style.display = "block";
    else frameSetting.parentElement.style.display = "none";
})

const showIterations = document.querySelector(".rIterations")
showIterations.addEventListener("change", () => {
    if (iterationSetting.parentElement.style.display === "none") iterationSetting.parentElement.style.display = "block";
    else iterationSetting.parentElement.style.display = "none";
})

const showAvgFrame = document.querySelector(".rAvgFrames")
showAvgFrame.addEventListener("change", () => {
    if (avgFrameSetting.parentElement.style.display === "none") avgFrameSetting.parentElement.style.display = "block";
    else avgFrameSetting.parentElement.style.display = "none";
})

const showBestAgent = document.querySelector(".rBestAgent")
showBestAgent.addEventListener("change", () => {
    if (bestAgentSetting.parentElement.style.display === "none") bestAgentSetting.parentElement.style.display = "block";
    else bestAgentSetting.parentElement.style.display = "none";
})

const showAvgScore = document.querySelector(".rAvgScore")
showAvgScore.addEventListener("change", () => {
    console.log(avgScoreSetting.parentElement.style.display)
    if (avgScoreSetting.parentElement.style.display === "none") avgScoreSetting.parentElement.style.display = "block";
    else avgScoreSetting.parentElement.style.display = "none";
})
const renderCanvas = document.querySelector(".rCanvas")
const eye = document.querySelector(".eye")

console.log(eye.style.width)

renderCanvas.addEventListener('click', () => {
    if (renderCanvas.checked) {
        eye.style.display = "none"
        canvas.classList.remove("disabled")
    }
    else {
        eye.style.display = "block"
        canvas.classList.add("disabled")
        eye.style.left = canvas.offsetLeft+(canvas.width/2)-150/2+"px"
        eye.style.top = canvas.offsetTop+(canvas.height/2)-150/2+"px"
    }
})

console.log(tf.getBackend())

function autoExpand(textarea) {
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
}