import ComponentSecond from '@components/ComponentSecond'

interface ComponentFirstProps {
  className: string
}

const ComponentFirst = ({ className }: ComponentFirstProps) => {
  return (
    <>
      <h1 className={className}>ComponentFirst</h1>
      <ComponentSecond />
    </>
  )
}

export default ComponentFirst
