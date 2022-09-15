import Screen from "./screen";
import Service from "./service";

const Register = () => {
  const { userRegister } = Service();
  return <Screen registHandler={userRegister} />;
};

export default Register;
