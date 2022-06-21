import React,{useState} from 'react'

export default function Box1(props) {

    const [count,setCount]=useState("");

    const b=(event)=>{

        setCount(event.target.value);
    }

    const a=()=>{
        setCount(count.toUpperCase());
    }

    const c=()=>{
        setCount(count.toLowerCase())
    }

    const d=()=>{

        setCount("");
    }

  return (
  <>

<div className="container">
<div className="input-group input-group-lg my-5">
  <span className="input-group-text" id="inputGroup-sizing-lg">{props.title} </span>

  <input value={count} onChange={b} type="text"className="form-control"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>

</div>

<div className="d-flex justify-content-center">
<button className="btn btn-secondary m-3 " onClick={a} >CLICK-FOR-UPPERCASE</button>

<button className="btn btn-primary m-3" onClick={c} >click-for-lowercase</button>

<button className="btn btn-warning m-3" onClick={d} >Clear</button>
</div>

<h1 className='m-5'> There are {count.length} charectors and {count.split(" ").length} words in the sentence</h1>

<h1 className='m-5'>Preview : {count}</h1>

</div>
    </>
  )
}
