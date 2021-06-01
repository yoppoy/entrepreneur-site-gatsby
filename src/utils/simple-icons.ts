const getCustomIcon = (name: string): NodeRequire | null => {
  if (name) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-dynamic-require,global-require
      const icon = require(`../../static/assets/icons/simple-icons-custom/${name}.js`)
        .default

      if (icon) return icon
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      return null
    }
  }
  return null
}

export default getCustomIcon
