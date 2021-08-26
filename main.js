// Aula 09 26/08/2021 CHECKPOINT
// Rafael Nobre Queiroz

/********************************
/****  Padrões do Microondas ****
*********************************/
const PIPOCA = 1;
const MACARRAO = 2;
const CARNE = 3;
const FEIJAO = 4;
const BRIGADEIRO = 5;

const TEMPO_PADRAO_PIPOCA = 10;
const TEMPO_PADRAO_MACARRAO = 8;
const TEMPO_PADRAO_CARNE = 15;
const TEMPO_PADRAO_FEIJAO = 12;
const TEMPO_PADRAO_BRIGADEIRO = 8;

const MENSAGEM_TEMPO_INSUFICIENTE = 'Tempo insuficiente';
const MENSAGEM_COMIDA_QUEIMOU = 'A comida queimou';
const MENSAGEM_EXPLODIU = 'Kabummm';
const MENSAGEM_PRATO_INEXISTENTE = 'Prato inexistente';
const MENSAGEM_SUCESSO = 'Prato pronto, bom apetite!!!';

/******************
/**** Lógica *****
******************/

function exibirMensagem(texto) {
  console.log(texto);
}

function fazerPrato(prato, tempo) {
  if (prato === PIPOCA) {
    if (tempo > 2 * TEMPO_PADRAO_PIPOCA && tempo <= 3 * TEMPO_PADRAO_PIPOCA) {
      return exibirMensagem(MENSAGEM_COMIDA_QUEIMOU);
    } else if (tempo < TEMPO_PADRAO_PIPOCA) {
      return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
    } else if (tempo > 3 * TEMPO_PADRAO_PIPOCA) {
      return exibirMensagem(MENSAGEM_EXPLODIU);
    }
  } else if (prato === MACARRAO) {
    if (tempo > 2 * TEMPO_PADRAO_MACARRAO && tempo <= 3 * TEMPO_PADRAO_MACARRAO) {
      return exibirMensagem(MENSAGEM_COMIDA_QUEIMOU);
    } else if (tempo < TEMPO_PADRAO_MACARRAO) {
      return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
    } else if (tempo > 3 * TEMPO_PADRAO_MACARRAO) {
      return exibirMensagem(MENSAGEM_EXPLODIU);
    }
  } else if (prato === CARNE) {
    if (tempo > 2 * TEMPO_PADRAO_CARNE && tempo <= 3 * TEMPO_PADRAO_CARNE) {
      return exibirMensagem(MENSAGEM_COMIDA_QUEIMOU);
    } else if (tempo < TEMPO_PADRAO_CARNE) {
      return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
    } else if (tempo > 3 * TEMPO_PADRAO_CARNE) {
      return exibirMensagem(MENSAGEM_EXPLODIU);
    }
  } else if (prato === FEIJAO) {
    if (tempo > 2 * TEMPO_PADRAO_FEIJAO && tempo <= 3 * TEMPO_PADRAO_FEIJAO) {
      return exibirMensagem(MENSAGEM_COMIDA_QUEIMOU);
    } else if (tempo < TEMPO_PADRAO_FEIJAO) {
      return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
    } else if (tempo > 3 * TEMPO_PADRAO_FEIJAO) {
      return exibirMensagem(MENSAGEM_EXPLODIU);
    }
  } else if (prato === BRIGADEIRO) {
    if (tempo > 2 * TEMPO_PADRAO_BRIGADEIRO && tempo <= 3 * TEMPO_PADRAO_BRIGADEIRO) {
      return exibirMensagem(MENSAGEM_COMIDA_QUEIMOU);
    } else if (tempo < TEMPO_PADRAO_BRIGADEIRO) {
      return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
    } else if (tempo > 3 * TEMPO_PADRAO_BRIGADEIRO) {
      return exibirMensagem(MENSAGEM_EXPLODIU);
    }
  } else {
    return exibirMensagem(MENSAGEM_PRATO_INEXISTENTE);
  }

  return exibirMensagem(MENSAGEM_SUCESSO);
}

/*******************************
/****  Escolhas do Usuário *****
********************************/

// Prato existente com tempo padrão
fazerPrato(FEIJAO, TEMPO_PADRAO_FEIJAO);

// Prato existente com tempo maior que o dobro
fazerPrato(FEIJAO, TEMPO_PADRAO_FEIJAO + 15);

// Prato existente com tempo maior que o triplo
fazerPrato(FEIJAO, TEMPO_PADRAO_FEIJAO + 25);

// Prato Inexistente
fazerPrato('Peixe', 10);
