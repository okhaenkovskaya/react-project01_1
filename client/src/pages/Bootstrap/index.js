import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PageContainer = styled.div`
    padding: 30px;
    background: #fff;
    color: #000;
`;

const BootstrapPage = () => {
    return (
        <PageContainer>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <div className="text-center">
                                <svg
                                    width="48"
                                    height="39"
                                    viewBox="0 0 48 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_5_5887)">
                                        <path
                                            d="M5.29509 4.99875C5.20453 2.39812 7.23075 0 9.96956 0H38.0339C40.7727 0 42.7989 2.39812 42.7084 4.99875C42.6214 7.49691 42.7343 10.733 43.5487 13.3716C44.3658 16.0183 45.7435 17.6913 48 17.9062V20.3438C45.7435 20.5587 44.3658 22.2317 43.5487 24.8784C42.7343 27.517 42.6214 30.7531 42.7084 33.2513C42.7989 35.8519 40.7727 38.25 38.0339 38.25H9.96956C7.23075 38.25 5.20453 35.8519 5.29519 33.2513C5.38209 30.7531 5.26912 27.517 4.45463 24.8784C3.63769 22.2317 2.25656 20.5587 0 20.3438V17.9062C2.25647 17.6913 3.63769 16.0183 4.45463 13.3716C5.26912 10.733 5.38209 7.49691 5.29509 4.99875Z"
                                            fill="url(#paint0_linear_5_5887)"
                                        />
                                        <g filter="url(#filter0_d_5_5887)">
                                            <path
                                                d="M25.0409 29.2928C29.475 29.2928 32.147 27.1218 32.147 23.5408C32.147 20.834 30.2405 18.8743 27.4096 18.5641V18.4513C29.4894 18.113 31.1215 16.1815 31.1215 14.0245C31.1215 10.9511 28.6951 8.9491 24.9976 8.9491H16.6782V29.2928H25.0409ZM19.9135 11.5291H24.2177C26.5575 11.5291 27.8862 12.5723 27.8862 14.4615C27.8862 16.4776 26.3408 17.6054 23.5388 17.6054H19.9135V11.5291ZM19.9135 26.7129V20.0163H24.1887C27.2507 20.0163 28.8395 21.1441 28.8395 23.3435C28.8395 25.5428 27.2941 26.7129 24.3765 26.7129H19.9135Z"
                                                fill="url(#paint1_linear_5_5887)"
                                            />
                                            <path
                                                d="M25.0409 29.2928C29.475 29.2928 32.147 27.1218 32.147 23.5408C32.147 20.834 30.2405 18.8743 27.4096 18.5641V18.4513C29.4894 18.113 31.1215 16.1815 31.1215 14.0245C31.1215 10.9511 28.6951 8.9491 24.9976 8.9491H16.6782V29.2928H25.0409ZM19.9135 11.5291H24.2177C26.5575 11.5291 27.8862 12.5723 27.8862 14.4615C27.8862 16.4776 26.3408 17.6054 23.5388 17.6054H19.9135V11.5291ZM19.9135 26.7129V20.0163H24.1887C27.2507 20.0163 28.8395 21.1441 28.8395 23.3435C28.8395 25.5428 27.2941 26.7129 24.3765 26.7129H19.9135Z"
                                                stroke="white"
                                                stroke-width="0.1"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_5_5887"
                                            x="0.628219"
                                            y="-3.10089"
                                            width="47.5688"
                                            height="52.4437"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="8" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_5_5887"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_5_5887"
                                                result="shape"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_5_5887"
                                            x1="7.13241"
                                            y1="1.01231"
                                            x2="49.0762"
                                            y2="34.3073"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#9013FE" />
                                            <stop
                                                offset="1"
                                                stop-color="#6610F2"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_5_5887"
                                            x1="18.1414"
                                            y1="10.2881"
                                            x2="27.5169"
                                            y2="26.1443"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="white" />
                                            <stop
                                                offset="1"
                                                stop-color="#F1E5FC"
                                            />
                                        </linearGradient>
                                        <clipPath id="clip0_5_5887">
                                            <rect
                                                width="48"
                                                height="38.25"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1>Log in to your account</h1>
                                <h3>
                                    Welcome back! Please enter your details.
                                </h3>
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Rememer me"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Sign in
                                </Button>
                                <Button variant="outline-primary" size="lg">
                                    Sign in with Google
                                </Button>
                            </div>
                            <div className="text-center">
                                Don’t have an account? <a href="#">Sign up</a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </PageContainer>
    );
};

export default BootstrapPage;
