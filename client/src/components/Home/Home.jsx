import React, { Component, Fragment } from 'react';


import HomeForm from './HomeForm';
import HomeTable from './HomeTable';


import url from '../../env/serverUrl';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: false
        };

        this.getChirps = this.getChirps.bind(this);
    }


    componentDidMount() {
        this.getChirps();
    }


    getChirps() {
        fetch(url)
            .then((res) => res.json())
            .then((chirps) => this.setState({ chirps }));
    }


    render() {
        return (
            <Fragment>
                <h1>Welcome to Home</h1>
                <HomeForm
                    history={this.props.history}
                    getChirps={this.getChirps}
                />
                <HomeTable chirps={this.state.chirps} />
            </Fragment>
        );
    }
}


export default Home;