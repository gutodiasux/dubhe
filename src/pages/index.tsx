import { Box, Button, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

const Home = () => {
  const router = useRouter()

  const handleUserToLoginPage = (e: FormEvent) => {
    e.preventDefault()
    router.push('/login')
  }
  return (
    <>
      <Head>
        <title>Dubhe - Welcome</title>
      </Head>
      <Box height={'100vh'} backgroundColor={'#293443'}>
        <Flex width={'100vw'} height={'100vh'} justify={'center'} align={'center'} flexDirection={'column'}>
          <Image src='/welcome-to-dubhe.svg' height={134} width={121} objectFit='contain' alt='Bem vindo ao Dubhe' />
          <Button backgroundColor={'#F7F700'} _hover={{ backgroundColor: '#F7F70095' }} color={'#293443'} onClick={handleUserToLoginPage}>
            Fazer login
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default Home
