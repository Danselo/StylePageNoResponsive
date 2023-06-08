import './App.css'
import { Cards } from './Components/Card'
import { StyleSection } from './Components/Section'
import { cards,fashionsTrends } from './Constantes/constastes'
import { AboutMe } from './Components/About'
function App() {
  return (
    <>
      <section className='title-init'>
        <h1 className='title-init__title'>StyleFusion</h1>
        <p className='title-init_description'>Style and sophistication in every stitch, fashion that fuses elegance and innovation</p>
      </section>
      <section className='cards-init'>
          {cards.map((card)=>{
            return <Cards key={card.image} title={card.title} description={card.description} image={card.image}/>
          })}
      </section>
      <StyleSection title={fashionsTrends[0].title} description={fashionsTrends[0].content} image={fashionsTrends[0].image} />
      <AboutMe />
    </>
  )
}

export default App
