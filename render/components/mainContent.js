module.exports = (m, { location, content }) => {
	const isSnippet = location === 'snippet';

	return m(
		"form.container",
		{
			name: "codeSnippet",
		},
		[
			m(
				".content",
				m(
					"textarea#snippet.textarea",
					{
						name: "snippet",
						class: "text",
						spellcheck: "false",
						...(!isSnippet && { autofocus: "true" }),
						...(isSnippet && { readOnly: "true" }),
					},
					content,
				)
			),
			m(
				".controls",
				m(
					"a.submit",
					{
						href: "/",
					},
					"New snippet",
				),
				m(
					"button.submit",
					{
						type: "submit",
						formaction: isSnippet ? "fork" : "/",
						formenctype: "application/x-www-form-urlencoded",
						formmethod: "post",
					},
					isSnippet ? "Fork!" : "Save!",
				),
			)
		]
	);
};
