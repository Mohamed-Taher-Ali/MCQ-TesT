import { Button, Input } from 'antd'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {user as userActions} from '../../store/actions';
import './index.css';

const Login = () => {
    const 
    user = useSelector(state=>state.user.user),
    dispatch = useDispatch(),
    [name, setName] = useState("")

    const onLogin = () => {
        dispatch(userActions.checkUserName(name))
    }

    return (
        <div className='full'>
            <div className='login-logo'>MCQ-TesT</div>
            {
                user.error && 
                <div style={{margin: "20px 0px", color: "red"}}>
                    {user.error}
                </div>
            }
            <Input
            value={name}
            placeholder="Enter your name"
            style={{width: "25%", textAlign: "center", marginBottom: "15px"}}
            onChange={(e)=>setName(e.target.value)}
            />
            <Button
                size="large"
                type="primary"
                onClick={() => onLogin()}
            >
                Login
            </Button>
        </div>
    );
}

export default Login;