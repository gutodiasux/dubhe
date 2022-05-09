import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import NavLink from 'next/link'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineCategory } from 'react-icons/md'
import { RiDashboardLine, RiStore2Line } from 'react-icons/ri'
import { MobileNav } from './nav/mobile-nav'
import { NavItem } from './nav/nav-item'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: RiDashboardLine, href: '/dashboard' },
  { name: 'Pontos de Venda', icon: RiStore2Line, href: '/dashboard/pontos-de-venda' },
  { name: 'Categorias', icon: MdOutlineCategory, href: '/dashboard/categorias' },
  { name: 'Usuários', icon: HiOutlineUsers, href: '/dashboard/usuarios' },
  { name: 'Configurações', icon: FiSettings, href: '/dashboard/configuracoes' },
]

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('#323b47', 'white')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#242d3a', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.600', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src='/favicon.svg' width={44} height={31} alt='Dubhe' />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavLink key={link.name} href={link.href} passHref>
          <NavItem icon={link.icon}>
            {link.name}
          </NavItem>
        </NavLink>
      ))}
    </Box>
  )
}