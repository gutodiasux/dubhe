import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

function Configuracoes() {
  return (
    <>
      <Head>
        <title>Dubhe - Dashboard</title>
      </Head>
      <Layout>
        <Heading color={'gray.200'}>Content</Heading>
      </Layout>;
    </>
  )
}

export default Configuracoes