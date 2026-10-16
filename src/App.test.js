// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaleIris title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaleIris/i);
    expect(titleElement).toBeInTheDocument();
});
