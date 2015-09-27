$(document).ready(function(){
	
	/* draw the grid */
	
	

			
	$("#header2").on('click', drawClicked);	
	
	function drawClicked(event) {

		var newGridSize = prompt("Please enter grid size");
		var cellSize = 0;
		
		
		if (newGridSize != null) {
			
			$("#grid").empty();
			cellSize = (600 - newGridSize*2) / newGridSize;

			for (i = 0 ; i < newGridSize*newGridSize+1 ; i++) {
				$(".gridsquare").width(cellSize).height(cellSize);
				$('#grid').append("<div class = 'gridsquare'> </div>");
				
			};
		};
		
		$(".gridsquare" ).on( "mouseenter", function() {
			$( this ).css( "background-color", "red" );
		});
	
		$(".gridsquare" ).on( "mouseleave", function() {
			$( this ).css( "background-color", "green" );
		});
		
	};

		
		
		
	
	$("#header1").on('click', resetClicked);

	function resetClicked(event){
    	$(".gridsquare").css("background-color" , "#d2d2d2");
	};

	
});



	/* general plan
		
		draw the grid using javascript
			- define a div that represents a single box on grid
			- add the box div to the grid using a loop  - rows and columns
		
		write the function for mouseover - 
			- change to some color on enter
			- change to a slightly different color on leave
			
		write the reset function - 
			- change the background color of all divs to none
			
		take user input for grid size
			- add input box
			- check if its sq root is an integer or not  (need NxN input)
			- clear the current grid
			- draw new grid 	
				
	*/
