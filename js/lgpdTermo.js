/**
 * Summary. Termo de consentimento LGPD
 *
 * Description. Biblioteca para tratamento do termo de consentimento guardando os dados apenas localmente.
 *
 * @version 1.0
 * @link   https://github.com/egozzi/lgpd-cookie.git
 * @author Erico Murilo Gozzi
 * @license	LGPL-3.0-or-later
 */
 
/** jshint {inline configuration here} */

var CHAVE_COOKIE = "LGPD.TERMO";

function lgpdIniciarTermo(){
    
    if (aceitouTermo()){
        lgpdDesativaTermo();
    }
}

function lgpdCliqueTermo(){

   setCookie(CHAVE_COOKIE, "OK");

   lgpdDesativaTermo();
}

function monitorarElemento(id, callbackOk, callbackNOk){
    var elemento = document.getElementById(id);

    if (elemento){
        elemento.addEventListener('click', function(){

            if (!aceitouTermo()){
                if (callbackNOk){
                    callbackNOk();
                } else {
                    alert('Você deve aceitar o termo de consentimento para realizar esta operação');
                }               
                return false;
            } else {
                if (callbackOk){
                    callbackOk();
                }
            }
        });
    }

}

function aceitouTermo(){

    console.log(getCookie(CHAVE_COOKIE));
    console.log(getCookie(CHAVE_COOKIE) != null);

    return getCookie(CHAVE_COOKIE) != null;
}

function lgpdDesativaTermo(){
    const termo = document.getElementById('lgpd-termo');
    termo.style.display = 'none';
}

function getCookie(k){
    return localStorage.getItem(k);
}

function setCookie(k, v) {
    localStorage.setItem(k, v);
}
