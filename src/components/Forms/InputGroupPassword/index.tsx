import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import { forwardRef, LegacyRef, useState } from 'react'

const InputGroupPassword = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>): JSX.Element => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
      <InputGroup size="md">
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.300" />}
        />
        <Input
          {...props}
          ref={ref}
          pr="4.5rem"
          type={show ? 'text' : 'password'}
        />
        <InputRightElement width="3.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
)

export default InputGroupPassword
