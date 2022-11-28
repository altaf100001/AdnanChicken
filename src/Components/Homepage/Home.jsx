import { Box ,Image } from '@chakra-ui/react'
import React, {  useEffect, useRef } from 'react';
import { Menu } from './Menu';
import {Navbar} from "../Navbar/Navbar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import IMG from "../../images/img.png";
import IMG1 from "../../images/img2.png";
import IMG2 from "../../images/img3.png";
import IMG3 from "../../images/img4.png";
import IMG4 from "../../images/img5.png";
import IMG5 from "../../images/img7.png";
// import BGimg from "../../images/bgimg.jpg";
import { useSelector } from 'react-redux';



let imageArray = [IMG,IMG1,IMG2,IMG3,IMG4,IMG5]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export const Home = () => {

  // console.log(a)

  const bri = useRef(null)
  const star = useRef(null)
  const main = useRef(null)
  const mainveg = useRef(null)
  const rot = useRef(null)
  const home = useRef(null)
const [cart ,setCart] = useState(JSON.parse(localStorage.getItem("cxcart"))||[])

const loading = useSelector(store=>store.isLoading)

useEffect(()=>{

  localStorage.setItem("cxcart",JSON.stringify(cart||[]))

},[])


  return (
  <Box>
    <Navbar home={home} bri={bri} star={star}  main={main} mainveg={mainveg} rot={rot} cart={cart}/>


   <Box
   backgroundImage="url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
   bgRepeat={"no-repeat"}
   bgSize="cover"
   w="100%"
   ref = {home}
  //  border= "10px  black"
   >
   <Carousel responsive={responsive} autoPlay={true}  infinite={true} arrows={false} pauseOnHover={false} >
               {
                imageArray.map((el,ind) =>(
                  <Box 
                 width={"100%"}
                 margin="auto"
                //  border="1px solid green"
                 display="flex"
                 alignItems={"center"}
                 justifyContent="center"
                key={ind}
                mt="20px"
                mb="20px"
                  >
                      <Image 
                    
                       width={{base:"70%",sm:"50%",md:"40%",lg:"40%",xl:"40%","2xl":"40%"}}
                       src={el} />
                  </Box>
                ))
               }
   </Carousel>
    </Box>
   
   <Box>
   
   </Box>


   <Box>
   <Menu bri={bri} star={star}  main={main} mainveg={mainveg} rot={rot}  setCart={setCart}  />
   </Box>


  </Box>
  )
};
