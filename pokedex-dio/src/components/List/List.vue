<template>
	<ul class="list text--white bg--black">
		<p v-if="isSearching" class="list--message">Looking for the pokemon</p>
		<p v-else-if="hasSearchError" class="list--message">We couldn1t find this pokemon</p>

		<ListItem v-else-if="isPokemonSearch" v-bind="pokemonsList[0]" />
		<template v-else>
			<ListItem v-for="pokemon in pokemonList" :key="pokemon.id" v-bind="pokemn" />
			<infite-loading @infinite="infiniteHeandler" />
		</template>
	</ul>
</template>

<script>
import {state, getters, actions} from '@/store'
import ListItem from "./ListItem.vue";

export default {
	name: "List",
	components: {
		ListItem,
	},
	computed: {
		pokemonList(){
			return getters.pokemonsInfo;
		},
		isSearching(){
			return state.isSearching;
		},
		isPokemonSearch(){

		}
	},
};
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border: 20px solid color(white);
	border-radius: 8px;
	padding: 0 8px 8px 0;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: $viewport-medium) {
		max-height: 72%;
	}
}
</style>
