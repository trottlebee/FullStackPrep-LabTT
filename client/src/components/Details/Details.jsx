import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


import url from '../../env/serverUrl';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: false
        };
    }


    componentDidMount() {
        this.getUser(this.props.match.params.id);
    }


    getUser(id) {
        const userUrl = `${url}/${id}`;
        fetch(userUrl)
            .then((res) => res.json())
            .then((chirp) => this.setState({ chirp }));
    }


    render() {

        if (!this.state.chirp) {
            return <h1>Loading...</h1>;

        } else {
            const { name, age, id } = this.state.chirp;

            return (
                <Fragment>
                    <h1>User {id} Details</h1>
                    <h2>Name: {name}</h2>
                    <h2>Age: {age}</h2>
                    <Link to={`/chirp/${id}/edit`}>Edit</Link>
                </Fragment>
            );
        }
    }
}


export default Details;