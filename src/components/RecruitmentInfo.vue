<template>
	<div id="recruitment">
		<div class="title-center">
			<p>採用情報</p>
		</div>
		<div id="home-title">
			<div id="company-name">
				<p>{{ $store.state.company_information.name.content }}</p>
				<p>採用情報ページ</p>
			</div>
			<img src="@/assets/sample_picture.png" alt="title_picture" id="company-picture">
		</div>
		<div class="content-part">
			<p>新卒採用情報</p>
		</div>
	</div>
</template>

<style scoped>

#home-title{
	position: relative;
}

#home-title #company-name{
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
	#company-picture{
		width: 100%;
		height: 15em; 
		object-fit: cover;
	}
}

/* スマホ表示*/
@media screen and (max-width:480px){
	#company-picture{
		width: 100%;
		height: 15em; 
		object-fit: cover;
	}
}

</style>