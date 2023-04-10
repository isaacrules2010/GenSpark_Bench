
// //Grabs playerstate from the dropdown and changes playerState to selected option
// let playerState = 'idle';
// const dropDown = document.getElementById('animations');
// dropDown.addEventListener('change', function(e){
//     playerState = e.target.value;
// });

//Creates the canvas where the sprite will be drawn
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// //assigns playerImage src and expected height and width 
// const playerImage = new Image();
// playerImage.src = 'src\Components\Game\sprites\shadow_dog.png';
// const spriteWidth = 575; //totalpixels/columns
// const spriteHeight = 523; //totalpixels/rows

// //determines speed of animation
// let gameFrame = 0;
// const staggerFrames = 5;

// //Creates objects that give specific X and Y values for the sprites based on how many are in the row
// const spriteAnimations = [];
// const animationStates = [
//     {
//         name: 'idle',
//         frames: 7,
//     },
//     {
//         name: 'jump',
//         frames: 7,
//     },
//     {
//         name: 'fall',
//         frames: 7,
//     },
//     {
//         name: 'run',
//         frames: 9,
//     },
//     {
//         name: 'dizzy',
//         frames: 11,
//     },
//     {
//         name: 'sit',
//         frames: 5,
//     },
//     {
//         name: 'roll',
//         frames: 7,
//     },
//     {
//         name: 'bite',
//         frames: 7,
//     },
//     {
//         name: 'ko',
//         frames: 12,
//     },
//     {
//         name: 'getHit',
//         frames: 4,
//     }
// ];
// animationStates.forEach((state, index) => {
//     let frames = {
//         loc:[],
//     }
//     for(let j = 0; j < state.frames; j++){
//         let positionX = j * spriteWidth;
//         let positionY = index * spriteHeight;
//         frames.loc.push({x: positionX, y:positionY})
//     }
//     spriteAnimations[state.name] = frames;
// });
// console.log(spriteAnimations);

// //function to animate the given spritesheet
// function animate(){
//     //clear previous draw
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

//     let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
//     let frameX = spriteWidth * position;
//     let frameY = spriteAnimations[playerState].loc[position].y;
//     //ctx.drawImage(image, sw, sy, sw, sh, dx, dy, dw, dh)
//     ctx.drawImage(playerImage, frameX, frameY, 
//         spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
//     gameFrame++;
//     requestAnimationFrame(animate);
// }
// animate();

function animate(){
ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

ctx.fillRecr(50,50,100,100);
requestAnimationFrame(animate);
}
animate();