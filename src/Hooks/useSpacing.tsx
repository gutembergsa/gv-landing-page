type Spacing = {
  size: number
  vert?: boolean
}

const useSpacing = () => {
  const Spacing = ({ size, vert }: Spacing) => {
    const prop = vert ? 'width' : 'height'
    return <div style={{ [prop]: size }} />
  }

  return {
    Spacing,
  }
}

export default useSpacing
