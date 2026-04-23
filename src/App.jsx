import Cards from './Components/Cards'
import d_style from './Components/diff_style'
import './App.css'

const cards = [
  { id: "1", title: "Web Dev",  p: "3 Months", btn: "Click Here",   style: "bg-red-300"  },
  { id: "2", title: "SEO",      p: "2 Months", btn: "Explore More", style: "bg-blue-300" },
  { id: "3", title: "CEH",      p: "1 Month",  btn: "Click Here",   style: "bg-gray-300" },
]

function App() {
  return (
    <>
      {cards.map((card) => (
        <Cards key={card.id} title={card.title} p={card.p} btn={card.btn} />
      ))}

      <div>
        {cards.map((card) => (
          <d_style key={card.id} title={card.title} p={card.p} btn={card.btn} />
        ))}
      </div>
    </>
  )
}

export default App