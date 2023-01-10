import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/auth'
import styled from 'styled-components'
import { accountData } from '../../data/AccountData'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    form {
        padding: 50px 125px;
        position: relative;
        z-index: 2;
        background: #191a1d;
        border-radius: 10px;
        width: 804px;
        margin: 0 auto;
    }
`

const Form = styled.form`
    padding: 50px 125px;
    position: relative;
    z-index: 2;
    background: #191a1d;
    border-radius: 10px;
    width: 804px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    display: block;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 53px;
    margin: 0 0 20px;
    color: #fff;
    text-align: center;
`

const Input = styled.input`
    height: 63px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 0 40px;
    border: 0;
    display: block;
    width: 100%;
`

const Button = styled.button`
    height: 51px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display: block;
    width: 233px;
    width: 100%;

    &:disabled {
        opacity: 0.2;
    }
`

const LoginPage = () => {
    const { loginTitle, bgTitle } = accountData
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await (
            await fetch('http://localhost:5010/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                }),
            })
        ).json()

        if (result) {
            context.login(result)
            navigate('/dashboard')
        } else {
            console.log('error')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    return (
        <Container>
            <img src={bgTitle} alt={loginTitle} />

            <Form onSubmit={handleSubmit}>
                <Title>{loginTitle}</Title>
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />

                <Button type="submit">Send</Button>
            </Form>
        </Container>
    )
}

export default LoginPage
