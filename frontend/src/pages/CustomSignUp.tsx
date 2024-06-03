import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function CustomSignUp() {
  return (
    <div className="signup-container">
      <div className="sign-up-box">
        <SignUp />
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}
