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
  var proj1 = {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'The classic minesweeper',
    desc: 'Classic minesweeper game with a touch of dark and light mode.',
    client: 'Coding academy',
    url: 'https://saarf77.github.io/MineSweeper/home.html',
    publishedAt: '07/10/2022',
    labels: [' Matrixes ',' CSS', ' Vanilla JS'],
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
  projs = [proj1, proj2, proj3, proj4, proj5, proj6]
  return projs
}
