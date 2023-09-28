import NavLink from '../navlink/NavLink';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink rota={'/'} text={'Home'} />
            <NavLink rota={'/inputs'} text={'Inputs'} />
            <NavLink rota={'/classobject'} text={'ClassObject'} />
        </div>
    )
}

export default Header;