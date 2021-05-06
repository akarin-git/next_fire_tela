import Link from 'next/link'
import Image from 'next/image'
import {
    Text,Heading,Box,Button, Container, 
    Flex,Breadcrumb,BreadcrumbItem,BreadcrumbLink, Grid,
  } from "@chakra-ui/react"

const Footer = () => {
    return(
        <>
<Box>
    <Flex>
    <Box w="50%" ml="40">
        <Box>
            <Heading as="h1" size="xl" color="white">テラベル</Heading>
            <Heading as="h3" size="sg" color="white">お寺をラベリングするサイト</Heading>
        </Box>
            <Text color="white">
                マイナーなお寺の魅力創出を目的としたサイトです。
                <br/>お寺って敷居が高そう。
                そんなイメージを持たれて<br/>いる方は多いと思います。
                私どもは少しでも身近に<br/>感じてもらいたくてこのサイトをつくりました。
                <br/>動機は何でもいいから、お寺に行って、面白いね！
                <br/>と感じてもらう。そんなサイトを目指して参ります。
            </Text>
         <Flex>
        <Box mr="2" mt="2" _hover={{opacity: 0.7,}}>
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/facebook_erc9dv.png'} alt='Facebook'
                width={'48'} height={'48'} 
                _hover={{ opacity: '0.5' }}/>
        </Box>
        <Box mx="2" mt="2" _hover={{opacity: 0.7,}}>
        <Image p="5" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/youtube_efhoiw.png'} alt='Youtube'
                width={'48'} height={'48'} />
        </Box>
        <Box mx="2" mt="2" _hover={{opacity: 0.7,}}>
        <Image p="5" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/twitter_wzmz9k.png'} alt='Twitter'
                width={'48'} height={'48'} />
        </Box>
        <Box mx="2" mt="2" _hover={{opacity: 0.7,}}>
        <Image p="5" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/instergram_oug8df.png'} alt='Instagram'
                width={'48'} height={'48'} />
        </Box>
        </Flex>
    </Box>

    <Box w="50%" textAlign="center" color="white"> 
        <Breadcrumb fontWeight="bold" fontSize="lg">
        <BreadcrumbItem>
        <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <BreadcrumbLink href="/login">ログイン</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <BreadcrumbLink href="/contactForm">お問い合わせ</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
    </Box>
    </Flex>
</Box>

<Box color='white' bg="#403299" padding="2" mt="20" textAlign="center">
    <p>© 2021 Telabel.  All Rights Reserved.</p>
</Box>
    </>
    )
}

export default Footer