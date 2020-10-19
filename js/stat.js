var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_X = 100;
var TEXT_Y = 10;
var GAP_TEXT = 20;
var GAP_BAR = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var barHeight = BAR_HEIGHT;

var textTitle = ['Ура вы победили!', 'Список результатов: '];

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function(ctx, players) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  for (var i = 0; i < textTitle.length; i++) {
    renderText(
      ctx,
      textTitle[i],
      TEXT_X + GAP_TEXT,
      TEXT_Y + GAP_TEXT * (i + 1)
    );
  }

  for (var j = 0; j < players.length; j++) {
    renderText(
      ctx,
      players[j],
      TEXT_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * j,
      TEXT_Y + GAP_TEXT * (textTitle.length + 1) + 5
    );

    ctx.fillRect(
      TEXT_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * j,
      TEXT_Y + GAP_TEXT * (textTitle.length + 1) + 5 + GAP_TEXT,
      BAR_WIDTH,
      barHeight
    );

    renderText(
      ctx,
      players[j],
      TEXT_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * j,
      TEXT_Y + GAP_TEXT * (textTitle.length + 1) + 15 + GAP_TEXT + BAR_HEIGHT
    );
  }
};
