import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Trust } from './components/Trust/Trust'

function App() {

  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Trust />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default App
