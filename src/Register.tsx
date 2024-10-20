import React, { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');

  // two state items for username and mobile error
  const [usernameError, setUsernameError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ username });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name='username'
            value={username}
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              // validate username, must be at least 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character
              const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if (!regex.test(value)) {
                setUsernameError('Invalid username');
              } else {
                setUsernameError('');
              }
            }}
          />
          {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
        </div>
        <div>
          <label htmlFor="mobile">UK mobile number:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => {
              const value = e.target.value;
              setMobile(value);
              // validate UK mobile number, must start with 07 and be 11 characters long
              const regex = /^07\d{9}$/;
              if (!regex.test(value)) {
                setMobileError('Invalid mobile number');
              } else {
                setMobileError('');
              }
            }}
          />
          {mobileError && <p style={{color: 'red'}}>{mobileError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
