import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const PublicRoute = ({ restrected = false, ...rest }) => {
    let user = useSelector(s=>s.user.user)

    return (
        user.name && restrected ?
            <Redirect exact to='/questions' /> :
            <Route {...rest} />
    )
}

export default PublicRoute