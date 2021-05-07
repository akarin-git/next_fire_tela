import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import HeaderBlog from './headerBlog'
import About from './about'
import TopMain from './topMain'
import HeaderBlogTitle from './headerBlogTitle'
import BlogLink from './blogLink'
// 追加
import { Box, Container,Flex,Heading,chakra,Link,Text,Grid} from "@chakra-ui/react";
import firebase from '../lib/db';



{/* 追加 */}
export default function Home({Events}) {
  // console.log(Events);
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

{/* 追加 */}
  <Box w="90%" m="auto" mb="40"　bg="#fff" pb="20">
  <Heading as="h3" size="lg" align="center" py="10">イベント情報</Heading>
  {/* カード */}
<Grid templateColumns="repeat(3, 1fr)" gap={3} m="auto" w="95%">
   {Events.map(eventpost => 
    <Link　href={`/event/${eventpost.tela}`}>
     <Flex key={eventpost.id}
      bg={"#F9FAFB"}
      p={5}
      w="400px"
      alignItems="center"
      justifyContent="center"
    >
      <Box 
        w="full"
        mx="auto"
        px={4}
        py={3}
        bg={"white"}
        shadow="md"
        rounded="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={"gray.800"}
          >
            {eventpost.group}
          </chakra.span>
          <chakra.span
            bg={"brand.200"}
            color={"brand.800"}
            px={3}
            py={1}
            rounded="full"
            textTransform="uppercase"
            fontSize="xs"
          >
            受付中
          </chakra.span>
        </Flex>

        <Box>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color={"gray.800"}
          >
            {eventpost.content}
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color={"gray.600"}
          >
           {eventpost.content}
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="center"
            mt={2}
            color={"gray.700"}
          >
            <span>日付:{eventpost.date}</span>
           
            <Text
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color={"brand.600"}
              wordBreak="break-word"
            >
              {eventpost.email}
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt={4}>
            <Link
              mr={2}
              color={"gray.800"}
              _hover={{ color: "gray.700" }}
              cursor="pointer"
            >
            </Link>

            <Link
              mr={2}
              color={"gray.800"}
              _hover={{ color: "gray.700" }}
              cursor="pointer"
            >
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
    </Link>
    )}
    </Grid>
    </Box>
{/* 追加 */}
    </Box>
    </>
  )
}

{/* 追加 */}
export async function getServerSideProps(context) {
// firebase event ３件取得
  const querySnap = await firebase
    .firestore()
    .collection('event')
    .orderBy('timestamp',"desc")
    .limit(5)
    .get();

    const Events = querySnap.docs.map(docSnap => {
        return {
            ...docSnap.data(),
            timestamp:docSnap.data().timestamp.toMillis(),
            id:docSnap.id
        }
    })
    // console.log(querySnap.docs);
  // console.log(querySnap);
  return { props: { Events }, }
}