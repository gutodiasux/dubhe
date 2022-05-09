import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

function PontosDeVenda() {
  return (
    <>
      <Head>
        <title>Dubhe - Pontos de Venda</title>
      </Head>
      <Layout>
        <Heading color={'gray.200'}>Pontos de Venda</Heading>
      </Layout>;
    </>
  )
}

export default PontosDeVenda