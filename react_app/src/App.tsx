import { useState } from 'react'
import { useRef } from 'react'
import './index.css'

function App() {

  const [resultado, setResultado] = useState<number>()
  const inputRef = useRef<HTMLInputElement>(null)
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const handleClick = ()=>{ 
    if(inputRef.current){
      const valorDigitado = Math.abs(parseInt(inputRef.current.value))
      algoritmo(valorDigitado)
    }
  }

  const algoritmo = async (valor:number)=>{
    do{
      setResultado(valor)
      if(valor %2 == 1){
        valor = valor * 3 + 1
      }else{
        valor = valor / 2
      }
      await delay(200)
    }while (valor != 1)
      setResultado(1)
  }

  return (
    <>
      <h1>3X + 1</h1>
      <p>Digite qualquer número positivo, e aplicam-se duas regras: se o número é ímpar,
        multiplique por 3 e adicione 1, se o número é par, divida por 2. todo número positivo
        vai eventualmente cair no loop 4-{'>'}2-{'>'}1
      </p>
      <div id='container'>
        <div id='resultado'>{resultado}</div>
        <input type="number" placeholder='Digite um número para testar' ref={inputRef}/>
        <button onClick={handleClick}>INICIAR</button>
      </div>
    </>
  )
}

export default App
