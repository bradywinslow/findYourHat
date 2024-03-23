import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StartingForm from '../StartingForm.jsx';
import '@testing-library/jest-dom'

test('clicks button and displays field', async () => {
    // ARRANGE
    render(<StartingForm />)

    // ACT
    await userEvent.click(await screen.findByRole('button', {
        name: 'Play'
    }))
    const table = await screen.findByRole('table');
    const movementButtons = await screen.findAllByRole('button');

    // ASSERTION
    expect(table).toBeVisible();
    expect(movementButtons.length).toEqual(4);
})


test('clicks button and displays field', async () => {
    // ARRANGE
    render(<StartingForm />)
  
    // ACT
    await userEvent.click(await screen.findByRole('button', {
        name: 'Play'
    }))
    const table = await screen.findByRole('table');
    
    // ASSERTION
    expect(table).toBeVisible();
  })
