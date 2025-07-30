import { useState } from 'react';
import { Usuario } from './models/Usuario';

function App() {
  const [usuario] = useState(new Usuario('Lucas', 28, '123456'));

  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mostraRedefinir, setMostraRedefinir] = useState(false); // 👈 controla se exibe a área de redefinição

  function verificar() {
    if (usuario.verificarSenha(senhaDigitada)) {
      setMensagem('✅ Senha correta!');
    } else {
      setMensagem('❌ Senha incorreta!');
    }
  }

  function redefinir() {
    if (novaSenha.trim().length < 4) {
      setMensagem('⚠️ A nova senha precisa ter pelo menos 4 caracteres.');
      return;
    }

    usuario.redefinirSenha(novaSenha);
    setMensagem('🔑 Senha redefinida com sucesso!');
    //setNovaSenha('');
    //setSenhaDigitada('');
    setMostraRedefinir(false);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>

      {/* Campo de senha para verificar */}
      <input
        type="password"
        placeholder="Digite a senha"
        value={senhaDigitada}
        onChange={(e) => setSenhaDigitada(e.target.value)}
      />
      <button onClick={verificar} style={{ marginLeft: '1rem' }}>
        Verificar senha
      </button>

      {/* ✅ Este é o botão que deve aparecer */}
      {!mostraRedefinir && (
        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => setMostraRedefinir(true)}>
            Redefinir senha
          </button>
        </div>
      )}

      {/* Campo para digitar a nova senha */}
      {mostraRedefinir && (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button onClick={redefinir} style={{ marginLeft: '1rem' }}>
            Confirmar nova senha
          </button>
        </div>
      )}

      {/* Mensagem final */}
      <p style={{ marginTop: '1rem' }}>{mensagem}</p>
    </div>
  );
}

export default App;
