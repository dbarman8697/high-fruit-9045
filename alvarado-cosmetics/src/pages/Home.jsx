import React from 'react'
import Slider from '../Slider/Silder'
import {Box,Heading} from "@chakra-ui/react"
import SlideHome from "../Slider/SlideHome"

const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <br/>

        <Box  w='100%' p={4} color='black' marginTop="450px">
          <Heading>Best Seller</Heading>
          <SlideHome/>
        </Box>
        
       
      </div>
    </>
  )
}

export default Home
