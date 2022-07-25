<template>
<div id="canvas">
	<div id="book-zoom">
		<div class="sj-book">
			<div depth="5" class="hard"> <div class="side"></div> </div>
			<div depth="5" class="hard front-side"> <div class="depth"></div> </div>
			<div class="own-size"></div>
			<div class="own-size even"></div>
			<div class="hard fixed back-side p111"> <div class="depth"></div> </div>
			<div class="hard p112"></div>
		</div>
	</div>
	<div id="slider-bar" class="turnjs-slider">
		<div id="slider"></div>
	</div>
</div>
</template>

<script>
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';

</script>

<style>


</style>