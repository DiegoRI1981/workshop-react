import { useState, useEffect } from "react"
import * as API from "./services/launches.js"
import { Image } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import logo from './assets/spacex.jpeg'
import { LaunchList } from './components/LaunchList'
import { LaunchDetails } from './components/LaunchDetails'

export function App() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <Image m={4} src={logo} width={200} alt="spaceX logo" />
      <Routes>
        <Route path="/" element={<LaunchList />}></Route>
        <Route path="/:launchId" element={<LaunchDetails />} ></Route>
      </Routes>
    </>
  )
}
