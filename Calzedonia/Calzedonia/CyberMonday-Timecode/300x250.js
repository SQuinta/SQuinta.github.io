(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.foto = function() {
	this.initialize(img.foto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);// helper functions:

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


(lib.timecode = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{fine:1});

	// timeline functions:
	this.frame_0 = function() {
		var tl = this
		var book_release_date = new Date(2050,12,26,23,59,0); // mese 0 = gennaio; 1 = febbraio; le ultime tre cifre = Ore:0 = Mezzanotte,18 = 6PM etc., Minuti, secondi
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
	this.frame_1 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Livello 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAF0").s().p("AgCAcQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAg1QAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAFAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAA1QAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAg");
	this.shape.setTransform(12.6,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAF0").s().p("AgCAcQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAguIgNAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgFQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAhAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAAFQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgNAAIAAAuQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.475,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAF0").s().p("AgPAWQgGgGAAgKIAAggQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAAgQAAAGADAEQAEAEAFABQAGgBAEgEQADgDAAgHIAAggQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAAgQAAAKgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(4.625,14.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAF0").s().p("AATAdIghgoIAAAmQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgFAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAg1QAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIAiAnIAAglQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAA1QAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_3.setTransform(-1.325,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAF0").s().p("AgCAcQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAg1QAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAFAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAA1QAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAg");
	this.shape_4.setTransform(-5.6,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAF0").s().p("AAAAdIgBgBIgPgkIgGAjQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgFAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAKg0QAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIABAAIABABIAQAoIAAAAIARgoIABgBIACAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAKA0QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgGgjIgBAAIgOAkIgBABg");
	this.shape_5.setTransform(-10.275,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAF0").s().p("AgPAcQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIAAg1QAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAfAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAFQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAIgZAAIAAAQIAVAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAADQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgVAAIAAARIAZAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAFQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(-31.35,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAF0").s().p("AAMAcIgCgBIgKgVIgLAAIAAAVQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgFAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAg1QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAVAAQAHAAAFAFQAFAFAAAHQAAAGgDAEQgDADgGADIALAUIAAABIgBABgAgLAAIANAAQAEAAADgCQADgEAAgDQAAgFgDgCQgDgDgEAAIgNAAg");
	this.shape_7.setTransform(-36.375,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAF0").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgIgJgAgNgOQgHAHAAAHQAAAIAHAHQAGAGAHAAQAJAAAGgGQAGgHAAgIQAAgHgGgHQgGgGgJAAQgHAAgGAGg");
	this.shape_8.setTransform(-42.425,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAF0").s().p("AgCAcQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAg0QAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAFAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAA0QAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAg");
	this.shape_9.setTransform(54.2,14.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAF0").s().p("AgWAcQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAg0QAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIATAAQAKAAAJAIQAIAIAAALQAAALgIAJQgJAIgKAAgAgPAVIALAAQAIgBAFgGQAGgFAAgJQAAgIgGgFQgFgHgIAAIgLAAg");
	this.shape_10.setTransform(50.275,14.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAF0").s().p("AATAdIghgpIAAAmQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgFAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAg1QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIAiAoIAAgmQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAA1QAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_11.setTransform(44.025,14.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAF0").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgIgIgAgNgNQgHAFAAAIQAAAJAHAFQAGAHAHAAQAJAAAGgHQAGgFAAgJQAAgIgGgFQgGgHgJAAQgHAAgGAHg");
	this.shape_12.setTransform(37.675,14.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAF0").s().p("AgPAVQgIgJgBgMQABgLAIgJQAIgIALAAQALAAAJAHQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgEAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgHgGgIAAQgHAAgFAHQgHAFAAAIQAAAJAHAFQAFAGAHABQAHgBAIgFQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAEAEQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAQgIAIgMAAQgLAAgIgIg");
	this.shape_13.setTransform(31.7,14.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAF0").s().p("AgPAcQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAg0QAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAfAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAAFQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgYAAIAAARIAUAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAIgUAAIAAARIAYAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAIAAAEQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_14.setTransform(26.75,14.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00AAF0").s().p("AgQAXQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgEQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAHAFAFABQAEAAADgCQACgDAAgDQAAgEgDgCQgDgCgFgDQgHgDgDgDQgFgDAAgHQAAgFAEgFQAFgFAIAAQAIAAAHAFQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAIgCADQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBgBQgGgEgEAAQgEABgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAFAJAFQAIADAEADQAFAEAAAHQAAAGgFAEQgFAFgIAAQgJAAgHgGg");
	this.shape_15.setTransform(22.1167,14.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00AAF0").s().p("AAWAgQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgFgNIgdAAIgFANQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgGAAIgBAAIAAgCIAbg8IABgBIABAAIABABIAcA8IgBACIgBAAgAALAKIgLgXIAAAAIgKAXIAVAAg");
	this.shape_16.setTransform(40.8875,-19.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAF0").s().p("AAOAfIgCgBIgMgXIgMAAIAAAXQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgGAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAg7QAAAAAAgBQAAAAAAAAQABAAAAAAQABgBAAAAIAYAAQAHAAAGAGQAGAFAAAJQAAAGgDAFQgFAEgFACIAMAXIAAABIgBABgAgMAAIAPAAQAEAAAEgDQACgEABgEQgBgEgCgDQgEgEgEAAIgPAAg");
	this.shape_17.setTransform(35.1,-19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAF0").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAJgKANAAQANAAAKAKQAJAJAAANQAAANgJAKQgKAKgNgBQgNABgJgKgAgPgQQgIAIABAIQgBAJAIAIQAGAGAJAAQAKAAAGgGQAIgIgBgJQABgIgIgIQgGgHgKAAQgJAAgGAHg");
	this.shape_18.setTransform(28.35,-19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAF0").s().p("AgRAXQgKgKAAgNQAAgNAKgJQAJgKANAAQAMAAAKAJQAAAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAIgEAFQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgHgHgJAAQgJAAgGAHQgHAIAAAIQAAAJAHAIQAGAGAJAAQAIAAAIgFIACgBIAEAEQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAQgJAJgNAAQgNABgJgKg");
	this.shape_19.setTransform(21.6125,-19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAF0").s().p("AAWAgIgmgtIAAArQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgFAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAg8QAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAIACAAIAmAtIAAgqQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIAGAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAA8QAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_20.setTransform(14.975,-19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAF0").s().p("AAWAgQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgFgNIgdAAIgFANQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgGAAIgBAAIAAgCIAbg8IABgBIABAAIABABIAcA8IgBACIgBAAgAALAKIgLgXIAAAAIgKAXIAVAAg");
	this.shape_21.setTransform(8.5375,-19.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAF0").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAJgKANAAQANAAAKAKQAJAJAAANQAAANgJAKQgKAKgNgBQgNABgJgKgAgPgQQgIAIABAIQgBAJAIAIQAGAGAJAAQAKAAAGgGQAIgIgBgJQABgIgIgIQgGgHgKAAQgJAAgGAHg");
	this.shape_22.setTransform(0,-19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAF0").s().p("AgSAfQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAg7QAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAIATAAQAIABAGAFQAGAGAAAJQAAAIgGAEQgFAHgJAAIgMAAIAAAVQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAgLAAIAMAAQAEAAAEgDQADgDAAgEQAAgFgDgDQgEgEgEAAIgMAAg");
	this.shape_23.setTransform(-5.975,-19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAF0").s().p("AAAAgIgCgBIgPgoIgBAAIgGAnQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgGAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBIAKg7IACgCIABAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIASAtIABAAIASgtIABgBIACAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAMA7QAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgGAAIgBgBIgHgnIAAAAIgRAoIgBABg");
	this.shape_24.setTransform(-12.85,-19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAF0").s().p("AgRAfQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAg7QAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAjAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAAFQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgbAAIAAASIAXAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAAEQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgXAAIAAATIAbAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAFQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAg");
	this.shape_25.setTransform(-19.225,-19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAF0").s().p("AgCAfQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAg0IgPAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIAlAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIAAAFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgOAAIAAA0QAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_26.setTransform(-24.25,-19.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAF0").s().p("AgCAfQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAg7QAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAA7QAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAg");
	this.shape_27.setTransform(-29.725,-19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAF0").s().p("AAWAgQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgFgNIgdAAIgFANQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgGAAIgBAAIAAgCIAbg8IABgBIABAAIABABIAcA8IgBACIgBAAgAALAKIgLgXIAAAAIgKAXIAVAAg");
	this.shape_28.setTransform(-34.0125,-19.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAF0").s().p("AASAfQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgaIghAAIAAAaQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgGAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAg7QAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAGAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAZIAhAAIAAgZQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAGAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIAAA7QAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_29.setTransform(-40.45,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// timecode
	this.sectxt = new cjs.Text("00", "normal 500 15px 'Roboto'", "#00AAF0");
	this.sectxt.name = "sectxt";
	this.sectxt.textAlign = "center";
	this.sectxt.lineHeight = 22;
	this.sectxt.lineWidth = 43;
	this.sectxt.parent = this;
	this.sectxt.setTransform(37.65,-10.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.sectxt);
	}

	this.mintxt = new cjs.Text("00", "normal 500 15px 'Roboto'", "#00AAF0");
	this.mintxt.name = "mintxt";
	this.mintxt.textAlign = "center";
	this.mintxt.lineHeight = 22;
	this.mintxt.lineWidth = 44;
	this.mintxt.parent = this;
	this.mintxt.setTransform(0.5,-10.6);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.mintxt);
	}

	this.hrtxt = new cjs.Text("00", "normal 500 15px 'Roboto'", "#00AAF0");
	this.hrtxt.name = "hrtxt";
	this.hrtxt.textAlign = "center";
	this.hrtxt.lineHeight = 22;
	this.hrtxt.lineWidth = 44;
	this.hrtxt.parent = this;
	this.hrtxt.setTransform(-37.4,-10.6);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.hrtxt);
	}

	this.daytxt = new cjs.Text("00", "normal 500 8px 'Roboto'", "#00AAF0");
	this.daytxt.name = "daytxt";
	this.daytxt.textAlign = "center";
	this.daytxt.lineHeight = 13;
	this.daytxt.lineWidth = 15;
	this.daytxt.alpha = 0.00000000;
	this.daytxt.parent = this;
	this.daytxt.setTransform(0,24.85);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.daytxt);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.daytxt},{t:this.hrtxt},{t:this.mintxt},{t:this.sectxt}]}).to({state:[]},1).wait(1));

	// finale
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00AAF0").ss(1,0,0,3).p("ApIAAISRAA");
	this.shape_30.setTransform(0.5,-29);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjAkQgNgOAAgWQAAgVANgNQAOgOAUAAQAIAAAJAEQAIAEAFAIIAAgOIAVAAIAABdIgVAAIAAgOQgEAIgJAEQgJAEgIAAQgUAAgOgNgAgTgUQgIAIAAAMQAAAMAIAJQAJAIAKAAQAMAAAIgIQAJgIAAgNQAAgMgJgIQgJgIgLAAQgLAAgIAIg");
	this.shape_31.setTransform(46.85,11.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLBBIAAhMIgRAAIAAgRIARAAIAAgkIAUAAIAAAkIAUAAIAAARIgUAAIAABMg");
	this.shape_32.setTransform(37.7,9.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjAkQgNgOAAgWQAAgVANgNQAOgOAUAAQAIAAAJAEQAIAEAFAIIAAgOIAVAAIAABdIgVAAIAAgOQgEAIgJAEQgJAEgIAAQgUAAgOgNgAgTgUQgIAIAAAMQAAAMAIAJQAJAIAKAAQAMAAAIgIQAJgIAAgNQAAgMgJgIQgJgIgLAAQgLAAgIAIg");
	this.shape_33.setTransform(27.95,11.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWAwIAAgzQAAgLgFgGQgGgGgJAAQgJAAgGAFQgIAHAAANIAAAxIgUAAIAAhdIAUAAIAAAOQAEgHAJgFQAHgEAIAAQARAAAJALQAJALAAATIAAA2g");
	this.shape_34.setTransform(16.575,11.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJBIIAAhcIAUAAIAABcgAgJgxQgDgDAAgGQAAgFADgEQAEgEAFAAQAGAAAEAEQADAEABAFQgBAGgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_35.setTransform(8.45,8.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA1AwIAAgzQAAgLgGgGQgFgGgJAAQgKAAgGAGQgHAHAAAMIAAAxIgTAAIAAg0QAAgKgGgGQgFgGgIAAQgKAAgGAFQgIAHAAANIAAAxIgUAAIAAhdIAUAAIAAAOQAEgIAKgFQAIgDAIAAQAVAAAHATQAKgTAVAAQASAAAJALQAJALAAAUIAAA1g");
	this.shape_36.setTransform(-2.675,11.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAwIAAhdIAUAAIAAAWQAHgYASAAQALAAAFAEIgDATQgGgDgIAAQgYAAAAApIAAAig");
	this.shape_37.setTransform(-14.825,11.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggAjQgOgNAAgWQAAgVAOgOQANgNAUAAQAUAAANANQANAOAAAVIAAAHIhJAAQACALAHAGQAIAHALAAQASAAAHgOIARAIQgGAMgMAGQgLAGgOAAQgUAAgNgOgAAbgHQgBgKgIgHQgHgGgKAAQgKAAgIAGQgHAHgCAKIA1AAIAAAAg");
	this.shape_38.setTransform(-24.875,11.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKBBIAAhMIgRAAIAAgRIARAAIAAgkIATAAIAAAkIATAAIAAARIgTAAIAABMg");
	this.shape_39.setTransform(-33.8,9.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AggA5QgOgNAAgWQAAgWAOgNQANgNAUAAQAUAAANANQANANAAAWIAAAHIhJAAQACALAHAGQAIAHALAAQASAAAHgOIARAIQgGAMgMAGQgLAGgOAAQgUAAgNgOgAAbAOQgBgKgIgGQgHgGgKAAQgKAAgIAGQgHAGgCAKIA1AAIAAAAgAgFgmIgaggIAYAAIATAgg");
	this.shape_40.setTransform(-47.675,9.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AggAjQgOgNAAgWQAAgVAOgOQANgNAUAAQAUAAANANQANAOAAAVIAAAHIhJAAQACALAHAGQAIAHALAAQASAAAHgOIARAIQgGAMgMAGQgLAGgOAAQgUAAgNgOgAAbgHQgBgKgIgHQgHgGgKAAQgKAAgIAGQgHAHgCAKIA1AAIAAAAg");
	this.shape_41.setTransform(62.575,-10.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWAwIAAgzQAAgLgFgGQgGgGgJAAQgJAAgGAFQgIAHAAANIAAAxIgUAAIAAhdIAUAAIAAAOQAEgHAJgFQAHgEAIAAQARAAAJALQAJALAAATIAAA2g");
	this.shape_42.setTransform(51.425,-10.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghAjQgPgOAAgVQAAgVAPgOQANgNAUAAQAUAAAOANQAPAOAAAVQAAAVgPAOQgOAOgUAAQgUAAgNgOgAgTgUQgIAIAAAMQAAANAIAIQAIAIALAAQAMAAAIgIQAIgIAAgNQAAgMgIgIQgIgHgMAAQgLAAgIAHg");
	this.shape_43.setTransform(40.075,-10.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJBIIAAhdIATAAIAABdgAgIgxQgEgDgBgGQABgFAEgFQADgDAFAAQAGAAAEADQADAFAAAFQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_44.setTransform(31.9,-13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpAvIAAgRIA0g4IgwAAIAAgUIBPAAIAAARIg1A4IA1AAIAAAUg");
	this.shape_45.setTransform(24.35,-10.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghAjQgPgOAAgVQAAgVAPgOQANgNAUAAQAUAAAOANQAPAOAAAVQAAAVgPAOQgOAOgUAAQgUAAgNgOgAgTgUQgIAIAAAMQAAANAIAIQAIAIALAAQAMAAAIgIQAIgIAAgNQAAgMgIgIQgIgHgMAAQgLAAgIAHg");
	this.shape_46.setTransform(13.725,-10.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA1AwIAAgzQAAgLgGgGQgFgGgJAAQgKAAgGAGQgHAHAAAMIAAAxIgTAAIAAg0QAAgKgGgGQgFgGgIAAQgKAAgGAFQgIAHAAANIAAAxIgUAAIAAhdIAUAAIAAAOQAEgIAKgFQAIgDAIAAQAVAAAHATQAKgTAVAAQASAAAJALQAJALAAAUIAAA1g");
	this.shape_47.setTransform(-0.675,-10.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAjQgPgOAAgVQAAgVAPgOQANgNAUAAQAUAAAOANQAPAOAAAVQAAAVgPAOQgOAOgUAAQgUAAgNgOgAgTgUQgIAIAAAMQAAANAIAIQAIAIALAAQAMAAAIgIQAIgIAAgNQAAgMgIgIQgIgHgMAAQgLAAgIAHg");
	this.shape_48.setTransform(-15.125,-10.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAwIAAhdIAUAAIAAAWQAHgYASAAQALAAAFAEIgDATQgGgDgIAAQgYAAAAApIAAAig");
	this.shape_49.setTransform(-24.225,-10.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgwBHIAAiLIAUAAIAAAOQAFgHAJgEQAIgEAJgBQATAAAOAOQANAOAAAWQAAAUgNAOQgOANgTAAQgWAAgJgQIAAA8gAgTgqQgJAJAAANQABANAIAHQAIAHALAAQAMAAAIgHQAIgIAAgMQAAgNgIgJQgIgHgMgBQgKABgJAHg");
	this.shape_50.setTransform(-34.55,-8.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgiAkQgPgOAAgWQAAgVAPgNQANgOAUAAQAIAAAJAEQAIAEAFAIIAAgOIAUAAIAABdIgUAAIAAgOQgEAIgJAEQgJAEgIAAQgUAAgNgNgAgTgUQgJAIABAMQgBAMAJAJQAIAIALAAQAMAAAIgIQAJgIAAgNQAAgMgJgIQgJgIgLAAQgLAAgIAIg");
	this.shape_51.setTransform(-52.35,-10.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AglBFIAAiJIAVAAIAAB2IA2AAIAAATg");
	this.shape_52.setTransform(-62.475,-12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-30,140.3,67.5);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFFBZQgigiABg3QgBg2AigiQAhgjA1AAQA2AAAiAjQAgAiABA2QgBA3ggAiQgiAjg2AAQg1AAghgjgAF9gzQgQARAAAiQAAAkAQAQQANANARAAQATAAAMgNQAQgQAAgkQAAgigQgRQgMgNgTAAQgRAAgNANgAxcBYQgfghAAg3QABg3AggjQAhghA2AAQAxAAAbAYQAbAZAEAsIhHAAQgCgLgGgJQgKgPgUAAQgXAAgMAVQgKARAAAbQAAAbAKARQAMAUAXABQARAAAKgMQAIgKADgSIBIAAQAAAngcAdQgfAfgxAAIgCAAQg2AAghgkgAQwB3IgKgiIhMAAIgKAiIhJAAIBXjtIBHAAIBXDtgAPrAiIAtAAIgWhJIgBAAgAMtB3IAAjtIBIAAIAADtgAK4B3IhIiBIgBAAIAACBIhFAAIAAjtIBKAAIBGB+IAAAAIAAh+IBFAAIAADtgAAwB3IAAjtIB3AAQA3AAAcAlQAYAgAAAxQAAA4gdAeQggAhg8AAgAB5A6IAcAAQAeAAANgVQAJgPAAgXQAAgTgJgOQgOgXgjAAIgWAAgAjBB3IAAjtIDEAAIAAA9Ih7AAIAAAdIBwAAIAAA4IhwAAIAAAeIB9AAIAAA9gAm4B3IAAg6IBuh2IhoAAIAAg9IDIAAIAAA1IhvB7IB0AAIAAA9gAqIB3IAAjtIBJAAIAACwIBpAAIAAA9gArnB3IgKgiIhMAAIgLAiIhJAAIBYjtIBHAAIBWDtgAstAiIAtAAIgVhJIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-114.7,-12.4,229.5,24.9), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdAuQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgHgOIgmAAIgGAOQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIgCgBIAAgCIAohXQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAoBXQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABgAANAPIgNgbIgMAbIAZAAg");
	this.shape.setTransform(45.1125,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAtIgBgBIgRgiIgOAAIAAAhQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgLAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBABAAIAkAAQALABAIAHQAJAJAAALQAAAJgGAHQgEAGgJADIASAiIAAACQgBAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAgQgDIAUAAQAFAAAEgEQAEgEAAgGQAAgFgEgDQgEgEgFAAIgUAAg");
	this.shape_1.setTransform(36.25,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOgAgUgUQgJAJAAALQAAAMAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgMQAAgLgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_2.setTransform(25.975,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAuQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgHgOIgmAAIgGAOQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIgCgBIAAgCIAohXQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAoBXQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABgAANAPIgNgbIgMAbIAZAAg");
	this.shape_3.setTransform(12.6125,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAtQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAhIIgTAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgLQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBABAAIA3AAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAALQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgTAAIAABIQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_4.setTransform(4.55,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAkQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAIAEgIIADgCIACABQALAIAIAAQAEAAAEgDQADgDAAgEQAAgJgPgHQgZgIAAgTQAAgJAHgIQAIgIAOAAQAOAAAMAJIABACIgBACIgFAHQAAABgBABQAAAAgBABQAAAAgBAAQgBgBAAAAQgLgHgGAAQgFAAgEADQgDADAAADQAAAJAPAFQAMAGAGAEQAJAIAAALQAAALgIAHQgJAIgNAAQgRAAgLgLg");
	this.shape_5.setTransform(-2.625,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAtQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIALAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAABVQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_6.setTransform(-8.7,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAkQgKgLAAgPIAAg1QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIANAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAA0QAAAJAFAFQAGAGAHAAQAIAAAGgGQAFgFAAgIIAAg1QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIANAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAA1QAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_7.setTransform(-15.875,-0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA7IgDgBIgNgYIgGABQgTAAgNgOQgOgOAAgSQAAgUAOgNQANgOATAAQATAAAOAOQAOANAAAUQAAAMgHAMQgHALgMAGIAQAaQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDABgAgUggQgJAJAAAMQAAALAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgLQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_8.setTransform(-26.225,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAhQgOgOAAgTQAAgTAOgNQAOgOASAAQASAAAOAMQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABIgIAIQAAAAgBABQAAAAAAAAQgBAAAAAAQgBgBAAAAQgJgHgLAAQgMgBgIAKQgIAJAAALQAAAMAIAJQAJAJALAAQALAAAJgHQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIAIAIQABAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgNANgTAAQgSAAgOgOg");
	this.shape_9.setTransform(-36.3179,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdAuQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgHgOIgmAAIgGAOQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIgCgBIAAgCIAohXQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAoBXQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABgAANAPIgNgbIgMAbIAZAAg");
	this.shape_10.setTransform(-45.5875,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Label
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAF0").s().p("ApqChIAAlBITVAAIAAFBg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-61.9,-16.1,123.8,32.2), null);


(lib.logoanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Livello_1
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2,0.6993,0.6985,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).to({alpha:1},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-8.7,160.5,17.4);


(lib.CTAanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Livello_1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.7644,0.7644,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).to({alpha:1},23,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-12.3,94.69999999999999,24.6);


(lib.copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAF0").s().p("AgeAoQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBIAFgJQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADAAQAMAKAIgBQAFABAEgEQADgDAAgFQAAgJgQgHQgbgKAAgTQAAgLAIgHQAIgKAPABQAPAAANAJIABACIAAACIgGAIQgCAEgDgCQgLgHgHAAQgGAAgDADQgDADAAAEQAAAIAPAHQANAFAHAFQAJAJAAAMQAAALgIAIQgJAIgPABQgSAAgMgLg");
	this.shape.setTransform(21.9929,-0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAF0").s().p("AgFAxQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhdQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAMAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABdQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(14.975,-0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAF0").s().p("AgGAxQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAhOIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgMQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIA8AAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgVAAIAABOQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_2.setTransform(8.325,-0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAF0").s().p("AAgAyQgDAAgBgDIgHgPIgpAAIgHAPQAAAAgBABQAAABAAAAQgBAAgBABQAAAAgBAAIgMAAIgDgBIAAgDIAshdQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAsBdIAAADIgDABgAAOAQIgOgeIAAAAIgNAeIAbAAg");
	this.shape_3.setTransform(-0.8,-0.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAF0").s().p("AASAxIgCgBIgSglIgPAAIAAAkQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgNAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAhdQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAnAAQANAAAJAJQAJAJAAAMQAAAJgGAIQgGAGgJAEIATAkIAAADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAgAgRgDIAWAAQAFAAAEgFQAEgEAAgGQAAgFgEgEQgEgEgFAAIgWAAg");
	this.shape_4.setTransform(-10.825,-0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAF0").s().p("AgbAkQgPgPAAgVQAAgUAPgOQAOgPAUAAQATAAAPANQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgJAJQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgJgIgMAAQgMAAgJAJQgJAKAAAMQAAANAJAKQAJAJAMAAQAIAAAJgDIAAgMIgLAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgLQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAbAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAkQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgOAJgVAAQgUAAgOgOg");
	this.shape_5.setTransform(-21.825,-0.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAF0").s().p("AgbAxQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhdQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA4AAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgpAAIAAAXIAiAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAKQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgiAAIAAAZIApAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAMQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_6.setTransform(47.825,-16.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAF0").s().p("AAjAyIg5g/IAAA8QAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAheQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABgBIADAAIA5A+IAAg6QAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIANAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAABeQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(37.05,-16.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAF0").s().p("AgiAkQgPgPgBgVQABgUAPgOQAOgPAUgBQAVABAPAPQAOAOAAAUQAAAVgOAPQgPAPgVgBQgUABgOgPgAgWgWQgJAKAAAMQAAANAJAKQAKAJAMAAQANAAAJgJQAKgKAAgNQAAgMgKgKQgJgJgNAAQgMAAgKAJg");
	this.shape_8.setTransform(25.05,-16.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAF0").s().p("AgFAxQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhdQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAMAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABdQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(16.275,-16.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAF0").s().p("AgeAxQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDIAohLIAAAAIghAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgNQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIA6AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAADIgoBLIAjAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAANQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_10.setTransform(9.35,-16.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAF0").s().p("AgFAxQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhdQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAMAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABdQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_11.setTransform(2.425,-16.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAF0").s().p("AgnAxQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhdQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAhAAQAUAAAOAPQAPAOAAATQAAAUgPAOQgOAPgUAAgAgXAgIAQAAQANAAAIgJQAJgKAAgNQAAgNgJgJQgIgJgNAAIgQAAg");
	this.shape_12.setTransform(-5.55,-16.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAF0").s().p("AgbAxQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhdQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA4AAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgpAAIAAAXIAiAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAKQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgiAAIAAAZIApAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAMQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_13.setTransform(-15.875,-16.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAF0").s().p("AgeAxQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAhdQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAgAAQANAAAKAJQAIAJABANQgBANgIAIQgKAJgNAAIgQAAIAAAiQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAgOgDIAPAAQAGABAEgFQAEgEABgGQgBgGgEgEQgEgEgGAAIgPAAg");
	this.shape_14.setTransform(-24.9,-16.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00AAF0").s().p("AgeAnQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAFgJQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADAAQAMAJAIAAQAFAAAEgDQADgDAAgFQAAgJgQgHQgbgKAAgUQAAgKAIgIQAIgJAPAAQAPAAANAKIABACIAAADIgGAHQgCAEgDgBQgLgJgHABQgGgBgDAEQgDADAAAEQAAAJAPAGQANAGAHAEQAJAIAAAMQAAAMgIAIQgJAIgPAAQgSABgMgMg");
	this.shape_15.setTransform(-34.2071,-16.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00AAF0").s().p("AghAqQgIgHAAgLQAAgLAJgKIAKgGIAAgBIgDgCQgJgLAAgJQAAgJAHgHQAHgHAMgBQALAAAIAIQAHAGAAAKQAAAIgIAIIgJAJIAQAPQADgHACgIQABgEAEABIAHACQAEABgBAEQgDALgGALIAMAMQAEADgEADIgGAGQgDADgDgEIgKgJQgDADgGAEQgJAEgLAAQgNABgJgJgAgTAKQgFAFAAAHQAAAGAEADQAEAEAGABQAKAAAHgJIgTgWIgHAFgAgQghQgDACAAAFQAAADADACIAFAHIADADQALgHAAgHQAAgFgDgDQgDgEgFAAQgFABgDADg");
	this.shape_16.setTransform(-47.4625,-16.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAF0").s().p("AALA0QgGgHAAgJQAAgJAGgHQAHgFAIAAQAKAAAFAFQAHAHAAAJQAAAJgHAHQgFAFgKABQgIgBgHgFgAAVAfQgCACAAADQAAADACADQACACADAAQADAAADgCQACgDAAgDQAAgDgCgCQgDgDgDAAQgDAAgCADgAgfA4QgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgCIA2hqQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAJAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIg2BpQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAgAgogTQgHgHAAgJQAAgJAHgHQAFgFAKAAQAIAAAHAFQAGAHAAAJQAAAJgGAHQgHAFgIABQgKgBgFgFgAgfgoQgCACAAADQAAAEACACQADACADAAQADAAACgCQACgCAAgEQAAgDgCgCQgDgDgCAAQgDAAgDADg");
	this.shape_17.setTransform(49.05,-34.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAF0").s().p("AgdApQgKgPAAgaQAAgaAKgOQALgPASAAQATAAALAPQAKAOAAAaQAAAagKAPQgLAPgTAAQgSAAgLgPgAgNgaQgGAKAAAQQAAASAGAKQAFAJAIAAQAJAAAFgJQAFgKAAgSQAAgQgFgKQgFgKgJAAQgIAAgFAKg");
	this.shape_18.setTransform(37.925,-33.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAF0").s().p("AgcA3QgEAAAAgDIAAgDIAphVIgpAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgMQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIBBAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAACIguBjQgCAEgEABg");
	this.shape_19.setTransform(28.325,-33.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAF0").s().p("AgRAIQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgLQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAjAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAALQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_20.setTransform(20.25,-32.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAF0").s().p("AgcA4QgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhpQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAPAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAABZIAnAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_21.setTransform(8.425,-34.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAF0").s().p("AAkA5QgDAAgBgDIgIgSIgvAAIgIASQgBADgEAAIgOAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIAAgCIAyhrQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAxBrQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAAQATIgQgjIAAAAIgPAjIAfAAg");
	this.shape_22.setTransform(-2.5375,-34.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAF0").s().p("AgnApQgSgRABgYQgBgXASgQQAQgSAXABQAYgBARASQAQAQAAAXQAAAYgQARQgRAQgYABQgXgBgQgQgAgZgZQgLALAAAOQAAAQALAKQALALAOAAQAPAAALgLQALgKAAgQQAAgOgLgLQgLgLgPAAQgOAAgLALg");
	this.shape_23.setTransform(-19.75,-34.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAF0").s().p("AApA6IhChJIgBAAIAABEQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgOAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhrQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAEAAIBBBFIABAAIAAhBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAOAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABrQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_24.setTransform(-33.325,-34.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAF0").s().p("AgGA4QgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhpQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAOAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAABpQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_25.setTransform(-43,-34.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAF0").s().p("AggA4QAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhpQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIBAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAANQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIguAAIAAAeIAnAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABIAAALQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgnAAIAAAoQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_26.setTransform(-50.475,-34.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAF0").s().p("AgCAuQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgpIgfgqIgBgDIADgCIAGAAIACACIAZAkIAagkIACgCIAGAAQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIAAADIggAqIAAApQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_27.setTransform(51.9292,-50.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAF0").s().p("AAjAuQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgJgWIgtAAIgKAWQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgFAAIgCgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAIAnhXQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAnBXQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgCABgAAUAPIgTgpIgBAAIgSApIAmAAg");
	this.shape_28.setTransform(42.95,-50.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAF0").s().p("AgjAuQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIAdAAQARAAAOAOQANANAAASQAAATgNANQgOAOgRAAgAgcAlIAUAAQAOAAALgLQALgKAAgQQAAgPgLgKQgLgLgOAAIgUAAg");
	this.shape_29.setTransform(33.15,-50.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAF0").s().p("AAgAvIg7hKIAAAAIAABGQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAhWQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAEAAIA5BIIAAAAIAAhEQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAABWQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_30.setTransform(21.95,-50.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AAF0").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQAUAAANAOQAOAOAAASQAAATgOAOQgNAOgUAAQgSAAgOgOgAgZgZQgMAKAAAPQAAAQAMAKQALAMAOAAQAQAAALgMQALgKAAgQQAAgPgLgKQgLgMgQAAQgOAAgLAMg");
	this.shape_31.setTransform(10.575,-50.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AAF0").s().p("AAAAvQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgYhEIAAAAIgMBBQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgGAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIAShWQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIACAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAIAZBHIABAAIAZhHQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIACAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIARBWQABABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIgMhBIAAAAIgYBEQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_32.setTransform(-1.35,-50.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AAF0").s().p("AAWAuIgCgCIgSgiIgXAAIAAAhQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgFAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAhAAQALABAJAHQAIAJAAALQAAAJgFAHQgGAGgIADIASAiIAAACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAgAgVACIAYAAQAIAAAFgFQAGgGAAgHQAAgIgGgGQgGgFgHAAIgYAAg");
	this.shape_33.setTransform(-15.775,-50.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00AAF0").s().p("AgZAuQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAyAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgqAAIAAAgIAkAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgkAAIAAAhIAqAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_34.setTransform(-24.85,-50.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AAF0").s().p("AgbAuQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAhVQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAcAAQALABAIAGQAIAHAAAKQgBAIgEAFQgDAFgGADQAQAFAAAQQAAAKgIAIQgIAGgMABgAgUAlIAXAAQAHAAAEgFQAFgFABgGQAAgIgGgEQgGgEgHgBIgVAAgAgUgEIAVAAQAHABAEgGQAFgEgBgHQABgHgFgEQgEgEgHgBIgVAAg");
	this.shape_35.setTransform(-33.75,-50.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00AAF0").s().p("AgCAuQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgpIgfgqIgBgDIADgCIAGAAIACACIAZAkIAagkIACgCIAGAAQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIAAADIggAqIAAApQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_36.setTransform(-42.7208,-50.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00AAF0").s().p("AgZAhQgOgOAAgTQAAgSAOgOQAOgOASAAQASAAAOANQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAIgEADQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQgLgJgOgBQgOAAgLAMQgKAKAAAPQAAAPAKALQALAMAOAAQAIAAAGgEIALgGQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEAEIABABIgBACQgNANgTAAQgSAAgOgOg");
	this.shape_37.setTransform(-51.925,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(24));

	// timecode
	this.instance = new lib.timecode();
	this.instance.parent = this;
	this.instance.setTransform(0.55,46.7,0.93,0.93,0,0,0,0.4,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({regX:0.3,scaleX:1.03,scaleY:1.03,y:46.65,alpha:1},13,cjs.Ease.quartOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-61.5,126,146.2);


(lib.copyanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Livello_1
	this.instance = new lib.copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).to({alpha:1},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-68.9,134,159.7);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Cornice
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(149.9993,124.9994,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// CTA
	this.instance = new lib.CTAanim();
	this.instance.parent = this;
	this.instance.setTransform(77.85,214.95,1.0446,1.0446,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1));

	// copy
	this.instance_1 = new lib.copyanim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.95,114.95,1.0178,1.0178,0,0,0,0.2,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(11));

	// Logo
	this.instance_2 = new lib.logoanim();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.35,23.8,0.8392,0.8392,0,0,0,0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// foto
	this.instance_3 = new lib.foto();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.8928,0.8928);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,152,127);
// library properties:
lib.properties = {
	id: '58101318848B4BB987CE190821E7A997',
	width: 300,
	height: 250,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"foto.jpg?1565190484376", id:"foto"}
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
an.compositions['58101318848B4BB987CE190821E7A997'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;