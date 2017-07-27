import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataService from '../../services/DataService';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

import './Market.css';

class Market extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    componentWillMount() {
        DataService.then(data => {
            this.setState({data: data});
        });
    }

    renderGridTiles() {
        const styles = {
            title: {
                height: '15%'
            },
            feature: {
                paddingTop: 10
            },
            button: {
                backgroundColor: '#4CAF50',
                border: '1px solid black',
                borderRadius: '2px'
            }
        }

        if (this.state.data) {
            return this.state.data.map( (tile) => (
                <GridTile
                    className="DR-align_center DR-border_rounded DR-container"
                    key={tile.sku}>
                    <h3 style={styles.title}>{tile.name}</h3>
                    <h4>{`Price: ${tile.price}`}</h4>
                    <ul>
                    {tile.features.map( (feature, index) => (
                        <li style={styles.feature} className="DR-feature DR-align_left" key={index}>{feature}</li>
                    ))}
                    </ul>
                    <Link to={`/shipping/${tile.sku}`}>
                        <RaisedButton buttonStyle={styles.button} className="DR-position_bottom DR-align_center" label="Buy" />
                    </Link>
                </GridTile>
                ));
        }
    }

    renderGridList() {
        if (this.state.data) {
            return (
                <GridList
                    cols={3}
                    cellHeight={500}
                    padding={30}>
                    { this.renderGridTiles() }
                </GridList>
            )
        }

        return (
            <GridList
                cols={1}
                cellHeight={500}>
                <div style={{textAlign: 'center'}}>Loading...</div>
            </GridList>
        )
    }
  
    render() {
        return (
            <div className="DR-market">
                { this.renderGridList() }
                <p style={{textAlign: 'center'}}>All products come with a 30-day money back guarantee</p>
            </div>
        )
    }
};

export default Market;
