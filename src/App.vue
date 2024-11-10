<template>
	<header>	<!--ヘッダー要素は固定のものを使用-->
				<div id="header-contents">
			<p id="logo-company-name">
				<router-link to="/">
					<table>
						<tbody>
							<tr>
								<td><img src="./assets/sample_logo.png" alt="logo" class="logo"></td>
								<td><span id="header-company-name">{{ $store.state.company_information.name.content }}</span></td>
							</tr>
						</tbody>
					</table>
				</router-link>
			</p>

			<!-- PC用ナビゲーション -->
			<nav id="header-list-pc">
				<table>
					<tbody>
						<tr>
							<td v-for="home in $store.state.link.home" :key="home">
								<router-link :to="home.url" v-if="home.header_display" class="header-link">{{ home.title }}</router-link>
							</td>
							<td v-for="company_guide in $store.state.link.company_guide" :key="company_guide">
								<router-link :to="company_guide.url" v-if="company_guide.header_display" class="header-link">{{ company_guide.title }}</router-link>
							</td>
							<td v-for="product_guide in $store.state.link.product_guide" :key="product_guide">
								<router-link :to="product_guide.url" v-if="product_guide.header_display" class="header-link">{{ product_guide.title }}</router-link>
							</td>
							<td v-for="link_guide in $store.state.link.link_guide" :key="link_guide">
								<router-link :to="link_guide.url" v-if="link_guide.header_display" class="header-link">{{ link_guide.title }}</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</nav>

			<!-- スマホ、タブレット用ナビゲーション -->
			<nav id="header-list-other">
				<ul>
					<li v-for="home in $store.state.link.home" :key="home">
						<router-link :to="home.url" v-if="home.header_display" class="header-link">{{ home.title }}</router-link>
					</li>
					<li v-for="company_guide in $store.state.link.company_guide" :key="company_guide">
						<router-link :to="company_guide.url" v-if="company_guide.header_display" class="header-link">{{ company_guide.title }}</router-link>
					</li>
					<li v-for="product_guide in $store.state.link.product_guide" :key="product_guide">
						<router-link :to="product_guide.url" v-if="product_guide.header_display" class="header-link">{{ product_guide.title }}</router-link>
					</li>
					<li v-for="link_guide in $store.state.link.link_guide" :key="link_guide">
						<router-link :to="link_guide.url" v-if="link_guide.header_display" class="header-link">{{ link_guide.title }}</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<main>	<!--ヘッダーで選んだ項目に応じてメイン要素を変更-->
		<router-view/>
	</main>
	<FooterComponent />	<!--フッター要素は固定のものを使用-->
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default{
	components: {
		FooterComponent,
	},
}
</script>

<style>
a {
	text-decoration:none;
}

li{
	list-style: none;
}

.logo{
	width: 50px;
	height: 50px;
}

header{
	width: 100%;
	background: #c04621;
}

.title-center{
		width:100%;
		padding: 100px 0px;
		background-color:rgb(208, 208, 208);
	}

@media screen and (min-width:768px){

	#header-contents{
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
	}

	#header-list-pc{
		margin: auto 0px auto auto;
	}

	#header-list-pc table *{
		text-align: right;
		padding: 0px 0px;
	}
	#header-list-other{
		display:none;
	}

	.header-link{
		margin:0px 10px;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	nav {
		padding: 30px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}

	.heading{
		text-align: left;
	}

	.heading p{
		margin:0px;
		color: red;
	}

	.heading span{
		margin:0px;
		color:blue;
	}

	.content-part{
		margin:15px 15%;
	}

	tr, th, td{
		text-align: left;
		padding: 10px 20px;
	}
}

@media screen and (max-width:768px){
	#header-list-pc{
		display:none;
	}

	#headr-list-other ul{
		text-align: left;
		margin:0px;
		padding:0px;
	}
}

@media screen and (max-width:480px){
}

</style>