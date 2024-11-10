<template>
	<div id="dummy_news">
		<p>{{ $route.params.year }}年{{ $route.params.month }}月{{ $route.params.day }}日</p>
		<p>{{ $route.params.year }}年{{ $route.params.month }}月{{ $route.params.day }}日の{{ Number($route.params.index) + 1 }}番目の記事です。</p>
	</div>
	<div>このページはダミーです。内容はありません。</div>
</template>

<style scoped>
@media screen and (min-width:768px){

}

@media screen and (max-width:768px){

}

@media screen and (max-width:480px){

}

</style>