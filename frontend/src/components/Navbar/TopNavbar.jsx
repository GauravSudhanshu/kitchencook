
import { Box, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'


const TopNavbar = () => {
  return (
    <Box className='top_navbar'>
      <Box
        textAlign="left"
        w="100%"
        className="div_one_container"
        h="25px"
        display="flex" justifyContent="center" alignItems="center"
        bg="red"
      >
        <Box color="white" width="95%">
        <Text  fontSize="xs">
          <Tooltip border="1px solid white" label="We are woking on it">
            INTERNATIONAL DELIVERY
          </Tooltip>
          </Text>
        </Box>
      </Box>
    </Box>
    
   
  )
}

export default TopNavbar
