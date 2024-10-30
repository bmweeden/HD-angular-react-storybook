/** @type { import('@storybook/html').Preview } */
import { layout } from './layout';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story, context) => {
		if (context.parameters.disableCustomLayout) {
			return Story();
		}
		const storyContent = Story();
		return layout(storyContent);
	},
];
