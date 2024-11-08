import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/news',
		name: 'news',
		component: () => import('../views/NewsView.vue')
	},
	{
		path: '/news/:year/:month/:day/:index',
		name: 'news_release',
		component: () => import('../components/DummyNews.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../components/ContactForm.vue')
	},
	{
		path: '/recruit',
		name: 'recruit',
		component: () => import('../components/RecruitmentInfo.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition){
		if(savedPosition){
			return savedPosition;
		}
		if(to == from ){
			return;
		}
		if(to.hash){
			return{
				el: to.hash,
				behavior:'smooth'
			}
		}
		return {
			top:0,
			behavior:'smooth'
		}
	}
})

export default router
