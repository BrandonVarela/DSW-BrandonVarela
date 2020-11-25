//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#005883"; colorText="#333333"; colorSele="#F0B429";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Narrow', sans-serif";
var fActi="'Arial Narrow', sans-serif";
var fEnun="'Arial Narrow', sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#28B9A4"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1ZBNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["d2lkdGg", "QW5jaG8gZGUgdW4gZWxlbWVudG8"],["aGVpZ3Ro", "QWx0byBkZSB1biBlbGVtZW50bw"],["dmVydGljYWwtYWxpZ24", "QWxpbmVhbWllbnRvIHZlcnRpY2FsIGRlbnRybyBkZSB1biBlbGVtZW50bw"],["bWFyZ2lu", "RXNwYWNpbyBxdWUgc2UgYfFhZGUgZW50cmUgZWwgZWxlbWVudG8geSBzdXMgdmVjaW5vcw"],["cGFkZGluZw", "RXNwYWNpbyBlbiBlbnRyZSBlbCBib3JkZSB5IGVsIGNvbnRlbmlkbyBkZWwgZWxlbWVudG8"],["Zm9udC1mYW1pbHk", "VGlwbyBkZSBsZXRyYQ"],["Zm9udC1zaXpl", "VGFtYfFvIGRlIGxldHJh"],["Zm9udC13ZWlnaHQ", "UGVzbyAobm9ybWFsLCBuZWdyaXRhLCCFKQ"],["Zm9udC1zdHlsZQ", "RXN0aWxvIChub3JtYWwsIGN1cnNpdmEsIIUp"],["dGV4dC1kZWNvcmF0aW9u", "k0RlY29yYWNpb25lc5QgY29tbyBzdWJyYXlhZG8sIHRhY2hhZG8sIGV0Yy4"],["dGV4dC1hbGlnbg", "QWxpbmVhY2nzbiBkZWwgdGV4dG8"],["dGV4dC10cmFuc2Zvcm0", "TW9zdHJhciB1biB0ZXh0byBlbiBtYXn6c2N1bGFzLCBtaW76c2N1bGFz"],["Y29sb3I", "Q29sb3IgZGVsIGVsZW1lbnRv"],["YmFja2dyb3VuZC1jb2xvcg", "Q29sb3IgZGVsIGZvbmRvIGRlbCBlbGVtZW50bw"],["YmFja2dyb3VuZC1pbWFnZQ", "UGVybWl0ZSBlc3BlY2lmaWNhciB1bmEgaW1hZ2VuIGRlIGZvbmRv"],["Ym94LXNoYWRvdw", "Q3JlYXIgdW4gZWZlY3RvIGRlIHNvbWJyYSBwYXJhIHVuIGVsZW1lbnRv"],["bGlzdC1zdHlsZS10eXBl", "RGlmZXJlbnRlcyBlc3RpbG9zIGRlIHZp8WV0YXMgeSBlc3RpbG9zIGRlIG51bWVyYWNp824gcGFyYSBlbGVtZW50b3MgZGUgbGlzdGE"],["Ym9yZGVy", "QfFhZGUgdW4gYm9yZGUgYSB1biBlbGVtZW50bw"],["Ym9yZGVyLXN0eWxl", "RXN0aWxvcyBwYXJhIGVsIGJvcmRlIChz82xpZG8sIHB1bnRvcywgZXRjLik"],["Ym9yZGVyLXJhZGl1cw", "UGVybWl0ZSBjcmVhciBlc3F1aW5hcyByZWRvbmRlYWRhcyBwYXJhIHVuIGVsZW1lbnRv"]];
var c=[[5,20],[6,19],[14,43],[6,52],[7,53],[11,13],[9,15],[11,27],[10,29],[15,48],[10,20],[14,42],[5,18],[16,28],[16,39],[10,42],[15,77],[6,28],[12,44],[13,51]];
var con1=["width","heigth","vertical-align","margin","padding","font-family","font-size","font-weight","font-style","text-decoration"];
var con2=["Ancho de un elemento","Alineamiento vertical dentro de un elemento","Espacio en entre el borde y el contenido del elemento","Espacio que se añade entre el elemento y sus vecinos","Alto de un elemento","Tipo de letra","Tamaño de letra","Peso (normal, negrita, …)","Estilo (normal, cursiva, …)","“Decoraciones” como subrayado, tachado, etc."];
var con3=["text-align","text-transform","color","background-color","background-image","box-shadow","border-radius","list-style-type","border","border-style"];
var con4=["Alineación del texto","Mostrar un texto en mayúsculas, minúsculas","Color del elemento","Color del fondo del elemento","Permite especificar una imagen de fondo","Crear un efecto de sombra para un elemento","Permite crear esquinas redondeadas para un elemento","Diferentes estilos de viñetas y estilos de numeración para elementos de lista","Añade un borde a un elemento","Estilos para el borde (sólido, puntos, etc.)"];
var sel1=""; join1=[]; join2=[];
