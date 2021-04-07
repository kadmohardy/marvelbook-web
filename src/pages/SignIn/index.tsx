import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import {
  Container,
  Content,
  FormItemLabel,
  Main,
  SocialButton,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
    '& .MuiFormControl-root': {
      margin: theme.spacing(0.5),
      marginLeft: theme.spacing(0),
    },
  },
}));

const SignIn: React.FC = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    console.log(data);
    // dispatch(userSignInRequest(data.email, data.password));
  }, []);

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().required('Senha obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <Container>
        <Content>
          <Typography variant="h5">Acesse sua conta</Typography>
          <Grid container xs={12} />
          <Main>
            <form onSubmit={formik.handleSubmit} className={classes.root}>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <FormControl>
                    <FormItemLabel>Email*</FormItemLabel>

                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      size="small"
                      margin="normal"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      inputProps={{
                        style: {
                          marginLeft: 15,
                          width: 310,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormItemLabel>Senha*</FormItemLabel>
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      size="small"
                      value={formik.values.password}
                      variant="outlined"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      fullWidth
                      inputProps={{
                        style: {
                          marginLeft: 5,
                          width: 310,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Button title="Entrar" loading={false} />
              </Grid>
            </form>
          </Main>

          <p>
            Não tem um conta? <a href="/user/signup">Cadastre-se</a>
          </p>
        </Content>
      </Container>
    </Layout>
  );
};

export default SignIn;
