interface Mylable {
  label: string;
}

function Button(props: Mylable) {
  function save() {
    console.log("Hi" + props.label);
  }
  return (
    <div>
      <button onClick={save}>{props.label}</button>
    </div>
  );
}

export default Button;
