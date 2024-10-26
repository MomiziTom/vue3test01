<template>
	<header>	<!--ヘッダー要素は固定のものを使用-->
		<div id="header_contents">
			<img src="./assets/sample_logo.png" alt="logo" class="logo">
			<div class="header-list">
				<ul>
					<li>
						<router-link to="/">ホーム</router-link> 
					</li>
					<li>
						<router-link to="/about">会社案内</router-link>
					</li>
					<li>
						<router-link to="/about">業務内容</router-link>
					</li>
					<li>
						<router-link to="/about">製品案内</router-link>
					</li>
					<li>
						<router-link to="/about">ニュースリリース</router-link>
					</li>
					<li>
						<router-link to="/about">コーラルリリース</router-link>
					</li>
					<li>
						<router-link to="/about">採用情報</router-link>
					</li>
					<li>
						<router-link to="/about">お問い合わせ</router-link>
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

.header-list li {
	list-style: none;
	float: left;
	padding: 15px 25px;
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

</style>
