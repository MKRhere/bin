const hl = require('highlight.js');

module.exports = (m, { content = '', language }) => {
	return m('table',
		m('tbody',
			hl
				.highlightAuto(((content || "") + "\n\n"), language)
				.value
				.split('\n')
				.map((line, index) => m('tr', [
						m('td.line-number',
							{ 'id': `L${index}`, 'data-line-number': index }),
						m('td', m.trust(`<code class="loc">${line}</code>`)),
					]))
		),
	);
};
