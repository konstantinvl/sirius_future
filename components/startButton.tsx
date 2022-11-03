import React from 'react';
import styled from '@emotion/styled';

function StartButtonRC(props: {
  className?: string;
  label: string;
  onClick: () => void;
}): JSX.Element {
  const { className, label, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
}

const StartButton = styled(StartButtonRC)`
  margin-top: 95px;
  margin-bottom: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 4px 75px 12px 75px;
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default StartButton;
