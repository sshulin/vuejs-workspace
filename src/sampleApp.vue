<template>
		<div class="spl-root">
			<div class="spl-root__wrapper">
				<div class="spl-root__data">
					{{ data }}
				</div>
			</div>
		</div>
</template>

<script>
	
export default {
	// props: ['prop'],
	name: 'sampleApp',
	data: function() {
		var vm = this;

		return {
			data: 'Some sample data here'
		}
	}
};

</script>

<style lang="scss">

</style>