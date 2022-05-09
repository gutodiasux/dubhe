import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import { AddSellerModal } from '../../components/modals'

function PontosDeVenda() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Head>
        <title>Dubhe - Pontos de Venda</title>
      </Head>
      <Layout>
        <Flex w={'100%'} justify={'space-between'}>
          <Heading color={'gray.200'}>Pontos de Venda</Heading>
          <Button
            backgroundColor={'#F7F700'}
            _hover={{
              backgroundColor:
                '#F7F70095'
            }}
            color={'#293443'}
            onClick={onOpen}
          >
            Adicionar Ponto de Venda
          </Button>
        </Flex>
      </Layout>;
      <AddSellerModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default PontosDeVenda