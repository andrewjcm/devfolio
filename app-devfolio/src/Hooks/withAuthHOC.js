import useAuth from './useAuth';

export const withAuthHOC = (Component) => {
    return (props) => {
        const auth = useAuth();

        return <Component auth={auth} {...props} />;
    };
};