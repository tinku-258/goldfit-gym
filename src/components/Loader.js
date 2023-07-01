import React from 'react'
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack diraction="row" justifyContent="center" alignItems="center" width="100%">
      <InfinitySpin color="gray"/>
    </Stack>
  )
}

export default Loader