import {
  Box,
  Button,
  Flex,
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
import { useAppDispatch, useAppSelector } from '../../../application/store'
import { HamburgerIcon } from '@chakra-ui/icons'
import { layout_action } from '../../../application/saga/layout'

const Navbar = () => {
  const dispatch = useAppDispatch()
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
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          onClick={() => dispatch(layout_action.sidebarOnOpen())}
          aria-label="Search database"
          icon={<HamburgerIcon />}
        />
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
