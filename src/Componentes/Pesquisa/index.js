import styled from "styled-components";
import Input from "../input";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const SubTitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        p {
            width: 200px;
        }
        img {
            width: 100px;
        }
        &:hover {
            border: 1px solid white;
        }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState ([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre o seu livro na nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src} alt="capa-livro"/>
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa;