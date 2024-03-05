import PokeApi from "@/servers/pokeapi";

import state from "./state";
import mutations from "./mutations";

export default {
	async getPokemons() {
		const {
			setList,
			setIsPokemomSearch,
			setListHasError,
			setListHasNext,
			setListHasComplete,
			updateOffset,
		} = mutations;

		try {
			setIsPokemomSearch(false);
			setListHasError(false);

			const pokemonsList = await PokeApi.getPokemon({ limit: state.limit, offset: state.offset });

			if (pokemonsList?.results?.length) {
				const prepareInfo = pokemonsList.results.map(item => PokeApi.getPokemonByName(item.name));
				const pokemonInfo = await Promise.all(prepareInfo);

				setList(pokemonInfo);
			}
			if (pokemonsList?.next) {
				setListHasNext(true);
				updateOffset();
			} else {
				setListHasNext(false);
				setListHasComplete(true);
			}
		} catch (error) {
			setListHasError(true);
		}
	},

	async getPokemonByName(name) {
		const { setPokemonSearched } = mutations;

		const pokemon = await PokeApi.getPokemonByName(name);

		if (pokemon) {
			setPokemonSearched(pokemon);
		}
	},
	async searchPokemon(name) {
		const {
			setIsPokemomSearch,
			setIsSearching,
			setPokemonSearched,
			setSearchHasError,
			resetList,
		} = mutations;

		if (!name) {
			resetList();
			return;
		}

		try {
			setSearchHasError(false);
			setIsSearching(true);
			setIsPokemomSearch(true);

			const pokemon = state.list.find(info => info.name.toLowerCase() === name.toLowerCase())

			if (pokemon) {
				setPokemonSearched(pokemon);
				return;
			}

			await this.getPokemonByName(name);
		} catch (error) {
			setSearchHasError(true);
		} finally {
			setIsSearching(false);
		}
	},
};
