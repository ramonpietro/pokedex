/*
Quando clicar no pokemon da listagem, deve-se esconder o cartão com o pokemon aberto e mostrar o cartao com o pokemon selecionado na listagem

Para isso vamos precisar trabalhar com dois elementos: listagem e cartao.

criar duas variaveis no js para trabalhar com os elementos na tela

necessario trabalhar com um evento de click feito pelo usuario na listagem do pokemon

- remover a classe "aberto" apenas do cartao que está aberto
- ao clicar em um pokemon da listagem  pegamos o id deste pokemon para saber qual card mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item selecionado
*/

// criar duas variáveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// para cada classe pokemon
listaSelecaoPokemons.forEach(pokemon => {
    // evento de clique
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        // remover a classe aberta
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual pokemon mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemoParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})