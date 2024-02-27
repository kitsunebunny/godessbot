const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { token: 'MTIwNTUxMzcyMDI3NzYzOTIxOQ.GpGqo2.fqnY4I11AoPN8_5dnzksVi0J1bfzIg9qH-u4II
 });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
