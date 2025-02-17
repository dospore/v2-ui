import React from 'react';

/**
 * RTL Wrapper to disable MUI's dynammic JSS classes generation
 * Credits: @lookfirst
 */

import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { render as tlRender } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';

function MyStyles({ children }: any) {
	// make a copy of the data because the state is mutated below in one of the tests for clicks
	// then the state is used again for comparison later, which causes tests to be dependent on execution
	// order and fail.
	const generateClassName = createGenerateClassName({
		disableGlobal: true,
		productionPrefix: 'test',
	});

	return <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: any, options?: any) => tlRender(ui, { wrapper: MyStyles, ...options });

export function createMatchMedia(width: number) {
	return (query: string): MediaQueryList => ({
		matches: mediaQuery.match(query, { width }),
		media: query,
		onchange: null,
		addListener: () => jest.fn(),
		removeListener: () => jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	});
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender };
