import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


import url from '../../env/serverUrl';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: false,
            name: '',
            age: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    componentDidMount() {
        this.getUser(this.props.match.params.id);
    }


    getUser(id) {
        const userUrl = `${url}/${id}`;

        fetch(userUrl)
            .then((res) => res.json())
            .then((chirp) =>
                this.setState({ chirp, name: chirp.name, age: chirp.age })
            );
    }


    handleSubmit(e) {
        e.preventDefault();

        const { chirp, name, age } = this.state;
        const data = { id: chirp.id, name, age };

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json; charset = utf-8' },
            body: JSON.stringify(data)
        })

            .then(() => {
                this.props.history.push('/');
            })

            .catch((err) => console.log(err));
    }


    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleDelete() {
        const { chirp, name, age } = this.state;
        const data = { id: chirp.id, name, age };

        fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json; charset = utf-8' },
            body: JSON.stringify(data)
        })
            .then(() => {
                this.props.history.replace('/');
            })

            .catch((err) => console.log(err));
    }


    render() {

        if (!this.state.chirp) {
            return <h1>Loading...</h1>;

        } else {
            const { id } = this.state.chirp;
            return (

                <Fragment>
                    <Link to={`/chirp/${id}`}>&larr;Go Back</Link>

                    <h1>Edit User Information</h1>

                    <form onSubmit={this.handleSubmit}>

                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        />

                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={this.state.age}
                            onChange={this.handleInput}
                        />

                        <button type="submit">Edit</button>
                    </form>

                    <br />
                    <br />

                    <button onClick={this.handleDelete}>Delete</button>
                </Fragment>
            );
        }
    }
}


export default Edit;