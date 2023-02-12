import { useState } from 'react'

import { ComponentSecond } from '@components/ComponentSecond'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddReactionIcon from '@mui/icons-material/AddReaction'

const ComponentFirst = () => {
  const [show, setShow] = useState(false)

  return (
    <div data-testid="test">
      <Typography variant="h3">ComponentFirst</Typography>
      <Button
        color="primary"
        onClick={() => setShow(v => !v)}
        variant="outlined"
        autoFocus
        draggable
        endIcon={<AddReactionIcon />}
      >
        click
      </Button>

      {show && <ComponentSecond />}
    </div>
  )
}

export { ComponentFirst }
