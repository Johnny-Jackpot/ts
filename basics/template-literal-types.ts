type EmailLocaleIds = "welcome_email" | "email_heading";
type FooterLocalIds = "footer_title" | "footer_sendoff";

type AllLocalIds = `${EmailLocaleIds | FooterLocalIds}_id`;

type AllIds = Record<AllLocalIds, string>;
type AllUpperCaseIds = Record<Uppercase<AllLocalIds>, string>;
type AllCapitalizeCaseIds = Record<Capitalize<AllLocalIds>, string>;
