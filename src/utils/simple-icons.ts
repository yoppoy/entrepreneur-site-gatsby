// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCustomIcon = (name?: string): any | null => {
  if (name) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-dynamic-require,global-require,prettier/prettier
      const icon = require(`../../static/assets/icons/simple-icons-custom/${name}.js`).default

      if (icon) return icon
    } catch (e) {
      return null
    }
  }
  return null
}

export default getCustomIcon
