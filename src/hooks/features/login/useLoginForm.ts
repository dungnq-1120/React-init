import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Params = {
  onLogin(email: string, password: string): void;
};
const schema = yup.object({
  email: yup
    .string()
    .email("This field is email")
    .min(1, "This field is required")
    .max(20, "This field cannot exceed 20 characters")
    .required("This field is required"),
  password: yup.string().min(1, "This field is required").required("This field is required")
});
type FormData = yup.InferType<typeof schema>;

function useLoginForm(params: Params) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  return {
    register,
    handleSubmit: handleSubmit((data) => {
      params.onLogin(data.email, data.password);
    }),
    errors,
    isValidating,
  };
}

export default useLoginForm;
