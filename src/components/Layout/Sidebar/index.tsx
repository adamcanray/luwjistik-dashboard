import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  HiOutlinePresentationChartBar,
  HiOutlineCollection,
} from 'react-icons/hi'
import { CustomSidebarLink } from '../..'

const Sidebar = () => {
  return (
    <Box
      position="absolute"
      overflowY="auto"
      minHeight="full"
      maxHeight="full"
      width={{ base: '0', md: '60' }}
      paddingX=""
      paddingY="6"
      backgroundColor="sky.500"
    >
      <Text paddingX="4" fontSize="2xl" color="white" fontWeight="semibold">
        Luwjistik App
      </Text>
      <Box marginTop="8" experimental_spaceY="2">
        <Box>
          <Text paddingX="4" fontSize="lg" color="white" fontWeight="medium">
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
          <Text paddingX="4" fontSize="lg" color="white" fontWeight="medium">
            Tables
          </Text>
          <VStack marginTop="2" spacing="0" align="stretch">
            <CustomSidebarLink to={{ pathname: `/dashboard/order` }}>
              <Icon as={HiOutlineCollection} marginRight="2" />
              <Text>Orders</Text>
            </CustomSidebarLink>
            <CustomSidebarLink to={{ pathname: `/dashboard/users` }}>
              <Icon as={HiOutlineCollection} marginRight="2" />
              <Text>Users</Text>
            </CustomSidebarLink>
          </VStack>
        </Box>
        <Box>
          <Text paddingX="4" fontSize="lg" color="white" fontWeight="medium">
            Section
          </Text>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            _last={{ borderColor: 'transparent' }}
          >
            <AccordionItem borderWidth="0">
              <AccordionButton
                _focus={{ outline: '0' }}
                _hover={{ backgroundColor: 'sky.400' }}
              >
                <Box flex="1" textAlign="left" color="white">
                  Section 1 title
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
              <AccordionPanel pb={4} color="white" fontWeight="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderWidth="0">
              <AccordionButton
                _focus={{ outline: '0' }}
                _hover={{ backgroundColor: 'sky.400' }}
              >
                <Box flex="1" textAlign="left" color="white">
                  Section 2 title
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
              <AccordionPanel pb={4} color="white" fontWeight="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
