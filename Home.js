import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
import { ProductConsumer } from "./Context";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css';
export  default  class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>Crud opertion</h3>
       <ProductConsumer>

            {(value)=>{
                return(
                    <Table size="sm" variant="dark" striped bordered hover className="table-header">  
                     <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Information</th>
                    <th>price</th>
                    <th>company</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updatevalue(e,"title")}}  /></td>
                    <td> <input type="text" value={value.info} onChange={(e)=>{value.updatevalue(e,"info")}}   /></td>
                    <td> <input type="text" value={value.price} onChange={(e)=>{value.updatevalue(e,"price")}}   /></td> 
                    <td> <input type="text" value={value.company} onChange={(e)=>{value.updatevalue(e,"company")}}   /></td>
                    <td> <Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ? "save" :"Add new Row"}</Button></td>
                    
                  </tr>

                  {value.Alldata.map(product=>{
                      return(
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.info}</td>
                            <td>{product.price}</td>
                            <td>{product.company}</td>
                            <td><Button size="sm" variant="primary" onClick={()=>{value.onEdit(product.id)}}>Edit</Button> | <Button size="sm" variant="danger" onClick={()=>{value.onDelete(product.id)}}>Delete</Button></td>
                          

                        </tr>
                    )
                  })}
                  </tbody>
              </Table>

                )

            }}
       </ProductConsumer>
      </div>

    );
  }
}
