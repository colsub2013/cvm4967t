$('.btn-lock').hover(
function(){
	$(this).removeClass('mod-btn btn-lock');
	$(this).addClass('mod-btn btn-unlock');
},
function(){
	$(this).removeClass('mod-btn btn-unlock');
	$(this).addClass('mod-btn btn-lock');		
});

$('.btn-unlock').hover(
function(){
	$(this).removeClass('mod-btn btn-unlock');
	$(this).addClass('mod-btn btn-lock');
},
function(){
	$(this).removeClass('mod-btn btn-lock');
	$(this).addClass('mod-btn btn-unlock');		
});	