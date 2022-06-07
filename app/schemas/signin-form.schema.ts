import Joi from "joi";

export const SignInFormSchema = Joi.object({
  email: Joi.string()
    .ruleset.email({ tlds: false })
    .rule({ message: "Invalid email address" })
    .required(),
  password: Joi.string()
    .ruleset.pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .rule({ message: "Please provide a valid password" })
    .required(),
});
