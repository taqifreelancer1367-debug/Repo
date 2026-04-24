import Diff from "../Diff"
import Cards from "../Cards"

const cards = [
  { id: "1", title: "Web Dev",  p: "3 Months", btn: "Click Here",   style: "bg-red-300 w-full p-4 rounded-2xl"  },
  { id: "2", title: "SEO",      p: "2 Months", btn: "Explore More", style: "bg-blue-300 w-full p-4 rounded-2xl" },
  { id: "3", title: "CEH",      p: "1 Month",  btn: "Click Here",   style: "bg-gray-300 w-full p-4 rounded-2xl" },
]
function About(){
  return(
      <>

    <h1 className='text-center text-4xl font-bold'>Services</h1>
    <div className='flex justify-center items-center gap-3 p-3'>
        {cards.map((card) => (
        <Cards key={card.id} title={card.title} p={card.p} btn={card.btn} />
      ))}
    </div>
    <h1 className='text-center text-4xl font-bold'>Team</h1>
      <div className='flex justify-center items-center p-3 gap-3'>
        {cards.map((card) => (
          <Diff key={card.id} title={card.title} p={card.p} btn={card.btn} style={card.style} />
        ))}
      </div>
    </>
  )
}
export default About