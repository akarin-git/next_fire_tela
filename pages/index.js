import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import HeaderBlog from './headerBlog'
import About from './about'
import TopMain from './topMain'
import HeaderBlogTitle from './headerBlogTitle'
import BlogLink from './blogLink'
import { Box, Container, } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Head>
        <title>テラベル ーお寺をラベリングしていくサイトー</title>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
      </Head>

      <Box bg="#27214D">
        <Header />
        <TopMain />
        <About />
        <HeaderBlogTitle />
        <HeaderBlog />
        <BlogLink />
        <Footer />
    </Box>
    </>
  )
}
