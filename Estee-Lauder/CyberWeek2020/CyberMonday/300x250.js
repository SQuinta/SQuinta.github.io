(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_1", frames: [[82,320,55,87],[82,409,47,88],[0,0,125,318],[0,320,80,151],[0,473,15,13]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.avanbraccio = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.braccio = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.corpo = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.inverso = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.occhio = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ombrarobot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,38).s().p("AlJFJQiJiIAAjBQAAjACJiJQCJiIDAAAQDBAACJCIQCJCJAADAQAADBiJCIQiJCJjBAAQjAAAiJiJg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ombrarobot, new cjs.Rectangle(-46.6,-46.6,93.30000000000001,93.30000000000001), null);


(lib.occhio_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.occhio();
	this.instance.setTransform(-7.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.occhio_1, new cjs.Rectangle(-7.5,-6.5,15,13), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("EguPAAcIAAg3MBcfAAAIAAA3g");
	this.shape.setTransform(0.025,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("EguPAAdIAAg5MBcfAAAIAAA5g");
	this.shape_1.setTransform(0.025,-78.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AgOH4QjHgahVh5Qh3isAHjmQAHjYBnhzQBShcBwgbQBZgXCVANQA0AFBIAIQA+AGA/ABIACCBQg4g7hZgSQhMgQhxANQidAThNB5QhMB6AQDTQAeFeEIAyQDcArCKisQAIAcgFAaQgCANgMAhQgZBKhqAPQhcANhRAAQg4AAgygGg");
	this.shape_2.setTransform(-255.3601,-2.5469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("ACkHsQgvgEg0gBIhjgBQhBgCg/ABIiBADQATlCgBjOQAAh9gQivIgRiWIDIgEIgTN9QAdAFAoAEIBHAGQBbANAngCQA7gCAkgdQARgNAPgSQATgZAQgPIgTBSQgMAogVAeQgKAPgaADIgUACQgOAAgVgDg");
	this.shape_3.setTransform(-172.6,-2.7357);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhOHrQADhnADiIQAEkQgGimQgEiQgWihIAkADQApACAYAAQAoAAA8gFQgUC5gCB2QgECoAGEQQADCJAEBmg");
	this.shape_4.setTransform(-125.8,-2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AlqAiQAAnVgyg5IC8AAIC1D0QDPEUCJCtQAUjPALi6IAKiZQADg+glgxIglgkICLACIADPSIheACQhah/h1ifQjqk9iIiaQgIBKgJBzQgRDngCDRQgFAuAjAuQASAXATANIiQACQAKjfgBjrg");
	this.shape_5.setTransform(-60.45,-2.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AhOHrQAEhnACiIQAEkQgGimQgEiQgWihIAkADQApACAYAAQAoAAA8gFQgUC5gEB2QgECoAGEQQADCJAEBmg");
	this.shape_6.setTransform(7.825,-2.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AFxJZQg8gJhKgnQgogWgqgeQgqgfgRgJQhFgmi5gZQhlgPhPhLQhMhIguh0QgkhggBiAQAAikBCh9QBAh3B3gxQBaglCagEQC6gEBsA0QBsA0A5B4QA9CBgTCzQgMB4gnBiQgtB1hhA9QhSA0iNAVQAUAFAeADQAoADARADQBGALAmAhIAeAeQATAUATAMQAnAbAYADQAOACAgACIAAAzQgiADgbAAQgXAAgSgCgAgPocQhhAGhPA5QhSA7gdBcQgiBygCBiQgCBrAkB/QAcBkBXBAQBTA8BoAHQBpAGBUg3QBcg9Akh5QBBjghOjYQgqh0hcg6QhJguhaAAIgUAAg");
	this.shape_7.setTransform(78.9151,6.515);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AipHoQicgygdiMQgLgzAChQQAFhdAAguQAFiggChFQgChxgXhxQgJgogLgoIDKAAQgMCfAACkIADFVQAABhAWA4QAbBIBFAfQA4AZBZgFQBagEA8ggQBVgtAMjSQAEhGgCiJQgCivABg8QABhkgOgnQgGgQgng0ICXAAQgKCYAEC9QACBwAID3QADCHg7BEQgtA0hwAmQgwAShyADIgkABQhkAAg7gUg");
	this.shape_8.setTransform(177.6822,-2.3204);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("ACSHvQhOgGh5AAQiBgCh9ACQASlCAAjOQAAh+gSiuQgJhXgJg/IDzgBIF4gFIgEBvQgKgOgXgMQgvgag+AFQhVAGg6AFQhtAKgbAPQgFAdABCaIABCUIB7ACQBuADCtgMIAABWQimgJhqAFIhYAFIgwAEIgHF8QAhAHAlAEIBHAHQBnAMAwgBQBRgBAkgcQASgOANgRIAdghQgHAfgGAsQgHAjgUAbQgLALgxAIQgiAEgcAAIgSgBg");
	this.shape_9.setTransform(263.975,-3.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-296.5,-81.7,593.1,163.4), null);


(lib.fondotx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {chiudi:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape.setTransform(0.975,-1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.773)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_1.setTransform(0.975,-1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.659)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_2.setTransform(0.975,-1.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.553)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_3.setTransform(0.975,-1.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.459)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_4.setTransform(0.975,-1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.373)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_5.setTransform(0.975,-1.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.294)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_6.setTransform(0.975,-1.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.224)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_7.setTransform(0.975,-1.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.165)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_8.setTransform(0.975,-1.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.114)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_9.setTransform(0.975,-1.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.075)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_10.setTransform(0.975,-1.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.043)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_11.setTransform(0.975,-1.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.02)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_12.setTransform(0.975,-1.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.004)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_13.setTransform(0.975,-1.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0)").s().p("Ar9EtIAApZIX7AAIAAJZg");
	this.shape_14.setTransform(0.975,-1.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-31.2,153.2,60.3);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {apri:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
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
	this.frame_42 = function() {
		this.stop();
		this.parent.robot.corpo.gotoAndPlay("occhio");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(21).call(this.frame_42).wait(1));

	// Livello_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgYAAIAyAA");
	this.shape.setTransform(-39.7,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgdAAIA6AA");
	this.shape_1.setTransform(-39.3,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgoAAIBRAA");
	this.shape_2.setTransform(-38.1,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("Ag8AAIB5AA");
	this.shape_3.setTransform(-36.125,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AhYAAICxAA");
	this.shape_4.setTransform(-33.35,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("Ah8AAID5AA");
	this.shape_5.setTransform(-29.775,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AioAAIFQAA");
	this.shape_6.setTransform(-25.4,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AjbAAIG3AA");
	this.shape_7.setTransform(-20.25,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AkXAAIIvAA");
	this.shape_8.setTransform(-14.3,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AlaAAIK1AA");
	this.shape_9.setTransform(-7.55,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AmmAAINNAA");
	this.shape_10.setTransform(0,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AlQAAIKhAA");
	this.shape_11.setTransform(8.55,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AkFAAIILAA");
	this.shape_12.setTransform(16.1,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AjDAAIGHAA");
	this.shape_13.setTransform(22.625,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AiMAAIEZAA");
	this.shape_14.setTransform(28.15,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AhfAAIC/AA");
	this.shape_15.setTransform(32.675,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("Ag8AAIB4AA");
	this.shape_16.setTransform(36.2,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgiAAIBFAA");
	this.shape_17.setTransform(38.725,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgTAAIAnAA");
	this.shape_18.setTransform(40.225,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AgOAAIAdAA");
	this.shape_19.setTransform(40.725,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Iscriviti_ora
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAhQgHgGAAgLQAAgLAHgFQAGgDALgBIAQgDQAHgCAAgFQAAgGgEgCQgDgCgGAAQgLAAgBALIgUAAQABgNAKgGQAJgFANAAQAgAAAAAVIAAAkQAAAMACAEIgUAAIgBgHQgJAJgPAAQgKAAgHgFgAAGAEIgJABQgLACAAAJQAAAJAMAAQAPAAAAgRIAAgHQgCACgFABg");
	this.shape_20.setTransform(38.075,0.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAlIAAhHIATAAIAAANQADgGAFgFQAHgEAHAAIAEABIAAASIgHgBQgSAAAAAXIAAAgg");
	this.shape_21.setTransform(31.775,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAcQgKgLAAgRQAAgQAKgLQAKgKAQAAQARAAAKAKQAKALAAAQQAAARgKALQgKAKgRAAQgQAAgKgKgAgRAAQAAAKAEAGQAFAHAIAAQASAAAAgXQAAgWgSAAQgRAAAAAWg");
	this.shape_22.setTransform(24.425,0.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAhQgHgGAAgLQAAgLAHgFQAGgDALgBIAQgDQAHgCAAgFQAAgGgEgCQgDgCgGAAQgLAAgBALIgUAAQABgNAKgGQAJgFANAAQAgAAAAAVIAAAkQAAAMACAEIgUAAIgBgHQgJAJgPAAQgKAAgHgFgAAGAEIgJABQgLACAAAJQAAAJAMAAQAPAAAAgRIAAgHQgCACgFABg");
	this.shape_23.setTransform(12.275,0.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAsQgHgEAAgKIAAgqIgMAAIAAgNIAMAAIAAgWIASAAIAAAWIAPAAIAAANIgPAAIAAAjQAAAFACACQACABAFABIAGgBIAAAQIgMABQgKgBgEgDg");
	this.shape_24.setTransform(5.825,-0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAhQgKgHAAgNIASAAQABAGAEADQAEADAGAAQAFAAAEgCQAEgDAAgEQAAgEgGgDIgQgFQgLgCgEgCQgIgFAAgJQAAgXAfAAQAdAAACAXIgTAAQAAgKgMAAQgLAAAAAHQAAAFAHACIAPAEQALACAFAEQAGAEAAAJQAAANgKAHQgIAFgOAAQgNAAgKgFg");
	this.shape_25.setTransform(-0.35,0.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAyIAAhIIATAAIAABIgAgJggIAAgRIATAAIAAARg");
	this.shape_26.setTransform(-5.9,-1.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAdQgGgHAAgPIAAgrIAUAAIAAAoQAAASANAAQAHAAADgFQAEgFAAgLIAAglIAUAAIAABHIgTAAIAAgKIgBAAQgHAMgOAAQgPAAgFgIg");
	this.shape_27.setTransform(-11.85,0.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARAyIAAgiQgHAKgPABQgMAAgIgJQgLgKAAgSQAAgQAIgLQAJgMAQAAQAOAAAHAMIAAgKIATAAIAABhgAgMgaQgEAFAAALQAAAJAEAFQAEAIAIgBQAJABAFgIQAEgFAAgJQAAgKgEgGQgFgIgIAAQgIAAgFAIg");
	this.shape_28.setTransform(-20.425,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAcQgLgLAAgQQAAgQAKgLQAKgLAQAAQAOAAAJAHQAKAHABANIgTAAQgCgMgNAAQgIAAgEAIQgEAGAAAIQAAAKAEAGQAEAHAHAAQAOAAACgOIATAAQgBAOgKAIQgJAHgOAAQgQAAgJgKg");
	this.shape_29.setTransform(-28.45,0.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAaAyIgIgWIgkAAIgIAWIgWAAIAmhjIAVAAIAmBjgAANAMIgNgkIgMAkIAZAAg");
	this.shape_30.setTransform(-37.3,-1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(43));

	// Livello_3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AmOBkIAAjHIMdAAIAADHg");
	this.shape_31.setTransform(0.0467,0.0042,1.34,1.34);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-13.4,106.9,26.8);


(lib.braccio_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.braccio();
	this.instance.setTransform(-34,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.braccio_1, new cjs.Rectangle(-34,-17,47,88), null);


(lib.avanbraccio_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.avanbraccio();
	this.instance.setTransform(-29,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.avanbraccio_1, new cjs.Rectangle(-29,-6,55,87), null);


(lib.tx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAHQAIAIAAALQAAAMgIAIQgHAHgMAAQgLAAgIgHgAgMAAQAAAHADAEQADAFAGAAQAMAAAAgQQAAgQgMAAQgMAAAAAQg");
	this.shape.setTransform(61.775,23.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgXIAAgMIANAAIAAAMg");
	this.shape_1.setTransform(57.45,22.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAgQgHgEgBgIIAOAAQACAHAHAAQAHAAACgEQADgDAAgGIAAgHQgEAIgLAAQgKAAgHgHQgEgHAAgLQgBgKAGgIQAGgHAKAAQAKAAAFAIIAAgHIANAAIAAAvQABAXgaAAQgJAAgGgEgAgIgUQgDAEAAAGQABAGACAEQADAFAFAAQAGAAADgFQADgDAAgGQAAgQgMAAQgFAAgDAFg");
	this.shape_2.setTransform(53,24.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAgQgIgEAAgIIAOAAQACAHAIAAQAFAAAEgEQACgDAAgGIAAgHQgEAIgLAAQgLAAgGgHQgEgHAAgLQgBgKAGgIQAGgHAKAAQAKAAAFAIIAAgHIANAAIAAAvQAAAXgZAAQgJAAgGgEgAgHgUQgEAEAAAGQAAAGADAEQADAFAFAAQAGAAADgFQADgDAAgGQAAgQgMAAQgEAAgDAFg");
	this.shape_3.setTransform(46.9,24.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAXQgFgEAAgHQAAgIAFgEQAEgCAJgBIAKgCQAFgBAAgEQAAgEgCgCIgHgBQgIAAAAAIIgOAAQAAgJAIgFQAGgDAJAAQAXAAAAAOIAAAaQAAAJABADIgOAAIgBgFQgGAGgKAAQgIAAgFgEgAAEACIgFABQgJACAAAGQAAAHAJAAQAKAAAAgMIAAgGQgBACgEAAg");
	this.shape_4.setTransform(41.075,23.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAaIAAgcIgBgJQgCgDgGAAQgJAAAAAMIAAAcIgNAAIAAgcIgBgIQgCgFgGABQgDAAgDACQgEADABAGIAAAdIgPAAIAAgyIAOAAIAAAHIAAAAQAGgJAJAAQALAAAEAJQAFgJALAAQASABABASIAAAhg");
	this.shape_5.setTransform(33.75,23.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAHQAIAIAAALQAAAMgIAIQgHAHgMAAQgLAAgIgHgAgMAAQAAAHADAEQADAFAGAAQAMAAAAgQQAAgQgMAAQgMAAAAAQg");
	this.shape_6.setTransform(26.175,23.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAaIAAgcQAAgMgJAAQgFgBgDAEQgCAEAAAHIAAAaIgOAAIAAgyIANAAIAAAHQAGgJAJAAQALAAAEAGQAEAFAAALIAAAeg");
	this.shape_7.setTransform(17.425,23.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAkIAAgzIANAAIAAAzgAgGgXIAAgMIANAAIAAAMg");
	this.shape_8.setTransform(13.2,22.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAaIAAgyIAOAAIAAAKQACgGADgCQAGgDAEgBIAEABIAAANIgGAAQgMAAAAAPIAAAXg");
	this.shape_9.setTransform(7.5,23.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAJQAGAJAAALIglAAQABANALAAQAEAAADgCQAEgCAAgCIANAAQgGARgSAAQgMAAgHgHgAALgFQgCgLgJAAQgFAAgDAEQgCADgBAEIAWAAIAAAAg");
	this.shape_10.setTransform(2.4769,23.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_11.setTransform(-1.65,22.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_12.setTransform(-4.2,22.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAJQAGAJAAALIglAAQABANALAAQAEAAADgCQAEgCAAgCIANAAQgGARgSAAQgMAAgHgHgAALgFQgCgLgJAAQgFAAgDAEQgCADgBAEIAWAAIAAAAg");
	this.shape_13.setTransform(-8.3231,23.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAfQgJgHAAgMIAPAAQAAAHAFADQAEADAGAAQAGAAADgBQAFgDAAgFQAAgFgHgCIgNgEQgKgDgFgDQgGgFAAgJQAAgKAIgGQAIgFAKAAQAMAAAHAFQAJAGAAAMIgPAAQgBgLgMAAQgFAAgDACQgDACAAAEQAAAEAEACIAQAFQAIACAFADQAIAEAAALQAAAKgHAGQgIAGgOAAQgMAAgJgGg");
	this.shape_14.setTransform(-14.4012,22.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAgQgFgDAAgHIAAgeIgJAAIAAgJIAJAAIAAgQIANAAIAAAQIALAAIAAAJIgLAAIAAAZQAAABAAAAQAAABABABQAAAAAAABQAAAAAAAAQACACADAAIAFgBIAAALIgJABQgHAAgDgCg");
	this.shape_15.setTransform(-22.175,23.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPAXQgHgFgBgJIANAAQAAAEAEADQACACAFAAQADAAACgCQADgCABgDQgBgDgEgCIgKgDQgIgCgEgBQgFgEAAgGQAAgQAWAAQAVAAABAQIgNAAQAAgHgJAAQgIAAABAFQAAADAEACIAKADQAIABAEADQAFADAAAGQAAAKgIAEQgFAEgLAAQgJAAgGgEg");
	this.shape_16.setTransform(-26.55,23.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAJQAGAJAAALIglAAQABANALAAQAEAAADgCQAEgCAAgCIANAAQgGARgSAAQgMAAgHgHgAALgFQgCgLgJAAQgFAAgDAEQgCADgBAEIAWAAIAAAAg");
	this.shape_17.setTransform(-32.0731,23.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAkIAAhHIAhAAQAXAAAAASQAAAKgKAFQANADAAAOQAAAKgIAGQgHAFgKAAgAgNAYIAQAAQALAAAAgKQAAgKgLAAIgQAAgAgNgGIAPAAQAJAAAAgIQAAgIgKAAIgOAAg");
	this.shape_18.setTransform(-38.275,22.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAaIAAgcQAAgMgJAAQgFgBgDAEQgCAEAAAHIAAAaIgOAAIAAgyIANAAIAAAHQAGgJAJAAQALAAAEAGQAEAFAAALIAAAeg");
	this.shape_19.setTransform(-47.625,23.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAUQgDgEAAgLIAAgfIAOAAIAAAcQAAANAJAAQAFAAACgEQADgCAAgJIAAgaIAOAAIAAAzIgNAAIAAgHIgBAAQgFAIgJAAQgLABgFgHg");
	this.shape_20.setTransform(-53.525,23.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAUQgHgIAAgMQAAgLAHgIQAIgHALAAQAMAAAHAJQAGAJAAALIglAAQABANALAAQAEAAADgCQAEgCAAgCIANAAQgGARgSAAQgMAAgHgHgAALgFQgCgLgJAAQgFAAgDAEQgCADgBAEIAWAAIAAAAg");
	this.shape_21.setTransform(-62.0731,23.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoAqQgPgQAAgaQAAgZAPgQQAPgPAZAAQAZAAAQAPQAPAQAAAZQAAAagPAQQgQAPgZAAQgZAAgPgPgAgZAAQAAAPAFAJQAHALANAAQAaAAAAgjQAAgigaAAQgZAAAAAig");
	this.shape_22.setTransform(21.375,6.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGBCQgKgGAAgPIAAg+IgSAAIAAgUIASAAIAAghIAdAAIAAAhIAWAAIAAAUIgWAAIAAA0QAAAHADADQACACAIAAIAJAAIAAAXIgRABQgQAAgIgFg");
	this.shape_23.setTransform(11.2,4.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVA4IAAg9QAAgagTAAQgLAAgGAHQgFAHAAARIAAA4IgeAAIAAhsIAcAAIAAAPIABAAQALgSAVAAQAXAAAJAMQAIALAAAWIAABCg");
	this.shape_24.setTransform(1.375,5.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgoAqQgPgQAAgaQAAgZAPgQQAPgPAZAAQAZAAAQAPQAPAQAAAZQAAAagPAQQgQAPgZAAQgZAAgPgPgAgZAAQAAAPAFAJQAHALANAAQAaAAAAgjQAAgigaAAQgZAAAAAig");
	this.shape_25.setTransform(-11.225,6.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglAqQgQgQABgYQAAgZAOgQQAPgRAZAAQAUAAAPAKQAOALACAUIgeAAQgCgTgUAAQgLAAgHAMQgFAJgBAOQAAANAGAJQAGAMAMAAQAVAAADgWIAdAAQgDAVgOAMQgOALgWAAQgXAAgPgPg");
	this.shape_26.setTransform(-23.55,6.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghAxQgPgKgBgUIAcAAQAAAJAHAFQAGAEAJAAQAIAAAFgDQAHgDAAgIQAAgGgJgEQgHgCgRgEQgQgEgIgEQgLgHAAgNQAAgjAvAAQAsAAAEAiIgdAAQgBgOgSAAQgRAAAAAKQAAAHALADIAWAGQAQAEAIAFQAKAHAAANQAAAUgPAKQgNAIgVAAQgUAAgOgIg");
	this.shape_27.setTransform(-35.325,6.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOBLIAAhrIAdAAIAABrgAgOgxIAAgZIAdAAIAAAZg");
	this.shape_28.setTransform(-49.45,4.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgqA7QgMgRAAgYQAAgWAMgQQANgRAXAAQAVAAAKAQIABAAIAAg2IAdAAIAACUIgcAAIAAgNIAAAAQgKARgXAAQgXAAgNgSgAgSgEQgHAIABAPQAAAPAGAJQAHALAMAAQAaAAAAgjQAAgPgGgIQgHgLgNAAQgNAAgGALg");
	this.shape_29.setTransform(-58.75,4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgzBOIBWibIASAAIhWCbgAATAjQAAgSAJgLQAJgLASAAQAiAAAAApQAAASgJALQgJAMgSAAQgiAAAAgqgAApAjQAAAaANAAQAOAAAAgaQAAgZgNAAQgOAAAAAZgAhYgiQAAgSAIgLQAKgMARAAQAjAAAAAqQAAASgJAKQgJALgSAAQgiAAAAgogAhDgiQAAALACAFQADAJAIAAQAPAAAAgZQAAgagOAAQgOAAAAAag");
	this.shape_30.setTransform(41,-17.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AglA8QgQgTAAgpQAAgoAQgTQANgQAYAAQAYAAAOAQQAQATAAAoQAABNg2AAQgYgBgNgQgAgYAAQAAAVAEALQAFAUAPAAQAPAAAGgUQADgLAAgVQAAgzgYAAQgYAAAAAzg");
	this.shape_31.setTransform(24.7,-17.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAABLQgWAAgPgMQgQgNgBgWIAeAAQABAKAHAGQAHAGAJAAQAKAAAIgIQAGgJAAgLQAAgMgGgIQgHgHgLAAQgNAAgJALIgbAAIAPhQIBRAAIAAAYIg8AAIgGAiIAAAAQAMgLAQAAQAVAAAMAOQANANAAAWQAAAWgQAQQgQAPgWAAIgBAAg");
	this.shape_32.setTransform(13.05,-17.7992);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_33.setTransform(-1.3,-18.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpAxQgLgIAAgQQAAgRAMgIQAIgFARgCIAXgEQALgDAAgIQAAgIgGgEQgEgCgJAAQgRAAgCAQIgeAAQACgTAPgKQANgHAUAAQAwAAAAAfIAAA3QAAASAEAGIgeAAIgDgKQgMANgXAAQgQAAgKgIgAAIAFIgNACQgRAEAAAMQAAAOASAAQAXAAAAgZIAAgLQgDADgIABg");
	this.shape_34.setTransform(-10.075,-16.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgoAqQgPgQAAgaQAAgZAPgQQAPgPAZAAQAZAAAQAPQAPAQAAAZQAAAagPAQQgQAPgZAAQgZAAgPgPgAgZAAQAAAPAFAJQAHALANAAQAaAAAAgjQAAgigaAAQgZAAAAAig");
	this.shape_35.setTransform(-28.225,-16.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAVA4IAAg9QAAgagTAAQgLAAgGAHQgFAHAAARIAAA4IgeAAIAAhsIAcAAIAAAPIABAAQALgSAVAAQAXAAAJAMQAIALAAAWIAABCg");
	this.shape_36.setTransform(-40.875,-16.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOBLIAAhrIAdAAIAABrgAgOgxIAAgZIAdAAIAAAZg");
	this.shape_37.setTransform(-49.8,-18.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag0BLIAAiVIBpAAIAAAcIhIAAIAAAiIA+AAIAAAZIg+AAIAAA+g");
	this.shape_38.setTransform(-58.225,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_2
	this.fondo = new lib.fondotx();
	this.fondo.name = "fondo";
	this.fondo.setTransform(5.55,1.2,1,1.1122);

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx, new cjs.Rectangle(-70.1,-33.5,153.3,67), null);


(lib.timecode = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
		
		var tl = this
		var book_release_date = new Date(2050,10,30,23,59,59); // mese 0 = gennaio; 1 = febbraio; le ultime tre cifre = Ore:0 = Mezzanotte,18 = 6PM etc., Minuti, secondi
		createjs.Ticker.addEventListener('tick',tickF)
		 
		 
		function tickF(e){
		formatF(book_release_date.getTime()-new Date().getTime());
		}
		 
		function formatF(ms){
		if(ms<=0){
		tl.gotoAndPlay("fine");
		createjs.Ticker.removeEventListener('tick',tickF)
		}
		var days = Math.floor(ms/(1000*60*60*24));
		ms -= days*1000*60*60*24;
		var hours = Math.floor(ms/(1000*60*60));
		ms -= hours*1000*60*60
		var min = Math.floor(ms/(1000*60));
		ms -= min*1000*60;
		var sec = Math.floor(ms/1000);
		//return 'days: '+padF(days)+', hours: '+padF(hours)+', min: '+padF(min)+', sec: '+padF(sec);
		        tl.daytxt.text = padF(days);
		        tl.hrtxt.text = padF(hours);
		        tl.mintxt.text = padF(min);
		        tl.sectxt.text = padF(sec);
		}
		function padF(n){
		var s=n.toString();
		while(s.length<2){
		s='0'+s;
		}
		return s;
		}
		tl.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Livello_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("Aq+BeIV9AAAq+hdIV9AA");
	this.shape.setTransform(0.65,-5.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Livello_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLA2IAAhqIAXAAIAABqg");
	this.shape_1.setTransform(60.275,-24.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQARAAANAJQANALACASIgWAAQgCgJgGgFQgGgFgJABQgOgBgHAMQgHAKAAAPQAAAOAHAKQAHALAOAAQAXAAADgXIgYAAIAAgRIAtAAIAAA6IgPAAIgDgNQgLAPgSAAQgXAAgPgQg");
	this.shape_2.setTransform(52.225,-24.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQARAAANAJQANALACASIgWAAQgCgJgGgFQgGgFgJABQgOgBgHAMQgHAKAAAPQAAAOAHAKQAHALAOAAQAXAAADgXIgYAAIAAgRIAtAAIAAA6IgPAAIgDgNQgLAPgSAAQgXAAgPgQg");
	this.shape_3.setTransform(40.875,-24.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQAYAAAPAQQAOAQAAAYQAAAXgOAQQgPAQgYAAQgXAAgPgQgAgVgYQgHAKAAAPQAAAOAHAKQAHALAOAAQAPAAAIgLQAGgKAAgOQAAgPgGgKQgIgMgPABQgOgBgHAMg");
	this.shape_4.setTransform(29.525,-24.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWA2IgCgNIgBgNQgCgJgEgEQgDgDgJAAIgXAAIAAAqIgXAAIAAhqIA5AAQAOgBAIAJQAJAJAAAMQAAAUgRAGQAOAEABAVIABANQABAIADAFgAgWgEIAZAAQARAAAAgQQAAgOgRAAIgZAAg");
	this.shape_5.setTransform(14.4,-24.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA2IAAhqIBPAAIAAATIg3AAIAAAXIAzAAIAAARIgzAAIAAAaIA4AAIAAAVg");
	this.shape_6.setTransform(4.15,-24.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA2IAAhqIAvAAQAUAAAJAKQAJAKgBAOQABAOgJAIQgJALgUAAIgXAAIAAAngAgSgCIASAAQAJAAAEgDQAHgEAAgJQAAgKgHgEQgEgCgJAAIgSAAg");
	this.shape_7.setTransform(-5.65,-24.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQAYAAAPAQQAOAQAAAYQAAAXgOAQQgPAQgYAAQgXAAgPgQgAgVgYQgHAKAAAPQAAAOAHAKQAHALAOAAQAPAAAIgLQAGgKAAgOQAAgPgGgKQgIgMgPABQgOgBgHAMg");
	this.shape_8.setTransform(-20.925,-24.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglA2IAAhqIAYAAIAABVIAzAAIAAAVg");
	this.shape_9.setTransform(-30.775,-24.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQAYAAAPAQQAOAQAAAYQAAAXgOAQQgPAQgYAAQgXAAgPgQgAgVgYQgHAKAAAPQAAAOAHAKQAHALAOAAQAPAAAIgLQAGgKAAgOQAAgPgGgKQgIgMgPABQgOgBgHAMg");
	this.shape_10.setTransform(-41.425,-24.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAvQgOgKAAgTIAXAAQAAAKAHAFQAGAFAJAAQAIAAAGgDQAHgDAAgIQAAgHgKgEIgVgHQgPgDgHgFQgKgHAAgOQAAgPANgJQAMgIAPAAQASAAALAIQANAJAAARIgWAAQgBgQgUAAQgGAAgEADQgGADAAAHQAAAFAGADQAEACAVAGQANADAGADQANAIAAAPQAAAQgLAJQgMAKgWAAQgSAAgMgJg");
	this.shape_11.setTransform(-52.075,-24.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBFIAAhqIBQAAIAAATIg4AAIAAAXIAzAAIAAASIgzAAIAAAaIA4AAIAAAUgAgFgvIgXgVIAYAAIANAVg");
	this.shape_12.setTransform(-65.7,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLA2IAAgqIgnhAIAaAAIAYApIAZgpIAaAAIgnBAIAAAqg");
	this.shape_13.setTransform(65.6,-41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcA2IgIgYIgnAAIgJAYIgYAAIAphqIAXAAIApBqgAAOAMIgOgmIgNAmIAbAAg");
	this.shape_14.setTransform(55.5,-41.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguA2IAAhqIAuAAQAVAAANAMQANAPAAAZQAAAXgMAPQgNAPgWABgAgXAhIAVAAQALAAAHgGQAIgJAAgQQAAgQgHgJQgHgKgQAAIgRAAg");
	this.shape_15.setTransform(45.025,-41.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWA2IgshHIAABHIgWAAIAAhqIAXAAIAsBHIAAhHIAWAAIAABqg");
	this.shape_16.setTransform(33.725,-41.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAoQgOgQAAgXQAAgYAOgQQAPgQAXAAQAYAAAPAQQAOAQAAAYQAAAXgOAQQgPAQgYAAQgXAAgPgQgAgVgYQgHAKAAAPQAAAOAHAKQAHALAOAAQAPAAAIgLQAGgKAAgOQAAgPgGgKQgIgMgPABQgOgBgHAMg");
	this.shape_17.setTransform(22.325,-41.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjA2IAAhMIgaBMIgRAAIgbhLIAABLIgVAAIAAhqIAhAAIAXBIIABAAIAXhIIAiAAIAABqg");
	this.shape_18.setTransform(9.7,-41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXA2IgDgNIgBgNQgCgJgDgEQgEgDgJAAIgWAAIAAAqIgYAAIAAhqIA5AAQAOgBAIAJQAJAJAAAMQAAAUgRAGQAOAEABAVIABANQACAIACAFgAgVgEIAYAAQAQAAABgQQgBgOgQAAIgYAAg");
	this.shape_19.setTransform(-6.4,-41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoA2IAAhqIBQAAIAAATIg4AAIAAAXIAzAAIAAARIgzAAIAAAaIA4AAIAAAVg");
	this.shape_20.setTransform(-16.65,-41.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgsA2IAAhqIAxAAQAjAAAAAaQAAAPgPAHQAUAFAAAVQAAAQgMAIQgKAIgQAAgAgUAjIAYAAQARAAAAgOQAAgPgRAAIgYAAgAgUgJIAWAAQAPAAAAgNQAAgMgQAAIgVAAg");
	this.shape_21.setTransform(-26.775,-41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLA2IAAgqIgohAIAbAAIAYApIAZgpIAbAAIgpBAIAAAqg");
	this.shape_22.setTransform(-37.3,-41.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjAoQgOgQAAgXQAAgYAOgQQAOgQAYAAQASAAANAKQANAKACATIgXAAQgBgJgGgFQgIgGgIABQgOgBgHAMQgIAKABAPQgBAOAIAKQAHALAOAAQAKAAAGgGQAGgHACgLIAXAAQgCAUgMAMQgOAMgTAAQgYAAgOgQg");
	this.shape_23.setTransform(-47.85,-41.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglA2IAAhqIAYAAIAABVIAzAAIAAAVg");
	this.shape_24.setTransform(-61.575,-41.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLA2IAAhqIAXAAIAABqg");
	this.shape_25.setTransform(-68.575,-41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// timecode
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAbQgIgKAAgRQAAgPAJgKQAJgLAPAAQALAAAIAGQAJAGABALIgJAAQgCgIgFgEQgGgDgHAAQgLAAgHAJQgFAHAAAMQAAANAFAIQAHAIALAAQAJAAAFgFQAGgGAAgJIAKAAQgBANgIAIQgJAHgNAAQgPAAgJgKg");
	this.shape_26.setTransform(36.875,-4.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAkIAAhHIAwAAIAAAIIgmAAIAAAXIAkAAIAAAHIgkAAIAAAZIAnAAIAAAIg");
	this.shape_27.setTransform(30.425,-4.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAfQgJgGAAgNIAJAAQAAAJAHAEQAFAEAIAAQASAAAAgNQAAgGgHgDIgOgFQgLgCgFgCQgHgFAAgIQAAgLAIgFQAHgFAKAAQALAAAHAFQAHAGABALIgJAAQgCgOgPAAQgHAAgEACQgFADAAAHQAAAGAHADIAPAEQALACAFADQAHAFAAAJQAAALgJAFQgIAFgLAAQgMAAgIgGg");
	this.shape_28.setTransform(23.925,-4.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAkIgkg5IgBAAIAAA5IgJAAIAAhHIALAAIAlA5IAAg5IAJAAIAABHg");
	this.shape_29.setTransform(-9.1,-4.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_30.setTransform(-13.975,-4.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbAkIAAg7IgXA7IgHAAIgWg7IAAA7IgJAAIAAhHIAMAAIAWA7IAWg7IAOAAIAABHg");
	this.shape_31.setTransform(-19.6,-4.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAkIAAhHIAwAAIAAAIIgmAAIAAAXIAkAAIAAAHIgkAAIAAAZIAnAAIAAAIg");
	this.shape_32.setTransform(-52.475,-4.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAkQgBgCgBgGIAAgKQgBgGgCgDQgDgEgGAAIgWAAIAAAfIgKAAIAAhHIAhAAQAKAAAGAFQAFAFAAAJQAAAPgMACQAGABACAFQACADABAGIAAALQABAGADADgAgSgCIASAAQARAAAAgMQAAgNgNAAIgWAAg");
	this.shape_33.setTransform(-58.925,-4.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAaQgJgKAAgQQAAgPAJgKQAJgLAPAAQAQAAAKALQAIAKAAAPQAAAQgIAKQgKALgQAAQgPAAgJgLgAgSgTQgFAIgBALQABAMAFAIQAHAJALAAQAMAAAHgJQAGgIgBgMQABgLgGgIQgHgJgMAAQgLAAgHAJg");
	this.shape_34.setTransform(-66.4,-4.675);

	this.daytxt = new cjs.Text("00", "bold 14px 'Arial'", "#FFFFFF");
	this.daytxt.name = "daytxt";
	this.daytxt.textAlign = "center";
	this.daytxt.lineHeight = 18;
	this.daytxt.lineWidth = 16;
	this.daytxt.alpha = 0.00000000;
	this.daytxt.parent = this;
	this.daytxt.setTransform(-13.25,-14);

	this.sectxt = new cjs.Text("00", "bold 14px 'Arial'");
	this.sectxt.name = "sectxt";
	this.sectxt.textAlign = "center";
	this.sectxt.lineHeight = 18;
	this.sectxt.lineWidth = 16;
	this.sectxt.parent = this;
	this.sectxt.setTransform(53,-14);

	this.mintxt = new cjs.Text("00", "bold 14px 'Arial'");
	this.mintxt.name = "mintxt";
	this.mintxt.textAlign = "center";
	this.mintxt.lineHeight = 18;
	this.mintxt.lineWidth = 16;
	this.mintxt.parent = this;
	this.mintxt.setTransform(7,-14);

	this.hrtxt = new cjs.Text("00", "bold 14px 'Arial'");
	this.hrtxt.name = "hrtxt";
	this.hrtxt.lineHeight = 18;
	this.hrtxt.lineWidth = 16;
	this.hrtxt.parent = this;
	this.hrtxt.setTransform(-45,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hrtxt},{t:this.mintxt},{t:this.sectxt},{t:this.daytxt},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

	// Livello_3
	this.fondo = new lib.fondotx();
	this.fondo.name = "fondo";
	this.fondo.setTransform(-0.85,-19.3);
	this.fondo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-50.5,153.3,68.5);


(lib.logoanim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_12 = function() {
		this.stop();
		this.parent.gotoAndPlay("apri");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0.05,0.8,0.41,0.41,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-143},0).to({y:0.8},11,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.6,-176.5,243.3,224.8);


(lib.corpo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {norm:0,inverso:1,occhio:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(1));

	// Livello_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.427)").s().p("AgZBBQgLg9AIhEIAvAAQgFBFASA8g");
	this.shape.setTransform(-1.9198,-145.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(8));

	// Livello_4
	this.instance = new lib.occhio_1();
	this.instance.setTransform(13.2,-146.25,0.6343,1,0,0,0,6.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0,x:9.25},0).to({scaleX:1,x:0,y:-145.65},7).wait(1));

	// Livello_3
	this.instance_1 = new lib.inverso();
	this.instance_1.setTransform(58,-73,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

	// Livello_1
	this.instance_2 = new lib.corpo();
	this.instance_2.setTransform(-62.5,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Livello_5
	this.instance_3 = new lib.ombrarobot();
	this.instance_3.setTransform(29.05,155.1,1,0.2047);
	this.instance_3.alpha = 0.6094;

	this.instance_4 = new lib.ombrarobot();
	this.instance_4.setTransform(-27.45,156.9,1,0.2047);
	this.instance_4.alpha = 0.6094;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-159,149.89999999999998,325.5);


(lib._01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {riposo:0,porta:1,lascia:2,alto:12,basso:22,lasciabasso:32,lasciabassoariposo:42,chiama:51};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
		this.parent.gotoAndPlay("cta");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(1).call(this.frame_11).wait(9).call(this.frame_20).wait(1).call(this.frame_21).wait(9).call(this.frame_30).wait(1).call(this.frame_31).wait(9).call(this.frame_40).wait(1).call(this.frame_41).wait(9).call(this.frame_50).wait(20).call(this.frame_70).wait(1));

	// avanbracciosx
	this.instance = new lib.avanbraccio_1();
	this.instance.setTransform(-73.85,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.1,rotation:-104.9982,x:-42.85,y:9.55},0).to({regY:0,rotation:0,x:-73.85,y:11.1},9,cjs.Ease.quadIn).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-115.4526,x:-42.9,y:0.7},0).to({regX:0,regY:0,rotation:-105.0001,x:6.95,y:-40},9,cjs.Ease.quadOut).wait(1).to({rotation:-104.9992},0).to({scaleX:1,scaleY:1,rotation:0,x:-73.85,y:11.1},9,cjs.Ease.quadIn).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-75.0005,x:-10.55,y:-10.65},0).wait(10).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-73.85,y:11.1},9).to({scaleX:0.9999,scaleY:0.9999,rotation:-165.5562,x:-33.8,y:0.5},4,cjs.Ease.quadOut).to({rotation:-75.5583,x:-33.85,y:0.45},4,cjs.Ease.get(1)).to({rotation:-173.0394,x:-33.8},4,cjs.Ease.get(-1)).to({rotation:-165.5562,y:0.5},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:-73.85,y:11.1},4,cjs.Ease.quadOut).wait(1));

	// bracciosx
	this.instance_1 = new lib.braccio_1();
	this.instance_1.setTransform(-56.75,-57.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-26.2139,y:-57.7},0).to({rotation:0,y:-57.75},9,cjs.Ease.quadIn).wait(1).to({rotation:-26.2139,y:-57.7},0).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-86.2149,x:-56.8,y:-57.8},9,cjs.Ease.quadOut).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-56.75,y:-57.75},9,cjs.Ease.quadIn).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-56.2156,x:-56.85,y:-57.8},0).wait(10).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-56.75,y:-57.75},9).to({rotation:-29.9992},4).wait(12).to({rotation:0},4,cjs.Ease.quadOut).wait(1));

	// corpo
	this.corpo = new lib.corpo_1();
	this.corpo.name = "corpo";

	this.timeline.addTween(cjs.Tween.get(this.corpo).wait(71));

	// avanbracciosx
	this.instance_2 = new lib.avanbraccio_1();
	this.instance_2.setTransform(61.2,6.7,0.9986,0.9986,-18.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.1,regY:0.1,rotation:-110.5683,x:82.45,y:-3.1},0).to({regX:0,regY:0,rotation:-18.1382,x:61.2,y:6.7},9,cjs.Ease.quadIn).wait(1).to({regX:-0.1,regY:0.1,rotation:-110.5683,x:82.45,y:-3.1},0).to({regY:0.2,rotation:-102.8542,x:116.25,y:-43.1},9,cjs.Ease.quadOut).wait(1).to({regX:0,regY:0,rotation:-18.1382,x:61.2,y:6.7},9,cjs.Ease.quadIn).wait(1).to({regY:0.2,scaleX:0.9985,scaleY:0.9985,rotation:-72.8551,x:98.7,y:-15.4},0).wait(10).to({regY:0,scaleX:0.9986,scaleY:0.9986,rotation:-18.1382,x:61.2,y:6.7},9).wait(21));

	// bracciosx
	this.instance_3 = new lib.braccio_1();
	this.instance_3.setTransform(57.65,-60.1,0.9986,0.9986,-18.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.1,regY:-0.1,rotation:-40.0014,x:55.55,y:-62},0).to({regX:0,regY:0,rotation:-18.1382,x:57.65,y:-60.1},9,cjs.Ease.quadIn).wait(1).to({regX:0.1,regY:-0.1,rotation:-40.0014,x:55.55,y:-62},0).to({regY:0,rotation:-85.0022,x:55.6},9,cjs.Ease.quadOut).wait(1).to({regX:0,rotation:-18.1382,x:57.65,y:-60.1},9,cjs.Ease.quadIn).wait(1).to({regX:0.1,scaleX:0.9985,scaleY:0.9985,rotation:-55.0031,x:55.6,y:-62.05},0).wait(10).to({regX:0,scaleX:0.9986,scaleY:0.9986,rotation:-18.1382,x:57.65,y:-60.1},9).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.8,-159,304.2,325.5);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"apri":1,cta:85};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,17,30,31,51,69,74,84,95,96];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.robot.gotoAndPlay("porta");
	}
	this.frame_17 = function() {
		this.robot.gotoAndPlay("alto");
	}
	this.frame_30 = function() {
		this.robot.gotoAndPlay("basso");
		
		
		
		var tl=this;
		tl.stop();
		var delay = 800;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_31 = function() {
		this.robot.corpo.gotoAndPlay("inverso");
	}
	this.frame_51 = function() {
		this.robot.corpo.gotoAndPlay("norm");
		this.robot.gotoAndPlay("lasciabasso");
	}
	this.frame_69 = function() {
		this.robot.gotoAndPlay("lasciabassoariposo");
		
		
		var tl=this;
		tl.stop();
		var delay = 800;
		var startTime=createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick',f);
		function f(e){
		    if(createjs.Ticker.getTime()-startTime>delay){
		       tl.play();
		        createjs.Ticker.removeEventListener('tick',f);
		    }
		}
	}
	this.frame_74 = function() {
		this.timecode.fondo.gotoAndPlay("chiudi");
		this.tx.fondo.gotoAndPlay("chiudi");
	}
	this.frame_84 = function() {
		this.robot.gotoAndPlay("chiama");
		this.stop();
	}
	this.frame_95 = function() {
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
	this.frame_96 = function() {
		this.stop();
		this.cta.gotoAndPlay("apri");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(16).call(this.frame_17).wait(13).call(this.frame_30).wait(1).call(this.frame_31).wait(20).call(this.frame_51).wait(18).call(this.frame_69).wait(5).call(this.frame_74).wait(10).call(this.frame_84).wait(11).call(this.frame_95).wait(1).call(this.frame_96).wait(1));

	// cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(97));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(364.85,206,0.92,0.92);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(85).to({_off:false},0).to({x:180.3},10,cjs.Ease.backOut).wait(2));

	// conto
	this.timecode = new lib.timecode();
	this.timecode.name = "timecode";
	this.timecode.setTransform(-81.25,170,0.9999,0.9999,-0.0009);
	this.timecode._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timecode).wait(51).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:0,x:204.85,y:170.1},18,cjs.Ease.quadOut).wait(28));

	// tx
	this.instance = new lib.tx();
	this.instance.setTransform(-113.5,101.5,1,1,-13.4472,0,0,-0.1,0.1);
	this.instance._off = true;

	this.tx = new lib.tx();
	this.tx.name = "tx";
	this.tx.setTransform(167.5,103.5,1,1,-12.9811,0,0,0,0.1);
	this.tx._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,regX:0,rotation:-12.9811,x:167.5,y:103.5},16,cjs.Ease.quadOut).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.tx).wait(1).to({_off:false},16,cjs.Ease.quadOut).to({regY:0,rotation:0,x:198.05,y:74.3},9,cjs.Ease.quadOut).wait(71));

	// _1
	this.robot = new lib._01();
	this.robot.name = "robot";
	this.robot.setTransform(-158.85,141.05,0.66,0.66,0,0,0,0.1,0);
	this.robot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.robot).wait(1).to({_off:false},0).to({x:117.15},16,cjs.Ease.quadOut).wait(14).to({skewY:180,x:129.95},0).to({x:-98.15},19,cjs.Ease.backIn).wait(1).to({skewY:0,x:-144.45},0).to({x:115.55},18,cjs.Ease.quadOut).to({x:61.85},15,cjs.Ease.backInOut).wait(13));

	// logo
	this.instance_1 = new lib.logoanim();
	this.instance_1.setTransform(150.1,20.45,0.39,0.39,0,0,0,0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97));

	// fondo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(97));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,124,490.8,127);
// library properties:
lib.properties = {
	id: '245FB841D5DF4D6E8BFB71F64F109CF8',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"300x250_atlas_1.png?1632215498522", id:"300x250_atlas_1"}
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
an.compositions['245FB841D5DF4D6E8BFB71F64F109CF8'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;