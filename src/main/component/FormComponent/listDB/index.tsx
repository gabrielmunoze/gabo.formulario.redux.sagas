import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchItemsActionSelector, itemsSelector } from '../store/selectors';
import { ActionStatus } from '../../../../store';
import { deleteItemRequest, fetchItems } from '../store/actions';

const ListDB: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector(itemsSelector);

    const fetchItemsAction = useSelector(fetchItemsActionSelector)

    useEffect(() => {
        if (fetchItemsAction.status === ActionStatus.DEFAULT) {
            dispatch(fetchItems.start())
        }
    }, [fetchItemsAction]);

    const handleDeleteItem = (id:any) => {
        // coso para borrar
        console.log(id)
        dispatch(deleteItemRequest.start(id))
    };

    return (
        <Paper style={{ marginTop: '20px', padding: '20px' }}>
            <List>
                {items.map((item:any) => (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={`${item.nombre} ${item.apellido}`}
                            secondary={`Correo: ${item.correo}, Dirección: ${item.direccion}, Ciudad: ${item.ciudad}, Telefono: ${item.telefono}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default ListDB;
