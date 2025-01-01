function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        "button",
        { onClick: () => setIsClicked(!isClicked) },
        isClicked ? "Clicked" : "Click here"
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(MyButton));
