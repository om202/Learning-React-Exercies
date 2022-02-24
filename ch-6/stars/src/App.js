import StarRating from "./StarRating";

function App() {
  return (
    <>
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
        totalstars={5}
      />
    </>
  );
}

export default App;
