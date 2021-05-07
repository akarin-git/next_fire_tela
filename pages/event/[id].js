import firebase from '../../lib/db';
import TelaEventCard from '../../components/TelaEventCard';
import { Container,Box,Heading } from "@chakra-ui/react";



export default function EventPost({Events}) {
    return (
        <Box bg="#27214D">
        {/* 情報がある時 */}
        {Events[0] ? (
          <>
        <Box align="center" my="20">
          <Heading as="h2" size="xl" color="#fff" >
          {Events[0].tela}イベント情報
          </Heading>
        </Box>
        <Box bg={"#F9FAFB"} w="90%" m="auto" h="600px">
        
            <TelaEventCard key={Events[0].id} event={Events[0]}/>
         
          </Box>
          </>
        ):(
          // 情報がない時に表示される文言
            <>
          <Box align="center" my="20">
          <Heading as="h2" size="xl" color="#fff" >
          イベント情報
          </Heading>
        </Box>
        <Box bg={"#F9FAFB"} w="90%" m="auto" h="600px">
        
            イベントがありません
         
          </Box>
            </>
        )}

        </Box>
    )
}

export async function getServerSideProps({context,params}) {
//   console.log(params.id);
  const querySnap = await firebase
    .firestore()
    .collection('event')
    // 寺で抽出
    .where('tela','==', params.id)
    .orderBy('timestamp',"desc")
    .get();

    const Events = querySnap.docs.map(docSnap => {
        return {
            ...docSnap.data(),
            timestamp:docSnap.data().timestamp.toMillis(),
            id:docSnap.id
        }
    })
    // console.log(Events);
  return { props: { Events }, }
}