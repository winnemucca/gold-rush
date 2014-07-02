$(document).on('ready', function() {
  		//position allows user to select one icon per click
		// var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');




	$('.map').on('click', function(event) {
		console.log("pageX: " + event.pageX + " pageY: " + event.pageY);

		var star= $('<div><img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" ></div>');
		// var textBox = $('<div class="text-box"> <textarea style="input" placeholder="location"></textarea></div>');
		var textBox = $('<div class="text-box"> <input style="textarea" placeholder="location"></div>');
		// position allows user to select multiple selections per click
		$('.map').before(star);
		$(star).append(textBox)
		// $(star).css("top", event.pageX, "left", event.pageY, "position", "absolute", "z-index", "1", "height", 30 );
			// console.log("mapstar works");
			$('#mapstar').css({
				top: event.pageY-30, 
				left: event.pageX-17, 
				position: "absolute", 
				zIndex: "1", 
				height: 30

			});

			$(textBox).css({
				// width: 10,
				// height: 5,
				zIndex: "3",
				position: "absolute",
				top: event.pageY-20,
				left: event.pageX+20

			})

			// $('.text-box').css({
			// 	width: 2,
			// 	height: 5,
			// })


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