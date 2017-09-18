function start()
{
$('#content').html( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac leo pulvinar, aliquet odio nec, sollicitudin mi. In hac habitasse platea dictumst. Nunc sed mollis ante. Nulla neque turpis, dictum at diam nec, mattis sodales nulla. Donec commodo viverra efficitur. Curabitur vitae purus eu sapien suscipit malesuada. Etiam sed arcu aliquet, malesuada libero et, euismod risus. Vestibulum ultrices felis eu magna consectetur ornare. Etiam ac libero tellus.").hide().fadeIn(1000);
};
function omnie()
{
	$('#content').html("Duis rhoncus justo semper elit fringilla efficitur. Morbi eleifend faucibus ipsum, ut congue velit dictum sed. Phasellus quis dolor non velit blandit laoreet et egestas elit. Praesent vitae eros nisi. Proin dictum dui et aliquet placerat. Pellentesque rutrum odio at bibendum tristique. Vestibulum at suscipit neque, faucibus ornare lacus. Vivamus sed neque risus. Nam sed euismod ex. Etiam vitae leo porttitor quam dignissim euismod sit amet eu ipsum. Aliquam sed imperdiet lorem, et iaculis orci. Nunc varius elit ac libero sodales pharetra.").hide().fadeIn(1000);
};
function wyksztalcenie()
{
	$('#content').html("Quisque diam sem, eleifend lacinia odio sit amet, semper placerat arcu. Ut aliquet aliquam nunc non tempus. Ut lobortis volutpat nisl, ac lacinia purus imperdiet ac. Proin id ullamcorper felis. Ut ac neque blandit, auctor urna id, tristique odio. Phasellus magna nibh, rutrum sit amet lobortis eget, pharetra aliquam dui. Donec ac tincidunt libero, ac eleifend turpis.").hide().fadeIn(1000);
};
function cv()
{
	$('#content').html("In nec consectetur arcu. Pellentesque non pharetra dui. Suspendisse mollis placerat mattis. Nam accumsan nunc eu libero sagittis, in egestas diam bibendum. Sed sagittis, tellus eget iaculis eleifend, diam justo varius est, non eleifend sapien ligula et tortor. Donec in neque ac lorem volutpat elementum. Mauris et nisl a eros tincidunt laoreet. Quisque vitae elementum metus, ut euismod eros. Vestibulum tristique, nisi at imperdiet consequat, neque purus consectetur orci, eget commodo ligula ante sed leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.").hide().fadeIn(1000);
};
function kontakt()
{
	$('#content').html("Quisque consectetur sit amet urna sed luctus. Suspendisse vel lorem aliquet, vehicula purus non, posuere nunc. Phasellus pharetra tortor ante, et tincidunt orci convallis eu. Mauris tincidunt, ligula et aliquet bibendum, lectus nunc laoreet ex, in mattis ex sem sit amet nisi. Maecenas elementum purus diam. Nulla in risus vestibulum, finibus lectus ut, varius est. Nulla enim urna, pharetra venenatis aliquam eget, semper et neque.").hide().fadeIn(1000);
};
function odliczanie()
{
var dzisiaj = new Date();

var dzien = dzisiaj.getDate();

var miesiac = dzisiaj.getMonth()+1;

var rok = dzisiaj.getFullYear();

var godzina = dzisiaj.getHours();
if (godzina<10) godzina = "0"+godzina;

var minuta = dzisiaj.getMinutes();
if (minuta<10) minuta = "0"+minuta;

var sekunda = dzisiaj.getSeconds();
if (sekunda<10) sekunda = "0"+sekunda;

$('#zegar').html(dzien +"."+ miesiac+"."+ rok +"|"+ godzina+":"+minuta+":"+sekunda);

 setTimeout("odliczanie()",1000);
}
