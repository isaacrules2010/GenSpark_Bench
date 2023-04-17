import { Constants } from "../utils/Constants"

const GameLoop = (entities, { input, dispatch }) => {
    const { payload } = input.find(x => x.name === "onKeyPress") || {};

    if( payload ){
        console.log("You pressed: " + payload.key);
        const hero = entities["hero"];

        if(payload.key === "w"){
            hero.position[1] -= 1;
            console.log("moving up"); 
        }
        if(payload.key === "s"){
            hero.position[1] += 1;
            console.log("moving down");
        }
        if(payload.key === "a"){
            hero.position[0] -= 1;
            console.log("moving left");
        }
        if(payload.key === "d"){
            hero.position[0] += 1;
            console.log("moving right");
        }
        // hero.position[0] += 1;

        //forceUpdate();

        if(hero.position[0] > Constants.GRID_SIZE || 
            hero.position[1] > Constants.GRID_SIZE ||
            hero.position[0] < 0 ||
            hero.position[1] < 0){
            console.log("Map Edge Detected");
            // if(hero.position[0] > Constants.GRID_SIZE){
            //     hero.position[0] = Constants.GRID_SIZE
            // }
            // else if(hero.position[0] < 0)
            // {
            //     hero.position[0] = 0;
            // }
            // else if(hero.position[1] > Constants.GRID_SIZE){
            //     hero.position[1] = Constants.GRID_SIZE
            // }
            // else{
            //     hero.position[1] = 0
            // }
            dispatch({type: 'game-over'})
        }
        console.log(hero.position);
        dispatch({type: "update"});
    }

    return entities
}

export { GameLoop }