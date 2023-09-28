import styles from './PopUp.module.css';
const PopUp = ({ msg, tipo }) => {
let color = (tipo === 'error') ? styles.popuperro : styles.popupsucesso;

    return (
        <div className={color}>
            <h1 className={styles.h1style}>{msg}</h1>
        </div>

    )
}

export default PopUp;