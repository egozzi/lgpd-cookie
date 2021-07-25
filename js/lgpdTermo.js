/**
 * Summary. Termo de consentimento LGPD
 *
 * Description. Biblioteca para tratamento do termo de consentimento guardando os dados apenas localmente.
 *
 * @version 1.1
 * @link   https://github.com/egozzi/lgpd-cookie.git
 * @author Erico Murilo Gozzi
 * @license	LGPL-3.0-or-later
 */

/** jshint {inline configuration here} */

const termoConsentimentoLgpd = (function () {

  let CHAVE_TERMO = "LGPD.TERMO";

  const iniciarComponente = function (chaveTermo) {

    if (chaveTermo)
        CHAVE_TERMO = chaveTermo;

    var botaoTermo = document.getElementById("lgpd-botao");

    if (botaoTermo) {

        botaoTermo.onclick = lgpdCliqueTermo;

      if (aceitouTermo()) {
        lgpdDesativaTermo();
      }
    } else {
      console.error("[COMPONENTE CONSENTIMENTO LGPD] Botão do termo não encontrado na página. Funcionalidade não funcionará adequadamente");
    }
  };

  const lgpdCliqueTermo = function () {

    let dataAceite = dataAtual();
    setCookie(CHAVE_TERMO, "Aceito em " + dataAceite);

    lgpdDesativaTermo();
  };

  const monitorarElemento = function (id, callbackOk, callbackNOk) {
    var elemento = document.getElementById(id);

    if (elemento) {
      elemento.addEventListener("click", function () {
        if (!aceitouTermo()) {
          if (callbackNOk) {
            callbackNOk();
          } else {
            alert(
              "Você deve aceitar o termo de consentimento para realizar esta operação"
            );
          }
          return false;
        } else {
          if (callbackOk) {
            callbackOk();
          }
        }
      });
    }
  };

  function aceitouTermo() {
    return getCookie(CHAVE_TERMO) != null;
  }

  function lgpdDesativaTermo() {
    const termo = document.getElementById("lgpd-termo");
    termo.style.display = "none";
  }

  function getCookie(k) {
    return localStorage.getItem(k);
  }

  function setCookie(k, v) {
    localStorage.setItem(k, v);
  }

  function dataAtual(){

    var d = new Date();

    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " 
         + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  } 

  return {
    iniciarTermo: iniciarComponente,
    monitorarElemento: monitorarElemento,
  };
})();
