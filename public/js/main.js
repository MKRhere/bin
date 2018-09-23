window.addEventListener(
	"load",
	function() {

		/* Can't bother: https://stackoverflow.com/a/18303822 */
		document
		.querySelector("textarea")
		.addEventListener('keydown',function(e) {
			if(e.keyCode === 9) { // tab was pressed
				// get caret position/selection
				var start = this.selectionStart;
				var end = this.selectionEnd;
		
				var target = e.target;
				var value = target.value;
		
				// set textarea value to:
				// text before caret + tab + text after caret
				target.value = value.substring(0, start)
							+ "\t"
							+ value.substring(end);
		
				// put caret at right position again (add one for the tab)
				this.selectionStart = this.selectionEnd = start + 1;
		
				// prevent the focus lose
				e.preventDefault();
			}
		}, false);

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
