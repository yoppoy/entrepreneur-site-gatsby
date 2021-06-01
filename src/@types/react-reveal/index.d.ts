declare module 'react-reveal' {
  export const Fade: React.FC<{
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

  export const Tada: React.FC<{
    duration?: number
    timeout?: number
    delay?: number
    count?: number
    forever?: boolean
  }>
}
