export const getDescription = (componentName: string) => ({
  height: `Height of the ${componentName} svg. For more customization use wrapper className `,
  width: `Width of the ${componentName} svg. For more customization use wrapper className `,
  colors: `Colors of the ${componentName} svg. Takes multiple colors object. If complete list of colors is not provided default will be used. Refer example.`,
  color: `Color of the ${componentName} svg`,
  ariaLabel: `Aria label of the ${componentName}. Will be used for the aria-label attribute in the wrapper element`,
  wrapperStyle: 'Styles to be applied to the wrapper. It should be a valid CSS object. It can be used for custom styling. It will override the default style',
  wrapperClassName: `ClassName to be applied to the wrapper. It can be used for custom styling. It will override the default style`,
  visible: `Whether the ${componentName} is visible or not. If false, the ${componentName} will not be rendered.`,
  radius: `Radius of the circle(s) in ${componentName} component. For more customization use wrapper className `,
})

export const defaultPropsTypes = {
  height: 'number | string',
  width: 'number | string',
  colors: 'Array<string>',
  color: 'string: #hex-code',
  secondaryColor: 'string: #hex-code',
  ariaLabel: 'string',
  wrapperStyle: 'object',
  wrapperClassName: 'string',
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
  wrapperClassName: 'undefined',
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
      name: 'wrapperClassName',
      type: defaultPropsTypes.wrapperClassName,
      default: getDefaultPropsValue(componentName).wrapperClassName,
      description: getDescription(componentName).wrapperClassName,
    },
    {
      name: 'visible',
      type: defaultPropsTypes.visible,
      default: getDefaultPropsValue(componentName).visible,
      description: getDescription(componentName).visible,
    },
  ].filter(f=>!excluded.includes(f.name))
}
