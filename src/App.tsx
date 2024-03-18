import { SubmitHandler, useForm } from 'react-hook-form';
import { ShippingFields } from './app.interface';

function App() {
  const { register, handleSubmit } = useForm<ShippingFields>();

  const onSubmitHandler: SubmitHandler<ShippingFields> = data => {
    alert('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input {...register('name')} type='text' />
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
