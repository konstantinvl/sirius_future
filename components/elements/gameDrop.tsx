import styled from '@emotion/styled';
import { useDrop } from 'react-dnd';

function GameDropRC(props: {
  acceptedValue: string;
  className?: string;
  onDrop: (
    acceptedValue: string,
    item: {
      value: string;
    }
  ) => void;
  children: JSX.Element;
}): JSX.Element {
  const { className, acceptedValue, onDrop, children } = props;
  function con(arg: any) {
    console.log(arg);
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'token',
    drop: (item: { value: string }) => onDrop(acceptedValue, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={className}>
      {children}
    </div>
  );
}

const GameDrop = styled(GameDropRC)`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;
export default GameDrop;
