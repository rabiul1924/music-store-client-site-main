/* eslint-disable no-restricted-globals */
import React from 'react';
import { Table } from 'react-bootstrap';

const Table420 = ({singleOrder}) => {
    // console.log(singleOrder)
    const {_id} = singleOrder
    
    const deleteCase = (event, id) => {
        const url = `https://intense-hamlet-83372.herokuapp.com/delete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("delete");
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
                                                <td className="bg-warning">1</td>
                                                <td className="bg-warning">Credit Card</td>
                                                <td>${singleOrder.price}</td>
                                                <td className="bg-warning"><span style={{margin:'2px', padding:'2px'}}>pending</span>
                                                <span>ongoing</span> <span>Done</span>
                                                <button onClick={() => deleteCase(event, _id)}>delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
        </div>
    );
};

export default Table420;