export const createAccount = (
  name: string,
  gender: string,
  childrenNames: string[],
  email: string,
  password: string
) => {
  alert(
    `Create account with \n${name}, ${gender}, ${childrenNames.join(
      "+"
    )}, ${email}, ${password}`
  );
};
