import firebase from '../../lib/db';
import React from 'react';
import Link from 'next/link';
import EventCard from '../../components/EventCard'
import {Grid,Box,Heading} from "@chakra-ui/react";


export default function event({AllEvents}) {
// console.log(AllEvents);
    
    return (
        <Box bg="#27214D">
        <Box align="center" my="20">
          <Heading as="h2" size="xl" color="#fff" >
          イベント一覧
          </Heading>
        </Box>
        <Box my="20" bg="#F9FAFB" h="600px" w="95%" m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={3} m="auto" py="20">
           {AllEvents.map(eventpost => <EventCard key={eventpost.id} eventpost={eventpost}/>)}
        </Grid>
        </Box>
        </Box>
    )
}

export async function getServerSideProps(context) {
  // 外部APIからデータフェッチ
  const querySnap = await firebase
    .firestore()
    .collection('event')
    .orderBy('timestamp',"desc")
    .get();

    const AllEvents = querySnap.docs.map(docSnap => {
        return {
            ...docSnap.data(),
            timestamp:docSnap.data().timestamp.toMillis(),
            id:docSnap.id
        }
    })
    // console.log(querySnap.docs);
  
  // props を通じて Page に data を渡す
  return { props: { AllEvents }, }
}