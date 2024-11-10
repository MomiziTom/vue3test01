import { createStore } from 'vuex'

export default createStore({
	strict:true,
	state: {
		second_articles : [
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			
		],


		third_articles : [
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
			{
				thumbnail:require("@/assets/sample_thumbnail.png"),
				alt:"photo",
				text:"サンプル見出し ニュース速報 サンプル見出し ニュース速報"
			},
		],


		company_information : {
			name:{
				item:"会社名",
				content:"株式会社サンプル",
				alphabet:"Sample Company"
			},
			location:{
				item:"本社所在地",
				address:"東京都中央区築地○○○○",
				tell:"TEL:03-0000-0000",
				fax:"FAX:03-0000-0000"
			},
			president:{
				item:"代表取締役",
				name:"山田 太郎"
			},
			employees:{
				item:"従業員数",
				content:"100名"
			},
			detail:{
				item:"事業内容",
				content:"あらゆるサンプルの制作をし、社会のインプルーブメントのためにDXを推進しています。",
			}
		},

		link : {
			home: [
				{
					title:"ホーム",
					url:"/",
					header_display:true,
				},
			],
			company_guide : [
				{
					title:"会社案内",
					url:"/about",
					header_display:true,
				},
				{
					title:"会社沿革",
					url:"/",
					header_display:false,
				},
				{
					title:"ニュースリリース",
					url:"/news",
					header_display:true,
				},
				{
					title:"アクセス",
					url:"/about#access",
					header_display:false,
				},
				{
					title:"採用情報",
					url:"/recruit",
					header_display:true,
				},
				{
					title:"お問い合わせ",
					url:"/contact",
					header_display:true,
				},
				{
					title:"サイトマップ",
					url:"/",
					header_display:false,
				},
			],
			product_guide : [
				{
					title:"製品案内",
					url:"/",
					header_display:false,
				},
				{
					title:"導入事例",
					url:"/",
					header_display:false,
				},
				{
					title:"資料請求",
					url:"/",
					header_display:false,
				},
			],
			/*
			link_guide : [
				{
					title:"オンラインストア",
					url:"/",
					header_display:false,
				},
				{
					title:"Sample Restaurant",
					url:"/",
					header_display:false,
				},
				{
					title:"サンプルCafe",
					url:"/",
					header_display:false,
				},
			],
			*/
		},


		news :[
			{
				day:new Date(2024, 0 , 1),
				summary:"１月１日のニュースリリース１",
				url:"/news/2024/1/1/0"
			},
			{
				day:new Date(2024, 0 , 1),
				summary:"１月１日のニュースリリース２",
				url:"/news/2024/1/1/1"
			},
			{
				day:new Date(2024, 0 , 1),
				summary:"１月１日のニュースリリース３",
				url:"/news/2024/1/1/2"
			},
			{
				day:new Date(2023, 11 , 1),
				summary:"１２月１日のニュースリリース",
				url:"/news/2023/11/1/0"
			},
			{
				day:new Date(2024, 0 , 1),
				summary:"１月１日のニュースリリース４",
				url:"/news/2024/1/1/3"
			},
			{
				day:new Date(2024, 0 , 3),
				summary:"１月３日のニュースリリース",
				url:"/news/2024/1/3/0"
			},
			{
				day:new Date(2024, 1 , 1),
				summary:"２月１日のニュースリリース",
				url:"/news/2024/2/1/0"
			},
			{
				day:new Date(2024, 0 , 2),
				summary:"１月２日のニュースリリース",
				url:"/news/2024/1/2/0"
			},
		],

	},
	getters: {
		sorted_news(state){
			return state.news.slice().sort((a, b)=> {
				return b.day - a.day;
			})
		},
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
