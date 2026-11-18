import { Counter } from './components/Counter'
import CounterClass from './components/CounterClass'
import { Header } from './components/Header'
const App = () => {
  console.log('App Render...')
  return (
    <div>
       <Header/>
       <Counter/>
       <CounterClass/>
       
    </div>
  )
}

export default App