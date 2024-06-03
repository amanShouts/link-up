import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function CustomSignIn() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <SignIn />
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}
