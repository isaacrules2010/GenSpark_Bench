var Engine = (function(global) {
})(this);

var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;
    canvas.width = 707;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    function main() {

        /* Get our time delta information which is required if your game
     * requires smooth animation. Because everyone's computer processes
     * instructions at different speeds we need a constant value that
     * would be the same for everyone (regardless of how fast their
     * computer is).
     */
    var now = Date.now(),
        dt = (now - lastTime) / 1000.0;

    /* Call our update/render functions, pass along the time delta to
     * our update function since it may be used for smooth animation.
     */
    update(dt); 
    render(); 

    /* Set our lastTime variable which is used to determine the time delta
     * for the next time this function is called.
     */
    lastTime = now;

    //call refesh if player wins
    if (game_over === true) {
        refresh(); 
    }
    /* Use the browser's requestAnimationFrame function to call this
     * function again as soon as the browser is able to draw another frame.
     */
    win.requestAnimationFrame(main);
}

/* This function is called by main (our game loop) and itself calls all
 * of the functions which may need to update entity's data. 
 */
function update(dt) {
    updateEntities(dt); 
    if (start === true) {
        if (allEnemies[allEnemies.length - 1].x > 100) {
            generate();
        }
    }    
    checkCollisions();
    prize.render();
}
function updateEntities(dt) {       
    prize.update();
    allEnemies.forEach(function(enemy) {
        enemy.update(dt);
    });
    player.update();
}

function render() {
    //clear top and bottom of parts of the player that hang off the "grid"
    ctx.clearRect(0, 0, 707, 100);
    ctx.clearRect(0, 588, 707, 50);
    /* This array holds the relative URL to the image used
    * for that particular row of the game level.
    */
    var rowImages = [
        'images/grass-block.png',   // Top row is grass
        'images/stone-block.png',   // Row 1 of 3 of stone
        'images/stone-block.png',   // Row 2 of 3 of stone
        'images/stone-block.png',   // Row 3 of 3 of stone
        'images/grass-block.png',   // Row 1 of 2 of grass
        'images/grass-block.png'    // Row 2 of 2 of grass
    ],
    numRows = 6,
    numCols = 7,
    row, col;

    /* Loop through the number of rows and columns we've defined above
    * and, using the rowImages array, draw the correct image for that
    * portion of the "grid"
    */
    var grid = [];
    for (row = 0; row < numRows; row++) {
        for (col = 0; col < numCols; col++) {
            //create a grid to reference with which_block() in app.js
            grid.push([row, col]);

            /* The drawImage function of the Canvas' context element
            * requires 3 parameters: the image to draw, the x coordinate
            * to start drawing and the y coordinate to start drawing.
            */
            ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
        }
    }
    renderEntities();
    if (start === false) {
        title();
    }
}

/* This render function calls renderEntities() on each game
* tick. Its then calls the render functions defined 
* on the enemy and player entities within app.js
*/
function renderEntities() {
    /* Loop through all of the objects within the allEnemies array and call
    * the render function you have defined.
    */
    allEnemies.forEach(function(enemy) {
    enemy.render();
    });
    if (start === true) {
        prize.render();
        player.render();
    }
}

/* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
function init() {
    generate();
    lastTime = Date.now();
    main();
}

/* Go ahead and load all of the images we know we're going to need to
     * draw our game level. Then set init as the callback method, so that when
     * all of these images are properly loaded our game will start.
     */
Resources.load([
    'images/stone-block.png',
    'images/water-block.png',
    'images/grass-block.png',
    'images/enemy-bug.png',
    'images/char-boy.png',
    'images/Gem Blue.png'
]);
Resources.onReady(init);