import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InstaFeed from './Insta/InstaFeed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookMessenger, faFacebook} from '@fortawesome/free-brands-svg-icons'

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'


function App() {


        const myIcon = L.icon({
                iconUrl: ('marker.png'),
                iconSize: [100,100],
                iconAnchor: [32, 64],
                popupAnchor: null,
                shadowUrl: null,
                shadowSize: null,
                shadowAnchor: null
            });

  return (
    <div className="bg-zinc-900 h-full w-full m-0 box-border">
       <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-50">
          <div className="container m-auto flex justify-between items-center text-gray-100 z-50" > 
                <a className="pl-4" href="">
                  <img src="/logo-tattoo.png" alt="Marta Sayuri" className="md:h-16 md:w-16 h-12 w-12" />
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

      <section id="sobre" className="container relative grid grid-cols-1 md:grid-cols-2 m-auto my-32 mb-48 md:mb-32 h-auto z-20 bg-zinc-900">
        <div className="lg:p-16 p-5">
                <h2 className="text-5xl font-bold text-orange-100 mb-2">Marta Sayuri</h2>
                <h3 className="text-2xl font-regular text-red-300 mb-4">tatuadora</h3>
                <p className="text-lg text-red-100 my-5">Formada em arquitetura, trabalhando com ilustrações há 8 anos, me encontrei na tatuagem. Em 2019 entrei como aprendiz no estúdio Madame Skull, onde aprendi muito com excelentes tatuadores que já passaram por Maringá.</p>

                <p className="text-lg text-red-100 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe perferendis, dolorum, minima commodi similique temporibus, natus eaque qui optio praesentium placeat aperiam exercitationem nostrum et quos nesciunt reprehenderit? Odio.</p>
        </div>

        <div className="flex flex-col items-center space-y-1 m-auto">
                <div className="relative bg-gradient-to-tr from-yellow-400 to-purple-600 transform transition p-1 hover:p-2 rounded-full w-auto h-auto">
                        <a href="https://www.instagram.com/martasayuritattoo/?theme=dark" target="_black" className="block bg-zinc-900 p-1 rounded-full transform transition hover:rotate-6">
                                <img src="/profile-photo.png" alt="" className="lg:p-0 p-0 w-48 h-48 lg:h-64 lg:w-64 m-0"/>
                        </a>
                </div>
        </div>
        

        <div className="lg:p-16 p-5 w-full mb-auto block">
        
                <h2 className="text-5xl font-bold text-orange-100 mb-4">Flashs e orçamentos</h2>
                <p className="text-lg text-red-100 my-5">Sabe aquela arte que você sempre sonhou ver na sua pele? Você pode encomendar ela. Eu desenho, te mostro e depois tatuamos. É só me mandar um dirct no insta que a gente combina 😁</p>
                <p className="text-lg text-red-100">Mas se você estiver sem muitas ideias, não tem problema. Tenho muitos flashs prontos para tatuar, dá uma olhada no meu <a href="https://www.instagram.com/martasayuritattoo/?theme=dark" className="font-bold text-red-400"> instagram</a>. Me segui que eu sempre posto desenhos novos.</p>
        
        </div>

        <div>
                <div className="flex justify-center w-auto h-auto my-6 md:-mb-24 md:mt-10 mb-10 z-40 relative">
                        <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 mx-6 text-white text-xl h-12 hover:to-pink-900">seguir <FontAwesomeIcon icon={faInstagram} /></button>
                        <button className="rounded-full  bg-gradient-to-r from-zinc-400 to-slate-200 hover:to-zinc-500 w-auto px-5 h-12 mx-6 text-xl">direct <FontAwesomeIcon icon={faFacebookMessenger} /></button>
                </div>
                
                <div className="bg-black md:rounded-3xl md:m-16 md:w-auto h-full place-items-center">
                        
                        <InstaFeed className=""/>
                </div>
        </div>
        
      </section>

      <section className="container m-auto px-5 md:px-0 shadow-red-500/50 relative z-10">

        <h2 className="text-5xl font-bold text-red-100 mb-10 ml-16">Venha conhecer o estúdio onde eu tatuo 🗺</h2>

                <MapContainer center={[-23.423931199033046, -51.936153353991489]} zoom={17} scrollWheelZoom={true} backround={false} className="h-96 w-full rounded-xl bg-transparent z-10 relative">
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.mapbox.com/styles/v1/alphadust/cl6llzzi3001w16n2s2i7teqf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxwaGFkdXN0IiwiYSI6ImNsNHI0ZmE0cDBndzIzanM2a3MzdXB3ZjMifQ.ibD0f-ykeycI-_Z9__0rxw"
                        />
                        

                        <Marker position={[-23.423995893038715, -51.936180949857864]} icon={myIcon}>
                                <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                        </Marker>
                        
                </MapContainer>

                <a href="https://www.google.com/maps/place/Madame+Skull/@-23.4240092,-51.9361747,15z/data=!4m5!3m4!1s0x0:0x9d256c9c550d4da!8m2!3d-23.4240092!4d-51.9361747"
                className="flex md:absolute md:right-16 md:top-16 z-40 mt-8 md:mt-0 ">
                        <button className="rounded-full w-auto px-5 h-12 m-auto flex align-baseline bg-slate-200 hover:bg-zinc-900 hover:text-gray-100">
                                <p className='text-xl  m-auto'>Veja no Maps</p>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="google maps icones" className="w-6 h-6 m-auto" />
                        </button>
                </a>
      </section>

      <footer id="footer" className="lg:p-24 p-16 pt-24 mt-44 bg-zinc-900 relative">
                <div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 w-auto items-center m-full text-gray-500">
                        <div className="col-span-1 w-auto flex">

                            <div className="">
                                <p className="text-left flex items-center gap-2 hover:text-gray-700"><img src="https://img.icons8.com/ios-filled/12/999999/marker.png" className="w-3 h-3"/>136, Mário José de F. Ferraz, Maringá, Paraná</p>
                                <p className="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/phone.png" className="w-3 h-3"/> 44 998181367</p>
                                <p className="text-left flex items-center gap-2 hover:text-gray-700 "><img src="https://img.icons8.com/ios-filled/12/999999/mail.png" className="w-3 h-3"/>marioseto@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-span-1 w-auto lg:mt-0 md:mt-0 mt-6 md:ml-auto">
                                <ul className="flex lg:gap-16 md:gap-12 gap-6">
                                    <li className="my-1 hover:text-gray-700"><a href="#home">Home</a></li>
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

                        <a href="https://www.instagram.com/martasayuritattoo/?theme=dark" target="_black">
                                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 hover:text-blue-900"/>
                        </a>

                        <a href="https://www.facebook.com/marta.kakitani" target="_black">
                                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 hover:text-blue-900" />
                        </a>

                        <a href="https://www.youtube.com/MarioSa%C3%BAdeMental" target="_black">
                                <FontAwesomeIcon icon={faFacebookMessenger} className="h-6 w-6 hover:text-green-400"/>
                        </a>
                            
                    </div>
                </div>

            </footer>
     
    </div>
  )
}


export default App
