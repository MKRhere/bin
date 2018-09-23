const hl = require('highlight.js');

module.exports = (m, { location, content, language }) => {
	language = language && [ language ];
	const isSnippet = location === 'snippet';
	const textArea =
		(isSnippet ? "pre" : "textarea.binEditor")
			+ "#snippet.textarea"
			+ (language ? "." + language : "");
	const highlighted =
		isSnippet && hl.highlightAuto(((content || "") + "\n\n"), language);

	return m(
		"form.container",
		{
			name: "codeSnippet",
		},
		[
			m(
				".content",
				m(
					textArea,
					{
						name: "snippet",
						spellcheck: "false",
						"data-gramm": "false",
						...(!isSnippet && { autofocus: "true" }),
						...(isSnippet && { readOnly: "true" }),
					},
					isSnippet ? m.trust(highlighted.value) : content
				)
			),
			(isSnippet && 
				m(
					'textarea#originalSnippet',
					{
						style: "display: none",
						readOnly: "true",
						name: "snippet",
						spellcheck: "false",
						"data-gramm": "false",
					},
					content
				)
			),
			m(
				"#sidebar.controls",
				{ style: "display: block;" },
				m(
					"a#newButton.submit",
					{ href: "/" },
					[
						"New snippet",
						m(".helper", "Ctrl + B")
					],
				),
				m(
					"button#actionButton.submit",
					{
						type: "submit",
						formaction: isSnippet ? "fork" : "/",
						formenctype: "application/x-www-form-urlencoded",
						formmethod: "post",
					},
					isSnippet
						? [ "Fork!", m(".helper", "Ctrl + F") ]
						: [ "Save!", m(".helper", "Ctrl + S") ],
				),
			),
		]
	);
};
