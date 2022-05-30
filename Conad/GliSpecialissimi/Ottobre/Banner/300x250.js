(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.foglia1 = function() {
	this.initialize(img.foglia1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,229);


(lib.foglia2 = function() {
	this.initialize(img.foglia2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,201);


(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.prodotto = function() {
	this.initialize(img.prodotto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,172);


(lib.volantino = function() {
	this.initialize(img.volantino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,282);// helper functions:

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
	this.shape.graphics.f("#999999").s().p("AyRWdMAAAgs5MAkjAAAMAAAAs5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.volantino_1, new cjs.Rectangle(-117,-143.7,234,287.5), null);


(lib.tx1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNAZIgBgLIABgKQABgEADgBQgDgCgBgEIgBgIIABgJQADgKAKAAQALAAAEAKIAAAJIAAAIQgCAEgDACQADABACAEIAAAKIAAALQgEAKgLAAQgKAAgDgKgAgDAGIgBAIIABAJQABACACAAQAEAAABgCIAAgJIAAgIQgBgDgEAAQgCAAgBADgAgDgWIgBAHIABAGQABAEACAAQAEAAABgEIAAgGIAAgHQgBgCgEAAQgCAAgBACg");
	this.shape.setTransform(42.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAAAiIAAgBIAAg2IgIAGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgIIABgCIAIgGIABgBIAIAAIABABIAABBIgBABg");
	this.shape_1.setTransform(38.5,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgNAZQgBgDAAgWQAAgVABgDQADgKAKAAQALAAADAKQABACAAAWQAAAXgBACQgDAKgLAAQgKAAgDgKgAgDgWIgBAWIABAXQABACACAAQAEAAABgCIAAgXIAAgWQgBgCgEAAQgCAAgBACg");
	this.shape_2.setTransform(34.8,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgNAjIgBgBIAAgHIAAgCIAQgeQADgFAAgGIgBgFQAAgDgEAAQgCAAgCADIAAAGQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgHgBIgBgBIAAgIQAEgKAKAAQALAAADAKIABAIQAAAIgEAIIgOAZIARAAIABABIAAAIIgBABg");
	this.shape_3.setTransform(30.9,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgNAiIgBgBIAAhBIABgBIAbAAIABABIAAAIIgBABIgRAAIAAABIAAARIAAABIAPAAIABABIAAAHIgBAAIgPAAIAAABIAAASIAAABIARAAIABABIAAAIIgBABg");
	this.shape_4.setTransform(25.2,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAIAiIgBgBIgIgbIgBAAIgEAAIAAABIAAAaIgBABIgJAAIgBgBIAAhBIABgBIAOAAQASAAAAAUQAAANgIAEIAKAdQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAgGgWIAAATIAAAAIAEAAQADAAACgBQACgDAAgGQAAgFgCgDQgCgDgDABIgEAAIAAABg");
	this.shape_5.setTransform(21.2,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgPAiIgBgBIAAhBIABgBIAPAAQAIAAAEAEQAFAFAAAJQgBALgHADQAIACAAANQAAALgFAFQgFAEgJAAgAgGAEIAAATIABABIADAAQAFABABgDQACgCAAgGQAAgGgCgDQgBgBgFAAIgDAAIgBAAgAgGgWIAAARIABABIADAAQAEAAACgCQABgCAAgGQAAgFgBgDQgCgBgEAAIgDAAIgBABg");
	this.shape_6.setTransform(16.9,-0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgPAYQgCgDAAgVQAAgUACgDQADgLAMAAQAMAAAEALQABADAAAUQAAAVgBADQgEALgMAAQgMAAgDgLgAgFgVIAAAVIAAAWQACADADAAQAEAAACgDQAAgDAAgTQAAgSAAgDQgCgDgEAAQgDAAgCADg");
	this.shape_7.setTransform(12.5,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgDAiIgBgBIAAg3IgBgBIgKAAIgBgBIAAgIIABgBIAfAAIABABIAAAIIgBABIgKAAIgBABIAAA3IgBABg");
	this.shape_8.setTransform(8.5,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgDAiIgBgBIAAg3IgBgBIgKAAIgBgBIAAgIIABgBIAfAAIABABIAAAIIgBABIgKAAIgBABIAAA3IgBABg");
	this.shape_9.setTransform(4.7,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgNAZQgBgDAAgWQAAgVABgDQADgKAKAAQALAAADAKQABACAAAWQAAAXgBACQgDAKgLAAQgKAAgDgKgAgDgWIgBAWIABAXQABACACAAQAEAAABgCIAAgXIAAgWQgBgCgEAAQgCAAgBACg");
	this.shape_10.setTransform(0.9,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgNAZQgBgDAAgWQAAgVABgDQADgKAKAAQALAAADAKQABACAAAWQAAAXgBACQgDAKgLAAQgKAAgDgKgAgDgWIgBAWIABAXQABACACAAQAEAAABgCIAAgXIAAgWQgBgCgEAAQgCAAgBACg");
	this.shape_11.setTransform(-5,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgNAZIgBgIIABgBIAIgBIABABIAAAHQABACADAAQADAAACgCIAAgJIAAgIQgBgCgEAAIgBAAIgBgBIAAgHIABgBIABAAQAEAAABgCIAAgIIAAgHQgCgCgDAAQgDAAgBACIAAAHIgBABIgIgBIgBgBIABgIQADgKAKAAQALAAADAKIABAJQAAAHgBACQgBADgDACQADACABADQABADAAAHQAAAJgBACQgDAKgLAAQgKAAgDgKg");
	this.shape_12.setTransform(-8.9,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgNAiIgBgBIAAhBIABgBIAJAAIABABIAAA3IAAABIARAAIABABIAAAIIgBABg");
	this.shape_13.setTransform(-14.5,-0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAKAiIAAgBIgDgNIgNAAIgCANIgBABIgJAAIgBgBIAPhBIABgBIAHAAIABABIAPBBIgBABgAAFALIgEgZIgBAAIgEAZIAJAAg");
	this.shape_14.setTransform(-18.6,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgNAZIgBgIIABgBIAIgBIABABIAAAHQABACADAAQADAAACgCIAAgJIAAgIQgBgCgEAAIgBAAIgBgBIAAgHIABgBIABAAQAEAAABgCIAAgIIAAgHQgCgCgDAAQgDAAgBACIAAAHIgBABIgIgBIgBgBIABgIQADgKAKAAQALAAADAKIABAJQAAAHgBACQgBADgDACQADACABADQABADAAAHQAAAJgBACQgDAKgLAAQgKAAgDgKg");
	this.shape_15.setTransform(-24.6,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgNAjIgBgBIAAgHIAAgCIAQgeQADgFAAgGIgBgFQAAgDgEAAQgCAAgCADIAAAGQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgHgBIgBgBIAAgIQAEgKAKAAQALAAADAKIABAIQAAAIgEAIIgOAZIARAAIABABIAAAIIgBABg");
	this.shape_16.setTransform(-28.5,-0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgNAiIgBgBIAAhBIABgBIAJAAIABABIAAA3IAAABIARAAIABABIAAAIIgBABg");
	this.shape_17.setTransform(-34.1,-0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAKAiIgBgBIgCgNIgNAAIgDANIAAABIgJAAIgBgBIAPhBIABgBIAIAAIABABIAOBBIgBABgAAFALIgFgZIAAAAIgEAZIAJAAg");
	this.shape_18.setTransform(-38.2,-0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgPAiIgBgBIAAhBIABgBIAPAAQAMAAAEALQABAFAAARQAAASgBAFQgEALgMAAgAgGgWIAAAtIABABIAEAAQAFAAABgEQACgFAAgPQAAgOgCgFQgBgEgFAAIgEAAIgBABg");
	this.shape_19.setTransform(-42.4,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx1, new cjs.Rectangle(-46.8,-7,93.6,14), null);


(lib.retro = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B01325").s().p("ASlNZQg6hkiTAAMgiZAAAIAA5YMAiZAAAQCTAAA6BkQAdAyAAAyIAAX9QgBgKgBAAIgGAGQgFAGgEAAQgGAAgGgLg");
	this.shape.setTransform(50.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.retro, new cjs.Rectangle(-71.3,-69.8,243.6,173.5), null);


(lib.prodotto_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.prodotto();
	this.instance.parent = this;
	this.instance.setTransform(-60,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prodotto_1, new cjs.Rectangle(-60,-87,115,172), null);


(lib.logospecialissimi = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtDRQgVgJgJgUQgIgVAIgVQAJgVAVgJQAUgIAWAIQAVAJAIAVQAJAUgJAWQgJAVgUAIQgKAEgKAAQgLAAgLgEgAh4i0IBOggIB0EXIhNAgg");
	this.shape.setTransform(80.7,20.9,0.485,0.485);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2i5IBQgfICcGSIhPAfg");
	this.shape_1.setTransform(75.3,23.2,0.485,0.485);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjpijIBrgjIB3DlIACgBIgwj8IBsgkICzGMIhUAcIh0khIgBAAIATBqIAeDNIg/AVIhni4IgshWIgDgIIgBAAIBVEsIhXAcg");
	this.shape_2.setTransform(64.3,27.8,0.485,0.485);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgjFIBTgWIBuGhIhTAWg");
	this.shape_3.setTransform(51.4,31,0.485,0.485);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGDgQgVgBgQgHIgShQQAmAPAdgHQAVgEALgQQALgQgFgUQgFgVgTgMIgmgSQgugSgWgUQgcgagKgrQgMg1AVgpQAWgsA0gLQAmgJAnANIATBRQglgUgdAHQgTAEgJAOQgJANAEAUQAFAWAZAQQAHAFArAUQBKAhAOA+QANA6gXArQgYAtg6ANQgNADgPAAIgKAAg");
	this.shape_4.setTransform(43.3,33.1,0.485,0.485);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRDfQgWgCgQgIIgNhRQAkARAggFQAUgDALgPQAMgPgEgVQgDgWgTgNIglgTQgtgUgVgWQgagbgIgsQgJg1AXgoQAZgrA0gIQAmgHAnAPIAOBSQgkgWgdAFQgUAEgJANQgKANAEATQAEAXAXARQAHAFAqAWQBIAlALA/QAKA7gaAqQgbArg6AKQgLACgLAAIgPgBg");
	this.shape_5.setTransform(32.9,35.1,0.485,0.485);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEjQIBUgLIA1GtIhUAKg");
	this.shape_6.setTransform(24.6,36.2,0.485,0.485);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhojTIBVgHIAcFeIBZgHIAHBQIitAOg");
	this.shape_7.setTransform(17.7,37.2,0.485,0.485);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3jXIBZgCIBxGtIhbACIgRhIIhWACIgOBJIhVABgAgjBLIA7gBIgiizIgBAAg");
	this.shape_8.setTransform(5.9,37.7,0.485,0.485);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwDXIAMmwIBVADIgMGwg");
	this.shape_9.setTransform(-4.2,37.6,0.485,0.485);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0DdQhXgGgxhKQgthDAHhaQAGhWA3g7QA7hBBSAGQAWACAVAKIgGBOQgRgGgOgBQg1gEggApQgcAjgEA3QgEA1AXArQAZAyA0AEQAOABATgFIgGBRQgPAEgRAAIgIAAg");
	this.shape_10.setTransform(-12.3,37.4,0.485,0.485);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhvDMIA1mtICqAWIgKBQIhWgLIgLBdIBLAKIgKBPIhKgKIgNBhIBXALIgKBPg");
	this.shape_11.setTransform(-22.8,36.2,0.485,0.485);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiQDOIBMmqIBXAQQAzAJAaARQA9AngQBXQgKA6gqAbQgoAbg7gLIgSgEIgfCwgAgQgWQAfAGARgKQATgLAGgfQAKg4gwgIIgQgDg");
	this.shape_12.setTransform(-33.8,33.9,0.485,0.485);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+DXQgTgFgRgJQgUgLgLgNIAThQQAbAeAfAHQAUAFAQgJQAQgKAGgUQAEgVgLgTIgbghQgigjgLgdQgOgkAKgrQAMg0AlgcQAlgeA0AMQAmAJAfAdIgTBRQgZgigdgHQgUgFgNAJQgOAIgEAUQgGAWAPAZQAFAHAfAlQA0A+gOA/QgOA6gnAcQgeAVgjAAQgQAAgRgEg");
	this.shape_13.setTransform(-45.2,32.1,0.485,0.485);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhmDDIB7mdIBSAYIh7Geg");
	this.shape_14.setTransform(-59.7,28.3,0.485,0.485);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhsCyICImaIBRAbIhuFNIBTAdIgZBMg");
	this.shape_15.setTransform(-68.4,26.1,0.485,0.485);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhMDRQhKgcgMhUQgKhFAfhPQAhhWAygsQA/g4BOAeQAtARAVAnQAUAkgEAyIhZAAQAFgYgCgOQgEgWgUgIQgigPgjAwQgWAfgTAwQgzCGA9AXQAbALAXgaQAQgSAMgfIgygUIAchKICDAxIgMAgQggBSgrApQgnAkgsAAQgXAAgZgJg");
	this.shape_16.setTransform(-77.9,22.1,0.485,0.485);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEKoQvogNu8nEIg8gdIE/thIBIAhQMkF5M/ALQM9AKMwlmIBIggIErNpIg+AcQnhDVnuBpQnTBjnWAAIg0AAgA+JCVQOuG+PXAMQPWAMO5mnIj7rfQs8FstPgKQtNgLs0mAg");
	this.shape_17.setTransform(-0.9,28.7,0.485,0.485);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D91422").s().p("AgFJ9QnsgGnoh0Qnnh0nZjgIgegOIEmsdIAkARQMtF8NFALQNGAKM2lpIAkgQIETMkIgeAOQunGevDAAIg1AAg");
	this.shape_18.setTransform(-0.9,28.9,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFEC00").s().p("ADIGVQAUgfAJgkQAJglgDgnQgIhfhJg+QhJg+heAIQhgAIg9BKQg+BJAIBfQAFA2AbAuIlmgFQAxg+BVgRQgbgBgWgFQgUgFgYgLQhXgpgghaQghhaAphWQAohXBaghQBaggBXApQAbAMATAQQAVARATAaQgRgbgIgaQgIgXgDgfQgIhgA+hJQA9hJBggIQBegIBJA+QBJA+AIBfQACAegDAYQgEAagMAdQAPgcARgTQAQgTAZgRQBOg2BeARQBeARA3BOQA2BPgRBeQgQBehPA3QgXAQgVAIQgXAKgcAEQAdAAAYAGQAWAGAaAMQAtAVAgAlQAfAlAOAug");
	this.shape_19.setTransform(4.5,-15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC8721").s().p("A0cN1QAshNA3g4QhxhQhEh4QhDh3gMiHQgOilBGiVQA1hxBbhTQBahTB1gqQBbggBggEQBegDBcAaQATjgCfigQCgijDjgTQDigTC5CFQC2CDA5DZQCyhTC/AiQB6AWBoBCQBnBCBHBnQBfCIAOCkQALCIgvCCQgwCDhjBiQBPA3A6BLQA8BMAhBcQAMAiAJAmg");
	this.shape_20.setTransform(4.6,-19.1,0.485,0.485);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEC00").s().p("AAyDcQgggKgPgeQgIgSAAgVQgCAhgYAWQgYAWghgCQgigBgXgZQgWgYACgiQABgpAigXQgPAGgSgBQgigBgWgZQgXgYACghQABghAZgXQAYgWAiABQATABASAKQgQgLgKgSQgPgdAKggQAKggAdgQQAegPAgAKQAgAKAPAeQAIASAAATQACgUALgQQARgcAggHQAhgHAcASQAcARAIAhQAGAhgRAcQgLAQgOAJQARgHASABQAiABAWAZQAXAZgCAgQgBAhgZAXQgYAWgigBQgTgBgSgKQARALAJASQAPAdgKAgQgKAggdAQQgSAJgTAAQgMAAgNgEgAgkhHQgdAQgKAgQgLAfAQAdQAPAeAgAKQAfAKAdgQQAdgPAKggQALgfgQgdQgPgegggKQgNgEgLAAQgSAAgSAJg");
	this.shape_21.setTransform(-44.1,-54,0.485,0.485);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC8721").s().p("AAzD1QglgIgWgfQgPARgVAKQgWAJgYgBQgcgCgYgPQgYgQgMgYQgNgYABgdQABgUAGgQQgWgFgSgPQgTgOgLgUQgNgYABgcQADgrAggeQAWgVAjgFQgMgkAOgkQAPgjAigSQAjgSAlAJQAlAJAWAeQAVgYAhgIQArgJAkAXQAYAPANAZQALAUABAYQABAXgJAWQAhAHAWAYQAKAMAGALQANAYgBAcQgDArggAeQgYAWghAEQAMAkgOAkQgPAjgiASQgXAMgYAAQgMAAgNgDg");
	this.shape_22.setTransform(-44.1,-54,0.485,0.485);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFEC00").s().p("AhEFOQgtgJgagnQgagoAJguQAGgeATgVQgfAigvADQguACgjgfQgjgfgCgvQgDgvAfgiQAngtA5AFQgWgGgTgRQgjgfgDgvQgCgvAfgjQAfgkAvgCQAvgEAjAgQAUASALAcQgIgcAGgcQAJguAngaQAngaAuAKQAuAJAaAnQAaAngKAvQgGAagRAWQATgTAagJQAtgPAqAVQAqAVAPAtQAPAtgVAqQgWApgsAPQgYAIgbgEQAaAIATASQAjAfADAvQADAwggAiQgfAkgvACQguADgkgfQgVgTgKgbQAIAbgGAcQgJAvgnAaQgcATghAAQgMAAgMgDgAg9heQgnAagKAuQgKAtAaAoQAaAnAuAJQAtAKAogaQAngaAJgvQAKgtgagnQgagngugJQgNgDgLAAQggAAgcATg");
	this.shape_23.setTransform(38.6,-51.6,0.485,0.485);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC8721").s().p("AhKFwQg2gLghgrQghgqACg2QggAFgfgJQghgJgYgWQgfgbgMgmQgMglAIgnQAIgnAagcQATgUAWgNQgVgagHggQgIggAHggQAIgmAageQApguA9gEQAugDAoAZQAUgyAvgaQAugaA2ALQA1ALAhArQAhAqgCA2QAvgHApAUQA3AcATA6QANAlgIAnQgHAggTAaQgUAbgdAQQAdAkADAvQABAXgEAQQgHAngbAdQgoAug+AEQgvADgngZQgUAygvAaQggASglAAQgPAAgPgDg");
	this.shape_24.setTransform(38.5,-51.6,0.485,0.485);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C1A1C").s().p("Ajrh+QAzBCDWAOQBsAHBigHQgQAxjiBEIjfA4g");
	this.shape_25.setTransform(71.2,-0.1,0.485,0.485);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C1A1C").s().p("AACA+QjohLgOgzIBBAFQBOAEBHgBQDfgGA0hAIgND9Qhxgch1glg");
	this.shape_26.setTransform(-71.6,-1.2,0.485,0.485);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ArYjKIBCgKQDMgdCThHQCThHCWiOIBXhTIAgB1QAaBhAKBrQAHBUgDBvQBCAHA8ABQBlABCcgQIDJgUIiOCPQj9EAkjCOQkiCMlmAnIhMAIgAkXj3QieBNjWAeIAnKcQFaglEWiHQEXiHD0j3QhPAIg3ADQhHAFg8gCQhngBhggRQAFiHgGhXQgHh2gchmQidCVidBMg");
	this.shape_27.setTransform(92,1.6,0.485,0.485);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#BC1A28","#DA1421"],[0,1],-58.3,32.7,36.4,-59.2).s().p("AqUi4IAhgGQDSgeCXhKQCYhICZiTIAsgpIAQA6QAcBlAIByQAGBVgDB6QBKALBYABQBnABCegPIBkgLIhHBIQj3D7keCLQkdCKlfAlIgmAFg");
	this.shape_28.setTransform(90.5,2.3,0.485,0.485);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AJKJgQlkgvkfiUQkfiUj3kHIiKiSIDIAZQCkAUBdABQBDABA7gGQAAhwAJhTQAMhrAdhgIAjh0IBVBVQCSCRCRBLQCSBKDLAjIBBALIhCMqgAgYFcQETCOFZAuIA3qbQjVglichPQichQiYiZQgfBlgKB1QgIBVACCKQhdAPhrgBQhlgCikgUQDvD9ETCOg");
	this.shape_29.setTransform(-91.9,-0.2,0.485,0.485);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#BC1A28","#DA1421"],[0,1],59.3,29.3,-59.2,-29.3).s().p("AIzIuQlegukZiRQkbiSjxkAIhFhKIBkAMQChAVBjABQBVABBOgKQgBh6AJhVQALhxAehkIARg6IArArQCWCVCVBNQCVBNDSAkIAhAFIg9Lig");
	this.shape_30.setTransform(-90.6,0.5,0.485,0.485);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABIFZQg0gMgggrQgfAjgtAKQg7AOg0giQgigVgSgjQgPgdgBghQgCghANgeQgugKgggjQgMgNgKgSQgSgjACgnQACg9AtgpQAigfAvgHQgQgyAUgyQAUgyAwgZQAwgZA1AMQA0AMAfArQAWgYAegNQAegNAhACQAoABAiAWQAhAWASAiQASAjgCAoQAAAcgKAWQAgAIAaAUQAaAUAPAcQASAjgCAnQgDA9gtApQgiAgguAFQAQAzgUAyQgUAygwAZQghARgiAAQgRAAgRgEg");
	this.shape_31.setTransform(-44.1,-54,0.485,0.485);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A30QmIBiiuQAVglAQgXQhchdg3h2Qg3h3gLiCQgRjFBUixQA/iHBshiQBshjCLgyQCag4CjAQQA8jhCxiWQCziXDrgUQAmgDAhAAQC9ADCmBeQAPgeAXgaQAkgoAvgXQAwgXA1gEQAYAAAXACQAmgkAwgTQAxgUA0ABQAYAAAaAFQBCAOAzAqQAyApAZA8QAYAHATAKQAwAYAiAoQAjAoARAzQAWBCgOBHQgMA6gkAwQAEARADAUQCbBTBnCTQBxCiARDEQALCDgjB/QgiB+hMBrQB2BzA4CcQARAvAJAoIAhCTgAwMilQhfAhhJBEQhJBCgrBbQg5B7ALCEQAKBuA3BhQA3BgBaBBIBxBQIghAiMAk2AAdQg3hbhZg9Ih1hRIBlhlQBRhPAmhpQAnhpgKhwQgKiEhNhuQhZiAiOg3IhqgoIAkhuIABgIQAAgJgHgIIhZhvIB9hDQANgIADgNQABgIgCgHQgEgMgLgFQgIgEgJABIiNAWIAFiPQAAgKgGgIQgGgJgLgCQgLgCgJAFQgJAFgEAKIg0CFIh5hMQgJgEgIAAQgMABgIAJQgGAGgBAIQgDAOAJAKIBVBtIh4BDIheBRIhOhXQhGhPhggsQhggthngBQgQAAghACQi3AQiBCBQiBCBgQC4IgMCOIiJgmQhCgSg/gBIgGAAQhXAAhPAeg");
	this.shape_32.setTransform(5.4,-22,0.485,0.485);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A0cOyQAshNA3g4QhxhQhEh4QhDh3gMiHQgOilBGiWQA1hwBbhTQBahTB1gqQBbggBggEQBegDBcAaQATjgCfigQCgijDjgTQCTgNCKA5QCEA2BgBsQAOgMALgGQgVgagHggQgIgfAHggQAIgmAageQApguA9gEQAugDAoAZQAUgyAvgaQAvgbA2ALQA1ALAhArQAhArgCA1QAvgHApAVQA3AbATA7QANAlgIAnQgHAggTAaQgUAbgdAQQAdAlADAvQABAWgEARIgEAQQBXAhBIA5QBJA5A2BOQBfCIAOCkQALCIgvCCQgwCDhjBiQBPA3A6BLQA8BMAhBcQAMAiAJAmg");
	this.shape_33.setTransform(4.6,-22.1,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logospecialissimi, new cjs.Rectangle(-127.3,-75.4,254.7,137.1), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEB34").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-41.2,-3.2,0.174,0.174);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF8623").s().p("AiuJsQhKhAgRhgQg3AVg7gFQg8gEg1gfQg/glgkhAQgig+AAhHQAAhIAjg/QAZgrAjgdQgugngZg2QgYg3AAg7QAAhHAjg/QAbguAqghQAqghA0gOQBTgWBPAeQARhgBKhAQBMhABiAAQBiAABMBAQBKBAAQBgQBRgeBRAWQA0APAqAfQArAiAaAuQAkA+AABIQAAA8gZA2QgZA3gvAmQBDA3AWBSQAJAlAAAhQAABIgkA/QgbAvgqAhQgrAfg0APQhSAWhQgeQgQBghLBAQhLBAhiAAQhiAAhMhAg");
	this.shape_1.setTransform(-41.2,-3.2,0.174,0.174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E01021").s().p("AklFQQiHiHABjOQgBjBCHiHQCFiHC+AAQAkAAAhAJQAuALAZAaIAAgdIC5AAIARAEQARAJAAAUIADEXIjeAAQgGg9hEgYQgVgIgZgDIgUgCQhigBhABGQg8BCgBBhQAABlA4BAQA/BGB1AAQBDAAAvgpQAlgfAhhBIDJCBQg+BuhtBEQhvBFh0AAQjAAAiDiFg");
	this.shape_2.setTransform(-21.1,-3.2,0.174,0.174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E01021").s().p("Am2HUIAAitQAAgXAngLQAUgFATAAIAAoGIhOAAIAAioQAAgZAngIQAUgEATAAIF8AAQC5ABB3CJQByCEAADFQAADGhyCFQh3CJi6AAgAiDDkICVAAQBZgBAyhEQAvg+gBhkQAAhlgug/QgyhEhZAAIiVAAg");
	this.shape_3.setTransform(44.6,-3.2,0.174,0.174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E01021").s().p("AByHVIAAitIAIgUQAQgTAnAAIgVguIk5AAIgWAuQAoAAAQATQAIAKAAAKIAACtImBAAIAAitIAJgUQAPgTAnAAIDpoGIhBAAIAAioIAKgTQATgUAxAAIE/AAIEzLVIAhAFQAhAJgBAZIAACtgAhlAPIDKAAIhlj5g");
	this.shape_4.setTransform(27.1,-3.3,0.174,0.174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E01021").s().p("AChHVIlAnUIAAEAQAxAAAUAUQAKAJAAAKIAACtImFAAIAAitQAAgYAogKQAUgFATAAIAAoGIhPAAIAAioIAMgTQAVgUAuAAIDnAAIFAHjIAAkUIhMAAIAAioIAJgTQATgUAwAAIDnAAIAmAEQAmAKABAZQABApgBB/IhNAAIAALag");
	this.shape_5.setTransform(10.3,-3.3,0.174,0.174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E01021").s().p("AlDFLQiGiJAAjCQAAjBCGiJQCHiJC8AAQC+AACGCJQCGCJAADBQAADCiGCJQiGCJi+AAQi8AAiHiJgAiQinQgzBAAABkQAABjAzBAQA3BEBaAAQBaAAAyhEQAug/AAhkQAAhlgug/QgyhDhaAAQhbAAg2BDg");
	this.shape_6.setTransform(-5.8,-3.3,0.174,0.174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-52.1,-15,104.3,30.2), null);


(lib.foglia2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.foglia2();
	this.instance.parent = this;
	this.instance.setTransform(-70,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foglia2_1, new cjs.Rectangle(-70,-101,140,201), null);


(lib.foglia1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.foglia1();
	this.instance.parent = this;
	this.instance.setTransform(-109,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foglia1_1, new cjs.Rectangle(-109,-115,218,229), null);


(lib.fiore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.1,-3.1,0.545,0.545,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fiore, new cjs.Rectangle(-30.8,-33.9,61.6,67.8), null);


(lib.bollo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBEQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgEgZIgZAAIgEAZQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgWAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAdiDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAdCDQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAJAVIgIguIgBAAIgIAuIARAAg");
	this.shape.setTransform(44,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAVAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_1.setTransform(37.2,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBEQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAXAAQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAABsQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIAhAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_2.setTransform(31.4,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAVAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_3.setTransform(25.1,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAvQgDgIAAgnQAAgmADgIQAHgXAZAAQAiAAACAjQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgVADQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgPgKAAQgGAAgCAGQgBAEAAAjQAAAkABAEQACAGAGAAQAKAAAAgPQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAABIAVADQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgCAjgiAAQgZAAgHgXg");
	this.shape_4.setTransform(18.9,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAVAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_5.setTransform(12.4,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAhQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAVgDQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQABARAKAAQAGAAACgEQADgDAAgJQAAgJgDgFQgCgEgHgCIgIgEQgOgFgGgIQgGgIAAgRQAAgmAjAAQAjAAABAiQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgUADQgBABAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgPgKAAQgJAAAAAOQAAAHACADQACAEAHADIAJADQAOAGAFAIQAGAIAAASQAAAVgIAKQgJALgUAAQgjAAgBglg");
	this.shape_6.setTransform(5.9,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBEQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgEgZIgZAAIgEAZQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgWAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAdiDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAdCDQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAJAVIgIguIgBAAIgIAuIARAAg");
	this.shape_7.setTransform(-6.7,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAWAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAABsQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAIAhAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_8.setTransform(-14.8,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgOg0IgIAAIgBABIAAAyQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgWAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAgAAQAnAAAAAqQAAAYgPAJIATA6QAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAgMgrIAAAjIABABIAGAAQAHAAADgEQAEgEAAgKQAAgLgEgEQgDgEgHAAIgGAAIgBABg");
	this.shape_9.setTransform(-27,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIA7AAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIghAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAeIABAAIAcAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAATQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAeQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAhAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_10.setTransform(-35.6,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAgAAQAnAAAAArQAAApgnAAIgGAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAvQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgJgrIAAAmIABABIAFAAQAHAAAEgFQADgEAAgLQAAgLgDgFQgEgEgHAAIgFAAIgBABg");
	this.shape_11.setTransform(-43.9,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAvQgDgIAAgnQAAgmADgIQAIgXAaAAQAbAAAIAXQADAIAAAmQAAAngDAIQgIAXgbAAQgaAAgIgXgAgJgmQgBAEAAAiQAAAjABAEQADAHAGAAQAIAAACgHQABgEAAgjQAAgigBgEQgCgHgIAAQgGAAgDAHg");
	this.shape_12.setTransform(19.4,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAiDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAiAAQAaAAAIAWQADAMABAhQgBAigDALQgIAXgaAAgAgKgqIAABVQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAABIAGAAQAJgBADgIQACgGAAgeQAAgdgCgGQgDgJgJAAIgGAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_13.setTransform(10.5,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBEQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAiDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAVAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAACDQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_14.setTransform(3.6,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdBEQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAiDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAXAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABsQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIAiAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAUQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-2.2,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAUBEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgEgYIgZAAIgEAYQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgWAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAdiDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAdCDQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAgAAJAUIgIguIgBAAIgIAuIARAAg");
	this.shape_16.setTransform(-10.8,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKBEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgbiDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAWAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIANBVIABAAIANhVQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAWAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgbCDQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_17.setTransform(-19.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000040").s().p("Ag8eMIhNhWQgWgYgfgDQgggDgZASIheBEQgdAWgkgIQgkgHgTggIg5hkQgQgcgegKQgegKgdANIhqAwQghAPgigPQghgPgMgjIgjhuQgKgfgbgPQgcgQgfAGIhxAZQgkAIgdgWQgegWgEgkIgMhzQgDgggYgVQgXgVggAAIhzAAQglAAgZgbQgYgcAEgkIAMhzQADgfgSgaQgTgagfgGIhxgYQgkgIgTggQgSgfAMgjIAjhuQAKgegNgdQgMgdgegNIhpgvQgigPgLgjQgLgjASgfIA6hkQAQgcgHgfQgGgfgagSIhehEQgdgWgEgkQgEglAZgbIBNhWQAVgXAAggQAAgfgVgXIhNhWQgZgbAEglQAEgkAdgWIBehEQAagSAGgfQAHgfgQgcIg6hkQgSgfALgjQALgjAigPIBpgvQAegNAMgdQANgdgKgeIgjhuQgMgjASgfQATggAkgIIBxgYQAfgGATgaQASgagDgfIgMhzQgEgkAYgcQAZgbAlAAIBzAAQAgAAAXgVQAYgVADggIAMhzQAEgkAegWQAdgWAkAIIBxAZQAfAGAcgQQAbgPAKgfIAjhuQAMgjAhgPQAigPAhAPIBqAwQAdANAegKQAegKAQgcIA5hkQATggAkgHQAkgIAdAWIBeBEQAZATAggEQAfgDAWgYIBNhWQAYgbAkAAQAlAAAYAbIBNBWQAWAYAfADQAgAEAZgTIBehEQAdgWAkAIQAkAHATAgIA5BkQAQAcAeAKQAeAKAdgNIBqgwQAhgPAiAPQAiAPALAjIAjBuQAKAfAbAPQAcAQAfgGIBxgZQAkgIAdAWQAeAWAEAkIAMBzQADAgAYAVQAXAVAgAAIBzAAQAlAAAZAbQAYAcgEAkIgMBzQgDAfATAaQASAaAfAGIBxAYQAkAIATAgQASAfgMAjIgjBuQgKAeANAdQAMAdAeANIBpAvQAiAPALAjQALAjgSAfIg6BkQgQAcAHAfQAGAfAaASIBeBEQAdAWAEAkQAEAlgZAbIhNBWQgVAXAAAfQAAAgAVAXIBNBWQAZAbgEAlQgEAkgdAWIheBEQgaASgGAfQgHAfAQAcIA6BkQASAfgLAjQgLAjgiAPIhpAvQgeANgMAdQgNAdAKAeIAjBuQAMAjgSAfQgTAggkAIIhxAYQgfAGgSAaQgTAaADAfIAMBzQAEAkgYAcQgZAbglAAIhzAAQggAAgXAVQgYAVgDAgIgMBzQgEAkgeAWQgdAWgkgIIhxgZQgfgGgcAQQgbAPgKAfIgjBuQgLAjgiAPQgiAPghgPIhqgwQgdgNgeAKQgeAKgQAcIg5BkQgTAggkAHQgkAIgdgWIhehEQgZgSggADQgfADgWAYIhNBWQgYAbglAAQgkAAgYgbg");
	this.shape_18.setTransform(-1,-21,0.42,0.42,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.bollo, new cjs.Rectangle(-82.8,-103.3,163.6,164.6), null);


(lib.avanti = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA1420").s().p("AgZBDQgKgHgCgNQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAagGQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQACAIAFgBQAIABAAgLIAAgUIgBAAQgGANgOAAQgSAAgGgRQgDgKAAgZQAAgaADgKQAGgQASAAQAPAAAGAMIAAgJQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAdAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAABpQAAApgpAAQgPAAgKgIgAgGgqQgBADAAARQAAARABADQACAEAEAAQAFAAACgEQABgDAAgRQAAgRgBgDQgCgFgFABQgEgBgCAFg");
	this.shape.setTransform(121.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA1420").s().p("AAPBLQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgSg4IgIAQIAAAoQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAiRQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIAeAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAA1IAYg1QAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIAfAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIgeA6IAgBXQABAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_1.setTransform(111.1,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA1420").s().p("AglA0QgCgGAAgJQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAcgDQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAJQABAFAFAAQAFAAABgFQABgCAAgQQAAgQgBgCQgBgFgFAAQgFAAgCAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgZAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhRQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAIBJAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAZQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgsAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAAZIABAAQAGgFAKAAQAWAAAHATQACAGAAAYQAAAUgCAHQgIAYgeAAQgeAAgHgYg");
	this.shape_2.setTransform(99.7,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA1420").s().p("AgOAaIAAgzQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAYAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAYQAAADgCACIgVAXIgDABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_3.setTransform(91.6,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA1420").s().p("AgDBLQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAhuIAAAAIgTANQAAABgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgeQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIATgOQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAbAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAACRQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_4.setTransform(82.8,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2C3QgHAAADgGIA6iNIgBgBQgFADgLAAQgwAAgRgyQgGgRAAgrQAAgoAFgQQARg2BCAAQBCAAASA2QAFAQAAAoQAAA6gTAsIg9CUQgCAFgGAAgAgThtQgCAFAAAgQAAAhACAGQAFAOAOAAQAPAAAFgOQACgGAAghQAAgggCgFQgFgPgPAAQgOAAgFAPg");
	this.shape_5.setTransform(114.9,73.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTCDQgFgQAAgnQAAgiAFgQQAHgWASgLIAAgBQgSgLgHgXQgFgOAAgbQAAgfAFgQQARg3BCABQBCgBASA3QAFAQAAAfQAAAYgFARQgIAXgRALIAAABQASAKAHAXQAFAQAAAiQAAAngFAQQgSA2hCAAQhCAAgRg2gAgTAlQgCAGAAAgQAAAfACAHQAFAOAOAAQAPAAAFgOQACgHAAgfQAAgggCgGQgFgPgPAAQgOAAgFAPgAgThwQgCAGAAAZQAAAZACAHQAFAOAOAAQAPAAAFgOQACgHAAgZQAAgZgCgGQgFgOgPAAQgOAAgFAOg");
	this.shape_6.setTransform(92.9,73.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7ByIAAjiQAAgMAKAAIBiAAQALAAAAAMIAABkQAAARgJAKIhYBnQgFAHgHgBQgKABAAgLg");
	this.shape_7.setTransform(71.3,90.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AikEDQgLgkABjfQgBjZAMgoQAjhqCAAAQCEAAAgBqQAMAkAADdQAADfgMAkQggBqiEAAQiBAAgjhqgAgnjeQgEAOAADQQAADRAEAOQAJAbAeAAQAfAAAJgbQADgOAAjRQAAjQgDgOQgJgbgfAAQgeAAgJAbg");
	this.shape_8.setTransform(39.2,56.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDCDQgHgTAAg2QAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAQgFAAAAgFIAAghQAAgFAFAAIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAgSQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAQgFAAAAgFIAAggQAAgFAFAAIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAg1AHgSQARg3A/AAQAogBAXAWQAXAUACAlQABAFgFABIg0AJQgGABgBgFQgDgfgVAAQgOAAgFAOQgCAHAAAvQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAIBDAAQAFAAAAAFIgFAgQgBAFgEAAIg+AAQgBAAgBAAQAAAAgBABQAAAAAAABQAAABAAAAIAAASQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIA7AAQAFAAAAAFIgFAhQgBAFgEAAIg2AAQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAwACAHQAFAOAOAAQAVAAADgeQABgGAGABIA0AKQAFAAgBAFQgCAlgXAUQgXAWgogBQg/ABgRg3g");
	this.shape_9.setTransform(6.2,73.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_10.setTransform(125.4,-12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAiQgDgIAAgaQAAgZADgIQAHgVAXAAQANAAAJAIQAJAHABAOQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgRADQAAABgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgCgMgJAAQgHAAgCAGQgBAEAAAXQAAAYABADQACAIAHgBQAJABACgMQAAgBAAgBQAAAAABAAQAAAAAAgBQABAAAAABIARADQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQgBAOgJAHQgJAIgNAAQgXAAgHgVg");
	this.shape_11.setTransform(119.4,-10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_12.setTransform(113.1,-12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAwQgIgIgCgMQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAQgDQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQACAMAKAAQAMAAAAgMQAAgKgMgDIgHgEQgXgHAAgXQAAgOAJgIQAJgJAMAAQAOAAAIAHQAIAHABAKQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgQADQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgDgKgJAAQgJAAAAAMQAAAHALAFIAIADQAXAJAAAXQAAAOgJAIQgJAKgPAAQgNAAgJgHg");
	this.shape_13.setTransform(107,-10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAwQgJgIgBgMQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAQgDQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQACAMALAAQALAAAAgMQAAgKgLgDIgIgEQgXgHAAgXQAAgOAIgIQAKgJANAAQAMAAAJAHQAHAHACAKQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgPADQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgDgKgIAAQgKAAAAAMQAAAHAKAFIAJADQAXAJAAAXQAAAOgIAIQgKAKgPAAQgNAAgJgHg");
	this.shape_14.setTransform(99.3,-10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgMQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_15.setTransform(91.1,-10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOBLQgQAAgHgHQgHgIAAgRIAAhzQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABzQAAAKAJABIABABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAQQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_16.setTransform(84.8,-12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAiQgDgIAAgaQAAgZADgIQAHgVAXAAQANAAAJAIQAJAHABAOQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgRADQAAABgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgCgMgJAAQgHAAgCAGQgBAEAAAXQAAAYABADQACAIAHgBQAJABACgMQAAgBAAgBQAAAAABAAQAAAAAAgBQABAAAAABIARADQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQgBAOgJAHQgJAIgNAAQgXAAgHgVg");
	this.shape_17.setTransform(78.2,-10.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_18.setTransform(67.6,-12.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOBGQgOAAgFgHQgHgHAAgPIAAg7QAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIgHAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgOQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAHAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgdQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAdQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIAKAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAOQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgKAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAA6QgBAJAJAAIADAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_19.setTransform(62.6,-12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgMQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_20.setTransform(55.5,-10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAkA2QgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhFQAAgPgMAAQgLAAAAAPIAABFQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgRAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhFQAAgPgMAAQgLAAAAAPIAABFQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgSAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAhlQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAJIAAAAQAHgNANAAQAPAAAFAMIABAAQAGgMAQAAQAaAAAAAhIAABIQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_21.setTransform(44.8,-10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAhlQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIASAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAALIAAAAQAGgPAQAAIAEAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgFATIgCABIgEAAQgRAAAAAUIAAA+QAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_22.setTransform(35.2,-10.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAhQgCgHAAgaQAAgZACgHQAHgWAYAAQAZAAAHAWQACAHAAAZQAAAagCAHQgHAWgZAAQgYAAgHgWgAgKgaQgBAEAAAWQAAAXABAEQADAHAHAAQAIAAADgHQABgEAAgXQAAgWgBgEQgDgIgIABQgHgBgDAIg");
	this.shape_23.setTransform(27.3,-10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLBLQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhVQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgNQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAGAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgJQAAghAeAAIAFAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgGAAQgIAAAAAIIAAANQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIANAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAANQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgNAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAABVQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_24.setTransform(20.4,-12.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_25.setTransform(11,-12.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAhlQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIASAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAALIAAAAQAGgPAQAAIAEAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgFATIgCABIgEAAQgRAAAAAUIAAA+QAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_26.setTransform(6,-10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgFgMQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_27.setTransform(-2,-10.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgahlQgBgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIATAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIANBBIABAAIAOhBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgbBlQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_28.setTransform(-10,-10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_29.setTransform(123,-36.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIATAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAB8QAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIAmAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_30.setTransform(114.7,-36.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAB8QAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAlAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAgBAAg");
	this.shape_31.setTransform(106.5,-36.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIBLQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIAAiRQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIASAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAACRQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_32.setTransform(99.7,-36.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASBLQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgRg7IgEAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAAA6QAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgTAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAeAAQAqAAAAAtQAAAcgSAJIAVBBQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAgAgPgzIAAArQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAIAAQAJAAAEgFQAEgFAAgNQAAgNgEgGQgEgFgJAAIgIAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_33.setTransform(92.9,-36.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_34.setTransform(83.2,-36.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiBLQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIAAiRQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAgAAQATAAAKAKQAJAJAAAUQAAAZgRAHIAAABQATAEAAAdQAAAYgLAKQgKAKgWAAgAgNAJIAAArQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAAQAKAAAEgEQAEgFAAgOQAAgNgEgEQgEgFgKAAIgIAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgAgNgzIAAAmQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAIAAQAJAAAEgEQAEgFAAgMQAAgMgEgEQgEgFgJAAIgIAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_35.setTransform(74.2,-36.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_36.setTransform(60.4,-36.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJBLQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAh8QAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgXAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIBHAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgXAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAB8QAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_37.setTransform(51.6,-36.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AglAmQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIASgDQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAWANAAQAHAAAEgFQADgEAAgMQAAgMgDgGQgDgFgIgDIgJgEQgPgFgGgJQgFgJAAgSQAAgoAjAAQAjAAACAlQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgSADQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBgTgNAAQgNAAAAASQAAAKADAFQADAEAHAEIAJADQAQAGAFAIQAHAKAAATQAAAXgJAKQgJAMgUAAQgkAAgBgng");
	this.shape_38.setTransform(43.1,-36.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_39.setTransform(34,-36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgiBLQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAeAAQAUAAAKAKQAMALAAAZQAAAtgqAAIgIAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAA3QAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAgAgNgzIAAAuQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAIAAQAJAAAFgFQAEgGAAgOQAAgOgEgFQgFgGgJAAIgIAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_40.setTransform(25,-36.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF02A").s().p("Ak8CJIAAkRIJ5AAIAAERg");
	this.shape_41.setTransform(98,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BC1A28","#DA1421"],[0,1],59.8,-19.3,5.9,-19.3).s().p("ArWOXInzs4IHzs3Ia3AAQCSAAA6hkQAcgvABgvIAAZpQAABJgbApQg2BRiYAFQhfAEmuAAQmtAAr9gEgAxNBfIFzKeIAA06g");
	this.shape_42.setTransform(26.3,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// Livello_1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjTAAIGnroIAAXRg");
	this.shape_43.setTransform(-62.9,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

}).prototype = getMCSymbolPrototype(lib.avanti, new cjs.Rectangle(-96.4,-74.9,245.3,196.9), null);


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
	this.frame_23 = function() {
		var tl=this;
		tl.stop();
		var delay = 2500;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		this.parent.gotoAndPlay("volantino");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(22).call(this.frame_23).wait(1).call(this.frame_24).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AJsKcIAA03IEiAAIAAU3g");
	var mask_graphics_17 = new cjs.Graphics().p("AidKdIAA05IE7AAIAAU5g");
	var mask_graphics_18 = new cjs.Graphics().p("AjHKfIAA09IGPAAIAAU9g");
	var mask_graphics_19 = new cjs.Graphics().p("AkNKiIAA1EIIaAAIAAVEg");
	var mask_graphics_20 = new cjs.Graphics().p("AluKnIAA1OILdAAIAAVOg");
	var mask_graphics_21 = new cjs.Graphics().p("AnqKtIAA1ZIPVAAIAAVZg");
	var mask_graphics_22 = new cjs.Graphics().p("AqDK1IAA1pIUHAAIAAVpg");
	var mask_graphics_23 = new cjs.Graphics().p("As3K+IAA17IZvAAIAAV7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:91,y:-9.4}).wait(1).to({graphics:mask_graphics_17,x:165.5,y:-9.4}).wait(1).to({graphics:mask_graphics_18,x:159.6,y:-9.4}).wait(1).to({graphics:mask_graphics_19,x:149.8,y:-9.3}).wait(1).to({graphics:mask_graphics_20,x:135.9,y:-9.2}).wait(1).to({graphics:mask_graphics_21,x:118.2,y:-9.1}).wait(1).to({graphics:mask_graphics_22,x:96.5,y:-9}).wait(1).to({graphics:mask_graphics_23,x:70.9,y:-8.9}).wait(2));

	// avanti
	this.instance = new lib.avanti();
	this.instance.parent = this;
	this.instance.setTransform(61.9,-13.8,0.594,0.594,0,0,0,0.4,0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15).to({_off:false},0).wait(9));

	// prodotto
	this.instance_1 = new lib.prodotto_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.8,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:36.2},0).to({x:-3.8},8,cjs.Ease.backOut).wait(16));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AqfISIAAwjIU/AAIAAQjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhNJYIAAyvICbAAIAASvg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkHJtIAAzZIIPAAIAATZg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmkJ/IAAz9INJAAIAAT9g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AolKNIAA0ZIRKAAIAAUZg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqJKZIAA0xIUTAAIAAUxg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ArQKhIAA1BIWhAAIAAVBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ar7KmIAA1LIX3AAIAAVLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AsJKnIAA1OIYTAAIAAVOg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:81.9,y:-25.6}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_9,x:4.7,y:-16.8}).wait(1).to({graphics:mask_1_graphics_10,x:23.5,y:-13.6}).wait(1).to({graphics:mask_1_graphics_11,x:39.4,y:-10.9}).wait(1).to({graphics:mask_1_graphics_12,x:52.4,y:-8.7}).wait(1).to({graphics:mask_1_graphics_13,x:62.5,y:-6.9}).wait(1).to({graphics:mask_1_graphics_14,x:69.7,y:-5.7}).wait(1).to({graphics:mask_1_graphics_15,x:74,y:-5}).wait(1).to({graphics:mask_1_graphics_16,x:75.5,y:-4.7}).wait(9));

	// retro
	this.instance_2 = new lib.retro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48,-28.3,0.594,0.594,0,0,0,0.1,0.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,-91,213.9,172);


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
	this.shape.setTransform(122.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeB1IgziAIAACAIgpAAIAAjpIAiAAIAzB4IAAh4IAoAAIAADpg");
	this.shape_1.setTransform(106.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_2.setTransform(94,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWB1IAAjGIgmAAIAAgjIB5AAIAAAjIglAAIAADGg");
	this.shape_3.setTransform(83.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeB1IgziAIAACAIgpAAIAAjpIAiAAIAzB4IAAh4IAoAAIAADpg");
	this.shape_4.setTransform(69.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcB1IgJgzIgkAAIgJAzIgtAAIAujpIA0AAIAtDpgAAOAkIgNhdIgOBdIAbAAg");
	this.shape_5.setTransform(53.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyB1IAAjpIAwAAIAADJIA1AAIAAAgg");
	this.shape_6.setTransform(39.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BlQgQgUgBgmIAAhWQABgmAQgUQAQgSAkgBQAlABARASQAQAUAAAmIAABWQAAAmgQAUQgRATglABQgkgBgQgTgAgQhNQgDAHAAAPIAABuQAAAOADAJQAEAIAMAAQAMAAAFgJQADgHAAgPIAAhuQAAgPgDgHQgFgJgMABQgLgBgFAJg");
	this.shape_7.setTransform(24.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYB1IgsjpIApAAIAbChIAaihIArAAIgsDpg");
	this.shape_8.setTransform(8.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB1IAAjpIAxAAIAADJIA2AAIAAAgg");
	this.shape_9.setTransform(-11.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_10.setTransform(-22.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcB1IgJgzIgkAAIgJAzIgtAAIAtjpIA0AAIAuDpgAAPAkIgPhdIgMBdIAbAAg");
	this.shape_11.setTransform(-42,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_12.setTransform(-54,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzB1IAAjpIAxAAIAADJIA2AAIAAAgg");
	this.shape_13.setTransform(-63.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BkQgOgVAAgnIAAhPQAAgoAPgUQAPgVAlAAQAlAAAPASQAQASAAAhIAAANIgvAAIAAgQQAAgQgEgIQgDgHgNAAQgMAAgEAIQgDAJgBARIAABmQABARAEAJQAEAJAMAAQANAAAFgJQAFgKAAgRIAAgZIgXAAIAAgcIBDAAIAAB4IggAAIgDgVQgLAYgbABQgigBgPgUg");
	this.shape_14.setTransform(-79,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BlQgQgUgBgmIAAhWQABgmAQgUQAPgSAlgBQAlABARASQAPAUAAAmIAABWQAAAmgPAUQgRATglABQglgBgPgTgAgPhNQgEAHgBAPIAABuQABAOAEAJQADAIAMAAQAMAAAFgJQADgHAAgPIAAhuQAAgPgDgHQgFgJgMABQgLgBgEAJg");
	this.shape_15.setTransform(-95.6,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxB1IAAjpIBjAAIAAAhIgzAAIAAA/IArAAIAAAgIgrAAIAABpg");
	this.shape_16.setTransform(-109.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBnQgQgSgBgmIAogHQABAWAGALQAFALALAAQAIAAAEgGQADgFABgIQAAgPgHgJQgGgKgMgLIgZgVQgOgNgIgNQgHgNAAgUQAAgdARgPQARgPAdgBQAgABAMARQAMATACAcIgpAGQgBgSgEgJQgDgJgKAAQgIAAgEAGQgEAGgBAIQAAAMAGAIQAFAIAJAJIAYAVQASAPAJAQQAJAQAAAWQAAARgHANQgIANgNAIQgOAIgSAAQgfgBgRgRg");
	this.shape_17.setTransform(-123.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(54));

	// Livello_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0vFBQhGAAgygxQgvgwgChDIAAk0QAAhGAxgyQAygxBGAAMApfAAAQBGAAAxAxQAyAyAABGIAAE0QgBBDgxAwQgwAxhHAAg");

	// Livello_7
	this.instance = new lib.fiore();
	this.instance.parent = this;
	this.instance.setTransform(-205.7,-14.2,0.74,0.74);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({rotation:-720,x:175},52).wait(1));

	// Livello_6
	this.instance_1 = new lib.fiore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177.4,28.3,0.74,0.74);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:720,x:203.3},52).wait(1));

	// Livello_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000040").s().p("A7fInIAAxNMA2/AAAIAARNg");

	var maskedShapeInstanceList = [this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(54));

	// Livello 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.4)").s().p("A0vFBQhGAAgygxQgvgwgChDIAAk0QAAhGAxgyQAygxBGAAMApfAAAQBGAAAxAxQAyAyAABGIAAE0QgBBDgxAwQgwAxhHAAg");
	this.shape_19.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-32.1,299.4,68.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{volantino:64});

	// timeline functions:
	this.frame_0 = function() {
		var tl=this;
		tl.stop();
		var delay = 100;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_38 = function() {
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
	this.frame_63 = function() {
		this.stop();
	}
	this.frame_107 = function() {
		this.cta.gotoAndPlay("lamp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(25).call(this.frame_63).wait(44).call(this.frame_107).wait(1));

	// cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#725559").ss(2,1,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(108));

	// bollo
	this.instance = new lib.bollo();
	this.instance.parent = this;
	this.instance.setTransform(-28.4,-32.8,0.649,0.649,-40.1,0,0,0.4,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:18.6,y:14.2},9,cjs.Ease.backOut).wait(70));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(151,285.8,0.528,0.528,0,0,0,1.8,1.4);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(92).to({_off:false},0).to({y:224.2},15,cjs.Ease.backOut).wait(1));

	// foglia2
	this.instance_1 = new lib.foglia2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.1,-149,1.898,1.898,109.3,0,0,0.1,-0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({regY:-0.1,scaleX:1.9,scaleY:1.9,rotation:-65.9,x:140.5,y:400.1},25,cjs.Ease.sineOut).to({_off:true},1).wait(44));

	// foglia1
	this.instance_2 = new lib.foglia1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,-176.6,1.9,1.9,-35.5,0,0,0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.2,scaleX:1.9,scaleY:1.9,rotation:138,x:77.2,y:473.3},29,cjs.Ease.sineOut).to({_off:true},1).wait(33).to({_off:false,regX:0.3,scaleX:1.9,scaleY:1.9,rotation:63.8,x:143.9,y:-224.8},0).to({regX:0.2,scaleX:1.9,scaleY:1.9,rotation:-87,x:123.7,y:467.7},29,cjs.Ease.sineOut).to({_off:true},1).wait(15));

	// prodotto
	this.instance_3 = new lib.prodottoanim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(112.6,130.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({_off:true},26).wait(36));

	// volantino
	this.instance_4 = new lib.volantino_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161.6,175.5,0.872,0.872,6,0,0,0.7,0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(36));

	// logo-specialissimi
	this.instance_5 = new lib.logospecialissimi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.2,133.9,1.05,1.05,0,0,0,0.3,1.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({_off:true},37).wait(62));

	// tx1
	this.instance_6 = new lib.tx1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.2,23.3,1.76,1.76,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(102));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.1,234.5,0.96,0.96,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(108));

	// fondo.jpg
	this.instance_8 = new lib.fondo();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-350,589.7,726);
// library properties:
lib.properties = {
	id: '37B5A1A697A54202A6EEAA3083230580',
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"foglia1.png", id:"foglia1"},
		{src:"foglia2.png", id:"foglia2"},
		{src:"fondo.jpg", id:"fondo"},
		{src:"prodotto.png", id:"prodotto"},
		{src:"volantino.jpg", id:"volantino"}
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