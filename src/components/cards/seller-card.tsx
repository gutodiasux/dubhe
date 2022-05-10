import {
  Box, Center, Heading, Image, Stack, Text, useColorModeValue
} from '@chakra-ui/react'

export default function SellerlProfileWithImage() {
  return (
    <Center py={6} cursor={'pointer'}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'270px'}
          w={'full'}
          src={
            '/gym-logo.jpg'
          }
          objectFit={'cover'}
          alt=''
        />
        {/*         <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            css={{
              border: '2px solid white',
            }}
          />
        </Flex> */}

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Sports Club
            </Heading>
            <Text color={'gray.500'}>Academia</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>500</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Assinantes
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Vendas
              </Text>
            </Stack>
          </Stack>

          {/*           <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button> */}
        </Box>
      </Box>
    </Center>
  )
}