import Header from './components/Header'
import Footer from './components/Footer'
import CatCard from './components/CatCard'
import cats from './cats'

export default function App() {
  const catCards = cats.map(cat => {
    return(
      <CatCard 
        key={cat.id}
        cat={cat}
      />
    )
  })

  return (
    <>
      <Header />
      <div className="main-container">
        {catCards}
      </div>
      <Footer />
    </>
  )
}