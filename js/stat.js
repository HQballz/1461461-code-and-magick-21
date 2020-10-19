var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_X = 100
var TEXT_Y = 10;
var GAP_TEXT = 20;

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

window.renderStatistics = function(ctx) {
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
};
