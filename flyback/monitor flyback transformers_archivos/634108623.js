if (typeof window.awf_Form_=='undefined') window.awf_Form_ = new Object();
awf_Form_.isPreview = false;
awf_Form_.setCookie = function(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

awf_Form_.getCookie = function(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else
        begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}
awf_Form_.showForm = function() {
    /*@cc_on
    /*@if (@_jscript_version > 5.5)
           var isIE = true;
      @else
           var deprecatedBrowser = true;
      @end @*/
    if (typeof isIE == 'undefined') {
        var isIE = false;
    }
    if (!isIE && !window.XMLHttpRequest) {
        var deprecatedBrowser = true;
    }
    if (deprecatedBrowser) {
       window.open('http://forms.aweber.com/form/23/634108623.html','winPopUp','resizable=1,scrollbars=1,location=0,width=353,height=736');
       return true;
    }
    // Exit early for TY Landing Page option
    if (document.location.href.indexOf('meta_web_form_id') > 0) return;

    if (typeof awf_Form_.scriptAppended=='undefined') {
        try {
            var script = document.createElement('script');
            script.src = "http://forms.aweber.com/form/styled_popovers_and_lightboxes.js";
            script.type = 'text/javascript';
            document.getElementsByTagName('HEAD')[0].appendChild(script);
        } catch(e) {
            //IE5 for Mac and IE timeout issues
            try {
                document.write('<script type="text/javascript" src="' + src + '"></scr'+'ipt>');
            } catch(e) { }
        }
        awf_Form_.scriptAppended = true;
    }
    var loadForm = function() {
        awf_Form_.form = new awf_Form_.AWFormGenerator( {"_log":null,"id":"634108623","form":"<form method=\"post\" class=\"af-form-wrapper\" action=\"http:\/\/www.aweber.com\/scripts\/addlead.pl\" target=\"_new\" >\n<div style=\"display: none;\">\n<input type=\"hidden\" name=\"meta_web_form_id\" value=\"634108623\" \/>\n<input type=\"hidden\" name=\"meta_split_id\" value=\"\" \/>\n<input type=\"hidden\" name=\"listname\" value=\"erepairguide\" \/>\n<input type=\"hidden\" name=\"redirect\" value=\"http:\/\/www.electronicrepairguide.com\/thank-you.html\" id=\"redirect_b86795b6e119d26a5cee8ebfc0260ce2\" \/>\n\n<input type=\"hidden\" name=\"meta_adtracking\" value=\"New_Form_634108623\" \/>\n<input type=\"hidden\" name=\"meta_message\" value=\"1\" \/>\n<input type=\"hidden\" name=\"meta_required\" value=\"email\" \/>\n\n<input type=\"hidden\" name=\"meta_tooltip\" value=\"\" \/>\n<\/div>\n<div id=\"af-form-634108623\" class=\"af-form\"><div id=\"af-body-634108623\"  class=\"af-body af-standards\">\n<div class=\"af-element\" style=\"text-align: Center;\">\n<img src=\"http:\/\/www.electronicrepairguide.com\/successreport.jpg\" alt=\"New Graphic\" \/>\n<div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element\">\n<div class=\"bodyText\"><p><span style=\"font-size: 14px;\"><span style=\"background-color: #ffff00;\">Sign up to receive my Free&nbsp;report <strong>\"How To Be A Successful Electronics Repairer\"<\/strong> <\/span>Your email  address  will  remain completely private and will never be given away for  any   purpose, EVER.<\/span><\/p><\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element\">\n<label class=\"previewLabel\" for=\"awf_field-32809883\">Email<\/label>\n<div class=\"af-textWrap\"><input class=\"text\" id=\"awf_field-32809883\" type=\"text\" name=\"email\" value=\"\" tabindex=\"500\"  \/>\n<\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element\">\n<label class=\"previewLabel\" for=\"awf_field-32809884\">Name<\/label>\n<div class=\"af-textWrap\">\n<input id=\"awf_field-32809884\" type=\"text\" name=\"name\" class=\"text\" value=\"\"  tabindex=\"501\" \/>\n<\/div>\n<div class=\"af-clear\"><\/div><\/div>\n<div class=\"af-element\">\n<div class=\"bodyText\"><center><\/center><\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element buttonContainer\">\n<input name=\"submit\" id=\"af-submit-image-634108623\" type=\"image\" class=\"image\" style=\"background: none;\" alt=\"Submit Form\" src=\"http:\/\/www.aweber.com\/images\/forms\/sign-up-below\/big-red\/button.png\" tabindex=\"502\" \/>\n<div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element privacyPolicy\" style=\"text-align: center\"><p>We respect your <a title=\"Privacy Policy\" href=\"http:\/\/www.aweber.com\/permission.htm\" target=\"_blank\">email privacy<\/a><\/p>\n<div class=\"af-clear\"><\/div>\n<\/div>\n<\/div>\n<div id=\"af-footer-634108623\" class=\"af-footer\"><div class=\"bodyText\"><p>&nbsp;<\/p><\/div><\/div>\n<\/div>\n<\/form>\n","styles":"#af-form-634108623 .af-body .af-textWrap{width:98%;display:block;float:none;}\n#af-form-634108623 .af-body .privacyPolicy{color:#000000;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .af-body a{color:#AA0101;text-decoration:underline;font-style:normal;font-weight:normal;}\n#af-form-634108623 .af-body input.text, #af-form-634108623 .af-body textarea{background-color:#FFFFFF;border-color:#000000;border-width:1px;border-style:solid;color:#000000;text-decoration:none;font-style:normal;font-weight:normal;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .af-body input.text:focus, #af-form-634108623 .af-body textarea:focus{background-color:#FFFFFF;border-color:#AA0101;border-width:1px;border-style:solid;}\n#af-form-634108623 .af-body label.previewLabel{display:block;float:none;text-align:left;width:auto;color:#000000;text-decoration:none;font-style:normal;font-weight:normal;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .af-body{padding-bottom:15px;background-repeat:no-repeat;background-position:inherit;background-image:none;color:#000000;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .af-footer{padding-right:15px;padding-left:15px;background-color:#transparent;border-width:1px;border-bottom-style:none;border-left-style:none;border-right-style:none;border-top-style:none;color:#000000;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}\n#af-form-634108623 .af-quirksMode{padding-right:15px;padding-left:15px;}\n#af-form-634108623 .af-standards .af-element{padding-right:15px;padding-left:15px;}\n#af-form-634108623 .bodyText p{margin:1em 0;}\n#af-form-634108623 .buttonContainer input.submit{background-color:#0479c2;background-image:url(\"http:\/\/forms.aweber.com\/images\/forms\/sign-up-below\/big-red\/button.png\");color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:14px;font-family:Verdana, sans-serif;}\n#af-form-634108623 .buttonContainer input.submit{width:auto;}\n#af-form-634108623 .buttonContainer{text-align:center;}\n#af-form-634108623 body,#af-form-634108623 dl,#af-form-634108623 dt,#af-form-634108623 dd,#af-form-634108623 h1,#af-form-634108623 h2,#af-form-634108623 h3,#af-form-634108623 h4,#af-form-634108623 h5,#af-form-634108623 h6,#af-form-634108623 pre,#af-form-634108623 code,#af-form-634108623 fieldset,#af-form-634108623 legend,#af-form-634108623 blockquote,#af-form-634108623 th,#af-form-634108623 td{float:none;color:inherit;position:static;margin:0;padding:0;}\n#af-form-634108623 button,#af-form-634108623 input,#af-form-634108623 submit,#af-form-634108623 textarea,#af-form-634108623 select,#af-form-634108623 label,#af-form-634108623 optgroup,#af-form-634108623 option{float:none;position:static;margin:0;}\n#af-form-634108623 div{margin:0;}\n#af-form-634108623 fieldset{border:0;}\n#af-form-634108623 form,#af-form-634108623 textarea,.af-form-wrapper,.af-form-close-button,#af-form-634108623 img{float:none;color:inherit;position:static;background-color:none;border:none;margin:0;padding:0;}\n#af-form-634108623 input,#af-form-634108623 button,#af-form-634108623 textarea,#af-form-634108623 select{font-size:100%;}\n#af-form-634108623 p{color:inherit;}\n#af-form-634108623 select,#af-form-634108623 label,#af-form-634108623 optgroup,#af-form-634108623 option{padding:0;}\n#af-form-634108623 table{border-collapse:collapse;border-spacing:0;}\n#af-form-634108623 ul,#af-form-634108623 ol{list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}\n#af-form-634108623,#af-form-634108623 .quirksMode{width:353px;}\n#af-form-634108623.af-quirksMode{overflow-x:hidden;}\n#af-form-634108623{background-color:#FFFFFF;border-color:#CFCFCF;border-width:1px;border-style:none;}\n#af-form-634108623{display:block;}\n.af-body .af-textWrap{text-align:left;}\n.af-body input.image{border:none!important;}\n.af-body input.submit,.af-body input.image,.af-form .af-element input.button{float:none!important;}\n.af-body input.text{width:100%;float:none;padding:2px!important;}\n.af-body.af-standards input.submit{padding:4px 12px;}\n.af-clear{clear:both;}\n.af-element label{text-align:left;display:block;float:left;}\n.af-element{padding:5px 0;}\n.af-footer{margin-bottom:0;margin-top:0;padding:10px;}\n.af-form-wrapper{text-indent:0;}\n.af-form{text-align:left;margin:auto;}\n.af-quirksMode .af-element{padding-left:0!important;padding-right:0!important;}\n.dropShadowBottom634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-bottom.png) repeat-x;width:351px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowL634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-left.png) repeat-y;line-height:0;font-size:0;width:10px;height:100%;float:left;margin-bottom:0;}\n.dropShadowLL634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-bottomLeft.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowLR634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-bottomRight.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowR634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-right.png) repeat-y;width:10px;height:100%;float:right;margin-bottom:0;}\n.dropShadowTop634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-top.png) repeat-x;width:351px;height:10px!important;line-height:0;font-size:0;float:left;margin-bottom:0;padding:0;}\n.dropShadowUL634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-topLeft.png) no-repeat;width:10px;height:10px!important;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowUR634108623{background:url(http:\/\/forms.aweber.com\/images\/wfg\/drop-topRight.png) no-repeat;width:10px;line-height:0;font-size:0;height:10px!important;float:left;margin-bottom:0;padding:0;}\n.lbl-right .af-element label{text-align:right;}\nbody {\n}","height":"736","width":"353","plPath":"forms.aweber.com","delay":"30","popupURL":"http:\/\/forms.aweber.com\/form\/23\/634108623.html","formType":"popover","animation":"slide from left","redirectId":"redirect_b86795b6e119d26a5cee8ebfc0260ce2","returnToPage":0} );
    };
    if (typeof awf_Form_.AWFormGenerator == 'undefined') {
        var unique_track = new Image();
        unique_track.src = "http://forms.aweber.com/form/displays.htm?id=bMwsjAwcbEzM";
        if (typeof awf_Form_.FormQueue == 'undefined') { awf_Form_.FormQueue = []; }
        awf_Form_.FormQueue.push(loadForm);
    } else {
        var unique_track = new Image();
        unique_track.src = "http://forms.aweber.com/form/displays.htm?id=bMwsjAwcbEzM";
        loadForm();
    }
}

if ((awf_Form_.isPreview || !awf_Form_.getCookie('awpopup_634108623')) && typeof hide_awf_Form=='undefined') {
    awf_Form_.currDate = new Date();
    awf_Form_.currDate.setTime(awf_Form_.currDate.getTime() + 259200000);
    awf_Form_.setCookie('awpopup_634108623', '1', awf_Form_.currDate, '/', document.domain, 0);
    awf_Form_.showForm();
}
