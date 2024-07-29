// src/FormComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container } from '@mui/material';
import { saveValue } from './store/reducer';
import { RootState } from './store';
import { FormData } from './store/types';

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    ciudad: '',
    telefono: '',
  });

  const dispatch = useDispatch();
  const { value: savedValue, status } = useSelector((state: RootState) => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(saveValue(formData));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </form>
      {status === 'loading' && <p>Saving...</p>}
      {status === 'succeeded' && savedValue && (
        <p>Saved Value: {JSON.stringify(savedValue)}</p>
      )}
    </Container>
  );
};

export default FormComponent;
