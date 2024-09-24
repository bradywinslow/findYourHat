import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import StartingForm from '../StartingForm.jsx';
import Game from '../pages/Game.jsx';

function renderInRouter() {
    const routes = [
        {
            path: '/',
            element: <StartingForm />,
        },
        {
            path: '/game',
            element: <Game />
        }
      ];
    
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });
    
      render(<RouterProvider router={router} />);
}

test('clicks button and displays field', async () => {
    // ARRANGE
    renderInRouter();

    // ACT
    const width = screen.getByLabelText('Width');
    userEvent.type(width, '10');

    const height = screen.getByLabelText('Height');
    userEvent.type(height, '10');

    const percentage = screen.getByLabelText('Percentage');
    userEvent.type(percentage, '25');
    
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
    renderInRouter();

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
