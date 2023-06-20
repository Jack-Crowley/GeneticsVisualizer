let json = {
    "name":"random",
    "player": {},
    "map":[],
    "actions":[],
    "timed":[]
}

let err = "err"

let playerOption = ["X","Y","RADIUS","STOKE_COLOR","FILL_COLOR"]
let playerRequired = ["X","Y","RADIUS","STOKE_COLOR"]

function loadJSON() {

    let children = []
    for (let i = 0; i < editor.children.length; i++) {
        children.push(editor.children[i])
    }
    children.forEach((child) => {
        let textArea = child.children[0].children[1].value.split("\n");
        switch(child.classList[1]) {
            case "player":
                playerStuff(textArea)
        }
    })
}

function getFormatedNumber(num) {
    if (typeof num == 'number') return num;
    if (!num.startsWith("random(")) return err;
    let sections = num.split(",")
    if (sections.length != 2) return err;
    let leftNum = sections[0].split("(")[1]
    if (typeof leftNum != 'number') return err;
    let rightNum = sections[1].split(")")[0]
    if (typeof rightNum != 'number') return err;
    return `random(${leftNum},${rightNum})`
}

function playerStuff(text) {    
    let vars = new Map();
    text.forEach((line) => {
        if (line == "") return;
        let word = line.split(" ")
        if (word.length != 3) return err;
        if (word[0].toUpperCase() != "SET") return err;
        if (playerOption.indexOf(word[1].toUpperCase()) == -1) return err;
        if (playerOption.indexOf(word[1].toUpperCase()) <= 2) {
            let formattedNum = getFormatedNumber(word[2]);
            if (formattedNum == err) return err;
            vars.put(word[1].toLowerCase(), formattedNum)
        }
    })

    playerRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) return err;
    })

    for (const [key, value] of vars.entries()) {
        json.player[key] = value
    }
}

function shapeStuff(text) {
    
}

function actionStuff(text) {
    
}

function timedStuff(text) {
    
}