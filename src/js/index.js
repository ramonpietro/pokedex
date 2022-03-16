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
