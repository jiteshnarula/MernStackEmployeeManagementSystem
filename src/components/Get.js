import React from 'react'; 
import axios from 'axios'
import { Update } from './Update';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class Get extends React.Component{

    
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            productManagement:[]
        }
    }

    componentDidMount(){
       this.getProducts();
    }

    getProducts=()=>{
        axios.get('http://localhost:4444/api/getProducts').then(response=>{
            this.setState({productManagement:response.data})
            
        }).catch(function(error){
            console.log(error)
        })
    }
    deleteProduct(id){
        axios.delete( "http://localhost:4444/api/deleteProduct"+"/"+id).then(
            response=>{
                this.getProducts();
            },
            err=>{
                this.setState({erros:err})
            }
        ) 
    }

    routeChangeGoBack(){
        let path = `/`; 
        this.props.history.push(path);
    }
    routeChange(id) {
        let path = `/update`;
        localStorage.setItem("id",id);
        this.props.history.push(path);
      }
      routeChangeAddProduct(){
        let path = `/create`; 
        this.props.history.push(path);
      }
  
    render(){
        return(
            <div>
            <h1>This is Get Component</h1>

            <button className="btn btn-primary text-center"
                         onClick={(e)=>this.routeChangeAddProduct()}>Add Product</button>
            <table  className="table" align="center">
                    <thead>
                            <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                             
                            </tr>
                    </thead>
                    <tbody>
                    {this.state.productManagement.map((object, i)=> 
                        
                
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{object.productName}</td>
                        <td>{object.productPrice}</td> 
                        <td>
                        <button  className=" btn btn-danger"
                         onClick={(e)=>this.deleteProduct(object._id)}>Delete </button>   </td>
                      <td>   <button className="btn btn-primary"
                         onClick={(e)=>this.routeChange(object._id)}>Update</button></td>
                     
                        </tr>
                    )}
                </tbody>
            </table>

            <button className="btn btn-primary text-center"
                         onClick={(e)=>this.routeChangeGoBack()}>Go Back</button>
            

            </div>
            

             
        )
    }
}

export {Get};