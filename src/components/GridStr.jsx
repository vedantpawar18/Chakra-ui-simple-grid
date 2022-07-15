import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

const GridStr = () => {
    const items= new Array(12).fill(1).map((a,i)=>a+i);
  return (
    <div>
        <SimpleGrid columns={{
            base:2,
            sm:2,
            md:3,
            lg:4,
            xl:5
        }}>
        {items.map((item)=>{
            return<Box>
                {item}
                </Box>
        })}
        </SimpleGrid>
    </div>
  )
}

export default GridStr