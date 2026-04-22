'use client';

import { TextInput, PasswordInput, Button, Paper, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
      <Paper shadow="md" p="lg" w={350}>
        <Title order={2} mb="md">
          Login
        </Title>
   <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}/>
        <PasswordInput
            label="Password"
            placeholder="Enter password"
            mt="md"
            {...form.getInputProps('password')}/>

          <Button fullWidth mt="xl" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
export default Login;