$(document).on('ready', function() {
  


	$('.map').on('click', function(event) {
		console.log("pageX: " + event.pageX + " pageY: " + event.pageY);

		var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');

		$('.map').before(star);
		// $(star).css("top", event.pageX, "left", event.pageY, "position", "absolute", "z-index", "1", "height", 30 );
			// console.log("mapstar works");
			$(star).css({
				top: event.pageY-30, 
				left: event.pageX-17, 
				position: "absolute", 
				zIndex: "1", 
				height: 30
			});
			console.log("mapstar works");
	});
});