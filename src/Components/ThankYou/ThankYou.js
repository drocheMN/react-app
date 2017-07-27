import React from 'react';

import Paper from 'material-ui/Paper';
import MoodIcon from 'material-ui/svg-icons/social/mood';


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
        width: 200,
        margin: 'auto',
        textAlign: 'center',
    }
};

const ThankYou = () => (
    <Paper style={style.paper} zDepth={5}>
        <h2>Thank You!</h2>
        <MoodIcon style={style.icon} />
    </Paper>
);

export default ThankYou;
