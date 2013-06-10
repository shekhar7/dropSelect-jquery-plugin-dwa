jQuery(function($){
	jQuery(".drppp").dropSelect();
	/*
	var jDropSelect = jQuery(".drp-select");
	var selectObj = {};
	var currentSelected = jDropSelect.attr("data-default");
	jDropSelect.delegate("li","click",function(evt){
		if(evt && evt.currentTarget && evt.currentTarget.hasAttribute("data-val")){
			changeCurrentSelected(evt.currentTarget.getAttribute("data-val"));
		}
		jDropSelectDiv.removeClass("show-list");
	});
	var jDropSelectDiv = jQuery(".drp-select-div");
	jDropSelectDiv.bind("mouseenter",function(elm){
		console.log(arguments);
		jDropSelectDiv.addClass("show-list");
	});
	
	$(".drp-select-div ul")
		//.prepend("<li data-val=\"select-drp\" class=\"current-selected\"></li>")
		.removeClass("show-list")
		.find("li").each(function(idx,elm){
			if(!(elm.hasAttribute("data-val") && elm.getAttribute("data-val"))){
				elm.setAttribute("data-val",elm.innerHTML);
			}
			selectObj[elm.getAttribute("data-val")] = elm.innerHTML;
			elm.innerHTML = "<a >" + elm.innerHTML + "</a>";
		});
	var changeCurrentSelected = function(newSelect){
		if(selectObj[newSelect]){
			currentSelected = newSelect;
		}
		//jDropSelectDiv.find(".current-selected").html(selectObj[currentSelected]?selectObj[currentSelected]:"&nbsp;");
		jDropSelect.find(".current-selected").html(selectObj[currentSelected]);
	};
	changeCurrentSelected();
	*/
});
