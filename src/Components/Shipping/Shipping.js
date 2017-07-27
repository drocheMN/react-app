import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataService from '../../services/DataService';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import './Shipping.css';

class Shipping extends Component {
    constructor({ match }, props) {
        super(match.match, props);

        this.params = match.params;
        
        this.state = {
            shipping: '0.00'
        };
    };

    componentWillMount() {
        DataService.then(data => {
            const item = data.filter(item => {
                if (item.sku === this.params.sku) {
                    return true;
                }
                return false;
            })[0];

            this.setState({ ...item});

        });
    }

    calculateShippingCost(state) {
        let shippingCost;
        state = state.toUpperCase();
        
        switch(state) {
            case 'MN':
                shippingCost = '0.00';
                break;
            case 'NY':
            case 'CA':
            case 'MA':
                shippingCost = '7.50';
                break;
            case 'GA':
            case 'AL':
            case 'FL':
                shippingCost = '3.99';
                break;
            default :
                shippingCost = '5.99';
                break;
        }

        const remainingStates = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC",
            "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", 
            "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", 
            "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", 
            "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ];

        if (state.length !== 2) {
            shippingCost = '0.00';
        }

        if (remainingStates.indexOf(state) === -1) {
            shippingCost = '0.00';
        }


        this.setState({
            shipping: shippingCost,
        });

        return shippingCost;
    }

    calculateTotalCost(shippingCost) {
        let totalCost;

        const strPrice = this.state.price.substring(1);        
        const itemPrice = Number(strPrice);
        const shippingPrice = Number(shippingCost);

        totalCost = Number(itemPrice + shippingPrice).toFixed(2);


        this.setState({
            total: `$${totalCost}`
        })
    }

    handleFormChange = event => {
        const shippingCost = this.calculateShippingCost(event.target.value);
        this.calculateTotalCost(shippingCost);
    }

    renderCalculatorTile() {
        return (
            <GridTile
                className="DR-align_center DR-border_rounded DR-calculator">
                <h2>{ this.state.name }</h2>
                <h3>{`Price: ${this.state.price}`}</h3>
                <h3>{`S&H: $${this.state.shipping}`}</h3>
                <Divider className="DR_divider" />
                {
                    this.state.total 
                        ? <h3>{`Total: ${this.state.total}`}</h3>
                        : <h3>{`Total: ${this.state.price}`}</h3>
                }
            </GridTile>
        );
    }

    renderFormTile() {
        const styles = {
            button: {
                backgroundColor: '#4CAF50',
                border: '1px solid black',
                borderRadius: '2px'
            }
        }

        return (
            <GridTile
                className="DR-align_center DR-border_rounded DR-form">
                <form ref={(form) => {this.form = form;}} className="DR-flex">
                    <input required className="DR-input DR-input_flex-1" type="text" name="name" placeholder="Name" />
                    <input required className="DR-input DR-input_flex-1" type="text" name="street" placeholder="Street" />
                    <div className="DR-input_group DR-input_flex-1">
                        <input ref={(city) => this.city = city } required className="DR-input DR-input_flex-3" type="text" name="city" placeholder="City" />
                        <input
                            required 
                            pattern="[a-zA-Z]{2}" 
                            className="DR-input DR-input_flex-1" 
                            onChange={this.handleFormChange} 
                            value={this.state.value} 
                            type="text" 
                            name="stateAbbreviation" 
                            placeholder="State" />
                    </div>
                    <input required className="DR-input DR-input_flex-1" type="text" name="zipCode" placeholder="Zip Code" />
                    <Link className="DR-flex_row DR-align_right" to="/thankyou">
                        <RaisedButton buttonStyle={styles.button} type="submit" className="DR-flex DR-align_right" label="Confirm" />
                    </Link>
                </form>
            </GridTile>
        )
    }

    renderGridList() {
        if (this.state.name) {
            return (
                <GridList
                    cols={2}
                    cellHeight={500}
                    padding={30}>
                    { this.renderCalculatorTile() }
                    { this.renderFormTile()}
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
            <div className="DR-shipping">
                { this.renderGridList() }
            </div>
        )
    }
};

export default Shipping;
