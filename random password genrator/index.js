function passwordgenerator(
  length,
  includelowercase,
  includeuppercase,
  includenumbers,
  incluesymbols
) {
  const lowercasechars = "qwertyuiopasdfghjklzxcvbnm";
  const uppercasechars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numberchars = "1234567890";
  const symbolchars = "!@#$%^&*()_+{}|:><?,./;[]=-`";

  let allowedchars = "";
  let password = "";

  allowedchars += includelowercase ? lowercasechars : "";
  allowedchars += includeuppercase ? uppercasechars : "";
  allowedchars += includenumbers ? numberchars : "";
  allowedchars += incluesymbols ? symbolchars : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedchars.length <= 0) {
    return `(password should select 1 set of character)`;
  }

  for (let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomindex];
  }

  return password;
}

const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const incluesymbols = true;

const password = passwordgenerator(
  passwordlength,
  includelowercase,
  includeuppercase,
  includenumbers,
  incluesymbols
);

console.log(`Genrated password ${password}`);
