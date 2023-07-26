
import { Link } from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        
            <Link className='home' to="/home">Home</Link>
            <Link className='about' to="/about">About</Link>
            <Link className='help' to="/help">Help</Link>

        
        </>
    )
}
export default Nav