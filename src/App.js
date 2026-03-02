import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { minLength, z } from 'zod';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: 'elvisIsKing@yahoo.com',
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="text"
          {...register('email', {
            required: 'Email must be added',
            validate: (value) => {
              if (!value.includes('@')) {
                return 'Email must include @';
              }
              return true;
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password must be added',
          })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>{isSubmitting ? 'Loading...' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default App;
