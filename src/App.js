// our JSX file
import Header from "./components/Header"

function App() {
    return (
        <>
            <Header text="This is prop text" />
            <div className="container">
                <h1>Feedback App</h1>
            </div>
        </>
    )
}


export default App