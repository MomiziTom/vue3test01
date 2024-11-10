<template>
	<div class="home">
		<div id="home-title">
			<div id="company-name">
				<p>{{ $store.state.company_information.name.content }}</p>
				<p>{{ $store.state.company_information.name.alphabet }}</p>
			</div>
			<img src="@/assets/sample_picture.png" alt="title_picture" id="company-picture">
		</div>
		<div class="content-part">
			<HomeTopArticle />
			<HomeSecondArticle />
			<HomeThirdArticle />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HomeTopArticle from '@/components/HomeTopArticle.vue'
import HomeSecondArticle from '@/components/HomeSecondArticle.vue'
import HomeThirdArticle from '@/components/HomeThirdArticle.vue'

export default {
	name: 'HomeView',
	components: {
		HomeTopArticle,
		HomeSecondArticle,
		HomeThirdArticle,
	}
}
</script>

<style scoped>
#home-title{
	position: relative;
}

#company-name{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	color: white;
}

/* PC表示*/
@media screen and (min-width:768px){
	#company-picture{
		width: 100%;
		height: 30em; 
		object-fit: cover;
	}
}

/* タブレット表示*/
@media screen and (max-width:768px){
	#company-name{
		line-height:4px;
		text-align:center;
	}

	#company-picture{
		width: 100%;
		height: 15em; 
		object-fit: cover;
	}
}

/* スマホ表示*/
@media screen and (max-width:480px){
	#company-name{
		line-height:1px;
		text-align:center;
	}

	#company-picture{
		width: 100%;
		height: 15em; 
		object-fit: cover;
	}
}

</style>