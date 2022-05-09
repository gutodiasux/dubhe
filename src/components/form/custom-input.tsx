import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from '@chakra-ui/react'
import React from 'react'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
}

function CustomInput({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel
        htmlFor={name}
        color={'gray.200'}
        fontWeight={'normal'}
      >
        {label}
      </FormLabel>}
      <Input
        name={name}
        id={name}
        backgroundColor={'gray.200'}
        focusBorderColor={'#F7F700'}
        {...rest}
      />
    </FormControl>
  )
}

export default CustomInput