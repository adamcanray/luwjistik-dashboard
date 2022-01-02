import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HiOutlineUserCircle, HiOutlineLogout } from 'react-icons/hi'
import { useAppSelector } from '../../../application/store'

const Navbar = () => {
  const themeCurrentColorVariant = useAppSelector(
    (state) => state.color_variant.currentColorVariant
  )
  return (
    <Flex
      paddingX="4"
      paddingY="2"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="gray.300"
    >
      <Box>
        <Heading size="md">Luwjistik App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            variant="link"
            colorScheme={themeCurrentColorVariant}
            borderRadius="full"
          >
            <Icon
              as={HiOutlineUserCircle}
              w={10}
              h={10}
              color={`${themeCurrentColorVariant}.500`}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Other">
              <MenuItem>
                <IconButton
                  icon={<Icon as={HiOutlineLogout} />}
                  as={Link}
                  to={{ pathname: `/logout` }}
                  variant="solid"
                  colorScheme="red"
                  aria-label="Logout"
                />
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar
