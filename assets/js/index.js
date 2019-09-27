// delete todos
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// use the X to delete the todos
$("ul").on("click", "span", function(event) {
	$(this)
		.parent()
		.fadeOut(500, function() {
			$(this).remove();
		});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// get the value of the input
		let todoInput = $(this).val();
		$(this).val("");
		// add the input as an li
		$("ul").append(
			"<li><span><i class='far fa-trash-alt'></i></span> " + todoInput + "</li>"
		);
		$("input[type='text']").css({
			display: "none"
		});
	}
});

$("h1").on("click", ".fa-plus", function() {
	$("input[type='text']").css({
		display: "block"
	});
});
