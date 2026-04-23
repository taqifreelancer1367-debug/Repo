function Cards({title,p,btn}){
    return(
        <div className=" bg-amber-200 w-full flex flex-col justify-center items-center">
            <h1>{title}</h1>
            <p>{p}</p>
            <button>{btn}</button>
        </div>
    )
}
export default Cards