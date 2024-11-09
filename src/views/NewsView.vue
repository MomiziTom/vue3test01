<template>
	<div class="news">
		<div class="title-center">
			<p>ニュースリリース</p>
			<p>news</p>
		</div>
		<div class="content-part">
			<table>
				<tbody>
					<tr v-for="news of sorted_news" :key="news">
						<th>{{ news.day.getFullYear() }}.{{ news.day.getMonth()+1 }}.{{ news.day.getDate() }} </th>
						<td><router-link :to="news.url">{{ news.summary }}</router-link></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	computed:{
		sorted_news(){
			return this.$store.getters.sorted_news
		}
	},
}
</script>

<style scoped>
@media screen and (min-width:768px){

}

@media screen and (max-width:768px){

}

@media screen and (max-width:768px){

}

</style>