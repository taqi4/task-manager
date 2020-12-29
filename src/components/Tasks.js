import React, { Component } from "react";
import "../Styles/StyledTasks.css";
import firebase from "firebase";

class Tasks extends Component {
  state = {
    name: [],
  };

  getData = async () => {
    const db = firebase.firestore();
    const query = await db.collection("projects").get();
    const data = query.docs.map((doc) => {
      return doc.data();
    });
    return data;
  };

  componentDidMount() {
    this.getData().then((data) => {
      this.setState({
        name: data,
      });
    });
  }

  render() {
    const { name } = this.state;

    var data =
      name === 0 ? (
        <div className="project">
          <h1>empty</h1>
        </div>
      ) : (
        name.map((data) => {
          return (
            <div className="project" key={data.id}>
              <h2 className="heading">{data.title}</h2>
              <h3 className="description">
                {"description: " + data.description}
              </h3>
              <h2 className="assignedTo">
                {"assignedTo: " + data.assignedTo[0] + " " + data.assignedTo[1]}
              </h2>
              <p className="updates">{"status: " + data.updates[0]}</p>
            </div>
          );
        })
      );

    return (
      <div className="container">
        <p>{data}</p>
      </div>
    );
  }
}
export default Tasks;

// <div className="container">
//         <div className="project">
//           <h2 className="heading">project 1</h2>
//           <h3 className="description">
//             {" "}
//             description: Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Et, labore.
//           </h3>
//           <h2 className="assignedTo">assignedTo: miten,taqi</h2>
//           <p className="updates">
//             updates: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eligendi in fugit a adipisci dignissimos alias!
//           </p>
//         </div>
//         <div className="project">
//           <h2 className="heading">project 2</h2>
//           <h3 className="description">
//             {" "}
//             description: Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Et, labore.
//           </h3>
//           <h2 className="assignedTo">assigned: jeet,taqi</h2>
//           <p className="updates">
//             updates: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eligendi in fugit a adipisci dignissimos alias!
//           </p>
//         </div>
//         <div className="project">
//           <h2 className="heading">project 3</h2>
//           <h3 className="description">
//             description: Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Et, labore.
//           </h3>
//           <h2 className="assignedTo">assignedTo: miten,ankita</h2>
//           <p className="updates">
//             updates: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eligendi in fugit a adipisci dignissimos alias!
//           </p>
//         </div>
//         <div className="project">
//           <h2 className="heading">project 4</h2>
//           <h3 className="description">
//             description: Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Et, labore.
//           </h3>
//           <h2 className="assignedTo">assignedTo: neel,batul</h2>
//           <p className="updates">
//             updates: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eligendi in fugit a adipisci dignissimos alias!
//           </p>
//         </div>
//       </div>
