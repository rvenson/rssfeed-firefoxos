//action menu
document.querySelector('#btn-action-menu1').addEventListener ('click', function () {
  document.querySelector('#action-menu').className = 'fade-in';
});
document.querySelector('#action-menu').addEventListener ('click', function () {
  this.className = 'fade-out';
});
//action menu
document.querySelector('#btn-action-menu2').addEventListener ('click', function () {
  document.querySelector('#action-menu').className = 'fade-in';
});
document.querySelector('#action-menu').addEventListener ('click', function () {
  this.className = 'fade-out';
});
//action menu
document.querySelector('#btn-action-menu3').addEventListener ('click', function () {
  document.querySelector('#action-menu').className = 'fade-in';
});
document.querySelector('#action-menu').addEventListener ('click', function () {
  this.className = 'fade-out';
});

//buttons
document.querySelector('#btn-buttons').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons2').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//adicionaFeed
document.querySelector('#btn-adicionaFeed').addEventListener ('click', function () {
  document.querySelector('#adicionaFeed').className = 'fade-in';
});
document.querySelector('#adicionaFeed').addEventListener ('click', function () {
  this.className = 'fade-out';
});

//deletaFeed
document.querySelector('#btn-deletarFeed').addEventListener ('click', function () {
  document.querySelector('#deletaFeed').className = 'fade-in';
});
document.querySelector('#deletaFeed').addEventListener ('click', function () {
  this.className = 'fade-out';
});

//sucessoFeed
document.querySelector('#btn-sucessoFeed').addEventListener ('click', function () {
  utils.status.show('Feed adicionado com sucesso!');    
});

//compartilhar
document.querySelector('#btn-compartilhar').addEventListener ('click', function () {
  document.querySelector('#compartilhar').className = 'fade-in';
});
document.querySelector('#compartilhar	').addEventListener ('click', function () {
  this.className = 'fade-out';
});

//compartilhar
document.querySelector('#btn-visu').addEventListener ('click', function () {
  document.querySelector('#visu').className = 'fade-in';
});
document.querySelector('#visu	').addEventListener ('click', function () {
  this.className = 'fade-out';
});

//compartilhar
document.querySelector('#btn-editarFeed').addEventListener ('click', function () {
  document.querySelector('#editarFeed').className = 'fade-in';
});
document.querySelector('#editarFeed	').addEventListener ('click', function () {
  this.className = 'fade-out';
});