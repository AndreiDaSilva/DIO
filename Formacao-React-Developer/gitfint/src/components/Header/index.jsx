import {Box, Text} from "@chakra-ui/react"

const Header = ({title}) => {
  return (
    <header>
        <Box>
            <Text>
                {title}
            </Text>
        </Box>
    </header>
  )
}

export default Header;