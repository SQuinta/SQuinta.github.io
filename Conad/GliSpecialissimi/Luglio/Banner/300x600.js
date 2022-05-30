(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.angolo = function() {
	this.initialize(img.angolo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.pagina = function() {
	this.initialize(img.pagina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.prodotto = function() {
	this.initialize(img.prodotto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,124);


(lib.volantino = function() {
	this.initialize(img.volantino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,258);// helper functions:

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
	this.instance.setTransform(-104,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.volantino_1, new cjs.Rectangle(-104,-129,208,258), null);


(lib.tx2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgEgUIgTAAIgEAUQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgSAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAYhoQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAYBoQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAgAAHAQIgHgkIAAAAIgGAkIANAAg");
	this.shape.setTransform(35.1,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIARAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAABoQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1.setTransform(29.8,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABVIAAABIAbAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_2.setTransform(25.1,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAhoQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAQAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAABoQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_3.setTransform(20.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAmQgCgHAAgfQAAgeACgHQAGgSAUAAQAbAAACAcQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgQADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgMgIAAQgEAAgCAFQgBADAAAcQAAAcABAEQACAFAEAAQAIAAABgMQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAQADQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQgCAcgbAAQgUAAgGgSg");
	this.shape_4.setTransform(15.1,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAhoQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAQAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABoQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(9.9,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAbQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIARgDQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAOAIAAQAFAAACgCQACgDAAgIQAAgHgCgDQgCgDgFgDIgHgCQgMgFgEgGQgFgHAAgNQAAgeAcAAQAcAAABAbQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgRACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAgMgIAAQgHAAAAALQAAAGABADQACADAGACIAGADQAMAEAEAGQAFAHAAAOQAAARgHAIQgHAJgQAAQgcAAgBgdg");
	this.shape_6.setTransform(4.7,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgEgUIgTAAIgEAUQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgSAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAYhoQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAYBoQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAgAAHAQIgHgkIAAAAIgGAkIANAAg");
	this.shape_7.setTransform(-5.3,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABVIAAABIAbAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_8.setTransform(-11.8,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALA2IgCgBIgLgpIgGAAIgBABIAAAoQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgSAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAaAAQAfAAAAAiQAAATgMAIIAPAuQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAgAgJgiIAAAcIABABIAEAAQAFAAADgDQADgEAAgIQAAgJgDgCQgDgEgFAAIgEAAIgBABg");
	this.shape_9.setTransform(-21.6,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXA2QAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAvAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgaAAIgBACIAAAXIABABIAWAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAOQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgWAAIgBABIAAAYIABABIAaAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_10.setTransform(-28.4,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAhoQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAZAAQAgAAAAAjQAAAhggAAIgEAAIgBABIAAAmQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAgAgHgiIAAAeIABABIAEAAQAFAAADgDQADgEAAgJQAAgJgDgDQgDgEgFAAIgEAAIgBABg");
	this.shape_11.setTransform(-35,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA2QAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAvAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgaAAIgBACIAAAXIABABIAWAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAOQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgWAAIgBABIAAAYIABABIAaAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_12.setTransform(15.6,-10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAbAAQAVABAGASQADAJAAAaQAAAcgDAIQgGATgVgBgAgIghIAABDIABABIAFAAQAHABACgHQACgEAAgZQAAgXgCgFQgCgGgHgBIgFAAIgBACg");
	this.shape_13.setTransform(8.8,-10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIARAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABoQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_14.setTransform(3.4,-10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAhoQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIARAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABVIABABIAaAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAIAAAQQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-1.3,-10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgEgUIgTAAIgEAUQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgSAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAYhoQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAYBoQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAgAAHAQIgHgkIAAAAIgGAkIANAAg");
	this.shape_16.setTransform(-8.2,-10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIA2IgBgBIgWhoQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIASAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAKBDIABAAIAKhDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIASAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgWBoIgBABg");
	this.shape_17.setTransform(-15.2,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF8622").s().p("AtPFGIAAqLIafAAIAAKLg");
	this.shape_18.setTransform(0,-29,1,1.63);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx2, new cjs.Rectangle(-84.8,-82,169.6,106.2), null);


(lib.tx1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1994E0").s().p("AgfBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAZQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIggAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAXQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAbAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAYQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgbAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAYQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAgAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAAZQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(67.7,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1994E0").s().p("AgNBEQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhoIgBgBIgXAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgZQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIBOAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAZQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgWAAIgBABIAABoQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_1.setTransform(59.2,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1994E0").s().p("AAMBEQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgNgxIgEAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAwQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgbAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAmAAQAoAAAAArQAAAYgPAJIASA5QAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAgAgKgnIAAAeQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAEAAQAFAAADgEQADgDAAgJQAAgJgDgEQgDgDgFAAIgEAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_2.setTransform(50.3,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1994E0").s().p("AgfBEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAiDQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAZQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIggAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAXQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAYQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgbAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAYQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAgAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAZQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_3.setTransform(41.4,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1994E0").s().p("AgfBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAZQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIggAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAZQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAXQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgbAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAAAyQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_4.setTransform(33.5,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1994E0").s().p("AgfBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAZQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIggAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAZQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAbAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAXQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgbAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAAAyQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_5.setTransform(25.6,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1994E0").s().p("AglAtQgDgKAAgjQAAgiADgKQAIgZAdAAQAeAAAIAZQADAKAAAiQAAAjgDAKQgIAZgeAAQgdAAgIgZgAgHgkQgBAEAAAgQAAAhABADQACAGAFgBQAGABABgGQABgDAAghQAAgggBgEQgBgEgGAAQgFAAgCAEg");
	this.shape_6.setTransform(16.8,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1994E0").s().p("AgNBEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAiDQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIAbAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_7.setTransform(5.9,6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1994E0").s().p("AglBEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAiDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAlAAQAdAAAIAXQAEAMgBAgQABAggEAMQgIAYgdAAgAgIgmIAABNQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAEAAQAHgBADgGQABgFAAgcQAAgbgBgFQgDgGgHgBIgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape_8.setTransform(-1,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1994E0").s().p("AgfBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAZQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIggAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAAXQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAbAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAYQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgbAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAYQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAgAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAAZQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(-13.6,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1994E0").s().p("AAMBEQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgNgxIgEAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAwQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgbAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAmAAQAoAAAAArQAAAYgPAJIASA5QAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAgAgKgnIAAAeQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAEAAQAFAAADgEQADgDAAgJQAAgJgDgEQgDgDgFAAIgEAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_10.setTransform(-22.2,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1994E0").s().p("AASBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgWIgXAAIgEAWQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgcAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAdiDQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAIAeAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAdCDQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAgAAIAVIgHgrIgBAAIgHArIAPAAg");
	this.shape_11.setTransform(-32.1,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1994E0").s().p("AAYBEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAhFIgBAAIgMAtQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgNAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgMgtIgBAAIAABFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgYAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAiDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIASBBIABAAIAShBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_12.setTransform(-42.7,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1994E0").s().p("AALBEQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgUhLIgBAAIAABLQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgYAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAiDQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAUBLIABAAIAAhLQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAYAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAACDQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_13.setTransform(-57.2,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1994E0").s().p("AgcA6QgLgKAAgUIAAheQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAcAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAABhQAAAJAHAAQAJAAAAgJIAAhhQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAbAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAABeQAAAUgLAKQgKALgTAAQgRAAgLgLg");
	this.shape_14.setTransform(-66.8,6.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1994E0").s().p("AgNAWIgBgKIABgIQABgEADAAQgDgDgBgEIgBgHIABgIQADgIAKgBQALABADAIIABAIIgBAHQgBAEgDADQADAAABAEIABAIIgBAKQgDAKgLgBQgKABgDgKgAgCAGIgBAGIABAHQAAABAAAAQAAABABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIABgHIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABgAgCgSIgBAFIABAFQAAABAAABQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBIABgFIgBgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_15.setTransform(62.1,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1994E0").s().p("AAAAeIAAgBIAAguIgBAAIgHAGQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgKIABgCIAIgFIABAAIAIAAIABAAIAAA6IgBABg");
	this.shape_16.setTransform(58.1,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1994E0").s().p("AgNAWQgBgDAAgTQAAgSABgEQADgIAKgBQALABADAIQABAEAAASQAAATgBADQgDAKgLgBQgKABgDgKgAgCgSIgBASIABATQAAABAAAAQAAABABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIABgTIgBgSQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_17.setTransform(54.7,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1994E0").s().p("AgNAfIgBgBIAAgIIAAgBIAPgYQADgFAAgGIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAAGIgBAAIgJAAIgBgBIABgIQADgJAKAAQALAAADAJIABAHQAAAJgEAFIgMAVIAPAAIABABIAAAIIgBABg");
	this.shape_18.setTransform(51,-11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1994E0").s().p("AgPAVQgBgDAAgSQAAgRABgDQAEgLALAAQAMAAAEALQABADAAARQAAASgBADQgEALgMgBQgLABgEgLgAgDgRQgBACAAAPQAAAQABACQABACACAAQADAAABgCIABgSIgBgRQgBgDgDAAQgCAAgBADg");
	this.shape_19.setTransform(45.4,-11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1994E0").s().p("AgEAeIgBgBIAAg6IABAAIAJAAIABAAIAAA6IgBABg");
	this.shape_20.setTransform(42.4,-11.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1994E0").s().p("AgMAeIgBgBIAAg6IABAAIAKAAIABAAIAAAwIAAABIAPAAIABABIAAAIIgBABg");
	this.shape_21.setTransform(39.8,-11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1994E0").s().p("AgPAVQgBgDAAgSQAAgRABgDQAEgLALAAQAPAAABAPQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgKABIgBgBQAAgGgFAAQgDAAgBADIAAARIAAASQABACADAAQAEAAABgCIAAgLIAAgBIgEAAIgBgBIAAgHIABAAIAPAAIABAAIAAACQAAASgCADQgDALgMgBQgLABgEgLg");
	this.shape_22.setTransform(35.9,-11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1994E0").s().p("AgLAaQgEgEgBgJIAAgrIABAAIAKAAIABAAIAAAtQAAAFAEAAQAFAAgBgFIAAgtIACAAIAKAAIABAAIAAArQgBAJgEAEQgEAFgIAAQgHAAgEgFg");
	this.shape_23.setTransform(31.9,-11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1994E0").s().p("AgMAeIgBgBIAAg6IABAAIAJAAIABAAIAAAwIABABIAPAAIAAABIAAAIIAAABg");
	this.shape_24.setTransform(28.3,-11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1994E0").s().p("AADAeIgBgBIAAgHIgBgBIgQAAIgBgBIAAgIIAAgBIANgoIABAAIAIAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgLAnIAAAAIAFAAIABAAIAAgNIABgBIAJAAIABABIAAANIAAAAIADAAIABABIAAAIIgBABIgDAAIAAABIAAAHIgBABg");
	this.shape_25.setTransform(22.8,-11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1994E0").s().p("AgNAfIgBgBIAAgIIAAgBIAPgYQADgFAAgGIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAAGIgBAAIgJAAIgBgBIABgIQADgJAKAAQALAAADAJIABAHQAAAJgEAFIgMAVIAPAAIABABIAAAIIgBABg");
	this.shape_26.setTransform(19.1,-11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1994E0").s().p("AAAAoIgBgBIAAg7IABAAIAJAAIABAAIAAA7IgBABgAABgbIgBgBIgJgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAJAAIABABIAHAKQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_27.setTransform(14.1,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1994E0").s().p("AgPAeIgBgBIAAg6IABAAIAPAAQAMAAADAKQACAEAAAPQAAAPgCAFQgDAKgMAAgAgEgSIAAAlIABABIACAAQADAAACgEQABgDAAgNQAAgNgBgDQgCgDgDAAIgCAAIgBABg");
	this.shape_28.setTransform(11.5,-11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1994E0").s().p("AgMAeIgBgBIAAg6IABAAIAaAAIAAAAIAAAJIAAABIgPAAIAAABIAAANIAAAAIAMAAIABABIAAAIIgBABIgMAAIAAABIAAANIAAABIAPAAIAAABIAAAIIAAABg");
	this.shape_29.setTransform(7.7,-11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1994E0").s().p("AgEAeIgBgBIAAgvIAAgBIgKAAIgBgBIAAgJIABAAIAfAAIABAAIAAAJIgBABIgKAAIAAABIAAAvIgBABg");
	this.shape_30.setTransform(4.1,-11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1994E0").s().p("AAGAeIgBAAIgGgXIgDAAIgBAAIAAAWIgBABIgKAAIgBgBIAAg6IABAAIAPAAQARAAAAASQAAALgHADIAIAaQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAgFgTIAAAQIABABIACAAQADgBABgCQACgBAAgFQAAgEgCgCQgBgCgDAAIgCAAIgBAAg");
	this.shape_31.setTransform(0.4,-11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1994E0").s().p("AAJAeIgBgBIgCgLIgLAAIgCALIgBABIgKAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABgBIANg6IABAAIAKAAIAAAAIAOA6IgBABgAAEAJIgEgUIgDAUIAHAAg");
	this.shape_32.setTransform(-3.8,-11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1994E0").s().p("AAMAeIgBgBIAAgiIAAAAIgIAXIgBABIgEAAIgBgBIgGgXIgBAAIAAAiIgBABIgJAAIgBgBIAAg6IABAAIALAAIABAAIAIAfIABAAIAJgfIABAAIAJAAIABAAIAAA6IgBABg");
	this.shape_33.setTransform(-8.3,-11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1994E0").s().p("AAJAeIgBgBIgCgLIgLAAIgCALIgBABIgKAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABgBIANg6IABAAIAKAAIAAAAIAOA6IgBABgAAEAJIgEgUIgDAUIAHAAg");
	this.shape_34.setTransform(-14.7,-11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1994E0").s().p("AgKAeQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAPgwIgIAAIAAAAIAAAFIgBABIgIAAIgBgBIAAgPIABAAIAbAAIABAAIAAAJIgBABIgOAwIgBABg");
	this.shape_35.setTransform(-20.2,-11.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1994E0").s().p("AAAAeIAAgBIAAguIgBAAIgHAGQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgKIABgCIAIgFIABAAIAIAAIABAAIAAA6IgBABg");
	this.shape_36.setTransform(-24.3,-11.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1994E0").s().p("AAAAoIgBgBIAAg7IABAAIAJAAIABAAIAAA7IgBABgAABgbIgBgBIgJgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAJAAIABABIAHAKQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_37.setTransform(-29,-12.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1994E0").s().p("AgPAeIgBgBIAAg6IABAAIAPAAQAMAAADAKQACAEAAAPQAAAPgCAFQgDAKgMAAgAgEgSIAAAlIABABIACAAQAEAAABgEQABgDAAgNQAAgNgBgDQgBgDgEAAIgCAAIgBABg");
	this.shape_38.setTransform(-31.6,-11.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1994E0").s().p("AgMAeIgBgBIAAg6IABAAIAaAAIAAAAIAAAJIAAABIgPAAIAAABIAAANIAAAAIAMAAIABABIAAAIIgBABIgMAAIAAABIAAANIAAABIAPAAIAAABIAAAIIAAABg");
	this.shape_39.setTransform(-35.4,-11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1994E0").s().p("AgEAeIgBgBIAAgvIAAgBIgKAAIgBgBIAAgJIABAAIAfAAIABAAIAAAJIgBABIgKAAIAAABIAAAvIgBABg");
	this.shape_40.setTransform(-39,-11.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1994E0").s().p("AAGAeIgBAAIgGgXIgDAAIgBAAIAAAWIgBABIgKAAIgBgBIAAg6IABAAIAPAAQARAAAAASQAAALgHADIAIAaQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAgFgTIAAAQIABABIACAAQADgBABgCQACgBAAgFQAAgEgCgCQgBgCgDAAIgCAAIgBAAg");
	this.shape_41.setTransform(-42.7,-11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1994E0").s().p("AAJAeIgBgBIgCgLIgLAAIgCALIgBABIgKAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABgBIANg6IABAAIAKAAIAAAAIAOA6IgBABgAAEAJIgEgUIgDAUIAHAAg");
	this.shape_42.setTransform(-46.9,-11.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1994E0").s().p("AAMAeIgBgBIAAgiIgBAAIgHAXIgBABIgDAAIgCgBIgGgXIgBAAIAAAiIAAABIgJAAIgCgBIAAg6IACAAIAKAAIABAAIAIAfIABAAIAJgfIABAAIAJAAIABAAIAAA6IgBABg");
	this.shape_43.setTransform(-51.4,-11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1994E0").s().p("AAJAeIgBgBIgCgLIgLAAIgCALIgBABIgKAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABgBIANg6IABAAIAKAAIAAAAIAOA6IgBABgAAEAJIgEgUIgDAUIAHAAg");
	this.shape_44.setTransform(-57.8,-11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1994E0").s().p("AgPAeIgBgBIAAg6IABAAIAPAAQAMAAADAKQACAEAAAPQAAAPgCAFQgDAKgMAAgAgEgSIAAAlIAAABIAEAAQADAAABgEQABgDAAgNQAAgNgBgDQgBgDgDAAIgEAAIAAABg");
	this.shape_45.setTransform(-61.8,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx1, new cjs.Rectangle(-73.6,-17,147.3,37), null);


(lib.retro = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B01325").s().p("ASlJaQg6hkiTAAMgiZAAAIAAyvMAiZAAAQCTAAA6BkQAdAyAAAyIAASrQgBgwgcgwg");
	this.shape.setTransform(50.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.retro, new cjs.Rectangle(-71.3,-69.8,243.6,139.6), null);


(lib.prodotto_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.prodotto();
	this.instance.parent = this;
	this.instance.setTransform(-85,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prodotto_1, new cjs.Rectangle(-85,-62,170,124), null);


(lib.ondablu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("EghZAEBIAAnKIAGAAQAlABAhgLQAigKAagRQAbgSAlAAQAlAAAaASQAbARAiAKQAiALAkgBQAkABAigLQAhgKAbgRQAagSAlAAQAmAAAaASQAcARAgAKQAiALAlgBQAkABAigLQAhgKAbgRQAagSAlAAQAlAAAaASQAcARAgAKQAjALAkgBQAkABAjgLQAggKAbgRQAagSAmAAQAlAAAaASQAcARAgAKQAjALAkgBQAkABAigLQAhgKAbgRQAbgSAkAAQAlAAAbASQAbARAhAKQAiALAkgBQAlABAigLQAggKAcgRQAagSAkAAQAmAAAaASQAbARAgAKQAjALAkgBQAkABAjgLQAggKAcgRQAZgSAmAAQAlAAAaASQAbARAhAKQAiALAkgBQAlABAigLQAhgKAbgRQAagSAmAAQAkAAAbASQAbARAhAKQAhALAlgBQAkABAigLQAhgKAcgRQAagSAlAAQAlAAAaASQAbARAhAKQAjALAkgBQAkABAigLQAhgKAbgRQAagSAmAAQAlAAAaASQAcARAgAKQAiALAkgBQAlABAhgLQAigKAbgRQAagSAlAAQAlAAAbASQAbARAhAKQAhALAlgBIAGAAIAAHKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ondablu, new cjs.Rectangle(-213.7,-25.7,427.5,51.4), null);


(lib.ondabianca = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehg8ALqIAA0zIAQABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBQg1QBMgyBsAAQBrAABMAyQBQA1BfAcQBjAdBpABQBqgBBigdQBggcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBpABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBMgyBrAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBNgyBrAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBQg1QBMgyBsAAQBrAABMAyQBQA1BfAcQBjAdBpABQBqgBBigdQBggcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBpABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABIAQgBIAAUzg");
	this.shape.setTransform(0,0,0.344,0.344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ondabianca, new cjs.Rectangle(-213.7,-25.7,427.5,51.4), null);


(lib.ondaazzurra = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ehg8ALqIAA0zIAQABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBQg1QBMgyBsAAQBrAABMAyQBQA1BfAcQBjAdBpABQBqgBBigdQBggcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBpABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBMgyBrAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABQBpgBBjgdQBfgcBPg1QBNgyBrAAQBsAABMAyQBQA1BfAcQBiAdBqABQBpgBBjgdQBfgcBQg1QBMgyBsAAQBrAABMAyQBQA1BfAcQBjAdBpABQBqgBBigdQBggcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBpABQBqgBBjgdQBfgcBPg1QBMgyBsAAQBsAABMAyQBPA1BfAcQBjAdBqABIAQgBIAAUzg");
	this.shape.setTransform(0,0,0.344,0.344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ondaazzurra, new cjs.Rectangle(-213.7,-25.7,427.5,51.4), null);


(lib.ombrellone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#696969","#FFFFFF"],[0,1],0,0,0,0,0,5.4).s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape.setTransform(0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#949494","#FFFFFF"],[0,0.478,1],-0.8,-0.2,0.9,0.3).s().p("AmXToQgEgBgCgEQgCgEABgEMAMpgm7QABgEAEgCQAEgCAEABIADACQAGAEgDAHMgMpAm7QgBAEgEACIgEABIgDAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#949494","#FFFFFF"],[0,0.478,1],-0.4,-0.6,0.6,0.8).s().p("AwrMIQgDgDABgEQABgFADgCMAhIgYDQAIgGAGAIIABADQACAHgGAEMghHAYDQgEADgDAAQgEAAgDgFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#949494","#FFFFFF"],[0,0.478,1],0,-0.7,0,1).s().p("A0eAKQgDAAgEgDQgCgDgBgEQAAgJAKAAMAo8AAAQAFAAACADQADADAAADIAAADQgCAHgIAAg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#949494","#FFFFFF"],[0,0.478,1],0.5,-0.7,-0.5,0.7).s().p("AQeMKMghHgYEQgDgCgBgEQgBgEADgEQACgDAFgBQAEAAADACMAhHAYEQADACABAEQAAAEgCAEIgCACQgDADgDAAQgDAAgDgDg");
	this.shape_4.setTransform(0,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#949494","#FFFFFF"],[0,0.478,1],0.8,-0.2,-0.9,0.3).s().p("AGMThMgMpgm7QgBgEACgEQABgDAEgCQAEgBAEACQAEACABAEMAMpAm7QABAEgCAEQgCAEgEABIgDAAQgIAAgBgHg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#2596DD","#168CDB"],[0,1],3.7,4.7,-6.4,-2.6).s().p("AhEAoIAlhuIBkBJIhdBEg");
	this.shape_6.setTransform(9.4,-11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#2596DD","#168CDB"],[0,1],10.4,9.8,-13.4,-7.5).s().p("AgwA6QgugigrggIAlhxQAzArBBAwQA3AoBDAqIhfBFQgugegtghg");
	this.shape_7.setTransform(24.9,-33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#2596DD","#168CDB"],[0,1],16.8,14.8,-20.1,-12).s().p("Ag0A/QhQg7hGg7IAlhyQBVBMBcBEQBgBFBfA3IhgBGQhJgshWg+g");
	this.shape_8.setTransform(39.6,-53.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#2596DD","#168CDB"],[0,1],23.4,20.2,-27.3,-16.6).s().p("Ag6BHQh2hWhghZIAmhzQBpBnCHBjQCIBiCDBDIhiBIQh1hAh0hVg");
	this.shape_9.setTransform(55.2,-74.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#2596DD","#168CDB"],[0,1],30,26.1,-35.1,-21.2).s().p("AhHBYQihhzhxh4IAqiAQB3CGC3CFQC5CFCjBIIhtBPQiUhHihh1g");
	this.shape_10.setTransform(71.3,-96.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#2596DD","#168CDB"],[0,1],6.5,2.6,-3.6,-4.7).s().p("AhEgBIBdhFIAsAgIglBtg");
	this.shape_11.setTransform(-9.3,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#2596DD","#168CDB"],[0,1],13.4,7.5,-10.4,-9.8).s().p("AgPAfQg3gohDgqIBfhGIBbBAQAuAiArAhIglBvQgzgqhBgwg");
	this.shape_12.setTransform(-24.8,33.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#2596DD","#168CDB"],[0,1],20.1,12.1,-16.8,-14.7).s().p("AgLAaQhehEhhg4IBghGQBPAwBQA6QBQA6BGA8IglBxQhWhMhbhDg");
	this.shape_13.setTransform(-39.6,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#2596DD","#168CDB"],[0,1],27.3,16.7,-23.4,-20.1).s().p("AgFASQiIhiiDhEIBihHQBxA+B4BXQB3BXBfBYIgmBzQhphniHhjg");
	this.shape_14.setTransform(-55.2,75.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#2596DD","#168CDB"],[0,1],35.1,21.3,-30,-26).s().p("AACAJQi5iFijhIIBthPQCVBHCgB1QCjB2BvB2IgqB/Qh3iFi3iGg");
	this.shape_15.setTransform(-71.2,97);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#DEDEDE"],[0,1],32.6,23.7,-32.5,-23.6).s().p("ArGPTQi5iHijhIIQisEIGYzcQB3CGC4CEQC5CHCjBHIwiMFImYTdQh4iGi3iFg");
	this.shape_16.setTransform(0,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#2596DD","#168CDB"],[0,1],1.4,7.7,-2.4,-4.2).s().p("AgxA8IgRg0IBehCIATA6IATA8g");
	this.shape_17.setTransform(13.4,-5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#2596DD","#168CDB"],[0,1],3.9,15.8,-5.2,-12.2).s().p("Ag8AjQgRgxgPg4IBehFQAQBAAZBMQAaBOAYA9Ih0AAQgWg3gPgyg");
	this.shape_18.setTransform(38.4,-13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#2596DD","#168CDB"],[0,1],6.1,23.6,-8,-19.8).s().p("AhCAlQgfhggVhYIBghFQAXBsAkBvQAmBzAsBjIh3AAQgkhWgeheg");
	this.shape_19.setTransform(62.3,-21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#2596DD","#168CDB"],[0,1],8.3,31.9,-11.1,-27.7).s().p("AAZErQg4h6gtiJQgtiLgYh/IBihHQAYCQAzCgQA0CgBCCEg");
	this.shape_20.setTransform(87.5,-29.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#2596DD","#168CDB"],[0,1],10.4,40.7,-14.4,-35.8).s().p("AheAxQg/jBgVifIBthPQASC1BGDVQBFDWBbCdIiHAAQhNiQg9i+g");
	this.shape_21.setTransform(113.2,-38.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#2596DD","#168CDB"],[0,1],2.5,4.3,-1.3,-7.6).s().p("AguAAIgUg6IB0gBIARA0IheBDIgTg8g");
	this.shape_22.setTransform(-13.3,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#2596DD","#168CDB"],[0,1],5.2,12.3,-3.9,-15.7).s().p("AgqAAQgahOgYg9IB0AAQAUAyARA3QARAxAPA4IheBFQgQhAgZhMg");
	this.shape_23.setTransform(-38.4,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#2596DD","#168CDB"],[0,1],8,19.9,-6.1,-23.5).s().p("AgkgCQgmhzgshjIB2AAQAlBWAeBeQAeBdAWBbIhgBFQgXhsgkhvg");
	this.shape_24.setTransform(-62.2,21.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#2596DD","#168CDB"],[0,1],11.1,27.9,-8.3,-31.8).s().p("AgbgFQg2ikhAiAIB5gBQA4B5AtCJQAtCNAYB/IhiBHQgZiSgyieg");
	this.shape_25.setTransform(-87.4,30.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#2596DD","#168CDB"],[0,1],14.5,35.8,-10.3,-40.7).s().p("AgSgLQhFjXhbicICHAAQBNCPA9C/QA/DAAVCgIhtBPQgSi2hGjUg");
	this.shape_26.setTransform(-113.1,38.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFFFF","#DEDEDE"],[0,1],12.4,38.3,-12.4,-38.2).s().p("Ax9F2QhGjYhbicIUegDIQmr+QASC1BGDVQBFDXBcCcI0fADIwlL/QgSi1hGjVg");
	this.shape_27.setTransform(0,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#2596DD","#168CDB"],[0,1],-2.4,4.3,1.4,-7.6).s().p("AhCgHIARg0IBzABIgTA6IgTA8g");
	this.shape_28.setTransform(13.4,6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#2596DD","#168CDB"],[0,1],-5.2,12.3,3.9,-15.7).s().p("AhcBHQAPg4ARgxQARg3AUgyIB0AAQgYA9gaBOQgZBMgQBAg");
	this.shape_29.setTransform(38.4,14.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#2596DD","#168CDB"],[0,1],-8,19.9,6.1,-23.5).s().p("Ah2CUQAWhbAehdQAeheAkhWIB3AAQgsBjgmBzQgkBvgXBsg");
	this.shape_30.setTransform(62.3,21.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#2596DD","#168CDB"],[0,1],-11.1,27.9,8.3,-31.8).s().p("AiRDkQAYh/AtiNQAtiJA4h5IB5ABQhACAg2CkQgyCegZCSg");
	this.shape_31.setTransform(87.5,30.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#2596DD","#168CDB"],[0,1],-14.4,35.8,10.4,-40.7).s().p("AiyEwQAVigA/jAQA9i/BNiPICHAAQhbCchFDXQhGDUgSC2g");
	this.shape_32.setTransform(113.2,38.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#2596DD","#168CDB"],[0,1],-1.3,7.7,2.5,-4.2).s().p("AhCA8IAUg8IATg6IBeBCIgRA0g");
	this.shape_33.setTransform(-13.3,-5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#2596DD","#168CDB"],[0,1],-3.9,15.8,5.2,-12.2).s().p("AhcCMQAYg9AahOQAZhMAQhAIBeBFQgPA4gRAxQgPAygWA3g");
	this.shape_34.setTransform(-38.4,-13.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#2596DD","#168CDB"],[0,1],-6.1,23.6,8,-19.8).s().p("Ah2DZQAshjAmhzQAkhvAXhsIBgBFQgVBYgfBgQgeBeglBWg");
	this.shape_35.setTransform(-62.2,-21.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#2596DD","#168CDB"],[0,1],-8.3,31.9,11.1,-27.7).s().p("AiRErQBCiEA0igQAzigAYiQIBiBHQgYB/gtCLQgtCJg4B6g");
	this.shape_36.setTransform(-87.4,-29.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#2596DD","#168CDB"],[0,1],-10.3,40.7,14.5,-35.8).s().p("AiyF/QBbidBFjWQBGjVASi1IBtBPQgVCfg/DBQg9C+hNCQg");
	this.shape_37.setTransform(-113.1,-38.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FFFFFF","#DEDEDE"],[0,1],-12.4,38.3,12.4,-38.2).s().p("AAAABI0egDQBcicBFjXQBGjVASi1IQlL+IUfADQhbCchGDYQhGDVgSC1g");
	this.shape_38.setTransform(0,0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#2596DD","#168CDB"],[0,1],-6.4,2.6,3.7,-4.7).s().p("AhEgmIAsggIBdBFIhkBIg");
	this.shape_39.setTransform(9.4,12.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#2596DD","#168CDB"],[0,1],-13.4,7.5,10.4,-9.8).s().p("AiJAKIBZhDIBbhAIBfBGQhDAqg3AoQhBAwgzAqg");
	this.shape_40.setTransform(24.9,33.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#2596DD","#168CDB"],[0,1],-20.1,12.1,16.8,-14.7).s().p("AjKA4QBGg8BQg6QBQg6BPgwIBgBGQhhA4heBEQhbBDhWBMg");
	this.shape_41.setTransform(39.6,53.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#2596DD","#168CDB"],[0,1],-27.3,16.7,23.4,-20.1).s().p("AkQBpQBfhYB3hXQB4hXBxg+IBiBHQiDBEiIBiQiHBjhpBng");
	this.shape_42.setTransform(55.2,75.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#2596DD","#168CDB"],[0,1],-35.1,21.3,30,-26).s().p("AlZCVQBvh2Cjh2QCgh1CVhHIBtBPQijBIi5CFQi3CGh3CFg");
	this.shape_43.setTransform(71.3,97);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#2596DD","#168CDB"],[0,1],-3.6,4.7,6.5,-2.6).s().p("AhEADIBkhJIAlBuIgsAfg");
	this.shape_44.setTransform(-9.3,-11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#2596DD","#168CDB"],[0,1],-10.4,9.8,13.4,-7.5).s().p("AiJA0QBDgqA3goQBBgwAzgrIAlBxQgrAgguAiQgtAhguAeg");
	this.shape_45.setTransform(-24.8,-33.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#2596DD","#168CDB"],[0,1],-16.8,14.8,20.1,-12).s().p("AjKBjQBfg3BghFQBchEBVhMIAlByQhGA7hQA7QhWA+hJAsg");
	this.shape_46.setTransform(-39.6,-53.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#2596DD","#168CDB"],[0,1],-23.4,20.2,27.3,-16.6).s().p("AkQCUQCDhDCIhiQCHhjBphnIAmBzQhgBZh2BWQh0BVh1BAg");
	this.shape_47.setTransform(-55.2,-74.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#2596DD","#168CDB"],[0,1],-30,26.1,35.1,-21.2).s().p("AlaDFQCjhIC5iFQC3iFB3iGIAqCAQhxB4ihBzQigB1iVBHg");
	this.shape_48.setTransform(-71.2,-96.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFFFFF","#DEDEDE"],[0,1],-32.5,23.7,32.6,-23.6).s().p("AAAABIwisFQCjhHC5iHQC4iEB3iGIGYTcIQiMEQijBIi5CHQi3CFh4CGg");
	this.shape_49.setTransform(0,0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#2596DD","#168CDB"],[0,1],-6.2,0,6.3,0).s().p("Ag+A3IAkhtIA1AAIAkBtg");
	this.shape_50.setTransform(0,13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#2596DD","#168CDB"],[0,1],-14.7,0,14.8,0).s().p("AAAA1QhMAAhGAEIAkhvQA8gCAyAAQAzAAA8ACIAkBvQhGgEhNAAg");
	this.shape_51.setTransform(0,39.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#2596DD","#168CDB"],[0,1],-22.8,0,22.9,0).s().p("AAAAxQh0AAhvAMIAkhxQBbgHBkgBQBlABBbAHIAkBxQhvgMh1AAg");
	this.shape_52.setTransform(0,64.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#2596DD","#168CDB"],[0,1],-31.3,0,31.4,0).s().p("AAAAsQinAAiSAWIAlhyQCDgRCRAAQCSAACDARIAlByQiSgWioAAg");
	this.shape_53.setTransform(0,90.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#2596DD","#168CDB"],[0,1],-40.2,0,40.3,0).s().p("AAAApQjlAAisAmIApiAQCjgdDFAAQDGAACjAdIApCAQisgmjmAAg");
	this.shape_54.setTransform(0,117);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#2596DD","#168CDB"],[0,1],-6.2,0,6.3,0).s().p("AgaA3IgkhtIB9AAIgkBtg");
	this.shape_55.setTransform(0,-13.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#2596DD","#168CDB"],[0,1],-14.7,0,14.8,0).s().p("AhuA3IgkhvQBGAEBMAAQBNAABGgEIgkBvQgtAChCAAQhBAAgtgCg");
	this.shape_56.setTransform(0,-39.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#2596DD","#168CDB"],[0,1],-22.8,0,22.9,0).s().p("Ai/A1IgkhwQBoALB7gBQB8ABBogLIgkBwQhbAHhlAAQhkAAhbgHg");
	this.shape_57.setTransform(0,-64.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#2596DD","#168CDB"],[0,1],-31.3,0,31.4,0).s().p("AkUAxIglhyQCOAWCrAAQCsAACOgWIglByQiDARiSAAQiRAAiDgRg");
	this.shape_58.setTransform(0,-90.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#2596DD","#168CDB"],[0,1],-40.2,0,40.3,0).s().p("AloAxIgph/QCuAmDjAAQDkAACugmIgpB/QijAejGAAQjFAAijgeg");
	this.shape_59.setTransform(0,-116.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#FFFFFF","#DEDEDE"],[0,1],-40.2,0,40.3,0).s().p("AAAS5QjlAAisAmIGRzfImRzeQCuAlDjAAQDkAACuglImRTeIGRTfQisgmjmAAg");
	this.shape_60.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ombrellone, new cjs.Rectangle(-132,-125.6,264.1,251.3), null);


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


(lib.fiore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.1,-3.1,0.545,0.545,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fiore, new cjs.Rectangle(-30.8,-33.9,61.6,67.8), null);


(lib.avanti = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqCOQgFAAACgFIAthtIgBgBQgDACgJAAQglAAgNgmQgFgNAAghQAAggAEgMQANgqAzAAQAzAAAOAqQAEAMAAAgQAAAtgPAhIgvBzQgCAEgEAAgAgPhUQgBAEAAAZQAAAZABAEQAEAMALAAQAMAAAEgMQABgEAAgZQAAgZgBgEQgEgMgMAAQgLAAgEAMg");
	this.shape.setTransform(118.2,49.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCMQgEAAAAgEIAAgjQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIhOAAQgEgBAAgEIAAgnIABgFIA4i6QABgDAEAAIAqAAQAFAAgCAFIg2C5IAAABIAdAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAg+QAAgEAEAAIAqAAQAEAAAAAEIAAA+QAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAIANAAQAEABAAAEIAAAlQAAAEgEABIgMAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIAAAjQAAAEgEAAg");
	this.shape_1.setTransform(101.1,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBYIAAivQAAgIAJAAIBLAAQAJAAAAAIIAABOQAAANgHAHIhFBRQgDAEgFAAQgJAAAAgIg");
	this.shape_2.setTransform(84.4,62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+DJQgHgYAAgkQAAgJAIgBIBRgIQAKgCAAAKQAAAeACAKQAIAXAYAAQAWAAAIgWQACgIAAgxQAAgygCgIQgHgTgcgBIgMAAQgJAAABgIIAAhKQgBgIAJAAIANAAQAbAAAHgTQACgIAAguQAAgkgCgJQgIgVgWAAQgYAAgIAWQgCAJAAAfQAAAKgKgCIhRgIQgIgBAAgJQAAgjAHgYQAbhSBjAAQBkAAAbBRQAHAXAAAzQAAAugFASQgLAfggATIAAACQAgASALAfQAFASAAA7QAAA/gHAWQgbBRhkAAQhjAAgbhRg");
	this.shape_3.setTransform(59.4,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BlQgFgPAAgpQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgOAAQgEAAAAgDIAAgaQAAgEAEAAIAOAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAgNQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgOAAQgEAAAAgEIAAgZQAAgDAEAAIAOAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgpAFgOQAOgqAwAAQAfAAASAQQARAQACAcQABAEgEABIgpAHQgEAAgBgEQgCgXgQAAQgLAAgDALQgCAFAAAkQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAIA0AAQAEAAAAADIgEAZQgBAEgDAAIgwAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIAAANQAAABAAABQAAAAAAAAQAAABABAAQAAAAABAAIAuAAQAEAAAAAEIgEAaQgBADgEAAIgpAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAlACAFQADAMALAAQAQAAACgYQABgFAEACIApAGQAEABgBAEQgCAcgRAQQgSAQgfABQgwgBgOgqg");
	this.shape_4.setTransform(34.1,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF02A").s().p("AgUBFQgJgGgCgKIABgCIARgGQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAEAIAHAAQAMAAAAgNIAAgWQgGANgNAAQgSAAgFgSQgDgIAAgaQAAgbADgJQAGgSARAAQANAAAGANIAAgJQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIASAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAABtQAAARgJAKQgKAJgPAAQgMAAgIgGgAgKguQgBAEAAAWQAAAUABAEQADAIAHAAQAIAAACgIQACgEAAgUQAAgWgCgEQgCgHgIAAQgHAAgDAHg");
	this.shape_5.setTransform(123.1,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF02A").s().p("AgeA4QgDgIAAgwQAAgvADgIQAGgVAYAAQAZAAAGAVQADAHAAAwQAAAxgDAHQgGAVgZAAQgYAAgGgVgAgJgxQgBAFAAAsQAAAtABAEQACAHAHAAQAIAAACgHQABgDAAguQAAgtgBgEQgCgGgIAAQgHAAgCAGg");
	this.shape_6.setTransform(114.4,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF02A").s().p("AgfA4QgCgHAAgSQAAgPACgGQAEgJAGgDIAAgBQgGgEgEgJQgCgGAAgMQAAgOACgHQAHgVAYAAQAZAAAGAVQADAHAAAOQAAAMgDAGQgCAJgIAEIAAABQAIAEACAIQADAGAAAPQAAASgDAHQgGAVgZAAQgYAAgHgVgAgJAOIgBARIABASQACAHAHAAQAHAAADgHQABgDAAgPQAAgOgBgDQgCgHgIAAQgHAAgCAHgAgJgwIgBAOIABAOQACAHAHAAQAIAAACgHQABgDAAgLQAAgLgBgDQgDgHgHAAQgHAAgCAHg");
	this.shape_7.setTransform(105.7,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF02A").s().p("AARA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgOghIgOAhQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgSAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAagzIgYgyQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIASAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAMAeIANgeQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIASAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAIgYAyIAaAzQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_8.setTransform(93.1,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF02A").s().p("AgeA3QgCgHAAgSQAAgPABgJQABgHAEgKIAYg+QAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAIASAAQABAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgWA7IAAAAIAHgBQAUAAAGATQADAHgBASQAAASgBAHQgIAVgYAAQgYAAgGgVgAgKANIAAARIAAASQADAHAHAAQAHAAADgHQABgDAAgPQAAgPgBgCQgCgHgIAAQgHAAgDAHg");
	this.shape_9.setTransform(80.5,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAiQgDgIAAgaQAAgZADgIQAGgVAYAAQAZAAAHAVQACAIAAAeQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgpAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAOABAEQACAHAHAAQAJAAACgJQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIARADQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAABQgDALgIAHQgJAHgNAAQgYAAgGgVgAgJgbQgCADABANQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIATAAIABgBQAAgNgBgDQgCgHgIAAQgHAAgCAHg");
	this.shape_10.setTransform(123.5,-10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOBLQgQAAgHgHQgHgIAAgRIAAhzQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAABzQAAAKAJABIABABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAQQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_11.setTransform(117,-12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgFgMQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_12.setTransform(109.8,-10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAhlQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIASAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAALIAAAAQAGgPAQAAIAEAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgFATIgCABIgEAAQgRAAAAAUIAAA+QAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_13.setTransform(103,-10.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAVIAAhIQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAABFQAAAPAKAAQALAAAAgPIAAhFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIASAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAABlQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgSAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgGANgNAAQgYAAAAghg");
	this.shape_14.setTransform(94.9,-10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAOBGQgOAAgGgHQgGgHAAgPIAAg7QAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgFAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgOQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAIAFAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgdQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAABAAIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAdQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIAJAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAOQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgJAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAA6QAAAJAIAAIACAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_15.setTransform(87.6,-12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgMQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_16.setTransform(80.5,-10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOA2QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAhFQAAgPgMAAQgKAAAAAPIAABFQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgSAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAhlQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAJIAAAAQAHgNAMAAQAZAAAAAhIAABIQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(72,-10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOBLQgQAAgHgHQgHgIAAgRIAAhzQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABzQAAAKAJABIABABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAQQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_18.setTransform(61,-12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgMQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_19.setTransform(53.9,-10.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTBNQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAaiVQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAMAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgaCVQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_20.setTransform(47.1,-12.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAwQgIgIAAgRQAAghAgAAIAKAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgGQAAgJgDgEQgEgEgHAAQgIAAgJAGQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgMQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAMgJAQAAQASAAAIAIQAHAJAAATIAABFQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgJQgFANgOAAQgLAAgGgHgAgLAXQAAANALAAQAFAAADgEQAEgEAAgGIAAgNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHAAQgOABAAAPg");
	this.shape_21.setTransform(40.1,-10.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgahlQgBgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIATAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIANBBIABAAIAOhBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgbBlQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_22.setTransform(32.1,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_23.setTransform(25.9,-12.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOBLQgQAAgHgHQgHgIAAgRIAAhzQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAABzQAAAKAJABIABABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAQQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_24.setTransform(21.4,-12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAhQgCgHAAgaQAAgZACgHQAHgWAYAAQAZAAAHAWQACAHAAAZQAAAagCAHQgHAWgZAAQgYAAgHgWgAgKgaQgBAEAAAWQAAAXABAEQADAHAHAAQAIAAADgHQABgEAAgXQAAgWgBgEQgDgIgIABQgHgBgDAIg");
	this.shape_25.setTransform(14.3,-10.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_26.setTransform(3.6,-12.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeA6QgDgIAAgdQAAgcADgJQAFgRASAAQAOAAAFAMIAAg0QAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIASAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAACRQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgSAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgJQgFANgOAAQgSAAgFgSgAgKgFQgBAEAAAWQAAAXABAEQADAHAHAAQAIAAADgHQABgEAAgXQAAgWgBgEQgDgIgIAAQgHAAgDAIg");
	this.shape_27.setTransform(-3.1,-12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfAhQgCgHAAgaQAAgZACgHQAHgWAYAAQAZAAAHAWQACAHAAAZQAAAagCAHQgHAWgZAAQgYAAgHgWgAgKgaQgBAEAAAWQAAAXABAEQADAHAHAAQAIAAADgHQABgEAAgXQAAgWgBgEQgDgIgIABQgHgBgDAIg");
	this.shape_28.setTransform(-15.9,-10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIBLQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAABlQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAgIgzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAAATQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_29.setTransform(-22.3,-12.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAOBLQgQAAgHgHQgHgIAAgRIAAhzQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABzQAAAKAJABIABABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAQQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_30.setTransform(-26.8,-12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAhQgCgHAAgaQAAgZACgHQAHgWAYAAQAZAAAHAWQACAHAAAZQAAAagCAHQgHAWgZAAQgYAAgHgWgAgKgaQgBAEAAAWQAAAXABAEQADAHAHAAQAIAAADgHQABgEAAgXQAAgWgBgEQgDgIgIABQgHgBgDAIg");
	this.shape_31.setTransform(-33.9,-10.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiA1QgDgIAAgtQAAgsADgJQAHgXAbAAQAcAAAHAXQADAJAAAsQAAAtgDAIQgHAYgcAAQgbAAgHgYgAgMguQgBAFAAApQAAAqABAFQADAIAJAAQAKAAADgIQABgFAAgqQAAgpgBgFQgDgIgKAAQgJAAgDAIg");
	this.shape_32.setTransform(122.9,-36.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAh8QAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgXAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIBHAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgXAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAB8QAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_33.setTransform(114.1,-36.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASBLQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgRg7IgEAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAAA6QAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgTAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAeAAQAqAAAAAtQAAAcgSAJIAVBBQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAgAgPgzIAAArQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAIAAQAJAAAEgFQAEgFAAgNQAAgNgEgGQgEgFgJAAIgIAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_34.setTransform(105.5,-36.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIA8AAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIglAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAnQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAhAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAQQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIghAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAApQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAlAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAgBAAg");
	this.shape_35.setTransform(96.5,-36.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiBLQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAeAAQAUAAAKAKQALALAAAZQAAAtgpAAIgIAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAA3QAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAgAgNgzIAAAuQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAIAAQAJAAAFgFQAEgGAAgOQAAgOgEgFQgFgGgJAAIgIAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_36.setTransform(87.6,-36.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_37.setTransform(78.1,-36.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdBLQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA7AAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIglAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAAnQABABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAhAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAQQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIghAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAApQABAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAlAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAgBAAg");
	this.shape_38.setTransform(65.3,-36.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AASBLQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgRg7IgEAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAAA6QAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgTAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAeAAQAqAAAAAtQAAAcgSAJIAVBBQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAgAgPgzIAAArQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAIAAQAJAAAEgFQAEgFAAgNQAAgNgEgGQgEgFgJAAIgIAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_39.setTransform(56.4,-36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAXBLQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgfIgdAAIgGAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgTAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAhiRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAgCRQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAALAXIgKg3IgBAAIgKA3IAVAAg");
	this.shape_40.setTransform(46.7,-36.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAfBLQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAheIgCAAIgTBDQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgJAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAIgThDIgBAAIAABeQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgRAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIAAiRQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIATAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIAYBUIABAAIAYhUQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAIATAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAACRQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_41.setTransform(35.9,-36.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiA1QgDgIAAgtQAAgsADgJQAHgXAbAAQAcAAAHAXQADAJAAAsQAAAtgDAIQgHAYgcAAQgbAAgHgYgAgMguQgBAFAAApQAAAqABAFQADAIAJAAQAKAAADgIQABgFAAgqQAAgpgBgFQgDgIgKAAQgJAAgDAIg");
	this.shape_42.setTransform(20.9,-36.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAPBLQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgchnIgBAAIAABnQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgQAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAXAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAaBnIABAAIAAhnQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAACRQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_43.setTransform(11.1,-36.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPBLQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgchnIgBAAIAABnQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgQAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAiRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAXAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAaBnIABAAIAAhnQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAACRQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_44.setTransform(1,-36.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiA1QgDgIAAgtQAAgsADgJQAHgXAbAAQAcAAAHAXQADAJAAAsQAAAtgDAIQgHAYgcAAQgbAAgHgYgAgMguQgBAFAAApQAAAqABAFQADAIAJAAQAKAAADgIQABgFAAgqQAAgpgBgFQgDgIgKAAQgJAAgDAIg");
	this.shape_45.setTransform(-8.7,-36.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJBLQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAh8QAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgXAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIBHAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgXAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAB8QAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_46.setTransform(-17.6,-36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#BC1A28","#DA1421"],[0,1],59.8,-2.3,5.9,-2.3).s().p("ArWLtInzqOIHzqNIa3AAQCSAAA6hkQAcgvABgvIAAUVQAABJgbApQg2BRiYAFQhfAEmuAAQmtAAr9gEgAxNBfIFzH0IAAvmg");
	this.shape_47.setTransform(26.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	// Livello_1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AjTAAIGno+IAAR9g");
	this.shape_48.setTransform(-62.9,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

}).prototype = getMCSymbolPrototype(lib.avanti, new cjs.Rectangle(-96.4,-74.9,245.3,161.7), null);


(lib.angolo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.angolo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.angolo_1, new cjs.Rectangle(-50,-50,100,100), null);


(lib.volantinoanim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_93 = function() {
		this.parent.gotoAndPlay("fine");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(1));

	// Livello_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AltlvILbAAIAALfg");
	this.shape.setTransform(38.9,-57.2);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.027)").s().p("AltlvIK1AdIAmLCg");
	this.shape_1.setTransform(38.9,-57.2);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.051)").s().p("AltlvIKPA7IBMKkg");
	this.shape_2.setTransform(38.9,-57.2);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.075)").s().p("AltlvIJpBZIByKGg");
	this.shape_3.setTransform(38.9,-57.2);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.098)").s().p("AltlvIJCB2ICZJpg");
	this.shape_4.setTransform(38.9,-57.2);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.173)").s().p("AlwltIIfCNIDBJOg");
	this.shape_5.setTransform(38.8,-57.4);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.251)").s().p("AlylrIH7CkIDqIzg");
	this.shape_6.setTransform(38.6,-57.6);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.325)").s().p("Al1lpIHYC7IESIYg");
	this.shape_7.setTransform(38.5,-57.8);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.4)").s().p("Al3lnIG0DSIE7H9g");
	this.shape_8.setTransform(38.3,-58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},18).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(18).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(19).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(21).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(22).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(23).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(24).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(25).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(13));

	// Livello_4
	this.instance = new lib.angolo_1();
	this.instance.parent = this;
	this.instance.setTransform(39.4,-57.6,0.722,0.727);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:1.6,regY:-1.2,scaleX:0.47,scaleY:0.61,skewX:-32.2,skewY:24.9,x:39.6,y:-57.7},4).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:0,regY:0,scaleX:0.73,scaleY:0.73,skewX:0,skewY:0,x:39.4,y:-57.6},4).to({_off:true},1).wait(12).to({_off:false,scaleX:0.72,scaleY:0.73},0).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:1.6,regY:-1.2,scaleX:0.47,scaleY:0.61,skewX:-32.2,skewY:24.9,x:39.6,y:-57.7},4).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:0,regY:0,scaleX:0.73,scaleY:0.73,skewX:0,skewY:0,x:39.4,y:-57.6},4).to({_off:true},1).wait(7).to({_off:false,scaleX:0.72,scaleY:0.73},0).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:1.6,regY:-1.2,scaleX:0.47,scaleY:0.61,skewX:-32.2,skewY:24.9,x:39.6,y:-57.7},4).to({regX:0.2,regY:-0.4,scaleX:0.58,scaleY:0.63,skewX:-13.3,skewY:10.3,x:39.2,y:-57.1},4).to({regX:0,regY:0,scaleX:0.73,scaleY:0.73,skewX:0,skewY:0,x:39.4,y:-57.6},4).to({_off:true},1).wait(6));

	// Livello_5
	this.instance_1 = new lib.pagina();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,-94,0.73,0.73);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({_off:true},17).wait(12).to({_off:false},0).to({_off:true},17).wait(7).to({_off:false},0).to({_off:true},17).wait(6));

	// Livello_1
	this.instance_2 = new lib.volantino_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,0.7,0.73,0.73,0,0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94));

	// Livello_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.357)").s().p("AtCOcIAA83IaFAAIAAc3g");
	this.shape_9.setTransform(-6.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-94.1,167.1,192.7);


(lib.prodottoanim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_23 = function() {
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
	this.frame_43 = function() {
		this.stop();
		
		this.parent.gotoAndPlay("volantino");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(22).call(this.frame_23).wait(20).call(this.frame_43).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AiQI5IAAxwIEhAAIAARwg");
	var mask_graphics_17 = new cjs.Graphics().p("AidI5IAAxxIE7AAIAARxg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHI7IAAx1IGPAAIAAR1g");
	var mask_graphics_19 = new cjs.Graphics().p("AkNI/IAAx9IIaAAIAAR9g");
	var mask_graphics_20 = new cjs.Graphics().p("AluJEIAAyHILdAAIAASHg");
	var mask_graphics_21 = new cjs.Graphics().p("AnqJKIAAyTIPVAAIAASTg");
	var mask_graphics_22 = new cjs.Graphics().p("AqDJRIAAyhIUHAAIAAShg");
	var mask_graphics_23 = new cjs.Graphics().p("As3JaIAAyzIZvAAIAASzg");
	var mask_graphics_24 = new cjs.Graphics().p("AspJZIAAyxIZTAAIAASxg");
	var mask_graphics_25 = new cjs.Graphics().p("AsAJXIAAytIYBAAIAAStg");
	var mask_graphics_26 = new cjs.Graphics().p("Aq6JUIAAynIV1AAIAASng");
	var mask_graphics_27 = new cjs.Graphics().p("ApZJPIAAydISzAAIAASdg");
	var mask_graphics_28 = new cjs.Graphics().p("AncJJIAAyRIO5AAIAASRg");
	var mask_graphics_29 = new cjs.Graphics().p("AlEJBIAAyBIKJAAIAASBg");
	var mask_graphics_30 = new cjs.Graphics().p("AiQI5IAAxxIEhAAIAARxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:167.5,y:-3.4}).wait(1).to({graphics:mask_graphics_17,x:165.5,y:-3.4}).wait(1).to({graphics:mask_graphics_18,x:159.6,y:-3.4}).wait(1).to({graphics:mask_graphics_19,x:149.8,y:-3.3}).wait(1).to({graphics:mask_graphics_20,x:135.9,y:-3.2}).wait(1).to({graphics:mask_graphics_21,x:118.2,y:-3.1}).wait(1).to({graphics:mask_graphics_22,x:96.5,y:-3}).wait(1).to({graphics:mask_graphics_23,x:70.8,y:-2.9}).wait(1).to({graphics:mask_graphics_24,x:72.8,y:-3}).wait(1).to({graphics:mask_graphics_25,x:78.6,y:-3.4}).wait(1).to({graphics:mask_graphics_26,x:88.2,y:-3.9}).wait(1).to({graphics:mask_graphics_27,x:101.8,y:-4.8}).wait(1).to({graphics:mask_graphics_28,x:119.1,y:-5.8}).wait(1).to({graphics:mask_graphics_29,x:140.4,y:-7.1}).wait(1).to({graphics:mask_graphics_30,x:165.5,y:-8.6}).wait(1).to({graphics:null,x:0,y:0}).wait(13));

	// avanti
	this.instance = new lib.avanti();
	this.instance.parent = this;
	this.instance.setTransform(61.9,2.2,0.594,0.594,0,0,0,0.4,0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},15).wait(13));

	// prodotto
	this.instance_1 = new lib.prodotto_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.8,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:176.1},0).to({y:-4},8,cjs.Ease.backOut).wait(28).to({scaleX:0.26,scaleY:0.26},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AqfISIAAwjIU/AAIAAQjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhNHCIAAuDICbAAIAAODg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkHHXIAAutIIPAAIAAOtg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmkHpIAAvRINJAAIAAPRg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AolH3IAAvtIRKAAIAAPtg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqJIDIAAwFIUTAAIAAQFg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ArQILIAAwVIWhAAIAAQVg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ar7IQIAAwfIX3AAIAAQfg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AsJISIAAwjIYTAAIAAQjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AsEISIAAwjIYJAAIAAQjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ar1IQIAAwfIXrAAIAAQfg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ArLILIAAwVIWXAAIAAQVg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AqEIDIAAwFIUJAAIAAQFg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AohH3IAAvtIRDAAIAAPtg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmhHpIAAvRINDAAIAAPRg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkFHXIAAutIILAAIAAOtg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AhNHCIAAuDICbAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:81.9,y:-9.6}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_9,x:4.7,y:-15.8}).wait(1).to({graphics:mask_1_graphics_10,x:23.5,y:-12.6}).wait(1).to({graphics:mask_1_graphics_11,x:39.4,y:-9.9}).wait(1).to({graphics:mask_1_graphics_12,x:52.4,y:-7.7}).wait(1).to({graphics:mask_1_graphics_13,x:62.5,y:-5.9}).wait(1).to({graphics:mask_1_graphics_14,x:69.7,y:-4.7}).wait(1).to({graphics:mask_1_graphics_15,x:74,y:-4}).wait(1).to({graphics:mask_1_graphics_16,x:75.5,y:-3.7}).wait(14).to({graphics:mask_1_graphics_30,x:76.1,y:-3.7}).wait(1).to({graphics:mask_1_graphics_31,x:74.6,y:-4}).wait(1).to({graphics:mask_1_graphics_32,x:70.2,y:-4.7}).wait(1).to({graphics:mask_1_graphics_33,x:62.8,y:-5.9}).wait(1).to({graphics:mask_1_graphics_34,x:52.5,y:-7.7}).wait(1).to({graphics:mask_1_graphics_35,x:39.2,y:-9.9}).wait(1).to({graphics:mask_1_graphics_36,x:22.9,y:-12.6}).wait(1).to({graphics:mask_1_graphics_37,x:3.7,y:-15.8}).wait(1).to({graphics:null,x:0,y:0}).wait(6));

	// retro
	this.instance_2 = new lib.retro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48,-12.3,0.594,0.594,0,0,0,0.1,0.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},29).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-66,238.9,124);


(lib.mare = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello_2
	this.instance = new lib.ondabianca();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-16.8},29,cjs.Ease.sineInOut).to({x:0},30,cjs.Ease.sineInOut).to({x:-16.8},29,cjs.Ease.sineInOut).to({x:0},30,cjs.Ease.sineInOut).to({x:-16.8},29,cjs.Ease.sineInOut).to({x:0},30,cjs.Ease.sineInOut).to({x:-16.8},29,cjs.Ease.sineInOut).to({x:0},30,cjs.Ease.sineInOut).wait(1));

	// Livello_1
	this.instance_1 = new lib.ondaazzurra();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2},29,cjs.Ease.sineInOut).to({x:-32},30,cjs.Ease.sineInOut).to({x:-2},29,cjs.Ease.sineInOut).to({x:-32},30,cjs.Ease.sineInOut).to({x:-2},29,cjs.Ease.sineInOut).to({x:-32},30,cjs.Ease.sineInOut).to({x:-2},29,cjs.Ease.sineInOut).to({x:-32},30,cjs.Ease.sineInOut).wait(1));

	// Livello_7
	this.instance_2 = new lib.ondablu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.8,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-12.4,y:-13.9},29,cjs.Ease.sineInOut).to({x:-0.8,y:-14},30,cjs.Ease.sineInOut).to({x:-12.4,y:-13.9},29,cjs.Ease.sineInOut).to({x:-0.8,y:-14},30,cjs.Ease.sineInOut).to({x:-12.4,y:-13.9},29,cjs.Ease.sineInOut).to({x:-0.8,y:-14},30,cjs.Ease.sineInOut).to({x:-12.4,y:-13.9},29,cjs.Ease.sineInOut).to({x:-0.8,y:-14},30,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.7,-39.7,459.5,65.4);


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
	this.shape_18.graphics.f("#D91422").s().p("A7fInIAAxNMA2/AAAIAARNg");

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
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{volantino:77,fine:86});

	// timeline functions:
	this.frame_20 = function() {
		var tl=this;
		tl.stop();
		var delay = 300;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_29 = function() {
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
	this.frame_76 = function() {
		this.stop();
	}
	this.frame_85 = function() {
		this.stop();
	}
	this.frame_111 = function() {
		this.cta.gotoAndPlay("lamp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(9).call(this.frame_29).wait(47).call(this.frame_76).wait(9).call(this.frame_85).wait(26).call(this.frame_111).wait(1));

	// cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#725559").ss(2,1,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(112));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(150.9,717.4,0.57,0.57,0,0,0,1.6,1.2);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(101).to({_off:false},0).to({y:477.4},10,cjs.Ease.backOut).wait(1));

	// ombrellone
	this.instance = new lib.ombrellone();
	this.instance.parent = this;
	this.instance.setTransform(150,-169.1,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({rotation:360,y:790.9},47).to({_off:true},1).wait(35));

	// tx2
	this.instance_1 = new lib.tx2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.5,31.1,0.948,0.948,-40.1,0,0,0.3,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(72));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,682.6,1.315,1.315,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:573.2},10,cjs.Ease.backOut).wait(102));

	// mare
	this.instance_3 = new lib.mare();
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.1,575.6,1,1.823,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112));

	// logo-specialissimi
	this.instance_4 = new lib.logospecialissimi();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,763.4,1.032,1.032,0,0,0,0.1,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({x:150.1,y:326.1},9,cjs.Ease.backOut).wait(20).to({regX:0.2,regY:1.4,scaleX:0.73,scaleY:0.73,x:147.6,y:82.9},0).wait(63));

	// prodotto
	this.instance_5 = new lib.prodottoanim();
	this.instance_5.parent = this;
	this.instance_5.setTransform(282,491.3,1.11,1.11,0,0,0,149.5,125.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(76).to({_off:false},0).to({_off:true},1).wait(35));

	// volantino
	this.instance_6 = new lib.volantinoanim();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.3,661.4,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({_off:false},0).to({y:315.4},8,cjs.Ease.backOut).wait(27));

	// tx1
	this.instance_7 = new lib.tx1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.9,458.7,1.66,1.66,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({y:191.3},10,cjs.Ease.backOut).wait(25).to({y:169.3},0).wait(67));

	// fondo.jpg
	this.instance_8 = new lib.fondo();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.1,299,459.5,694.9);
// library properties:
lib.properties = {
	id: '37B5A1A697A54202A6EEAA3083230580',
	width: 300,
	height: 600,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"angolo.png", id:"angolo"},
		{src:"fondo.jpg", id:"fondo"},
		{src:"pagina.png", id:"pagina"},
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