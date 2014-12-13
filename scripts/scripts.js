$(document).ready( function() {
	
	$("li").click(function() {
		//var myText = $(this).text();
		//alert( myText );
		$(this).parent().append( $(this).clone() );
	});
	
})