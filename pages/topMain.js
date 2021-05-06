import React from 'react'
import {Box, Heading,Text,Image,Container,
} from "@chakra-ui/react"
import { motion} from 'framer-motion'; 

const TopMain = () => {
    return (
        <>
    {/* <Container > */}
        <Box w="100%" mt='-28'>
        <Image  src={'https://res.cloudinary.com/telabel/image/upload/v1619533939/animation_jik7x3.gif'} alt='title'
                width={''} height={''} />
        </Box>

        <Box mt='-32' mb="28" ml="20">
        <motion.div 
                 animate={{ y:50 }}
                 transition={{
                 repeat: Infinity,
                 repeatType: "reverse",
                 duration: 2
             }}>
        <Image  src={'https://res.cloudinary.com/telabel/image/upload/v1619016204/scroll_ck4eue.png'} alt='sub'
                width={'206'} height={'50'} />
        </motion.div>
        </Box>
        {/* <Box>
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618938338/title_fggjif.svg'} alt='sub'
                width={'1362'} height={'225'} />
        </Box> */}
        
        {/* <Heading as="h3" size="sg" marginBottom="5" >
        お寺をラベリングしていくサイト
        </Heading>
        <Heading as="h1" fontSize="6xl" >
        テラベル
        </Heading> */}
    {/* </Container> */}
        </>
    )
}

export default TopMain
