

/**
 * 
 * <div id = "parent">
 * <div id = "child" >
 * <h1>Heading 1 </h1>
 * <h2>Heading 2</h2>
 * </div>
 * 
 * 
 *<div id = "child2">
 <h1>Heading1</h1>
 <h2>heading2</h2>
 </div>
 </div>

 create this structure in react

 ReactElement(object) => HTML(Browser understans) : means React.createElement is an js object while it is rendering on to the dom it converts itself to  the html.
 */



 const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement(
        "div",
        { id: "child" },
        [
          React.createElement("h1", {}, "I am an h1 tag"),
          React.createElement("h2", {}, "I am an h2 tag")
        ]
      ),
      React.createElement(
        "div",
        { id: "parent" },
        React.createElement(
          "div",
          { id: "child2" },
          [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag")
          ]
        )
      )
    ]
  );


  //jsx
  
  

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
// root.render is just putting this parent inside root tag.