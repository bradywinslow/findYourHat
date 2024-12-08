import { useNavigate } from 'react-router-dom';

export default function useNavigateHome() {
    const navigate = useNavigate();

    function navigateToHome() {
        navigate('/');
        window.location.reload();
    }

    return navigateToHome;
}
