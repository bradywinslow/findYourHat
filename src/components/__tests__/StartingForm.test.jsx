import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import StartingForm from '../StartingForm.jsx';

test('clicks button and displays field', async () => {
    // ARRANGE
    render(<StartingForm />)

    // ACT
    const playButton = screen.getByRole('button', {
        name: 'Play'
    });
    userEvent.click(playButton);

    // Wait for table to appear
    const table = await screen.findByRole('table');

    // ASSERTION
    expect(table).toBeVisible();
});

test('clicks button and displays movementButtons', async () => {
    // ARRANGE
    render(<StartingForm />)

    // ACT
    const playButton = screen.getByRole('button', {
        name: 'Play'
    });
    userEvent.click(playButton);

    // Wait for movementButtons to appear
    const movementButtons = await screen.findAllByRole('button');

    // ASSERTION
    // expect(movementButtons).toBeVisible();

    // screen.debug()
  });
