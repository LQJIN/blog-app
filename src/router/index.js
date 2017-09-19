import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index.vue'
import Blog from '@/components/index/Blog.vue'
import BlogCommentAdd from '@/components/common/BlogCommentAdd.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/comment',
      name: 'BlogCommentAdd',
      component: BlogCommentAdd
    }
  ]
})
