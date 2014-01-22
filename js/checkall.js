		function checkAll(group){
			var checkboxes = document.querySelectorAll("input[type='checkbox'][data-multicheck='"+ group +"']");
			for(var i=0; i<checkboxes.length; i++) {
				checkboxes[i].checked="checked";
			}
		}
		
		var allcheck = document.querySelectorAll("input[data-multicheck-toggle]");
		for(var i=0; i<allcheck.length; i++){
			var firstCheck = allcheck[i];
			if (firstCheck.addEventListener){ //Première condition : pour +IE 8 
			  	firstCheck.addEventListener('click', function(e) {
			  		var colour = e.target.getAttribute('data-multicheck-toggle');
			  		checkAll(colour);
			  		console.log(colour);
			  	}
			  	, false);
			} 
			else if (firstCheck.attachEvent) {
			  firstCheck.attachEvent('click', function () {checkAll(group)});
			}
		}
