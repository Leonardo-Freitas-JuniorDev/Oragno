import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, seTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        seTime('')
        setImagem('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                        label="Nome" 
                    />
                <CampoTexto
                        obrigatorio={true} 
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)} 
                        label="Cargo" 
                    />
                <CampoTexto 
                        placeholder="Digite o endereço da imagem" 
                        label="Imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa
                        label="Time" 
                        itens={props.times} 
                        valor={time}
                        aoAlterado={valor => seTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario