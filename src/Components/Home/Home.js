import React from 'react';

import Paper from 'material-ui/Paper';
import HomeIcon from 'material-ui/svg-icons/action/home';


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

const Home = () => (
    <Paper style={style.paper} zDepth={5}>
        <h2>Home</h2>
        <HomeIcon style={style.icon} />
    </Paper>
);

export default Home;
