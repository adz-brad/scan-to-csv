import React from 'react'
import { Box } from "native-base"

const Main = ({ height, width, top, children }) => {
    return(
        <Box
            position="absolute"
            top={top}
            height={height}
            width={width}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py="1"
        >
          {children}
        </Box>
    )
}

export { Main }