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
      color="gray.700"
      display="inline-flex"
      alignItems="center"
      borderLeft="4px"
      borderColor={match ? 'sky.400' : 'transparent'}
      _hover={{ backgroundColor: 'gray.100' }}
      _focus={{ outline: '0' }}
    >
      {children}
    </ChakraLink>
  )
}

export default CustomSidebarLink
