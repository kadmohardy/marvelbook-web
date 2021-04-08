import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { signInRequest } from '../../store/modules/auth/actions';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { Container, Content, FormItemLabel, Main } from './styles';
import { AuthenticationState } from '../../store/modules/auth/types';
import RootState from '../../store/modules/rootState';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  useEffect(() => {
    if (auth.signed) {
      history.push('/');
    }
  }, []);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    dispatch(signInRequest(data.email, data.password));
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
          <Main>
            <form onSubmit={formik.handleSubmit}>
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
                          marginLeft: 5,
                          width: 300,
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
                          width: 300,
                        },
                      }}
                      style={{
                        width: 320,
                        marginBottom: 24,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Button title="Entrar" loading={auth.loading} />
              </Grid>
            </form>
          </Main>

          <Typography variant="subtitle2" gutterBottom>
            Não tem um conta? <a href="/user/signup">Cadastre-se</a>
          </Typography>
        </Content>
      </Container>
    </Layout>
  );
};

export default SignIn;
