import React from 'react';
import '../Styles/StyledTasks.css';
function Tasks(){
const container = document.querySelector('.container');
   const renderPosts= async() =>{
        let uri='http://localhost:3000/projects';
      const res = await fetch(uri);
      const projects = await res.json();
    
      console.log(projects);

     // fetch(uri).then(res=>res.json().then(res=>{const projects = res;}))
    
  //let template = projects.map(project =>{
                    
    //                return (<div className="project">
      //              <h2 className="heading">${project.title}</h2>
        //            <h3 className="description">${project.description}</h3>
          //          <h3 className="assignedTo">${project.assignedTo}</h3>
            //        <h4 className="updates">${project.updates}</h4>
              //  </div>)
        
        //});
    //    container.innerHTML = template; 
   } 
   

       window.addEventListener('DOMContentLoaded',() => renderPosts());
    return(
        <>
        <div className="container">
         <div className="project">
            <h2 className="heading">project 1</h2>
            <h3 className="description"> description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore.</h3>
            <h2 className="assignedTo">assignedTo: miten,taqi</h2>
            <p className="updates">updates: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in fugit a adipisci dignissimos alias!</p>
             
         </div>
         <div className="project">
            <h2 className="heading">project 2</h2>
            <h3 className="description"> description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore.</h3>
            <h2 className="assignedTo">assigned: jeet,taqi</h2>
            <p className="updates">updates: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in fugit a adipisci dignissimos alias!</p>
             
         </div>
         <div className="project">
            <h2 className="heading">project 3</h2>
            <h3 className="description">description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore.</h3>
            <h2 className="assignedTo">assignedTo: miten,ankita</h2>
            <p className="updates">updates: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in fugit a adipisci dignissimos alias!</p>
             
         </div>
         <div className="project">
            <h2 className="heading">project 4</h2>
            <h3 className="description">description:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore.</h3>
            <h2 className="assignedTo">assignedTo: neel,batul</h2>
            <p className="updates">updates: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in fugit a adipisci dignissimos alias!</p>
             
         </div>

        </div>
        </>
    );
}
export default Tasks