import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

function Usuarios() {
  return (
    <>
      <Head>
        <title>Dubhe - Usuários</title>
      </Head>
      <Layout>
        <Heading color={'gray.200'}>Usuários</Heading>
      </Layout>;
    </>
  )
}

export default Usuarios