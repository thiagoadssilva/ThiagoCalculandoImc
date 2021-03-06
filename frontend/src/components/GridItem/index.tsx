import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props ={
  item: Level
  clearInputs?:boolean
}

export const GridItem = ({item, clearInputs}: Props) =>{
  return(
    <div className={styles.main} style={{backgroundColor: item.color}}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? upImage : downImage} alt="Mãozinha com Like ou deslike" width='40px'/>
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && !clearInputs &&
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}