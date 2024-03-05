import state from './state'

export default {

	//Updates da pokedex no loading offset
	updateOffset() {
		state.offset += state.limit;
	},

	//Adds pokemons na pokedex para o efeito de infiite loading
	setList(list){
		state.list.push(...list);
		state.tmpList.push(...list)
	},

	//Informar se a pokedex precissa de mais dados
	setListHasNext(flag){
		state.listHasNext = flag;
	},

	//Informar se a pokedex terminou de buscar os dados
	setListHasComplete(flag){
		state.listHasCompleted = flag;
	},

	//Informar se a pokedex teve um erro
	setListHasError(flag){
		state.listHasError = flag;
	},

	//Resetar a pokedex para o ultimo cache e remover o dado de busca
	resetList(){
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},

	//Add na pokedex somente o pokemom que foi buscado
	setPokemonSearched(pokemom){
		state.list = [pokemom];
	},

	//Informar que a busca esta acontecendo
	setIsSearching(flag){
		state.isSearching = flag;
	},

	//Informar que a busca foi feita
	setIsPokemomSearch(flag){
		state.isPokemonSearch = flag;
	},

	//Informar se a busca teve algum erro
	setSearchHasError(flag){
		state.searchHasError = flag;
	}


};
