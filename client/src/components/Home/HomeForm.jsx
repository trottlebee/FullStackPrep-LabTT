import React, { Component, Fragment } from 'react';


import url from '../../env/serverUrl';


class HomeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },

            body: JSON.stringify(this.state)
        })

            .then((res) => {
                this.props.getChirps();
                this.props.history.push('/');
            })

            .catch((e) => console.log('error:', e));
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }); // valuable react form method
    }


    render() {
        return (
            <Fragment>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="age">Age:</label>

                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </Fragment>
        );
    }
}


export default HomeTable;