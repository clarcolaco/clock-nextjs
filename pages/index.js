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
  FormHelperText
} from '@chakra-ui/react'

/* let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
}); */

const validationSchema = yup.object().shape({
  
  email: yup.string().email('Coloque o seu email (obrigatório)' ),
  username: yup.string().required('Coloque o seu usuario (obrigatório) '),
  password: yup.string().required('Coloquea sua senha (obrigatório)'),
  
})

export default function Home() {
  const formik = useFormik({
    onSubmit: () => {},
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
          <Input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <FormHelperText textColor="#e74c3c">Digite seu email</FormHelperText>
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" value={formik.values.passaword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <FormHelperText textColor="#e74c3c">Digite sua senha</FormHelperText>
        </FormControl>

        <Box p={4} display="flex" flexDirection="row" alignItems="center">
          <Text>clocker.work</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <FormHelperText textColor="#e74c3c">Digite seu usuario</FormHelperText>
          </FormControl>
        </Box>

        <Box p={4}>
          <Button width="100%" >Entrar</Button>
        </Box>
      </Box>
    </Container>

  )
}
