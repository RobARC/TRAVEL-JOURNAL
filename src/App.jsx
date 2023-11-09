
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import data from './data.jsx'


function App() {

const HeroItems = data.map((item ) => {
  return(
    <Hero 
        key={item.id}
        {...item}
      
      />
  )
})

  return (
    <>
     <Header />
      <div>
        {HeroItems}
      </div>
     
   
     </>
  )
}

export default App
