function Hero(){
return(
          <section className="flex">
                      <div>
                <h1 className="text-5xl font-bold">Starting Course</h1>
                <div className="flex gap-2">
                      <h1 className="text-blue-800 font-bold text-5xl px-4">Web </h1>
                 <h1 className="text-5xl font-bold">Development</h1>
                </div>
              
                <p className="p-4 mt-3">Master HTML, CSS, Tailwind, JavaScript and ReactJS with hands-on projects and real code you actually understand</p>
               <div className="flex gap-3 p-3">
                 <button className="bg-amber-500 p-4 rounded-4xl font-semibold">Enroll Now</button>
                <button>Demo</button>
               </div>
            </div>
            <div className=" grid grid-cols-2 grid-rows-2 gap-6">
                <div className="bg-blue-900 text-white rounded px-15 py-9 flex text-2xl font-semibold">
                    <h1>200+</h1>
                    <p>Student Enroll</p>
                </div>
                <div className="bg-black text-white rounded px-15 py-9 flex text-2xl font-semibold">
                    <h1>200+</h1>
                    <p>Student Enroll</p>
                </div>
                <div className="bg-black text-white rounded px-15 py-9 flex text-2xl font-semibold">
                    <h1>200+</h1>
                    <p>Student Enroll</p>
                </div>
                <div className="bg-blue-900 text-white rounded px-15 py-9 flex text-2xl font-semibold">
                    <h1>200+</h1>
                    <p>Student Enroll</p>
                </div>
            </div>
          </section>
)
}
export default Hero