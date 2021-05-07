import firebase from '../../lib/db';


export default function EventPost({Events}) {
    // console.log(Events[0]);
    return (
        <>
        {/* 情報がある時 */}
        {Events[0] ? (
            <>
            <p>{Events[0].name}</p>
            <p>{Events[0].email}</p>
            <p>{Events[0].group}</p>
            <p>{Events[0].money}</p>
            <p>{Events[0].name}</p>
            <p>{Events[0].tela}</p>
            <p>{Events[0].content}</p>
            </>
        ):(
          // 情報がない時に表示される文言
            <>
            <>hi</>
            <p>イベント情報はありません</p>
            </>
        )}

        </>
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