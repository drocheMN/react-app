import React from 'react';
import {
  Link
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Sidebar = props => (
    <Drawer 
        open={props.open}
        docked={props.docked}
        onRequestChange={props.onRequestChange}>
        <Link to="/">
            <MenuItem onTouchTap={props.onMenuItemTouchTap}>Home</MenuItem>
        </Link>
        <Link to="/market">
            <MenuItem onTouchTap={props.onMenuItemTouchTap}>Market</MenuItem>
        </Link>
        <Link to="/help">
            <MenuItem onTouchTap={props.onMenuItemTouchTap}>Help</MenuItem>
        </Link>
    </Drawer>
);

export default Sidebar;
