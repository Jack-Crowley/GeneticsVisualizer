ib.addEventListener("click", importNN)
exb.addEventListener("click", exportNN)

function importNN() {

}

function exportNN() {
    try {
        let bestMover = game.getBestAgent();
        let w = bestMover.brain.model.getWeights();
        const network = {
            name: "SampleGAV",
            weights: w
        }
        
        // TODO: write data into json file; error handle user not having run the simulation or being in test game mode

        console.log(network)

        let exp = JSON.stringify(network);
        fs.writeFile(`./JSONS/${network.name}.json`, json, 'utf8', callback);
    } catch (ex) {
        if (ex instanceof ReferenceError) {
            console.log("Game doesn't exist.")
        }
    }
}