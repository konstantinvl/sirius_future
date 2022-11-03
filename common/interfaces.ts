import { BUTTON_TYPES } from './renderData';

export interface SliderInterface {
  legend: string;
  sliderData: SliderDataInterface[];
}

export interface SliderDataInterface {
  value: number;
  label: string;
}

export interface RenderDataInterface {
  quantitySlider: SliderInterface;
  valueSlider: SliderInterface;
}

export interface GameElementProps {
  gameSet: string;
}

export interface GameSlice {
  set: string[];
  ranking: BUTTON_TYPES.ASCENDING | BUTTON_TYPES.DESCENDEING | '';
}
