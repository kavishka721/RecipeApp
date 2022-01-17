import {Button} from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import './recipetable.css';

function RecipeTable(props) {
    return (
      <div>
        <Table striped bordered hover className="recipetable">
          <thead>
            <tr>
              <th>#</th>
              <th>Recipe Name</th>
              <th>Ingridients</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
               <td>@mdo</td>
                        <td colSpan={2}>
                        <Button variant="success">Edit</Button>
                        <Button variant="danger">Delete</Button>    
                        </td>         
                        
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    );
}

export default RecipeTable;