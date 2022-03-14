<template>
	<swiper
		:rewind="true"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
		:lazy="true"
		:preload-images="false"
		:effect="'coverflow'"
		:grabCursor="false"
		:centeredSlides="true"
		:slidesPerView="3"
		:space-between="50"
		:coverflowEffect="{
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		}"
		:pagination="{
			clickable: true,
			dynamicBullets: true,
		}"
		:navigation="true"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide v-for="n in 10" :key="n">
			<img :data-src="data[n - 1].url" class="swiper-lazy" />
			<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
		</swiper-slide>
	</swiper>
</template>

<script>
// import modules
import { Autoplay, Lazy, EffectCoverflow, Pagination, Navigation } from "swiper";
//import images
import data from "@/assets/image.json";

export default {
	setup() {
		return {
			modules: [Autoplay, Lazy, EffectCoverflow, Pagination, Navigation],
			data,
		};
	},
};
</script>

<style></style>
