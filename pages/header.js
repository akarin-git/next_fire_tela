import Link from 'next/link'
import Image from 'next/image'
import {Box,Heading,Button,Flex, Spacer} from "@chakra-ui/react"
// import '../styles/header.scss'

const Header =() => {
    return(
        <>
        <Flex bg="#27214D">
  <Box p="4">
    <Heading size="md">
    <Link href='/'>
         <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618286838/rogo_xsidtk.svg'} alt='ロゴ'
                  width={'52'}
                  height={'65'} />
         </Link>
    </Heading>
  </Box>
  <Spacer />
   <Box p="4">
    <Link href='/event'>
      <Button colorScheme="#FFF3C7" mr="4">
      イベント掲示板
      </Button>
    </Link>
    <Link href='/contactForm'>
      <Button colorScheme="#FFF3C7" mr="4">
      お問い合わせ
      </Button>
    </Link>
    <Link href='/EventForm'>
      <Button colorScheme="#FFF3C7" mr="4">
        お寺関係者の方へ
      </Button>
    </Link>

  </Box>
</Flex>
        </>
    )
}

export default Header