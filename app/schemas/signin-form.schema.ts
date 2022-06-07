import Joi from "joi";

export const SignInFormSchema = Joi.object({
  email: Joi.string()
    .ruleset.email({ tlds: false })
    .rule({ message: "Invalid email address" })
    .required(),
  password: Joi.string()
    .ruleset.min(6)
    .rule({ message: "Please provide a valid password" })
    .required(),
});
