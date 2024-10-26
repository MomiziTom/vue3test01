<template>
		<div id="top-article">
			<img src="@/assets/sample_picture.png" alt="top-article1" class="article-picture">
			<img src="@/assets/sample_picture.png" alt="top-article1" class="article-picture">
		</div>
</template>

<script>
export default {
	name: 'HomeTopArticle',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-article{
	display: flex;
	justify-content:space-between;
	margin: 10px 0px;
}

.article-picture{
	width: 45%;
}
</style>
