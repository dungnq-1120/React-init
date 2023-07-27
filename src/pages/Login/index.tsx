import LoginForm from "~/components/organisms/login/LoginForm";

const Login = () => {
  return (
    <div>
      <LoginForm
        onLogin={() => {
          return "";
        }}
      />
    </div>
  );
};

export default Login;
