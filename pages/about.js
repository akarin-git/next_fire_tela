import {
    Text,Heading,Box,Button, Container, Image,
    Flex,Breadcrumb,BreadcrumbItem,BreadcrumbLink, Grid,
} from "@chakra-ui/react"

import React from 'react'

function About() {
    return (
        <>
        <Box w="50%" h='50%' pt="24" m="auto">
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1619018560/about_pnjgld.svg'} alt='about'
                width={''} height={''} />
        </Box>
    <Box position="relative">
        <Box mt="10" style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <Image src={'https://res.cloudinary.com/telabel/image/upload/v1619148388/concept_pkunax.svg'} alt='flame'
            width={'70%'} height={''} />
        </Box>
        {/* <Box>
            <Text position="absolute" top="16%" left="20%" textAlign="center" color="white" lineHeight="2.0em" fontSize="3xl">
                テラベルはお寺をラベリングしていくサイトです。<br />
                お寺がやってる取り組みや、そのお寺が持つポテンシャルを<br />
                伝えるべく、独断と偏見たっぷりにラベリングをしていきます。<br />
                記事を見てもらって、色々感じてもらって、<br />
                実際にお寺にまで足を運んでもらえたら、嬉しい限りです。<br />
                その時はどうかお賽銭だけでもして頂けると、更に嬉しいです。
            </Text>
        </Box> */}
    </Box>
        </>
    )
}

export default About
