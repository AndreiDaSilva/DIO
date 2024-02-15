<template>
	<div class="panel">
		<div class="container">
			<!-- <TopPanelButton /> -->
		</div>
	</div>
</template>

<script>
// import TopPanelButton from "./TopPanelButton.vue";
export default {
	nome: 'TopPanel',
	components: {
		// TopPanelButton,
	},
};
</script>

<style lang="scss" scoped>
.panel {
	position: absolute;
	width: 100%;
	background-color: color("red-04");
	clip-path: polygon(0 0, 100% 0, 100% 41px, 270px 41px, 200px 100%, 0 100%);
	z-index: 1;
	@media (min-width: $viewport-medium) {
		width: calc(50% + 20px);
	}
}
.container {
	display: flex;
	padding: 10px;
	align-items: flex-start;
	height: 75px;
	background-color: color("red-01");
	clip-path: polygon(0 0, 100% 0, 100% 38px, 270px 38px, 200px 72px, 0 72px);
	box-shadow: inset -10px 0 0 0 color('red-03');
}
</style>
