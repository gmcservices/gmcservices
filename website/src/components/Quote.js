import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import { FormControl } from './styled'
import { Button } from '@mui/material'

const GOOGLE_FORM_URL = `https://script.google.com/macros/s/AKfycbzIKK91GbilVyqNMpq_mJwRnM74G0EnrvjA2f4uB3Mgo0uHHMfgVXZa4LK6vTpbfaMw/exec`

const SERVICE_OPTIONS = [
  'Residential',
  'Commercial',
  'Laboratory/Scientific',
  'Pack/Unpack',
  'Install/Assemble',
]
export default function Quote() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [services, setServices] = React.useState([])
  const [sqft, setSqft] = React.useState('')
  const [inventory, setInventory] = React.useState('')

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(true)

  const onSubmit = () => {
    // Submit form using google prefilled link
    const url = `${GOOGLE_FORM_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&services=${encodeURIComponent(services.join(', '))}&sqft=${encodeURIComponent(sqft)}&inventory=${encodeURIComponent(inventory)}`
    setLoading(true)
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        setLoading(false)
        setSuccess(true)
      })
      .catch((error) => {
        console.error('Error submitting form:', error)
        setLoading(false)
        setError(error)
      })
  }

  return (
    <Box
      id='quote'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'primary.light',
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
            Quote within 24 hours
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: 'grey.100', alignItems: 'center' }}
          >
            Try to provide as much detail as possible so we can provide you with
            an accurate quote.
          </Typography>
        </Box>
        {error ? (
          <>
            <Typography
              component='h2'
              variant='h4'
              sx={{ alignItems: 'center' }}
            >
              Sorry, there was an error submitting your quote
            </Typography>
            <Button onClick={() => setSuccess(false)} variant='contained'>
              Contact us directly
            </Button>
          </>
        ) : success ? (
          <>
            <Typography
              component='h2'
              variant='h4'
              sx={{ alignItems: 'center' }}
            >
              Your quote has been submitted
            </Typography>
            <Button onClick={() => setSuccess(false)} variant='contained'>
              Submit another quote
            </Button>
          </>
        ) : (
          <Container sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <Container
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 1, sm: 2 },
              }}
            >
              <FormControl variant='standard'>
                <InputLabel htmlFor='nameField'>Name</InputLabel>
                <OutlinedInput
                  id='nameField'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='John Smith'
                />
              </FormControl>

              <FormControl variant='standard'>
                <InputLabel htmlFor='emailField'>Email</InputLabel>
                <OutlinedInput
                  id='emailField'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='your_email@gmail.com'
                />
              </FormControl>
              <FormControl variant='standard'>
                <InputLabel htmlFor='phoneField'>Phone</InputLabel>
                <OutlinedInput
                  id='phoneField'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='(305) 123-4567'
                />
              </FormControl>
              <FormGroup>
                <InputLabel>
                  What type of moving services do you need?
                </InputLabel>
                {SERVICE_OPTIONS.map((service) => (
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked={services.includes(service)} />
                    }
                    label={service}
                    key={service}
                    onChange={(e) => setServices([...services, service])}
                  />
                ))}
              </FormGroup>
              <FormControl variant='standard'>
                <InputLabel htmlFor='sqftField'>
                  Approx. Square footage
                </InputLabel>
                <OutlinedInput
                  id='sqftField'
                  placeholder='1000 sqft'
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                />
              </FormControl>
              <FormControl variant='standard'>
                <InputLabel htmlFor='inventoryField'>Inventory</InputLabel>
                <OutlinedInput
                  id='inventoryField'
                  multiline
                  rows={4}
                  placeholder='Please provide a detailed description of your project.'
                  value={inventory}
                  onChange={(e) => setInventory(e.target.value)}
                />
              </FormControl>
              <Button variant='contained' color='primary' onClick={onSubmit}>
                {loading ? 'Loading...' : 'Submit'}
              </Button>
            </Container>
          </Container>
        )}
      </Container>
    </Box>
  )
}
