interface ChildProps {
  count: number;
  onIncrement: () => void;
}

function Child({ count, onIncrement }: ChildProps) {
  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrement}></button>
    </div>
  );
}

export default Child;
