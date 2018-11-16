var toggle = function (el) {

	el.style.display === 'block'
		? el.style.display = 'none'
		: el.style.display = 'block';

};

var toggleSidebar = function () {

	var sidebar = document.getElementById('sidebar');
	var content = document.getElementById('main');

	var shown = sidebar.style.display === 'block';

	if (shown) {
		sidebar.style.display = 'none';
		content.style.maxWidth = '100%';
	} else {
		sidebar.style.display = 'block';
		content.style.maxWidth = '90%';
	}

};

var setViewportSize = function () {

	// Set the --vh and --vw custom property to the root of the document
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	const vw = window.innerWidth * 0.01;
	document.documentElement.style.setProperty('--vw', `${vw}px`);

};

window.addEventListener(
	"load",
	function() {

		setViewportSize();
		window.addEventListener('resize', function () {
			setViewportSize();
		});

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

			if(e.ctrlKey && e.altKey) {

				if ((e.keyCode === 78) || (e.keyCode === 65)) {
					// Ctrl + Alt + {N|A} -> New
					e.preventDefault();
					return document.getElementById('newButton').click();
				} else if (e.keyCode === 32) {
					// Ctrl + Alt + Space -> Toggle Sidebar
					e.preventDefault();
					return toggleSidebar();
				}

				const binEditor = document.getElementsByClassName('binEditor')[0];

				if(binEditor && (e.keyCode === 83)) {
					// Ctrl + Alt + S -> Save
					e.preventDefault();
					return document.getElementById('actionButton').click();
				} else if (e.keyCode === 70) {
					// Ctrl + Alt + F -> Fork
					e.preventDefault();
					return document.getElementById('actionButton').click();
				};

			}

		});

	},
	false
);
