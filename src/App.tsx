import { Usuario } from './models/Usuario';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');

  const senhaCorreta = usuario.verificarSenha('123456');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>
      <p>
        Senha {senhaCorreta ? 'correta' : 'incorreta'}!
      </p>
    </div>
  );
}

export default App;