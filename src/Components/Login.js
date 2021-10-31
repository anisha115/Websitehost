import { Component } from 'react'
import './Login.css' 
import Page2 from'./Page2.js'

class Login extends Component{
    state={
        email:'',
        pwd:'',
        flag:0
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log('success');
        this.setState({
            flag: 1
        })
    }

    render(){
        if (this.state.flag === 1) {
            return (
                <div>
                    <Page2 />
                    {/* <MyHeader/> */}
                </div>
            )
        }

        return (
        <div className='div-login'>
            <form onSubmit={this.handleSubmit}>
                <input type='email' placeholder='email...' required onChange={this.handleChange}></input>
                <input type='password' placeholder='password' required onChange={this.handleChange}/>
                <button onSubmit={this.handleSubmit}>Login</button>
            </form>
        </div>)
    }
}

export default Login;