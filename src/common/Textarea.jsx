import React from 'react'
import '../components/css/index.css';
function Textarea({onChange,value,placeholder}) {
    return (
        <div>
             <div className="wrap-textarea">
          <label htmlFor="textarea" style={{paddingBottom: '10px'}}>
            Description
          </label>
          <textarea name="" 
          id="textarea" cols="30" rows="10" value ={value} onChange={onChange} placeholder={placeholder}/>
        </div>
        </div>
    )
}

export default Textarea
