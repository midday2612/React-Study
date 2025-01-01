import { Component } from "react";

class MyComponentClass extends Component {
    render() {
        const { name, age, nickname } = this.props;
        return (
            <>
                <h2>이름은 {name}입니다.</h2>
                <h3>나이는 {age}살입니다.</h3>
                <h3>별명은 {nickname}입니다.</h3>
            </>
        );
    }
}

export default MyComponentClass;
