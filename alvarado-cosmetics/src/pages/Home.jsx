import React from 'react'
import Slider from '../Slider/Silder'
import { Box, Heading, Image } from "@chakra-ui/react"
import SlideHome from "../Slider/SlideHome"
import image from "../images/img.png"
import { Link } from "react-router-dom"
import SlideHome1 from '../Slider1/SlideHome1'
import VideoSlide from '../Slider/VideoSlide'
import FourMore from '../Slider/FourMore'
import SlideOne from '../Slider/SlideOne'
import Delivery from '../Slider/Delivery'



const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <br />

        <Box w='100%' p={4} color='black' marginTop="450px">
          <Heading className="textSlide">BEST SELLER</Heading>
          <SlideHome />
        </Box>

      </div>

      <div>
        <Link>
          <Image src={image} width="1800px" />
        </Link>
      </div>

      <div>
        <Box w='100%' p={4} color='black' marginTop="50px">
          <p className="textSlide" style={{ marginBottom: "30px" }}>HOT DEALS</p>
          <div style={{ display: "flex", justifyContent: "center", rowGap: "30px", columnGap: "40px" }}>
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa46a34d7-903a-4b3c-9b5a-2d9c02926ad2.gif&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc0b0fe31-2d22-4a53-9ef0-6d4bbd8a0012.gif&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5b67b78-aad4-462b-b810-ac81ac7a9796.jpg&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
          </div>
        </Box>
      </div>

      <div>
        <Box w='100%' p={4} color='black' marginTop="40px" marginBottom="35px">
          <Heading className="textSlide">❤-JUST IN-❤</Heading>
          <SlideHome1 />
        </Box>

      </div>

      <div>

        <p className="textSlide" style={{ marginBottom: "40px", fontSize: "35px", fontFamily: "sans-serif" }}>AUTO CORRECT CREASELESS CONCEALER</p>
        <img src='https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/2a57f805-d64e-4e01-b652-c95c9c6e10d6.jpg&w=1920&q=75'
          width="80%" height="100px" style={{ margin: "auto", marginBottom: "20px", borderRadius: "20px" }}
        />
      </div>

      <div>

        <Box w='100%' p={4} color='black' marginTop="50px">
          <Heading className="textSlide" style={{ marginBottom: "30px" }}>TOP PICKS OF THE WEEK</Heading>

          <div style={{ display: "flex", justifyContent: "center", rowGap: "30px", columnGap: "40px" }}>
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae700fcf-b911-452c-a916-f9994a15d20c.gif&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
            <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F42badecf-d09d-47c4-a0cb-145f789a3b0f.jpg&w=1920&q=75'
              style={{ borderRadius: "20px", width: "500px" }}
            />
          </div>
        </Box>
      </div>

      <div>
        <VideoSlide />
      </div>
      <div>
        <SlideOne />
      </div>
      <div>
        <Delivery />
      </div>
      <div>
        <FourMore />
      </div>

    </>
  )
}

export default Home
