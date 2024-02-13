import Header from "../components/Header";

function Example() {
  // any javascript code can be written here
  // variables can be declared here

  const firstName = "Zahin";
  const lastName = "Zulkipli";
  const hasPhd = true;

  return (
    // can only return one element
    // jsx is html in javascript, it is not html
    <div>
      <Header />
      <div>
        <h1>Hello world</h1>
      </div>
      <div className="card">
        <h2>It is a great day</h2>
      </div>
      <div>
        <h2>This is not javascript</h2>
        <h3>1 + 1 + 1</h3>
      </div>
      <div>
        <h2>This is javascript</h2>
        <h3>{1 + 1 + 1}</h3>
      </div>
      <div>
        <h2>Print a variable</h2>
        <h3>{firstName + " " + lastName}</h3>
      </div>
      <div>
        <h2>Condition rendering by tenary operator</h2>
        {hasPhd ? (
          <h3>Dr {firstName + " " + lastName}</h3>
        ) : (
          <h3>{firstName + " " + lastName}</h3>
        )}
      </div>
      <div style={{ backgroundColor: "red", margin: "10px", padding: "20px" }}>
        <h1>Box</h1>
        <h3>inline style</h3>
      </div>
    </div>
  );
}

export default Example;
