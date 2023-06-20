let json = {
    "name": "random",
    "player": {},
    "map": [],
    "actions": [],
    "timed": []
}

let err = "err"

let all = {
    "NAME": "str",
    "X": "num",
    "Y": "num",
    "AMOUNT": "num",
    "LENGTH": "num",
    "WIDTH": "num",
    "RADIUS": "num",
    "ON_COLLIDE_VALUE": "num",
    "TYPE": "str",
    "STROKE_COLOR": "hex",
    "FILL_COLOR": "hex",
    "ON_COLLIDE_MODE": "hex",
    "KEY": "num",
    "ACTION_MODE": "str",
    "X_POWER": "num",
    "Y_POWER": "num",
    "DELAY": "num",
    "MODE": "str",
    "VALUE": "num"
}

let allOptions = new Map(Object.entries(all))

let playerOption = ["X", "Y", "RADIUS", "STROKE_COLOR", "FILL_COLOR"]
let playerRequired = ["X", "Y", "RADIUS", "STROKE_COLOR"]

let shapeOption = ["X", "Y", "AMOUNT", "LENGTH", "WIDTH", "RADIUS", "ON_COLLIDE_VALUE", "TYPE", "STROKE_COLOR", "FILL_COLOR", "ON_COLLIDE_MODE", "NAME"]
let shapeRequired = ["X", "Y", "TYPE", "STROKE_COLOR", "NAME"]

let actionOption = ["KEY", "ACTION_MODE", "X_POWER", "Y_POWER"]
let actionRequired = ["KEY", "ACTION_MODE"]

let timedOption = ["DELAY", "MODE", "VALUE"]
let timedRequired = ["DELAY", "MODE", "VALUE"]

let requiredJSONHeaders = ["player","actions","map","timed"]

function isInteger(value) {
    if (parseInt(value, 10).toString() === value) {
        return true
    }
    return false;
}

function loadJSON() {
    json = {
        "name": "random",
        "player": {},
        "map": [],
        "actions": [],
        "timed": []
    }

    let children = []
    for (let i = 0; i < editor.children.length; i++) {
        children.push(editor.children[i])
    }
    children.forEach((child) => {
        let textArea = child.children[0].children[1].value.split("\n");
        switch (child.classList[1]) {
            case "player":
                playerStuff(textArea)
                break;
            case "shape":
                shapeStuff(textArea);
                break;
            case "action":
                actionStuff(textArea);
                break;
            case "timed":
                timedStuff(textArea);
                break;
        }
    })
}

function throwNumberErr(num, msg) {
    let blocksOnPage = document.querySelectorAll(".block")

}

function getFormatedNumber(num) {
    if (isInteger(num)) return num;
    if (!num.startsWith("random(")) return err;
    let sections = num.split(",")
    if (sections.length != 2) return err;
    let leftNum = sections[0].split("(")[1]
    if (!isInteger(leftNum) && leftNum.toLowerCase() != "width" && leftNum.toLowerCase() != "height") return err;
    let rightNum = sections[1].split(")")[0]
    if (!isInteger(rightNum) && rightNum.toLowerCase() != "width" && rightNum.toLowerCase() != "height") return err;
    return `random(${leftNum},${rightNum})`
}

function validateResults(line, vars) {
    if (line == "") return;
    let word = line.split(" ")
    if (word.length != 3) return err;
    if (word[0].toUpperCase() != "SET") return err;
    if (!allOptions.has(word[1].toUpperCase())) return err;

    let option = word[1];
    let param = word[2];

    switch (allOptions.get(option)) {
        case "num":
            let formattedNum = getFormatedNumber(param);
            if (formattedNum == err) return err;
            vars.set(option.toLowerCase(), formattedNum)
            break;
        case "str":
            vars.set(option.toLowerCase(), param)
            break;
        case "hex":
            if (!(param.startsWith("#") && (param.length == 7 || param.length == 9))) return err;
            vars.set(option.toLowerCase(), param)
            break;
    }
}

function playerStuff(text) {
    let vars = new Map();
    text.forEach((line) => {
        validateResults(line, vars);
    })

    playerRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) console.log(requiredOption); return err;
    })

    for (const [key, value] of vars.entries()) {
        json.player[key] = value
    }
}

function shapeStuff(text) {
    let vars = new Map();
    text.forEach((line) => {
        validateResults(line, vars);
    })
    shapeRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) console.log(requiredOption);
    })

    if (vars.get("type") == "circle") {
        if (!vars.has("radius")) return err;
    }
    else {
        if (!vars.has("length")) return err;
        if (!vars.has("width")) return err;
    }


    let tempJson = {}
    for (const [key, value] of vars.entries()) {
        tempJson[key] = value
    }

    json.map.push(tempJson)
}

function actionStuff(text) {
    let vars = new Map();
    text.forEach((line) => {
        validateResults(line, vars);
    })

    actionRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) return err;
    })

    if (vars.get("action_mode") != "move") return err;
    if (!(vars.has("x_power") || vars.has("y_power"))) return err;

    let tempJson = {}
    for (const [key, value] of vars.entries()) {
        tempJson[key] = value
    }

    json.actions.push(tempJson)
}

function timedStuff(text) {
    let vars = new Map();
    text.forEach((line) => {
        validateResults(line, vars);
    })

    timedRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) return err;
    })

    if (vars.get('mode') != "points") return err;

    let tempJson = {}
    for (const [key, value] of vars.entries()) {
        tempJson[key] = value
    }

    json.timed.push(tempJson)
}

function download() {
    loadJSON()
    let element = document.createElement('a');
    let text = JSON.stringify(json);

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "test.gv");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function handleFileSelect(evt) {
    var files = evt.target.files; // Get the selected files
    var file = files[0]; // Assuming only one file is selected

    if (file) {
        var reader = new FileReader();

            // Closure to capture the file information
        reader.onload = function (e) {
            var contents = e.target.result; // File contents
            // Call your desired JavaScript function with the file contents
            handleImport(contents);
        };

        // Read the file
        reader.readAsText(file);
    }
}

function createBlockWithCode(type,item) {
    createBlock(type, edit.childElementCount);
    
    let text = edit.children[edit.childElementCount-1].children[0].children[1]

    Object.keys(item).forEach((key) => {
        text.value+=`SET ${key.toUpperCase()} ${item[key]}\n`
    })

    autoExpand(text)
}

function handleImport(fileContents) {
    json = JSON.parse(fileContents);

    requiredJSONHeaders.forEach((header) => {
        if (!json.hasOwnProperty(header)) return err;
    })

    editor.innerHTML = ""
    createBlockWithCode("player",json.player)
    json.map.forEach((m) => {createBlockWithCode("shape", m)})
    json.actions.forEach((m) => {createBlockWithCode("actions", m)})
    json.timed.forEach((m) => {createBlockWithCode("timed", m)})
}

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function createGame(simulation, numAgents, bestMovers=[]) {
    loadJSON();
    let shapeNames = []
    json.map.forEach((m) => {shapeNames.push(m.name)})
    let playerShape = new Circle("Mover", null, new Position(Number(json.player.x), Number(json.player.y)), Number(json.player.radius), json.player.stroke_color,{canLeaveEdge:false, fillColor:json.player.hasOwnProperty("fill_color") ? json.player.fill_color : null})

    console.log(shapeNames)

    json.map.forEach((m) => {
        if (!shapeNames.includes(m.name)) {
            shapeNames.push(m.name)
        }
    })
    console.log("SHAPES:")
    console.log(shapeNames)
    game = new customGame(simulation, numAgents, null, playerShape, bestMovers, shapeNames);

    console.log("TEST")

    console.log(json.map)

    json.map.forEach((m) => {
        for (let i = 0; i < (m.hasOwnProperty("amount") ? Number(m.amount) : 1); i++) {
            let xPos = m.x;
            let yPos = m.y;
            game.movers.forEach((mover) => {
                let s = new Circle(m.name, mover.board, new Position(xPos, yPos), 5, m.stroke_color, {fillColor: m.hasOwnProperty("fill_color") ? m.fill_color : null, onCollide: () => {m.on_collide_mode == "points" ? mover.addScore(m.on_collide_value) : mover.endSimulation();mover.endSimulation()}})
    
                mover.board.addShape(s)
                s.collision = (mover.shape)
            })
        }
    })

    game.start()
}