import firebase from '../lib/db';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  FormControl,FormLabel,
  Input,Textarea,
  Text,Heading,
  Box,
  Button,
} from "@chakra-ui/react"

const contactForm = () => {
  const [company, setCompany] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  
  const submit = (e) => {
    e.preventDefault();
    alert('送信しました！');
    router.push('/');
    // console.log(email);

    firebase.firestore().collection("contact").add({
      company: company,
      name: names,
      email: email,
      content: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <>
    <Box bg="#27214D" mt="10">
      <Box w="65%"  margin="auto" px="40" bg="#403299">
        <Heading as="h1" size="2xl" padding="10" color="white" textAlign="center">お問い合わせ</Heading>
        <form onSubmit={submit}>
        <FormControl id="company" isRequired>
        <FormLabel color="white">会社名・団体名</FormLabel>
        <Input
        bg="white"
        type="company"
        placeholder="会社名・団体名を入力してください"
        value={company}
        onChange={(e) => setCompany(e.target.value)} />
        </FormControl>

        <FormControl id="name" isRequired>
        <FormLabel color="white">お名前</FormLabel>
        <Input
        bg="white"
        type="name" 
        placeholder="名前を入力してください"
        value={names}
        onChange={(e) => setNames(e.target.value)} />
        </FormControl>

        <FormControl id="email" isRequired>
        <FormLabel color="white">メールアドレス</FormLabel>
        <Input
        bg="white"
        type="email" 
        placeholder="アドレスを入力してください"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <Text mb="8px" color="white">内容</Text>
      <Textarea
        bg="white"
        type="content" 
        placeholder="内容を入力してください"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size="sm"
      />
      <Box textAlign="center">
      <button style={{
        color:"white",
        background:"#27214D",
        padding:"10px",
        paddingLeft:"5em",
        paddingRight:"5em",
        margin:"10px",
        marginBottom:"3em",
        borderRadius:"6px",
        }}>
        送信
      </button>
      </Box>
        </form>
    </Box>
    <Box textAlign="center" p="30">
      <Link href='./'>
      <Button m="auto" size="lg" colorScheme="purple">TOPへ戻る</Button>
      </Link>
    </Box>
    </Box>
    </>
  )
}

export default contactForm;