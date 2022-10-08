import { Box, Fab, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

export const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)} title="add" sx={{position:"fixed", bottom:20,left:{xs:"calc(50%)", md:20}}}>
        <Fab color="error" aria-label="add">
           <AddIcon />
        </Fab>
    </Tooltip>
<Modal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box >
    Hello
  </Box>
</Modal>
    </>
  )
}
export default Add