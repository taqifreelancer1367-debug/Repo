function Diff({title,p,btn,style}){
    return(
        <div className={style}>
            <h1>{title}</h1>
            <p>{p}</p>
            <button>{btn}</button>
        </div>
    )
}
export default Diff