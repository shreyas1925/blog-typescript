import React from 'react'
import { Blog,Counter,Error,PageNotFound } from './screens'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Blog/>}/>
            <Route path='/error/:errorCode' element={<Error/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App