import React from 'react'
import Footer from './components/Footer'
import CropperPlayground from './components/CropperPlayground'

function App() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <header className="pt-6">
          <h1 className="text-2xl font-bold">React Cropper Playground</h1>
          <h2 className="text-gray-700">Test a cropper, crop around the clock!</h2>
      </header>

      <CropperPlayground />
      <Footer />
    </div>
  )
}

export default App
