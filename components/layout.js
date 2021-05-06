import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Button, } from '@chakra-ui/react'

// const name = 'Takuto'
// export const siteTitle = '記事一覧'

export default function Layout({ children, home, title ="テラベル", description="お寺をラベリングしていくサイト" }) {
  return (
    <>
      <header>
      <Head>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://res.cloudinary.com/telabel/image/upload/v1619681146/ogp_vee8y7.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      </header>
      
      <main>
      <div className={styles.container}>
      {children}
      </div>
      </main>
      
    
    </>
  )
}
