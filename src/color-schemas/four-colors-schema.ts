export const FourColorsSchemeNames = {
  sunset: 'sunset',
  ocean: 'ocean',
  forest: 'forest',
  twilight: 'twilight',
  dawn: 'dawn',
  dusk: 'dusk',
  midday: 'midday',
  midnight: 'midnight',
  sunrise: 'sunrise',
  rainbow: 'rainbow',
}

export const FourColorsSchema = {
  [FourColorsSchemeNames.sunset]: {
    fillColor1: '#e15b64',
    fillColor2: '#f47e60',
    fillColor3: '#f8b26a',
    fillColor4: '#abbd81',
  },
  [FourColorsSchemeNames.ocean]: {
    fillColor1: '#3498db',
    fillColor2: '#2ecc71',
    fillColor3: '#1abc9c',
    fillColor4: '#9b59b6',
  },
  [FourColorsSchemeNames.forest]: {
    fillColor1: '#27ae60',
    fillColor2: '#16a085',
    fillColor3: '#f39c12',
    fillColor4: '#d35400',
  },
  [FourColorsSchemeNames.twilight]: {
    fillColor1: '#8e44ad',
    fillColor2: '#c0392b',
    fillColor3: '#d35400',
    fillColor4: '#f39c12',
  },
  [FourColorsSchemeNames.dawn]: {
    fillColor1: '#c0392b',
    fillColor2: '#d35400',
    fillColor3: '#f39c12',
    fillColor4: '#16a085',
  },
  [FourColorsSchemeNames.dusk]: {
    fillColor1: '#9b59b6',
    fillColor2: '#34495e',
    fillColor3: '#16a085',
    fillColor4: '#27ae60',
  },
  [FourColorsSchemeNames.midday]: {
    fillColor1: '#2ecc71',
    fillColor2: '#3498db',
    fillColor3: '#9b59b6',
    fillColor4: '#34495e',
  },
  [FourColorsSchemeNames.midday]: {
    fillColor1: '#34495e',
    fillColor2: '#16a085',
    fillColor3: '#27ae60',
    fillColor4: '#8e44ad',
  },
  [FourColorsSchemeNames.sunrise]: {
    fillColor1: '#f1c40f',
    fillColor2: '#e67e22',
    fillColor3: '#e74c3c',
    fillColor4: '#ecf0f1',
  },
  [FourColorsSchemeNames.rainbow]: {
    fillColor1: '#16a085',
    fillColor2: '#27ae60',
    fillColor3: '#3498db',
    fillColor4: '#8e44ad',
  },
}

export type FourColorsSchemaType = keyof typeof FourColorsSchema
