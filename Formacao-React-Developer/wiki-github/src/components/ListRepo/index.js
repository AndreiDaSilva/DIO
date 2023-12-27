import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '../Button';
import { ThemeProvider, createTheme } from '@mui/material';

const themeDark = createTheme({
    palette: {
        mode: 'dark',
    },
});

function ListRepo({ title, description }) {
    return (
        <ThemeProvider theme={themeDark}>

            <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'transparent' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {description}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <div className='button'>
                    <Button conteund={'Delete'} icon={<DeleteIcon />} color={'error'} />
                </div>
                <Divider variant="inset" component="li" />
            </List>
        </ThemeProvider>
    );
}

export default ListRepo