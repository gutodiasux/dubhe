import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from 'react'

type AddSellerModal = {
  isOpen: boolean
  onClose: () => void
}

export function AddSellerModal({ isOpen, onClose }: AddSellerModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Adicione um ponto de venda
        </ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}