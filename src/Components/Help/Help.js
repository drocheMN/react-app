import React from 'react';

import Paper from 'material-ui/Paper';
import HelpOutline from 'material-ui/svg-icons/action/help-outline'


const style = {
    paper: {
        height: 300,
        width: 300,
        padding: 20,
        textAlign: 'center',
        margin: '100px auto'
    },
    icon: {
        display: 'block',
        height: 200,
        width:200,
        margin: 'auto',
        textAlign: 'center',
    }
};

const Help = () => (
    <Paper style={style.paper} zDepth={5}>
        <h2>Help</h2>
        <HelpOutline style={style.icon} />
    </Paper>
);

export default Help;
