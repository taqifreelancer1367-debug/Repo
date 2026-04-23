import Cards from './Components/Cards'
import './App.css'
const cards=[{id="1",title="Web Dev",p="3Months",btn="Click Here"},
  {id="2",title="SEO",p="2 Months",btn="Explore More"},
  {id="3",title="CEH",p="1 Months",btn="Click Here"}
]
function App() {
  return (
    <>
    {cards.map((card)=>{
      <Cards key={cards.id} title={cards.title} p={cards.p} btn={cards.btn}/>
    })}
    </>
  )
}

export default App
