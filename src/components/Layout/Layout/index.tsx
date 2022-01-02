import { Box, Container, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '..'

const Layout = () => {
  return (
    <Flex minHeight="100vh">
      <Sidebar />
      <Box width="100%">
        <Navbar />
        <Box marginLeft={{ base: '0', md: '60' }}>
          <Container maxW="container.xl">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}

export default Layout
