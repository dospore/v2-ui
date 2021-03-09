import React from 'react';
import { customRender, screen, fireEvent, act } from './Utils';
import CurrencyPicker from '../components-v2/landing/CurrencyPicker';
import '@testing-library/jest-dom';
import { StoreProvider } from '../mobx/store-context';
import store from '../mobx/store';

describe('CurrencyPicker', () => {
	const testStore = store;

	test('Renders correctly', () => {
		const { container } = customRender(
			<StoreProvider value={testStore}>
				<CurrencyPicker />
			</StoreProvider>,
		);
		expect(container).toMatchSnapshot();
	});
	test('Opens menu upon click', async () => {
		customRender(
			<StoreProvider value={testStore}>
				<CurrencyPicker />
			</StoreProvider>,
		);
		await act(async () => {
			await fireEvent.mouseDown(screen.getByRole('button'));
		});
		expect(await screen.getByRole('presentation')).toMatchSnapshot();
	});
});