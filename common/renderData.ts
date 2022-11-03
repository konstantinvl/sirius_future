import { RenderDataInterface } from './interfaces';

export const RENDER_DATA: RenderDataInterface = {
  quantitySlider: {
    legend: 'Кол-во предметов',
    sliderData: [
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
    ],
  },

  valueSlider: {
    legend: 'Значения',
    sliderData: [
      {
        value: 1,
        label: 'A',
      },
      {
        value: 2,
        label: '9',
      },
      {
        value: 3,
        label: '19',
      },
      {
        value: 4,
        label: '50',
      },
      {
        value: 5,
        label: '99',
      },
      {
        value: 6,
        label: '999',
      },
    ],
  },
};

export enum BUTTON_TYPES {
  ASCENDING = 'asc',
  DESCENDEING = 'desc',
}

export const GAME_BACKGROUND_COLORS: Record<string, string> = {
  '1': '#DEC6AA',
  '2': '#3A1F36',
  '3': '#132738',
};
