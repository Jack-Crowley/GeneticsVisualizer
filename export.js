
function exportNN() {
    let bestMover = game.getBestAgent();
    let w = bestMover.brain.model.getWeights();
    const network = {
        name: "SampleGAV",
        weights: w
    }
    // TODO: write data into json file; error handle user not having run the simulation or being in test game mode
}