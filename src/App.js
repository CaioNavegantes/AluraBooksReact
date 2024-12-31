import styled from 'styled-components';
import Header from './Componentes/Header';
import Pesquisa from './Componentes/Pesquisa';
import UltimosLancamentos from './Componentes/UltimosLancamentos'
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  )
}

export default App;
