import {
  Box,
  Button,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from 'react'
import CustomInput from '../forms/custom-input'

type AddSellerModal = {
  isOpen: boolean
  onClose: () => void
}

export function AddSellerModal({ isOpen, onClose }: AddSellerModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
      <ModalOverlay />
      <ModalContent bg={'#242d3a'}>
        <ModalHeader color={'gray.200'}>
          Adicione um ponto de venda
        </ModalHeader>
        <ModalBody>
          <Grid
            as='form'
            templateColumns={'repeat(2, 1fr)'}
            gap={'16px'}
          >
            <CustomInput label='Nome do negócio' name='business_name' />
            <CustomInput label='Número de contato' mask='(99) 9 9999-9999' name='business_phone' />
            <CustomInput label='Email' name='business_email' />
            <CustomInput label='Localização' name='location_mark' />
            <Box></Box>
            <Flex justify={'flex-end'}>
              <Button bg={'#F7F700'} _hover={{ bg: '#F7F700' }}>
                Criar Ponto de Venda
              </Button>
            </Flex>
          </Grid>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}