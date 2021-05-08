import { Box, Container,Flex,Heading,chakra,Link,Text,Grid,Button} from "@chakra-ui/react";


export default function TelaEventCard({event}) {
    // console.log(event);
    return (
    <Box align="center">
    {/* <Link　href={`/event/${event.tela}`}> */}
     <Flex 
     key={event.id}
      p={20}
      w="80%"
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
            {event.group}
          </chakra.span>
          <chakra.span
            bg={"#fff3c7"}
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

        <Box align="left" p="10">
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color={"gray.800"}
          >
            {event.content}
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color={"gray.600"}
          >
           {event.content}
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="center"
            mt={2}
            color={"gray.700"}
          >
            <span>日付:{event.date}</span>
           
            <Text
              mx={10}
              cursor="pointer"
              textDecor="underline"
              color={"brand.600"}
              wordBreak="break-word"
            >
              {event.email}
            </Text>
          </Flex>
        </Box>

        <Box align="right">
            <Link href={`${event.sns}`}>
            <Button colorScheme="purple" variant="solid" align="right" w="200px">
              イベント詳細ページ
            </Button>
          </Link>
          </Box>
      </Box>
    </Flex>
   
            
        </Box>
    )
}
