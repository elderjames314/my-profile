import { useState } from "react";

export default function Cond() {
  const [isLoggedin] = useState(true);

  return <div>{isLoggedin && <h1>Welcome back</h1>}</div>;
}
