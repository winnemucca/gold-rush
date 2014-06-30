$(document).on('ready', function() {
  


	$('.map').on('click', function(event) {
		console.log("pageX: " + event.pageX + " pageY: " + event.pageY);

		var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');

		$('.map').before(star);
			console.log("mapstar works");
	
	});
});