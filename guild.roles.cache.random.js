const { PermissionsBitField } = require('discord.js');

guild.roles.everyone.setPermissions([PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel]);
