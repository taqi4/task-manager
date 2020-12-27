import React from 'react';
function Tasks(){
    const renderPosts= async() =>{
        let uri='http://localhost:3000/projects';
    //  const res = await fetch(uri).then;
   //   const projects = await res.json();
     // console.log(projects);

        fetch(uri).then(res=>res.json().then(res=>console.log(res)))

       }
       window.addEventListener('DOMContentLoaded',() => renderPosts());
    return(
        <>
        <div className="container">
            
        </div>
        </>
    );
}
export default Tasks