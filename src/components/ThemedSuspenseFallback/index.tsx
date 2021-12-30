import { Box, CircularProgress } from '@chakra-ui/react'

const ThemedSuspenseFallback = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress isIndeterminate color="indigo.300" />
    </Box>
  )
}

export default ThemedSuspenseFallback
