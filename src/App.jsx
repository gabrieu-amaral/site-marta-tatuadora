import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" class="bg-zinc-800 h-full w-full m-0 box-border">
       <nav class="fixed top-0 left-0 w-full backdrop-blur-lg z-50">
          <div class="container m-auto flex justify-between items-center text-gray-100 z-50" > 
                <a class="pl-4" href="">
                  <img src="../public/logo-tattoo.png" alt="Marta Sayuri" class=" h-16 w-16" />
                </a>
          
              <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
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

        <section>
                <video src="../public/video-site2.mp4" muted loop autoPlay class=" w-full min-w-[600px] fixed top-0 z-0 bg-contain overflow-hidden"></video>

        
                <div class="container flex-col mx-auto text z-30 relative h-auto align-middle lg:pt-96 pt-20 lg:pl-5">
                <h1 class="text-5xl lg:text-8xl text-cyan-50 font-extrabold px-6 md:p-0 tracking-wide">Levando <strong class="text-red-500">arte</strong> a sério</h1>
                <p class="lg:text-3xl text-lg text-cyan-50 px-6 font-extralight md:p-0 lg:mt-5 my-5 tracking-wide">tatuando com excelência desde 2018.</p>
                </div>
        </section>

      <section class="container relative grid grid-cols-1 lg:grid-cols-2 m-auto h-auto z-60 bg-zinc-900 md:rounded-3xl lg:mt-64 md:mt-40 mt-16 shadow-xl w-screen mb-28">
        <div class="lg:p-16 p-5">
                <h2 class="text-5xl font-bold text-orange-100 mb-2">Marta Sayuri</h2>
                <h3 class="text-2xl font-regular text-orange-300 mb-4">tatuadora</h3>
                <p class="text-md text-orange-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum neque officia, dolore corporis at cum illum non sit fugit praesentium quos quia odio ad repellat voluptatum molestias culpa voluptatem eaque.</p>
        </div>

        <img src="../public/profile-photo.png" alt="" class="lg:p-16 p-5 w-64 h-64 lg:h-80 lg:w-80 m-auto"/>

        <div class="lg:p-16 p-5">
                <h2 class="text-5xl font-bold text-orange-100 mb-2">Faça um orçamento</h2>
        </div>
        
      </section>

      <footer id="footer" class="lg:p-24 p-16 pt-24 bg-zinc-900 relative">
                <div>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 w-auto items-center m-auto text-gray-500">
                        <div class="col-span-1 w-auto flex">

                            <div class="">
                                <p class="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/marker.png" class="w-3 h-3"/>136, Mário José de F. Ferraz, Maringá, Paraná</p>
                                <p class="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/phone.png" class="w-3 h-3"/> 44 998181367</p>
                                <p class="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/mail.png" class="w-3 h-3"/>marioseto@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-span-1 w-auto lg:mt-0 md:mt-0 mt-6 md:ml-auto">
                                <ul class="flex lg:gap-16 md:gap-12 gap-6">
                                    <li class="my-1 hover:text-gray-700"><a href="#Home">Home</a></li>
                                    <li class="my-1 hover:text-gray-700"><a href="#sobre">Sobre</a></li>
                                    <li class="my-1 hover:text-gray-700"><a href="#">Missão</a></li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div class="w-auto lg:flex md:flex table justify-between pt-6 lg:pt-16 md:pt-16 text-gray-700">
                    <div id="footer-logo-section">
                            <p>Marta Sayuri</p>
                    </div>
                    <div id="copyright-text">
                            &copy; Topo da praça corporations. 2022. All rights reserved.
                    </div>
                    <div class="flex justify-around gap-8 w-auto mt-8 md:mt-0 lg:mt-0">
                            <img class="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/instagram--v2.png"/><img class="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/><img class="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/linkedin--v1.png"/><img class="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/whatsapp--v1.png"/>
                    </div>
                </div>

            </footer>
     
    </div>
  )
}

export default App
