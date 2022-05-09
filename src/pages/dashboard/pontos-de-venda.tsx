import { Button, Flex, Heading } from '@chakra-ui/react'
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
        <Flex w={'100%'} justify={'space-between'}>
          <Heading color={'gray.200'}>Pontos de Venda</Heading>
          <Button backgroundColor={'#F7F700'} _hover={{ backgroundColor: '#F7F70095' }} color={'#293443'}>
            Adicionar Ponto de Venda
          </Button>
        </Flex>
      </Layout>;
    </>
  )
}

export default PontosDeVenda