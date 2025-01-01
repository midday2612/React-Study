import {useState} from 'react';

function MyButton(){
    const [clicked, setClicked] = useState(false);

    return(
        <button onClick={()=>setClicked(!clicked)}>
            {clicked? "clicked":"click here"}
        </button>
    )
}

export default MyButton;