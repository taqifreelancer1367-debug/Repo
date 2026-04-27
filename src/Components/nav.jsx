import { Link } from "react-router-dom"
import { Home, HomeIcon ,Contact, ContactRoundIcon,Code} from "lucide-react"
function Nav(){
    return(
        <div className="flex justify-between items-center bg-gray-600 p-4">
            <div className="flex gap-1">
                <h1 className="font-bold text-black text-2xl">Edu</h1>
                <span className="text-white">React</span>
            </div>
            <nav className="text-white flex gap-4">
                <Link to="/" className="flex"><HomeIcon/>Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/about">Contact US</Link>
                <Link to="/about">Courses</Link>
            </nav>
            <button className="bg-blue-700 font-medium text-white p-2 rounded-2xl">Click Here</button>
        </div>
    )
}
export default Nav