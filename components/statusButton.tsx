import React, { useState } from 'react';
import styled from '@emotion/styled';

function StatusButtonRC(props: {
  type: string;
  value: string;
  label: string;
  onClick: () => void;
  className?: string;
}): JSX.Element {
  const { type, value, label, onClick, className } = props;

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
}

const StatusButton = styled(StatusButtonRC)`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.type === props.value ? '#423F45' : 'rgba(66, 63, 69, 0.56)')};
  padding: 2px 20px 2px 24px;
  border-radius: 20px;
  background: ${(props) => (props.type === props.value ? '#FFD748' : 'rgba(255, 215, 72, 0.56)')};
`;

export default StatusButton;
