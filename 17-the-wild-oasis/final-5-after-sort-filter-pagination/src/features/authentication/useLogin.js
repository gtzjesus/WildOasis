import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  // MUTATION TO HANDLE LOGIN (SOMETHING CHANGES ON THE SERVER)
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorred');
    },
  });

  return { login, isLoading };
}
