(function($){
	$.fn.dropSelect = function(options) {
		var settings = $.extend({
            // These are the defaults.
            showLabel: true,
            label:"Select : "
        }, options );
        
        return this.each(function(){
			var jSelectDiv = jQuery(this).addClass("drp-select");
			if(settings.showLabel){
				jSelectDiv.addClass("show-label");
			}
			var jSelectDef = jSelectDiv.find("select");
			var ulStr = "<ul>";
			var currentSelected = "";
			var selectObj = {};
			
			jSelectDef.find("option").each(function(idx,elm){
				console.log("element value:",elm.value,arguments);
				var elmValue = elm.value?elm.value:elm.innerHTML;
				if(elm.selected){
					currentSelected = elmValue;
				}
				selectObj[elmValue] = elm.innerHTML;
				ulStr += "<li data-val=\"" + elmValue + "\">" + elm.innerHTML + "</li>";
			});
			ulStr += "</ul>";
			jSelectDef.after('<label class="drp-label">' + settings.label + '<span class="current-selected"></span></label>'
				+ '<div class="drp-select-div"><span class="current-selected"></span>'
				+ ulStr
				+ '</div>'
			);
			
			var jDropSelect = jSelectDiv;
			
			
			jDropSelect.delegate("li","click",function(evt){
				if(evt && evt.currentTarget && evt.currentTarget.hasAttribute("data-val")){
					changeCurrentSelected(evt.currentTarget.getAttribute("data-val"));
				}
				jDropSelectDiv.removeClass("show-list");
			});
			var jDropSelectDiv = jSelectDiv.find(".drp-select-div");
			jDropSelectDiv.bind("mouseenter",function(elm){
				console.log(arguments);
				jDropSelectDiv.addClass("show-list");
			});
			
			jDropSelectDiv.find("ul")
				.removeClass("show-list")
				.find("li").each(function(idx,elm){
					if(!(elm.hasAttribute("data-val") && elm.getAttribute("data-val"))){
						elm.setAttribute("data-val",elm.innerHTML);
					}
					
					elm.innerHTML = "<a >" + elm.innerHTML + "</a>";
				});
			var changeCurrentSelected = function(newSelect){
				if(selectObj[newSelect]){
					currentSelected = newSelect;
				}
				jDropSelect.find(".current-selected").html(selectObj[currentSelected]);
				jSelectDef.find("option").filter(function(){ return this.innerHTML == selectObj[currentSelected] }).prop("selected",true);
			};
			changeCurrentSelected();
		});
	}
}(jQuery));
