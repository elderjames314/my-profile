import "./Greeting.css";

function Greeting() {
  const message = "Hello";
  const isMorning = new Date().getHours() < 12 ? "Morning" : "Afternoon";

  return (
    <div>
      <h1>{message}</h1>
      <p className="change-font">{isMorning}</p>
    </div>
  );
}

export default Greeting;
