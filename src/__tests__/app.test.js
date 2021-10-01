import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../components/app/App';

describe('App', () => {
    test('should render', () => {
        render(<App />);

        const probe = screen.getByText('Sort by');
        const probe2 = screen.getByText('Featured');
        const probe3 = screen.getByText('All');

        expect(probe).not.toBeNull;
        expect(probe2).not.toBeNull;
        expect(probe3).not.toBeNull;
    })

    test('on ', () => {
        render(<App />);

        const probe = screen.getByText('Sort by');
        const probe2 = screen.getByText('Featured');
        const probe3 = screen.getByText('All');

        expect(probe).not.toBeNull;
        expect(probe2).not.toBeNull;
        expect(probe3).not.toBeNull;
    })
})