let json = {
    "name":"random",
    "player": {},
    "map":[],
    "actions":[],
    "timed":[]
}

let playerOption = ["X","Y","RADIUS","STOKE_COLOR","FILL_COLOR"]

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

function getFormatedNumber() {
    
}

function playerStuff(text) {    
    text.forEach((line) => {
        if (line == "") return;
        let word = line.split(" ")
        if (word.length != 3) return;
        if (word[0].toUpperCase() != "SET") return;
        if (playerOption.indexOf(word[1].toUpperCase()) == -1) return;

        if (playerOption.indexOf(word[1].toUpperCase()) <= 2) {

        }
    })
}

function shapeStuff(text) {
    
}

function actionStuff(text) {
    
}

function timedStuff(text) {
    
}