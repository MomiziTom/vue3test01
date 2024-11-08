<template>
	<header>	<!--ヘッダー要素は固定のものを使用-->
		<div id="header_contents">
			<router-link to="/"><img src="./assets/sample_logo.png" alt="logo" class="logo">{{ $store.state.company_information.name.content }}</router-link>
			<div class="header-list">
				<ul>
					<li v-for="home in $store.state.link.home" :key="home">
						<router-link :to="home.url" v-if="home.header_display" class="header_link">{{ home.title }}</router-link>
					</li>
					<li v-for="company_guide in $store.state.link.company_guide" :key="company_guide">
						<router-link :to="company_guide.url" v-if="company_guide.header_display" class="header_link">{{ company_guide.title }}</router-link>
					</li>
					<li v-for="product_guide in $store.state.link.product_guide" :key="product_guide">
						<router-link :to="product_guide.url" v-if="product_guide.header_display" class="header_link">{{ product_guide.title }}</router-link>
					</li>
					<li v-for="link_guide in $store.state.link.link_guide" :key="link_guide">
						<router-link :to="link_guide.url" v-if="link_guide.header_display" class="header_link">{{ link_guide.title }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
	<main>	<!--ヘッダーで選んだ項目に応じてメイン要素を変更-->
		<router-view/>
	</main>
	<FooterComponent />	<!--フッター要素は固定のものを使用-->
</template>

<!--
<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
	</nav>
	<router-view/>
</template>
-->

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default{
	components: {
		FooterComponent,
	},
}
</script>

<style>
header{
	width: 100%;
	background: #c04621;
}

#header_contents{
	margin: 0 10%;
	display: flex;
	justify-content: center;
}

.logo{
	width: 50px;
	height: 50px;
	font-size: 30px;
	padding: 15px 15px;
	margin-right: auto;
}

.header-list ul {
	margin: 30px 0px;
}

.header-list ul li {
	list-style: none;
	float: left;
}

.header_link{
	margin: 25px 25px;
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
	margin:0 15%;
}

.title-center{
	width:100%;
	padding: 100px 0px;
	background-color:rgb(208, 208, 208);
}

tr, th, td{
	text-align: left;
	padding: 10px 20px;
}
</style>
