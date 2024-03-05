import state from "./state";

export default {
	get pokemonsInfo() {
		return state.list.map(info => ({
			id: info.id,
			name: info.name,
			types: info.types.map(({ type }) => type.name),
			sprite: info.sprite.front_default || 'https://raw.githubsercontent.com/PokeApi/sprites/master/sprites/items/poke-ball.png'
		}));
	},
};
