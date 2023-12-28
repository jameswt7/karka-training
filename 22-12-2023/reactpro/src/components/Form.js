import React, { useState,useEffect,useHistory } from "react"
import { Link } from "react-router-dom"
// import { history as useHistory } from 'react-router-dom'


export const Form = () => 
{

    //Using React useState with an object
    const [form, setForm] = useState(
                        {name:"",pass:""}) 
                                          
    const handleSubmit = (e) => 
    {
        e.preventDefault()
        console.log(form)
         // store the user in localStorage
        localStorage.setItem('username',form.name)
        localStorage.setItem('password',form.pass)
        var storename = localStorage.getItem(form.name)
        var storepwd = localStorage.getItem(form.pass)
        if(storename===storepwd)
        {
         <Link to={{pathname: './Home.js'}}>HOME</Link>
        }
      }
      // setForm({name:"",pass:""})
      useEffect(()=>{
        setForm({name:"",pass:""})
      }, []) 
      const history = useHistory();
      const navigateTo = () => history.push('./Register.js');//eg.history.push('/login');
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="name" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} />
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="password" value={form.pass} onChange={(e) => setForm({...form,pass:e.target.value})} />
            <button > Submit </button>
            <button onClick={navigateTo}> Create a new Register </button>
           
        </form>
    )
            
}