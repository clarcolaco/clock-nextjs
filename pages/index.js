import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Logo } from './../components'
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>


      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormHelperText>Nunca vamos compartilhar o seu email</FormHelperText>
      </FormControl>
      
      <FormControl id="password" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="password" />
        
      </FormControl>

    </Container>

  )
}
