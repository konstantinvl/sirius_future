import styled from '@emotion/styled';
import { GameElementProps } from '../../common/interfaces';

const GameDropWrapper = styled('div')<GameElementProps>`
  width: 100%;
  height: 222px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(./gamesets/${(props) => props.gameSet}/drop-background.png);
  background-position: center;
  background-repeat: no-repeat;
`;

export default GameDropWrapper;
