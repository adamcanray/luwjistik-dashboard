import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  RepeatIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { order_action } from '../../../application/saga/order'
import {
  TOrderCreateRequest,
  TOrder,
} from '../../../application/saga/order/type/order_type'
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../application/store'
import { ReactTable } from '../../../components'

const OrderPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TOrderCreateRequest>()
  const dispatch = useAppDispatch()
  const orderCreateFlowRequest = useAppSelector(
    (state: RootState) => state.order.create.flow.request
  )
  const orderCreateFlowSuccess = useAppSelector(
    (state: RootState) => state.order.create.flow.success
  )
  const orderCreateFlowFailure = useAppSelector(
    (state: RootState) => state.order.create.flow.failure
  )
  const orderCreateResponseFailure = useAppSelector(
    (state: RootState) => state.order.create.response.failure
  )
  const orderListFlowRequest = useAppSelector(
    (state: RootState) => state.order.list.flow.request
  )
  const orderListFlowSuccess = useAppSelector(
    (state: RootState) => state.order.list.flow.success
  )
  const orderListFlowFailure = useAppSelector(
    (state: RootState) => state.order.list.flow.failure
  )
  const orderListResponseSuccess = useAppSelector(
    (state: RootState) => state.order.list.response.success
  )
  const orderListResponseFailure = useAppSelector(
    (state: RootState) => state.order.list.response.failure
  )
  const fetchOrderList = useCallback(() => {
    dispatch(order_action.orderList())
  }, [dispatch])
  const onSubmitOrderCreate = (data: TOrderCreateRequest) => {
    dispatch(order_action.orderCreate(data))
  }
  const columns = useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }: any) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </span>
        ),
      },
      {
        Header: 'Order',
        columns: [
          {
            Header: 'ID',
            accessor: 'order_id',
          },
        ],
      },
      {
        Header: 'Consignee',
        columns: [
          {
            Header: 'Name',
            accessor: 'consignee_name',
          },
        ],
      },
      {
        Header: 'Characteristics',
        columns: [
          {
            Header: 'Length',
            accessor: 'length',
          },
          {
            Header: 'Width',
            accessor: 'width',
          },
          {
            Header: 'Height',
            accessor: 'height',
          },
          {
            Header: 'Weight',
            accessor: 'weight',
          },
        ],
      },
      {
        Header: 'Payment Type',
        columns: [
          {
            Header: '',
            accessor: 'payment_type',
          },
        ],
      },
      {
        Header: 'Pickup',
        columns: [
          {
            Header: 'Contact Name',
            accessor: 'pickup_contact_name',
          },
        ],
      },
    ],
    []
  )
  const data = useMemo(
    () => orderListResponseSuccess.data,
    [orderListResponseSuccess]
  )
  const renderRowSubComponent = useCallback(
    ({ rows: { original } }: { rows: { original: TOrder } }) => {
      return (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          spacing="32"
        >
          <Box>
            <Text fontSize="x-large">Consignee Details</Text>
            <List marginTop="3" spacing="2">
              <ListItem>Name: {original.consignee_name}</ListItem>
              <ListItem>Number: {original.consignee_number}</ListItem>
              <ListItem>Address: {original.consignee_address}</ListItem>
              <ListItem>Postal: {original.consignee_postal}</ListItem>
              <ListItem>Country: {original.consignee_country}</ListItem>
              <ListItem>City: {original.consignee_city}</ListItem>
              <ListItem>State: {original.consignee_state}</ListItem>
              <ListItem>Province: {original.consignee_province}</ListItem>
              <ListItem>Email: {original.consignee_email}</ListItem>
            </List>
          </Box>
          <Box>
            <Text fontSize="x-large">Pickup Details</Text>
            <List marginTop="3" spacing="2">
              <ListItem>Name: {original.pickup_contact_name}</ListItem>
              <ListItem>Number: {original.pickup_contact_number}</ListItem>
              <ListItem>Address: {original.pickup_address}</ListItem>
              <ListItem>Postal: {original.pickup_postal}</ListItem>
              <ListItem>Country: {original.pickup_country}</ListItem>
              <ListItem>City: {original.pickup_city}</ListItem>
              <ListItem>State: {original.pickup_state}</ListItem>
              <ListItem>Province: {original.pickup_province}</ListItem>
            </List>
          </Box>
        </Stack>
      )
    },
    []
  )
  useEffect(() => {
    fetchOrderList()
  }, [fetchOrderList])
  useEffect(() => {
    if (orderCreateFlowSuccess) {
      toast({
        title: 'Order created.',
        description: 'Order create success.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      reset()
      onClose()
    } else if (orderCreateFlowFailure) {
      toast({
        title: orderCreateResponseFailure.status,
        description: orderCreateResponseFailure.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [
    toast,
    onClose,
    reset,
    orderCreateFlowSuccess,
    orderCreateFlowFailure,
    orderCreateResponseFailure,
  ])
  return (
    <Stack paddingY="6">
      <Stack direction="row" justifyContent="space-between" spacing="4">
        <Stack direction="row" spacing="4" alignItems="center">
          <Text fontSize="xx-large" fontWeight="semibold">
            Table Orders
          </Text>
          {orderListFlowRequest && <Spinner color="sky.500" size="md" />}
        </Stack>
        <Stack direction="row" spacing="2" alignItems="center">
          <IconButton
            onClick={() => fetchOrderList()}
            icon={<RepeatIcon />}
            colorScheme="gray"
            variant="solid"
            aria-label="re-fetchOrderList"
            isLoading={orderListFlowRequest}
          ></IconButton>
          <Button
            onClick={onOpen}
            leftIcon={<AddIcon />}
            colorScheme="sky"
            variant="solid"
          >
            Create Order
          </Button>
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Order</ModalHeader>
            <ModalCloseButton />
            <Box as="form" onSubmit={handleSubmit(onSubmitOrderCreate)}>
              <ModalBody>
                <Stack id="formOrderCreate" spacing="4">
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_name">
                      Consignee Name{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_name', { required: true })}
                        id="consignee_name"
                        type="text"
                        placeholder="Consignee Name"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_name && (
                      <FormHelperText color="red.500">
                        Consignee Name is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_number">
                      Consignee Number{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('consignee_number', { required: true })}
                          id="consignee_number"
                          placeholder="Consignee Number"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.consignee_number && (
                      <FormHelperText color="red.500">
                        Consignee Number is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_address">
                      Consignee Address{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_address', { required: true })}
                        id="consignee_address"
                        type="text"
                        placeholder="Consignee Address"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_address && (
                      <FormHelperText color="red.500">
                        Consignee Address is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_postal">
                      Consignee Postal{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('consignee_postal', { required: true })}
                          id="consignee_postal"
                          placeholder="Consignee Postal"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.consignee_postal && (
                      <FormHelperText color="red.500">
                        Consignee Postal is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_country">
                      Consignee Country{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_country', { required: true })}
                        id="consignee_country"
                        type="text"
                        placeholder="Consignee Country"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_country && (
                      <FormHelperText color="red.500">
                        Consignee Country is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_city">
                      Consignee City{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_city', { required: true })}
                        id="consignee_city"
                        type="text"
                        placeholder="Consignee City"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_city && (
                      <FormHelperText color="red.500">
                        Consignee City is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_state">
                      Consignee State{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_state', { required: true })}
                        id="consignee_state"
                        type="text"
                        placeholder="Consignee State"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_state && (
                      <FormHelperText color="red.500">
                        Consignee State is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_province">
                      Consignee Province{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_province', { required: true })}
                        id="consignee_province"
                        type="text"
                        placeholder="Consignee Province"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_province && (
                      <FormHelperText color="red.500">
                        Consignee Province is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="consignee_email">
                      Consignee Email
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('consignee_email', { required: false })}
                        id="consignee_email"
                        type="email"
                        placeholder="Consignee Email"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.consignee_email && (
                      <FormHelperText color="red.500">
                        Consignee Email is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="length">Length</FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('length', { required: false })}
                          id="length"
                          placeholder="Length"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.length && (
                      <FormHelperText color="red.500">
                        Length is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="width">Width</FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('width', { required: false })}
                          id="width"
                          placeholder="Width"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.width && (
                      <FormHelperText color="red.500">
                        Width is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="height">Height</FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('height', { required: false })}
                          id="height"
                          placeholder="Height"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.height && (
                      <FormHelperText color="red.500">
                        Height is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="weight">Weight</FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('weight', { required: false })}
                          id="weight"
                          placeholder="Weight"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.weight && (
                      <FormHelperText color="red.500">
                        Weight is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="payment_type">Payment Type</FormLabel>
                    <InputGroup>
                      <Input
                        {...register('payment_type', { required: false })}
                        id="payment_type"
                        type="text"
                        placeholder="Payment Type"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.payment_type && (
                      <FormHelperText color="red.500">
                        Payment Type is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_contact_name">
                      Pickup Contact Name{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_contact_name', { required: true })}
                        id="pickup_contact_name"
                        type="text"
                        placeholder="Pickup Contact Name"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_contact_name && (
                      <FormHelperText color="red.500">
                        Pickup Contact Name is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_contact_number">
                      Pickup Contact Number{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('pickup_contact_number', {
                            required: true,
                          })}
                          id="pickup_contact_number"
                          placeholder="Pickup Contact Number"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.pickup_contact_number && (
                      <FormHelperText color="red.500">
                        Pickup Contact Number is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_address">
                      Pickup Address{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_address', { required: true })}
                        id="pickup_address"
                        type="text"
                        placeholder="Pickup Address"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_address && (
                      <FormHelperText color="red.500">
                        Pickup Address is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_postal">
                      Pickup Postal{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <NumberInput width="100%">
                        <NumberInputField
                          {...register('pickup_postal', { required: true })}
                          id="pickup_postal"
                          placeholder="Pickup Postal"
                          _focus={{
                            ring: '2',
                            ringColor: 'sky.500',
                          }}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </InputGroup>
                    {errors.pickup_postal && (
                      <FormHelperText color="red.500">
                        Pickup Postal is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_country">
                      Pickup Country{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_country', { required: true })}
                        id="pickup_country"
                        type="text"
                        placeholder="Pickup Country"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_country && (
                      <FormHelperText color="red.500">
                        Pickup Country is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_city">
                      Pickup City{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_city', { required: true })}
                        id="pickup_city"
                        type="text"
                        placeholder="Pickup City"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_city && (
                      <FormHelperText color="red.500">
                        Pickup City is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_state">
                      Pickup State{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_state', { required: true })}
                        id="pickup_state"
                        type="text"
                        placeholder="Pickup State"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_state && (
                      <FormHelperText color="red.500">
                        Pickup State is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl isRequired={false}>
                    <FormLabel htmlFor="pickup_province">
                      Pickup Province{' '}
                      <Box as="span" color="red.500">
                        *
                      </Box>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...register('pickup_province', { required: true })}
                        id="pickup_province"
                        type="text"
                        placeholder="Pickup Province"
                        _focus={{
                          ring: '2',
                          ringColor: 'sky.500',
                        }}
                      />
                    </InputGroup>
                    {errors.pickup_province && (
                      <FormHelperText color="red.500">
                        Pickup Province is required.
                      </FormHelperText>
                    )}
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="sky"
                  leftIcon={<AddIcon />}
                  isLoading={orderCreateFlowRequest}
                >
                  Create
                </Button>
              </ModalFooter>
            </Box>
          </ModalContent>
        </Modal>
      </Stack>
      <Stack overflowX="scroll">
        <ReactTable
          data={data}
          columns={columns}
          renderRowSubComponent={renderRowSubComponent}
        />
        {orderListFlowSuccess && orderListResponseSuccess.data.length === 0 && (
          <Box display="flex" justifyContent="center" paddingY="2">
            <Text color="gray.700" fontSize="sm">
              data is empty. try to create new order.
            </Text>
          </Box>
        )}
        {orderListFlowFailure && (
          <Box display="flex" justifyContent="center" paddingY="2">
            <Text color="red.500" fontSize="sm">
              {`${orderListResponseFailure.status} - ${orderListResponseFailure.message}`}
            </Text>
          </Box>
        )}
      </Stack>
    </Stack>
  )
}

export default OrderPage
