const { createCanvas, Image } = require('@napi-rs/canvas');
const { AttachmentBuilder } = require('discord.js');
const canvasUtils = require('./canvas-utils');
const { request } = require('undici');
const { Client } = require('discord.js');
/**
 * @param {import('discord.js').Interaction} interaction 
 * @param {Client} client
 * @returns
 */
module.exports = async (interaction, client) => {
    const canvas = createCanvas(510, 408);
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 400;

    canvasUtils.drawRect(ctx, 'blue', 0, 0, canvas.width, 100)
    canvasUtils.drawRect(ctx, '#2b2d31', 0, canvas.height - (canvas.height - 100), canvas.width, canvas.height - 100)
    canvasUtils.drawCircle(ctx, (canvas.width / 2) - 120, 100, 72);

    canvasUtils.drawCard(ctx, 220, 82, 200, 40, 5);

    canvasUtils.drawText(ctx, await interaction.member.displayName, 220, 82);

    canvasUtils.drawText(ctx, 'Jumlah Transaksi', canvas.width / 2 - 220, canvas.height / 2, 20, 20);
    canvasUtils.drawCard(ctx, (canvas.width / 2) - 210, canvas.height / 2 + 50, 200, 40, 5);
    canvasUtils.drawText(ctx, '10 Transaksi', canvas.width / 2 - 210, canvas.height / 2 + 47, 20, 20)
    
    canvasUtils.drawText(ctx, 'Status', canvas.width / 2, canvas.height / 2, 20, 20);
    canvasUtils.drawCard(ctx, (canvas.width / 2) + 10, canvas.height / 2 + 50, 200, 40, 5);
    canvasUtils.drawText(ctx, interaction.member.presence?.status[0].toUpperCase() + interaction.member.presence?.status.substr(1), canvas.width / 2 + 10, canvas.height / 2 + 47, 20, 20);

    canvasUtils.drawCircle(ctx, (canvas.width / 2) - 120, 100, 70, true);

    const { body } = await request(interaction.member.displayAvatarURL({ extension: 'jpg' }));
    const avatar = new Image();
    avatar.src = Buffer.from(await body.arrayBuffer());

    ctx.drawImage(avatar, 60, 30, 140, 140)

    const attachment = new AttachmentBuilder(canvas.toBuffer('image/png', { name: 'idk.png' }))

    return attachment;
}