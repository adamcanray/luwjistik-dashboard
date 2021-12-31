import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingTop="20"
    >
      <Box textAlign="center">
        <Text fontSize="xxx-large" fontWeight="bold">
          404
        </Text>
        <Text fontSize="x-large">Noting to see here</Text>
        <Button
          as={Link}
          to={{ pathname: `/dashboard` }}
          colorScheme="sky"
          marginTop="4"
          size="sm"
        >
          Go to the overview page
        </Button>
      </Box>
    </Stack>
  )
}

export default NoMatch
