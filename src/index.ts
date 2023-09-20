import { config } from 'dotenv';
config();

import { IntentOptions } from './intentsOption'
import { Client } from 'discord.js';
import { CommandKit } from 'commandkit';
import path from 'path';

const client = new Client({
    intents: IntentOptions
});

new CommandKit({
    client,
    eventsPath: path.join(__dirname, 'events'),
});

client.login(process.env.TOKEN);
