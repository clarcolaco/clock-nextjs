import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Logo } from './../components'
import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup
} from '@chakra-ui/react'


const validationSchema = yup.object().shape({

  email: yup.string().email('Email inválido'),
  username: yup.string().required('Coloque o seu usuario (obrigatório) '),
  password: yup.string().required('Coloquea sua senha (obrigatório)'),

})

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting} = useFormik({
      onSubmit: (values, form) => {
      
      },
      validationSchema,
      initialValues: {
        email: '',
        username: '',
        password: '',
      }
    })
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input size="lg" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}

        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input size="lg" type="password" value={values.passaword} onChange={handleChange} onBlur={handleBlur} />
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>


        <FormControl id="username" p={4} isRequired>
          <InputGroup size="lg">
            <InputLeftAddon children="clocker.work/" />

            <Input size="lg" type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
          </InputGroup>
          {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
        </FormControl>




        <Box p={4}>
          <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={!isSubmitting}>Entrar</Button>
        </Box>
      </Box>
    </Container>

  )
}
