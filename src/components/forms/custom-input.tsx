import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from '@chakra-ui/react'
import React from 'react'
import InputMask from 'react-input-mask'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
  mask?: string
}

function CustomInput({ name, label, mask, ...rest }: InputProps) {

  if (mask) {
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
          as={InputMask}
          mask={mask}
          backgroundColor={'gray.200'}
          focusBorderColor={'#F7F700'}
          {...rest}
        />
      </FormControl>
    )
  }

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