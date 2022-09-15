import { GlobalPost } from "../../../utilities/fetch";
import { FIREBASE_REGISTER } from "../../../constant/auth";
import { REACT_APP_API_KEY } from "../../../constant/key";

const Service = () => {
  const userRegister = async (params) => {
    try {
      let response = await GlobalPost({
        url: FIREBASE_REGISTER + REACT_APP_API_KEY,
        data: params,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };

  return { userRegister };
};

export default Service;
