import Navbar from '../components/Navbar'
import axios from 'axios'; 
import React, {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../image/logo.svg';
import {Link} from "react-router-dom";

class  Listnews extends Component  {
    state = {
        list :[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
          console.log(res.data)
          this.setState({
              list: res.data
          })
          console.log(this.state.list);
          
        })
        .catch(err=>{
            console.log(err);
        })
    }


    render(){
        return (
            <div className="news">
                <Navbar />
                <div className='list'>  
                    <h1>News</h1>
                  {this.state.list.map(res=>{
                      return (
                        <div className="card" key={res.id}>
                          <img src={Logo    } alt="" />
                            <div className="text">
                               <h5>{res.title}</h5>
                                <p>{res.body}</p>
                            </div>
                        </div>
                      )
                  })}
                </div>
                <Footer />
            </div>
        )
    }
    }





export default Listnews