import { LucideCloudLightning } from "lucide-react"
const imgs=[{id:"1",img:<LucideCloudLightning/>},
    {id:"2",img:"#"},
    {id:"3",img:"$"}
]
function FeaturedCourse(){
    return(
        <div>
            <div className="mt-15 flex flex-col justify-center items-center">
                <h1 className="text-2xl">Featured Course</h1>
                {imgs.map((item) => (
            <span key={item.id}>{item.img}</span>   
          ))}
                <button className="text-xl">Click Here</button>
            </div>
        </div>
    )
}
export default FeaturedCourse