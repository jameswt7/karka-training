import React, { useState } from "react"

export const Form = () => 
{
    //Using React useState with an object
    const [form, setForm] = useState(
                        {name:"",pass:""}) 
                                          
    const handleSubmit = (e) => 
    {
        e.preventDefault()
        console.log(form)

    setForm({name:"",pass:""})
    
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} />
            <input type="password" placeholder="password" value={form.pass} onChange={(e) => setForm({...form,pass:e.target.value})} />
            <button > Submit </button>
        </form>
    )
}


