<template>
		<div class="spl-root">
			{{ data }}
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