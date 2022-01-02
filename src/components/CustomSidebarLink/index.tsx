import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useAppSelector } from '../../application/store'

const CustomSidebarLink = ({ children, to, ...props }: LinkProps) => {
  const themeCurrentColorVariant = useAppSelector(
    (state) => state.color_variant.currentColorVariant
  )
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
      borderColor={match ? `${themeCurrentColorVariant}.400` : 'transparent'}
      _hover={{ backgroundColor: 'gray.100' }}
      _focus={{ outline: '0' }}
    >
      {children}
    </ChakraLink>
  )
}

export default CustomSidebarLink
