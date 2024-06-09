import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import {
  Handyman,
  Inventory2,
  Biotech,
  Business,
  House,
} from '@mui/icons-material'

import Boxes from '../assets/kadarius-seegars-DevJkLB3hWE-unsplash.jpg'

const items = [
  {
    icon: <House />,
    title: 'Residential Moves',
    description:
      'Let us know square footage, number of rooms, and any special requirements you may have.',
    imageLight: `url(${Boxes})`,
    imageDark: `url(${Boxes})`,
  },
  {
    icon: <Business />,
    title: 'Commercial Moves',
    description:
      'We have experience moving businesses of all sizes and can help you plan and execute a successful move.',
    imageLight:
      'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <Biotech />,
    title: 'Labratory Moves',
    description:
      'Our staff is trained in moving sensitive equipment and can help you plan and execute a successful move.',
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <Inventory2 />,
    title: 'Packing and Unpacking',
    description:
      'We have the supplies and expertise to pack and unpack your belongings quickly and efficiently.',
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <Handyman />,
    title: 'Installations and Setup',
    description:
      'We can help you install and set up your new home or office with our professional installation services.',
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
]

export default function Services() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)

  const handleItemClick = (index) => {
    setSelectedItemIndex(index)
  }

  const selectedFeature = items[selectedItemIndex]

  return (
    <Container id='services' sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component='h2' variant='h4' color='text.primary'>
              Services
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Our experienced team will assist you with all of your planning and
              packing needs.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: 'auto', sm: 'none' } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : ''
                    }
                    return selectedItemIndex === index ? 'primary.light' : ''
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : ''
                    }
                    return selectedItemIndex === index ? 'none' : ''
                  },
                  backgroundColor:
                    selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant='outlined'
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color='text.primary'
                variant='body2'
                fontWeight='bold'
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color='text.secondary'
                variant='body2'
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
              {/* <Link
                color='primary'
                variant='body2'
                fontWeight='bold'
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize='small'
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link> */}
            </Box>
          </Box>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant='outlined'
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200'
                    }
                    return selectedItemIndex === index
                      ? 'primary.dark'
                      : 'grey.800'
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300'
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700'
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color='text.primary'
                      variant='body2'
                      fontWeight='bold'
                    >
                      {title}
                    </Typography>
                    <Typography
                      color='text.secondary'
                      variant='body2'
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    {/* <Link
                      color='primary'
                      variant='body2'
                      fontWeight='bold'
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation()
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize='small'
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link> */}
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
