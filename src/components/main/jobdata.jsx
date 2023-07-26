import se from "../../assets/se.png"
import pm from "../../assets/pm.png"
import fd from "../../assets/fd.jpeg"
import ds from "../../assets/ds.png"
import ux from "../../assets/ux.png"
const JobData=({ value })=>{
    const jobs=
    [  {    "id": 1,   
    "image": `${se}`,    
    "title": "Software Engineer",   
        "location": "San Francisco, CA",   
        "description": "We are seeking a talented software engineer to join our team. The successful candidate will have experience in developing high-quality software and a passion for delivering excellent user experiences.",   
        "requirements": [      "Bachelor's degree in Computer Science or a related field",      
        "3+ years of experience in software development",      
        "Strong knowledge of JavaScript and React",     
        "Experience with Material-UI a plus",     
        "Excellent communication and teamwork skills"   
       ]
  },
  {
    "id": 2,
    "image": `${pm}`,
    "title": "Product Manager",
    "location": "New York, NY",
    "description": "We are seeking a creative and driven product manager to lead the development of our next generation of products. The ideal candidate will have a proven track record of delivering successful products and a deep understanding of the technology industry.",
    "requirements": [
      "Bachelor's degree in Computer Science, Business, or a related field",
      "5+ years of experience in product management",
      "Strong problem-solving and analytical skills",
      "Excellent leadership and communication skills",
      "Ability to work in a fast-paced and dynamic environment"
    ]
  },
  {
    "id": 3,
    "image": `${fd}`,
    "title": "Frontend Developer",
    "location": "London, UK",
    "description": "We are seeking a frontend developer to join our growing team. The ideal candidate will have experience in developing modern and responsive user interfaces and a passion for delivering excellent user experiences.",
    "requirements": [
      "Bachelor's degree in Computer Science or a related field",
      "2+ years of experience in frontend development",
      "Strong knowledge of JavaScript, HTML, and CSS",
      "Experience with React and Material-UI a plus",
      "Excellent problem-solving and debugging skills"
    ]
  },
  {
    "id": 4,
    "image": `${ds}`,
    "title": "Data Scientist",
    "location": "Berlin, Germany",
    "description": "We are seeking a data scientist to join our team. The ideal candidate will have experience in developing predictive models and a passion for turning data into actionable insights.",
    "requirements": [
      "Master's degree in Computer Science, Mathematics, or a related field",
      "3+ years of experience in data science",
      "Strong knowledge of Python and machine learning libraries",
      "Experience with data visualization tools a plus",
      "Excellent problem-solving and critical thinking skills"
    ]
  },
  {
    "id": 5,
    "image": `${ux}`,
    "title": "UX Designer",
    "location": "Paris, France",
    "description": "We are seeking a talented UX designer to join our team. The ideal candidate will have experience in designing intuitive and user-friendly interfaces and a passion for delivering excellent user experiences.",
    "requirements": [
      "Bachelor's degree in Graphic Design, Human-Computer Interaction, or a related field",
      "3+ years of experience in UX design",
      "Strong knowledge of design tools such as Sketch and Figma",
      "Experience with prototyping tools a plus",
      "Excellent communication and collaboration skills"
    ]
}

]


    return(
        <>
        {
            jobs.filter((job)=>{
              if (!value || job.title.toLowerCase().includes(value.toLowerCase())|| job.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                return job
              }
            }).map((one)=>{
              return (
                <div key={one.id} className="box">
                <div >
                  <div className='innerbox'>
                    <div className='openbox'>
                      <img className="image" src={one.image}/>
                    </div>
                    <div className='closedbox'>
                      <div>Title: {one.title}</div>
                      <div>Location: {one.location}</div>
                      <div>Description: {one.description}</div>
                      <div>Requirements: {one.requirements}</div>
                    </div>
                    
                  </div>
                    
                </div>
              </div>
                
              )
            })
        }
        </>
    )
}
export default JobData