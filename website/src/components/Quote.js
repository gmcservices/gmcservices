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
  const [success, setSuccess] = React.useState(false)

  const onSubmit = () => {
    const url = `${GOOGLE_FORM_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&services=${encodeURIComponent(services.join(', '))}&sqft=${encodeURIComponent(sqft)}&inventory=${encodeURIComponent(inventory)}`
    setLoading(true)
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
          gap: { xs: 1, sm: 2 },
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
          <br />
          <Typography
            variant='body1'
            sx={{ color: 'grey.100', alignItems: 'center' }}
          >
            Try to provide as much detail as possible so we can provide you with
            an accurate quote.
          </Typography>
        </Box>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfzBuxOp2Rju-MweSDadM1CnyZ_kBDUMs82d-goKhZ43ED-ug/viewform?embedded=true'
          width='100%'
          height='1330'
          frameborder='0'
          marginHeight='0'
          marginWidth='0'
          title='google-form'
        >
          Loading…
        </iframe>
      </Container>
    </Box>
  )
}
