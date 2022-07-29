import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InstaFeed from './Insta/InstaFeed'


function App() {


  return (
    <div className="bg-zinc-900 h-full w-full m-0 box-border">
       <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-50">
          <div className="container m-auto flex justify-between items-center text-gray-100 z-50" > 
                <a className="pl-4" href="">
                  <img src="/logo-tattoo.png" alt="Marta Sayuri" className=" md:h-16 md:w-16 h-12 w-12" />
                </a>
          
              <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                  <li className="hover:bg-red-500 py-4 px-6">
                          <a href="#home">Home</a>
                  </li>

                  <li className="hover:bg-red-500  py-4 px-6">
                          <a href="#sobre">Sobre</a>
                  </li>

                  <li className="hover:bg-red-500  py-4 px-6">
                          <a href="#missao">Flash's</a>
                  </li>

                  <li className="hover:bg-red-500 py-4 px-6">
                          <a href="#footer">Contato</a>
                  </li>
              </ul>

              {/*mobile menu*/}

              <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-red-500 group">
                  <div className="w-6 h-0.5 bg-gray-200 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-200 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-200"></div>
                  <div className="absolute top-0 -right-full h-screen w-8/12 bg-zinc-800 backdrop-blur-xl border-none opacity-0
                  group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                      <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                          <li className="hover:bg-red-500 py-4 px-6">
                                  <a href="#home">Home</a>
                          </li>

                          <li className="hover:bg-red-500 py-4 px-6">
                                  <a href="#sobre">Sobre</a>
                          </li>

                          <li className="hover:bg-red-500 py-4 px-6">
                                  <a href="#missao">Flash's</a>
                          </li>

                          <li className="hover:bg-red-500 py-4 px-6">
                                  <a href="#footer">Contato</a>
                          </li>
                      </ul>
                  </div>
              </button>
          </div>
        </nav>

        <section id="home">
                <video src="/video-site2.mp4" muted loop autoPlay className=" w-full min-w-[600px] fixed top-0 z-0 bg-contain overflow-hidden"></video>

        
                <div className="container flex-col mx-auto text z-30 relative h-auto align-middle lg:pt-96 pt-20 lg:pl-5">
                <h1 className="text-5xl lg:text-8xl text-cyan-50 font-extrabold px-6 md:p-0 tracking-wide">Levando <strong className="text-red-500">arte</strong> a sério</h1>
                <p className="lg:text-3xl text-lg text-cyan-50 px-6 font-extralight md:p-0 lg:mt-5 my-5 tracking-wide">tatuando com excelência desde 2018.</p>
                </div>
        </section>

      <section id="sobre" className="container relative grid grid-cols-1 lg:grid-cols-2 m-auto h-auto z-60 bg-zinc-900 md:rounded-3xl lg:mt-64 md:mt-40 mt-16 shadow-xl w-screen mb-28">
        <div className="lg:p-16 p-5">
                <h2 className="text-5xl font-bold text-orange-100 mb-2">Marta Sayuri</h2>
                <h3 className="text-2xl font-regular text-orange-300 mb-4">tatuadora</h3>
                <p className="text-md text-orange-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum neque officia, dolore corporis at cum illum non sit fugit praesentium quos quia odio ad repellat voluptatum molestias culpa voluptatem eaque.</p>
        </div>

        <img src="/profile-photo.png" alt="" className="lg:p-16 p-5 w-64 h-64 lg:h-80 lg:w-80 m-auto"/>

        <div className="lg:p-16 p-5">
                <h2 className="text-5xl font-bold text-orange-100 mb-2">Faça um orçamento</h2>

                <div>
                        <InstaFeed />
                       
                </div>
        </div>
        
      </section>

      <footer id="footer" className="lg:p-24 p-16 pt-24 bg-zinc-900 relative">
                <div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 w-auto items-center m-auto text-gray-500">
                        <div className="col-span-1 w-auto flex">

                            <div className="">
                                <p className="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/marker.png" className="w-3 h-3"/>136, Mário José de F. Ferraz, Maringá, Paraná</p>
                                <p className="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/phone.png" className="w-3 h-3"/> 44 998181367</p>
                                <p className="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/mail.png" className="w-3 h-3"/>marioseto@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-span-1 w-auto lg:mt-0 md:mt-0 mt-6 md:ml-auto">
                                <ul className="flex lg:gap-16 md:gap-12 gap-6">
                                    <li className="my-1 hover:text-gray-700"><a href="#Home">Home</a></li>
                                    <li className="my-1 hover:text-gray-700"><a href="#sobre">Sobre</a></li>
                                    <li className="my-1 hover:text-gray-700"><a href="#">Missão</a></li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div className="w-auto lg:flex md:flex table justify-between pt-6 lg:pt-16 md:pt-16 text-gray-700">
                    <div id="footer-logo-section">
                            <p>Marta Sayuri</p>
                    </div>
                    <div id="copyright-text">
                            &copy; Topo da praça corporations. 2022. All rights reserved.
                    </div>
                    <div className="flex justify-around gap-8 w-auto mt-8 md:mt-0 lg:mt-0">
                            <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/instagram--v2.png"/><img className="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/><img className="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/linkedin--v1.png"/><img className="w-6 h-6" src="https://img.icons8.com/ios-filled/25/999999/whatsapp--v1.png"/>
                    </div>
                </div>

            </footer>
     
    </div>
  )
}

export default App
