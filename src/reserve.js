const JobData=()=>{
    const {data, setData}=useState([])
  
  
  useEffect(()=>{
    fetch('./data.json')
    .then(data => setData(data))
  }, [])
}  