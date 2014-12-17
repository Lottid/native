define("alipay/object-shim/1.0.0/object-shim",["$","./object-shim.css"],function(s,t,i){function e(s,t){if(this.target=h(s.element||s).eq(0),this.className=t||"alieditContainer",o(s)){var i=this;this._callbacks={show:function(){i.hide()},hide:function(){i.show()}},this._overlay=s,s.after("show",this._callbacks.show),s.after("hide",this._callbacks.hide)}}function o(s){return!(!s._setupShim||!s._setPosition)}var h=s("$"),a="object-shim-class";s("./object-shim.css"),e.prototype.sync=function(){var s=this.target;return s.length?(s.outerHeight()&&s.outerWidth()&&!s.is(":hidden")?this.hide():this.show(),this):this},e.prototype.show=function(){return h("."+this.className).removeClass(a),this},e.prototype.hide=function(){return h("."+this.className).addClass(a),this},e.prototype.destroy=function(){this._callbacks&&(this._overlay.off("after:show",this._callbacks.show),this._overlay.off("after:hide",this._callbacks.hide)),this.show()},i.exports=function(s,t){return new e(s,t)}}),define("alipay/object-shim/1.0.0/object-shim.css",[],function(){seajs.importStyle("body .object-shim-class{display:inline-block;*display:inline;*zoom:1;height:22px;width:198px;border:1px solid #999}body .object-shim-class object,body .object-shim-class embed{display:none}")});