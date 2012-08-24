i-bem.js TodoMVC App
====================

*NOTE: This project is in the early development state*

This is a [i-bem.js][1] implementation of TodoMVC application. This version is
different from other application's version, because of it written with full BEM
methodology in mind.

For more info about BEM look at [bem-bl](https://github.com/bem/bem-bl) repo.

Other implementations of TodoMVC application could be found on the
[todomvc.com][3].

Requires
--------

 * node version 0.6.x
 * [bem-tools][2], 0.5.13+
 * [bem-bl][1] 0.3

Project structure
-----------------

 * `src/common` – contains common blocks used in application
 * `src/todoapp` – TodoMVC specific blocks
 * `build/app` – source page

Tech stack used in project is `BEMHTML` as template language, `i-bem.js` as
client-side framework and `bem server` as build platform.

How to contribute
-----------------

Fork this repository. From your local copy run

    › npm install
    › bem make bem-bl && cd bem-bl && npm install
    › bem server


[1]: http://github.com/bem/bem-bl.git
[2]: http://github.com/bem/bem-tools.git
[3]: http://todomvc.com

