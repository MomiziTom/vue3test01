<template>
	<div id="second-article">
		<div class="heading">
			<p>Heading</p>
			<span>this is sub heading</span>
		</div>
		<ul id="n">
			<li v-for="article in $store.state.second_articles" :key="article">
				<div>
					<img :src="article.thumbnail" :alt="article.alt" class="article-thumbnail">
					<span class="article-text">{{ article.text }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeSecondArticle',
	data(){
		return{
			
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* PC表示*/
@media screen and (min-width:768px){
	ul{
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		padding: 0px;
		margin: 0px;
	}

	li{
		list-style: none;
	}

	li div{
		display:flex ;
		width: 400px;
		margin:0px 0px 20px;
	}

	li div span{
		text-align: left;
	}

	.article-thumbnail{
		width: 12em;
		height: 12em;
	}
}

/* タブレット表示*/
@media screen and (max-width:768px){
	#second-article{
		width:90%;
		margin: 10px auto;
		text-align: center;
	}

	ul{
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		padding: 0px;
		margin: 0px;
	}

	li{
		width: 40vw;
		list-style: none;
		text-align:left;
	}

	li div{
		width: 40vw;
	}

	.article-thumbnail{
		width: 40vw;
		height: 40vw;
	}

}

/* スマホ表示*/
@media screen and (max-width:480px){

}

</style>
