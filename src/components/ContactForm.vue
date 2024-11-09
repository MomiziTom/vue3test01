<template>
	<div id="contact-form ">
		<div class="title-center">
			<p>お問い合わせ</p>
		</div>
		<div class="content-part input-form">
			<form action="">
				<p><label for="name">お名前</label></p>
				<input type="text" id="name" name="name">
				<p><label for="email">メールアドレス</label></p>
				<input type="email" id="email" name="email">
				<p><label for="message">メッセージ</label></p>
				<textarea id="message" name="message" rows="10" cols="40"></textarea><br>
				<input type="submit" value="送信">
			</form>
		</div>
	</div>
</template>

<style>
@media screen and (min-width:768px){

	.input-form{
		margin: 5% 30%;
		text-align: left;
	}

	.input-form form{
		background-color: rgb(208, 208, 208);
		padding: 50px 0 50px 20%;
	}
}
</style>