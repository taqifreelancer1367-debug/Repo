import { Link } from "react-router-dom"
import { Home, HomeIcon } from "lucide-react"
function Nav(){
    return(
        <div className="flex justify-between items-center bg-gray-600 p-4">
            <img src="#" alt="Logo" />
            <nav className="text-white flex gap-4">
                <Link to="/" className="flex"><HomeIcon/>Home</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <button className="bg-blue-600 text-black p-2 rounded-2xl">Click Here</button>
        </div>
    )
}
export default Nav