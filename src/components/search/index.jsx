// import JobData from "../main/jobdata"
// import data from "../main/jobdata"
// import { useState } from "react"


// const JobList = ()=>{
//     const [value, setValue] = useState("")

//     const handleChange = (e)=>{
//         console.log(e.target.value)
//         setValue(e.target.value)
//     }

//     return (
//         <div>
//             <input type="text" placeholder="Search for a job" onChange={handleChange}/>
//             {
//                 data.filter((job)=>{
//                     if (!value || job.title.toLowerCase().includes(value.toLowerCase()) || job.location.toLowerCase().includes(value.toLowerCase()) ){
//                         return job
//                     }
//                 }).map((job)=>{
//                     return (
//                         <div key={job.id}>
//                             <h1>{job.title}</h1>
//                             <h2>{job.location}</h2>
//                         </div>
//                     )
//                 })
            
//             }
//         </div>
//     )
// }

// export default JobList