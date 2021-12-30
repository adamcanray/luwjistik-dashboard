import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../application/store/store'
import { theme } from '../../core'

export const WrapperApp: React.FC = (props) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <React.StrictMode>{props.children}</React.StrictMode>
      </ChakraProvider>
    </Provider>
  )
}
