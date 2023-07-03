import './Rodape.css'

const Rodape = (props) => {
    return (
        <section className='container'>
            <div className='container__icons'>
                <img src='/imagens/fb.png' />
                <img src='/imagens/tw.png' />
                <img src='/imagens/ig.png' />
            </div>

            <div className='container__logo'>
                <img src='/imagens/logo.png' />
            </div>

            <div className='container__alura'>
                <h3>Desenvolvido por <span>Leo</span></h3>
            </div>
        </section>
    )
}

export default Rodape