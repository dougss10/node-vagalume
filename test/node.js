'use strict';
var assert = require('assert');
var Vagalume = require('../');
var api = new Vagalume();

describe('node-vagalume node module', function () {

  this.timeout(6000);

  it('VagalumeAPI :: getArtista(Rage Against the Machine)', function (done) {

    api.getArtista('Rage Against the Machine').then(function (response) {
      assert('3ade68b5gef77eda3', response.artist.id);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

  it('VagalumeAPI :: getByTrecho(q=told ya)', function (done) {

    api.getByTrecho('told ya').then(function (response) {
      assert(5, response.response.docs.length);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

  it('VagalumeAPI :: getByTrecho(q=told ya, limit=10)', function (done) {

    api.getByTrecho('told ya').then(function (response) {
      assert(10, response.response.docs.length);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

  it('VagalumeAPI :: getDiscografia(Rage Against the Machine)', function (done) {

    api.getDiscografia('Rage Against the Machine').then(function (response) {
      assert(10, response.discography.item.length);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

  it('VagalumeAPI :: getHotspots()', function (done) {

    api.getHotspots().then(function (response) {
      assert(10, response.hotspots);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

  it('VagalumeAPI :: getNoticias()', function (done) {

    api.getNoticias().then(function (response) {
      assert(20, response.news.length);
      done();
    }).catch(function (err) {
      throw err;
    });

  });

});