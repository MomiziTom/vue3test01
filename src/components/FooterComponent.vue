<template>
	<footer>
		<div id="footer_contents">
			<div id="basic_information">
				<img id="logo" src="../assets/sample_logo.png" alt="logo">
				<p>株式会社サンプル</p>
				<p>東京都中央区築地○○○○</p>
				<p>TEL:03-0000-0000</p>
				<p>FAX:03-0000-0000</p>
			</div>
			<div>
				<p class="guide_top">株式会社サンプルについて</p>
				<ul>
					<li v-for="company_guide in company_guide" :key="company_guide">
						<router-link :to="company_guide.url">{{ company_guide.title }}</router-link>
					</li>
				</ul>
			</div>
			<div>
				<p class="guide_top">製品について</p>
				<ul>
					<li v-for="product_guide in product_guide" :key="product_guide">
						<router-link :to="product_guide.url">{{ product_guide.title }}</router-link>
					</li>
				</ul>
			</div>
			<div>
				<p class="guide_top">関連サイト</p>
				<ul>
					<li v-for="link_guide in link_guide" :key="link_guide">
						<router-link :to="link_guide.url">{{ link_guide.title }}</router-link>
					</li>
				</ul>
		</div>
		</div>
	</footer>
</template>

<script>
export default {
	name:'FooterComponent',
	data(){
		return{
			company_guide : [
				{
					title:"会社案内",
					url:"/about"
				},
				{
					title:"会社沿革",
					url:"/"
				},
				{
					title:"ニュースリリース",
					url:"/"
				},
				{
					title:"アクセス",
					url:"/"
				},
				{
					title:"採用情報",
					url:"/"
				},
				{
					title:"お問い合わせ",
					url:"/"
				},
				{
					title:"サイトマップ",
					url:"/"
				},
			],
			product_guide : [
				{
					title:"製品案内",
					url:"/"
				},
				{
					title:"導入事例",
					url:"/"
				},
				{
					title:"資料請求",
					url:"/"
				},
			],
			link_guide : [
				{
					title:"オンラインストア",
					url:"/"
				},
				{
					title:"Sample Restaurant",
					url:"/"
				},
				{
					title:"サンプルCafe",
					url:"/"
				},
			],
		}
	}
}
</script>

<style scoped>
footer{
  left: 0;
  bottom: 0;
  width: 100%;
  background: #c04621;
  padding-top: 50px;
  padding-bottom: 100px;
}

#footer_contents{
	margin: 0 10%;
	display: flex;
	text-align: left;
	justify-content: space-between;
	align-items: flex-start;
}

#footer_contents *{
	width: 200px;
	margin: 5px 0;
	list-style: none;
	text-align: left;
	padding-left: 0;
}

#logo{
	width: 50px;
	height: 50px;
}
.guide_top{
	border-bottom: 1px solid black;
}
</style>