import { ComponentSecond } from '../ComponentSecond'
import { useState } from 'react'

type ComponentFirstProps = {
  className?: string
}

const ComponentFirst = ({ className }: ComponentFirstProps) => {
  const [show, setShow] = useState(false)

  return (
    <div data-testid="test">
      <h1 className={className}>ComponentFirst</h1>
      <button onClick={() => setShow(v => !v)}>click</button>
      {show && <ComponentSecond />}
    </div>
  )
}

export { ComponentFirst }
