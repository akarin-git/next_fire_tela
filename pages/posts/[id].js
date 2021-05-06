import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'
// import utilStyles from '../../styles/utils.module.css'
import {Box, Flex, Link,Button,Heading,Text } from '@chakra-ui/react'
import Image from 'next/image'
import {InstapaperShareButton, TwitterShareButton, FacebookShareButton,} from "react-share";


export default function Post({ postData }) {
    return (
    <Layout>
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/telabel/image/upload/v1618286838/fabicon_jr2jqg.png" />
        <title>{postData.title}</title>
      </Head>
      <Box>
        <Heading p='2' color='#403299'　bg='#FFF3C7' mt='10'>{postData.title}</Heading>
        <Text mt='4' fontSize='2xl'>{postData.location}</Text>
        <Box mb='20'> 
          <Date dateString={postData.date} />
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <Box bg="#fff" color="black" my="20" p="5" align="center">
          btn
        </Box>

      <Flex justifyContent="flex-end">
      <Box mr='1' _hover={{
    　　opacity: 0.7,
  　　　}}>
        <FacebookShareButton url={`https://telabel-official-ushitaku.vercel.app/posts/${postData.id}`}>
        <Image  src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/facebook_erc9dv.png'} alt='Facebook'
                width={44} height={44} />
        </FacebookShareButton>
      </Box>
      <Box mr='2' _hover={{
    　　opacity: 0.7,
  　　　}}>
        <TwitterShareButton url={`https://telabel-official-ushitaku.vercel.app/posts/${postData.id}`} title={postData.title}>
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/twitter_wzmz9k.png'} alt='Twitter'
                width={44} height={44} />
        </TwitterShareButton>
      </Box>

        {/* <InstapaperShareButton url={`https://telabel-official-q1x2tx72h-ushitaku.vercel.app/posts/${postData.id}`}>
        <Image p="" src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/instergram_oug8df.png'} alt='Instagram'
                width={''} height={''} />
        </InstapaperShareButton> */}
      </Flex>
          <Link href="/posts">
            <Button colorScheme="purple">← 記事一覧に戻る</Button>
          </Link>
      </Box>
    </Layout>
    )
  }

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

