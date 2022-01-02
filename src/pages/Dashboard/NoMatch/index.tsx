import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../application/store'

const NoMatch = () => {
  const themeCurrentColorVariant = useAppSelector(
    (state) => state.color_variant.currentColorVariant
  )
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
          colorScheme={themeCurrentColorVariant}
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
