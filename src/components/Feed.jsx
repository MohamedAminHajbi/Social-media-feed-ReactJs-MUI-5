import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'


export const Feed = () => {
  return (
    <Box flex={10} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}
