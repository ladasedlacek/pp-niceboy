/* jshint esversion:6 */
$(document).ready(function () {
	// Toggle layouts
	$("#layout_switch button").on("click", function () {
		$("#body2").removeClass("layout-0").removeClass("layout-1");
		$("body").addClass("mobile");
	});
	$("#layout_switch button:nth-child(2)").on("click", function () {
		$("#body2").addClass("layout-0");
		$("body.mobile").removeClass("mobile");
	});
	$("#layout_switch button:nth-child(3)").on("click", function () {
		$("#body2").addClass("layout-1");
		$("body.mobile").removeClass("mobile");
	});

	// if admin is active
	-1 < window.location.href.indexOf("admin") ? 0 : (runSwiper(), removeAddons())

	// remove addons
	function removeAddons() {
		$('#celek .ppAddons').remove()
	}

	// change colors
	$('#celek .gradientSelector__box').on("click", function(){
		$('#celek').attr('data-color', '')
		let saveValue = $(this).attr('data-color')
		$("#celek").attr('data-color', saveValue)
	});

	// change video
	$('#celek .videoChanger .btn').on("click", function(){
		let videoID = $('#celek .videoChanger__videoID').val()
		$('#celek .ppVideo iframe').attr('src', 'https://www.youtube.com/embed/' + videoID)
		videoID.val('')
		console.log('Video změněno.')
	});
});

