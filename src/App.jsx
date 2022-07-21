import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <nav class="fixed top-0 left-0 w-full shadow-xl backdrop-blur-md z-20">
                <div class="container m-auto flex justify-between items-center text-cyan-100"> 
                     <a class="p-6" href="">Marta Tattoo</a>
                
                    <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#home">Home</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#sobre">Sobre</a>
                        </li>

                        <li class="hover:bg-blue-800py-4 px-6">
                                <a href="#missao">Flash's</a>
                        </li>

                        <li class="hover:bg-blue-800 py-4 px-6">
                                <a href="#footer">Contato</a>
                        </li>
                    </ul>


                

                    <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-blue-800 group">
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                        <div class="w-6 h-0.5 bg-gray-200"></div>
                        <div class="absolute top-0 -right-full h-screen w-8/12 bg-zinc-800 backdrop-blur-md border-none opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#home">Home</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#sobre">Sobre</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#missao">Flash's</a>
                                </li>

                                <li class="hover:bg-blue-800 py-4 px-6">
                                        <a href="#footer">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
        </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank" >
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
