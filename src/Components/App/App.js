import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import AppBar from 'material-ui/AppBar';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onLeftIconButtonTouchTap = () => this.onSidebarToggle();

    onMenuItemClick = () => this.onSidebarToggle();

    onSidebarToggle = () => this.setState({open: !this.state.open});
    
    render() {
        return (
            <div>
                <div>
                    <AppBar
                        title="Buymart"
                        onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap} />
                </div>

                <Sidebar 
                    open={this.state.open}
                    onRequestChange={this.onSidebarToggle}
                    docked={false}
                    onMenuItemTouchTap={this.onSidebarToggle} 
                    className="DR-sidebar"/>

                { this.props.children }
            </div>
        )
    }
};

export default App;
