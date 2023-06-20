ib.addEventListener("click", importNN)
exb.addEventListener("click", exportNN)

let savedModels = new Map();

function importNN() {
    // let toImport = prompt("What is the name of the model you want to import?")
    // try {
    //     end()
    // } catch (ex) {
    //     if (ex instanceof ReferenceError) {
    //         console.log("Game doesn't exist.")
    //     }
    // }
    // // fetch(`./JSONS/${toImport}.json`).then((response) => response.json()).then((json) => start(true, json));
    // let importedModel = savedModels.get(toImport);
    // console.log(importedModel)
    // start(true, importedModel);
}

function exportNN() {
    // try {
    //     let bestMover = game.getBestAgent();
    //     let w = bestMover.brain.model.getWeights();
    //     const network = {
    //         name: "SampleGAV",
    //         weights: w
    //     }
        
    //     // TODO: write data into json file; error handle user not having run the simulation or being in test game mode

    //     // console.log(network)

    //     let exp = JSON.stringify(network);
    //     console.log(exp)
    //     // writeFile(`./JSONS/${network.name}.json`, exp, 'utf8', callback);
    //     savedModels.set(`${network.name}`, exp)
    // } catch (ex) {
    //     if (ex instanceof ReferenceError) {
    //         console.log("Game doesn't exist.")
    //     }
    //     console.log(ex)
    // }
}