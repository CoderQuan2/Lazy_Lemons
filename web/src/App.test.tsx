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

    expect(screen.getByText('Geotemporal Hydrodynamics')).toBeInTheDocument();
    expect(screen.getByText('The Unified Fluid Theory')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /download full pdf document/i })).toBeInTheDocument();
  });

  it('handles the download process correctly', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);

    const downloadButton = screen.getByRole('button', { name: /download full pdf document/i });
    expect(downloadButton).not.toBeDisabled();

    // Click the button using fireEvent to avoid userEvent async issues with fakeTimers
    fireEvent.click(downloadButton);

    // Verify loading state
    expect(screen.getByRole('button', { name: /downloading pdf\.\.\./i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /downloading pdf\.\.\./i })).toBeDisabled();
    expect(screen.getByText(/downloading\.\.\./i)).toBeInTheDocument();

    // Advance time to trigger setTimeout
    act(() => {
      vi.advanceTimersByTime(1500);
    });

    // Verify alert was called
    expect(alertMock).toHaveBeenCalledWith('Download complete! (Simulated)');

    // Verify button returned to normal state
    expect(screen.getByRole('button', { name: /download full pdf document/i })).not.toBeDisabled();

    alertMock.mockRestore();
  });
});
