import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SliderInterface } from '../common/interfaces';

function SliderInputRC(props: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  data: SliderInterface;
  className?: string;
}): JSX.Element {
  const { value, setValue, className, data } = props;

  return (
    <form className={className}>
      <legend className='slider-input__legend'>{data.legend}</legend>
      <div className='range_wrapper'>
        <datalist id='tickmarks' className='datalist'>
          {data.sliderData.map((option) => (
            <option label={option.label} value={option.value} key={option.value} />
          ))}
        </datalist>
        <input
          type='range'
          list='tickmarks'
          className='range'
          defaultValue={value}
          step={1}
          onChange={(ev) => {
            setValue(Number(ev.target.value));
          }}
          min={data.sliderData[0].value}
          max={data.sliderData[data.sliderData.length - 1].value}
        />
      </div>
    </form>
  );
}

interface SliderInputProps {
  width: string;
}

const SliderInput = styled(SliderInputRC)<SliderInputProps>`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .slider-input__legend {
    font-family: 'Helvetica';
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  & > .range_wrapper {
    width: ${(props) => props.width};

    & > .range {
      width: 100%;
      -webkit-appearance: none;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: #104987;
        cursor: pointer;
        align-self: center;
        margin-top: -1px;
      }
      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 21px;
        background: #ffd748;
        border-radius: 10px;
        display: flex;
      }
    }

    & > .datalist {
      display: flex;
      justify-content: space-between;
      & > * {
        display: flex;
        justify-content: center;
        width: 23px;
        font-size: 24px;
        line-height: 29px;
        font-family: Calibri;
      }
    }
  }

  & > .slider-input__radio-wrapper {
    display: flex;
    justify-content: space-between;
    height: 23px;
    width: 50%;
    background: #ffd748;
    border-radius: 10px;
    margin-top: 31px;
    overflow: visible;
    align-items: flex-end;
  }

  @keyframes example {
    0% {
      box-shadow: 0 0 0px;
    }
    50% {
      box-shadow: 0 0 10px;
    }
    100% {
      box-shadow: 0 0 0px;
    }
  }
`;

export default SliderInput;
