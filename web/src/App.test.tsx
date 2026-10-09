import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders headings and download button', () => {
    render(<App />);

    expect(screen.getByText('Geotopological Hydrodynamics')).toBeInTheDocument();
    expect(screen.getByText('A Falsification-Tested Research Program')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /download full pdf document/i })).toBeInTheDocument();
  });

  it('handles the download process correctly', () => {
    render(<App />);

    const downloadButton = screen.getByRole('button', { name: /download full pdf document/i });
    expect(downloadButton).not.toBeDisabled();

    fireEvent.click(downloadButton);

    expect(screen.getByRole('button', { name: /downloading pdf/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /downloading pdf/i })).toBeDisabled();
    expect(screen.getByText(/downloading/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByRole('button', { name: /download full pdf document/i })).not.toBeDisabled();
  });
});
