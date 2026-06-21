import test from'node:test';import assert from'node:assert/strict';import{wrap01,shortestTrackDelta,crossedProgress,formatTime,ordinalPosition,seededRandom}from'../core.js';
test('wrap01 normalizes progress',()=>{assert.equal(wrap01(1.25),.25);assert.equal(wrap01(-.2),.8)});
test('shortest delta crosses seam',()=>{assert.ok(Math.abs(shortestTrackDelta(.98,.02)-.04)<1e-9);assert.ok(Math.abs(shortestTrackDelta(.02,.98)+.04)<1e-9)});
test('marker crossing supports wrap',()=>{assert.equal(crossedProgress(.1,.3,.2),true);assert.equal(crossedProgress(.9,.1,.02),true);assert.equal(crossedProgress(.9,.1,.5),false)});
test('race time is padded',()=>assert.equal(formatTime(65432),'01:05.432'));
test('position ranks rivals',()=>assert.equal(ordinalPosition(100,[90,110,80,140]),3));
test('random is deterministic',()=>{const a=seededRandom(42),b=seededRandom(42);assert.deepEqual([a(),a(),a()],[b(),b(),b()])});
