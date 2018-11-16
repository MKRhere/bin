(function onStart () {

	var minMode = JSON.parse(localStorage.getItem('minMode'));
	toggleMinMode(minMode);

})();

function toggleMinMode (set) {

	var sidebar = document.getElementById('sidebar');
	var content = document.getElementById('main');

	if (set) {
		sidebar.style.display = 'none';
		content.style.maxWidth = '100%';
		localStorage.setItem('minMode', true);
	} else {
		sidebar.style.display = 'block';
		content.style.maxWidth = '90%';
		localStorage.setItem('minMode', false);
	}

}

function toggleSidebar () {

	toggleMinMode(document.getElementById('sidebar').style.display === 'block');

};

var setViewportSize = function () {

	// Set the --vh and --vw custom property to the root of the document
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	const vw = window.innerWidth * 0.01;
	document.documentElement.style.setProperty('--vw', `${vw}px`);

};

function addTabs (e) {

	/* Can't bother: https://stackoverflow.com/a/18303822 */
	if(e.keyCode === 9) { // tab was pressed
		// get caret position/selection
		var start = this.selectionStart;
		var end = this.selectionEnd;

		var target = e.target;
		var value = target.value;

		// set textarea value to:
		// text before caret + tab + text after caret
		target.value = value.substring(0, start)
					+ '\t'
					+ value.substring(end);

		// put caret at right position again (add one for the tab)
		this.selectionStart = this.selectionEnd = start + 1;

		// prevent the focus lose
		e.preventDefault();
	}

}

var keyCodes = {

	new: 78, // N
	save: 83, // S
	fork: 70, // F
	minMode: 32, // Space

}

function handleKeybindings (e) {

	if(e.ctrlKey && e.altKey) {

		if ((e.keyCode === keyCodes.new) || (e.keyCode === 65)) {
			// Ctrl + Alt + {N|A} -> New
			e.preventDefault();
			return document.getElementById('newButton').click();
		} else if (e.keyCode === keyCodes.minMode) {
			// Ctrl + Alt + Space -> Toggle Sidebar
			e.preventDefault();
			return toggleSidebar();
		}

		const binEditor = document.getElementsByClassName('binEditor')[0];

		if(binEditor && (e.keyCode === keyCodes.save)) {
			// Ctrl + Alt + S -> Save
			e.preventDefault();
			return document.getElementById('actionButton').click();
		} else if (e.keyCode === keyCodes.fork) {
			// Ctrl + Alt + F -> Fork
			e.preventDefault();
			return document.getElementById('actionButton').click();
		};

	}

}

function hashLineNumber (e) {

	window.location.hash = e.target.id;

}

window.addEventListener(
	'load',
	function() {

		setViewportSize();
		window.addEventListener('resize', function () {
			setViewportSize();
		});

		document
			.querySelector('textarea')
			.addEventListener('keydown', addTabs, false);

		Array
			.from(document.getElementsByClassName('line-number'))
			.forEach(el => el.addEventListener('click', hashLineNumber));

		document
			.addEventListener('keydown', handleKeybindings);

	},
	false
);
