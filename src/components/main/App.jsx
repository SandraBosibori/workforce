import { useState } from 'react'
import '../css/App.css'
import JobData from "./jobdata"
import Nav from "./navcomp"
// import JobList from '../search/index'



const Home=()=>{

    const [value, setValue] = useState('')

    const handleChange = (e)=>{
    
        setValue(e.target.value)
    }
    return(
        <div className='body'>
            <div className="top">
                <img src="./src/assets/logo.png"></img>
                <h1>Workforce Africa</h1>
            </div>
            <div className='outernav'>
                <div className="appnav">
                    <Nav/>
                </div>
                <div className='search'>
                    <input className='input' type='text' placeholder='Search for jobs' onChange={handleChange}/>
                    <button className='button'>Search</button>
                </div>
                
            </div>
            
            <div className="outerbox">
                <JobData value={value}/>
            </div>
        
        </div>
    )
}
export default Home