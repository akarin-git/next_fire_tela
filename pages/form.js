import firebase from '../lib/db';
import React from 'react';
import Link from 'next/link';

// initFirebase();

export default class Posts extends React.Component {
  static async getInitialProps() {
    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection('contact')
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
        })
        resolve(data)
        console.log(data);
      }).catch(error => {
        reject([])
      })
    })
    return {posts: result}
  }

  handleDelete = (id) => {
    console.log(id)
  }

  render() {
    const posts = this.props.posts
    return (
        <>
                {posts.map(post =>
                    <div className="post" key={post.id}>
                        <h2>
                            {post.name}
                        </h2>
                        <p>
                            {post.email}
                        </p>
                        <button onClick={this.handleDelete.bind(this, post.id)}>idチェック</button>
                    </div>
                    )}
                    <Link href='/'>
                      <a>TOPへ戻る</a>
                    </Link>
        </>
    );
  }
}