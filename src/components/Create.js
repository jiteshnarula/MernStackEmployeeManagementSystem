import React from 'react'; 
import axios from 'axios';
import { Router, browserHistory } from 'react-router'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'



class Create extends React.Component{

     constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductBought = this.onChangeProductBought.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
         

         
        this.state = {
            productName: '',
            productPrice: '',
            productBought:'',
            redirect:false
        }
    }

    onChangeProductName(e){
        this.setState({
            productName: e.target.value
        })
    }
    onChangeProductPrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }

    onChangeProductBought(e){
        this.setState({
            productBought : e.target.value
        })
    }
    routeChangeGet(){
        let path = `/get`; 
        this.props.history.push(path);
    }

    onSubmit(e) {
        e.preventDefault();
        const newProduct = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productBought : this.state.productBought
        }
        axios.post('http://localhost:4444/api/addProducts', newProduct)
        //.then(res => console.log(res.data));
        .then(function (response) {
            console.log(response.data);
           alert(response.data);
           
        //    <Redirect to='/get'/>
        //    this.props.history.push("/get");


          });
        this.setState({
            productName: '',
            productPrice: '',
            productBought:'',
            redirect:true
        });


    }


    render(){

        const { redirect } = this.state;
console.log("redirect value"+redirect)
        if (redirect) {
          return <Redirect to='/get'/>;
        }
   
        return(
            <div>
            <h1>This is Creating component</h1>
            <div style={{marginTop: 50}}>
            <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>  Product Name: </label>
                        <input type="text" className="form-control" 
                        value={this.state.productName}  onChange={this.onChangeProductName}/>
                    </div>
                    <div className="form-group">
                        <label>  Product Price: </label>
                        <input type="text" className="form-control" 
                        value={this.state.productPrice}  onChange={this.onChangeProductPrice}/>
                    </div>
                    <div className="form-group">
                        <label>  Product Bought: </label>
                        <input type="text" className="form-control" 
                        value={this.state.productBought}  onChange={this.onChangeProductBought}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" 
                        className="btn btn-primary"/> &nbsp;
                        <input type="button" value="Go Back"  onClick={(e)=>this.routeChangeGet()}
                        className="btn btn-danger"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export {Create}