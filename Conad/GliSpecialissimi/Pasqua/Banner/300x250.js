(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.volantino = function() {
	this.initialize(img.volantino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,236);// helper functions:

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
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.volantino();
	this.instance.parent = this;
	this.instance.setTransform(-128,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.volantino_1, new cjs.Rectangle(-128,-118,256,236), null);


(lib.uovo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.1,-57,0.545,0.545,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AB7762","#4A221D"],[0,1],-62.6,21.5,0,-62.6,21.5,256.6).s().p("EgRFAp5QmokNjdnvQjTnZgBpqQgCpjDLqSQBFj4BRj4QCeneC3l6QD8oHEZklQFclpF5AAQKzAAI4SVQC3F6CeHeQBSD4BED4QDLKTgCJiQgBJqjTHZQjdHvmoENQnEEgqCAAQqAAAnFkgg");
	this.shape_1.setTransform(0,-153.3,0.53,0.53,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.uovo, new cjs.Rectangle(-103.4,-310.7,206.8,314.7), null);


(lib.txsorpresa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMFQQgpgBgZgcQgagbACgqQABgpAbgZQAcgZApACQApABAZAbQAZAbgBApQgCAqgbAZQgaAYglAAIgFAAgAg+BuIgUm9IC5AHIgyG6g");
	this.shape.setTransform(198.9,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACFD6QhHgGgVg4QgtAggiAMQghAMgrgCQg8gCglgpQglgpACg9QAFiCCrgUQAXgDBPgCQAAhPhdAEQhGADhKAjIAEhxQBjguBmAEQByAEA0A/QAhAqgEBaIgEBtQgCA6AKAPQAKAOAmACIgYBhQgmAHgeAAIgWgBgAg9AlQgdAQgDAgQgDAZAQARQAQAQAZgBQAcgBAlgWIAEhoQg/AHgcAPg");
	this.shape_1.setTransform(159.9,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFD6QhkgEhgg+IAthsQBCAzA1AFQAVACAQgKQAQgKABgRQACgbgxgYQg+gdgWgRQgygmAChKQACg7A3gpQA2gnBKACQBTAEBgAuIgkBuIg/gfQgQgGgbgBQgSgBgOAJQgOAJgBANQgCAXAxAXQBRAoATASQAoAjgCA7QgDBVhNAmQgyAag/AAIgKAAg");
	this.shape_2.setTransform(114,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFD5QhtgEhChJQhDhIAEhvQAEhnBMhFQBLhGBnAEQBiAEA4A7QA6A8gDBeIgyBAIj8gKQADAoAiAeQAgAeArABQBMADBNgsIAgBdQhQBLh/AAIgRgBgABmg3QgCgngVgYQgWgXglgBQhLgDgPBUICsAGIAAAAg");
	this.shape_3.setTransform(70,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai6DsIAKkbQADhRgEgbQgEgcgTgcICQgeQArAgABBPQA0hsBRADQAlACArAXIgpCZQgrgQgRgBQg3gHg3BOIgJD1g");
	this.shape_4.setTransform(25.6,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj9FdIATn9QADhRgEgbQgEgbgTgdICQgeQAcAWAJAdQBAguBEAEQBiADA3BGQA3BGgEBzQgCA3gZAyQgaAzgoAeQhCAxhYgDQgugCgrgOIgIDigAhBjFIgHDFQAcAQAiABQArACAcgdQAcgdACgzQABgxgaggQgbgggtgCIgDAAQgXAAghAIg");
	this.shape_5.setTransform(-23.2,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai6DsIAKkbQADhRgEgbQgEgcgTgcICQgeQArAgABBPQA0hsBRADQAlACArAXIgpCZQgrgQgRgBQg3gHg3BOIgJD1g");
	this.shape_6.setTransform(-69.9,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHD5QiCgFhFhPQg8hGAEhhQAEhtBJhEQBJhDBzgCQBvgCBJBEQBKBEADBrQACBwhOBKQhKBGhuAAIgLAAgAhChYQgaAegCAwQgCA1AcAmQAcAmAqABQBXAEAFh0QACgygdgkQgcglgogCIgEAAQglAAgYAdg");
	this.shape_7.setTransform(-119.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKFbQh5gEh0hNIAZieQBZBTBYALQAlAFAWgSQAYgRABgfQACgmhDgmIhFgoQh0hEAEhzQAEhnBdg1QBBgkBKADQA9ACAtAPQAtANBBAlIgsCHQhSg7g6gCQgagBgTAOQgTAPgCAWQgCAXANARQAOAQArAYQBfA1AiAeQA7A3gDBUQgEBdhJA4QhDA1hlAAIgNgBg");
	this.shape_8.setTransform(-173.3,-12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2572B6").s().p("AdvJ7Mg8GgCOQhQgDg2g6Qg2g6ADhPIAbrpQADhPA6g2QA7g2BPADMA8HACOQBPADA2A6QA2A6gDBPIgcLpQgCBPg7A2Qg3AzhKAAIgIAAg");
	this.shape_9.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txsorpresa, new cjs.Rectangle(-217.5,-63.5,435.1,127.1), null);


(lib.tx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F71B8").s().p("AgaBiIAAjDIA1AAIAADDg");
	this.shape.setTransform(62.5,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F71B8").s().p("AgaBiIAAiYIg4AAIAAgrIClAAIAAArIg4AAIAACYg");
	this.shape_1.setTransform(50.4,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F71B8").s().p("AgaBiIAAiYIg4AAIAAgrIClAAIAAArIg4AAIAACYg");
	this.shape_2.setTransform(33.5,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F71B8").s().p("AhOBFQgLgSAAglIAAhyIA1AAIAAByQAAAYALAKQAKAJARAAQAVAAAJgPQAFgJAAgTIAAhyIA1AAIAAB1QAAAsgXAUQgYAUgrAAQg6AAgUggg");
	this.shape_3.setTransform(15,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F71B8").s().p("AgaBiIAAiYIg4AAIAAgrIClAAIAAArIg4AAIAACYg");
	this.shape_4.setTransform(-3.4,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F71B8").s().p("AAaBkIglhEIgWAAIAABEIg2AAIAAjDIAOgBQAbgDAVAAQBbAAAABAQAAAjgfAQIA1BUgAghg5IAAA2IAaAAQAJAAAGgIQAHgJAAgLQAAgMgJgIQgHgHgQAAg");
	this.shape_5.setTransform(-25.1,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F71B8").s().p("AhEBiIAAjDIB8AAIAAAoIhIAAIAAAjIBBAAIAAAmIhBAAIAAApIBVAAIgFApg");
	this.shape_6.setTransform(-41.7,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F71B8").s().p("AhMBkIAAjDIARgCIArgCQAxAAAWATQAWAUAAAgQAAATgKAPQgIAQgRAJQgTAKgfAAIgPgBIAAA8gAgXg2IAAA2IANAAQARAAAIgGQAKgHAAgNQAAgOgJgHQgJgIgPAAg");
	this.shape_7.setTransform(-57.5,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F71B8").s().p("AAyBiIgRgrIhHAAIgSArIgyAAIBUjDIAuAAIBTDDgAAVAXIgWg9IgZA9IAvAAg");
	this.shape_8.setTransform(30.8,-2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F71B8").s().p("AhIBSIAGgvQAbAYAbACQAKABAGgGQAHgFAAgJQAAgMgTgKIgWgLQgjgTAAgiQAAgfAbgRQATgLAWAAQASAAAOAEQANADAUALIgMAoQgZgQgRAAQgIAAgGAEQgEAFgBAGQAAAHAEAFQAEAFANAHQAdAOAKAIQASAQAAAZQAAAcgVARQgVASggAAQgkAAgjgWg");
	this.shape_9.setTransform(12.7,-2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F71B8").s().p("AhEBiIAAjDIB8AAIAAAoIhIAAIAAAjIBAAAIAAAmIhAAAIAAApIBVAAIgEApg");
	this.shape_10.setTransform(-1.6,-2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F71B8").s().p("AhMBkIAAjDIASgCIAqgCQAxAAAWATQAWAUAAAgQAAATgJAPQgKAQgPAJQgUAKgfAAIgOgBIAAA8gAgWg2IAAA2IAMAAQAQAAAKgGQAJgHAAgNQAAgOgJgHQgJgIgQAAg");
	this.shape_11.setTransform(-17.4,-3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F71B8").s().p("AhIBSIAGgvQAbAYAbACQAKABAGgGQAHgFAAgJQAAgMgTgKIgWgLQgjgTAAgiQAAgfAbgRQATgLAWAAQASAAAOAEQANADAUALIgMAoQgZgQgRAAQgIAAgGAEQgEAFgBAGQAAAHAEAFQAEAFANAHQAdAOAKAIQASAQAAAZQAAAcgVARQgVASggAAQgkAAgjgWg");
	this.shape_12.setTransform(-33.8,-2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F71B8").s().p("AgaBiIAAjDIA1AAIAADDg");
	this.shape_13.setTransform(39.7,-30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F71B8").s().p("AgrgIIACBrIgzAAIAAjAIAjgIIBkBvIgBhrIAzAAIAAC/IgiAIg");
	this.shape_14.setTransform(25.9,-30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F71B8").s().p("AhKBLQgegdAAgtQAAgsAegeQAegeAsAAQAvAAAfAgQAbAdAAApQAAAugdAeQgdAdgvAAQgtAAgdgdgAgigqQgMAPAAAaQAAAZAQASQAMAOASABQAWABANgPQAMgPAAgaQAAgYgOgRQgOgRgVAAQgUAAgMAOg");
	this.shape_15.setTransform(4.7,-30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F71B8").s().p("AhOBFQgLgSAAglIAAhyIA1AAIAAByQAAAYALAKQAKAJARAAQAVAAAJgPQAFgJAAgTIAAhyIA1AAIAAB0QAAAtgXAUQgYAUgrAAQg6AAgUggg");
	this.shape_16.setTransform(-16.3,-29.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F71B8").s().p("AhOBgIAAjAQAmgEAbAAQAnAAAWAOQAUAOAAAaQABAagcAPQAmAKAAAmQAAAngqANQgUAGgdAAQggAAgigFgAgbBAIAGABIAKAAIAGAAQANAAAIgHQAIgGAAgLQAAgagjAAIgQAAgAgbg/IAAAuIAZAAQAGAAAHgIQAGgGAAgJQAAgYgeAAg");
	this.shape_17.setTransform(-34.5,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx, new cjs.Rectangle(-68.2,-43,136.5,86.1), null);


(lib.ombra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.898)","rgba(0,0,0,0)"],[0.004,1],0,0,0,0,0,74.5).s().p("AqcKcQkUkVgBmHQABmGEUkWQEWkVGGAAQGHAAEWEVQEUEWABGGQgBGHkUEVQkWEWmHAAQmGAAkWkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ombra, new cjs.Rectangle(-94.5,-94.6,189.1,189.1), null);


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
	this.shape.graphics.f("#1D1D1B").s().p("EAguADVQgWgLgOgUQgOgVgGgaQgGgaABggQABgeAKgZQAJgYARgSQARgTAVgJQAWgJAaAAQARAAAMAGQALAFAKALQAKALAGALQAGANAEAMQAKAfAEAoIitAAIAAAJQAAAMADAVQADASAIATQAIASAQANQAQAMAZABQAaACAPgIQAPgHAJgKQAKgLAFgOIAJgBQgEATgKAPQgJAMgTALQgTAKgfAAQggAAgXgLgEAhLgARQgNAHgKANQgKANgFAPQgFANgDARIAaABQAOAAATgBIAjgEQATgDALgFQABgMgBgNQAAgNgFgLQgFgLgJgHQgKgHgQAAQgUAAgNAIgAVvDVQgWgMgPgTQgOgUgGgbQgGgaABggQADg9AigkQAjglA0AAQAcAAAQAIQAQAIAKANQAJAMAEANIAGAUQAAAXgHAIQgHAIgHABQgKABgKgHQgMgKACgJQACgKAHgIQAHgIANgIQgFgJgMgKQgMgLgcgBQgYgBgQAOQgQAOgKAUQgKAXgEAUIgFAkQAAAMADATQADASAIARQAIAPARANQARAMAYABQAXABANgGQAMgGAJgJQAIgJAFgNIAKgBQgEATgKAPQgKANgSAKQgTAKgfAAQggAAgXgLgAPMDVQgXgMgNgTQgOgTgGgcQgHgaACggQABgeAKgZQAJgYARgSQARgTAVgJQAWgJAaAAQARAAAMAGQALAFAKALQAKALAGALQAGANAEAMQAKAfAEAoIitAAIAAAJQAAAMADAVQADASAIATQAIASAQANQAQAMAZABQAZACAQgIQAPgHAJgKQALgLADgOIAKgBQgEATgKAPQgKANgSAKQgTAKgfAAQggAAgXgLgAPpgRQgPAJgIALQgIALgHARQgFAOgDAQIAaABQAOAAATgBIAjgEQATgDALgFQABgMgBgNQAAgNgFgLQgFgLgJgHQgKgHgQAAQgTAAgOAIgAMUDgIAAgNQAIgBAHgFQAFgDAGgIQAFgHACgMIABgLIAAk8QgCgLgFgGQgFgGgEgBQgGgDgHACIgGgIIBEgmIAAF9IABARQABAMAFAHQAGAIAGADQAHAFAIABIAAANgAG0DVQgXgMgNgTQgOgVgGgaQgHgaACggQABgeAKgZQAJgYARgSQARgTAVgJQAWgJAaAAQARAAAMAGQALAFAKALQAJAJAHANQAGANAEAMQAKAfAEAoIitAAIAAAJQAAAMADAVQADASAIATQAIASAQANQAQAMAZABQAZACAQgIQAPgHAJgKQAKgLAFgOIAJgBQgEATgKAPQgKANgSAKQgTAKgfAAQggAAgXgLgAHRgRQgPAJgIALQgIALgHARQgFAOgDAQIAaABQAOAAATgBIAjgEQATgDALgFQABgMgBgNQAAgNgFgLQgFgLgJgHQgKgHgQAAQgTAAgOAIgACxDgIAAgNQAGAAAGgEQAEgCAGgGQAFgFADgJIAAjCQgBgLgFgIQgGgHgFgEQgHgEgIgCIAAgMIBBAAIAAAxQALgSAZgPQAXgQAkgBQAHABAIAEQAGADAEAHQAGAHgCAMQgBAHgDAEQgCAEgGAEQgFAEgIgBQgLAAgGgFQgEgEgDgHQgCgIAAgHQgOgFgMAEQgMADgLAKQgNALgLAWIAACsQADAKAFAFQAGAGAEACQAGAEAIAAIAAANgABTDXQgMgIgEgLQgGgNACgPIAAjSIgrAAIAAgOQAXgCAOgLQAOgJAIgNQAIgLADgTIAGAAIAABCIBBAAIAAANIhBAAIAADSIABAKIAEANQADAHAFADQAGAFAJAAQANAAAIgEQAIgEAHgFQAHgGAFgIQABAMgFALQgFAJgLAGQgLAHgXAAQgYAAgLgJgAhkDgIAAgNQAIgBAHgFQAHgFAEgGQAFgGACgNIABlHQgCgMgFgFQgFgGgEgBQgFgDgIACIgGgIIBEgmIABGOQABAMAFAHQAGAHAGAEQAHAFAHABIAAANgAriDVQgXgMgOgTQgNgTgHgcQgGgbACgfQABgeAJgZQALgZAPgRQAQgSAXgKQAVgJAbAAQAQAAAMAGQAMAGAJAKQAJAIAHAOQAHANAEAMQAKAfADAoIisAAIAAAJQgBAOADATQAEAWAIAPQAIASAQANQAQAMAYABQAaACAPgIQAPgHAKgKQAJgKAFgPIAKgBQgEAUgLAOQgJAMgTALQgSAKgfAAQghAAgWgLgArGgRQgOAJgJALQgJANgGAPQgEAOgEAQIAbABQAOAAATgBIAjgEQASgDALgFQACgMgCgNQgBgOgEgKQgEgLgKgHQgJgHgQAAQgUAAgOAIgAuQDgIAAgNQAIgBAHgFQAHgFAEgGQAFgGACgNIAAiQQgBgSgFgMQgFgLgKgJQgKgKgSAAQgyAAgcAuIABCeQABAMAF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");
	this.shape.setTransform(8.7,11.2,0.174,0.174);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEEB34").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape_1.setTransform(-41.2,-3.2,0.174,0.174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF8623").s().p("AiuJsQhKhAgRhgQg3AVg7gFQg8gEg1gfQg/glgkhAQgig+AAhHQAAhIAjg/QAZgrAjgdQgugngZg2QgYg3AAg7QAAhHAjg/QAbguAqghQAqghA0gOQBTgWBPAeQARhgBKhAQBMhABiAAQBiAABMBAQBKBAAQBgQBRgeBRAWQA0APAqAfQArAiAaAuQAkA+AABIQAAA8gZA2QgZA3gvAmQBDA3AWBSQAJAlAAAhQAABIgkA/QgbAvgqAhQgrAfg0APQhSAWhQgeQgQBghLBAQhLBAhiAAQhiAAhMhAg");
	this.shape_2.setTransform(-41.2,-3.2,0.174,0.174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E01021").s().p("AklFQQiHiHABjOQgBjBCHiHQCFiHC+AAQAkAAAhAJQAuALAZAaIAAgdIC5AAIARAEQARAJAAAUIADEXIjeAAQgGg9hEgYQgVgIgZgDIgUgCQhigBhABGQg8BCgBBhQAABlA4BAQA/BGB1AAQBDAAAvgpQAlgfAhhBIDJCBQg+BuhtBEQhvBFh0AAQjAAAiDiFg");
	this.shape_3.setTransform(-21.1,-3.2,0.174,0.174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E01021").s().p("Am2HUIAAitQAAgXAngLQAUgFATAAIAAoGIhOAAIAAioQAAgZAngIQAUgEATAAIF8AAQC5ABB3CJQByCEAADFQAADGhyCFQh3CJi6AAgAiDDkICVAAQBZgBAyhEQAvg+gBhkQAAhlgug/QgyhEhZAAIiVAAg");
	this.shape_4.setTransform(44.6,-3.2,0.174,0.174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E01021").s().p("AByHVIAAitIAIgUQAQgTAnAAIgVguIk5AAIgWAuQAoAAAQATQAIAKAAAKIAACtImBAAIAAitIAJgUQAPgTAnAAIDpoGIhBAAIAAioIAKgTQATgUAxAAIE/AAIEzLVIAhAFQAhAJgBAZIAACtgAhlAPIDKAAIhlj5g");
	this.shape_5.setTransform(27.1,-3.3,0.174,0.174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E01021").s().p("AChHVIlAnUIAAEAQAxAAAUAUQAKAJAAAKIAACtImFAAIAAitQAAgYAogKQAUgFATAAIAAoGIhPAAIAAioIAMgTQAVgUAuAAIDnAAIFAHjIAAkUIhMAAIAAioIAJgTQATgUAwAAIDnAAIAmAEQAmAKABAZQABApgBB/IhNAAIAALag");
	this.shape_6.setTransform(10.3,-3.3,0.174,0.174);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E01021").s().p("AlDFLQiGiJAAjCQAAjBCGiJQCHiJC8AAQC+AACGCJQCGCJAADBQAADCiGCJQiGCJi+AAQi8AAiHiJgAiQinQgzBAAABkQAABjAzBAQA3BEBaAAQBaAAAyhEQAug/AAhkQAAhlgug/QgyhDhaAAQhbAAg2BDg");
	this.shape_7.setTransform(-5.8,-3.3,0.174,0.174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Eg4BAGLIAAsWMBwEAAAIAAMWg");
	this.shape_8.setTransform(0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-358.6,-20.4,717.3,79.1), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAaQgKAJgJAAQgJAAgFgGQgGgFABgJQAAgPAVgFIALgCIADgBIABAAIAAgDQAAgHgDgCQgDgEgGAAQgIABgNAHIAAgLQANgHALAAQALAAAGAHQAEAFAAANIAAAVIAAAGQABAEABACQACACAEAAIACAAIgCAIIgGABQgKAAgCgJgAgKAEQgGAEAAAGQAAAFADADQACADAGAAQAGAAAHgFIAAgVQgMABgGAEg");
	this.shape.setTransform(44.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAZIAGgIQAJAIAHAAQAFAAADgCQAEgCAAgFQAAgDgCgCIgIgEIgNgHQgIgEABgLQAAgIAGgFQAGgFAHgBQAKAAAKAHIgFAJQgJgGgGAAQgDABgDACQgCACAAADQAAAFAEACIAEADIADABIAEACIADABQAMAEAAANQAAAIgHAGQgGAGgKAAQgNAAgJgKg");
	this.shape_1.setTransform(38.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAZQgJgJAAgQQAAgPALgLQAJgIALAAQARAAAIAOQADAGAAAHIgGAHIgoAAQAAAGACAGQADAFAFADQAFAEAFAAQAMAAAHgHIAHAHQgLALgRAAQgNAAgJgKgAASgJQgBgHgFgEQgEgEgHAAQgFAAgFAEQgFAEgCAHIAiAAIAAAAg");
	this.shape_2.setTransform(33.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA2IAAhOIgBgRQgBgEgDgDIALgEQAEADABADQAJgGAIAAQAOgBAJAKQAJAKAAAPQAAAPgJAJQgKAKgOAAQgHAAgIgDIAAApgAgPgmIAAAoQAIAFAHAAQAJgBAFgGQAGgGAAgLQAAgLgGgIQgGgHgJAAQgHAAgHAFg");
	this.shape_3.setTransform(26.2,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAZIAGgIQAJAIAHAAQAFAAADgCQAEgCAAgFQAAgDgCgCIgIgEIgNgHQgIgEABgLQAAgIAGgFQAGgFAHgBQAKAAAKAHIgFAJQgJgGgGAAQgDABgDACQgCACAAADQAAAFAEACIAEADIADABIAEACIADABQAMAEAAANQAAAIgHAGQgGAGgKAAQgNAAgJgKg");
	this.shape_4.setTransform(20.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAxIAAhAIAMAAIAABAgAgFgiQgCgDAAgEQAAgDACgCQADgCACgBQADABADACQACACAAADQAAAEgCADQgDACgDAAQgCAAgDgCg");
	this.shape_5.setTransform(14,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAtQgFAFgFABQgFACgGAAQgMAAgIgJQgIgKAAgOQAAgOAJgKQAJgKANAAIAIABQADAAAFADIAAgrIANAAIAABUIAAAGQAAAEACACQABABAEAAIACAAIgCAJIgGAAQgJABgDgJgAgCgFQgJAAgFAHQgFAGAAAMQAAAJAGAHQAFAHAJAAIAHgBIAHgFIAAgkQgHgGgHAAIgBAAg");
	this.shape_6.setTransform(9.2,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAnQgLgKgDgQIgMAAIAEgKIAHAAIAAgCIAAgEIgKAAIAEgJIAHAAQAEgQALgKQAKgKAOAAQAMAAALAHIgEAKQgLgHgJAAQgUAAgGAaIAhAAIgDAJIgfAAIAAADIAAADIAcAAIgEAKIgWAAQADALAHAHQAGAHALAAQAKAAAJgHIAEAJQgMAJgNAAQgNAAgLgKg");
	this.shape_7.setTransform(-0.6,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeApIAGgKQAJAGAKABQAJABAGgGQAHgGAAgKQAAgGgEgFQgDgGgGgBQgHgEgPAAIAGgrIAoAAIAAALIgdAAIgFAWQALAAAHADQAIAEAGAIQAEAGAAAJQABAPgLAJQgKAKgPAAQgOAAgLgIg");
	this.shape_8.setTransform(-7.8,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAxIgCgIIAZgZQAJgLAGgHQAFgIABgIQAAgHgFgGQgFgFgGAAQgJAAgJAJIgHgIQAEgFAEgCQAJgGAIAAQAPAAAIALQAGAHAAALQAAAIgDAHQgEAHgKAKQgKAMgOAMIAxAAIgCAMg");
	this.shape_9.setTransform(-14.3,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAxIAAhAIAMAAIAABAgAgFgiQgCgDAAgEQAAgDACgCQADgCACgBQADABADACQACACAAADQAAAEgCADQgDACgDAAQgCAAgDgCg");
	this.shape_10.setTransform(-21.5,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAiIAAgnQAAgKgDgDQgDgEgIgBQgGABgHAGIgEAEIAAAuIgMAAIAAgnIgBgRQgBgEgDgCIALgFQAFADABAJQAIgMAMAAQALAAAGAHQAHAGAAALIAAArg");
	this.shape_11.setTransform(-26.6,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAwQgIgGAAgKQAAgMAQgHQgEgBgDgDQgBgCAAgEQAAgDABgBQADgDAEgCQgNgHAAgQQABgKAGgHQAIgHALAAQAGgBAHADIAXAAIAAAJIgPgBQAHAHgBAIQAAAMgIAHQgHAGgKAAIgJgBQgEACAAACQgBADAKACIASAFQAJACADAFQAFAFAAAIQgBAKgJAHQgJAHgNAAQgOAAgIgGgAgVAeQABAGAFAFQAGAEAIAAQAIAAAGgEQAFgEAAgGQAAgHgHgDIgJgDIgLgCQgMAGAAAIgAgQgfQgBAIAEAGQAEAGAHAAQANAAABgPQAAgIgDgGQgFgFgGAAQgNAAgBAOg");
	this.shape_12.setTransform(-33.2,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjAkQgOgPAAgVQAAgVAOgPQAPgPAUAAQAZABAOARQALAOAAATQAAAXgOAOQgOAPgWAAQgVgBgOgPgAgbgaQgIAJAAARQAAAHAEAIQADAIAFAGQAKALANAAQARAAAKgLQAJgKAAgSQAAgQgLgMQgLgMgPAAQgQAAgKANg");
	this.shape_13.setTransform(-41.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-49.2,-8.8,98.5,18.4), null);


(lib.internouovo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AB7762","#2C140E"],[0,1],68.8,-112.6,0,68.8,-112.6,156.9).s().p("AmuNPQhLgHhkgWQg/gOgggKQg0gPgngVQg8gdhFg1Ih3hgQgHgFgqgqQgegegZgLQgfgMgKgOQgWgdgggEQgZgEgkANQgVAPgiASIg1AgQgfAUgaADQgPgGAIgOIAyhcQAeg2AYgjQAdgsAQgWQAbgjAbgYIAagTQANgKAGgHQAJgKACgLQADgUAPgVIAbgjIA0g/IAPgDQA9gGAtgYQAmgTBHgMQAmgHAKgDIAogJQA3gMBEgaIB3gwQAWgJAwgZQAsgYAbgJQAQgGAOgVIAkg3IAng0QAFgPgCgeQgBgfAFgPIABgIIAAgQIAGgIIADgQQAEgLAJgCQAJgCAJAFQAgAPAsgCQAagBAzgGQC/gLCGgSQAHgBAiAAQBEgGBKgPQAmgKAggKQAVgHAogPIA+gVQAngNA5gaIBfgqIBigpIAJABIAIgBIA6gUQAjgLAVgMQAxgbAagGQAMgCAPgGIAagMQA4gZA7AeQAtAYAUAtQAIARAOAYIAZAoIAdAyIBCCEQANAYgBAPIgTAHQgKACgGAJIggAuQgUAdgJAVQgFALgMAOIgUAXQgWAbAHAfQAGAWABAgIACA3QABAmgOAtQgGASgZA7IgPAhQgXA9gvAxIgsAxQhnBuh6BBIggASQgrAbhPASIgQAFQgKAFgXABQgXABgLAGQgMAIgUAEIgiAHQgvANgkAFIg4AIQghAFgYgCIgOgCQgIgBgFAEIhMABQgQAAgGgIIgOAAQgJAAgFACQgGACgHgHQgHgGgEACIgVAMIgEABIgngFQgYgDgOgKQgIgGgFABQgEABgHAHIgsAwIgHAMQgEAHAAAGIgFARIgGAIIgMAYQgFAJAAAKQADAggWAYQgMANghAWQh0BNh9AWQg1AKg7AAQggAAgigDg");
	this.shape.setTransform(4.8,-40,0.585,0.585,0,0,0,-0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D4947A","#5B291D"],[0.008,1],-59,10,0,-59,10,95.7).s().p("AM4DbIgIgTQgxhqhiikQgcgwgsgOQgrgOg3ASQggALhGAgQhBAdgmAMQgQAGgIACQgOACgKgIIgBACQgGALgQAHQieBEhXAhQiJAzh1AZQgaAFhGAJIgtABQgaABgSAGQgagCghAEIg6AJQgPACgwACQgnACgYAHQgHACgLgBIgSAAQguABgXAFQgvAKgggSQgNgHgHgCQgMgDgLAHQgCgaASgIIAAgQQB/AIA2gCQBxgEA/gDQBigGBOgKQBtgOB0gwIDihgQAggNAigLQArgNA5gXIBjgoQBFgbCng5QARgGAagFIAtgIQAegFAVAfQAWAhAYApQBfCnBJCTIAFALQAGARgDAJQgEAMgRgCQgXgDgNABQgRABgUAIQgHgGgGgKg");
	this.shape_1.setTransform(42.1,-80.8,0.585,0.585,0,0,0,-0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E59F83","#5B291D"],[0,1],-5.7,-43.5,0,-5.7,-43.5,67.1).s().p("AktFQQABgHAAgRQAAgQADgJQADgbANgkIAWg+QAVg+AUgeQBOikBpiKQB0ibCwjGQAPgRANAFQAKADADAJQACAFABANQACAWgFAZQgCAQgIAeQgFAQAFAKQAFAKAOAFQAEAGgBACQgSAVgtBMQgmA9ghAdQgsAngoA5QgbAlgpBGQgWAjgoBLQgIAYgUAOQgRAMgbAHQg3APgKArQgEAMgCASIgFAeQgEAPgCAPIgLAtQgGAbgNAPQgSABgCgPQACgSgEgIQgNAeAAAOQgBAWAYAPQAFADACAGIADAMQACAigEAYQgEASAAAJIAAAsQAAAbgSAOQhThsAeibg");
	this.shape_2.setTransform(-78.5,-14.4,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.internouovo, new cjs.Rectangle(-96.7,-94.5,193.4,115.2), null);


(lib.fiore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.1,-3.1,0.545,0.545,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fiore, new cjs.Rectangle(-30.8,-33.9,61.6,67.8), null);


(lib.data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAqQgLgIAAgMQAAgNALgHIAGgCQgNgHAAgOQAAgOAMgIQAJgGAOAAQAPAAAKAHQAKAHAAALQAAAPgNAHQAFACAEACQAIAGAAALQABAOgLAJQgLAIgSAAQgRAAgLgIgAgOAWQAAAFAEADQAEAEAFAAQAFAAAEgDQAEgEgBgFQAAgIgKgFIgEgCQgLAGAAAJgAgGgeQgDADAAAEQABAHAIAEIAEACQAJgGAAgHQAAgEgEgDQgDgDgGAAQgDAAgDADg");
	this.shape.setTransform(41.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAxIAAhEQgJAGgKADIgGgSQAMgDANgHIAOgHIABgBIACgBIACgBIAHADIAABeg");
	this.shape_1.setTransform(34.4,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgYAOgOQAMgLANAAQAVAAALAQQAIAMAAAUQAAAYgLANQgKAOgTAAQgRAAgLgOgAgKgSQgCAFAAAMQAAANADAHQAEAIAFABQAIABADgLQACgFABgNQAAgMgEgHQgEgHgGgBQgHAAgDAJg");
	this.shape_2.setTransform(27.5,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAxIgDgNIAVgSQAKgJAFgHQAFgGAAgHQAAgFgEgEQgDgDgHAAQgHAAgLAIIgGgTQAGgGAFgCQAKgGAKAAQAQAAAKALQAHAIABAMQgBALgHAJQgIALgPAOIAmAAIgEAVg");
	this.shape_3.setTransform(19.5,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAbQgKgLAAgQQAAgPALgLQALgKAOAAQAOAAAJAIQAKAJAAAOIgIAJIgkAAQAAAGAGAEQAEAEAGAAQAMAAAKgHIAGAOQgNAMgUAAQgPAAgLgKgAAPgIQgBgGgDgDQgDgDgGAAQgKAAgCAMIAZAAIAAAAg");
	this.shape_4.setTransform(9.6,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA0IAAhnIAZAAIAABng");
	this.shape_5.setTransform(4.2,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAyIAAhEIAYAAIAABEgAgIgbQgEgDAAgGQAAgGAEgEQADgDAFAAQAGAAAEADQADAEAAAGQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_6.setTransform(0.7,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAkIAAgqIgBgPQgBgFgDgDIAWgGQAGAEAAANQAHgRAMAAQAFAAAHADIgGAXIgJgCQgHAAgIALIAAAkg");
	this.shape_7.setTransform(-4,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA1IAAhLIgBgQQgBgEgEgEIAWgGQAEADACAFQAJgHAJAAQAPAAAJAKQAJAKAAARQgBAIgDAHQgDAIgHAEQgJAIgNAAQgGAAgHgCIAAAigAgJgdIAAAdQAFACAEAAQAGAAAEgDQAEgFAAgIQAAgHgEgFQgEgEgGAAIgJABg");
	this.shape_8.setTransform(-11.2,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAfQgGgGAAgJQAAgSAZgEIAPgCQgBgLgNABQgKABgLAFIAAgRQAOgHAQAAQAQAAAIAJQAFAGAAANIAAAQQAAAIACADQABACAGAAIgDAOQgIACgFAAQgLgBgEgIQgGAFgEACQgFACgGAAQgKAAgFgGgAgJAGQgEADAAAEQgBAEADADQACACAEAAQAEgBAFgDIAAgQQgJACgEACg");
	this.shape_9.setTransform(-18.9,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAoIAEgTQAMAJALABQAHAAADgEQAEgDAAgFQAAgMgRAAIgJAAIAAgQIARAAQADABADgEQACgEAAgEQgBgDgEgDQgCgDgGAAQgHAAgKAGIgGgQQARgKAOAAQAOAAAJAHQAJAHAAAKQAAAJgGAHQgCADgHADQAJADAEAEQAGAHgBAKQAAAMgKAJQgLAIgOAAQgVAAgOgKg");
	this.shape_10.setTransform(-28.9,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA0IAAhnIAZAAIAABng");
	this.shape_11.setTransform(-36.5,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAfQgGgGAAgJQAAgSAZgEIAPgCQgBgLgNABQgKABgLAFIAAgRQAOgHAQAAQAQAAAIAJQAFAGAAANIAAAQQAAAIACADQABACAGAAIgDAOQgIACgFAAQgLgBgEgIQgGAFgEACQgFACgGAAQgKAAgFgGgAgJAGQgEADAAAEQgBAEADADQACACAEAAQAEgBAFgDIAAgQQgJACgEACg");
	this.shape_12.setTransform(-42,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAaQgJgKAAgPQAAgPAKgLQALgKARgBQAPgBAMAKQALAJABAQQABAQgLAMQgLALgSAAQgSAAgLgLgAgKgMQgDAFAAAHQAAAHAEAFQAEAGAGAAQANAAAAgRQAAgHgEgFQgFgGgFAAQgGAAgEAFg");
	this.shape_13.setTransform(36.3,-7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAjIgCgJIAggqIgdAAIAAgSIA6AAIADAJIgfApIAiAAIgDATg");
	this.shape_14.setTransform(28.8,-7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAkIAAgqIAAgPQgBgFgDgDIAVgGQAHAEAAAMQAHgQAMAAQAGAAAGAEIgGAWIgIgCQgJgBgHAMIAAAkg");
	this.shape_15.setTransform(22.3,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAfQgGgGAAgJQAAgSAZgEIAPgCQgBgLgNABQgKABgLAFIAAgRQAOgHAQAAQAQAAAIAJQAFAGAAANIAAAQQAAAIACADQABACAGAAIgDAOQgIACgFAAQgLgBgEgIQgGAFgEACQgFACgGAAQgKAAgFgGgAgJAGQgEADAAAEQgBAEADADQACACAEAAQAEgBAFgDIAAgQQgJACgEACg");
	this.shape_16.setTransform(15.6,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAkAkIAAgmQAAgGgDgDQgCgCgFAAQgFAAgGAFIAAAsIgYAAIAAgmQAAgNgKACQgFAAgGAFIAAAsIgZAAIAAgqIgBgPQAAgFgEgDIAWgGQAGAEABAJQAJgNAPAAQANAAAGANQAFgGAEgCQAHgFAIAAQAPAAAGAJQAEAGAAALIAAAtg");
	this.shape_17.setTransform(5.3,-7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAsIATglIANgZIACgDIABgDIACgDIgqAAIAAgVIBGAAIAFALIgNAYIgTAnIgKAXg");
	this.shape_18.setTransform(-7.1,-9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiAxIgDgNIAVgSQAKgJAGgHQADgGABgHQAAgFgEgEQgDgDgGAAQgIAAgLAIIgHgTQAHgGAFgCQAKgGALAAQAPAAAKALQAIAIgBAMQABALgIAJQgHALgQAOIAmAAIgDAVg");
	this.shape_19.setTransform(-14.8,-9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMA0IAAhnIAYAAIAABng");
	this.shape_20.setTransform(-22.7,-9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAfQgGgGAAgJQAAgSAZgEIAPgCQgBgLgNABQgKABgLAFIAAgRQAOgHAQAAQAQAAAIAJQAFAGAAANIAAAQQAAAIACADQABACAGAAIgDAOQgIACgFAAQgLgBgEgIQgGAFgEACQgFACgGAAQgKAAgFgGgAgJAGQgEADAAAEQgBAEADADQACACAEAAQAEgBAFgDIAAgQQgJACgEACg");
	this.shape_21.setTransform(-28.2,-7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAZA0QgKAAgEgIQgJAJgNgBQgNAAgIgKQgIgKAAgPQAAgQAJgKQAKgKAPgBQAGgBAIADIAAgiIAZAAIAABLQAAAJABACQACACAFAAIgDAPIgLACIgCgBgAgLACQgEAFAAAHQAAAIAEAFQAEAEAHAAQAEAAAEgDIAAgbQgEgCgEAAQgHAAgEADg");
	this.shape_22.setTransform(-36.1,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.data, new cjs.Rectangle(-47.8,-16.6,95.7,33.3), null);


(lib.calottauovo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AB7762","#5B291D"],[0,1],58.6,-86.9,0,58.6,-86.9,136.3).s().p("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");
	this.shape.setTransform(-9.7,-21.6,0.59,0.59,0,0,0,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#C26862","#31160F"],[0,1],-71.9,41.6,0,-71.9,41.6,170).s().p("Av5OfQgagKhPgmQgKgEgJgKQgTgXgqgSQgggNgbgYQgdgbg8gVIiLAQQgLAJgNAAIgDgEQABgKAOgCIADABIAAgDQgWgEgFgEQgGgFABgSQAAgHgFgTQgEgQADgKQADgIAJgNQALgOADgGQAEgIAKgMQALgNAEgHQASgkAigsIA8hMIAegjQAVgXAKgNIA9hNQAHgIAVgVQAkglARgjIAOgYQAJgPADgLQACgGAJgIIANgNQAGgGAXgfQARgXAQgKQAAgGAEgHIAGgMIAPgOIASgaIASgaQALgPALgIIAZgpIAAAAIAIgQIAIgJQAGgFACgDIAAAAIAIgJIABgHIAQgRIAJgQQABgGAHgCQABgHAHgBIAAgBIAQgQIAAAAIAIgJQADgHAGgEIAAgBQACgOAOgQIATgUIAKgNIBBhMQAmgpAkgaIAIgIQAEgEAEgBQAggGAQgYQAMgSAHglQAFgYAdgfIAnghIAvgxIAMgJQACgDAFgCIASgMIAHgEIAIgCIAEAAIARAAIA9gmQAjgXAagNQApgVAcgJQAngNAjACQAaACAGADQAHADAJAAIARAAQAegeA7gLQAdgEAUADQAaAEAUAPIAJAGQAKAGAJADIAJADQAJAEAJACIAKADQAJADAPAAIAPAAQASgBATgLIAigVIAcgRIAEgCIAIgEIADABIABAAQANAAAOgHQASgMAcABQAJgFALAEIASAIQAUAFAPgFQAcgKAmgUQAbgIAOAlQAIAWAdACQAWACAxgJQAXgEAzAIQAxAIAZgGQAvgMB5AfQBQAVBVAfQADADgqA0QgqAzADABIAfAHQAQAGALAKQANgOAUAPQBEA2AOAPQApArAIA0IBWCFIAFAPQAKAKAKASIARAeIAHAQQAEAJAEAEQAQANALAaIAQArQALAWABAgQAAATgCAlQAAAGgFAHIgLAKQghAfgnAyQgIAJgFABQgJADgPAJQgPAKgIADQgTAGgWARIgkAdQgaAVgTAhQgRAdgLAQQgRAYgSAQQgSASgPAJQgTANgUADQgVAEgUAPQgNAJgVAUQgXAWgaAHQgfAJggAVQgNAJgXALIhvAzQADADgCAFQgeATgOALQgVARgcgCQgcgBgVgTIgDgCQgfgmgUgKQgdgKgfgQQgegPgYAUQgVATgbAAQgMABgEADQgWALgagBQgUgBgcgJIhvggQgogNg1ABQhSAChJAbIgYAJQgdAKgWgNQgggQgPgJQg+gphkgdQgLgEgVgBQgpgCghABQhIABg+AhIghAQQg8AggkAmQgSAUgnAmQgUAVgFAHQgMATgKAKQgNAOgQAIQgLAFgKAQQgNAVgFAFQgEAEACAHIADAMQADAOgCAEQgCAEgPAHQgOAIACALQADAUgUAPQgVAOgFAeQgEAZgLAwQgDAQgFALQgPAlgdAAQgLAAgNgFg");
	this.shape_1.setTransform(-3.3,-18,0.59,0.59,0,0,0,-0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#AB7762","#4A221D"],[0,1],-74.7,-51.4,0,-74.7,-51.4,161.4).s().p("A7rX0QgGgUAGghQAHgoAAgMIA7jvQA7jyAbheQA7jdARgzQAph7A8iXQAlhcBKixQBfjhCuktQByjGBFhkQCijpCjilQBghhCgheIAIgCQBihABpgfQCkgxCHAGQB4AGBFAYIANABQCHAmBoBBIALALQARACAIAPQAdALAcAfQBEAwAwAwQAIADAJAIIAPAOQClCWCNDWQCqEFCbE2QAfA9A4B9QA4B8BfD0IAEALQALAcgEAHQgDAIgfAMIgMgVQgFgMAAgMQABgSgPghQgJgUgEgMQgFgSAAgQQABgNgHgGQgJgIgJgTQgJgVgHgIQgNg8gngsQgHgJABgSQAAgKgIgVQgFADgLgFIgBgIIgIgIQgCgNgGgEQgUgVgTgrQgXgxgMgRQgHgJgQgdQgOgYgLgMIhKhIQgtgqgkgXQgNgJABgKIgBgCIgDAFQgmgDgygOIhXgZQhigahLAXQgzADgVgSQgWgSgGgyIAAgBQgLAEgIgIQgIgLgEgFQg1g5g0gYQgngYg1gTQgegKhEgTIgLgCQhNAXhQgcIgCABQAEAXgOAQQgOAQgWgEQgYgGgYAJQgRAGgZARIhAArIgQALQgKAEgKgEQAMAXgLALQgIAIgZAEQgHgBgMgLQgMgLgKACIgJgCIgxgRQgIgDgjAAQgcAAgMgRQgFAJgFAAQgTACgnAQQglAPgXAAIgCgFIgBABQgoAWgVAKQgSAIgWAUIgkAgQgQAMgFADQgMAGgOgBQgIgBgLAFIgTAIIgNAIQgIAFgIAAQgIAAgHAJQgGAHgCAKQgDAPgKARIgSAdQgUAggFAYIgJANQgFALgEAYQgDAXgFALQgRAjgGAdIgKAwQgGAcgBAUQgFA2gqAXQgPAJgYAaQghAkgwAiQgrAfgsA2QgCADgDgBIABACQgCAVgTASIggAfIgpApIgBAAIgIAMIgIAMIAAABIgIAIIAAAAIgQARIgBAAIgIAIIAAAAIgBABQAIAJgEAJQgDAGgJAIQhOBGg7BYQgIALgJADQAGANgHAMQgEAIgLANIhPBzQgrBDgYA3IgEAHIgZAdQgQAOgRgFQgQgFgGgTQgEgMgBgYIAAhUQAAgxgEghQgcBggzBoQgCADAEAUQACAPgIgBQgEgDgGAiQgJA1gJAeQgLAmgHBNQgGBLgNAoQgGAUgCAOIgEAiQgBAFgUAyIgJAZQgDAJACASQAAADgOATQgPAUAAADQgFAPgWAIQgaALgIAJg");
	this.shape_2.setTransform(-8.9,-44.6,0.59,0.59,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.calottauovo, new cjs.Rectangle(-113.7,-134.7,209.6,180.1), null);


(lib.buono = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheisIBPgNIDFE1IhgAQIgqhEIh6AVIgSBOIhVAPgAhCAiIBRgOIg5hfg");
	this.shape.setTransform(24.5,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpChIgFhSQA2AhAugEQASgCAKgLQAKgLgDgQQgDgTglgMIgngNQhCgXgJg5QgJg0ApgkQAdgZAmgGQAegFAYACQAYACAlAMIgJBIQgvgVgdAFQgMACgJAJQgIAKABALQACAMAIAHQAJAGAXAIQA2ARAUAMQAjAVAHArQAIAvgeAjQgfAkg4AJQgRADgQAAQguAAgvgTg");
	this.shape_1.setTransform(-9.3,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiMiUIDTgkIAMBFIh8AVIALA8IBugTIALBAIhuATIALBGICRgZIAEBIIjhAmg");
	this.shape_2.setTransform(-35.3,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiMiXIAdgHIBHgQQBUgPArAaQArAbAJA3QAGAggLAeQgMAcgZAUQgdAXg2AJIgYAEIAQBkIhaAPgAgOhmIgYAFIAQBeIAWgEQAcgEAOgQQANgOgDgXQgEgWgSgLQgMgHgQAAQgHAAgJACg");
	this.shape_3.setTransform(-64.2,42.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpChIgFhSQA2AhAugEQASgCAKgLQAKgLgDgQQgDgTglgMIgngNQhCgXgJg5QgJg0ApgkQAdgZAmgGQAegFAYACQAYACAlAMIgJBIQgvgVgdAFQgMACgJAJQgIAKABALQACAMAIAHQAJAGAXAIQA2ARAUAMQAjAVAHArQAIAvgeAjQgfAkg4AJQgRADgQAAQguAAgvgTg");
	this.shape_4.setTransform(-90.5,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqCUQg6gpgNhMQgNhKArg8QAqg7BLgNQBRgOA9AuQA2AqAMBFQAOBPgqA5QgpA6hRAOQgSADgRAAQg3AAgsgfgAgUhgQgjAGgQAdQgQAcAHArQAIAsAhAaQAZAUAfgEQAlgEARgdQASgcgHgsQgIgrgdgZQgXgUgbAAIgPABg");
	this.shape_5.setTransform(29.4,-18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai4iFIA5gWIDMCgIghi3IBVgOIA4FFIg4AXIjNieIAhC1IhVAPg");
	this.shape_6.setTransform(-7.2,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhqCUQg6gpgNhMQgNhKArg8QAqg7BLgNQBRgOA9AuQA2AqAMBFQAOBPgqA5QgpA6hRAOQgSADgRAAQg3AAgsgfgAgUhgQgjAGgQAdQgQAcAHArQAIAsAhAaQAZAUAfgEQAlgEARgdQASgcgHgsQgIgrgdgZQgYgUgaAAIgPABg");
	this.shape_7.setTransform(-44.1,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnCWQgYgcgKg+IghjCIBagPIAhDCQAHAqAWANQASAMAegFQAkgGAKgcQAGgQgFghIghjCIBagQIAiDHQANBMgiAoQgiAphLAMQgZAFgVAAQg+AAghglg");
	this.shape_8.setTransform(-81.4,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiaiTQBAgTAugHQBCgMAoARQAoASAIAsQAHAtgrAhQBEAHALBBQALBDhEAhQgeAPg1AJQg0AJg7ACgAgIAVIgbAEIAOBVIAKAAIARgDIAIgBQAZgEAMgOQAMgNgDgTQgGglgpAAQgKAAgLACgAgihxIgYAGIANBPIArgHQAKgCAJgPQAJgPgCgMQgGgjgjAAIgRABg");
	this.shape_9.setTransform(-112.9,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPFXQhihAgvh8IhbAPIAWhXIAtgHIgDgTIgEgcIhMANIAThWIA2gJQAFiFBIhbQBIhcB0gTQBrgSBwA8Ig7CqQhTgwgtAIQhXAOgaB2IDkgnIgUBXIjVAkIACAVIAGAZIDCghIgVBXIiKAXQBDBoBcgPQA4gKA5hJIBgCOQhTBihzATQgbAFgbAAQhUAAhLgyg");
	this.shape_10.setTransform(144.3,-18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj/F4IAEibQBeAmBSgLQA4gGAfgmQAfglgLguQgJgngjgbQgjgagwgEQg3gDhVANIgBl1IGNhCIAbCgIjmAnIgCBkQEFgJAjDLQATB0hFBVQhFBViEAXQgsAHgrAAQhWAAhTgdg");
	this.shape_11.setTransform(83.2,-6.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E02724").s().p("AkVA8QgUg8A7gQQAPgFBYgEQB2gGBcgXQAZgGBDgVQA5gSAjgHQANgDAAALQgBAKgLACQglAIhhAcQhTAYgyAIQhUAMgyACIgjgBQgXgBgMADQgjAIgGAXQgGAWAYAUQArAiBggaQAzgPBTgoQBsgyB7gWQANgCAAAKQAAALgMACQg7AKgoALQg0ANgqAUQhfAug7ARQhBASguAAQhKAAgQgvg");
	this.shape_12.setTransform(-165.1,37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2C2C2").s().p("AgqA8QgYgSgFgdQgFgdARgZQASgZAegGQAdgEAZARQAYASAFAdQAFAdgRAZQgSAZgeAGIgMABQgWAAgUgOgAgJg8QgaAFgOAUQgPAVAEAYQAEAZAVAPQAVAPAYgEQAagFAOgVQAPgUgEgZQgEgZgVgOQgRgMgTAAIgJABg");
	this.shape_13.setTransform(-134.1,29.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AxiNlQgYgDgPgHImqkaQgKgEgKgOQgLgOgCgLIhLm6QgCgLAGgQQAGgRAIgHIE0mWQAMgLAWgLQAXgLAPgDMArTgHVQADAAADACQAEACAAAEIDUTkQABAEgCADQgDADgDAAMgrTAHVIgQACIgYgCgA0LlyQgMACgSAJQgSAJgIAIIk1GVQgDADgCAIQgDAJAAAEIBLG6QABAEAFAHQAGAGADACIGpEbQALAFAUACQAUADALgDMAq8gHRIjMy4g");
	this.shape_14.setTransform(18.4,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A72B23","#B32922","#CC2122","#DB1621","#E11021"],[0,0.145,0.514,0.816,1],-174.5,10.9,172,-8.7).s().p("AxrOUQgggEgVgJImpkaQgVgKgSgWQgSgXgEgXIhLm7QgDgXAJgbQAJgcARgPIE1mWQARgPAcgPQAcgOAXgEMArZgHWQAXgDATANQATANAEAXIDUTlQAEAWgOATQgNAUgXADMgrZAHWQgMACgNAAQgOAAgPgCgA4CDnQgaAFgOAUQgPAVAEAZQAEAaAVAOQAVAPAZgEQAagEAOgVQAPgVgEgZQgEgZgVgPQgRgLgTAAIgKAAg");
	this.shape_15.setTransform(18.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E02724").s().p("AgFA4QgQgPgIgUQgKgbAEgcQACgMAGgIQAEgEANgKQAFgEANAJQANAIgGAFIgMAJQgEAEgCAHQgEAMABARQABASAFANIAIAQIAEADQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAHgBAMAJQAMAKgJABIgHABQgPAAgQgOg");
	this.shape_16.setTransform(-152.6,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buono, new cjs.Rectangle(-193.4,-91.8,386.9,183.6), null);


(lib.baseuovo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AiRIwQg9g8AAhWQAAgcAGgXQAGgXAOgaQgrBJhSAVQhSAVhJgrQhKgqgWhTQgWhUArhJQA1hdBogLQgsgEgmgXQhKgqgWhUQgWhTArhJQArhLBSgWQBTgWBKAqQAsAbAcAsQgOgZgFgYQgGgWAAgcQAAhVA9g8QA8g+BVAAQBVAAA9A+QA8A8AABVQAAAbgFAVQgFAXgNAZQAcgqArgaQBKgqBSAWQBTAWArBLQAqBJgWBTQgWBUhKAqQgWANgTAGQgVAGgaACQAaABAVAIQATAGAXANQBKArAWBSQAWBTgrBLQgrBKhSAWQhTAWhKgrQgXgNgQgPQgSgRgPgYQANAaAGAXQAFAVAAAbQAABWg8A8Qg9A+hVgBQhVABg8g+gAiRiRQg9A8AABVQAABWA9A8QA8A9BVAAQBVAAA9g9QA8g8AAhWQAAhVg8g8Qg9g9hVAAQhVAAg8A9g");
	this.shape.setTransform(-3.1,-57,0.545,0.545,0,0,0,-5.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AB7762","#5B291D"],[0,1],-116.2,13.2,0,-116.2,13.2,300.4).s().p("ArgK6QhQgJgggGQg+gLgugUQgqgRgOgWQgBgGgCgGQgrgJgngpQgFgFgegaQgWgSgJgRQgFgIgWgFQgUgEgFgNIgBABIgKAFQgDAEAJAGQAXAPAcAZQAHAIACADQADAIgFAGQgIAJgOgIQg2gbgagPQgtgagYgfQgPgJgBgRIgHgHIgJAAIgHAHIgBABQgKAAgFgCQgHgDgFgIQgqhKgJg6IgGgVQgEgNABgJIgDgCQANgIAWgDIAkgFQAJgCAKAEQAKAEADAHQAJAQATAOIAhAXQAXgCANASQANAXAjAaQAPALAUAXIASARQAKAIALAEQAMAEAIAKQAGAJAPAKQARAMAFAGQARAQAiAVQAnAXAOALQACACAJADQAHACADAFQAMABATAJQAUAMAJACIAjAKQAYAFAtANQAvANAWAFQAhAGAYACIBVAJQAyAFAkgBQB2gEByg3IAqgUQAZgMAQgMQAagSAPgQQAUgUAJgYIgDgHQgDgKAFgMIALgTIANgdQAFgKAKgUQAVghAVgLQAbgOAkAOQAVAIAogDQAugEARAEQAQAEAcAAQAggBALABIANAEQAJgEAMAJQADgEAEgCQBHgIBfgVICjgnQBPgSBQgtQA7giBQg+QBCgzBFhWQBgh4AXilIAFgRQgQg+AAggQACgzAignQANgPARgdQATghAKgMQAIgMAXgPQAegVAFgEQANgMAmgFQADgBAAAGQABAHACgBQAQgCAaAHQAdAIAMAAIAFAFQgGAFABAJQABAFgCADQgCACgFgCQgJgFgIACIgRAGQgXAHgPASQgMANgMAaQgLAWglBLQgfA8gQAmQAAADgEAEIgFAGQAAAEgCAEQACALgJAGQgFBUg2BqQgYAvgmAsIggAoIggAnQgKAKgnAoIiRCSIglAkQgUAUgTAMIgOAPQgRAAgNAJQgPAKgbALQghAOgKAGQgOAIgUAFIgQADQgKADgFAIQgDAFgNABQgNACgDAGQgFAHgLgBQgOgBgEADQgGAOgDACQgFABgMgJQgOgBgTAEIggAHQADALgCAFQgCAFgGABIglAAIAKgOQgMgCgTAFQgYAGgIAAQgKAIgPABIgaAAQgQgBgEgBIgOAAQgJgCgFgFIgBABQgGAEgKgCQgNgEgWABIgjABQgVAAglgLQgpgMgTgBQgUgBgKgDQgZgLgNgDQgQgEgJAKQgEAFgGASIgHAbQgHAOgOAEIgBAAIgBAGIgsBpQgEAIgJAHQgGAEgNAFIg/AcQgKANgSAIIgiAKQh0AihkANQg9AHg8AAQgzAAgxgFg");
	this.shape_1.setTransform(-4.8,-166.5,0.57,0.57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#AB7762","#4A221D"],[0,1],-42.3,-24.2,0,-42.3,-24.2,141.6).s().p("AiCQeQi1gZixhOQg5gYgygcQgcgPgQgLQhshHhWheQhUhbg9hxQhTiZgoi/QgShWgHhNQgJhoACg+IAEinIAAgLQAAgHADgEIABgGQgCgPAGgIIAAAAIAFgnQAFgVANgKQAKgHAhgHIAggFIALgEIALgEQAGgBAMgIQALgHABABIAxgcIAGgDQADgCADAAIAdgTIADACQAFAGADALIAEASQALArAZAdIAAgBIABgDIAEgDQAEgBACABIAHAHIAJAQIAPAIQAIAGAEAGIAEADQALADARAKQAVANAGACQAEACACgDIgBgCIgBgCQgGgDgNgMQgMgKgJgCQgGgCAAgHQgBgHAGABIAOACIAOAHQAJADAHgDQAEgBABAEQAGAYAUAFIAEACIABACQAAAKAIAFIAOAHIAOAKIAOAKQAIAMAUAIIAbALQAPAHANAAQADAAAMAEQATAGAXgBIAUAAQALAAAIAEIAOAAIAlAAQAoABA7gMQAYgFAggJIA2gQIAAgBIABgCIABAAQAdgJAVgcIAeg3QAHgFACgNIAFgPQADgMAEgCQAEgBAMACQAMAAAHAJIATAAQAIgBARAFIAVAHQANADAKAAIARAAQAKAAAGgBQAHgCAAADQADgHAEACIAEAFIAOAEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAgBQAFAAAGgEQAFgEAFABIAKgBQAHgEAKABIASADQADgCAKAAQAIgBAIgHQAHgDAGAAIAOACQALAFAIgJQARgIAqgRQAngPAUgMQALgFAGACQAfgdAogoIBFhGQArgqAhgxQAmg3AKg9QABgGADgJIAHgTQAJgWASglIAdg6QAPgjAkgIQAHgCAFgEQADgCADAAIANACQAPABAIAEQAIADAHAOIAJAYQAGAXARALQAHAFAKAOIAZAiQADAAACADQA0AWAogsQADgDAEgBQAAgKAOgBQALAAADAOQANAvANA9IAHAlQAEAWAFAPIABABQACACgBAHQAAAGACADIABAFQADAEgBAIQAAAIACADQAFAUAEAaIAFAuQARCLAFBoQAFBhgGBQQgHBfgEAkQgLBogXByIgDAGQAAANgEAGIgDASQhBEeioDDQjdEAkWBdQiZAzilAAQhMAAhQgLg");
	this.shape_2.setTransform(0,-98.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.baseuovo, new cjs.Rectangle(-113.4,-206.5,226.9,214.5), null);


(lib.uovoanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
		var tl=this;
		tl.stop();
		var delay = 500;
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
		this.visible = true;
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
	this.frame_55 = function() {
		this.visible = true;
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
	this.frame_56 = function() {
		this.stop();
		this.parent.gotoAndPlay("fine");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(33).call(this.frame_55).wait(1).call(this.frame_56).wait(1));

	// tx sorpresa
	this.instance = new lib.txsorpresa();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-388.6,0.57,0.57,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15).to({_off:false,y:-570.2},0).to({y:-373.3},4,cjs.Ease.get(1)).to({y:-388.4},2,cjs.Ease.get(-1)).wait(35));

	// baseuovo
	this.instance_1 = new lib.baseuovo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.92,0.92);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(45));

	// buono
	this.instance_2 = new lib.buono();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,-217.2,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(11).to({_off:false,regX:0,regY:-0.3,scaleX:0.39,scaleY:0.39,rotation:-27,x:-11.6,y:-77.4},0).to({regX:-0.1,scaleX:1.1,scaleY:1.1,rotation:-7,x:-46,y:-223.3},2,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:-36,y:-217.2},2,cjs.Ease.get(1)).wait(7).to({regY:-0.2,scaleX:1.07,scaleY:1.07,y:-222.6},4,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,y:-217.2},4).to({regY:-0.2,scaleX:1.07,scaleY:1.07,y:-222.6},4,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,y:-217.2},4).to({regY:-0.2,scaleX:1.07,scaleY:1.07,y:-222.6},4,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,y:-217.2},4).to({regY:-0.2,scaleX:1.07,scaleY:1.07,y:-222.6},4,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,y:-217.2},4).wait(2));

	// calottauovo
	this.instance_3 = new lib.calottauovo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.4,-231.5,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({y:-261.5},0).wait(44));

	// retro
	this.instance_4 = new lib.internouovo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-13.4,-124.1,0.92,0.92);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(45));

	// uovo
	this.instance_5 = new lib.uovo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({rotation:2,x:0,y:-0.9},0).wait(1).to({scaleX:1.07,scaleY:0.86,rotation:-5,x:0.1,y:-1},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9,scaleY:1.06,rotation:3},0).wait(1).to({regX:0,regY:0,scaleX:1.07,scaleY:0.86,rotation:7,y:-0.9},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9,scaleY:1.06,rotation:-15,y:-1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:2,x:0,y:-0.9},0).wait(1).to({scaleX:1.07,scaleY:0.86,rotation:-5,x:0.1,y:-1},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9,scaleY:1.06,rotation:3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0},0).wait(1).to({rotation:2,x:0,y:-0.9},0).wait(1).to({scaleX:1.07,scaleY:0.86,rotation:-5,x:0.1,y:-1},0).to({_off:true},1).wait(44));

	// ombra
	this.instance_6 = new lib.ombra();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.4,4,1,0.161);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.6,-424.7,386.9,444);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lamp:1});

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
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fine:16});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		var tl = this;
		tl.stop();
		var delay = 2000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_39 = function() {
		this.cta.gotoAndPlay("lamp");
		
		var tl = this;
		tl.stop();
		var delay = 4500;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_40 = function() {
		if (!this.alreadyExecuted) {
			this.alreadyExecuted = true;
			this.loopNum = 1;
		} else {
			this.loopNum++;
			if (this.loopNum == 2) {
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(15).call(this.frame_39).wait(1).call(this.frame_40).wait(1));

	// cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#725559").ss(2,1,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150.1,283.8,0.96,0.96,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150.9,y:220.7},4,cjs.Ease.get(-1)).to({y:229.5},2,cjs.Ease.get(1)).wait(35));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(77.6,276.4,0.46,0.46,0,0,0,0.2,5.4);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(31).to({_off:false},0).to({y:167.4},8,cjs.Ease.get(-1)).wait(2));

	// logo-specialissimi
	this.instance_1 = new lib.logospecialissimi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.6,-66.9,0.56,0.56,0,0,0,1.1,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:63.1},7,cjs.Ease.get(1)).wait(10));

	// data
	this.instance_2 = new lib.data();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.6,123.9,0.19,0.19,0,0,0,0.2,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:77.5,alpha:1},7,cjs.Ease.get(-1)).wait(10));

	// volantino
	this.instance_3 = new lib.volantino_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(415.1,106.9,0.816,0.816,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:229.9},7,cjs.Ease.get(-1)).wait(10));

	// tx
	this.instance_4 = new lib.tx();
	this.instance_4.parent = this;
	this.instance_4.setTransform(380.1,98.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({x:223.3},7,cjs.Ease.get(1)).to({x:-82.5},7,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// legal
	this.instance_5 = new lib.legal();
	this.instance_5.parent = this;
	this.instance_5.setTransform(397.1,156.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({x:220.1},7,cjs.Ease.get(-1)).to({x:-82.9},7,cjs.Ease.get(-1)).to({_off:true},1).wait(9));

	// uovo
	this.instance_6 = new lib.uovoanim();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154.5,202.3,0.127,0.127,0,0,0,-0.8,-9.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({regX:-1.4,regY:-9.8,scaleX:0.52,scaleY:0.52,x:158.1,y:190.7},7,cjs.Ease.get(-1)).to({regX:0,regY:0.4,scaleX:0.43,scaleY:0.43,x:155.6,y:197.7},2,cjs.Ease.get(1)).to({x:175.6},2).to({regX:0.1,x:83.1},7,cjs.Ease.get(1)).to({x:-236.9},7,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,124,688.5,341.1);
// library properties:
lib.properties = {
	id: '37B5A1A697A54202A6EEAA3083230580',
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"volantino.png", id:"volantino"}
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