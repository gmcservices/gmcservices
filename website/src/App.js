import * as React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppAppBar from './components/AppAppBar'
import Hero from './components/Hero'
import LogoCollection from './components/LogoCollection'
import AboutUs from './components/AboutUs'
// import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Quote from './components/Quote'

function App() {
  const [mode, setMode] = React.useState('light')
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const defaultTheme = createTheme({ palette: { mode } })
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Services />
        <Divider />
        <Testimonials />
        <Divider />
        <AboutUs />
        <Divider />
        {/* <Pricing /> */}
        <Quote />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
