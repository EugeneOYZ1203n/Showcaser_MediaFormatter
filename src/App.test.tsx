import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import App from './App.tsx'

describe('App', () => {
  it('Check for Sidebar', () => {
    render(<App />);

    //@ts-ignore
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  });
});