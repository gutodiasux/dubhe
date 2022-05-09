import React, { ReactNode } from 'react'
import SimpleSidebar from './sidebar-menu'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <SimpleSidebar>
      {children}
    </SimpleSidebar>
  )
}

export default Layout