dropSelect-jquery-plugin-dwa
============================

A jQuery plugin for converting select to drop down html list.

Usage
-----
	To initialize the plugin after onload.
	
		$(".dropdown").dropSelect();
		
	
	HTML markup needed is
		
		<div class="dropdown" >
			<select id="productName" name="productName">
				<option value="lace" selected>Cloth1</option>
				<option>Cloth2</option>
			</select>
		</div>
		
	
Options available with the plugin
---------------------------------
	
	* showLabel : boolean (default true)
	
	> For displaying label above the new html list dropdown
	
	usage
	
		$(".dropdown").dropSelect({showLabel:true});

	* label : string (default "Select : ")
	
	> For the string that will be displayed before the selected value. Only applicable when showLabel = true
	
	usage
	
		$(".dropdown").dropSelect({showLabel:true});
