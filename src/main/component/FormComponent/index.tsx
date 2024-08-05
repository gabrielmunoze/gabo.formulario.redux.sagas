import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container } from '@mui/material';
import { FormDataModel } from './store/types';
import { formSelector, saveValueActionSelector } from './store/selectors';
import { saveValue } from './store/actions';
import ListDB from './listDB';
import { ActionStatus } from '../../../store';


const FormComponent: React.FC = () => {
  
  const [formData, setFormData] = useState<FormDataModel>({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    ciudad: '',
    telefono: '',
  });

  const dispatch = useDispatch();
  
  const current = useSelector(formSelector);
  const saveValueAction = useSelector(saveValueActionSelector)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    // event.preventDefault();
    dispatch(saveValue.start(formData));
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
      {/* {saveValueAction.status === ActionStatus.START && <p>Saving...</p>}
      {saveValueAction.status === ActionStatus.SUCCESS && current && (
        <p>Saved Value: {JSON.stringify(current)}</p>
      )} */}
      <ListDB />
    </Container>
  );
};

export default FormComponent;
