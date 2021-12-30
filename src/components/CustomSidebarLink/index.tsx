import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const CustomSidebarLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <ChakraLink
      as={Link}
      to={to}
      {...props}
      paddingX="6"
      paddingY="2"
      roundedTopRight="lg"
      roundedBottomRight="lg"
      color="white"
      display="inline-flex"
      alignItems="center"
      backgroundColor={match ? 'sky.400' : 'transparent'}
      _hover={{ backgroundColor: 'sky.400' }}
      _focus={{ outline: '0' }}
    >
      {children}
    </ChakraLink>
  )
}

export default CustomSidebarLink
