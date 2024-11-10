<template>
	<div class="about">
		<div class="title-center">
			会社案内
		</div>
		<div class="content-part">
			<div id="greeting">
				<div id="text-greeting">
					<div>
						代表挨拶
					</div>
					<div>
						<p>株式会社サンプル代表 {{ $store.state.company_information.president.name }}と申します。我が社は新しい社会のイノベーションのために各方面へのDXを積極的に推進しています。あらゆるインプルーブメントを我が社から発進し、継続的で革新的なCI/CDへとアチーブします。</p>
						<p>代表 {{ $store.state.company_information.president.name }}</p>
					</div>
				</div>
				<div id="picture-president">
					<img src="@/assets/sample_portrait.png" alt="社長近影">
					<p>山田 太郎</p>
				</div>
			</div>
			<div id="company-profile">
				<p>
					会社概要
				</p>
				<div>
					<table>
						<tbody>
							<tr>
								<th>{{ $store.state.company_information.name.item }}</th>
								<td>{{ $store.state.company_information.name.content }}</td>
							</tr>
							<tr>
								<th>{{ $store.state.company_information.location.item }}</th>
								<td>
									<p>{{ $store.state.company_information.location.address }}</p>
									<p>{{ $store.state.company_information.location.tell }}</p>
								</td>
							</tr>
							<tr>
								<th>{{ $store.state.company_information.president.item }}</th>
								<td>{{ $store.state.company_information.president.name }}</td>
							</tr>
							<tr>
								<th>{{ $store.state.company_information.employees.item }}</th>
								<td>{{ $store.state.company_information.employees.content }}</td>
							</tr>
							<tr>
								<th>{{ $store.state.company_information.detail.item }}</th>
								<td>{{ $store.state.company_information.detail.content }}</td>
							</tr>
						</tbody>
					</table>
					<p id="access">アクセス</p>
					<iframe v-if="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.7461156398392!2d139.76596748045242!3d35.66488000408813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bdc3bba5865%3A0x3955ff690c8fb2a6!2z56-J5Zyw5biC5aC06aeF!5e0!3m2!1sja!2sjp!4v1729976537445!5m2!1sja!2sjp" width="900" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					<iframe v-if="false" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.7461156398392!2d139.76596748045242!3d35.66488000408813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bdc3bba5865%3A0x3955ff690c8fb2a6!2z56-J5Zyw5biC5aC06aeF!5e0!3m2!1sja!2sjp!4v1729976537445!5m2!1sja!2sjp" width="900" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped>
@media screen and (min-width:768px){

	#greeting{
		display: flex;
	}

	#text-greeting{
		text-align: left;
		width: 60%;
	}

	#picture-president{
		width: 40%;
	}

	#picture-president img{
		width: 250px;
	}
}

@media screen and (max-width:768px){

}

@media screen and (max-width:480px){

}

</style>
