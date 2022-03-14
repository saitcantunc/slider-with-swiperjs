import { createApp } from "vue";
import App from "./App.vue";

// Swiper Vue.js Components
import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper Styles

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// custom css
import "@/assets/style.css";

const app = createApp(App);
//eslint-disable-next-line
app.component("Swiper", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.mount("#app");
