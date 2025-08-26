import { useState } from 'react' 
import './App.css';
import  api from './services/api'

function App() {

  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})


async function clique() {
    if(input === '') {
      alert('Preencha um CEP válido!')
    }


    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
     }
    catch {
      alert('A sua busca apresenta falha!')
      setInput('')
    }
  }
  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>
      <div className='containerInput'>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className='btn' onClick={clique}>Buscar</button>
      </div>

      <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>Rua: {cep.logradouro}</span><br/>
        <span>Bairro: {cep.bairro}</span><br/>
        <span>Cidade: {cep.localidade}</span><br/>
      </main>
    </div>
  );
}

export default App;
