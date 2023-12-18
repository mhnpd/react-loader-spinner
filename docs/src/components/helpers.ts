export const getDescription = (componentName: string) => ({
  height: `Height of the ${componentName} SVG. For more customization, use the wrapper className.`,
  width: `Width of the ${componentName} SVG. For more customization, use the wrapper className. `,
  colors: `Colors of the ${componentName} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,
  color: `Color of the ${componentName} SVG.`,
  ariaLabel: `Aria label of the ${componentName}. It will be used for the aria-label attribute in the wrapper element.`,
  wrapperStyle: 'Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.',
  wrapperClass: `ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.`,
  visible: `Specifies whether the ${componentName} is visible or not. If set to false, the ${componentName} will not be rendered.`,
  radius: `Radius of the circle(s) in the ${componentName} component. For further customization, use the wrapper className.`,
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

export const getDefaultPropsValue = (componentName)=>({
  height: '80',
  width: '80',
  color: `#4fa94d`,
  secondaryColor: `#4fa94d`,
  ariaLabel: `${componentName}-loading`,
  wrapperStyle: JSON.stringify({}, null, 2),
  wrapperClass: 'undefined',
  visible: 'true',
})

export const getPropsTableData = (componentName, excluded=[])=>{
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
  ].filter(f=>!excluded.includes(f.name))
}
