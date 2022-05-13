import { Box, Button, Flex, Heading, HStack, IconButton, Spinner, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { RiEditLine, RiEyeLine } from 'react-icons/ri'
import { useQuery } from 'react-query'
import Layout from '../../components/layout'
import { AddSellerModal } from '../../components/modals'
import { api } from '../../infra/api'

type Seller = {
  id: string
  business_name: string
  seller_profile: {
    business_email: string
    business_phone: string
    location_mark: string
  }
}

function PontosDeVenda() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { data, isLoading, error } = useQuery('sellersList', async () => {
    const { data } = await api.get('/sellers/list')
    console.log(data)
    return data
  })

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
        <Box my={'24px'} border={'1px'} borderColor={'gray.200'} borderRadius={'lg'}>
          {isLoading ? (
            <Flex w='100%' h={16} justify={'center'} alignItems={'center'}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Heading as='h3' fontSize={'lg'}>Erro ao listar Pontos de Venda</Heading>
          ) : (
            <Table color={'whiteAlpha'}>
              <Thead>
                <Tr>
                  <Th color={'white'}>Nome</Th>
                  <Th color={'white'}>Responsável</Th>
                  <Th color={'white'}>Contato</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((seller: Seller) => {
                  return (
                    <Tr key={seller.id}>
                      <Td color={'gray.400'}>{seller.business_name}</Td>
                      <Td color={'gray.400'}>{seller.business_name}</Td>
                      <Td color={'gray.400'}>{seller.seller_profile.business_phone}</Td>
                      <Td>
                        <HStack spacing={'16px'} justify={'flex-end'}>
                          <IconButton aria-label='Ver' colorScheme={'blue'} icon={<RiEyeLine />} />
                          <IconButton aria-label='Editar' colorScheme={'teal'} icon={<RiEditLine />} />
                        </HStack>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          )}
        </Box>
      </Layout>;
      <AddSellerModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default PontosDeVenda