import React from "react";
import { Input } from "antd";

class InputForm extends React.Component {
  render() {
    const Search = Input.Search;
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default InputForm;
