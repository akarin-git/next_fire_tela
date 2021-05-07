import firebase from '../../lib/db';
import React from 'react';
import Link from 'next/link';
import EventCard from '../../components/EventCard'

export default function event({AllEvents}) {
// console.log(AllEvents);
    
    return (
        <div>
           {AllEvents.map(eventpost => <EventCard key={eventpost.id} eventpost={eventpost}/>)}
        </div>
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