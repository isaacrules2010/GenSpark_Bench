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
