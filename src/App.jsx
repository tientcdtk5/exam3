import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './component/Carousel'
import Accordion from './component/Accordion'

function App() {
  const images =[
    "https://photo2.tinhte.vn/data/attachment-files/2021/03/5395437_hinh-nen-girl-xinh-4k-cho-pc-08.jpg",
    "https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-09.jpg",
    "https://photo2.tinhte.vn/data/attachment-files/2021/03/5395442_hinh-nen-girl-xinh-4k-cho-pc-012.jpg"
   ]

  return (
    <div className="app">
      <h1>Basic examples </h1>
      <Carousel images={images}/>
      <hr />
      <h1>Accordion</h1>
      <Accordion/>
    </div>
  )
}

export default App
