import React from 'react';
import {
  Link
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const style = {
    drawer: {
        height: 'calc(100% - 64px',
        top: 64
    },
    menuItem: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
        textDecoration: 'none'
    }
}

const Sidebar = props => (
    <Drawer 
        containerClassName={props.containerClassName}
        open={props.open}
        docked={props.docked}
        onRequestChange={props.onRequestChange}
        containerStyle={style.drawer}>
        <Link style={{ textDecoration: 'none' }} className="DR-MenuItem" to="/home">
            <MenuItem style={style.menuItem}>Home</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="DR-MenuItem" to="/market">
            <MenuItem style={style.menuItem}>Market</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="DR-MenuItem" to="/help">
            <MenuItem style={style.menuItem}>Help</MenuItem>
        </Link>
    </Drawer>
);

export default Sidebar;
