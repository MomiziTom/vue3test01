<template>
	<header>	<!--ヘッダー要素は固定のものを使用-->
		<div id="header-contents">
			<div id="logo-company-name">
				<table>
					<router-link to="/">
						<tbody>
							<tr>
								<td><img src="./assets/sample_logo.png" alt="logo" class="logo"></td>
								<td><span id="header-company-name">{{ $store.state.company_information.name.content }}</span></td>
							</tr>
						</tbody>
					</router-link>
				</table>
			</div>

			<!-- PC用ナビゲーション -->
			<nav class="display-pc">
				<table id="header-list-pc">
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

		</div>
	</header>
	<!-- スマホ、タブレット用ナビゲーション -->
	<nav class="display-tablet-phone">
		<div id="hamburger" v-on:click="hamburger_switch">
			<div id="line1"></div>
			<div id="line2"></div>
			<div id="line3"></div>
		</div>
		<ul id="header-list-other" v-on:click="hamburger_switch">
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
		<div id="nav_background"></div>
	</nav>
	<main>	<!--ヘッダーで選んだ項目に応じてメイン要素を変更-->
		<router-view/>
	</main>
	<FooterComponent />	<!--フッター要素は固定のものを使用-->
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

function noscroll(e){e.preventDefault()}
function hamburgerDisp(bool) {
	let header_list = document.getElementById("header-list-other");
	let nav_background = document.getElementById("nav_background");
	let line1 = document.getElementById("line1");
	let line2 = document.getElementById("line2");
	let line3 = document.getElementById("line3");
	if(bool){
		header_list.style.right = "20px";
		nav_background.style.opacity = "1.0";
		nav_background.style.zIndex = "997";
		line1.style.transform = "rotate(-45deg)";
		line1.style.top = "18px";
		line3.style.transform = "rotate(45deg)";
		line3.style.top = "18px";
		line2.style.opacity = "0.0";
	}else{
		header_list.style.right = "-100%";
		nav_background.style.opacity = "0.0";
		nav_background.style.zIndex = "-999";
		line1.style.transform = "rotate(0deg)";
		line1.style.top = "8px";
		line3.style.transform = "rotate(0deg)";
		line3.style.top = "28px";
		line2.style.opacity = "1.0";
	}
}

export default{
	components: {
		FooterComponent,
	},
	computed:{
		hamburger_state(){
			return this.$store.state.hamburger_state;
		}
	},
	methods:{
		hamburger_switch(){
			this.$store.commit("hamburger_switch");
			hamburgerDisp(this.$store.state.hamburger_state);
			if(this.$store.state.hamburger_state){
				document.addEventListener('touchmove', noscroll, {passive: false})
			}else{
				document.removeEventListener('touchmove', noscroll);
			}
		},
	}
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

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}

/* PC表示*/
@media screen and (min-width:768px){

	#header-contents{
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
	}

	#header-list-pc{
		margin: auto 0px auto auto;
	}

	#header-list-pc *{
		text-align: right;
		padding: 0px 0px;
	}

	.display-tablet-phone{
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

	.title-center{
		width:100%;
		padding: 100px 0px;
		background-color:rgb(208, 208, 208);
	}

	tr, th, td{
		text-align: left;
		padding: 10px 20px;
	}
}

/* タブレット表示*/
@media screen and (max-width:768px){
	.display-pc{
		display:none;
	}

	#logo-company-name{
		margin:0;
	}

	#hamburger{
		position: fixed;
		right: 10px;
		top: 5px;
		right: 20px;
		width: 40px;/*幅*/
		height: 40px;/*高さ*/
		border-radius: 50%;/*角丸*/
		border: solid 2px white;
		background-color: #c04621;
		cursor: pointer;
		z-index: 999;
	}

	#hamburger div{
		position: absolute;
		height: 3.5px;
		width: 30px;
		background-color: #ffffff;
		border-radius: 4px;
		display: inline;
		box-sizing: border-box;
	}

	#hamburger div:nth-of-type(1){
		position: absolute;
		top: 8px;
		right: 5px;
		transition: 0.5s;
	}
  
	#hamburger div:nth-of-type(2){
		position: absolute;
		top: 18px;
		right: 5px;
		transition: 0.5s;
	}
  
	#hamburger div:nth-of-type(3){
		position: absolute;
		top: 28px;
		right: 5px;
		transition: 0.5s;
	}


	#header-list-other{
		text-align: right;
		position: fixed;
		top: 40px;
		right:-100%;
		z-index: 998;
		transition: 0.5s;
	}

	#nav_background{
		top:0;
		width:100%;
		height:100%;
		background-color:#c04621;
		z-index: -999;
		position:fixed;
		opacity:0;
		transition: 0.5s;
	}
	.title-center{
		width:100%;
		padding: 100px 0px;
		text-align: center;
		background-color:rgb(208, 208, 208);
	}
}

/* スマホ表示*/
@media screen and (max-width:480px){
}

</style>