function Nav(){
    return(
        <div className="flex justify-between items-center bg-gray-600 p-4">
            <img src="#" alt="Logo" />
            <nav className="text-white flex gap-4">
                <a href="#">Home</a>
                <a href="#">Contact US</a>
                <a href="#">About US</a>
            </nav>
            <button className="bg-blue-600 text-black p-2 rounded-2xl">Click Here</button>
        </div>
    )
}
export default Nav