import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // ONLY RETURN CHILDREN IF AUTHENTICATED
  const navigate = useNavigate();

  // LOAD THE AUTHENTICATED USER
  const { isLoading, isAuthenticated } = useUser();

  // IF NO AUTHENTICATED USER, REDIRECT TO /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('login');
    },
    [isLoading, isAuthenticated, navigate]
  );

  // WHILE LOADING, SHOW SPINNER
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // IF YES AUTHENTICATED USER, RENDER THE APP
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
