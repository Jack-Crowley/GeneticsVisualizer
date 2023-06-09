let running = false;
const ib = document.querySelector(".importButton");
const exb = document.querySelector(".exportButton");
const sb = document.querySelector(".run");
const rb = document.querySelector(".reset");
const tb = document.querySelector(".test");
const pb = document.querySelector(".stop");
const plb = document.querySelector(".resume");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const score = document.querySelector(".scoreAmount");
const tableDiv = document.querySelector(".table")
const editor = document.querySelector(".editor")
const table = document.querySelector(".agentTable tbody")
const agentStuff = document.querySelector(".agentStuff")
const simulationNum = document.querySelector(".simulationNum")
const frameTimeInput = document.querySelector("input.frameTime")
const frameTimeHeader = document.querySelector("span.frameTime")
const renderButton = document.querySelector(".rCanvas")
const getTimeBetweenFrames = () => { return frameTimeInput.value }
frameTimeInput.addEventListener("input", () => { frameTimeHeader.textContent = getTimeBetweenFrames() })
const setScore = (amount) => { score.textContent = amount }
const clearCanvas = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); }
const frameSetting = document.querySelector("span.frameSetting")
frameSetting.textContent = "0";
const iterationSetting = document.querySelector("span.iterationSetting")
iterationSetting.textContent = "0";
const bestAgentSetting = document.querySelector("span.bestAgentSetting")
bestAgentSetting.textContent = "0";
const avgFrameSetting = document.querySelector("span.avgFrameSetting")
avgFrameSetting.textContent = "0";
const avgScoreSetting = document.querySelector("span.avgScoreSetting")
let paused = false;
avgScoreSetting.textContent = "0";
canvas.width = Number(window.getComputedStyle(canvas).getPropertyValue('width').split("px")[0])
canvas.height = Number(window.getComputedStyle(canvas).getPropertyValue('height').split("px")[0])

tableDiv.style.height = canvas.height + "px"

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
        eye.style.left = canvas.offsetLeft + (canvas.width / 2) - 150 / 2 + "px"
        eye.style.top = canvas.offsetTop + (canvas.height / 2) - 150 / 2 + "px"
    }
})

console.log(tf.getBackend())

function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
const modal = document.getElementById("createNew");

const btn = document.querySelector(".modal-button");

const span = document.querySelector(".close");
const cancel = document.querySelector(".close-modal")

cancel.onclick = function() {
    modal.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const select = document.getElementById("types");
const edit = document.querySelector(".editor");

const confirmBtn = document.querySelector(".confirm-modal");
confirmBtn.addEventListener("click", () => {
    modal.style.display = "none";
    createBlock(select.value,edit.childElementCount);
})

function createBlock(type, num) {
    let block = document.createElement("div")
    block.classList.add("block")
    block.classList.add(type)
    block.classList.add(num)

    let text = document.createElement("div")
    text.classList.add("text")

    block.appendChild(text)

    let header = document.createElement("h1");
    header.textContent = type.toUpperCase();

    let textArea = document.createElement("textarea")
    textArea.setAttribute("oninput","autoExpand(this)")

    text.appendChild(header);
    text.appendChild(textArea)

    editor.appendChild(block)

    block.addEventListener("contextmenu", () => {
        block.removeChild(block.firstChild);
        block.remove();
    })

}
