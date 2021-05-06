import React from "react";
import { chakra, Box, Flex, Button, Link, Image } from "@chakra-ui/react";


const BlogLink = () => {
    return (
        <>
        <Box mb="40" mt="20" textAlign="center">
        <Link href="posts">
        <Button size="lg" border="2px"
        borderColor="gray"><a>他の記事も見てみる</a></Button>
        </Link>
        </Box>
        </>
    )
}

export default BlogLink