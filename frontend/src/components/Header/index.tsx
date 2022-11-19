import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="" height="" width="" />
                <h1>Sistema de Vendas</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/vitorgithub/" target="_blank">linkedin/in/vitorgithub</a>
                </p>
            </div>
        </header>
    )

}

export default Header;