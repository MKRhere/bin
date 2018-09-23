window.addEventListener(
	"load",
	function() {

		document.addEventListener('keydown', function(e) {

			// Ctrl + Shift + N
			// Ctrl + B
			if(e.ctrlKey
				&& (e.shiftKey && (e.keyCode === 78))
				|| (e.keyCode === 66)) {
				e.preventDefault();
				document.getElementById('newButton').click();
			}

		});

		const binEditor = document.getElementsByClassName('binEditor')[0];

		if(binEditor) document.addEventListener('keydown', function(e) {

			// Ctrl + S 
			if(e.ctrlKey && (e.keyCode === 83)) {
				e.preventDefault();
				document.getElementById('actionButton').click();
			}

		});
		else document.addEventListener('keydown', function(e) {

			// Ctrl + F
			if(e.ctrlKey && (e.keyCode === 70)) {
				e.preventDefault();
				document.getElementById('actionButton').click();
			}

		});

	},
	false
);
