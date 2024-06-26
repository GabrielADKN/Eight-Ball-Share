import { useState } from 'react'

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

function EightBall() {
    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    const randomAnswer = () => {
        const index = Math.floor(Math.random() * answers.length)
        setMsg(answers[index].msg)
        setColor(answers[index].color)
    }

    const reset = () => {
        setMsg("Think of a Question")
        setColor("black")
    }

    return (
        <>
            <div
                className="EightBall"
                style={{ backgroundColor: color, borderRadius: '50%', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={randomAnswer}
            >
                {msg}
            </div>
            <div 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default EightBall