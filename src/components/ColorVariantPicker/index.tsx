import { SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { color_variant_action } from '../../application/saga/theme'
import { useAppDispatch, useAppSelector } from '../../application/store'
import { colorVariantMap } from '../../core'

const ColorVariantPicker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useAppDispatch()
  const themeCurrentColorVariant = useAppSelector(
    (state) => state.color_variant.currentColorVariant
  )
  return (
    <Box position="fixed" top="45vh" right="4" zIndex="10">
      <Button
        onClick={onOpen}
        colorScheme={themeCurrentColorVariant}
        shadow="lg"
      >
        <SettingsIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Color Variant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              {colorVariantMap().map((e, i) => (
                <Button
                  key={i}
                  colorScheme={e.name}
                  onClick={() =>
                    dispatch(color_variant_action.colorVariant(e.name))
                  }
                  isActive={themeCurrentColorVariant === e.name}
                  _active={{
                    ring: '4',
                    ringColor: e.color,
                    backgroundColor: `${e.name}.${e.colorKey + 300}`,
                  }}
                  borderRadius="full"
                  marginRight="2"
                  marginTop="2"
                ></Button>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ColorVariantPicker
