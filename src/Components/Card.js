import React from "react";
import "../App.css";
/* how to get data from api("https://jsonplaceholder.typicode.com/users/") and show name, other details in cards and make it responsive and add a filter functionality for names */
const Card = (props) => {
  const { name, email, phone, website } = props;
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};
export default Card;

/* const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setUsers(jsonData);
        setFilteredUsers(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value?.trim()) {
      setFilteredUsers(users);
      return;
    }
    const filteredData = users?.filter((user) =>
      user?.name?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Card container</h1>
        <label>
          Search for cards:
          <input
            type="text"
            style={{ marginLeft: "10px", padding: "6px" }}
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
      </div>
      <div className="card-container">
        {filteredUsers.map((user) => (
          <Card
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}
      </div>
    </>
  ); */
