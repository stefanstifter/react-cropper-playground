import React from 'react'
import CroperPlayground from './components/CroperPlayground'

function App() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <header className="pt-6">
          <h1 className="text-2xl font-bold">React Croper Playground</h1>
          <h2 className="text-gray-700">Test a croper. Crop around the clock!</h2>
      </header>

      <CroperPlayground />

    </div>
  )
}

export default App
