$(document).on('ready', function() {
  		//position allows user to select one icon per click
		// var star= $('<img id="mapstar" src="http://icongal.com/gallery/download/326647/128/png" >');




	$('.map').on('click', function(event) {
		console.log("pageX: " + event.pageX + " pageY: " + event.pageY);

		var star= $('<img class="mapstar" src="http://icongal.com/gallery/download/326647/128/png">');
		// var textBox = $('<div class="text-box"> <textarea style="input" placeholder="location"></textarea></div>');
		var textBox = $('<div class="text-box"> <input style="textarea" placeholder="location"></div>');
		

	// position allows user to select multiple selections per click
		$('.map').append(star);
		// $(star).after(textBox);


			
		// $(star).css("top", event.pageX, "left", event.pageY, "position", "absolute", "z-index", "1", "height", 30 );
			

		// sets location and size of star img
			$(star).css({
				top: event.pageY-111, 
				left: event.pageX-16, 
				position: "absolute", 
				zIndex: "1", 
				height: 30,
				width: 30

			});



// go back to this 
			$(textBox).css({
				width: 10,
				height: 5,
				zIndex: "3",
				position: "absolute",
				top: event.pageY-100,
				left: event.pageX+20

			})

			// $('.text-box').css({
			// 	width: 2,
			// 	height: 5,
			// })



			console.log("mapstar works");


// HOVER Function
			// $(star).hover(function(){
			// 	$(this).after(textBox)
			// 	console.log('hovered')
			// }
			});

			
	});

// REMOVE function - its is selecting the div also and this is why we are getting a new star when first is removed.
			
$(document).on('click', '.mapstar', function(){
				$(this).remove();
				console.log('removed star');
			});


