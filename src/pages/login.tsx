import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

function Login() {
  const router = useRouter()
  const handleUserLogin = (e: FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>Dubhe - Login</title>
      </Head>
      <Box height={'100vh'} backgroundColor={'#293443'}>
        <Flex
          width={'100vw'}
          height={'100vh'}
          justify={'center'}
          align={'center'}
          flexDirection={'column'}
        >
          <Image src='/welcome-to-dubhe.svg' height={134} width={121} objectFit='contain' alt='Bem vindo ao Dubhe' />
          <Flex as={'form'} width={'320px'} flexDirection={'column'} gap={'16px'} backgroundColor={'#242d3a'} padding={'16px'} borderRadius={'lg'}>
            <FormControl>
              <FormLabel htmlFor='email' color={'gray.200'} fontWeight={'normal'}>Email</FormLabel>
              <Input name='email' backgroundColor={'gray.200'} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password' color={'gray.200'} fontWeight={'normal'}>Senha</FormLabel>
              <Input name='password' backgroundColor={'gray.200'} />
            </FormControl>
            <Flex width={'100%'} justify={'flex-end'}>
              <Button backgroundColor={'#F7F700'} _hover={{ backgroundColor: '#F7F70095' }} color={'#293443'} onClick={handleUserLogin}>
                Fazer login
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Login