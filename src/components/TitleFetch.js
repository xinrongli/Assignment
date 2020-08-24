import React, {useState, useEffect} from 'react'

function TitleFetch() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");

    function handleSubmit(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result.title)
            setTitle(result.title)
            },          
            (error) => {
              console.log(error)
            }
          )
      }

    return (
        <div>
            <input type="text" onChange={e => setId(e.target.value)} value={id}></input>
            <button onClick={handleSubmit}>Set Post</button>
            <p>{title}</p>
        </div>
    )
}

export default TitleFetch
