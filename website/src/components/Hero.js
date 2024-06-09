import React, { useCallback } from 'react'
import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { scrollToSectionElement } from './utils'

import MovingTruck from '../assets/maxim-tolchinskiy-crHhZlES310-unsplash.jpg'

const CTA = {
  title: 'Get a Quote',
  id: 'quote',
}

export default function Hero() {
  const onCTAClick = useCallback(() => {
    scrollToSectionElement(CTA.id)
  }, [])

  return (
    <Box
      id='hero'
      sx={(theme) => ({
        width: '100%',
        backgroundImage: `
          linear-gradient(
            to bottom,
            ${alpha(theme.palette.primary.main, 0.8)},
            ${alpha(theme.palette.primary.main, 0.2)}
          ),
          url(${MovingTruck})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',

        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Plan your&nbsp;
            <Typography
              component='span'
              variant='h1'
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
              }}
            >
              next move
            </Typography>
          </Typography>
          <Typography
            textAlign='center'
            color='text.secondary'
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            with <b>General Moving Contractors</b>. From Here to There, With
            Care. With years of experience, we can plan and execute your South
            Florida move with precision and care.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf='center'
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant='contained' color='primary' onClick={onCTAClick}>
              {CTA.title}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
