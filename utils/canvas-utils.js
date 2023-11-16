module.exports = {
    async drawRect(ctx, color, x, y, w, h) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    },
    async drawCircle(ctx, x, y, w = 50, clip = false) {
        ctx.beginPath();
        ctx.arc(x, y, w, 0, 2 * Math.PI);
        clip ? ctx.clip() : ctx.stroke();
    },
    async drawCard(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.closePath();
        ctx.fillStyle = "#2b2d31";
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    },
    async drawText(ctx, text, x, y, size = 30, limit = 10) {
        ctx.font = `${size}px Arial`;
        ctx.fillStyle = 'white';
        if(!text) return
        ctx.fillText(text.length > limit ? text.substring(0, limit) + '...' : text, x + 10, y + 30);
    }
}