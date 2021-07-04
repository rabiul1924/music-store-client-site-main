/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Table420 = ({singleOrder}) => {
    // console.log(singleOrder)
    const [isDelete, setIsDelete] = useState(false)
    const {_id} = singleOrder

    
    
    const deleteCase = (event, id) => {
        const url = `https://intense-hamlet-83372.herokuapp.com/delete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            setIsDelete(true);
          });
        // window.location.reload(false);
        console.log(id)
      };
      console.log(_id)
    return (
        <div>
             <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary">{singleOrder.name}</td>
                                                <td className="bg-warning">Credit Card</td>
                                                <td>{singleOrder.price}TK</td>
                                                <td>{singleOrder.email}</td>
                                                <td className="bg-warning">
                                                <button onClick={() => deleteCase(event, _id)}>delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
        </div>
    );
};

export default Table420;