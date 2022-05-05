import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <Box height={'100vh'} backgroundColor={'#293443'}>
      {children}
    </Box>
  )
}

export default Layout