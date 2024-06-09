import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/system'

const whiteLogos = [
  'https://studyarchitecture.com/wp-content/uploads/university-of-miami-logo-white-original.png',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
]

const darkLogos = [
  'https://ucomm.miami.edu/_assets/images/tools-and-resources/signatures/png/um-vertical-k.png',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
]

const logoStyle = {
  height: '60px',
  margin: '0 32px',
  opacity: 0.7,
}

export default function LogoCollection() {
  const theme = useTheme()
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos

  return (
    <Box id='logoCollection' sx={{ py: 4 }}>
      <Typography
        component='p'
        variant='subtitle2'
        align='center'
        color='text.secondary'
      >
        Trusted movers for
      </Typography>
      <Grid container justifyContent='center' sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
