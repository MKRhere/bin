const highlight = require('./highlight');

module.exports = (m, { location, content, language }) => {
	language = language && [ language ];
	const isSnippet = location === 'snippet';
	const textArea =
		(isSnippet ? "pre" : "textarea.binEditor")
			+ "#snippet.textarea"
			+ (language ? "." + language : "");
	const highlighted =
		isSnippet && (highlight(m, { content, language }));

	return m(
		"form.container", { name: "codeSnippet", },
		[
			m(
				"#main.content",
				m(
					textArea,
					{
						name: "snippet",
						spellcheck: "false",
						"data-gramm": "false",
						...(!isSnippet && { autofocus: "true" }),
						...(isSnippet && { readOnly: "true" }),
					},
					highlighted || content
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
						m(".helper", "Alt + Ctrl + N")
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
						? [ "Fork!", m(".helper", "Alt + Ctrl + F") ]
						: [ "Save!", m(".helper", "Alt + Ctrl + S") ],
				),
			),
		]
	);
};
