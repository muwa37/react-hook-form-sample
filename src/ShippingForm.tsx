import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { Option, ShippingFields } from './app.interface';

const options: Option[] = [
  { value: 'msc', label: 'Moscow' },
  { value: 'spb', label: 'Saint-P' },
  { value: 'nsk', label: 'Novosibirsk' },
  { value: 'ekb', label: 'Ekateringurg' },
];

const getValue = (value: string) =>
  value ? options.find(option => option.value === value) : '';

export const ShippingForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ShippingFields>({ mode: 'onChange' });

  const onSubmitHandler: SubmitHandler<ShippingFields> = data => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>your shipping info</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div style={{ margin: 12 }}>
          <input
            {...register('email', {
              required: 'email is req field',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'please enter valid email',
              },
            })}
            placeholder='email'
          />
          {errors.email && (
            <div style={{ color: 'red' }}>{errors.email.message}</div>
          )}
        </div>
        <div style={{ margin: 12 }}>
          <input
            {...register('name', {
              required: 'name is req field',
            })}
            placeholder='name'
          />
          {errors.name && (
            <div style={{ color: 'red' }}>{errors.name.message}</div>
          )}
        </div>
        <div>
          <Controller
            name='address.city'
            control={control}
            rules={{ required: 'city is req' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <ReactSelect
                  placeholder='ur city'
                  options={options}
                  value={getValue(value)}
                  onChange={newValue => onChange((newValue as Option).value)}
                />
                {error && <div style={{ color: 'red' }}>{error.message}</div>}
              </div>
            )}
          />
        </div>
        <div style={{ margin: 12 }}>
          <input
            {...register('address.street', {
              required: 'street is req field',
            })}
            placeholder='street'
          />
          {errors.address?.street && (
            <div style={{ color: 'red' }}>
              {errors.address?.street?.message}
            </div>
          )}
        </div>
        <div style={{ margin: 12 }}>
          <input
            {...register('address.house', {
              required: 'house is req field',
            })}
            placeholder='house'
          />
          {errors.address?.house && (
            <div style={{ color: 'red' }}>{errors.address?.house?.message}</div>
          )}
        </div>
        <button>send</button>
      </form>
    </div>
  );
};
