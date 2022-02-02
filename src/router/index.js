import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "@/views/CartPage";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/cart", name: "cartPage", component: CartPage },
];

const router = new VueRouter({
  routes,
});

export default router;
