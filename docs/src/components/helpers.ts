export const getDescription = (componentName: string) => ({
  height: `Specifies the height of the ${componentName} SVG. For additional customization, employ the wrapper className.`,
  width: `Specifies the width of the ${componentName} SVG. For further customization, utilize the wrapper className.`,
  colors: `Defines the colors of the ${componentName} SVG. Accepts multiple color objects. If a comprehensive list of colors is not provided, defaults will be applied. Refer to the example.`,
  color: `Sets the color of the ${componentName} SVG.`,
  ariaLabel: `Specifies the Aria label of the ${componentName}. This label will be applied to the aria-label attribute in the wrapper element.`,
  wrapperStyle:
    'Applies styles to the wrapper. It should be a valid CSS object and can be used for custom styling, overriding the default style.',
  wrapperClass: `Assigns a className to the wrapper for custom styling, overriding the default style.`,
  visible: `Controls the visibility of the ${componentName}. If set to false, the ${componentName} will not be rendered.`,
  radius: `Determines the radius of the circle(s) in the ${componentName} component. For further customization, use the wrapper className.`,
})

export const defaultPropsTypes = {
  height: 'number | string',
  width: 'number | string',
  colors: 'Array<string>',
  color: 'string: #hex-code',
  secondaryColor: 'string: #hex-code',
  ariaLabel: 'string',
  wrapperStyle: 'object',
  wrapperClass: 'string',
  visible: 'boolean',
  radius: 'number | string',
  strokeWidth: 'number | string',
  strokeColor: 'string',
}

export const getDefaultPropsValue = (componentName: string) => ({
  height: '80',
  width: '80',
  color: `#4fa94d`,
  secondaryColor: `#4fa94d`,
  ariaLabel: `${componentName}-loading`,
  wrapperStyle: JSON.stringify({}, null, 2),
  wrapperClass: 'undefined',
  visible: 'true',
})

export const getPropsTableData = (
  componentName: string,
  excluded: string[] = []
) => {
  return [
    {
      name: 'height',
      type: defaultPropsTypes.height,
      default: getDefaultPropsValue(componentName).height,
      description: getDescription(componentName).height,
    },
    {
      name: 'width',
      type: defaultPropsTypes.width,
      default: getDefaultPropsValue(componentName).width,
      description: getDescription(componentName).width,
    },
    {
      name: 'colors',
      type: defaultPropsTypes.colors,
      default: JSON.stringify(['#4fa94d', '#4fa94d', '#4fa94d']),
      description: getDescription(componentName).colors,
    },
    {
      name: 'ariaLabel',
      type: defaultPropsTypes.ariaLabel,
      default: getDefaultPropsValue(componentName).ariaLabel,
      description: getDescription(componentName).ariaLabel,
    },
    {
      name: 'wrapperStyle',
      type: defaultPropsTypes.wrapperStyle,
      default: getDefaultPropsValue(componentName).wrapperStyle,
      description: getDescription(componentName).wrapperStyle,
    },
    {
      name: 'wrapperClass',
      type: defaultPropsTypes.wrapperClass,
      default: getDefaultPropsValue(componentName).wrapperClass,
      description: getDescription(componentName).wrapperClass,
    },
    {
      name: 'visible',
      type: defaultPropsTypes.visible,
      default: getDefaultPropsValue(componentName).visible,
      description: getDescription(componentName).visible,
    },
  ].filter(f => !excluded.includes(f.name))
}
