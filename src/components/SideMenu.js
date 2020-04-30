import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class SideMenu extends Component {
    render() {
        return(
            <div className="sidemenu">
                <List disablePadding dense>
                {this.props.items.map(({ label, name, ...rest}) => (
                    <ListItem key={name} button {...rest}>
                        <ListItemText 
                        disableTypography primary={
                        <Typography type="body2" style={txtStyle}>{label}</Typography>}/>

                    </ListItem>
                ))}
                </List>
            </div>
            
        );
    }
}

const txtStyle = {
    color: 'rgb(100, 149, 237)',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginLeft: '10px' 
}
const whiteNoteStyle = {
    backgroundColor: '#ffffff'
}
const blackNoteStyle = {
    backgroundColor: '#000000'
}
export default SideMenu;