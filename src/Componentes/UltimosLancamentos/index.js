import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    gap: 5px;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" 
            tamanhofonte="36px">
            ÚLTIMOS LANÇAMENTOS!
            </Titulo>
            <NovosLivrosContainer>
            {livros.map( livro => (
                <img src={livro.src} alt='ultimos-lancamentos' />   
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer> 
    )
}

export default UltimosLancamentos;