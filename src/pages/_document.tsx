import { Box } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <Box as='body' bg={'#242d3a'}>
        <Main />
        <NextScript />
      </Box>
    </Html>
  )
}