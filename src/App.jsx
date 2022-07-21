import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" class="bg-zinc-800 h-full w-full m-0 box-border">
       <nav class="fixed top-0 left-0 w-full shadow-xl backdrop-blur-lg z-50">
          <div class="container m-auto flex justify-between items-center text-gray-100 z-50" > 
                <a class="" href="">
                  <img src="../public/logo-tattoo.png" alt="Marta Sayuri" class="h-16 w-16" />
                </a>
          
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

              {/*mobile menu*/}

              <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-blue-800 group">
                  <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                  <div class="w-6 h-0.5 bg-gray-200 mb-1"></div>
                  <div class="w-6 h-0.5 bg-gray-200"></div>
                  <div class="absolute top-0 -right-full h-screen w-8/12 bg-zinc-800 backdrop-blur-xl border-none opacity-0
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

      
      <video src="../public/video-site2.mp4" muted loop autoPlay class=" w-full min-w-[800px] absolute top-0 z-0"></video>
        
      <div class="container flex-col mx-auto text z-30 relative h-auto align-middle lg:pt-96 pt-28 lg:pl-5">
        <h1 class="text-5xl lg:text-8xl text-cyan-50 font-extrabold px-6 md:p-0 tracking-wide">Levando arte a sério</h1>
        <p class="text-3xl text-cyan-50 px-6 font-extralight md:p-0 lg:mt-5 my-5 tracking-wide">tatuando com excelência desde 2018.</p>
      </div>

      <div class="container relative flex m-auto h-96 z-60 bg-zinc-900 md:rounded-3xl lg:mt-80 md:mt-40 mt-16 shadow-xl">
        
      </div>
     
    </div>
  )
}

export default App
