import { useState } from 'react';
import styles from './App.module.css';
import { GridItem } from './components/GridItem';
import {levels, calculateImc} from './helpers/imc';

const App = () =>{
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () =>{
    if(heightField && weightField){

    }else{
      alert('Todos os campos são obrigatórios!!');
    }
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
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) =>(
              <GridItem  key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;