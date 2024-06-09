import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const userTestimonials = [
  {
    avatar: <Avatar alt='Shazada H' />,
    name: 'Shazada',
    location: 'Miami',
    testimonial:
      'GMC is our go-to moving contractor for many jobs at the University of Miami. I know I can rely on them to get the job done and to do it well. They are always professional and courteous.',
  },
  {
    avatar: <Avatar alt='Lauren Ram' />,
    name: 'Lauren',
    location: 'Miami to Broward',
    testimonial:
      "GMC movers helped me move from Edgewater to Davie and I couldn't be happier. They were professional, efficient, and took great care of my belongings. I would highly recommend them to anyone looking for a reliable moving company.",
  },
  {
    avatar: <Avatar alt='Nick Nel' />,
    name: 'Nick',
    location: 'Broward',
    testimonial:
      'I would use GMC movers again in a heartbeat. We moved a 3 bedroom house into a 4 bedroom house. They got started on time and we were done in about half a day. They took down the complicated furniture and put it back together perfectly. They were very professional and very nice. I recommend them.',
  },
  {
    avatar: <Avatar alt='Jenny' />,
    name: 'Jenny Garcia',
    location: 'Miami',
    testimonial:
      'I had a great experience with GMC and Mr. Ramos. They were very careful with all of my furniture and belongings. I would use them again in the future.',
  },
]

export default function Testimonials() {
  return (
    <Container
      id='testimonials'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component='h2' variant='h4' color='text.primary'>
          Testimonials
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          See what our customers are saying about us. We take pride in our
          moving jobs and it shows in our reviews.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.location}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
