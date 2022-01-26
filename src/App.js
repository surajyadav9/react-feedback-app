// our JSX file

function App() {
    const title = "Lol"
    const body = "My name is suraj"
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment Two'},
        {id: 3, text: 'Comment Three'}
    ]

    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>


            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {
                        comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default App