import {useState} from 'react'

export default function ControlledInput() {

    const [nameVisibleText, setNameVisibleText] = useState("")
    const [inputText, setInputText] = useState("");

    function nameCheck(){
        console.log("Working")
        // katsotaan mitä tekstikentässä lukee
        // jos oma nimi, niin laitetaan "minun nimi!" näkyviin

        if(inputText == "Mona"){
            setNameVisibleText("Minun nimi!")
        }
        else{
            setNameVisibleText("")
        }
    }

    function textChange(event){
        setInputText(event.target.value)
    }

  return (
    <div>Controlled Input Demo
        <div>
            <input type="text" onChange={textChange}/>
            <button onClick={nameCheck}> Tarkista</button>
        </div>
        <div>
            {nameVisibleText}
        </div>
    </div>
  )
}
