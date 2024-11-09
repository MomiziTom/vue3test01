<template>
	<div id="third-article">
		<div class="heading">
			<p>Heading</p>
			<span>this is sub heading</span>
		</div>
		<ul>
			<li v-for="article in $store.state.third_articles" :key="article">
				<div>
					<img :src="article.thumbnail" :alt="article.alt" class="article-thumbnail">
					<p class="article-text">{{ article.text }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeThirdArticle',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width:768px){

	ul{
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		margin:0px 0px;
		padding: 0;
	}

	li{
		width: 10em;
		list-style: none;
		text-align:left;
	}

	.article-text{
		width: 10em;
	}
	.article-thumbnail{
		width: 10em;
		height: 10em;
	}
}
</style>
