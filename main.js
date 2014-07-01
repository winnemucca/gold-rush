$(document).on('ready', function() {
  		//position allows user to select one icon per click
		// var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');


	$('.map').on('click', function(event) {
		console.log("pageX: " + event.pageX + " pageY: " + event.pageY);

		var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');
		// position allows user to select multiple selections per click
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


			//part 2 attempted to reselect the image and delete it.  showed no effect
			//tomorrow try z index of 2

			// $(star).prepend('<div class="removeMe"> </div>');
			// $('.removeMe').click(function(star){
			// $(this).remove();
			// console.log("removed icon");
			// });
	
			console.log("mapstar works");
			$(star).click(function(){
				$(this).remove();
			});

	});


});