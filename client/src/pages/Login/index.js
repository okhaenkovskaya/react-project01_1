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

const LoginPage = () => {
    const { loginTitle, bgTitle } = accountData

    const BASE_URL = 'http://localhost:5010/user/login'

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await (
            await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'test@example.com',
                    password: 123,
                }),
            })
        ).json()
        if (result) {
            console.log(result, 'result')
        } else {
            console.log('nothing')
        }
    }

    return (
        <Container>
            <img src={bgTitle} alt={loginTitle} />

            <form onSubmit={handleSubmit}>
                <Title>{loginTitle}</Title>
                <Input type="email" placeholder="Email" />
                <Input
                    type="password"
                    placeholder="Password"
                    autocomplete="on"
                />
                <button onClick={() => console.log('click')} type="submit">
                    Send
                </button>
            </form>
        </Container>
    )
}

export default LoginPage
