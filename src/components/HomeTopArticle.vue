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
/* PC表示*/
@media screen and (min-width:768px){

	#top-article{
		display: flex;
		justify-content:space-between;
		margin: 10px 0px;
	}

	.article-picture{
		width: 45%;
	}
}

/* タブレット表示*/
@media screen and (max-width:768px){
	#top-article{
		margin: 10px auto;
		text-align: center;
	}
	.article-picture{
		width: 90%;
	}

}

/* スマホ表示*/
@media screen and (max-width:480px){

}

</style>
