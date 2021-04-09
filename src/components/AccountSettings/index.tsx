import { Box, FormControl, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import RootState from '../../store/modules/rootState';
import { AuthenticationState, UserState } from '../../store/modules/user/types';
import { updateAccountInfoRequest } from '../../store/modules/user/actions';

import Button from '../Button';
import {
  CancelButton,
  Container,
  DeleteButton,
  FormItemLabel,
  InputText,
  Line,
} from './styles';

interface AccountSettingsFormData {
  fullname: string;
  email: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 24,
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(0),
    },
  },
}));

interface AccountSettingsFormData {
  fullname: string;
  email: string;
}

const AccountSettings: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { token } = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  const { profile } = useSelector<RootState>(state => state.user) as UserState;

  const handleSubmit = useCallback(async (data: AccountSettingsFormData) => {
    if (token !== null) dispatch(updateAccountInfoRequest(token, data));
  }, []);

  const accountSettingsSchema = Yup.object().shape({
    fullname: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
      .required('Email obrigatório')
      .email('Digite um email válido'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: profile.fullname || '',
      email: profile.email || '',
    },
    validationSchema: accountSettingsSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <Typography variant="h5">Configurações de conta</Typography>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <FormControl>
              <FormItemLabel>Nome*</FormItemLabel>
              <InputText
                id="fullname"
                name="fullname"
                type="text"
                variant="outlined"
                size="small"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullname && Boolean(formik.errors.fullname)
                }
                helperText={formik.touched.fullname && formik.errors.fullname}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormItemLabel color="primary">Telefone*</FormItemLabel>
              <InputText
                id="email"
                name="email"
                type="text"
                size="small"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormItemLabel color="secondary">Senha*</FormItemLabel>
              <Link href="/">Alterar senha</Link>
            </FormControl>
          </Grid>
        </Grid>
        <Line />
        <Box
          flexDirection="row"
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            flexDirection="row"
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="space-around"
          >
            <Button title="Salvar" loading={false} />
            <CancelButton>Cancelar</CancelButton>
          </Box>

          <Box
            flexDirection="row"
            display="flex"
            flex={4}
            justifyContent="flex-end"
          >
            <DeleteButton>Remover minha conta </DeleteButton>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default AccountSettings;
