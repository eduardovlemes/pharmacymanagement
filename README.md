# DEVinHouse - Projeto 2 - Módulo Front-End

A DEVinPharmacy LTDA, uma renomada empresa do ramo farmacêutico, está expandindo a sua rede de lojas. Por conta da expansão, o time de gestão necessita da criação de um sistema online, intitulado PharmacyManagement, para gerenciamento de medicamentos e farmácias. O seu perfil chamou a atenção dos gestores para a criação do protótipo front-end do sistema que deverá ser codificado em React.

## Requisitos da Aplicação
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

- Uma página de login contendo um campo de email e senha. O evento onSubmit deverá validar se os campos foram preenchidos, sendo: E-Mail* e Senha* (*Obrigatório). Ao validar os campos de input, o usuário é redirecionado para a página de Mapa.
- Uma página de cadastro de nova farmácia, contendo os campos: Razão social*, CNPJ*, Nome Fantasia*, E-mail*, Telefone, Celular*, Endereço: CEP*, Logradouro/Endereço*, Número*, Bairro*, Cidade*, Estado*, Complemento (opcional), Geolocalização: Latitude* e Longitude*. Os dados de endereço devem ser pré-preenchidos através da consulta do CEP pela API ViaCEP do IBGE Brasil. Preencher com os campos disponíveis da API (logradouro, bairro, cidade e etc) e solicitar ao usuário os campos extras (número, complemento e etc). Os campos obrigatórios e opcionais devem ser validados no método onSubmit. Ao cadastrar uma nova farmácia, mostrar uma mensagem de feedback de empresa cadastrada com sucesso. Utilize o método onSubmit com Try/Catch. Salve os dados em localStorage ou utilize JSON-Server para simular uma API.
- Uma página de cadastro de medicamentos, contendo os campos: Nome do medicamento*, Nome do laboratório*, Dosagem do medicamento*, Descrição do medicamento (opcional), Preço unitário do medicamento*, Tipo do medicamento (obrigatório), Realize o tratamento dos campos da seguinte forma: Para a descrição, utilize textarea; Para o tipo, utilize select; Medicamento controlado ou Medicamento comum. Ao cadastrar um novo medicamento, mostrar uma mensagem de feedback de produto cadastrado com sucesso. Utilize o método onSubmit com Try/Catch. Salve os dados em localStorage ou utilize JSON-Server para simular uma API.
- Uma página de mapa, contendo um Mapa centralizado e com marcadores de todas as farmácias cadastradas no sistema. Utilize a React Leaflet para renderizar os mapas na tela. Utilize a latitude e longitude da farmácia para definir a localização no mapa. Ao clicar no marcador, apresentar uma listagem de todas as informações da farmácia que foram cadastradas, como Razão Social, CNPJ, Nome e etc.
Caso um item opcional não tenha sido cadastrado, a listagem não deverá mostrar o espaço destinado ao item.
- Uma página de listagem de medicamentos onde todos os produtos cadastrados devem ser listados em formato de card. Na parte superior deve existir uma barra de busca para buscar por algum medicamento.
- Uma forma de detalhar os medicamentos que deverá aparecer quando um medicamento é clicado na página de listagem. Você pode criar uma página de detalhes, ou simplesmente um modal. Todas as informações cadastradas devem ser exibidas para o usuário. Na página ou modal poderá existir alguma imagem que represente uma caixa de medicamento, já que o Ministério da Saúde Brasileira proíbe a divulgação da foto do medicamento.
- Uma implementação de página com funcionalidade extra criada por você.
- Um menu de navegação a ser utilizado nas rotas para as páginas da aplicação.
- Criação de uma estilização (identidade visual) do sistema. Na sequência do documento você será apresentado a um wireframe da aplicação proposta, entretanto será ponto avaliativo a criação de sua própria organização e estilização de páginas. Utilize o wireframe apenas para entender o modelo a ser desenvolvido, e crie uma identidade visual única com cores e formatos que achar mais interessante e intuitivo.

## Plano de Projeto
Ao construir a aplicação proposta, o aluno estará colocando em prática os aprendizados em:
- Fundamentos da Programação Web:
- HTML: Principais elementos (versão 4) e Elementos semânticos (versão 5)
- CSS: Seletores, Principais Estilos, Layouts e Layout com Flexbox
- Organização: Trello e Versionamento com GitHub
- JavaScript: Variáveis, Tipos de dados, Array, Estrutura de Controle de Fluxo (condicional e repetição) e Operadores (aritméticos, lógicos e relacionais)
- Funções, Manipulação do DOM, Utilização de Seletores, Eventos, JSON, LocalStorage, Interval e Timeout
- Apresentação do ES6+, Escopo (let, var e const), Classes, Atributos, Encapsulamento (closure) e Funções de Arrays (forEach, map, filter, find, reduce e every)
- Arrow Functions e Módulos (export e import)
- Funções Assíncronas (Promises, Async e Await), Operadores Rest e Spread, e XMLHttpRequest e Fetch
- React:
- Introdução, Renderização de componentes, Renderização de Listas, Props e Proptypes
- Hooks Principais (useState, useEffect e useRef), eventos e lifecycles
- Overview sobre componentes de classe (com revisão de Herança e Polimorfismo)
- Context API, Hooks Avançados (useReducer e useContext), React Router, e Prop Drilling
- Composition, Formulários, Estilos (Styled Components e Bootstrap), Developer Tools, e Deploy
- Componentes de terceiros (react-leaflet)