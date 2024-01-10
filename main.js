let nome = "Pedro"

// Função que calcula o saldo de rankeadas e o nível do jogador
function calculaRankeadas(vitorias, derrotas) {
    // Calcula o saldo de rankeadas
    let saldo = vitorias - derrotas;
    // Inicializa o nível como Ferro
    let nivel = "Ferro";
    // Verifica as condições para cada nível
    if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
    // Retorna o saldo e o nível
    return [saldo, nivel];
  }
  
  // Exemplo de uso da função
  let vitorias = 75; // Quantidade de vitórias
  let derrotas = 25; // Quantidade de derrotas
  let resultado = calculaRankeadas(vitorias, derrotas); // Chama a função
  let saldoVitorias = resultado[0]; // Saldo de rankeadas
  let nivel = resultado[1]; // Nível do jogador
  // Exibe a mensagem
  console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel + " com nome " + nome );
  