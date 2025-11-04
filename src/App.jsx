import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-white bg-red-500'>This is the 1st Heading</h1>

      <div className='w-20 h-20 bg-amber-300 text-center flex items-center justify-center mt-2.5'>box</div>
    </div>
  )
}

export default App
