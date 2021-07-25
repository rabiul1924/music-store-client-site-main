/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Table420 = ({singleOrder}) => {
    // console.log(singleOrder)
    const [isDelete, setIsDelete] = useState(false)
    const {_id} = singleOrder

    
    
    const deleteCase = (event, id) => {
      alert('Successfully delete order')
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
             <Table responsive="sm" striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary">{singleOrder.name}</td>
                                                <td className="bg-secondary">Credit Card</td>
                                                <td className="bg-info">{singleOrder.price}TK</td>
                                                <td className="bg-warning">{singleOrder.email}</td>
                                                <td className="bg-danger">
                                                <button onClick={() => deleteCase(event, _id)}>delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
        </div>
    );
};

export default Table420;