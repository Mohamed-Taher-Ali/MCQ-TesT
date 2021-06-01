import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../components/Layout';


const PrivateRoute = ({ ...rest }) => {
    let user = useSelector(s=>s.user.user)

    return (
        user.name ?
            <Layout>
                <Route {...rest} />
            </Layout>
            : <Redirect exact to='/' />
    )
}

export default PrivateRoute