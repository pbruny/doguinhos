import React from 'react';
import { PASSWORD_LOST } from '../../../Api/api';
import Head from '../../../Helper/Head';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import Error from '../../Error';
import Button from '../../FormComponents/Button';
import Input from '../../FormComponents/Input';

const LoginLostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = (event) => {
    event.preventDeafult();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      request(url, options);
    }
  };

  return (
    <section className="">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Nome de usuário"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginLostPassword;
