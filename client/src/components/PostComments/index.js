import styled from "styled-components";

import Comments from "../Comments";
import Like from "../Like";

const FirstCommentContainer = styled.div`
    margin: 50px 0 30px;

    .frame {
        display: flex;
    }
`;

const FirstComment = styled.div`
    margin: 0 0 30px;
    padding: 50px 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const SecondCommentContainer = styled.div`
    margin: 0 50px 30px;
    display: flex;

    .holder {
        max-width: 507px;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
    }

    li {
        margin: 0 10px 10px 0;
    }

    em {
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
        font-style: normal;
        color: #fff;
        opacity: 0.6;
    }
`;

const Avator = styled.div`
    background: #2f80ed;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
`;

const SecondComment = styled.div`
    margin: 0 0 30px;
    padding: 50px 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const PostComment = () => {
    return (
        <>
            <FirstCommentContainer>
                <FirstComment>
                    <h2>First Name Last Name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut cum delectus ex ipsum itaque iusto maiores
                        molestias mollitia nam natus non pariatur perferendis
                        quae quam, sequi sunt temporibus. Facilis, officiis?
                    </p>
                </FirstComment>

                <div className="frame">
                    <Comments>120</Comments>
                    <Like>77</Like>
                </div>
            </FirstCommentContainer>

            <SecondCommentContainer>
                <Avator>FL</Avator>
                <div className="holder">
                    <SecondComment>
                        <h2>First Name Last Name</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci aliquam, architecto aut corporis,
                            cumque dicta doloremque dolorum eius ex excepturi
                            illum nihil officia perspiciatis quia quisquam quod
                            similique tenetur totam!
                        </p>
                    </SecondComment>
                    <ul>
                        <li>Reply</li>
                        <li>React</li>
                        <li>47 min ago</li>
                    </ul>
                    <em>Show 37 more replies</em>
                </div>
            </SecondCommentContainer>
        </>
    );
};

export default PostComment;
