import Cards from './Components/Cards'
import d_style from './Components/diff_style'
import './App.css'
const cards=[{id:"1",title:"Web Dev",p:"3Months",btn:"Click Here",style:"bg-red-300"},
  {id:"2",title:"SEO",p:"2 Months",btn:"Explore More",style:"bg-blue-300"},
  {id:"3",title:"CEH",p:"1 Months",btn:"Click Here",style:"bg-grey-300"}
]
function App() {
  return (
    <>
    {cards.map((card)=>{
      <Cards key={cards.id} title={cards.title} p={cards.p} btn={cards.btn}/>
    })}
    <div>
      {cards.map((card)=>{
      <d_stylee key={cards.id} title={cards.title} p={cards.p} btn={cards.btn}/>
    })}
    </div>
    </>
  )
}

export default App
