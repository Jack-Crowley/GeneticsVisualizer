let json = {
    "name": "random",
    "player": {},
    "map": [],
    "actions": [],
    "timed": []
}

let err = "err"

let all = {
    "NAME":"str",
    "X":"num",
    "Y":"num",
    "AMOUNT":"num",
    "LENGTH":"num",
    "WIDTH":"num",
    "RADIUS":"num",
    "ON_COLLIDE_VALUE":"num",
    "TYPE":"str",
    "STROKE_COLOR":"hex",
    "FILL_COLOR":"hex",
    "ON_COLLIDE_MODE":"hex"
}

let allOptions = new Map(Object.entries(all))

let playerOption = ["X", "Y", "RADIUS", "STROKE_COLOR", "FILL_COLOR"]
let playerRequired = ["X", "Y", "RADIUS", "STROKE_COLOR"]

let shapeOption = ["X","Y","AMOUNT","LENGTH","WIDTH","RADIUS","ON_COLLIDE_VALUE","TYPE","STROKE_COLOR","FILL_COLOR","ON_COLLIDE_MODE","NAME"]
let shapeRequired = ["X", "Y", "TYPE", "STROKE_COLOR","NAME"]

function isInteger(value) {
    if (parseInt(value, 10).toString() === value) {
        return true
    }
    return false;
}

function loadJSON() {

    let children = []
    for (let i = 0; i < editor.children.length; i++) {
        children.push(editor.children[i])
    }
    children.forEach((child) => {
        let textArea = child.children[0].children[1].value.split("\n");
        switch (child.classList[1]) {
            case "player":
                playerStuff(textArea)
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
    if (!isInteger(leftNum)) return err;
    let rightNum = sections[1].split(")")[0]
    if (!isInteger(rightNum)) return err;
    return `random(${leftNum},${rightNum})`
}

function validateResults(line) {
    if (line == "") return;
    let word = line.split(" ")
    if (word.length != 3) return err;
    if (word[0].toUpperCase() != "SET") return err;
    if (!playerOption.has(word[1].toUpperCase())) return err;

    let option = word[1];
    let param = word[2];

    switch (allOptions.get(option)) {
        case "num":
            let formattedNum = getFormatedNumber(param);
            if (formattedNum == err) return err;
            return formattedNum
        case "str":
            return param
        case "hex":
            if (!(param.startsWith("#") && (param.length == 7 || param.length == 9))) return err;
            return param;
    }
}

function playerStuff(text) {
    let vars = new Map();
    text.forEach((line) => {
        if (validateResults(word[1], word[2])) {
            vars.set(word[1].toLowerCase(), word[2])
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
    let vars = new Map();
    text.forEach((line) => {
        if (line == "") return;
        let word = line.split(" ")
        if (word.length != 3) return err;
        if (word[0].toUpperCase() != "SET") return err;
        if (shapeOption.indexOf(word[1].toUpperCase()) == -1) return err;
        if (shapeOption.indexOf(word[1].toUpperCase()) <= 5) {
            let formattedNum = getFormatedNumber(word[2]);
            console.log(formattedNum)
            if (formattedNum == err) return err;
            vars.set(word[1].toLowerCase(), formattedNum)
            return
        }
        if (!(word[2].startsWith("#") && (word[2].length == 7 || word[2].length == 9))) return err;
        vars.set(word[1].toLowerCase(), word[2])
    })

    playerRequired.forEach((requiredOption) => {
        if (!vars.has(requiredOption.toLowerCase())) return err;
    })

    for (const [key, value] of vars.entries()) {
        json.player[key] = value
    }
}

function actionStuff(text) {

}

function timedStuff(text) {

}