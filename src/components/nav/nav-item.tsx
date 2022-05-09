import { Flex, FlexProps, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavItemProps extends FlexProps {
  icon: IconType
  children: string
}

export function NavItem({ icon, children, ...rest }: NavItemProps) {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        color='gray.200'
        cursor="pointer"
        _hover={{
          bg: '#F7F700',
          color: '#293443',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: '#293443',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}