(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,413,265],[302,267,60,38],[302,307,60,38],[0,267,300,250],[230,519,158,216],[0,519,228,282]]}
];


// symbols:



(lib.campana = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carta1 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.carta2 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.prodotto = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.volantino = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.volantino_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.volantino();
	this.instance.parent = this;
	this.instance.setTransform(-114,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94100E").s().p("AyRWdMAAAgs5MAkjAAAMAAAAs5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.volantino_1, new cjs.Rectangle(-117,-143.7,234,287.5), null);


(lib.tx1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgdAtQgGgIAAgNQAAgLAFgIQAEgGAKgCIAAgBQgJgCgEgHQgDgFAAgIQgBgfAhAAQAhAAAAAfQAAAIgDAFQgFAHgIACIAAABQAJACAGAGQAEAIAAALQAAANgGAIQgJANgVAAQgUAAgJgNgAgMAXQAAAUAMAAQANAAAAgUQAAgTgNgBQgMABAAATgAgLgaQAAAQALAAQALAAAAgQQAAgQgLAAQgLAAAAAQg");
	this.shape.setTransform(46.7,6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAAA5IAAhPIgWAAIAAgPIACAAQAXAAADgTIARAAIAABxg");
	this.shape_1.setTransform(38.125,6.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgbAtQgIgMAAgfQABgcAFgMQAHgTAWAAQAUAAAIAMQAIAMgBAgQAAAcgEAMQgIATgXAAQgUAAgHgNgAgJgiQgCAIgBAXIAAALQABAVACAHQACAGAHABQAHgBADgHQACgIABgWIAAgMQgBgVgCgHQgDgHgHAAQgHABgCAHg");
	this.shape_2.setTransform(31.4,6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgiA5QAAgPAGgMQAGgLANgMIAJgHQAHgHACgFQACgFAAgJQAAgOgLAAQgHAAgDAGQgCAFAAALIgWAAIAAgFQAAghAiAAQAiAAAAAfQAAALgEAIQgEAIgJAIIgNAMQgJAJgCAIIAqAAIAAASg");
	this.shape_3.setTransform(23.675,6.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_4.setTransform(12.525,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAOA5QgDgDAAgJIgBgWQAAgPgMAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAIAAAOQAAAZgTACQALACAEAIQADAGABATIABAPQABAEADACIAAABgAgPgGIAKAAQAQAAAAgRQAAgRgPABIgLAAg");
	this.shape_5.setTransform(4.275,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgkA5IAAhxIAlAAQAhAAAAAcQAAAVgRAEIAAABQAJACAGAFQAFAHAAAMQAAAOgHAJQgKAKgSAAgAgNAoIAJAAQARAAAAgRQAAgRgQgBIgKAAgAgNgKIAGAAQASABAAgPQAAgJgEgDQgEgDgIAAIgIAAg");
	this.shape_6.setTransform(-4.725,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAeA5IAAhaIgBAAIgUBaIgRAAIgUhaIgBAAIAABaIgVAAIAAhxIAiAAIAQBQIAAAAIARhQIAiAAIAABxg");
	this.shape_7.setTransform(-15.125,6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_8.setTransform(-24.625,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgeAqQgHgMAAgeQAAgdAHgNQAIgQAXAAQAWgBAIAOQAGAKAAARIgXAAQAAgNgDgFQgEgGgHABQgIAAgDAKQgDAIAAAZQAAAYAEAJQADAHAHAAQAHAAADgFQAEgGAAgRIAYAAQAAAVgHAKQgJAOgVAAQgXAAgIgRg");
	this.shape_9.setTransform(-32.925,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_10.setTransform(-39.3,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AglA5IAAhxIAlAAQAWAAAJAPQAHAMAAAcQAAAfgIANQgJAOgVAAgAgOAoIALAAQAKAAAEgJQAEgIAAgXQAAgVgDgJQgEgKgMABIgKAAg");
	this.shape_11.setTransform(-45.825,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAAA5IAAhPIgWAAIAAgPIACAAQAXAAADgTIARAAIAABxg");
	this.shape_12.setTransform(39.025,-10.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAAA5IAAhPIgWAAIAAgPIACAAQAXAAADgTIARAAIAABxg");
	this.shape_13.setTransform(31.375,-10.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgJAZIAAgxIATAAIAAAxg");
	this.shape_14.setTransform(22.575,-13.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_15.setTransform(17.1,-10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_16.setTransform(9.7,-10.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAehxIAdAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_17.setTransform(1.3,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAEA5IAAgYIgnAAIAAgTIAkhGIAYAAIAABHIALAAIAAASIgLAAIAAAYgAgSAPIAWAAIAAgqg");
	this.shape_18.setTransform(-10.75,-10.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_19.setTransform(-21.8,-10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAehxIAdAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_20.setTransform(-30.2,-10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AglA5IAAhxIAlAAQAWAAAJAPQAHAMAAAcQAAAfgIANQgJAOgVAAgAgOAoIALAAQAKAAAEgJQAEgIAAgXQAAgWgDgIQgEgKgMAAIgKAAg");
	this.shape_21.setTransform(-39.125,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx1, new cjs.Rectangle(-52.6,-18.5,105.2,37), null);


(lib.stella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.992],0,0,0,0,0,59.3).s().p("AmdGeQirisAAjyQAAjxCrisQCrirDyAAQDyAACsCrQCrCsAADxQAADyirCsQisCrjyAAQjyAAirirg");
	this.shape.setTransform(-2.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,354.1).s().p("EgmuAA6QwDgYAAgiQAAghQDgYQQCgXWsAAQWsAAQDAXQQDAYAAAhQAAAiwDAYQwDAY2sAAQ2sAAwCgYg");
	this.shape_1.setTransform(0,0,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,354.1).s().p("EgmuAA6QwDgYAAgiQAAghQDgYQQCgXWsAAQWsAAQDAXQQDAYAAAhQAAAiwDAYQwDAY2sAAQ2sAAwCgYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stella, new cjs.Rectangle(-350.6,-350.6,701.2,701.2), null);


(lib.prodotto_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.prodotto();
	this.instance.parent = this;
	this.instance.setTransform(-79,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prodotto_1, new cjs.Rectangle(-79,-108,158,216), null);


(lib.logospecialissimi = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtDRQgVgJgJgUQgIgVAIgVQAJgVAVgJQAUgIAWAIQAVAJAIAVQAJAUgJAWQgJAVgUAIQgKAEgKAAQgLAAgLgEgAh4i0IBOggIB0EXIhNAgg");
	this.shape.setTransform(80.7039,20.8726,0.4854,0.4854);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2i5IBQgfICcGSIhPAfg");
	this.shape_1.setTransform(75.2612,23.2237,0.4854,0.4854);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjpijIBrgjIB3DlIACgBIgwj8IBsgkICzGMIhUAcIh0khIgBAAIATBqIAeDNIg/AVIhni4IgshWIgDgIIgBAAIBVEsIhXAcg");
	this.shape_2.setTransform(64.3394,27.7866,0.4854,0.4854);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgjFIBTgWIBuGhIhTAWg");
	this.shape_3.setTransform(51.3789,31.0388,0.4854,0.4854);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGDgQgVgBgQgHIgShQQAmAPAdgHQAVgEALgQQALgQgFgUQgFgVgTgMIgmgSQgugSgWgUQgcgagKgrQgMg1AVgpQAWgsA0gLQAmgJAnANIATBRQglgUgdAHQgTAEgJAOQgJANAEAUQAFAWAZAQQAHAFArAUQBKAhAOA+QANA6gXArQgYAtg6ANQgNADgPAAIgKAAg");
	this.shape_4.setTransform(43.3048,33.0639,0.4854,0.4854);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRDfQgWgCgQgIIgNhRQAkARAggFQAUgDALgPQAMgPgEgVQgDgWgTgNIglgTQgtgUgVgWQgagbgIgsQgJg1AXgoQAZgrA0gIQAmgHAnAPIAOBSQgkgWgdAFQgUAEgJANQgKANAEATQAEAXAXARQAHAFAqAWQBIAlALA/QAKA7gaAqQgbArg6AKQgLACgLAAIgPgBg");
	this.shape_5.setTransform(32.9038,35.088,0.4854,0.4854);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEjQIBUgLIA1GtIhUAKg");
	this.shape_6.setTransform(24.6205,36.2449,0.4854,0.4854);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhojTIBVgHIAcFeIBZgHIAHBQIitAOg");
	this.shape_7.setTransform(17.6549,37.155,0.4854,0.4854);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3jXIBZgCIBxGtIhbACIgRhIIhWACIgOBJIhVABgAgjBLIA7gBIgiizIgBAAg");
	this.shape_8.setTransform(5.8836,37.6769,0.4854,0.4854);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwDXIAMmwIBVADIgMGwg");
	this.shape_9.setTransform(-4.1523,37.5919,0.4854,0.4854);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0DdQhXgGgxhKQgthDAHhaQAGhWA3g7QA7hBBSAGQAWACAVAKIgGBOQgRgGgOgBQg1gEggApQgcAjgEA3QgEA1AXArQAZAyA0AEQAOABATgFIgGBRQgPAEgRAAIgIAAg");
	this.shape_10.setTransform(-12.2573,37.4048,0.4854,0.4854);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhvDMIA1mtICqAWIgKBQIhWgLIgLBdIBLAKIgKBPIhKgKIgNBhIBXALIgKBPg");
	this.shape_11.setTransform(-22.7557,36.1721,0.4854,0.4854);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiQDOIBMmqIBXAQQAzAJAaARQA9AngQBXQgKA6gqAbQgoAbg7gLIgSgEIgfCwgAgQgWQAfAGARgKQATgLAGgfQAKg4gwgIIgQgDg");
	this.shape_12.setTransform(-33.8314,33.9271,0.4854,0.4854);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+DXQgTgFgRgJQgUgLgLgNIAThQQAbAeAfAHQAUAFAQgJQAQgKAGgUQAEgVgLgTIgbghQgigjgLgdQgOgkAKgrQAMg0AlgcQAlgeA0AMQAmAJAfAdIgTBRQgZgigdgHQgUgFgNAJQgOAIgEAUQgGAWAPAZQAFAHAfAlQA0A+gOA/QgOA6gnAcQgeAVgjAAQgQAAgRgEg");
	this.shape_13.setTransform(-45.2425,32.1311,0.4854,0.4854);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhmDDIB7mdIBSAYIh7Geg");
	this.shape_14.setTransform(-59.7199,28.2599,0.4854,0.4854);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhsCyICImaIBRAbIhuFNIBTAdIgZBMg");
	this.shape_15.setTransform(-68.4452,26.1483,0.4854,0.4854);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhMDRQhKgcgMhUQgKhFAfhPQAhhWAygsQA/g4BOAeQAtARAVAnQAUAkgEAyIhZAAQAFgYgCgOQgEgWgUgIQgigPgjAwQgWAfgTAwQgzCGA9AXQAbALAXgaQAQgSAMgfIgygUIAchKICDAxIgMAgQggBSgrApQgnAkgsAAQgXAAgZgJg");
	this.shape_16.setTransform(-77.9365,22.0704,0.4854,0.4854);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEKoQvogNu8nEIg8gdIE/thIBIAhQMkF5M/ALQM9AKMwlmIBIggIErNpIg+AcQnhDVnuBpQnTBjnWAAIg0AAgA+JCVQOuG+PXAMQPWAMO5mnIj7rfQs8FstPgKQtNgLs0mAg");
	this.shape_17.setTransform(-0.9243,28.6561,0.4854,0.4854);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D91422").s().p("AgFJ9QnsgGnoh0Qnnh0nZjgIgegOIEmsdIAkARQMtF8NFALQNGAKM2lpIAkgQIETMkIgeAOQunGevDAAIg1AAg");
	this.shape_18.setTransform(-0.9034,28.9487,0.4854,0.4854);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFEC00").s().p("ADIGVQAUgfAJgkQAJglgDgnQgIhfhJg+QhJg+heAIQhgAIg9BKQg+BJAIBfQAFA2AbAuIlmgFQAxg+BVgRQgbgBgWgFQgUgFgYgLQhXgpgghaQghhaAphWQAohXBaghQBaggBXApQAbAMATAQQAVARATAaQgRgbgIgaQgIgXgDgfQgIhgA+hJQA9hJBggIQBegIBJA+QBJA+AIBfQACAegDAYQgEAagMAdQAPgcARgTQAQgTAZgRQBOg2BeARQBeARA3BOQA2BPgRBeQgQBehPA3QgXAQgVAIQgXAKgcAEQAdAAAYAGQAWAGAaAMQAtAVAgAlQAfAlAOAug");
	this.shape_19.setTransform(4.4515,-15.6762);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC8721").s().p("A0cN1QAshNA3g4QhxhQhEh4QhDh3gMiHQgOilBGiVQA1hxBbhTQBahTB1gqQBbggBggEQBegDBcAaQATjgCfigQCgijDjgTQDigTC5CFQC2CDA5DZQCyhTC/AiQB6AWBoBCQBnBCBHBnQBfCIAOCkQALCIgvCCQgwCDhjBiQBPA3A6BLQA8BMAhBcQAMAiAJAmg");
	this.shape_20.setTransform(4.6135,-19.1376,0.4854,0.4854);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEC00").s().p("AAyDcQgggKgPgeQgIgSAAgVQgCAhgYAWQgYAWghgCQgigBgXgZQgWgYACgiQABgpAigXQgPAGgSgBQgigBgWgZQgXgYACghQABghAZgXQAYgWAiABQATABASAKQgQgLgKgSQgPgdAKggQAKggAdgQQAegPAgAKQAgAKAPAeQAIASAAATQACgUALgQQARgcAggHQAhgHAcASQAcARAIAhQAGAhgRAcQgLAQgOAJQARgHASABQAiABAWAZQAXAZgCAgQgBAhgZAXQgYAWgigBQgTgBgSgKQARALAJASQAPAdgKAgQgKAggdAQQgSAJgTAAQgMAAgNgEgAgkhHQgdAQgKAgQgLAfAQAdQAPAeAgAKQAfAKAdgQQAdgPAKggQALgfgQgdQgPgegggKQgNgEgLAAQgSAAgSAJg");
	this.shape_21.setTransform(-44.126,-53.996,0.4854,0.4854);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC8721").s().p("AAzD1QglgIgWgfQgPARgVAKQgWAJgYgBQgcgCgYgPQgYgQgMgYQgNgYABgdQABgUAGgQQgWgFgSgPQgTgOgLgUQgNgYABgcQADgrAggeQAWgVAjgFQgMgkAOgkQAPgjAigSQAjgSAlAJQAlAJAWAeQAVgYAhgIQArgJAkAXQAYAPANAZQALAUABAYQABAXgJAWQAhAHAWAYQAKAMAGALQANAYgBAcQgDArggAeQgYAWghAEQAMAkgOAkQgPAjgiASQgXAMgYAAQgMAAgNgDg");
	this.shape_22.setTransform(-44.126,-54.0009,0.4854,0.4854);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFEC00").s().p("AhEFOQgtgJgagnQgagoAJguQAGgeATgVQgfAigvADQguACgjgfQgjgfgCgvQgDgvAfgiQAngtA5AFQgWgGgTgRQgjgfgDgvQgCgvAfgjQAfgkAvgCQAvgEAjAgQAUASALAcQgIgcAGgcQAJguAngaQAngaAuAKQAuAJAaAnQAaAngKAvQgGAagRAWQATgTAagJQAtgPAqAVQAqAVAPAtQAPAtgVAqQgWApgsAPQgYAIgbgEQAaAIATASQAjAfADAvQADAwggAiQgfAkgvACQguADgkgfQgVgTgKgbQAIAbgGAcQgJAvgnAaQgcATghAAQgMAAgMgDgAg9heQgnAagKAuQgKAtAaAoQAaAnAuAJQAtAKAogaQAngaAJgvQAKgtgagnQgagngugJQgNgDgLAAQggAAgcATg");
	this.shape_23.setTransform(38.5638,-51.6148,0.4854,0.4854);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC8721").s().p("AhKFwQg2gLghgrQghgqACg2QggAFgfgJQghgJgYgWQgfgbgMgmQgMglAIgnQAIgnAagcQATgUAWgNQgVgagHggQgIggAHggQAIgmAageQApguA9gEQAugDAoAZQAUgyAvgaQAugaA2ALQA1ALAhArQAhAqgCA2QAvgHApAUQA3AcATA6QANAlgIAnQgHAggTAaQgUAbgdAQQAdAkADAvQABAXgEAQQgHAngbAdQgoAug+AEQgvADgngZQgUAygvAaQggASglAAQgPAAgPgDg");
	this.shape_24.setTransform(38.55,-51.6269,0.4854,0.4854);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C1A1C").s().p("Ajrh+QAzBCDWAOQBsAHBigHQgQAxjiBEIjfA4g");
	this.shape_25.setTransform(71.2323,-0.1125,0.4854,0.4854);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C1A1C").s().p("AACA+QjohLgOgzIBBAFQBOAEBHgBQDfgGA0hAIgND9Qhxgch1glg");
	this.shape_26.setTransform(-71.6368,-1.2047,0.4854,0.4854);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ArYjKIBCgKQDMgdCThHQCThHCWiOIBXhTIAgB1QAaBhAKBrQAHBUgDBvQBCAHA8ABQBlABCcgQIDJgUIiOCPQj9EAkjCOQkiCMlmAnIhMAIgAkXj3QieBNjWAeIAnKcQFaglEWiHQEXiHD0j3QhPAIg3ADQhHAFg8gCQhngBhggRQAFiHgGhXQgHh2gchmQidCVidBMg");
	this.shape_27.setTransform(91.9715,1.5864,0.4854,0.4854);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#BC1A28","#DA1421"],[0,1],-58.3,32.7,36.4,-59.2).s().p("AqUi4IAhgGQDSgeCXhKQCYhICZiTIAsgpIAQA6QAcBlAIByQAGBVgDB6QBKALBYABQBnABCegPIBkgLIhHBIQj3D7keCLQkdCKlfAlIgmAFg");
	this.shape_28.setTransform(90.5348,2.2773,0.4854,0.4854);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AJKJgQlkgvkfiUQkfiUj3kHIiKiSIDIAZQCkAUBdABQBDABA7gGQAAhwAJhTQAMhrAdhgIAjh0IBVBVQCSCRCRBLQCSBKDLAjIBBALIhCMqgAgYFcQETCOFZAuIA3qbQjVglichPQichQiYiZQgfBlgKB1QgIBVACCKQhdAPhrgBQhlgCikgUQDvD9ETCOg");
	this.shape_29.setTransform(-91.9392,-0.1732,0.4854,0.4854);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#BC1A28","#DA1421"],[0,1],59.3,29.3,-59.2,-29.3).s().p("AIzIuQlegukZiRQkbiSjxkAIhFhKIBkAMQChAVBjABQBVABBOgKQgBh6AJhVQALhxAehkIARg6IArArQCWCVCVBNQCVBNDSAkIAhAFIg9Lig");
	this.shape_30.setTransform(-90.5652,0.4807,0.4854,0.4854);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABIFZQg0gMgggrQgfAjgtAKQg7AOg0giQgigVgSgjQgPgdgBghQgCghANgeQgugKgggjQgMgNgKgSQgSgjACgnQACg9AtgpQAigfAvgHQgQgyAUgyQAUgyAwgZQAwgZA1AMQA0AMAfArQAWgYAegNQAegNAhACQAoABAiAWQAhAWASAiQASAjgCAoQAAAcgKAWQAgAIAaAUQAaAUAPAcQASAjgCAnQgDA9gtApQgiAgguAFQAQAzgUAyQgUAygwAZQghARgiAAQgRAAgRgEg");
	this.shape_31.setTransform(-44.1139,-54.0008,0.4854,0.4854);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A30QmIBiiuQAVglAQgXQhchdg3h2Qg3h3gLiCQgRjFBUixQA/iHBshiQBshjCLgyQCag4CjAQQA8jhCxiWQCziXDrgUQAmgDAhAAQC9ADCmBeQAPgeAXgaQAkgoAvgXQAwgXA1gEQAYAAAXACQAmgkAwgTQAxgUA0ABQAYAAAaAFQBCAOAzAqQAyApAZA8QAYAHATAKQAwAYAiAoQAjAoARAzQAWBCgOBHQgMA6gkAwQAEARADAUQCbBTBnCTQBxCiARDEQALCDgjB/QgiB+hMBrQB2BzA4CcQARAvAJAoIAhCTgAwMilQhfAhhJBEQhJBCgrBbQg5B7ALCEQAKBuA3BhQA3BgBaBBIBxBQIghAiMAk2AAdQg3hbhZg9Ih1hRIBlhlQBRhPAmhpQAnhpgKhwQgKiEhNhuQhZiAiOg3IhqgoIAkhuIABgIQAAgJgHgIIhZhvIB9hDQANgIADgNQABgIgCgHQgEgMgLgFQgIgEgJABIiNAWIAFiPQAAgKgGgIQgGgJgLgCQgLgCgJAFQgJAFgEAKIg0CFIh5hMQgJgEgIAAQgMABgIAJQgGAGgBAIQgDAOAJAKIBVBtIh4BDIheBRIhOhXQhGhPhggsQhggthngBQgQAAghACQi3AQiBCBQiBCBgQC4IgMCOIiJgmQhCgSg/gBIgGAAQhXAAhPAeg");
	this.shape_32.setTransform(5.353,-22.0292,0.4854,0.4854);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A0cOyQAshNA3g4QhxhQhEh4QhDh3gMiHQgOilBGiWQA1hwBbhTQBahTB1gqQBbggBggEQBegDBcAaQATjgCfigQCgijDjgTQCTgNCKA5QCEA2BgBsQAOgMALgGQgVgagHggQgIgfAHggQAIgmAageQApguA9gEQAugDAoAZQAUgyAvgaQAvgbA2ALQA1ALAhArQAhArgCA1QAvgHApAVQA3AbATA7QANAlgIAnQgHAggTAaQgUAbgdAQQAdAlADAvQABAWgEARIgEAQQBXAhBIA5QBJA5A2BOQBfCIAOCkQALCIgvCCQgwCDhjBiQBPA3A6BLQA8BMAhBcQAMAiAJAmg");
	this.shape_33.setTransform(4.6135,-22.0829,0.4854,0.4854);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logospecialissimi, new cjs.Rectangle(-127.3,-75.4,254.7,137.10000000000002), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEB34").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-41.2281,-3.1817,0.1735,0.1735);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF8623").s().p("AiuJsQhKhAgRhgQg3AVg7gFQg8gEg1gfQg/glgkhAQgig+AAhHQAAhIAjg/QAZgrAjgdQgugngZg2QgYg3AAg7QAAhHAjg/QAbguAqghQAqghA0gOQBTgWBPAeQARhgBKhAQBMhABiAAQBiAABMBAQBKBAAQBgQBRgeBRAWQA0APAqAfQArAiAaAuQAkA+AABIQAAA8gZA2QgZA3gvAmQBDA3AWBSQAJAlAAAhQAABIgkA/QgbAvgqAhQgrAfg0APQhSAWhQgeQgQBghLBAQhLBAhiAAQhiAAhMhAg");
	this.shape_1.setTransform(-41.2194,-3.1817,0.1735,0.1735);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E01021").s().p("AklFQQiHiHABjOQgBjBCHiHQCFiHC+AAQAkAAAhAJQAuALAZAaIAAgdIC5AAIARAEQARAJAAAUIADEXIjeAAQgGg9hEgYQgVgIgZgDIgUgCQhigBhABGQg8BCgBBhQAABlA4BAQA/BGB1AAQBDAAAvgpQAlgfAhhBIDJCBQg+BuhtBEQhvBFh0AAQjAAAiDiFg");
	this.shape_2.setTransform(-21.1298,-3.2164,0.1735,0.1735);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E01021").s().p("Am2HUIAAitQAAgXAngLQAUgFATAAIAAoGIhOAAIAAioQAAgZAngIQAUgEATAAIF8AAQC5ABB3CJQByCEAADFQAADGhyCFQh3CJi6AAgAiDDkICVAAQBZgBAyhEQAvg+gBhkQAAhlgug/QgyhEhZAAIiVAAg");
	this.shape_3.setTransform(44.5573,-3.2429,0.1735,0.1735);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E01021").s().p("AByHVIAAitIAIgUQAQgTAnAAIgVguIk5AAIgWAuQAoAAAQATQAIAKAAAKIAACtImBAAIAAitIAJgUQAPgTAnAAIDpoGIhBAAIAAioIAKgTQATgUAxAAIE/AAIEzLVIAhAFQAhAJgBAZIAACtgAhlAPIDKAAIhlj5g");
	this.shape_4.setTransform(27.127,-3.2641,0.1735,0.1735);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E01021").s().p("AChHVIlAnUIAAEAQAxAAAUAUQAKAJAAAKIAACtImFAAIAAitQAAgYAogKQAUgFATAAIAAoGIhPAAIAAioIAMgTQAVgUAuAAIDnAAIFAHjIAAkUIhMAAIAAioIAJgTQATgUAwAAIDnAAIAmAEQAmAKABAZQABApgBB/IhNAAIAALag");
	this.shape_5.setTransform(10.3408,-3.2728,0.1735,0.1735);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E01021").s().p("AlDFLQiGiJAAjCQAAjBCGiJQCHiJC8AAQC+AACGCJQCGCJAADBQAADCiGCJQiGCJi+AAQi8AAiHiJgAiQinQgzBAAABkQAABjAzBAQA3BEBaAAQBaAAAyhEQAug/AAhkQAAhlgug/QgyhDhaAAQhbAAg2BDg");
	this.shape_6.setTransform(-5.7556,-3.2554,0.1735,0.1735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A9fFYIAAqvMA6/AAAIAAKvg");
	this.shape_7.setTransform(0.025,12.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-188.8,-22.3,377.70000000000005,68.8), null);


(lib.fiore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.15,-3.15,0.5453,0.5453,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fiore, new cjs.Rectangle(-30.8,-33.9,61.6,67.8), null);


(lib.carta2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.carta2();
	this.instance.parent = this;
	this.instance.setTransform(-30,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carta2_1, new cjs.Rectangle(-30,-19,60,38), null);


(lib.carta1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.carta1();
	this.instance.parent = this;
	this.instance.setTransform(-30,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carta1_1, new cjs.Rectangle(-30,-19,60,38), null);


(lib.campanella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.campana();
	this.instance.parent = this;
	this.instance.setTransform(-201,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.campanella, new cjs.Rectangle(-201,-111,413,265), null);


(lib.bollo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA5IgFgYIgdAAIgFAYIgYAAIAdhxIAcAAIAfBxgAALAOIgLgyIgKAyIAVAAg");
	this.shape.setTransform(42.6,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_1.setTransform(36.1,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_2.setTransform(30.65,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_3.setTransform(24.6,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeArQgHgNAAgeQAAgdAHgNQAIgRAXAAQAWABAIAOQAGAJAAASIgXAAQAAgNgDgGQgEgFgHgBQgIAAgDAKQgDAKAAAYQAAAYAEAJQADAIAHAAQAHAAADgGQAEgGAAgSIAYAAQAAAWgHALQgJANgVAAQgXAAgIgQg");
	this.shape_4.setTransform(18.325,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA5IAAhxIAWAAIAABxg");
	this.shape_5.setTransform(11.95,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAaIAAgFIAXAAIAAAEQAAAIADAEQAEAFAHABQAGAAAEgEQAEgEAAgHQAAgHgFgEQgDgEgLgEQgRgGgGgGQgIgIAAgOQAAgRAKgIQAKgJAQAAQAPAAAJAHQALAJgBAPIAAADIgVAAQAAgQgNgBQgMAAAAAOQgBAGADADQADAEAGACIARAIQANAFAEAHQAFAGAAALQAAAkgngBQgkABAAgig");
	this.shape_6.setTransform(5.75,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAfhxIAcAAIAdBxgAALAOIgLgyIgKAyIAVAAg");
	this.shape_7.setTransform(-6.6,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_8.setTransform(-14.45,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOA5QgDgEAAgIIgBgWQAAgOgMAAIgNAAIAAAwIgXAAIAAhxIAqAAQAOAAAIAHQAIAIAAAOQAAAZgTADQALABAEAIQADAGABAUIABANQABAFADACIAAABgAgPgHIAKAAQAQAAAAgRQAAgQgPAAIgLAAg");
	this.shape_9.setTransform(-26.425,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAASIgmAAIAAAeIAqAAIAAATg");
	this.shape_10.setTransform(-34.675,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA5IAAhxIAoAAQAQAAAIALQAHAIAAAPQAAARgKAIQgJAIgRAAIgMAAIAAAugAgMgFIALAAQAOABAAgSQAAgSgPAAIgKAAg");
	this.shape_11.setTransform(-42.675,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfArQgHgNAAgeQAAgdAHgNQAIgRAXAAQAYAAAIARQAHANAAAdQAAAegHANQgIAQgYAAQgXAAgIgQgAgMggQgDAJAAAXQAAAYADAIQADALAJAAQAKAAADgLQADgIAAgYQAAgXgDgJQgDgKgKAAQgJAAgDAKg");
	this.shape_12.setTransform(18.9,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglA5IAAhxIAlAAQAWAAAJAPQAHAMAAAdQAAAdgIAOQgJAOgVAAgAgOAoIALAAQAKAAAEgJQAEgIAAgXQAAgVgDgJQgEgJgMgBIgKAAg");
	this.shape_13.setTransform(9.975,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_14.setTransform(3.25,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_15.setTransform(-2.2,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgyIgKAyIAVAAg");
	this.shape_16.setTransform(-10.6,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA5IgahxIAYAAIAQBTIAAAAIARhTIAYAAIgaBxg");
	this.shape_17.setTransform(-19.2,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#D9792A","#94100E"],[0,1],34,74.3,-33.9,-74.3).s().p("AgZMrIgggkQgJgKgNgBQgNgCgLAIIgnAdQgNAJgPgDQgPgDgIgOIgYgqQgGgLgNgFQgNgEgMAGIgsAUQgOAGgOgGQgOgHgFgOIgPgvQgEgMgMgHQgLgHgNADIgwAKQgPAEgMgKQgNgJgBgPIgFgwQgCgNgKgJQgKgJgNAAIgwAAQgQAAgKgMQgKgLABgPIAFgxQACgNgIgLQgIgKgNgDIgwgKQgPgDgHgOQgIgNAFgPIAPguQAEgNgFgMQgGgMgMgFIgsgUQgPgGgEgPQgFgPAIgNIAYgqQAHgLgDgNQgDgNgLgIIgngdQgMgJgCgPQgCgPALgMIAggkQAJgKAAgNQAAgMgJgKIgggkQgLgMACgPQACgPAMgJIAngdQALgIADgNQADgNgHgLIgYgqQgIgOAFgOQAEgPAPgGIAsgUQAMgFAGgMQAFgNgEgMIgPguQgFgPAIgNQAHgOAPgDIAwgKQANgDAIgKQAIgLgCgOIgFgwQgBgPAKgMQAKgLAQAAIAwAAQANAAAKgJQAKgJACgNIAFgwQABgQANgJQAMgJAPADIAwALQANACALgGQAMgHAEgNIAPguQAFgOAOgHQAOgGAOAGIAsAUQAMAGANgFQANgEAGgLIAYgqQAIgOAPgDQAPgDANAJIAnAdQALAIANgCQANgBAJgKIAggkQALgMAOAAQAQAAAKAMIAgAkQAJAKAOABQANACAKgIIAogdQAMgJAPADQAPADAIAOIAYAqQAHALANAEQAMAFAMgGIAtgUQAOgGAOAGQAOAHAFAOIAPAuQAEANALAHQAMAGANgCIAvgLQAPgDANAJQAMAJACAQIAFAwQABANAKAJQAKAJANAAIAxAAQAPAAALALQAKAMgCAPIgFAwQgBAOAIALQAHAKANADIAwAKQAPADAIAOQAHANgEAPIgPAuQgFAMAGANQAFAMANAFIAsAUQAOAGAFAPQAEAOgHAOIgZAqQgGALACANQADANALAIIAnAdQANAJABAPQACAPgKAMIghAkQgJAKAAAMQAAANAJAKIAhAkQAKAMgCAPQgBAPgNAJIgnAdQgLAIgDANQgCANAGALIAZAqQAHANgEAPQgFAPgOAGIgsAUQgNAFgFAMQgGAMAFANIAPAuQAEAPgHANQgIAOgPADIgwAKQgNADgHAKQgIALABANIAFAxQACAPgKALQgLAMgPAAIgxAAQgNAAgKAJQgKAJgBANIgFAwQgCAPgMAJQgNAKgPgEIgvgKQgNgDgMAHQgLAHgEAMIgPAvQgFAOgOAHQgOAGgOgGIgtgUQgMgGgMAEQgNAFgHALIgYAqQgIAOgPADQgPADgMgJIgogdQgKgIgNACQgOABgJAKIggAkQgKAMgQAAQgOAAgLgMg");
	this.shape_18.setTransform(-0.0246,-21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.bollo, new cjs.Rectangle(-81.8,-103.3,163.6,164.6), null);


(lib.batacchio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFE02C","#A05324","#6B3716"],[0,0.318,0.886,1],5.7,26,0,5.7,26,23.6).s().p("AhsF8QgtgtAAhAQAAgrBLo+QAAggAXgXQAXgXAgAAIAAAAQAgAAAYAXQAWAXAAAgQBMJCAAAnQAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(0,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.batacchio, new cjs.Rectangle(-15.4,-7,30.8,85), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{lamp:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		var tl = this;
		tl.stop();
		var delay = 500;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(52).call(this.frame_53).wait(1));

	// Livello 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BlQgQgUAAgmIAAhWQAAgmAQgUQAQgSAlgBQAlABAQASQAQAUABAmIAABWQgBAmgQAUQgQATglABQglgBgQgTgAgQhNQgDAHAAAPIAABuQAAAOADAJQAFAIALAAQAMAAAEgJQAEgHAAgPIAAhuQAAgPgEgHQgEgJgMABQgLgBgFAJg");
	this.shape.setTransform(122.55,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeB1IgziAIAACAIgpAAIAAjpIAiAAIAzB4IAAh4IAoAAIAADpg");
	this.shape_1.setTransform(106.175,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_2.setTransform(94.025,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWB1IAAjGIgmAAIAAgjIB5AAIAAAjIglAAIAADGg");
	this.shape_3.setTransform(83.5,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeB1IgziAIAACAIgpAAIAAjpIAiAAIAzB4IAAh4IAoAAIAADpg");
	this.shape_4.setTransform(69.125,-0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcB1IgJgzIgkAAIgJAzIgtAAIAujpIA0AAIAtDpgAAOAkIgNhdIgOBdIAbAAg");
	this.shape_5.setTransform(53.3,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyB1IAAjpIAwAAIAADJIA1AAIAAAgg");
	this.shape_6.setTransform(39.85,-0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BlQgQgUgBgmIAAhWQABgmAQgUQAQgSAkgBQAlABARASQAQAUAAAmIAABWQAAAmgQAUQgRATglABQgkgBgQgTgAgQhNQgDAHAAAPIAABuQAAAOADAJQAEAIAMAAQAMAAAFgJQADgHAAgPIAAhuQAAgPgDgHQgFgJgMABQgLgBgFAJg");
	this.shape_7.setTransform(24.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYB1IgsjpIApAAIAbChIAaihIArAAIgsDpg");
	this.shape_8.setTransform(8.725,-0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB1IAAjpIAxAAIAADJIA2AAIAAAgg");
	this.shape_9.setTransform(-11.75,-0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_10.setTransform(-22.775,-0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcB1IgJgzIgkAAIgJAzIgtAAIAtjpIA0AAIAuDpgAAPAkIgPhdIgMBdIAbAAg");
	this.shape_11.setTransform(-42.05,-0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_12.setTransform(-53.975,-0.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzB1IAAjpIAxAAIAADJIA2AAIAAAgg");
	this.shape_13.setTransform(-63.85,-0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BkQgOgVAAgnIAAhPQAAgoAPgUQAPgVAlAAQAlAAAPASQAQASAAAhIAAANIgvAAIAAgQQAAgQgEgIQgDgHgNAAQgMAAgEAIQgDAJgBARIAABmQABARAEAJQAEAJAMAAQANAAAFgJQAFgKAAgRIAAgZIgXAAIAAgcIBDAAIAAB4IggAAIgDgVQgLAYgbABQgigBgPgUg");
	this.shape_14.setTransform(-79.05,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BlQgQgUgBgmIAAhWQABgmAQgUQAPgSAlgBQAlABARASQAPAUAAAmIAABWQAAAmgPAUQgRATglABQglgBgPgTgAgPhNQgEAHgBAPIAABuQABAOAEAJQADAIAMAAQAMAAAFgJQADgHAAgPIAAhuQAAgPgDgHQgFgJgMABQgLgBgEAJg");
	this.shape_15.setTransform(-95.65,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxB1IAAjpIBjAAIAAAhIgzAAIAAA/IArAAIAAAgIgrAAIAABpg");
	this.shape_16.setTransform(-109.575,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBnQgQgSgBgmIAogHQABAWAGALQAFALALAAQAIAAAEgGQADgFABgIQAAgPgHgJQgGgKgMgLIgZgVQgOgNgIgNQgHgNAAgUQAAgdARgPQARgPAdgBQAgABAMARQAMATACAcIgpAGQgBgSgEgJQgDgJgKAAQgIAAgEAGQgEAGgBAIQAAAMAGAIQAFAIAJAJIAYAVQASAPAJAQQAJAQAAAWQAAARgHANQgIANgNAIQgOAIgSAAQgfgBgRgRg");
	this.shape_17.setTransform(-123.35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(54));

	// Livello_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0vFBQhGAAgygxQgvgwgChDIAAk0QAAhGAxgyQAygxBGAAMApfAAAQBGAAAxAxQAyAyAABGIAAE0QgBBDgxAwQgwAxhHAAg");
	mask.setTransform(0,-0.025);

	// Livello_7
	this.instance = new lib.fiore();
	this.instance.parent = this;
	this.instance.setTransform(-205.75,-14.2,0.74,0.74);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({rotation:-720,x:175},52).wait(1));

	// Livello_6
	this.instance_1 = new lib.fiore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177.45,28.25,0.74,0.74);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:720,x:203.3},52).wait(1));

	// Livello_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#D9792A","#94100E"],[0,1],-124.4,-124.4,124.5,124.5).s().p("A7fInIAAxNMA2/AAAIAARNg");
	this.shape_18.setTransform(0.025,0.025);

	var maskedShapeInstanceList = [this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(54));

	// Livello 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.4)").s().p("A0vFBQhGAAgygxQgvgwgChDIAAk0QAAhGAxgyQAygxBGAAMApfAAAQBGAAAxAxQAyAyAABGIAAE0QgBBDgxAwQgwAxhHAAg");
	this.shape_19.setTransform(0,3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-32.1,299.4,68.2);


(lib.campanellaanim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{suona:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		var tl=this;
		tl.stop();
		var delay = 200;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ao5HuQjthQAAhyQgBhyDshSQDshSFPgBQFNgCDtBPQDtBQAAByQABByjsBSQjtBSlOACIgNAAQlFAAjohOg");
	var mask_graphics_1 = new cjs.Graphics().p("Ao5HuQjthQAAhyQgBhyDshSQDshSFPgBQFNgCDtBPQDtBQAAByQABByjsBSQjtBSlOACIgNAAQlFAAjohOg");
	var mask_graphics_2 = new cjs.Graphics().p("AoaIuQj1gwgQhxQgQhxDghwQDfhwFLguQFKgtD2AuQD1AvAQByQAQBxjgBwQjfBxlLAtQiiAXiNAAQiUAAh9gYg");
	var mask_graphics_3 = new cjs.Graphics().p("AnxJUQj6gPgehtQgfhvDPiMQDOiNFChZQFBhZD6APQD6AOAeBtQAfBujPCNQjPCNlBBZQkUBNjeAAQgmAAgjgCg");
	var mask_graphics_4 = new cjs.Graphics().p("AgRJGQlPgIjohYQjnhYAHh0QAIh1DyhNQDyhMFOAHQFOAIDpBYQDnBYgHB0QgIB1jyBMQjcBHkoAAIg8gBg");
	var mask_graphics_5 = new cjs.Graphics().p("AhuHqQk/hojBiYQjBiYAuhtQAuhuECgEQECgDE+BoQE/BoDBCXQDBCYguBuQguBukCAEIgTAAQj8AAkxhlg");
	var mask_graphics_6 = new cjs.Graphics().p("AgSJEQlPgIjnhZQjohYAIh0QAIh1DzhMQDyhLFOAIQFPAJDnBYQDoBYgIB1QgIB0jzBMQjaBEkkAAIhCgBg");
	var mask_graphics_7 = new cjs.Graphics().p("An0JRQj5gQgdhuQgehuDQiLQDQiMFChWQFChYD5AQQD5APAdBtQAeBujQCLQjQCNlCBXQkQBKjdAAQgoAAgmgCg");
	var mask_graphics_8 = new cjs.Graphics().p("AobIsQj1gvgPhxQgPhxDfhwQDghvFMgtQFKgsD1AuQD1AwAPBxQAPBxjgBwQjgBwlLAtQifAViMAAQiVAAh/gZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ao5HuQjthQAAhyQgBhyDshSQDshSFPgBQFNgCDtBPQDtBQAAByQABByjsBSQjtBSlOACIgNAAQlFAAjohOg");
	var mask_graphics_14 = new cjs.Graphics().p("An3JUQj2gMgahuQgahuDRiPQDQiPFChbQFAhdD2AMQD2ALAaBtQAaBujRCPQjRCPlBBdQkbBSjhAAIg6gBg");
	var mask_graphics_15 = new cjs.Graphics().p("AgTJDQlOgKjnhZQjnhZAJh0QAIh0DyhMQDzhLFNAJQFOAJDnBZQDnBZgJB1QgIB0jyBLQjYBEkhAAIhHgBg");
	var mask_graphics_16 = new cjs.Graphics().p("AhqHuQk8hvi/ieQjAidAshvQAshwD/gBQD+gBE7BvQE7BtDBCeQC/CdgsBwQgsBwj/ABIgFAAQj9AAk3htg");
	var mask_graphics_17 = new cjs.Graphics().p("AgSJFQlPgKjnhaQjmhZAIh1QAIh1DyhLQDyhMFNAKQFOAKDoBaQDmBZgIB1QgIB1jyBLQjWBDkeAAIhLgBg");
	var mask_graphics_18 = new cjs.Graphics().p("An2JVQj3gNgbhuQgbhvDRiOQDQiPFChbQFAhbD3ANQD3ANAbBuQAaBujQCOQjRCQlBBbQkXBQjgAAQghAAgfgCg");
	var mask_graphics_19 = new cjs.Graphics().p("AgUJAQlOgMjmhbQjnhaAJh0QAJh0DyhJQDzhJFNAMQFOAMDnBaQDmBagJB0QgJB0jyBJQjRBAkUAAQgtAAgugCg");
	var mask_graphics_20 = new cjs.Graphics().p("AHMJUQj/gDk5hzQk6hyi+ifQi/ifAthtQAuhuD9AEQD+ADE6BzQE5BxC/CfQC/CegtBvQgsBqjwAAIgPAAg");
	var mask_graphics_21 = new cjs.Graphics().p("Ag1InQlJg5jZh6Qjah5AWhyQAXhzD4gnQD5goFJA5QFJA4DZB6QDaB5gWByQgXBzj4AoQhoARh1AAQilAAjAgig");
	var mask_graphics_22 = new cjs.Graphics().p("Ao5HuQjthQAAhyQgBhyDshSQDshSFPgBQFNgCDtBPQDtBQAAByQABByjsBSQjtBSlOACIgNAAQlFAAjohOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-6.3,y:57.1766}).wait(1).to({graphics:mask_graphics_1,x:-6.3,y:57.1766}).wait(1).to({graphics:mask_graphics_2,x:5.2628,y:58.1944}).wait(1).to({graphics:mask_graphics_3,x:16.7932,y:59.8005}).wait(1).to({graphics:mask_graphics_4,x:-12.4272,y:58.2569}).wait(1).to({graphics:mask_graphics_5,x:-41.7278,y:59.0846}).wait(1).to({graphics:mask_graphics_6,x:-12.772,y:58.1149}).wait(1).to({graphics:mask_graphics_7,x:15.885,y:59.5166}).wait(1).to({graphics:mask_graphics_8,x:4.8527,y:58.134}).wait(1).to({graphics:mask_graphics_9,x:-6.3,y:57.1766}).wait(5).to({graphics:mask_graphics_14,x:13.6323,y:59.6982}).wait(1).to({graphics:mask_graphics_15,x:-13.2618,y:57.9752}).wait(1).to({graphics:mask_graphics_16,x:-40.5482,y:60.3099}).wait(1).to({graphics:mask_graphics_17,x:-12.9376,y:58.2313}).wait(1).to({graphics:mask_graphics_18,x:14.1023,y:59.9109}).wait(1).to({graphics:mask_graphics_19,x:-13.5745,y:57.769}).wait(1).to({graphics:mask_graphics_20,x:-41.1269,y:59.6006}).wait(1).to({graphics:mask_graphics_21,x:-23.5975,y:58.4521}).wait(1).to({graphics:mask_graphics_22,x:-6.3,y:57.1766}).wait(1));

	// batacchio
	this.instance = new lib.batacchio();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,1.31,1.31);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:22.2385,x:-0.05,y:-0.55},2,cjs.Ease.quadInOut).to({rotation:-6.4628,x:0,y:-0.7},2,cjs.Ease.quadInOut).to({rotation:21.7801,x:-0.05,y:-0.9},2,cjs.Ease.quadInOut).to({rotation:0,x:0,y:-0.5},2,cjs.Ease.quadInOut).wait(5).to({regX:-0.1,regY:-0.1,rotation:22.5398,x:-0.25,y:-1.35},0).to({scaleX:1.3099,scaleY:1.3099,rotation:-6.2031,x:-0.45,y:-1.55},2,cjs.Ease.quadInOut).to({rotation:22.771,x:-0.3},2,cjs.Ease.quadInOut).to({rotation:-6.7028,x:-0.25,y:-0.75},2,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1.31,scaleY:1.31,rotation:0,x:0,y:-0.5},2,cjs.Ease.quadInOut).wait(1));

	// campanella
	this.instance_1 = new lib.campanella();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-13.6944},2,cjs.Ease.quadInOut).to({rotation:18.2395,x:-5.45},2,cjs.Ease.quadInOut).to({rotation:-13.6944,x:-5.5},2,cjs.Ease.quadInOut).to({rotation:0},2,cjs.Ease.quadInOut).wait(5).to({rotation:-13.6944},0).to({rotation:18.2395,x:-5.45},2,cjs.Ease.quadInOut).to({rotation:-13.6944,x:-5.5},2,cjs.Ease.quadInOut).to({rotation:18.2395,x:-5.45},2,cjs.Ease.quadInOut).to({rotation:0,x:-5.5},2,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.5,-189.8,481.4,380.9);


(lib.baseprezzo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2
	this.instance = new lib.stella();
	this.instance.parent = this;
	this.instance.setTransform(-39.55,29.6,0.0863,0.0863,75.0026,0,0,0.6,0.1);
	this.instance.alpha = 0.3594;

	this.instance_1 = new lib.stella();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37.65,12.3,0.0361,0.0361,29.9913,0,0,0.7,1.2);
	this.instance_1.alpha = 0.8008;

	this.instance_2 = new lib.stella();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.95,29.6,0.0361,0.0361,-30.0002);
	this.instance_2.alpha = 0.8008;

	this.instance_3 = new lib.stella();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.65,20.3,0.1497,0.1446,-90,0,0,0.4,-0.4);
	this.instance_3.alpha = 0.2188;

	this.instance_4 = new lib.stella();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-76.7,38.7,0.1649,0.1649,104.9984,0,0,0.3,-0.1);
	this.instance_4.alpha = 0.3281;

	this.instance_5 = new lib.stella();
	this.instance_5.parent = this;
	this.instance_5.setTransform(64.9,-38.35,0.1649,0.1649,104.9984,0,0,0.3,-0.1);
	this.instance_5.alpha = 0.3594;

	this.instance_6 = new lib.stella();
	this.instance_6.parent = this;
	this.instance_6.setTransform(47,-77.8,0.1068,0.1068,45);
	this.instance_6.alpha = 0.3008;

	this.instance_7 = new lib.stella();
	this.instance_7.parent = this;
	this.instance_7.setTransform(78,1.1,0.1068,0.1068,-29.9947,0,0,0.2,-0.4);
	this.instance_7.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1C7C42","#19331A"],[0,1],-0.1,-76.7,-0.1,76.7).s().rr(-76.7,-76.7,153.4,153.4,17);
	this.shape.setTransform(5.8288,-7.7547,1.075,0.899);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.baseprezzo, new cjs.Rectangle(-132.9,-104.8,254,199.7), null);


(lib.prodottoanim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
		
		var tl=this;
		tl.stop();
		var delay = 1000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_27 = function() {
		var tl=this;
		tl.stop();
		var delay = 2000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_28 = function() {
		this.stop();
		
		this.parent.gotoAndPlay("volantino");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(26).call(this.frame_27).wait(1).call(this.frame_28).wait(1));

	// prodotto
	this.instance = new lib.prodotto_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.05,-13.35,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:65.55},0).to({x:-15.05},8,cjs.Ease.backInOut).wait(20));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AiWMtIAA5ZIEtAAIAAZZg");
	var mask_graphics_10 = new cjs.Graphics().p("Am0MtIAA5ZINpAAIAAZZg");
	var mask_graphics_11 = new cjs.Graphics().p("AokMtIAA5ZIRJAAIAAZZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ap3MtIAA5ZITvAAIAAZZg");
	var mask_graphics_13 = new cjs.Graphics().p("Aq5MtIAA5ZIVzAAIAAZZg");
	var mask_graphics_14 = new cjs.Graphics().p("ArwMtIAA5ZIXhAAIAAZZg");
	var mask_graphics_15 = new cjs.Graphics().p("AseMtIAA5ZIY9AAIAAZZg");
	var mask_graphics_16 = new cjs.Graphics().p("AtGMtIAA5ZIaNAAIAAZZg");
	var mask_graphics_17 = new cjs.Graphics().p("AtpMtIAA5ZIbTAAIAAZZg");
	var mask_graphics_18 = new cjs.Graphics().p("AuHMtIAA5ZIcPAAIAAZZg");
	var mask_graphics_19 = new cjs.Graphics().p("AuhMtIAA5ZIdDAAIAAZZg");
	var mask_graphics_20 = new cjs.Graphics().p("Au3MtIAA5ZIdvAAIAAZZg");
	var mask_graphics_21 = new cjs.Graphics().p("AvKMtIAA5ZIeVAAIAAZZg");
	var mask_graphics_22 = new cjs.Graphics().p("AvZMtIAA5ZIe0AAIAAZZg");
	var mask_graphics_23 = new cjs.Graphics().p("AvmMtIAA5ZIfNAAIAAZZg");
	var mask_graphics_24 = new cjs.Graphics().p("AvvMtIAA5ZIfgAAIAAZZg");
	var mask_graphics_25 = new cjs.Graphics().p("Av2MtIAA5ZIftAAIAAZZg");
	var mask_graphics_26 = new cjs.Graphics().p("Av6MtIAA5ZIf1AAIAAZZg");
	var mask_graphics_27 = new cjs.Graphics().p("Av8MtIAA5ZIf5AAIAAZZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:3.6,y:0.275}).wait(1).to({graphics:mask_graphics_10,x:32.175,y:0.275}).wait(1).to({graphics:mask_graphics_11,x:43.425,y:0.275}).wait(1).to({graphics:mask_graphics_12,x:51.65,y:0.275}).wait(1).to({graphics:mask_graphics_13,x:58.225,y:0.275}).wait(1).to({graphics:mask_graphics_14,x:63.725,y:0.275}).wait(1).to({graphics:mask_graphics_15,x:68.375,y:0.275}).wait(1).to({graphics:mask_graphics_16,x:72.4,y:0.275}).wait(1).to({graphics:mask_graphics_17,x:75.875,y:0.275}).wait(1).to({graphics:mask_graphics_18,x:78.875,y:0.275}).wait(1).to({graphics:mask_graphics_19,x:81.475,y:0.275}).wait(1).to({graphics:mask_graphics_20,x:83.675,y:0.275}).wait(1).to({graphics:mask_graphics_21,x:85.55,y:0.275}).wait(1).to({graphics:mask_graphics_22,x:87.1,y:0.275}).wait(1).to({graphics:mask_graphics_23,x:88.35,y:0.275}).wait(1).to({graphics:mask_graphics_24,x:89.3,y:0.275}).wait(1).to({graphics:mask_graphics_25,x:89.975,y:0.275}).wait(1).to({graphics:mask_graphics_26,x:90.4,y:0.275}).wait(1).to({graphics:mask_graphics_27,x:90.525,y:0.275}).wait(2));

	// retro
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAiIgBgBIAAhBIABgBIAbAAIABABIAAAHIgBABIgRAAIAAABIAAASIAAABIAPAAIABABIAAAGIgBACIgPAAIAAAAIAAATIAAABIARAAIABABIAAAHIgBABg");
	this.shape.setTransform(125.725,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAiIgBAAIgIgcIgBAAIgEAAIAAABIAAAaIgBABIgJAAIgBgBIAAhBIABgBIAOAAQASAAAAAUQAAANgIADIAKAeQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAgGgXIAAAUIAAABIAEAAQADAAACgDQACgCAAgGQAAgFgCgDQgCgDgDAAIgEAAIAAABg");
	this.shape_1.setTransform(121.6833,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAiIgBgBIAAhBIABgBIAbAAIABABIAAAHIgBABIgRAAIAAABIAAASIAAABIAPAAIABABIAAAGIgBACIgPAAIAAAAIAAATIAAABIARAAIABABIAAAHIgBABg");
	this.shape_2.setTransform(117.575,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAiIgBgBIgOhBIABgBIAJAAIABABIAHAtIAAAAIAIgtIABgBIAIAAIABABIgNBBIgBABg");
	this.shape_3.setTransform(113.55,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAiIgBgBIgDgOIgMAAIgDAOIgCABIgIAAIgBgBIAPhBIABgBIAHAAIABABIAPBBIgBABgAAFAKIgEgYIgBAAIgEAYIAJAAg");
	this.shape_4.setTransform(109.45,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAiIgBgBIgDgOIgNAAIgCAOIgBABIgJAAIgBgBIAPhBIABgBIAHAAIABABIAPBBIgBABgAAFAKIgEgYIgBAAIgEAYIAJAAg");
	this.shape_5.setTransform(103.35,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAiIgBgBIAAg4IgBgBIgKAAIgBgBIAAgHIABgBIAfAAIABABIAAAHIgBABIgKAAIgBABIAAA4IgBABg");
	this.shape_6.setTransform(99.375,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQARIABgBIAIgBIABABQABAKAFAAQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACgDAAgFQAAgFgCgDQgBgDgEgBIgDgCQgHgCgDgDQgCgFAAgIQAAgSAPAAQAQAAABAQIgBACIgIABIgBgBQgBgJgGAAQgFABAAAHIABAIQACACADABIAEABQAHAEACACQADAFAAAJQAAAKgEAEQgEAGgJAAQgQAAAAgSg");
	this.shape_7.setTransform(95.525,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKAiIgBgBIgCgOIgNAAIgDAOIAAABIgJAAIgBgBIAPhBIABgBIAIAAIABABIAOBBIgBABgAAFAKIgFgYIAAAAIgEAYIAJAAg");
	this.shape_8.setTransform(91.4,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAiIgBgBIAAhBIABgBIAOAAQAJAAAEAFQAFAEgBAIQAAAMgIAEQAJABAAANQAAALgFAEQgEAFgKAAgAgFAEIAAAUIAAABIADAAQAFgBACgCQABgCAAgGQAAgGgBgCQgCgCgFgBIgDAAIAAABgAgFgXIAAASIAAAAIADAAQAEAAACgCQACgCgBgFQABgGgCgBQgCgDgEAAIgDAAIAAABg");
	this.shape_9.setTransform(87.3,50);

	this.instance_1 = new lib.carta1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.75,48.9,0.4998,0.4998,0,0,0,0.9,1);

	this.instance_2 = new lib.carta2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.8,40.35,0.4998,0.4998,0,0,0,0.8,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAeQgEgFAAgIQAAgKAEgFQAEgEAKgCIAJgDQAHgCAAgGQAAgJgIAAQgIAAAAAJIAAACIgQAAIAAgBQAAgWAYAAQAPAAAFAGQAFAFAAAKIAAAkQAAAJACAFIgRAAIgCgIQgDAGgFACQgCACgHAAQgJAAgEgHgAAAADQgJACAAAKQAAAJAHAAQADAAADgCQAEgDAAgFIAAgOQgEACgEABg");
	this.shape_10.setTransform(131.575,23.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAeQgGgFAAgLIAAgCIAQAAIAAACQAAAKAJAAQAJAAAAgIQAAgFgHgDIgLgEQgPgFAAgOQAAgJAGgGQAGgGANAAQAXAAAAAUIAAADIgQAAQAAgLgIAAQgCAAgDACQgCACAAAEQAAAFAHADIAKAEQAJACADAEQAEAFAAAIQAAAKgHAGQgHAGgMAAQgNAAgGgHg");
	this.shape_11.setTransform(125.625,23.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAYQgEgHAAgRQAAgRAFgIQAGgLAQAAQAPAAAGAKQAFAIAAASIAAADIgjAAIAAAFQAAAQAIAAQAIAAABgNIARAAQgBAagZAAQgQAAgGgNgAAJgHQAAgJgCgDQgCgFgFAAQgIAAAAAOIAAADIARAAIAAAAg");
	this.shape_12.setTransform(119.775,23.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAvIAAhcIARAAIAAAIIAAAAQAGgJAJAAQALAAAFAIQAFAJAAATQAAATgFAIQgFAJgLAAQgIAAgGgIIAAAdgAgHgbQgBAFAAAMQAAAMABAEQADAGAEAAQAGAAACgGQACgEAAgMQAAgMgCgFQgCgGgGAAQgEAAgDAGg");
	this.shape_13.setTransform(113.575,24.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAeQgGgFAAgLIAAgCIAQAAIAAACQAAAKAJAAQAJAAAAgIQAAgFgHgDIgLgEQgPgFAAgOQAAgJAGgGQAGgGANAAQAXAAAAAUIAAADIgQAAQAAgLgIAAQgCAAgDACQgCACAAAEQAAAFAHADIAKAEQAJACADAEQAEAFAAAIQAAAKgHAGQgHAGgMAAQgNAAgGgHg");
	this.shape_14.setTransform(107.375,23.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAvIAAhFIARAAIAABFgAgIgfIAAgPIARAAIAAAPg");
	this.shape_15.setTransform(99.85,21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAnQgFgJAAgTQAAgTAFgIQAFgJALAAQAIAAAGAIIAAgeIASAAIAABdIgRAAIAAgIIAAAAQgGAKgJAAQgLgBgFgIgAgHgFQgCAEAAAMQAAAMACAFQACAFAFAAQAFAAADgFQABgFAAgMQAAgMgBgEQgDgHgFAAQgFAAgCAHg");
	this.shape_16.setTransform(94.975,22.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAMIgJAAIADgKIAFAAIABgGIgJAAIAEgKIAFAAQADggAaAAQALAAAIAGIgGANQgGgGgHAAQgHAAgCAGQgBAEgBAJIAVAAIgEAKIgRAAIAAAGIAQAAIgEAKIgMAAIABAOQACAIAIAAQAGAAALgJIAAAQQgLAGgJAAQgZAAgBgjg");
	this.shape_17.setTransform(85.8,22.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAUIAAgDIARAAQAAAQAKAAQAKAAAAgSQAAgMgDgDQgCgDgFAAQgIgBgBAIIgRAAIAEgxIAuAAIAAAPIggAAIgCAUQAFgHALAAQAWABAAAcQAAARgGAHQgHAKgPAAQgbAAAAgag");
	this.shape_18.setTransform(79.375,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAuIAAhAIgRAAIAAgMIABAAQASAAADgPIANAAIAABbg");
	this.shape_19.setTransform(72.5,22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAvIAAhFIARAAIAABFgAgIgfIAAgPIARAAIAAAPg");
	this.shape_20.setTransform(65.45,21.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAIAkIAAgvQABgKgIAAQgJAAAAALIAAAuIgSAAIAAhFIARAAIAAAIIABAAQAFgKALAAQATAAgBAUIAAAzg");
	this.shape_21.setTransform(60.65,23.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTArQgGgFAAgJIARAAQAAADADACQACACADAAQAJAAAAgMIAAgKQgFAJgJAAQgKAAgFgIQgGgJAAgRQAAgQAEgIQAFgMANAAQAJAAAEAKIAAgIIASAAIAABBQAAAOgHAHQgHAHgOAAQgMAAgGgFgAgHgcQgBAFAAAPQAAARAIAAQAJAAAAgTQAAgNgBgFQgDgFgFAAQgEAAgDAFg");
	this.shape_22.setTransform(54.05,24.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAbQgGgIAAgTQAAgSAGgJQAHgJAOAAQAPAAAHAJQAGAJAAASQAAASgHAJQgGAKgPAAQgPAAgGgKgAgHgRQgCAFAAAMQAAAMACAFQACAHAFAAQAFAAACgFQADgGAAgNQAAgMgDgGQgCgGgFAAQgFAAgCAHg");
	this.shape_23.setTransform(47.825,23.1238);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag3BnQgVgRgDgeIAsAAQACAMAIAIQAJAIAMAAQAVAAAMgZQAIgSABgbIAAAAQgSAZghAAQgfAAgWgXQgRgUAAgeQAAgkAWgYQAXgYAjAAQAvAAAWAlQASAfAAAyQAAAvgVAhQgYAngsAAQgeAAgUgQgAgchDQgJANAAAQQAAASAJAMQAJAMARAAQARAAAKgLQAJgMAAgSQAAgRgKgMQgKgOgQAAQgQAAgKANg");
	this.shape_24.setTransform(136.825,-4.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBBSQgSgeAAgzQAAgvAUghQAZgnAsAAQAeAAAUARQAUARAEAdIgsAAQgCgMgJgIQgIgIgMAAQgVAAgMAZQgJASgBAbIABAAQASgZAhAAQAfAAAVAXQASAUAAAeQAAAkgWAYQgXAYgjAAQgvAAgWglgAgYAJQgKALAAASQAAARAKANQALANAPAAQAQAAAKgNQAKgMAAgRQAAgSgJgMQgKgMgRAAQgQAAgKAMg");
	this.shape_25.setTransform(117.475,-4.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAdQAKgCAHgJQAGgJAAgKIgYAAIAAgzIAzAAIAAAzQAAAVgPAPQgNAOgWAEg");
	this.shape_26.setTransform(102.675,7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhuCtQgrgoAChGIBPAAQABAkASAVQASAYAjAAQAbAAATgSQATgSAAgcQAAgpgggMQgSgIgrAAIAAg5QAhADAWgKQAfgNAAgfQAAgZgSgQQgQgOgYAAQgeAAgRAVQgQAUABAgIhPAAQACg/AmgmQAngoA+AAQA1AAAoAdQAsAgAAA1QAAAdgPAXQgPAXgcAIIAAABQAiAHAUAZQATAZAAAkQAAA9guAmQgrAjg/AAQhFAAgpgog");
	this.shape_27.setTransform(80.6724,-13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBeQgXgYgHgrIgZAAIAKgXIANAAIAAgNIgYAAIAKgXIARAAQAIgoAYgXQAagZAmAAQAcAAAgARIgUAoQgXgOgUAAQghgBgMAuIBPAAIgKAXIhIAAIgBANIBFAAIgKAXIg4AAQAKA0AlAAQAZAAAagUIgBAxQgWANgcAAQgoAAgZgbg");
	this.shape_28.setTransform(54.725,-4.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAqQgJgGgBgKIASAAQACAJALAAQAHAAAEgFQAEgEAAgIIAAgJQgGALgOAAQgOAAgIgKQgGgJAAgOQAAgOAHgJQAIgKAOAAQAMAAAHALIAAgJIARAAIAAA9QAAAeghAAQgMAAgIgFgAgKgbQgEAGAAAIQAAAIADAFQAEAGAHAAQAIAAAEgGQAEgEAAgIQAAgUgQAAQgGAAgEAFg");
	this.shape_29.setTransform(97.775,-38.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AALAvIgRgfIgIAHIAAAYIgSAAIAAhdIASAAIAAAyIAXgYIAWAAIgaAYIAcArg");
	this.shape_30.setTransform(90.675,-41.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAuIAAg7IgWAAIAAgNQAXAAADgSIAPAAIAABag");
	this.shape_31.setTransform(82.325,-41.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAvIAAhDIARAAIAABDgAgIgeIAAgQIARAAIAAAQg");
	this.shape_32.setTransform(74.025,-41.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_33.setTransform(70.675,-41.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaAaQgEgGAAgNIAAgpIASAAIAAAlQAAAQAMAAQAGABADgFQAEgEAAgLIAAgiIATAAIAABDIgSAAIAAgKIAAAAQgIAMgMAAQgOAAgGgJg");
	this.shape_34.setTransform(65.15,-40);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAeQgHgFAAgKQAAgKAIgFQAFgDAKgBIAOgDQAHgBAAgFQAAgGgDgBQgDgCgGAAQgKAAgBAKIgTAAQABgMAKgFQAIgGAMAAQAeABAAASIAAAiQAAALACAFIgTAAIgBgHQgIAJgOAAQgKAAgGgGgAAFADIgHABQgLADAAAIQAAAIALAAQAOAAAAgPIAAgIQgCADgFAAg");
	this.shape_35.setTransform(57.525,-40.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgmAvIAAhdIArAAQAeAAAAAYQAAANgNAGQARAEAAATQAAANgKAHQgJAHgOAAgAgRAfIAUAAQAQgBAAgLQAAgOgPAAIgVAAgAgRgHIATAAQANAAAAgMQAAgLgOAAIgSAAg");
	this.shape_36.setTransform(49.475,-41.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAQAAAJANQAIALgBAQIgvAAQABARAOAAQAGAAAEgEQAEgCABgDIAQAAQgHAWgYAAQgPABgJgLgAAPgHQgDgOgMABQgGAAgFAEQgDAFAAAEIAdAAIAAAAg");
	this.shape_37.setTransform(172.6556,-55.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIAuIAAhbIARAAIAABbg");
	this.shape_38.setTransform(167.275,-56.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAfQgHgGAAgKQAAgKAIgFQAFgDAKgBIAOgDQAHgBAAgFQAAgFgDgCQgDgCgGAAQgKAAgBAKIgTAAQABgMAKgFQAIgFAMgBQAeAAAAATIAAAiQAAAMACADIgTAAIgBgGQgIAIgOAAQgKAAgGgEgAAFADIgHACQgLACAAAIQAAAIALAAQAOAAAAgQIAAgHQgCACgFABg");
	this.shape_39.setTransform(161.825,-55.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANAiIAAgkQAAgRgMAAQgGAAgDAEQgEAFAAAKIAAAiIgTAAIAAhBIASAAIAAAJIAAAAQAIgMAMAAQAOAAAGAIQAEAGAAAOIAAAog");
	this.shape_40.setTransform(154.3,-55.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYAZQgKgJAAgQQAAgPAKgKQAJgKAPAAQAQAAAJAKQAKAKAAAPQAAAQgKAJQgJALgQgBQgPABgJgLgAgPAAQAAAJADAGQAEAGAIABQAQgBAAgVQAAgVgQABQgPgBAAAVg");
	this.shape_41.setTransform(146.525,-55.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgIgeIAAgPIARAAIAAAPg");
	this.shape_42.setTransform(140.875,-56.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAhIAAgOIAigmIgfAAIAAgNIA3AAIAAANIgiAmIAlAAIAAAOg");
	this.shape_43.setTransform(135.875,-55.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAuIAAhBIARAAIAABBgAgIgeIAAgPIARAAIAAAPg");
	this.shape_44.setTransform(130.825,-56.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaAkQgHgKAAgPQAAgNAHgKQAJgLAOAAQAMABAHAJIAAghIASAAIAABbIgRAAIAAgIIgBAAQgGAKgNAAQgOABgJgMgAgLgCQgEAFAAAJQAAAIAEAHQAFAGAHABQAPAAAAgXQAAgIgDgFQgEgGgIAAQgIAAgEAGg");
	this.shape_45.setTransform(125.075,-56.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgZAfQgHgGAAgKQAAgKAIgFQAFgDAKgBIAOgDQAHgBAAgFQAAgFgDgCQgDgCgGAAQgKAAgBAKIgTAAQABgMAKgFQAIgFAMgBQAeAAAAATIAAAiQAAAMACADIgTAAIgBgGQgIAIgOAAQgKAAgGgEgAAFADIgHACQgLACAAAIQAAAIALAAQAOAAAAgQIAAgHQgCACgFABg");
	this.shape_46.setTransform(117.475,-55.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAiIAAhBIASAAIAAAMIAAAAQADgGAFgEQAGgFAHAAIAEABIAAARIgHgBQgRABAAAUIAAAeg");
	this.shape_47.setTransform(111.625,-55.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAuIAAhKIgcAAIAAgRIBLAAIAAARIgcAAIAABKg");
	this.shape_48.setTransform(104.825,-56.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAZQgKgJAAgQQAAgPAKgKQAJgKAPAAQAQAAAJAKQAKAKAAAPQAAAQgKAJQgJALgQgBQgPABgJgLgAgPAAQAAAJADAGQAEAGAIABQAQgBAAgVQAAgVgQABQgPgBAAAVg");
	this.shape_49.setTransform(93.325,-55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAiIAAhBIASAAIAAAMIAAAAQADgGAFgEQAGgFAHAAIAEABIAAARIgHgBQgRABAAAUIAAAeg");
	this.shape_50.setTransform(87.175,-55.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAZQgKgJAAgQQAAgPAKgKQAJgKAPAAQAQAAAJAKQAKAKAAAPQAAAQgKAJQgJALgQgBQgPABgJgLgAgPAAQAAAJADAGQAEAGAIABQAQgBAAgVQAAgVgQABQgPgBAAAVg");
	this.shape_51.setTransform(80.375,-55.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaAkQgHgKAAgPQAAgNAHgKQAJgLAOAAQAMABAHAJIAAghIASAAIAABbIgRAAIAAgIIgBAAQgGAKgNAAQgOABgJgMgAgLgCQgEAFAAAJQAAAIAEAHQAFAGAHABQAPAAAAgXQAAgIgDgFQgEgGgIAAQgIAAgEAGg");
	this.shape_52.setTransform(72.325,-56.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AANAiIAAgkQAAgRgMAAQgHAAgCAEQgEAFAAAKIAAAiIgTAAIAAhBIASAAIAAAJIAAAAQAIgMAMAAQAOAAAGAIQAEAGAAAOIAAAog");
	this.shape_53.setTransform(64.65,-55.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAfQgHgGAAgKQAAgKAIgFQAFgDAKgBIAOgDQAHgBAAgFQAAgFgDgCQgDgCgGAAQgKAAgBAKIgTAAQABgMAKgFQAIgFAMgBQAeAAAAATIAAAiQAAAMACADIgTAAIgBgGQgIAIgOAAQgKAAgGgEgAAFADIgHACQgLACAAAIQAAAIALAAQAOAAAAgQIAAgHQgCACgFABg");
	this.shape_54.setTransform(57.025,-55.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAuIAAhbIApAAQAQAAAJAJQAHAIAAAMQAAANgHAHQgJAJgQAAIgVAAIAAAhgAgQgBIAQAAQAIAAAEgDQAFgDAAgJQAAgIgFgDQgEgDgIAAIgQAAg");
	this.shape_55.setTransform(49.3,-56.4);

	this.instance_3 = new lib.baseprezzo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.7,8.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAmAAIAAAMIgYAAIAAARIAXAAIAAALIgXAAIAAATIAZAAIAAAMg");
	this.shape_56.setTransform(132.45,52.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAJAkQgCgDAAgFIgBgNQAAgJgHAAIgIAAIAAAeIgOAAIAAhHIAZAAQAJAAAFAFQAFAFAAAJQAAAPgMABIAAABQAIAAACAFQACAEAAAMIABAJQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIAAABgAgJgDIAGAAQAKAAAAgLQAAgKgJAAIgHAAg");
	this.shape_57.setTransform(127.275,52.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAmAAIAAAMIgYAAIAAARIAXAAIAAALIgXAAIAAATIAZAAIAAAMg");
	this.shape_58.setTransform(122.1,52.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgJAkIgPhHIAOAAIAKA0IALg0IAOAAIgQBHg");
	this.shape_59.setTransform(117,52.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AANAkIgDgPIgSAAIgEAPIgPAAIAThHIARAAIATBHgAAHAJIgHgfIAAAAIgGAfIANAAg");
	this.shape_60.setTransform(111.625,52.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AANAkIgDgPIgSAAIgEAPIgPAAIAThHIARAAIATBHgAAHAJIgHgfIAAAAIgGAfIANAAg");
	this.shape_61.setTransform(103.675,52.475);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAkIAAg7IgQAAIAAgMIAtAAIAAAMIgQAAIAAA7g");
	this.shape_62.setTransform(98.5,52.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAQIAAgDIAPAAIAAADQAAAFACADQACADAEAAQAEAAACgDQADgCAAgEQAAgFgDgDQgCgCgHgCQgKgEgEgDQgFgFAAgJQAAgKAGgGQAGgFAKAAQAKAAAFAEQAHAFAAAKIAAACIgOAAQAAgKgIAAQgHAAAAAIQAAADABACQACADAEACIAKAEQAIADADAEQADAEAAAHQAAAWgYAAQgXAAAAgVg");
	this.shape_63.setTransform(93.525,52.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AANAkIgDgPIgSAAIgEAPIgPAAIAThHIARAAIATBHgAAHAJIgHgfIAAAAIgGAfIANAAg");
	this.shape_64.setTransform(88.175,52.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIAXAAQAUAAAAASQAAANgLADQAGABAEADQADAFAAAHQAAAJgFAGQgFAGgMAAgAgIAZIAGAAQAKAAAAgLQAAgKgKAAIgGAAgAgIgFIAEAAQALAAAAgKQAAgFgDgCQgCgCgFAAIgFAAg");
	this.shape_65.setTransform(82.675,52.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAvIAAhFIARAAIAABFgAgIgeIAAgQIARAAIAAAQg");
	this.shape_66.setTransform(102.85,26.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAmQgFgIAAgUQAAgSAFgJQAFgIALAAQAIAAAGAIIAAgdIASAAIAABbIgRAAIAAgHIAAAAQgGAJgJAAQgLAAgFgJgAgHgGQgCAGAAAKQAAANACAEQACAHAFAAQAFAAADgHQABgEAAgNQAAgKgBgGQgDgFgFAAQgFAAgCAFg");
	this.shape_67.setTransform(97.975,27.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgTAMIgJAAIADgKIAFAAIABgGIgJAAIADgKIAGAAQACggAaAAQAMAAAIAGIgFANQgHgGgHAAQgHAAgDAGQgBAEAAAJIAVAAIgEAKIgRAAIAAAGIAQAAIgEAKIgMAAIABAOQACAIAHAAQAHAAAKgJIAAAQQgKAGgJAAQgaAAAAgjg");
	this.shape_68.setTransform(88.8,27.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgbAUIAAgCIARAAQAAAPAKAAQAKAAAAgSQAAgMgDgDQgCgEgFAAQgIAAgBAIIgRAAIAEgxIAuAAIAAAOIggAAIgCAWQAFgIALABQAWgBAAAdQAAAQgGAJQgHAJgPAAQgbAAAAgag");
	this.shape_69.setTransform(82.375,27.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAAuIAAhAIgSAAIAAgMIACAAQASAAADgPIANAAIAABbg");
	this.shape_70.setTransform(75.5,27);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgIAvIAAhFIARAAIAABFgAgIgeIAAgQIARAAIAAAQg");
	this.shape_71.setTransform(68.45,26.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAJAkIAAgvQAAgKgIAAQgIAAAAALIAAAuIgSAAIAAhFIARAAIAAAIIAAAAQAGgKALAAQASAAAAAUIAAAzg");
	this.shape_72.setTransform(63.65,28.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgTArQgGgFAAgJIARAAQAAADADACQADACACAAQAKAAgBgMIAAgKQgGAJgHAAQgMAAgFgIQgFgJAAgRQAAgQAEgIQAFgMANAAQAJAAAEAKIAAgIIASAAIAABBQAAAOgHAHQgHAHgOAAQgMAAgGgFgAgGgcQgCAFAAAPQAAARAIAAQAKAAgBgTQAAgNgCgFQgBgFgGAAQgEAAgCAFg");
	this.shape_73.setTransform(57.05,29.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhuCtQgrgoAChGIBPAAQABAkASAWQASAXAjAAQAbAAATgSQATgRAAgdQAAgpgggNQgSgHgrAAIAAg5QAhADAWgLQAfgMAAggQAAgYgSgPQgQgPgYAAQgeAAgRAVQgQATABAhIhPAAQACg/AmgmQAngoA+AAQA1AAAoAdQAsAhAAAzQAAAegPAXQgPAXgcAIIAAABQAiAIAUAYQATAZAAAkQAAA9guAmQgrAjg/AAQhFAAgpgog");
	this.shape_74.setTransform(83.6724,-6.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgjBeQgXgYgHgqIgZAAIAKgYIANAAIAAgNIgYAAIAKgXIARAAQAIgoAYgXQAagZAmAAQAcAAAgARIgUAoQgXgPgUABQghgBgMAuIBPAAIgKAXIhIAAIgBANIBFAAIgKAYIg4AAQAKAzAlAAQAZAAAagVIgBAyQgWANgcAAQgoAAgZgbg");
	this.shape_75.setTransform(57.725,2.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgTArQgGgFAAgJIARAAQAAADADACQADACACAAQAKAAAAgMIAAgKQgHAJgHAAQgLAAgGgIQgFgJAAgRQAAgQAEgIQAFgMANAAQAJAAAFAKIAAgIIARAAIAABBQAAAOgHAHQgHAHgOAAQgMAAgGgFgAgGgcQgCAFAAAPQAAARAIAAQAKAAAAgTQAAgNgDgFQgCgFgEAAQgGAAgBAFg");
	this.shape_76.setTransform(92.8,-34.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAKAuIgOgdIgHAJIAAAUIgSAAIAAhbIASAAIAAAvIABAAIARgZIATAAIgUAbIAYAqg");
	this.shape_77.setTransform(86.75,-36.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAAuIAAhAIgSAAIAAgMIACAAQASAAADgPIANAAIAABbg");
	this.shape_78.setTransform(79.35,-36.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaAQIAAgzIASAAIAAAvQABAKAHAAQAIAAAAgMIAAgtIASAAIAABFIgRAAIAAgIIAAAAQgGAKgLAAQgRAAgBgUg");
	this.shape_79.setTransform(64.4,-35.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgWAeQgEgFAAgIQAAgKAEgFQAEgEAKgCIAJgDQAHgCAAgGQAAgJgIAAQgIAAAAAJIAAACIgQAAIAAgBQAAgWAYAAQAPAAAFAGQAFAFAAAKIAAAkQAAAJACAFIgRAAIgCgIQgDAGgFACQgCACgHAAQgJAAgEgHgAAAADQgJACAAAKQAAAJAHAAQADAAADgCQAEgDAAgFIAAgOQgEACgEABg");
	this.shape_80.setTransform(57.975,-35.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgdAuIAAhbIAeAAQAagBAAAYQAAAQgOAFIAAAAQAIABAFAFQAEAFAAAJQAAANgGAGQgHAJgQgBgAgLAhIAIAAQAOAAAAgPQAAgNgNAAIgJAAgAgLgHIAGAAQAOAAAAgMQAAgHgEgDQgDgDgGAAIgHAAg");
	this.shape_81.setTransform(51.375,-36.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgWAYQgEgHAAgRQAAgRAFgIQAGgLAQAAQAPAAAGAKQAFAIAAASIAAADIgjAAIAAAFQAAAQAIAAQAIAAABgNIARAAQgBAagZAAQgQAAgGgNgAAJgHQAAgJgCgDQgCgFgFAAQgIAAAAAOIAAADIARAAIAAAAg");
	this.shape_82.setTransform(153.475,-50.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWAeQgEgFAAgIQAAgKAEgFQAEgEAKgCIAJgDQAHgCAAgGQAAgJgIAAQgIAAAAAJIAAACIgQAAIAAgBQAAgWAYAAQAPAAAFAGQAFAFAAAKIAAAkQAAAJACAFIgRAAIgCgIQgDAGgFACQgCACgHAAQgJAAgEgHgAAAADQgJACAAAKQAAAJAHAAQADAAADgCQAEgDAAgFIAAgOQgEACgEABg");
	this.shape_83.setTransform(144.175,-50.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAIAkIAAgvQAAgKgHAAQgJAAAAALIAAAuIgSAAIAAhFIARAAIAAAIIABAAQAFgKALAAQASAAAAAUIAAAzg");
	this.shape_84.setTransform(137.85,-50.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgVAbQgGgIAAgTQAAgSAGgJQAHgJAOAAQAPAAAHAJQAGAJAAASQAAASgHAJQgGAKgPAAQgPAAgGgKgAgHgRQgCAFAAAMQAAAMACAFQACAHAFAAQAFAAACgFQADgGAAgNQAAgMgDgGQgCgGgFAAQgFAAgCAHg");
	this.shape_85.setTransform(131.525,-50.2262);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgYAjIAAgOIAcgoIgaAAIAAgPIAvAAIAAAOIgbAoIAbAAIAAAPg");
	this.shape_86.setTransform(122.55,-50.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgIAvIAAhFIARAAIAABFgAgIgfIAAgPIARAAIAAAPg");
	this.shape_87.setTransform(118.25,-51.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWAeQgEgFAAgIQAAgKAEgFQAEgEAKgCIAJgDQAHgCAAgGQAAgJgIAAQgIAAAAAJIAAACIgQAAIAAgBQAAgWAYAAQAPAAAFAGQAFAFAAAKIAAAkQAAAJACAFIgRAAIgCgIQgDAGgFACQgCACgHAAQgJAAgEgHgAAAADQgJACAAAKQAAAJAHAAQADAAADgCQAEgDAAgFIAAgOQgEACgEABg");
	this.shape_88.setTransform(107.025,-50.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgRAkIAAhFIARAAIAAAJIAAAAQAFgLAKAAIADAAIAAARIgGAAQgEAAgFADQgDADAAAHIAAApg");
	this.shape_89.setTransform(102.1,-50.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgIAvIAAhNIgVAAIAAgQIA7AAIAAAQIgVAAIAABNg");
	this.shape_90.setTransform(96.575,-51.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgVAbQgGgIAAgTQAAgSAGgJQAHgJAOAAQAPAAAHAJQAGAJAAASQAAASgHAJQgGAKgPAAQgPAAgGgKgAgHgRQgCAFAAAMQAAAMACAFQACAHAFAAQAFAAACgFQADgGAAgNQAAgMgDgGQgCgGgFAAQgFAAgCAHg");
	this.shape_91.setTransform(87.275,-50.2262);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgRAkIAAhFIARAAIAAAJIAAAAQAFgLAKAAIAEAAIAAARIgHAAQgEAAgFADQgDADAAAHIAAApg");
	this.shape_92.setTransform(82.3,-50.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgVAbQgGgIAAgTQAAgSAGgJQAHgJAOAAQAPAAAHAJQAGAJAAASQAAASgHAJQgGAKgPAAQgPAAgGgKgAgHgRQgCAFAAAMQAAAMACAFQACAHAFAAQAFAAACgFQADgGAAgNQAAgMgDgGQgCgGgFAAQgFAAgCAHg");
	this.shape_93.setTransform(76.775,-50.2262);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgVAnQgFgJAAgTQAAgTAFgIQAFgJALAAQAIAAAGAIIAAgeIASAAIAABdIgRAAIAAgIIAAAAQgGAKgJAAQgLgBgFgIgAgHgFQgCAEAAAMQAAAMACAFQACAFAFAAQAFAAADgFQABgFAAgMQAAgMgBgEQgDgHgFAAQgFAAgCAHg");
	this.shape_94.setTransform(70.325,-51.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAIAkIAAgvQABgKgIAAQgJAAABALIAAAuIgSAAIAAhFIAQAAIAAAIIABAAQAGgKAKAAQATAAgBAUIAAAzg");
	this.shape_95.setTransform(63.9,-50.325);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgWAeQgEgFAAgIQAAgKAEgFQAEgEAKgCIAJgDQAHgCAAgGQAAgJgIAAQgIAAAAAJIAAACIgQAAIAAgBQAAgWAYAAQAPAAAFAGQAFAFAAAKIAAAkQAAAJACAFIgRAAIgCgIQgDAGgFACQgCACgHAAQgJAAgEgHgAAAADQgJACAAAKQAAAJAHAAQADAAADgCQAEgDAAgFIAAgOQgEACgEABg");
	this.shape_96.setTransform(57.475,-50.225);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcAvIAAhdIAfAAQAOABAHAIQAFAHAAAMQAAAOgIAHQgIAGgNAAIgJAAIAAAmgAgJgDIAIAAQALAAAAgOQABgOgMAAIgIAAg");
	this.shape_97.setTransform(51.25,-51.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.instance_1,this.instance_2,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.instance_3,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:167.275,y:-56.4}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:70.675,y:-41.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:102.675,y:7.5}},{t:this.shape_25,p:{x:117.475,y:-4.175}},{t:this.shape_24,p:{x:136.825,y:-4.175}},{t:this.shape_23,p:{x:47.825,y:23.1238}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:65.45,y:21.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:94.975,y:22.05}},{t:this.shape_15,p:{x:99.85,y:21.9}},{t:this.shape_14,p:{x:107.375,y:23.125}},{t:this.shape_13,p:{x:113.575,y:24.175}},{t:this.shape_12,p:{x:119.775,y:23.125}},{t:this.shape_11,p:{x:125.625,y:23.125}},{t:this.shape_10,p:{x:131.575,y:23.125}},{t:this.instance_2,p:{x:161.8,y:40.35}},{t:this.instance_1,p:{x:149.75,y:48.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_16,p:{x:113.375,y:-51.3}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_20,p:{x:126.85,y:-51.45}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_33,p:{x:148.9,y:-51.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_38,p:{x:69.2,y:-36.4}},{t:this.shape_15,p:{x:72.3,y:-36.45}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_26,p:{x:105.675,y:14}},{t:this.shape_25,p:{x:120.475,y:2.325}},{t:this.shape_24,p:{x:139.825,y:2.325}},{t:this.shape_23,p:{x:50.825,y:28.1238}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_14,p:{x:110.375,y:28.125}},{t:this.shape_13,p:{x:116.575,y:29.175}},{t:this.shape_12,p:{x:122.775,y:28.125}},{t:this.shape_11,p:{x:128.625,y:28.125}},{t:this.shape_10,p:{x:134.575,y:28.125}},{t:this.instance_2,p:{x:165.8,y:43.35}},{t:this.instance_1,p:{x:153.75,y:51.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},8).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-96.1,300.6,199.7);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{volantino:51});

	// timeline functions:
	this.frame_9 = function() {
		this.campanella.gotoAndPlay("suona");
		
		var tl=this;
		tl.stop();
		var delay = 1000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_32 = function() {
		var tl=this;
		tl.stop();
		var delay = 1000;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_41 = function() {
		this.campanella.gotoAndPlay("suona");
		
		var tl=this;
		tl.stop();
		var delay = 1500;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.campanella.gotoAndPlay("suona");
		
		var tl=this;
		tl.stop();
		var delay = 1500;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_78 = function() {
		this.cta.gotoAndPlay("lamp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(23).call(this.frame_32).wait(9).call(this.frame_41).wait(9).call(this.frame_50).wait(9).call(this.frame_59).wait(19).call(this.frame_78).wait(1));

	// cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#725559").ss(2,1,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150.1,234.5,0.9598,0.9598,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// tx1
	this.instance_1 = new lib.tx1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,-20.75,1,1,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({y:28.2},9,cjs.Ease.backOut).wait(47));

	// bollo
	this.instance_2 = new lib.bollo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.1,-34.3,0.7203,0.7203,-40.0785,0,0,0.3,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({regX:0.4,regY:0.2,x:22.15,y:17.85},9,cjs.Ease.backOut).wait(52));

	// campanella
	this.campanella = new lib.campanellaanim();
	this.campanella.name = "campanella";
	this.campanella.parent = this;
	this.campanella.setTransform(150.3,-102,0.66,0.66,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.campanella).to({y:118.3},9,cjs.Ease.backOut).to({y:323.3},9,cjs.Ease.backIn).to({_off:true},1).wait(13).to({_off:false,y:-102},0).to({y:125.8},9,cjs.Ease.backOut).to({y:323.3},9,cjs.Ease.backIn).wait(1).to({y:-102},0).to({y:126.8},8,cjs.Ease.backOut).to({y:323.3},9,cjs.Ease.backIn).to({_off:true},1).wait(10));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(150.95,285.8,0.528,0.528,0,0,0,1.8,1.4);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(69).to({_off:false},0).to({y:192.2},9,cjs.Ease.backOut).wait(1));

	// volantino
	this.instance_3 = new lib.volantino_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.6,157.65,0.75,0.75,0,0,0,0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).wait(13));

	// prodotto
	this.instance_4 = new lib.prodottoanim();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87.55,131.85);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({_off:true},8).wait(24));

	// logo-specialissimi
	this.instance_5 = new lib.logospecialissimi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.3,134.9,1.05,1.05,0,0,0,0.3,1.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({_off:true},20).wait(43));

	// fondo.jpg
	this.instance_6 = new lib.fondo();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.7,-64.4,304.6,475.1);
// library properties:
lib.properties = {
	id: '37B5A1A697A54202A6EEAA3083230580',
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"300x250_atlas_.png", id:"300x250_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['37B5A1A697A54202A6EEAA3083230580'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;