import Head from 'next/head'
import Date from '../../components/date'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import {Box, Flex, Spacer, Grid, Button, Image,Link } from '@chakra-ui/react'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
    {/* <Layout home> */}
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
      </Head>
      <Head>
        <title>記事一覧</title>
      </Head>
      <Box p='20' bg='#27214D' align='center'>
      <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1619105306/articletitle_jvcnlp.svg'} alt='Facebook'
                width={'397'} height={'54'} />
      </Box>
      <Box bg='#27214D'>
       <Box w='80%' m='auto'>
        <Grid justifyItems='center' alignItems='center' templateColumns="repeat(3, 1fr)" gap={6} >
          {allPostsData.map((({id,date,title,location,cardImage})=>
        <Link href={`/posts/${id}`}
        _hover={{ textDecoration: "none" }} >
          <Box 
          mb='10'
          _hover={{ fontWeight: 'bold' }}
          _groupHover={{ color: 'tomato' }}
          bgImage={`url(${cardImage})`}
          bgPosition="center" bgRepeat="no-repeat"
          w={300} h={300} align="right">
        <Flex align="right" p="3">
      <Spacer/>
        <Box fontSize="lg" w="10%" h="95%" bg="#fff" mr="5" align="center">
        {title}
        </Box>
      <Box fontSize="xl" color="white" w="10%" h="40%" bg="#403299" mr="5" align="center">
        {location}
      </Box>
        </Flex>
        </Box>
        </Link>
        ))}
        </Grid>
        <Box mb="40" mt="20" textAlign="center">
        <Link href="/">
        <Button size="lg" border="2px"
        borderColor="gray"><a>TOPに戻る</a></Button>
        </Link>
        </Box>
      </Box>
    </Box>
    </>
  )
}
