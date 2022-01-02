import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  HiOutlinePresentationChartBar,
  HiOutlineCollection,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { CustomSidebarLink } from '../..'
import { layout_action } from '../../../application/saga/layout'
import { useAppDispatch, useAppSelector } from '../../../application/store'

const SidebarContents = () => {
  return (
    <>
      <Text paddingX="4" fontSize="2xl" color="gray.700" fontWeight="semibold">
        Luwjistik App
      </Text>
      <Box marginTop="8" experimental_spaceY="2">
        <Box>
          <Text paddingX="4" fontSize="lg" color="gray.700" fontWeight="medium">
            Dashboard
          </Text>
          <VStack marginTop="2" spacing="0" align="stretch">
            <CustomSidebarLink to={{ pathname: `/dashboard` }}>
              <Icon as={HiOutlinePresentationChartBar} marginRight="2" />
              <Text>Overview</Text>
            </CustomSidebarLink>
          </VStack>
        </Box>
        <Box>
          <Text paddingX="4" fontSize="lg" color="gray.700" fontWeight="medium">
            Tables
          </Text>
          <VStack marginTop="2" spacing="0" align="stretch">
            <CustomSidebarLink to={{ pathname: `/dashboard/order` }}>
              <Icon as={HiOutlineCollection} marginRight="2" />
              <Text>Orders</Text>
            </CustomSidebarLink>
            <CustomSidebarLink to={{ pathname: `/dashboard/users` }}>
              <Icon as={HiOutlineUserGroup} marginRight="2" />
              <Text>Users</Text>
            </CustomSidebarLink>
          </VStack>
        </Box>
        <Box>
          <Text paddingX="4" fontSize="lg" color="gray.700" fontWeight="medium">
            Section
          </Text>
          <Accordion
            marginTop="2"
            defaultIndex={[0]}
            allowMultiple
            _last={{ borderColor: 'transparent' }}
          >
            <AccordionItem borderWidth="0">
              <AccordionButton
                _focus={{ outline: '0' }}
                _hover={{ backgroundColor: 'gray.100' }}
              >
                <Box flex="1" textAlign="left" color="gray.700">
                  Attention
                </Box>
                <AccordionIcon color="gray.700" />
              </AccordionButton>
              <AccordionPanel pb={4} color="gray.700" fontWeight="light">
                This application does not yet have a responsive layout, features
                and infrastructure first
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderWidth="0">
              <AccordionButton
                _focus={{ outline: '0' }}
                _hover={{ backgroundColor: 'gray.100' }}
              >
                <Box flex="1" textAlign="left" color="gray.700">
                  Section 2 title
                </Box>
                <AccordionIcon color="gray.700" />
              </AccordionButton>
              <AccordionPanel pb={4} color="gray.700" fontWeight="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  )
}

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const sidebarIsOpen = useAppSelector((state) => state.layout.sidebar.isOpen)
  return (
    <Box zIndex="10">
      <Box
        position="absolute"
        overflowY="auto"
        minHeight="full"
        maxHeight="full"
        width={{ base: '0', md: '60' }}
        display={{ base: 'none', md: 'block' }}
        paddingX=""
        paddingY="6"
        borderRight="1px"
        borderColor="gray.300"
        backgroundColor="white"
      >
        <SidebarContents />
      </Box>
      <Drawer
        isOpen={sidebarIsOpen}
        placement="left"
        onClose={() => dispatch(layout_action.sidebarOnClose())}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <SidebarContents />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Sidebar
