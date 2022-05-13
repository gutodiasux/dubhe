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
  ModalOverlay,
  useToast
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { api } from '../../infra/api'
import { queryClient } from '../../pages/_app'
import { CustomInput } from '../forms/custom-input'

type AddSellerModal = {
  isOpen: boolean
  onClose: () => void
}

type CreateSellerFormData = {
  business_name: string
  business_phone: string
  business_email: string
  location_mark: string
}

export function AddSellerModal({ isOpen, onClose }: AddSellerModal) {
  const toast = useToast()

  const mutation = useMutation(async (seller: CreateSellerFormData) => {
    await api.post('/sellers/create', seller)
  }, {
    onSuccess: () => {
      toast({
        status: 'success',
        title: 'Adicionado',
        description: 'Ponto de venda adicionado com sucesso'
      }),
        onClose(),
        queryClient.invalidateQueries('sellersList')
    }
  })



  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()

  const handleCreateSeller = async (values: any) => {
    await mutation.mutateAsync(values)
  }

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
            onSubmit={handleSubmit(handleCreateSeller)}
          >
            <CustomInput label='Nome do negócio' {...register('business_name')} />
            <CustomInput label='Número de contato' mask='(99) 9 9999-9999'{...register('business_phone')} />
            <CustomInput label='Email' {...register('business_email')} />
            <CustomInput label='Localização' {...register('location_mark')} />
            <Box></Box>
            <Flex justify={'flex-end'}>
              <Button type='submit' bg={'#F7F700'} _hover={{ bg: '#F7F700' }} isLoading={mutation.isLoading}>
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