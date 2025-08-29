interface ProfileProps {
  first_name: string;
  age: number;
  email?: string;
}

function Profile({ first_name, age }: ProfileProps) {
  return (
    <div>
      <img src="./Aapeli-Jan-1.jpg" height={100} />
      <h1>Hello {first_name}</h1>
      <h1>My age is {age + 50}</h1>
    </div>
  );
}

export default Profile;
