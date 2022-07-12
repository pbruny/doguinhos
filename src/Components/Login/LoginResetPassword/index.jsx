import React from 'react';
import Error from '../../Error';
import Button from '../../FormComponents/Button';
import Input from '../../FormComponents/Input';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { PASSWORD_RESET } from '../../../Api/api';
import { useNavigate } from 'react-router-dom';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('lorgin');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ login, key, password });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate('/login');
      }
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar senha</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginResetPassword;
