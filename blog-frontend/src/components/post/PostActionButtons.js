import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModel from './AskRemoveModel';

const PostActionButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
`;

const ActionButton = styled.button`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: ${palette.gray[6]};
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 0.875rem;
    cursor: pointer;
    &amp;:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
    }
    &amp; + &amp; {
    margin-left: 0.25rem;
    }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
    const [model, setModel] = useState(false);
    const onRemoveClick = () => {
        setModel(true);
    };

    const onCancel = () => {
        setModel(false);
    };

    const onConfirm = () => {
        setModel(false);
        onRemove();
    };

    return (
        <>
            <PostActionButtonsBlock>
                <ActionButton onClick={onEdit}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </PostActionButtonsBlock>
                <AskRemoveModel
                    visible={model}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                />
        </>
    );
};

export default PostActionButtons;