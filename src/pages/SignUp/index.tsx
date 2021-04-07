import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import React, { useState, useCallback } from 'react';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { IUserSignUpRequest } from '../../interfaces/users/user';
import { Container, Content, FormItemLabel, Main } from './styles';
import api from '../../services/api';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
    '& .MuiFormControl-root': {
      margin: theme.spacing(0.5),
      marginLeft: theme.spacing(0),
    },
  },
}));

const SignUp: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

  const signInSchema = Yup.object().shape({
    fullname: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
      .required('Email obrigatório')
      .email('Digite um email válido'),
    password: Yup.string().required('Senha obrigatória'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),
  });

  const handleSubmit = useCallback(async (data: IUserSignUpRequest) => {
    const { fullname, email, password } = data;

    try {
      setLoading(true);

      await api.post('/users', {
        fullname,
        email,
        password,
      });

      toast.success(
        `Olá ${fullname}. Sua conta foi criada com sucesso. Entre com suas credenciais para acessar sua conta!`,
      );
      setLoading(false);
      history.push('/signin');
    } catch (error) {
      toast.error(`Olá ${fullname}. Não foi possível criar a conta.`);
      setLoading(false);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: signInSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <Container>
        <Content>
          <Typography variant="h5">Cria sua conta. É grátis!</Typography>

          <Main>
            <form onSubmit={formik.handleSubmit} className={classes.root}>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <FormControl>
                    <FormItemLabel>Nome*</FormItemLabel>
                    <TextField
                      id="fullname"
                      name="fullname"
                      type="fullname"
                      size="small"
                      variant="outlined"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.fullname &&
                        Boolean(formik.errors.fullname)
                      }
                      helperText={
                        formik.touched.fullname && formik.errors.fullname
                      }
                      inputProps={{
                        style: {
                          marginLeft: 5,
                          width: 300,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormItemLabel>Email*</FormItemLabel>

                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      size="small"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      inputProps={{
                        style: {
                          marginLeft: 5,
                          width: 300,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                      fullWidth
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
                      inputProps={{
                        style: {
                          marginLeft: 5,
                          width: 300,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormItemLabel>Confirmação de senha*</FormItemLabel>
                    <TextField
                      id="password_confirmation"
                      name="password_confirmation"
                      type="password"
                      size="small"
                      value={formik.values.password_confirmation}
                      variant="outlined"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password_confirmation &&
                        Boolean(formik.errors.password_confirmation)
                      }
                      helperText={
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                      }
                      inputProps={{
                        style: {
                          marginLeft: 5,
                          width: 300,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Button loading={loading} title="Cadastre-se" />
              </Grid>
            </form>
          </Main>

          <p>
            Já tem um conta? <Link to="/signin">Entrar</Link>
          </p>
        </Content>
      </Container>
    </Layout>
  );
};

export default SignUp;
