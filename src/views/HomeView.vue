<template>
	<div class="home">
		<div id="home-title">
			<div id="title-text">
				<p>株式会社サンプル</p>
				<p>Sample Company</p>
			</div>
			<img src="@/assets/sample_picture.png" alt="title_picture" id="title-picture">
		</div>
		<div id="home_contents">
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

<!--
<template>
	<div class="home">
		<VueTestFile msg="Welcome to Your Vue.js App"/>
	</div>
</template>


<script>
// @ is an alias to /src
import VueTestFile from '@/components/VueTestFile.vue'

export default {
	name: 'HomeView',
	components: {
		VueTestFile
	}
}
</script>
-->

<style scoped>
#home-title{
	position: relative;
}

#home-title #title-text{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	color: white;
}

#title-picture{
	width: 100%;
	height: 30em; 
	object-fit: cover;
}

#home_contents{
	margin:0 15%;
}

</style>