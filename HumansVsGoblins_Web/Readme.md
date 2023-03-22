Current Plan:

The SQL DB, and therefore the Spring App backend, will handle keeping track of gamesaves.
The game save will record:
- Goblin
  - Count
  - Location
  - Status
- Human
  - Location
  - Status
  - Equipment

I may (haven't fully decided yet) have the backend also handle storing the images that are used to represent different entities (Human, Goblins, Equipment, Etc.)

Players will, upon loading the web app, be able to choose either "New Game" or "Continue"
If "New Game," the game will run using a randomly generated initial state and the game will only "save" if the player selects "Save Game," at which point they will be given a unique "Save ID"
If "Continue," the web app will prompt the user for a "Save ID." If the user provides a valid Save ID, then the web app will load the corresponding save from the database and resume play given the saved parameters.

update 03.22.2023:
I was gonna try and build the front-end "game" portion first, so that I know exactly what values need to be saved by the back-end, but am going to first start
refreshing myself on the basics of react and JS, as well as teaching myself how to build a simple game UI in JS if I can.
Going to build a "demo" back-end, just so I can shoow off what I *PLAN* for it, but once the front-end is done, it will likely be refactored to better fit the front-end "Game" portion.