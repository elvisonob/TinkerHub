import { useForm } from 'react-hook-form';
import { useState } from 'react';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email must be present',
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        {...register('password', {
          required: 'Password must be added',
          minLength: {
            value: 8,
            message: 'Password must have at least 8 characters',
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};

export default App;
