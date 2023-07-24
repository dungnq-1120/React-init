import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Button from "~/components/atoms/Button";
import FormInputText from "~/components/molecules/FormInputText";
import FormRow from "~/components/molecules/FormRow";
import useLoginForm from "~/hooks/features/login/useLoginForm";

type Props = {
  onLogin(email: string, password: string): void;
};

function LoginForm({ onLogin }: Props) {
  const { handleSubmit, register, errors, isValidating } = useLoginForm({
    onLogin,
  });

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 6,
        margin: "auto",
        maxWidth: "sm",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormRow id="email">
          <FormInputText
            id="email"
            size="medium"
            placeholder="Email address"
            error={!!errors.email}
            variant="outlined"
            label="メールアドレス"
            {...register("email")}
            errorMessage={errors.email?.message}
            fullWidth
          />
        </FormRow>
        <FormRow id="password">
          <FormInputText
            id="password"
            size="medium"
            placeholder="Password"
            error={!!errors.password}
            type="password"
            label="パスワード"
            {...register("password")}
            errorMessage={errors.password?.message}
            fullWidth
          />
        </FormRow>
        <Box marginTop={2}>
          <Button type="submit" size="large" fullWidth disabled={isValidating}>
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default LoginForm;
