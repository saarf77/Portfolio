'use strict'

var gProjs = _createProjs()

function getProjs() {
  return gProjs
}

function getProjById(id) {
  return gProjs.find((p) => p.id === id)
}

function _createProjs() {
  var projs = []
  var proj7 = {
    id: 'missbooks',
    name: 'Miss Books',
    title: 'Your own book store',
    desc: 'Vue js application that manages books, you can edit, see details and even search and add new books.',
    client: 'me',
    url: 'https://saarf77.github.io/Miss-Books/',
    publishedAt: '10/11/2022',
    labels: [' Vue.js ', ' CSS', ' API'],
  }
  var proj8 = {
    id: 'traveltip',
    name: 'Travel Tip',
    title: 'Travel Tip',
    desc: 'Travel Tip is an app that helps you get information about a specific location, using google maps api',
    client: 'me',
    url: 'https://saarf77.github.io/Travel-Tip/',
    publishedAt: '02/11/2022',
    labels: [' GeoLocation', ' Ajax', ' ES6 practice', ' API'],
  }
  var proj9 = {
    id: 'appsus1',
    name: 'AppSus',
    title: 'Your favorite apps in one place',
    desc: 'AppSus is a single page application with a set of mini apps: misterEmail, missKeep and missBooks',
    client: 'Sprint 3 coding academy',
    url: 'https://ohadbergmann.github.io/App-sus/#/',
    publishedAt: '02/11/2022',
    labels: [' Vue js', ' Git collab', ' google keep', ' Responsive'],
  }
  var proj10 = {
    id: 'memegen',
    name: 'Meme Generator',
    title: 'Your favorite apps in one place',
    desc: 'An awesome Meme Generator that looks good and works great on both desktop and mobile',
    client: 'Sprint 2 coding academy',
    url: 'https://saarf77.github.io/meme-g/',
    publishedAt: '02/11/2022',
    labels: [' Vue js', ' Ajax', ' Git', ' Responsive'],
  }
  var proj11 = {
    id: 'brickbreaker',
    name: 'Brick Breaker',
    title: 'Your favorite apps in one place',
    desc: 'Brick Breaker is a Breakout clone which the player must smash a wall of bricks by deflecting a bouncing ball with a paddle. The paddle may move horizontally and is controlled with teh keyboard arrows',
    client: 'me',
    url: 'https://saarf77.github.io/brick-breaker/',
    publishedAt: '02/11/2022',
    labels: [' games', ' Git', '  Vanilla JS'],
  }
  var proj12 = {
    id: 'pixelperfect',
    name: 'Pixe Perfect',
    title: 'Pixel Perfect design',
    desc: 'Responisve, pixel perfect web page, with pure CSS',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/design-to-live-page/',
    publishedAt: '20/10/2022',
    labels: [' Respnosive ', ' CSS', ' Mobile first'],
  }
  var proj1 = {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'The classic minesweeper',
    desc: 'Classic minesweeper game with a touch of dark and light mode.',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/MineSweeper/home.html',
    publishedAt: '07/10/2022',
    labels: [' Matrixes ', ' CSS', ' Vanilla JS'],
  }
  var proj2 = {
    id: 'loginpage',
    name: 'Login Page',
    title: 'My safe content',
    desc: 'Login page, with admin´s and user´s safe content',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/Login-Page/',
    publishedAt: '01/10/2022',
    labels: [' Local Storage ', 'Login pages'],
  }
  var proj3 = {
    id: 'bookshop',
    name: 'Bookshop',
    title: 'Bookshop website',
    desc: 'My Books Store, "The Last Chapter"',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/Books--Store/',
    publishedAt: '06/10/2022',
    labels: [' e-Commerce ', ' Vanilla JS'],
  }
  var proj4 = {
    id: 'pacman',
    name: 'PacMan',
    title: 'PacMan',
    desc: 'My Version for Pacman"',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/Pac-Man/',
    publishedAt: '20/09/2022',
    labels: [' Games', ' Vanilla JS'],
  }
  var proj5 = {
    id: 'gameoflife',
    name: 'Game Of Life',
    title: 'Game Of Life',
    desc: 'It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/Game-Of-Life/',
    publishedAt: '15/09/2022',
    labels: [' Universal Constructor', 'Turing Machine'],
  }
  var proj6 = {
    id: 'guesswho',
    name: 'Guess Who',
    title: 'Akinator',
    desc: 'Akinator can read your mind and tell you what character you are thinking of, just by asking a few questions. Think of a real or fictional character and Akinator will try to guess who it is. Will you dare challenge the genie? ',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/Guess-Who/',
    publishedAt: '15/09/2022',
    labels: [' Universal Constructor', 'Turing Machine'],
  }
  projs = [proj7, proj8, proj9, proj10, proj1, proj12, proj11, proj6, proj4, proj2, proj5, proj3,]
  return projs
}
