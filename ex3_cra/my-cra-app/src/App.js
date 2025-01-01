import { Component } from "react";
import MyComponentClass from "./MyComponentClass";
import MyComponentFunction from "./MyComponentFunction";

class App extends Component {
  render() {
    return (
      <>
        <h1>클래스형 컴포넌트</h1>
        <MyComponentClass name="홍길동" age={23} nickname="길똥"/>
        <MyComponentClass name="홍길서" age={33} nickname="길써"/>
        <MyComponentClass name="홍길남" age={43} nickname="길남"/>
        <MyComponentClass name="홍길북" age={53} nickname="길뿍"/>
        <hr />
        <h1>함수형 컴포넌트</h1>
        <MyComponentFunction name="홍길동" age={23} nickname="길똥"/>
        <MyComponentFunction name="홍길서" age={33} nickname="길써"/>
        <MyComponentFunction name="홍길남" age={43} nickname="길남"/>
        <MyComponentFunction name="홍길북" age={53} nickname="길뿍"/>
      </>
    );
  }
}

export default App;
