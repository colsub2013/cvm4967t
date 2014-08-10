(function() { 

	var skimlinks_search_id_in = window.skimlinks_search_id_in || false;
	
	function skimlinksGetID() {

		var skim_id_in = window.skimlinks_search_id_in || false;
		
		if (skim_id_in && skim_id_in.indexOf('1X1') != -1){ skim_id_in = false; }
		
		if (!skim_id_in){
			
			var skim_id_in = window.skimlinks_search_id || false;
		
		}
		
		if (!skim_id_in){

			var	skim_id_in = window.skimlinks_pub_id || false;
		}
		
		if (!skim_id_in){
			var skimlinks_tags = document.getElementsByTagName('script');
			var skimlinks_url = new RegExp("//g\.skim*");
			
			for(var skimlinks_i = 0; skimlinks_i < skimlinks_tags.length; ++skimlinks_i) {
				var skimlinks_src = "";
				if(skimlinks_tags[skimlinks_i] !== undefined){
					skimlinks_src = skimlinks_tags[skimlinks_i].src;
					if(skimlinks_url.test( skimlinks_src ) === true) {
						var skimlinks_pos_search_id_in = skimlinks_src.slice((skimlinks_src.lastIndexOf('/') + 1), skimlinks_src.indexOf('.', skimlinks_src.lastIndexOf('/') + 	1));
						if (skimlinks_pos_search_id_in.indexOf('amazon') != -1 || skimlinks_pos_search_id_in.indexOf('ebay') != -1){ skim_id_in = false; } else { skim_id_in = skimlinks_pos_search_id_in;}
						skimlinks_i = skimlinks_tags.length;
					}
				}
			}
		}
		
		if (!skim_id_in){

			var	skim_id_in = '1X1';
		}
		
		window.skimlinks_search_id_in = skim_id_in;
		
		var cl = 'skimlinkspubid';
		var elem = document.getElementsByTagName('input');
		var elsLen = elem.length;
			for (var i = 0; i < elsLen; i++) {
				if (elem[i].className == cl) elem[i].value = skim_id_in;
			}

	}
	
	skimlinksGetID();

	skimlinks_search_id_in = window.skimlinks_search_id_in;	
	
	var uniq_id = '', 
			sendurl = 'http://www.amazon.com/s/ref=nb_sb_noss', 
			imgurl = '//g.skimresources.com/js/search/searchimage_amazon.gif', 
			class_name = 'amazon';
		
	for (var i = 0; i < 16; i++) { 
		uniq_id += Math.floor(Math.random() * 10); 
	} 
	
	document.write("<form method='GET' class='" + class_name + "' id='skimlinks_phrase_search' onsubmit='skimlinksGetID(); return true;' target='_blank' action='http://go.redirectingat.com/forms.php' style=\"display: inline;\">");
	document.write("<input class='skimlinks_phrase_query' id='skimlinks_phrase_query_" + uniq_id + "'  name='field-keywords' style=\"padding: 2px; background:	#FFFFFF url('" + imgurl + "') left no-repeat;\" maxlength='100' type='text' value='' />");
	document.write("<input name='skimlinks_search_product' value='amazon'  type='hidden' />");
	document.write("<input id='skimlinks_phrase_submit' value='Search' type='submit' />  <input name='url' 	value='search-alias%3Daps' type='hidden' /> <input name='skimlinksurl' value='" + sendurl + "' type='hidden' /><input id='skimlinkspubid' class='skimlinkspubid' name='skimlinkspubid' value='"+skimlinks_search_id_in+"' type='hidden' /></form>");
	
	var skimlinks_amazon_text = document.getElementById('skimlinks_phrase_query_' + uniq_id);		
	skimlinks_amazon_text.value = '';
		
	skimlinks_amazon_text.onfocus = function() { 
		skimlinks_amazon_text.style.background = '#ffffff';
	};
	
	skimlinks_amazon_text.onblur = function() { 
		if (skimlinks_amazon_text.value === '') { 
			skimlinks_amazon_text.style.background = '#FFFFFF url("' + imgurl + '") left no-repeat';
		}
	};
	
	window.skimlinksGetID = skimlinksGetID;
	
})(); 
