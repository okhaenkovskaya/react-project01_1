import { useState } from "react";
import styled from "styled-components";

const ButtonWrap = styled.div`
    position: relative;
`;

const ButtonOpener = styled.button`
    color: #919294;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    adding: 0;
    margin: 0;
    border: 0;
    background: none;
`;

const Popup = styled.div`
    background: #ebebeb;
    border-radius: 10px;
    padding: 15px;
    z-index: 10;
    display: flex;
`;

const Button = styled.button`
    color: #919294;
    padding: 0;
    margin: 0 10px;
    border: 0;
    background: none;
    color: #000;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    letter-spacing: -0.3px;
    display: block;
`;

type Props = {
    deletePost: any;
    row: any;
    setShowEditPopup: any;
    showEditPopup: boolean;
    setEditedPostDB: any;
};

const DashboardPostEditButtonsPopup = ({
    deletePost,
    row,
    setShowEditPopup,
    showEditPopup,
    setEditedPostDB,
}: Props) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    return (
        <ButtonWrap>
            <ButtonOpener onClick={() => setIsPopupOpen(!isPopupOpen)}>
                ...
            </ButtonOpener>

            {isPopupOpen && (
                <Popup>
                    <Button
                        type="button"
                        onClick={(e) => {
                            deletePost(e, row._id);
                            setIsPopupOpen(false);
                        }}
                    >
                        Dalete
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {
                            setShowEditPopup(!showEditPopup);
                            setEditedPostDB(row);
                            setIsPopupOpen(false);
                        }}
                    >
                        Edit
                    </Button>
                </Popup>
            )}
        </ButtonWrap>
    );
};

export default DashboardPostEditButtonsPopup;
