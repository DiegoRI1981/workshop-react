import { Image } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import logo from './assets/spacex.jpeg'
import { LaunchList } from './components/LaunchList'
import { LaunchDetails } from './components/LaunchDetails'
import { RocketDetails } from './components/RocketDetails'

export function App() {
  return (
    <>
      <Image m={4} src={logo} width={200} alt="spaceX logo" />
      <Routes>
        <Route path="/" element={<LaunchList />}></Route>
        <Route path="/:launchId" element={<LaunchDetails />} ></Route>
        <Route path='rockets/:rocketId' element={<RocketDetails />}></Route>
      </Routes>
    </>
  )
}
