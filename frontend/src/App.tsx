import { useState } from 'react';
import styles from './App.module.css';
import { GridItem } from './components/GridItem';
import {levels, calculateImc, Level} from './helpers/imc';

const App = () =>{
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () =>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField))
    }else{
      alert('Todos os campos são obrigatórios!!');
    }
  }

  const handleClear =()=>{
    setHeightField(0)
    setWeightField(0)
    setToShow(null)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <h1>IMC - (ou índice de massa corporal)</h1>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2>Calcule o seu IMC.</h2>
          <p>IMC significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura, o que pode interferir diretamente na saúde e qualidade de vida da pessoa.</p>

          <input 
            type="number" 
            placeholder='Digite a sua altura. Ex: 1.5 (em métros)' 
            value={heightField > 0 ? heightField : ''} 
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type="number" 
            placeholder='Digite o seu peso. Ex: 95.5 (em kg)' 
            value={weightField > 0 ? weightField : ''} 
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
          <button className={styles.buttonClear} onClick={handleClear}>Limpar</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) =>(
                <GridItem  key={key} item={item}/>
              ))}
            </div>
          }
          { toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}></div>
              <GridItem item={toShow}/>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default App;