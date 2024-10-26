<template>
	<div id="second-article">
		<div class="heading">
			<p>Heading</p>
			<span>this is sub heading</span>
		</div>
		<ul id="n">
			<li v-for="article in articles" :key="article">
				<div>
					<img :src="article.thumbnail" :alt="article.alt" class="article-thumbnail">
					<span>{{ article.text }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<!--
<template>
		<div id="second-article">
			<ul>
				<li>
					<div>
						<img src="@/assets/sample_thumbnail.png" alt="article-thumbnail1" class="article-thumbnail">
						<span>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text end</span>
					</div>
				</li>
				<li>
					<div>
						<img src="@/assets/sample_thumbnail.png" alt="article-thumbnail2" class="article-thumbnail">
						<span>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text end</span>
					</div>
				</li>
				<li>
					<div>
						<img src="@/assets/sample_thumbnail.png" alt="article-thumbnail2" class="article-thumbnail">
						<span>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text end</span>
					</div>
				</li>
				<li>
					<div>
						<img src="@/assets/sample_thumbnail.png" alt="article-thumbnail2" class="article-thumbnail">
						<span>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text end</span>
					</div>
				</li>
			</ul>
		</div>
</template>
-->

<script>
export default {
	name: 'HomeSecondArticle',
	data(){
		return{
			articles : [
				{
					thumbnail:require("@/assets/sample_thumbnail.png"),
					alt:"aaa",
					text:"これはサンプルテキストです。c4-621レイヴン"
				},
				{
					thumbnail:require("@/assets/sample_thumbnail.png"),
					alt:"bbb",
					text:"これはサンプルテキストです。レイヴンの名を返せとは言いません"
				},
				{
					thumbnail:require("@/assets/sample_thumbnail.png"),
					alt:"ccc",
					text:"これはサンプルテキストです。サンプルテキスト(例文)だけにレイヴンってね"
				},
				{
					thumbnail:require("@/assets/sample_thumbnail.png"),
					alt:"ddd",
					text:"これはサンプルテキストです。このホームページを構築したのは、数学が得意なオオサワか！"
				},
			]
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
