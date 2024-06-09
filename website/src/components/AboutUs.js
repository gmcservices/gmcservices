import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function AboutUs() {
  return (
    <Box
      id='about'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component='h2' variant='h4'>
            About Us
          </Typography>
          <hr />
          <Typography
            variant='body1'
            sx={{ color: 'grey.400', textAlign: 'left' }}
          >
            At GMC, building a family-owned and operated business has always
            been our dream. Fueled by a passion to serve and a dedication to our
            community, we have turned that dream into a reality through hard
            work and an unwavering commitment to honesty and fairness. We treat
            your belongings as if they were our own, handling each item with the
            care and compassion you hold dear. We understand the sentimental
            value of your possessions and make it our priority to ensure they
            are moved with the utmost care. With over 19 years of experience as
            a driver and mover, I have cultivated a team that shares my
            commitment to making your move as hassle-free as possible. We are
            dedicated to ethical, honest, and sustainable business practices,
            ensuring that your transition to your new destination is smooth and
            stress-free. Trust in our expertise, respect for your belongings,
            and dedication to excellent service. <br />
            <br />
            Respectfully, A. Ramos
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
