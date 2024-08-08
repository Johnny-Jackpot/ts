var EnumRoles;
(function (EnumRoles) {
  EnumRoles[(EnumRoles["Admin"] = 0)] = "Admin";
  EnumRoles[(EnumRoles["Guest"] = 1)] = "Guest";
  EnumRoles[(EnumRoles["User"] = 2)] = "User";
})(EnumRoles || (EnumRoles = {}));
var user = {
  role: EnumRoles.Admin,
  color: 0 /* EnumColor.black */,
};
var user2 = {
  role: EnumRoles.Guest,
  color: 2 /* EnumColor.green */,
};
var user3 = {
  role: EnumRoles.User,
  color: 1 /* EnumColor.pink */,
};
console.log(EnumRoles);
console.log(EnumRoles[EnumRoles.Admin]);
