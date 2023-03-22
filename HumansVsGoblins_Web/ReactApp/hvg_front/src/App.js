import React from 'react'
import {Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Test from './Components/Test'
import Home from './Pages/Home';

function App () {
  return (
    <html>
        {/* <head>
            <title>JavaScript and HTML5 Canvas Arcade Game</title>
            <link rel="stylesheet" href="./Components/Test/css/style.css" />
        </head>
        <body>
            <script src="./Components/Test/js/resources.js"></script>
            <script src="./Components/Test/js/testApp.js"></script>
            <script src="./Components/Test/js/engine.js"></script>
        </body> */}
        <Router>
          <NavBar/>
            <Routes>
              <Route path = '/' exact Component={Home}/>
              <Route path = '/test' Component={Test} />
            </Routes>
        </Router>
    </html>
  )
}

export default App