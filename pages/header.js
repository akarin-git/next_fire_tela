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
      <Link href='/contactForm'>
    <Button colorScheme="#FFF3C7" mr="4">
      お問い合わせ
    </Button>
    </Link>
    <Link href='/form'>
    <Button colorScheme="#FFF3C7" mr="4">
      ログイン
    </Button>
    </Link>

  </Box>
</Flex>
        </>
    )
}

export default Header