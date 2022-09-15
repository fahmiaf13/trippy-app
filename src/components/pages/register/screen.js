import React from "react";
import FormRegist from "../../organisms/formRegist";

const Screen = (props) => {
  const { registHandler } = props;
  return (
    <div>
      <FormRegist
        submitHandler={(e) => {
          registHandler(e);
        }}
      />
    </div>
  );
};

export default Screen;
