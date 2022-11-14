import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

export const SindleItem = ({ data,heading,handleCart }) => {

const [clic,setCli] = useState(0)

let cartData = JSON.parse(localStorage.getItem("cxcart"))

 const handleClick =(el) =>{
    handleCart(el)
    setCli(prev => prev +1)
 }

  return (
    <Box >
      <Box p="50px">
        <Heading fontSize={"50px"}>{heading}</Heading>
      </Box>

      <Box
        //    border={"1px solid red"}
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap="20px"
      >
        {data?.map((el, ind) => {
          return (
            <Box key={ind} shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10px">
              <Box>
                <Image height="400px" width="auto" m="auto" src={el.img} />
              </Box>

              <Box
                mt="10px"
                display={"flex"}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text fontWeight={"600"} fontSize="23px">
                  {el.name}
                </Text>
                <Text fontWeight={"500"}>{el.qty}</Text>
                <Text color="#3182ce" fontWeight={"900"} fontSize="18px">
                   Rs{el.price}-/ 
                </Text>
                <Button
                  mt="10px"
                  border={"1px solid black"}
                  bg="white"
                  _hover={{
                    bg: "#3182ce",
                    color: "white",
                    border: "1px solid white",
                  }}
                  disabled={
                     cartData.find(item =>{
                        if(item.name == el.name){
                            el.count = 1
                            return true
                        }
                     })
                }
                  onClick={()=>{handleClick(el)}}
                >
                 {el.count>0?"Item Added" :" Add to cart"}
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
