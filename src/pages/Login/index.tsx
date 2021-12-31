import { EmailIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login_action } from '../../application/saga/auth'
import { TLoginRequest } from '../../application/saga/auth/type/login_type'
import { useAppDispatch, useAppSelector } from '../../application/store'
import { InputGroupPassword } from '../../components'

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loginFlowRequest = useAppSelector((state) => state.login.flow.request)
  const loginFlowFailure = useAppSelector((state) => state.login.flow.failure)
  const loginFlowSuccess = useAppSelector((state) => state.login.flow.success)
  const loginResponseFailure = useAppSelector(
    (state) => state.login.response.failure
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>()
  const onSubmitLogin = (data: TLoginRequest) => {
    dispatch(login_action.loginSubmit(data))
  }
  useEffect(() => {
    if (loginFlowSuccess) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate, loginFlowSuccess])

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        marginTop="20"
        maxW="lg"
        borderRadius="lg"
        boxShadow="lg"
        paddingX="6"
        paddingY="4"
        backgroundColor="white"
      >
        <Box as="form" onSubmit={handleSubmit(onSubmitLogin)}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  {...register('email', { required: true })}
                  id="email"
                  type="email"
                  placeholder="Email"
                  _focus={{
                    ring: '2',
                    ringColor: 'sky.500',
                  }}
                />
              </InputGroup>
              {errors.email && (
                <FormHelperText color="red.400">
                  Email is required.
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroupPassword
                {...register('password', { required: true })}
                id="password"
                placeholder="Password"
                _focus={{
                  ring: '2',
                  ringColor: 'sky.500',
                }}
              />
              {errors.password && (
                <FormHelperText color="red.400">
                  Password is required.
                </FormHelperText>
              )}
            </FormControl>
            {loginFlowFailure && (
              <Alert status="error">
                <AlertIcon />
                {loginResponseFailure.message}
              </Alert>
            )}
            <Button
              type="submit"
              variant="solid"
              colorScheme="sky"
              isLoading={loginFlowRequest}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
