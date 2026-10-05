import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import FeedPage from './pages/FeedPage'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/CreatePost' element = {<CreatePost />}></Route>
        <Route path='/feed' element = {<FeedPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
