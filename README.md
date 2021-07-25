# Sobre o projeto

Este projeto implementa um simples termo de consentimento para a LGPD.

## Tecnologias utilizadas

 * Javascript (com suporte ao IE)
 * CSS

## Funcionalidades

* Salvar aceite do termo de consentimento localmente no computador (storage);
* Monitorar se o termo foi aceito para executar alguma ação específica na página.

# Instalação

Copiar os arquivos ```versao/css/lgpd-termo.css``` (por exemplo, ```css```) e  ```versao/js/lgpdTermo.js``` (por exemplo, ```js```) para pastas da aplicação.

_Exemplo de configuração para o arquivo css:_

```html
<link href="css/lgpd-termo.css" rel="stylesheet">
```

_Exemplo de configuração para o arquivo js:_

```html
 <script type="text/javascript" src="js/lgpdTermo.js"></script>
```

# Configuração

1. Iniciar o componente no evento de carregamento da página (A "CHAVE-IDENTIFICADORA-DO-TERMO" é opcional, servindo para diferenciar a chave do termo de outras chaves salvas no sistema):

```html
<script type="text/javascript">    
    window.onload = function (){
      termoConsentimentoLgpd.iniciarTermo("OUTRO-TERMO");
  };  
</script>
```

1. Configurar os componentes da página que deverão ser monitorados:

```html
<script type="text/javascript">    
    window.onload = function (){
      termoConsentimentoLgpd.iniciarTermo("OUTRO-TERMO");
      termoConsentimentoLgpd.monitorarElemento('botaoTeste');
  };  
</script>
```

## Operações disponíveis

### iniciarTermo

Inicia o componente para uso. Valida se os componentes visuais estão configurados e mostra eles.

#### Sintaxe

```js
termoConsentimentoLgpd.iniciarTermo([chave]);
```

_Parâmetros_

```chave``` - campo texto (opcional) com a chave que será guardada a informação de consentimento. Caso não seja informado, assume o valor "LGPD.TERMO".

### monitorarElemento

Monitora um elemento da página. Caso o termo não tenha sido aceito, cancela o evento de clique do elemento.

#### Sintaxe

```js
termoConsentimentoLgpd.monitorarElemento((id, [callbackOk], [callbackNOk]));
```

_Parâmetros_

```id``` - campo texto com id do componente.

```callbackOk``` - campo opcional que permite uma função para tratar o caso do termo ter sido assinado.

```callbackNOk``` - campo opcional que permite uma função para tratar o caso do termo ter não sido assinado. Após a execução desta função o método cancela o evento de clique.
