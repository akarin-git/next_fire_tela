import React from "react";
import { chakra, Box, Flex, Grid, Link, Spacer,Button, Image } from "@chakra-ui/react";

const HeaderBlog = () => {
  return (
<Box bg='#27214D' w='80%' m='auto'>
        <Grid mt='10' justifyItems='center' alignItems='center' templateColumns="repeat(3, 1fr)" gap={6} >
        <Link href='posts/01' _hover={{ textDecoration: "none" }}>
          <Box 
          _hover={{ fontWeight: 'bold' }}
          bgImage="url('https://res.cloudinary.com/telabel/image/upload/v1619176884/catmain_2x_omyik9.png')"
          bgPosition="center" bgRepeat="no-repeat"
          w={300} h={300} align="right">
        <Flex align="right" p="3">
      <Spacer/>
        <Box fontSize="lg" w="10%" h="95%" bg="#fff" mr="5" align="center" >
        猫がめっちゃいるお寺
        </Box>
      <Box textDecoration='none' fontSize="xl" color="white" w="10%" h="40%" bg="#403299" mr="5" align="center">
      山口県 雲林寺
      </Box>
        </Flex>
        </Box>
        </Link>
        <Link href='posts/02' _hover={{ textDecoration: "none" }}>
          <Box
          _hover={{ fontWeight: 'bold' }}
          bgImage="url('https://res.cloudinary.com/telabel/image/upload/v1619779436/170065590_2281828171949410_8020650102675147847_n_beipdd.jpg')"
          bgPosition="center" bgRepeat="no-repeat"
          w={300} h={300} align="right">
        <Flex align="right" p="3">
      <Spacer/>
        <Box fontSize="lg" w="10%" h="95%" bg="#fff" mr="5" align="center">
        マルシェをやるお寺
        </Box>
      <Box fontSize="xl" color="white" w="10%" h="40%" bg="#403299" mr="5" align="center">
      福岡県 妙静寺
      </Box>
        </Flex>
        </Box>
        </Link>
        <Link href='posts/03' _hover={{ textDecoration: "none" }}>
          <Box 
          _hover={{ fontWeight: 'bold' }}
          bgImage="url('https://res.cloudinary.com/telabel/image/upload/v1619444065/caption_fmmo1a.jpg')"
          bgPosition="center" bgRepeat="no-repeat"
          w={300} h={300} align="right">
        <Flex align="right" p="3">
      <Spacer/>
        <Box fontSize="lg" w="10%" h="95%" bg="#fff" mr="5" align="center">
        大仏がナナメなお寺
        </Box>
      <Box fontSize="xl" color="white" w="10%" h="40%" bg="#403299" mr="5" align="center">
      熊本県 日輪寺
      </Box>
        </Flex>
        </Box>
        </Link>
        </Grid>
</Box>
  );
};

export default HeaderBlog;