 import { Box, Container,Flex,Heading,chakra,Link,Text,Grid,Button} from "@chakra-ui/react";

 
 export default function EventCard({eventpost}) {
      console.log(eventpost);
     return (
    <>
    <Box align="center">
    <Link href={`/event/${eventpost.tela}`}>
     <Flex 
     key={eventpost.id}
      p={2}
      w="430px"
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
        h="450px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={"gray.800"}
          >
            {eventpost.group}
          </chakra.span>
          <chakra.span
            bg={"#fff3c7"}
            color={"#4d4d4d"}
            px={3}
            py={1}
            rounded="full"
            textTransform="uppercase"
            fontSize="xs"
          >
            受付中
          </chakra.span>
        </Flex>

        <Box align="left" p="10" h="300px">
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
              mx={10}
              cursor="pointer"
              textDecor="underline"
              color={"brand.600"}
              wordBreak="break-word"
            >
              {eventpost.email}
            </Text>

          </Flex>

        </Box>
        <Box align="right" mt="5">
           <Link href={`${eventpost.sns}`}>
            <Button colorScheme="purple" variant="solid" align="right">
              イベント詳細ページ
            </Button>
            </Link>
          </Box>
      </Box>
    </Flex>
      </Link> 
        </Box>
         </>
     )
 }
 