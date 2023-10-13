interface Props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Contry;
}

export  enum Contry{
    Brazil = "Brazil",
    Canda = "Canda",
    Ghana = "Ghana",
    USA = "USA"
}
export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name: {props.name} </h1>
            <h1>Email: {props.email} </h1>
            <h1>Age: {props.age} </h1>
            <h1>Married: {props.isMarried ? "Yes" : "No"} </h1>
            {props.friends.map((friend, index) => (
                 <h1 key={index}>Friend: {friend}</h1>
            ))}
            <h1>Country: {props.country}</h1>
         </div>

    )
}