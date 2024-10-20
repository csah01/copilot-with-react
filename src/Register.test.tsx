import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import { describe, it, expect, vi } from 'vitest';

describe('Register Component', () => {
  it('renders the form correctly', () => {
    render(<Register />);
    expect(screen.getByRole('heading', { name: /register/i })).toBeInTheDocument();
    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    expect(screen.getByLabelText('UK mobile number:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('shows username validation error message when username is invalid', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText('Username:');
    fireEvent.change(usernameInput, { target: { value: 'invalid' } });
    expect(screen.queryByText('Invalid username')).toBeInTheDocument();
  });

  it('hides username validation error message when username is valid', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText('Username:');
    fireEvent.change(usernameInput, { target: { value: 'Valid123!' } });
    expect(screen.queryByText('Invalid username')).not.toBeInTheDocument();
  });

  it('shows mobile number validation error message when mobile number is invalid', () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText('UK mobile number:');
    fireEvent.change(mobileInput, { target: { value: '071234567' } });
    expect(screen.queryByText('Invalid mobile number')).toBeInTheDocument();
  });

  it('hides mobile number validation error message when mobile number is valid', () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText('UK mobile number:');
    fireEvent.change(mobileInput, { target: { value: '07123456789' } });
    expect(screen.queryByText('Invalid mobile number')).not.toBeInTheDocument();
  });

  it('handles form submission correctly', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<Register />);
    const usernameInput = screen.getByLabelText('Username:');
    const mobileInput = screen.getByLabelText('UK mobile number:');
    const submitButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(usernameInput, { target: { value: 'Valid123!' } });
    fireEvent.change(mobileInput, { target: { value: '07123456789' } });
    fireEvent.click(submitButton);

    expect(consoleLogSpy).toHaveBeenCalledWith({ username: 'Valid123!' });
    consoleLogSpy.mockRestore();
  });
});