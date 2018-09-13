import React from 'react';
import { Link } from 'react-router-dom';

const HomeTable = (props) => {

    const chirps =
        props.chirps.length > 0 ? (
            props.chirps.map((chirp, idx) => (

                <tr key={idx}>
                    <td>{chirp.name}</td>
                    <td>{chirp.age}</td>

                    <td>
                        <Link to={`/chirp/${chirp.id}`}>
                            <button>See Details</button>
                        </Link>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="3">There Are No People</td>
            </tr>
        );


    const tableData = props.chirps ? (
        chirps
    ) : (
        <tr>
            <td colSpan="3">Loading...</td>
        </tr>
    );


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>{tableData}</tbody>
        </table>
    );
};


export default HomeTable;