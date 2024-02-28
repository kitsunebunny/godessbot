const memberPermissions = member.permissions.serialize();
const rolePermissions = role.permissions.serialize();
/* output: {
SendMessages: true,
AddReactions: true,
BanMembers: false,
...
}
*/
