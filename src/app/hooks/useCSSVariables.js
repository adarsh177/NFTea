const useCSSVariables = (names = []) => {
	const variables = {};
	const style = getComputedStyle(document.body);

	names.forEach((name) => {
		variables[name] = style.getPropertyValue(name);
	});

	return variables;
};

export default useCSSVariables;
