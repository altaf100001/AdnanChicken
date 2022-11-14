import { ReactNode, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export  function Navbar({bri,home,star,main,mainveg,rot,cart}) {


  
  const handleBri =()=>{
   
    bri.current?.scrollIntoView({behavior: 'smooth'})

}
const handleMain =()=>{
 
    main.current?.scrollIntoView({behavior: 'smooth'})

}
const handleMainV =()=>{

    mainveg.current?.scrollIntoView({behavior: 'smooth'})

}
const handleRot =()=>{
 
    rot.current?.scrollIntoView({behavior: 'smooth'})

}
const handleStar =()=>{
 
    star.current?.scrollIntoView({behavior: 'smooth'})

}
const handleHome =()=>{
 
    home.current?.scrollIntoView({behavior: 'smooth'})

}

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box 
       position={"sticky"}
       top="0"
       zIndex={"100000000000"}
       shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
       background= "white"
       px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            
             <Box
   display={"flex"}
   alignItems="center"
   onClick={handleHome}
   cursor="pointer"
  //  border={"1px solid green"}
   justifyContent={"space-around"}
   color="black"
    >
    <Text 
    fontSize={{base:"20px",sm:"25px",md:"",lg:"",xl:"","2xl":""}} 
     fontFamily={"'Space Grotesk', sans-serif"}
      fontWeight="900" ><span style={{color:"#3182ce",fontSize:"27px" }} 
    >A</span>dnan Biryani Point</Text>
    </Box>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Text fontWeight={"500"} _hover={{color:"#3182ce"}} cursor={"pointer"} onClick={handleBri}>Biryani</Text>
              <Text  fontWeight={"500"} _hover={{color:"#3182ce"}} cursor={"pointer"} onClick={handleStar} >Starter & Kabab</Text>
              <Text  fontWeight={"500"} _hover={{color:"#3182ce"}}  cursor={"pointer"} onClick={handleMain} >Main Course Non-Veg</Text>
              <Text  fontWeight={"500"} _hover={{color:"#3182ce"}}  cursor={"pointer"} onClick={handleMainV} >Main Course Veg</Text>
              <Text  fontWeight={"500"} _hover={{color:"#3182ce"}} cursor={"pointer"} onClick={handleRot} > Roti </Text>
            </HStack>
          </HStack>
         <Link to="/cart"> <Button  fontFamily={"'Space Grotesk', sans-serif"} colorScheme='blue'>Cart: {cart.length}</Button></Link>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Text   fontWeight={"500"} _hover={{color:"#3182ce"}}  fontSize={"23px"} onClick={handleBri}>Biryani</Text>
            <Text  fontWeight={"500"} _hover={{color:"#3182ce"}}  fontSize={"23px"} onClick={handleStar} >Starter & Kabab</Text>
            <Text  fontWeight={"500"} _hover={{color:"#3182ce"}} fontSize={"23px"} onClick={handleMain} >Main Course Non-Veg</Text>
            <Text  fontWeight={"500"} _hover={{color:"#3182ce"}} fontSize={"23px"} onClick={handleMainV} >Main Course Veg</Text>
            <Text   fontWeight={"500"} _hover={{color:"#3182ce"}} fontSize={"23px"} onClick={handleRot} > Roti </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  );
}