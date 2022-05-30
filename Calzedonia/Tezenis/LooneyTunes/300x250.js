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
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.foto2 = function() {
	this.initialize(img.foto2);
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


(lib.tx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBMIAAiFIgzAAIAAgSIB7AAIAAARIgzAAIAACGg");
	this.shape.setTransform(78.9,45.9,0.434,0.434,0,0,0,-0.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBJQgCgCgDgIIgehYQgDgHgEgDIAABwIgVAAIAAiZIATAAQALgBAEAMIAkBoIADAKIAjhmQAHgUAFgDQAFgCAWADIAACYIgUAAIAAh1IgDgBIgjBoQgDAIgCACQgDAFgIAAQgHAAgDgFg");
	this.shape_1.setTransform(85.9,46,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("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");
	this.shape_2.setTransform(1.7,1,0.434,0.434);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("Aj1GIIgQgIIARgjIAmANQAXAIAQADQCNAfBghUQBBg4AQhZQAShphIhRQgUgXgdgfIgyg1Qg8hAgDhFQgDg/AlgvQAkguA/gLQBogTBaBMIgeAdIgNgKQhJgzhMAQQg6ANgYA0QgZA1AbA4QALAZAXAaIA4A8QAjAmAUAYQAxA6AJBKQAJBGgbBEQgaBDg2AvQg4AxhHANQgiAHgiAAQhKAAhHgfg");
	this.shape_3.setTransform(62.3,23.5,0.434,0.434);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhXkgIAogKICHJMIgpAJg");
	this.shape_4.setTransform(-92,-26.9,0.434,0.434);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AkMB/IHnhwIgoitIApgJIAxDVIoQB6g");
	this.shape_5.setTransform(-85.1,-8.5,0.434,0.434);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AhPgIICYgXIAHAnIiYAZg");
	this.shape_6.setTransform(-78.9,12.9,0.434,0.434);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("Ah3jnIC/geIgZiiIAogIIAhDNIi+AeIBeJtIgnAGg");
	this.shape_7.setTransform(-61.4,20.2,0.434,0.434);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AhFiSIAogNIBjExIgoAOg");
	this.shape_8.setTransform(76,-37.3,0.434,0.434);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AkAFyIAYhmIA6j0QAEgQALgKIGAlyIAIgHIAYAbIgfAiQgTAWgOANQjPDJhUBPQgkAggKAvQgIAlg8D+IgEANg");
	this.shape_9.setTransform(89.4,-22.3,0.434,0.434);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AiiCPIANjKIEHARIAIhmIApADIgJCOIkIgPIgKCfg");
	this.shape_10.setTransform(36.9,22.7,0.434,0.434);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AisCRIAMjHIEdASIAHhuIApADIgKCWIkcgRIgKCdg");
	this.shape_11.setTransform(38.3,7.8,0.434,0.434);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AiZCWIAAjHIEJAAIAAhkIAqAAIgBCGQAAADgEAEQgEADgEgBIjzgDIgKAAIAACfg");
	this.shape_12.setTransform(54.2,-26.4,0.434,0.434);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AijCZIAAjHIEfAAIAAhqIAoAAIAACVIkfAAIAACcg");
	this.shape_13.setTransform(54.9,-41.3,0.434,0.434);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AkVBKIAAgqIICAIIAAh6IApAAIAAClg");
	this.shape_14.setTransform(50.2,-14.6,0.434,0.434);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("Ah1kBIAngPIDEISIgnAPg");
	this.shape_15.setTransform(14.9,-38.2,0.434,0.434);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("Ai7F+IAFgpIDKAgIB/sZIApAFIiGNEg");
	this.shape_16.setTransform(27.8,-27.1,0.434,0.434);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AAeFcQgvgCglgZQg0gkgIhQQgCgggBhZIgCmvIApAAIADGnQAAA+ACAxQACBAAjAeQAiAeA/gGIAxgGIAKAoQgvAJggAAIgLAAg");
	this.shape_17.setTransform(-39.1,13.5,0.434,0.434);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1C").s().p("AkAGUIgngSIgNgJIAegdQA3AeBBAIQCWAUB3gzQB0gyAeiSQAIgkABgxIABhUIgCmmIArAAIAAFNIABBjQAAA5gCApQgICThRBWQg/BBhlAVQhKAQhEAAQhaAAhOgdg");
	this.shape_18.setTransform(-33.9,17.1,0.434,0.434);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1C").s().p("AjAAgQAVhWBEg5QBGg5BbgEQBTgDA8AoIgUAiQiUhJhyBlQhmBZAjCRIglAMQgZg/AShOg");
	this.shape_19.setTransform(-23.6,-34.8,0.434,0.434);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AhqFKQixgWhsiCIAfgbQCICUDCgIQCDgFBshYQBohUAdiHQAgiXhUiMIAggVQBVB5gSChQgUCviOBxQh6BhiVAAQgfAAgfgEg");
	this.shape_20.setTransform(-18.3,-26,0.434,0.434);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("AiEB8Qgyg3AChHQAChLA0gzQA2g1BJAAQBMAAA0A2QA1A0gBBLQACBGgxA2Qg0A5hRAAIgBABQhPgBg1g5gAg9AOQgbARgLAcQgFANAIAKQAmAsA6ABIABAFIBAgXQAOgGgCgSQgCgggXgXQgXgYghgFIgLgBQgXAAgXAOg");
	this.shape_21.setTransform(-20.6,-30.6,0.434,0.434);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1C").s().p("AiujeIAjgYIE6HVIgiAYg");
	this.shape_22.setTransform(-2.4,9.4,0.434,0.434);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1C").s().p("AhvDKICygOIghmrIAqgDIAkHVIjbARg");
	this.shape_23.setTransform(-11.5,26.5,0.434,0.434);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("Ah7GGIDKgPIg9siIApgEIBBNMIj1ATg");
	this.shape_24.setTransform(14,16.4,0.434,0.434);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1C").s().p("AgbCuQg5hBgKhHQgPhiAzhTQAthJBIgeIAQAkQhEAigiA+QggA6AEBCQAEBCAoA2QAoA4BGAZIgMAkQg6gGg4hDg");
	this.shape_25.setTransform(-67.9,-30.9,0.434,0.434);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("AjOGPQCtgVBniAQBriCgRioQgNiMhmhjQhmhmiVgKIAAgpQDDANByCNQBUBoAQB1QAQByg1B6QhkDnkLAng");
	this.shape_26.setTransform(-50.2,-31.1,0.434,0.434);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1C").s().p("AAAC2QhKgBg0gyQg3g0AAhPQAAhQA5g0QA1gxBIAAQBLAAA1A1QA0A1ABBLQgBBMg1A1Qg0A1hKAAIgCAAgAAVgNQgVANgMAWQgYAuAcAvQAGAMAOgBQAhAAAfgYQAfgYAMgiQANgngKgLQgIgNgtgGIgCAAQgZAAgVAMg");
	this.shape_27.setTransform(-60.5,-31.1,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Livello 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AUpSPQhdgKhug2QgVgKgIgRQgOAHgRAAIgGAAIj0gQIh9gJIhPgFQhSgEg8gHIABg1Ij8AUIgKABQgiAAgTgdIjilKIAdF6ImCAdIgPjAQhHBkh7AlQhhAehegBQhpAAhjgjQi8hEgyjQQgPhBABhgIgBh1IABgEIhQAOIBjKAImpBBIhkqAIi7AcIg6l7IL5h2IgKg+IGVAAIAEAvQACAQAAAMIABHuQACAnAEAcQACANAHAGQAGAGAQABIAOAAIANgBQAMgCAGgHQAHgHABgRQACg2gBhsIABhEIgBgEIAAllIAEgoIGZAAIAAAiIDPgQQAlgBAVAhIDmFdIgfmQIFugcIgPgCQgmgGgOglIiPl1Ig9F2IkQgrIAqhIQAAgNAHgMIAWguQg4BPhPA1QhSA3hjAXQg8APg/AAQiNAAh6hGQh8hHhIh5IgCgEIAAAAQg5BchXA+QhWA9hqAZQg/ANg7AAQh4AAhxg3IAiCPIq9ChIjovtIGjhgICRJyIB0gbIgIgLQhSiPAJibQAJi6B4iKQB3iMC0gjQA2gLA2AAQCRABB7BHQB6BHBIB7IADgGQCGjLDugnQATgDAjgCIAWgBIACgBIABAAQBxABBmArQBjAsBKBNIACgLQAJgpAJhFIAOhZIDlAkIBsARQAoAHAOAmICQGKIA+mMID/ApQgDgRAFgTIAJgfILDALIAAAmIC4ArIAuALQAmAIANAmIBLDmICxisQAUgUAZAAQAJAAAIACIE8BMQAGABAHAEIAwAYIgsA3Im5GnQgDACgBACIhmGoImahiIAOg7IrPgLIAAhTIgZCbIkzgvIAEA1IK3AtIgUE1QAEgnANglQAahPA3g/QA2g+BFgcQA/gaBDAAQBFAABOAcQBDAXBDAxQAhAYgHAnIgmDjIgDAPIgLAeQgigYgegPIgggSQgkghg9gLIgJAAQgPAAgJAKQgJALAFAVQAEAMAKAPIAFAGIAAAGQACAFAFAHQAFAGAIATQAIAQAHAIIASAPQAFAEAJAOIASAVQBBBJAXAyQADAHAEACQAPA4gEBAQgJB8hLBgQhrCJiuAAQgWAAgbgDgASaLtQAYAfAhASQAgASAxAHIAEAAQAOAAAOgHQAEgCACgGQAEgKgHgLQgLgVgfgiQhPhYghg3Qg3haAEhqIkhgTIgBARIEJARIgVE/IkIgRIgBATIEOARIAMhRgATYmPIEnAFIAAEVIAEgOIBAkNQAGgVgHgVIhhkGQgHgSAFgbIAAgDIkCAAIAAAOIDQAEQAaAAAPAPQAPAQAAAZIgEDUQAAAIgCAKIgIAgIj/AAgAooquQgpAngBA6QAAAbAKAbQALAaATAVQAoApA7AAQA8AAAogqQATgTALgaQAJgZAAgaIAAgCQAAg6gogoQgogog6AAQg5AAgpAngA28q+QgsApAAA+QAAA/AsAoQAoAkA2AAIACAAQA5ABAogpQApgqAAg5QAAg6gpgoQgogpg5gBIgBAAQg2ABgpAkg");
	this.shape_28.setTransform(-0.4,-5.1,0.434,0.434,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

}).prototype = getMCSymbolPrototype(lib.tx, new cjs.Rectangle(-110.3,-56.4,224.1,114.9), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAyQgSATgcAAQgfgBgLgNQgJgKADgWIANhaIAWAAIgNBXQgCAPAFAIQAGAJATAAQAUAAAJgJQAGgHACgQIANhXIAUAAIgNBXQgCAQAFAHQAGAJAUAAQATAAAJgJQAHgIACgPIANhXIAVAAIgNBaQgDAWgMAKQgOANggABQgcAAgLgTg");
	this.shape.setTransform(117.7,42,1.072,1.072);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8A4QgJgJADgXIAHgvQADgWAMgKQAQgOAmAAQAnAAAMAOQAJAKgDAWIgEAdIhpAAIgDAPQgCARAGAGQAIAJAaAAQAZAAALgIQAHgGACgNIAWAAQgDAVgMAJQgRANglABQgngBgMgNgAgcgrQgIAGgCARIgCAKIBUAAIABgJQACgRgFgHQgIgIgbgBQgaAAgJAJg");
	this.shape_1.setTransform(68.9,41.9,1.072,1.072);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BFIAUiHIASAAIABAQQANgSAhAAQAQAAAKAEIgDASQgMgEgSAAQgWAAgJAIQgLAHgCATIgMBVg");
	this.shape_2.setTransform(91.6,41.8,1.072,1.072);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7A6QgLgLACgRQADgUANgKQASgMAkAAIArAAIABgHQADgRgHgIQgIgHgWgBQgoABgDATIgVgCQAFgiA9gBQAiAAANANQAKALgDAWIgJBDQgCALABANIgSAAQgDgIgBgHQgLAJgOADQgMAFgXAAQgXAAgMgMgAgvAdQgCAXAfAAQA2gBAEgfIADgRIgrAAQgrAAgEAag");
	this.shape_3.setTransform(169.9,41.9,1.072,1.072);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3BFIAUiHIASAAIABAQQANgSAhAAQAPAAALAEIgDASQgMgEgSAAQgWAAgJAIQgLAHgCATIgMBVg");
	this.shape_4.setTransform(192.9,41.8,1.072,1.072);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8A4QgJgJADgXIAHgvQADgWAMgKQARgOAlAAQAnAAAMAOQAJAKgDAWIgEAdIhpAAIgCAPQgDARAGAGQAIAJAbAAQAYAAALgIQAIgGACgNIAVAAQgDAVgMAJQgQANgmABQgngBgMgNgAgcgrQgIAGgCARIgBAKIBTAAIABgJQADgRgGgHQgIgIgagBQgaAAgKAJg");
	this.shape_5.setTransform(145.5,41.9,1.072,1.072);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag9A4QgIgKADgYIANhZIAVAAIgMBWQgDASAFAGQAGAIAWAAQAXgBAMgHQALgJACgSIAMhTIAWAAIgQBuQgCALABANIgSAAQgDgIgBgHQgNAQglABQgegBgKgMg");
	this.shape_6.setTransform(-4,42,1.072,1.072);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhCBSQgIgKADgYIAGgtQAEgXAMgKQAPgOAiAAQAjAAAHASIAJhDIAWAAIgYCiQgBALABANIgSAAQgDgIgBgHQgHAIgLAEQgMAEgXABQgegBgKgMgAgigRQgHAGgDASIgFAmQgDASAFAGQAGAIAWAAQAbAAAKgHQALgFADgUIAFgmQADgSgGgGQgHgJgaAAQgZAAgKAJg");
	this.shape_7.setTransform(45.1,39.2,1.072,1.072);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiBFIAMhVQADgTgGgGQgHgJgaAAQgVAAgLAJQgKAIgCASIgMBUIgWAAIAUiHIASAAIABAQQANgSAhAAQAjAAALAOQAIAKgDAYIgNBZg");
	this.shape_8.setTransform(19.9,41.8,1.072,1.072);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACNERIkpl8IgCAAIAAF8IiQAAIAAohICtAAIEeF8IACAAIAAl8ICQAAIAAIhg");
	this.shape_9.setTransform(80.3,-3.6,1.072,1.072);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJERIAAohICTAAIAAIhg");
	this.shape_10.setTransform(125.3,-3.6,1.072,1.072);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhJA0IAAhnICTAAIAABng");
	this.shape_11.setTransform(125.3,-43.7,1.072,1.072);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ai+EDQhogsgBhyICnAAQACBYCKAAQA3AAAegQQAggSAAgiQAAgdgYgOQgTgMgygIIiGgVQhXgNgqgaQg6gmAAhMQAAisEPAAQEWAAALCuIilAAQgGgwgrgSQgegNg5AAQguAAgcASQgcASABAdQgBApBAAKIC4AeQBUANAqAgQAyAmAABFQAABUg+AuQhGA2iYAAQiFAAhFgeg");
	this.shape_12.setTransform(168.3,-3.6,1.072,1.072);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhJERIAAm6IjMAAIAAhnIIrAAIAABnIjMAAIAAG6g");
	this.shape_13.setTransform(-170.2,-3.6,1.072,1.072);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkAERIAAohIH+AAIAABnIlpAAIAAByIFXAAIAABjIlXAAIAAB9IFsAAIAABog");
	this.shape_14.setTransform(15.5,-3.6,1.072,1.072);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkAERIAAohIH+AAIAABnIlpAAIAAByIFXAAIAABjIlXAAIAAB9IFsAAIAABog");
	this.shape_15.setTransform(-109.4,-3.6,1.072,1.072);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkWERIAAheIFplcIlQAAIAAhnIITAAIAABeIloFbIFoAAIAABog");
	this.shape_16.setTransform(-47.5,-3.6,1.072,1.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-200,-49.3,400,98.7), null);


(lib.foto2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.foto();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foto2_1, new cjs.Rectangle(-168,-140,336,280), null);


(lib.foto_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.foto2();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foto_1, new cjs.Rectangle(-168,-140,336,280), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape.setTransform(51.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgWgnIgLAAIAAAnIgWAAIAAhjIAdAAQATAAALAHQAJAIAAAPQAAAJgFAGQgFAGgIAFIAdArgAgRgFIAGAAQAKABAEgEQAFgEgBgGQABgIgFgCQgEgEgLAAIgFAAg");
	this.shape_1.setTransform(41.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgNAWgBQAXABAMANQANANAAAYQAAAZgNANQgMAOgXAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAGAJAMAAQAZAAAAgiQAAghgZAAQgMAAgGAIg");
	this.shape_2.setTransform(29.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_3.setTransform(13.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAyIAAhSIgbAAIAAgRIBLAAIAAARIgcAAIAABSg");
	this.shape_4.setTransform(4.9,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAtIAAgTIARAGQAHACAHAAQAFAAAEgDQAEgCAAgFQAAgDgCgDIgEgFIgNgGQgJgEgEgDQgFgFgCgEQgDgGAAgHQAAgNAJgIQAIgIAPAAQAIAAAHACIAPAFIgGARIgOgFIgLgBQgFABgDACQgCADAAAEIAAAGIAFADIAMAHQAOAHAFAGQAFAHABAJQAAAOgKAIQgKAHgQABQgRgBgMgGg");
	this.shape_5.setTransform(-4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAyIAAhjIAVAAIAABjg");
	this.shape_6.setTransform(-11.2,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdApQgLgKAAgRIAAhAIAVAAIAAA8QAAAMAEAFQAGAGAJAAQAKAAAFgGQAFgFAAgMIAAg8IAVAAIAABAQAAALgFAIQgFAJgKAEQgIAFgNAAQgTAAgKgKg");
	this.shape_7.setTransform(-19.7,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA/IgSgXIgCAAQgWAAgMgNQgNgOAAgXQAAgZANgOQAMgNAWAAQAXAAAMANQANAOAAAZQAAAQgHAMQgGAMgMAGIAYAbgAgSgkQgGAJAAARQAAAPAGAJQAGAIAMAAQAZAAAAggQAAgigZAAQgMAAgGAIg");
	this.shape_8.setTransform(-31.6,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgPAGgLQAFgMALgGQAKgGAOgBQAOAAAPAHIgHASIgLgFIgLgCQgLABgHAIQgGAJAAAPQAAAhAYABQAKgBAPgFIAAASQgMAGgPAAQgVAAgMgOg");
	this.shape_9.setTransform(-42.1,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_10.setTransform(-52.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("Aq2iBIVtAAIAAEDI1tAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-70.5,-14,141,28), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.frame_65 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(15).call(this.frame_64).wait(1).call(this.frame_65).wait(30));

	// legal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdAJQgFgHgIgCQgIgDgIAAIgHAAIgIADQgHACgGAHIAAAAIAAgFQADgEAEgBIAFgEIAFgCQAGgBAFAAQAGAAAGABIAFACIAFAEQAFABACAEIAAAFg");
	this.shape.setTransform(294.2,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAMIAAgXIADAAIAgANIAAAFIgfgOIAAATg");
	this.shape_1.setTransform(294.4,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAEIAAgHIAjAAIAAADIgfAAIAAAEg");
	this.shape_2.setTransform(294.5,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAGQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgCIABgCIgBgBIgBgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgCABIgBADIgCACIgBAFIgBADIgEABIgEgBIgDgDIgBgDIAAgDQAAgDACgDQADgDAEAAIAAAFQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAIgBACIgBABQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBIACgCIABgDIAAgFIACgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEIAAAEIgCADIgDADIgDAAg");
	this.shape_3.setTransform(294.9,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAHQgFgBgFgDQgEgDgDgDIAAgFIAAAAQAGAHAHACIAIADIAHABQAIgBAIgDQAIgCAFgHIAAAAIAAAFQgCADgFADIgFACIgFACQgGACgGAAQgFAAgGgCg");
	this.shape_4.setTransform(294.2,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_5.setTransform(296,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAMIgDgBIgDgCIgCgDQgCgDAAgDIAAgEIACgEQACgDAFgBIAAAFIgEADIgBAEIAAADIACADQADACAEAAQAFAAADgCIACgDIAAgDIAAgCIgBgCIgEgDIAAgFQAEABADADQACAEAAAEIAAADIgCADQgBADgEACQgDACgEAAIgDgBg");
	this.shape_6.setTransform(294.9,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAMIAAgFIAFAAIgCgBIgCgCIgBgCIAAgDIAAgCIABgCIAFgFQACgBADAAIAQAAIAAAFIgPAAIgDAAIgDACIgBACIgBACIABAEIABABQACACAEAAIAPAAIAAAFg");
	this.shape_7.setTransform(294.9,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQACIAAgDIAhAAIAAADg");
	this.shape_8.setTransform(294.5,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_9.setTransform(294.5,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAMIAAgFIAFAAIgCgBIgCgCIgBgCIAAgDIAAgCIABgCIAFgFQACgBADAAIAQAAIAAAFIgPAAIgDAAIgDACIgBACIgBACIABAEIABABQACACAEAAIAPAAIAAAFg");
	this.shape_10.setTransform(294.9,29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_11.setTransform(294.9,32.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAWIAAgFIAFAAIgCgBIgCgCIgBgDIAAgDQAAgDABgCIACgCIADgBIgDgCIgCgCQgBgDAAgDIAAgDIABgCIACgDIADgBQACgCADAAIAQAAIAAAFIgPAAQgEAAgCACIgBACIgBADIABADIABADQACACAEAAIAPAAIAAADIgPAAIgDABIgDABIgBADIgBADIABADIABACQACACAEAAIAPAAIAAAFg");
	this.shape_12.setTransform(294.9,36.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAMIAAgFIAFAAIgCgBIgCgCIgBgCIAAgDIAAgCIABgCIAFgFQACgBADAAIAQAAIAAAFIgPAAIgDAAIgDACIgBACIgBACIABAEIABABQACACAEAAIAPAAIAAAFg");
	this.shape_13.setTransform(294.9,41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRACIgBgCIABgBIACgBIADABIAAABIAAACIgDABIgCgBgAgIACIAAgDIAbAAIAAADg");
	this.shape_14.setTransform(294.4,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAMQgEgCgBgCQgCgDAAgEIAAgCIACgDQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABADIAAACIAAAEIgCADQgBACgEACQgDACgEAAQgDAAgDgCgAgEgHIgEAEIgBACIAAABIABAFIABACIACABQADACACgBQADABACgCIACgBIACgCIABgDIAAgCIgBgDIgBgDIgDgBIgCgBIgDAAIgEABg");
	this.shape_15.setTransform(294.9,45.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_16.setTransform(294.5,48);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_17.setTransform(294.9,49.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_18.setTransform(294.9,52.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_19.setTransform(294.5,54.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAMIAAgFIAFAAIgCgBIgCgCIgBgDIAAgCIAAgCIABgCIAFgFQACgBADAAIAQAAIAAAEIgPAAIgDABIgDACIgBACIgBACIABAEIABACQACABAEAAIAPAAIAAAFg");
	this.shape_20.setTransform(294.9,57);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAJIAAgRIADAAIAAANIAMAAIAAgLIADAAIAAALIAMAAIAAgNIADAAIAAARg");
	this.shape_21.setTransform(294.5,59.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_22.setTransform(296,63.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAGAGQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgCIABgCIgBgBIgBgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgCABIgBADIgCACIgBAFIgBADIgEABIgEgBIgDgDIgBgDIAAgDQAAgDACgDQADgDAEAAIAAAFQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAIgBACIgBABQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBIACgCIABgDIAAgFIACgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEIAAAEIgCADIgDADIgDAAg");
	this.shape_23.setTransform(294.9,64.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEQAAgDACgDIACgDIADgCIADgBIADgBIAEABIADABIADACIACADQACADAAADIAAAEIgCADQgBADgEACQgDACgEAAIgDgBgAgFgHIgCACIgBABIgBAEIABAFQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABIADABIACAAQADAAADgBIACgBIABgCIABgFIAAgBIgBgCIgDgEQgDgBgDAAQgCAAgDABg");
	this.shape_24.setTransform(294.9,67.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_25.setTransform(294.9,70.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAMIAAgMIABgFIABgCIACgCIAFgBQADAAACACIABACIABACQAAgDACgCQADgCADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACABABACIABAGIAAAMgAADgFIgBADIgBACIAAAIIANAAIAAgIQAAgDgCgCQgCgBgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAgJgFIgCABIgBACIgBACIAAAIIAMAAIAAgIIgBgCIgBgCIgCgBIgCgBIgCABg");
	this.shape_26.setTransform(294.5,72.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_27.setTransform(294.9,76.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_28.setTransform(294.9,79.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAMIAAgEIAFAAIgCgCIgCgCIgBgCIAAgCIAAgDIABgDIAFgDQACgCADAAIAQAAIAAAFIgPAAIgDAAIgDABIgBADIgBACIABADIABACQACACAEABIAPAAIAAAEg");
	this.shape_29.setTransform(294.9,82.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_30.setTransform(294.9,84.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAMQgEgCgBgCQgCgDAAgEIAAgCIACgDQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABADIAAACIAAADIgCAEQgBACgEACQgDACgEAAQgDAAgDgCgAgEgHIgEADIgBADIAAABIABAEIABADIACABQADABACAAQADAAACgBIACgBIACgDIABgCIAAgCIgBgEIgBgCIgDgBIgCgBIgDAAIgEABg");
	this.shape_31.setTransform(294.9,87.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQATIAcgIIgcgJIAAgDIAcgIIgcgIIAAgGIAhALIAAAFIgbAHIAbAJIAAAEIghALg");
	this.shape_32.setTransform(294.5,91.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIASIAAgMIADAAIAAAEIAOAAIAAADIgOAAIAAAFgAgIADIAAgEIAMgFIgMgGIAAgEIARAAIAAADIgLAAIALAGIAAACIgMAFIAMAAIAAADg");
	this.shape_33.setTransform(293.6,97.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAIAPIgFgBQgCgBgBgDQgBgCAAgDIAAAAIABgBIgBABIAAAAIgBABIgEADIgEABIgEgBIgDgEIAAgCIgBgCIABgCIAAgCIADgDIAEgBIACAAIAAAFIgCgBIgDABQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIADABIADAAIADgCIAWgRIAAAFIgHAFIADACIADACQACACAAADIgBADIgBACIgBACIgCACIgDABIgDAAgAAFAAIgCACIgBADQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAIACACIACAAIADAAIACgCIABgCIABgCIgBgDIgCgCIgEAAIgDAAgAgBAFIABgBIgBABg");
	this.shape_34.setTransform(294.4,102.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEARIgEgCIgEgCIgCgEQgDgEAAgFIABgEIACgEIACgEIAEgCQAEgCAEAAQAFAAAEACQAEACACAEIACAEIABAEQAAAFgDAEQgCAEgEACIgEACIgFAAIgEAAgAgHgMQgEACgCADQgCADAAAEQAAAFACADQACADAEACQADACAEAAQAFAAADgCQAEgCACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgDgCgFAAQgEAAgDACgAgFAJIgCgBIgCgCQgCgDAAgDIABgCIABgDQACgDAEgBIAAAEIgDACIgBADQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIACABIADABIADgBIADgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgDIgDgCIAAgEQADABACADQACACAAADIAAADIgBADIgCACIgCABQgDACgDAAQgDAAgCgCg");
	this.shape_35.setTransform(294.5,107.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAGAGQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgCIABgCIgBgBIgBgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgCABIgBADIgCACIgBAFIgBADIgEABIgEgBIgDgDIgBgDIAAgDQAAgDACgDQADgDAEAAIAAAFQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAIgBACIgBABQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBIACgCIABgDIAAgFIACgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEIAAAEIgCADIgDADIgDAAg");
	this.shape_36.setTransform(294.9,112.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_37.setTransform(294.5,114.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgNAMIAAgEIAFAAIgCgCIgCgCIgBgCIAAgCIAAgDIABgDIAFgDQACgCADAAIAQAAIAAAFIgPAAIgDAAIgDABIgBADIgBACIABADIABACQACACAEABIAPAAIAAAEg");
	this.shape_38.setTransform(294.9,116.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_39.setTransform(294.9,119.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNAWIAAgFIAFAAIgCgBIgCgCIgBgDIAAgDQAAgDABgCIACgCIADgBIgDgCIgCgCQgBgDAAgDIAAgDIABgCIACgDIADgBQACgCADAAIAQAAIAAAFIgPAAQgEAAgCACIgBACIgBADIABADIABADQACACAEAAIAPAAIAAADIgPAAIgDABIgDABIgBADIgBADIABADIABACQACACAEAAIAPAAIAAAFg");
	this.shape_40.setTransform(294.9,123.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_41.setTransform(294.9,128);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRACIAAgDIAkAAIAAADg");
	this.shape_42.setTransform(294.4,130.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_43.setTransform(294.9,132.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCANQgDgCgCgEQgCgDAAgDIABgCIABgDQACgDACgBIgPAAIAAgFIAkAAIAAAFIgFAAQACABACADIABADIABACIgBAEIgBACQgCAEgDACQgDABgFAAQgEAAgCgBgAAAgHIgDAEIgBACIgBABIABAFIACABIACACQABABADAAQADAAADgBIACgCIABgBIABgCIABgDIgBgDIgCgCIgCgCIgDgBIgCAAIgFABg");
	this.shape_44.setTransform(294.4,137.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAMIAAgEIAFAAIgCgCIgCgCIgBgCIAAgCIAAgDIABgCIAFgEQACgCADAAIAQAAIAAAFIgPAAIgDAAIgDABIgBADIgBACIABADIABACQACACAEABIAPAAIAAAEg");
	this.shape_45.setTransform(294.9,140.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGAMQgEgCgBgCQgCgDAAgEIAAgCIACgDQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABADIAAACIAAADIgCAEQgBACgEACQgDACgEAAQgDAAgDgCgAgEgHIgEADIgBADIAAABIABAEIABADIACABQADABACAAQADAAACgBIACgBIACgDIABgCIAAgCIgBgEIgBgCIgDgBIgCgBIgDAAIgEABg");
	this.shape_46.setTransform(294.9,143.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAGAGQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgCIABgCIgBgBIgBgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgCABIgBADIgCACIgBAFIgBADIgEABIgEgBIgDgDIgBgDIAAgDQAAgDACgDQADgDAEAAIAAAFQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAIgBACIgBABQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBIACgCIABgDIAAgFIACgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIABAEIAAAEIgCADIgDADIgDAAg");
	this.shape_47.setTransform(294.9,147.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_48.setTransform(294.9,150);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_49.setTransform(294.9,152.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_50.setTransform(294.5,154.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDAMIgDgBIgDgCIgCgDQgCgDAAgDIAAgEIACgEQACgDAFgBIAAAFIgEADIgBAEIAAADIACADQADACAEAAQAFAAADgCIACgDIAAgDIAAgCIgBgCIgEgDIAAgFQAEABADADQACAEAAAEIAAADIgCADQgBADgEACQgDACgEAAIgDgBg");
	this.shape_51.setTransform(294.9,157.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGANQgEgDgBgDQgCgDAAgDIAAgDIACgCQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABACIAAADIAAAEIgCACQgBADgEADQgDABgEAAQgDAAgDgBgAgEgHIgEAEIgBABIAAACIABAFIABABIACACQADABACAAQADAAACgBIACgCIACgBIABgCIAAgDIgBgDIgBgCIgDgCIgCgBIgDAAIgEABg");
	this.shape_52.setTransform(294.9,160.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_53.setTransform(294.9,162.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGAMQgEgBgBgEQgCgDAAgDIAAgDIACgCQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABACIAAADIAAADIgCADQgBAEgEABQgDACgEAAQgDAAgDgCgAgEgHIgEADIgBACIAAACIABAEIABACIACACQADACACAAQADAAACgCIACgCIACgCIABgBIAAgDIgBgEIgBgBIgDgCIgCgBIgDAAIgEABg");
	this.shape_54.setTransform(294.9,165.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRAMIAAgEIANAAIgBgCIgCgCIgBgDIAAgBIAAgDIABgDIAEgDQADgCACAAIARAAIAAAEIgQAAIgDABIgDABIgBADIAAACIAAADIABADQADACADAAIAQAAIAAAEg");
	this.shape_55.setTransform(294.4,168.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDAMIgDgBIgDgCIgCgDQgCgDAAgDIAAgEIACgEQACgDAFgBIAAAFIgEADIgBAEIAAADIACADQADACAEAAQAFAAADgCIACgDIAAgDIAAgCIgBgCIgEgDIAAgFQAEABADADQACAEAAAEIAAADIgCADQgBADgEACQgDACgEAAIgDgBg");
	this.shape_56.setTransform(294.9,171.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgCANQgDgCgCgEQgCgDAAgDIABgDIABgCQACgDACgBIgPAAIAAgFIAkAAIAAAFIgFAAQACABACADIABACIABADIgBAEIgBACQgCAEgDACQgDABgFAAQgEAAgCgBgAAAgHIgDAEIgBABIgBACIABAFIACACIACABQABABADAAQADAAADgBIACgBIABgCIABgCIABgDIgBgDIgCgCIgCgCIgDgBIgCAAIgFABg");
	this.shape_57.setTransform(294.4,176.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_58.setTransform(294.9,179.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgJAIIAAgEIgHAAIAAgEIAHAAIAAgHIADAAIAAAHIAQAAIADAAIABgDIAAgEIADAAIAAAFQAAACgBACIgDACIgDAAIgQAAIAAAEg");
	this.shape_59.setTransform(294.5,182.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGAMQgEgCgBgCQgCgEAAgDIAAgCIACgDQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABADIAAACIAAADIgCAEQgBACgEACQgDACgEAAQgDAAgDgCgAgEgHIgEADIgBADIAAABIABAEIABADIACABQADABACABQADgBACgBIACgBIACgDIABgCIAAgCIgBgEIgBgCIgDgBIgCgBIgDAAIgEABg");
	this.shape_60.setTransform(294.9,184.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgRACIAAgDIAkAAIAAADg");
	this.shape_61.setTransform(294.4,187);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDANIgDgBIgDgCIgCgDQgCgDAAgEIAAgDIACgDQABgDADgCIADgBIAEAAIACAAIAAAVQAEgBACgCQACgCAAgEIgBgEIgDgDIAAgEQAEABACADIACAEIAAADIAAAEIgCADQgBADgEACQgDABgEAAIgDAAgAgFgHIgDAEIgBADIAAADIACADQACACAEABIAAgRIgEABg");
	this.shape_62.setTransform(294.9,189.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgNAGIAAgEIAFAAQgFgCAAgFIAFAAIAAABQAAADACABIACABIAEABIAOAAIAAAEg");
	this.shape_63.setTransform(294.9,191.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRACIAAgDIAkAAIAAADg");
	this.shape_64.setTransform(294.4,194.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgRACIAAgDIAkAAIAAADg");
	this.shape_65.setTransform(294.4,195.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgGAMQgEgBgBgEQgCgDAAgDIAAgDIACgCQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABACIAAADIAAADIgCADQgBAEgEABQgDACgEAAQgDAAgDgCgAgEgHIgEADIgBACIAAACIABAEIABACIACACQADACACAAQADAAACgCIACgCIACgCIABgBIAAgDIgBgEIgBgBIgDgCIgCgBIgDAAIgEABg");
	this.shape_66.setTransform(294.9,198.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgCANQgDgCgCgEQgCgDAAgDIABgDIABgCQACgDACgBIgPAAIAAgFIAkAAIAAAFIgFAAQACABACADIABACIABADIgBADIgBADQgCAEgDACQgDABgFAAQgEAAgCgBgAAAgHIgDAEIgBABIgBACIABAEIACACIACACQABACADAAQADAAADgCIACgCIABgCIABgBIABgDIgBgDIgCgCIgCgCIgDgBIgCAAIgFABg");
	this.shape_67.setTransform(294.4,203);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgNAMIAAgEIAFAAIgCgCIgCgCIgBgDIAAgBIAAgDIABgDIAFgDQACgCADAAIAQAAIAAAEIgPAAIgDABIgDABIgBADIgBACIABADIABADQACACAEAAIAPAAIAAAEg");
	this.shape_68.setTransform(294.9,206.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGANQgEgDgBgDQgCgCAAgEIAAgCIACgDQABgDADgBIgGAAIAAgFIAbAAIAAAFIgGAAQADABACADIABADIAAACIAAAEIgCACQgBADgEADQgDABgEAAQgDAAgDgBgAgEgHIgEAEIgBACIAAABIABAFIABACIACABQADACACgBQADABACgCIACgBIACgCIABgDIAAgCIgBgDIgBgDIgDgBIgCgBIgDAAIgEABg");
	this.shape_69.setTransform(294.9,209.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAJAHQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgCIABgDIgBgCIgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgDABIgCADIgBADIgCAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgCACgDAAQgDAAgCgCIgCgBIgCgDIgBgGQAAgEADgDIACgCIAEgBIAAAFQAAAAgBAAQAAABgBAAQgBAAAAAAQAAABgBAAIgBACIAAACIAAACIACACQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAIADgBIACgDIABgDIABgGIACgDIADgBIADgBQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIAEAEQACACAAADIgBADIAAADIgEAEIgCABIgCABg");
	this.shape_70.setTransform(294.5,213.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgQAJIAAgRIADAAIAAANIAMAAIAAgMIADAAIAAAMIAMAAIAAgNIADAAIAAARg");
	this.shape_71.setTransform(294.5,216.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQANIAAgEIAagRIgaAAIAAgEIAhAAIAAAEIgaARIAaAAIAAAEg");
	this.shape_72.setTransform(294.5,219.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRANIAAgFIAWAAIADAAIAEgCIABgDIABgDIgBgDIgBgCIgEgCIgDgBIgWAAIAAgEIAWAAQAEAAADACIACACIACACIABADIAAADIAAADIgBAEQgCADgCABIgEACIgDAAg");
	this.shape_73.setTransform(294.6,223);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgQALIAAgVIADAAIAAAJIAeAAIAAADIgeAAIAAAJg");
	this.shape_74.setTransform(294.5,226.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgQAIIAQgIIgQgIIAAgEIAUALIANAAIAAAEIgNAAIgUALg");
	this.shape_75.setTransform(294.5,230.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAJIAAgRIADAAIAAAMIAMAAIAAgLIADAAIAAALIAMAAIAAgMIADAAIAAARg");
	this.shape_76.setTransform(294.5,233);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgQAOIAAgFIAagRIgaAAIAAgEIAhAAIAAAEIgaARIAaAAIAAAFg");
	this.shape_77.setTransform(294.5,236);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEARIgEgCIgEgCIgCgEQgDgEAAgFQAAgEADgEIACgDIAEgDQAEgDAEAAIAFABIAEACQAEACACAEIACAFIABADIgBAFIgCAEQgCAEgEACIgEACIgFAAIgEAAgAgDgLIgDAAIgFAGQgCACAAADQAAAEACADQACACADACIADACIADAAQAEAAADgCQADgCACgCQACgDAAgEQAAgDgCgCQgCgEgDgCQgDgBgEAAIgDABg");
	this.shape_78.setTransform(294.5,239.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEARIgEgCIgEgCIgCgEQgDgEAAgFQAAgEADgEIACgEIAEgCQAEgCAEAAIAFAAIAEACQAEACACAEIACAEIABAEIgBAEIgCAFQgCAEgEACIgEACIgFABIgEgBgAgDgMIgDABIgFAGQgCACAAADQAAADACADQACAEADABIADACIADAAQAEAAADgCQADgBACgEQACgDAAgDQAAgDgCgCQgCgEgDgCQgDgBgEAAIgDAAg");
	this.shape_79.setTransform(294.5,243.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgQAIIAAgEIAeAAIAAgLIADAAIAAAPg");
	this.shape_80.setTransform(294.5,246.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(95));

	// cornice
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#1D1D1D").ss(2,0,0,3).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape_81.setTransform(150,125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(95));

	// CTA
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(209,193.2,0.84,0.84,0,0,0,0.2,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(17).to({alpha:0},11).to({_off:true},1).wait(17));

	// tx
	this.instance_1 = new lib.tx();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.1,125.1,0.714,0.714,0,0,0,0.6,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({regX:0.8,regY:0.6,scaleX:0.61,scaleY:0.61,x:208.3,alpha:1},15,cjs.Ease.get(1)).wait(29).to({regX:0.7,regY:0.4,y:125},0).to({regY:0.5,scaleX:0.5,scaleY:0.5,x:208.4,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(13));

	// Logo
	this.instance_2 = new lib.Logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(209,57.6,0.315,0.314,0,0,0,0.3,0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},25,cjs.Ease.get(1)).wait(43).to({alpha:0},22).wait(1));

	// foto2
	this.instance_3 = new lib.foto2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,0.893,0.893);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({alpha:1},15).wait(2).to({alpha:0},20).wait(9));

	// foto
	this.instance_4 = new lib.foto_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,125.1,0.893,0.893,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},22,cjs.Ease.get(1)).to({_off:true},42).wait(31));

	// Bg
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F68445").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_82.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);
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
		{src:"foto.jpg", id:"foto"},
		{src:"foto2.jpg", id:"foto2"}
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;