const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
} as const

export const defaultTheme = {
  colors: {
    white: '#fff',
    'white-opacity-80%': 'rgba(255,255,255,0.80)',
    'white-opacity-40%': 'rgba(255,255,255,0.40)',
    'white-opacity-005%': 'rgba(255,255,255,0.05)',
    
    black: '#000000',
    'black-opacity-60%': 'rgba(0,0,0,0.60)',
    'black-opacity-40%': 'rgba(0,0,0,0.40)',

    'green-50': '#e8f4eb',
    'green-100': '#c9e3ce',
    'green-300-d': '#86c091',
    'green-500': '#53a762',
    'green-600': '#4b9859',
    'green-700': '#41864d',
  
    
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-800': '#202024',
    'gray-900': '#121214',
    'gray-900-opacity-20%': 'rgba(18,18,18,0.2)',
    'gray-900-opacity-90%': 'rgba(18,18,18,0.95)',
  
    'green-success-300': '#00B37E',
    'green-success-500': '#00875F',
    'green-success-700': '#015F43',
  
    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
  },

  fonts: {
    montserrat: 'Montserrat, sans-serif',
    gloock: 'Gloock, serif',
  }
}

