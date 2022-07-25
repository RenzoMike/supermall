const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/profile/Profile.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/home'
    // redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
]

export default routes