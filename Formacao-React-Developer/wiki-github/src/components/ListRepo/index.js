import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '../Button';
import LinkIcon from '@mui/icons-material/Link';


function ListRepo({ repo }) {
    return (
        <List sx={{
            width: '100%',
            maxWidth: 560,
            bgcolor: 'transparent',
            borderBottom: '.5px solid #999999'
        }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={repo.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {repo.full_name}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <div className='button'>
                <LinkIcon />
                <Button
                    icon={<DeleteIcon />}
                    color={'error'}
                    content={'delete'}
                />
            </div>
        </List>
    );
}

export default ListRepo