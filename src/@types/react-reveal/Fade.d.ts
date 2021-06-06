declare module 'react-reveal/Fade' {
  const Fade: React.FC<{
    ssrReveal?: boolean
    ssrFadeout?: boolean
    out?: boolean
    left?: boolean
    right?: boolean
    top?: boolean
    bottom?: boolean
    big?: boolean
    mirror?: boolean
    opposite?: boolean
    duration?: number
    timeout?: number
    distance?: string
    delay?: number
    count?: number
    forever?: boolean
  }>

  export default Fade
}
