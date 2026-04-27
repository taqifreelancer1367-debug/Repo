import FeaturedCourse from "../FeaturedCourse"
import Hero from "../Hero"
function Home(){
    return(
         <div>
                    <section className="mt-10 shadow-cyan-950 shadow-lg rounded-2xl p-3  gap-3">
            <Hero/>
           
        </section>
        <div className="flex justify-between items-center p-4">
                 <FeaturedCourse/>
                 <FeaturedCourse/>
                 <FeaturedCourse/>

        </div>
         </div>

    )
}
export default Home