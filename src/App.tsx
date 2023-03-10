import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Trust } from './components/Trust/Trust'
import { VideoSec } from './components/VideoSec/VideoSec'
import { Opus } from './components/Opus/Opus'
import { Work } from './components/Work/Work'
import { Create } from './components/Create/Create'
import { Blogs } from './components/Blogs/Blogs'
import { Resourses } from './components/Resources/Resourses'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Trust />
      <VideoSec />
      <Opus />
      <Work />
      <Create />
      <Blogs />
      <Resourses />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default App
