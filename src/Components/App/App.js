import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import AppBar from 'material-ui/AppBar';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    onLeftIconButtonTouchTap = () => this.onSidebarToggle();

    onMenuItemClick = () => this.onSidebarToggle();

    onSidebarToggle = () => this.setState({open: !this.state.open});
    
    render() {
        const contentStyle = {
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
            margin: 'auto'
        }

        if (this.state.open) {
            contentStyle.margin = 'auto auto auto 256px';
        }

        const style = {
            appBar: {
                backgroundColor: '#1565C0',
                color: 'black',
                fontWeight: 'bold'
            }
        };

        return (
            <div>
                <AppBar
                    style={style.appBar}
                    title="Buymart"
                    titleStyle={style.appBar}
                    onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
                    className="DR-AppBar" />
                <div className="DR-container_app">
                    <Sidebar 
                        open={this.state.open}
                        onRequestChange={this.onSidebarToggle}
                        docked={true} 
                        containerClassName="DR-sidebar"/>
                </div>
                <div style={contentStyle}>
                    { this.props.children }
                </div>
            </div>
        )
    }
};

export default App;
