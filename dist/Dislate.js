const M=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const a=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const O=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const T=window.enmity.modules.common.Navigation,ne=window.enmity.modules.common.NavigationNative,q=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet,ae=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const{components:t}=window.enmity;t.Alert;const te=t.Button;t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const L=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const U=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const ie=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const A=t.FormDivider;t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const m=t.FormRow,F=t.FormSection;t.FormSelect,t.FormSubLabel;const oe=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function re(i){window.enmity.plugins.registerPlugin(i)}function y(i){return window.enmity.assets.getIDByName(i)}const w={byProps:(...i)=>window.enmity.modules.filters.byProps(...i),byName:(i,c)=>window.enmity.modules.filters.byName(i,c),byTypeName:(i,c)=>window.enmity.modules.filters.byTypeName(i,c),byDisplayName:(i,c)=>window.enmity.modules.filters.byDisplayName(i,c)};function V(...i){return window.enmity.modules.bulk(...i)}function G(...i){return window.enmity.modules.getByName(...i)}window.enmity.modules.common;function se(i){return window.enmity.patcher.create(i)}var _="Dislate",H="1.3.8",le="Translates text into a desired language.",Y="development",ce=[{name:"acquite",id:"581573474296791211"}],ue="#ff1f84",me={name:_,version:H,description:le,release:Y,authors:ce,color:ue};const K=q.createStackNavigator(),{ThemeColorMap:p}=ae;var X=({name:i="Page",component:c=ie}={})=>{const l=B.createThemedStyleSheet({container:{backgroundColor:p.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:p.BACKGROUND_MOBILE_PRIMARY,color:p.TEXT_NORMAL},header:{backgroundColor:p.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:p.HEADER_PRIMARY},close:{color:p.HEADER_PRIMARY}});return a.createElement(ne.NavigationContainer,null,a.createElement(K.Navigator,{initialRouteName:i,style:l.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:l.cardStyle,headerStyle:l.header,headerTitleContainerStyle:l.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},a.createElement(K.Screen,{name:i,component:c,options:{headerTitleStyle:{color:"white"},headerLeft:()=>a.createElement(te,{color:l.close.color,title:"Close",onPress:()=>T.pop()}),...q.TransitionPresets.ModalSlideFromBottomIOS}})))},he={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokm\xE5l":"nb","bokm\xE5l, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function J(i,c,l){window.enmity.settings.set(i,c,l)}function j(i,c,l){return window.enmity.settings.get(i,c,l)}const de=G("StaticSearchBarContainer");var ge=()=>{const[i,c]=a.useState([]),[l,h]=a.useState([]);return a.useEffect(()=>{let u=Object.keys(he);c(u)},[]),a.createElement(a.Fragment,null,a.createElement(de,{placeholder:"Search Language",onChangeText:u=>h(u)}),a.createElement(L,null,i.filter(u=>u.includes(l)).map(u=>a.createElement(m,{label:u,onPress:()=>{J("Dislate","DislateLangTo",u),T.pop()}}))))};const ke=G("StaticSearchBarContainer");var ye=()=>{const[i,c]=a.useState([]),[l,h]=a.useState([]);return a.useEffect(()=>{c(["deepl","libre","yandex"])},[]),a.createElement(a.Fragment,null,a.createElement(ke,{placeholder:"Search Language",onChangeText:u=>h(u)}),a.createElement(L,null,i.filter(u=>u.includes(l)).map(u=>a.createElement(m,{label:u,onPress:()=>{J("Dislate","DislateLangEngine",u),T.pop()}}))))};const[be,we]=V(w.byProps("transitionToGuild"),w.byProps("setString"));var fe=({settings:i})=>{const c=y("ic_selection_checked_24px"),l=B.createThemedStyleSheet({icon:{color:M.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:M.ThemeColorMap.TEXT_MUTED}});return a.createElement(a.Fragment,null,a.createElement(L,null,a.createElement(F,{title:"Language Settings"},a.createElement(m,{label:"Current Language",leading:a.createElement(m.Icon,{style:l.icon,source:y("Check")}),trailing:()=>{var h;return a.createElement(U,{style:l.item},(h=j("Dislate","DislateLangTo","japanese"))!=null?h:"N/A")},onPress:()=>{T.push(X,{component:ge,name:"Dislate: Language"})}}),a.createElement(A,null),a.createElement(m,{label:"Current Engine",leading:a.createElement(m.Icon,{style:l.icon,source:y("Check")}),trailing:()=>{var h;return a.createElement(U,{style:l.item},(h=j("Dislate","DislateLangEngine","deepl"))!=null?h:"N/A")},onPress:()=>{T.push(X,{component:ye,name:"Dislate: Engines"})}})),a.createElement(A,null),a.createElement(F,{title:"Disable Entire Plugin"},a.createElement(m,{label:"Disable Plugin",leading:a.createElement(m.Icon,{style:l.icon,source:y("ic_rulebook_16px")}),trailing:a.createElement(oe,{value:i.getBoolean("masterDisable",!1),onValueChange:()=>{i.toggle("masterDisable",!1),O.open({content:`Successfully ${i.getBoolean("masterDisable",!1)?"disabled":"enabled"} ${_}.`,source:c})}})})),a.createElement(A,null),a.createElement(F,{title:"Source Code"},a.createElement(m,{label:"Download",subLabel:`Copy the link of ${_} to Clipboard`,leading:a.createElement(m.Icon,{style:l.icon,source:y("toast_copy_link")}),trailing:m.Arrow,onPress:()=>{we.setString("https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js"),O.open({content:"Copied to clipboard",source:y("pending-alert")})}}),a.createElement(m,{label:"Source",subLabel:`Open the Repo of ${_} Externally`,leading:a.createElement(m.Icon,{style:l.icon,source:y("ic_leave_stage")}),trailing:m.Arrow,onPress:()=>{be.openURL("https://github.com/acquitelol/dislate")}})),a.createElement(m,{label:`Plugin Version: ${H}
Release Channel: ${Y}`})))},Q=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},W={exports:{}};(function(i,c){(function(l,h){i.exports=h()})(Q,function(){var l=["aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"],h={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},u={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokm\xE5l":"nb","bokm\xE5l, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"},v=n=>{if(typeof n!="string")throw new Error(`The "language" must be a string, received ${typeof n}`);if(n.length>100)throw new Error(`The "language" is too long at ${n.length} characters`);if(n=n.toLowerCase(),n=u[n]||h[n]||n,!l.includes(n))throw new Error(`The language "${n}" is not part of the ISO 639-1`);return n};function N(){var n=Object.create(null);this.put=function(o,s,e,d){if(typeof e!="undefined"&&(typeof e!="number"||isNaN(e)||e<=0))throw new Error("Cache timeout must be a positive number");if(typeof d!="undefined"&&typeof d!="function")throw new Error("Cache timeout callback must be a function");var f=n[o];f&&clearTimeout(f.timeout);var E={value:s,expire:e+Date.now()};return isNaN(E.expire)||(E.timeout=setTimeout(function(){r(o),d&&d(o,s)}.bind(this),e)),n[o]=E,s},this.del=function(o){var s=!0,e=n[o];return e?(clearTimeout(e.timeout),!isNaN(e.expire)&&e.expire<Date.now()&&(s=!1)):s=!1,s&&r(o),s};function r(o){delete n[o]}this.clear=function(){for(var o in n)clearTimeout(n[o].timeout);n=Object.create(null)},this.get=function(o){var s=n[o];if(typeof s!="undefined"){if(isNaN(s.expire)||s.expire>=Date.now())return s.value;delete n[o]}return null}}const k=new N;k.Cache=N;const z="https://translate.googleapis.com/translate_a/single";var x={fetch:({key:n,from:r,to:o,text:s})=>[`${z}?client=gtx&sl=${r}&tl=${o}&dt=t&q=${encodeURI(s)}`],parse:n=>n.json().then(r=>{if(r=r&&r[0]&&r[0][0]&&r[0].map(o=>o[0]).join(""),!r)throw new Error("Translation not found");return r})},C={needkey:!0,fetch:({key:n,from:r,to:o,text:s})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${n}&lang=${r}-${o}&text=${encodeURIComponent(s)}`,{method:"POST",body:""}],parse:n=>n.json().then(r=>{if(r.code!==200)throw new Error(r.message);return r.text[0]})};const g="https://libretranslate.com/translate";var P={needkey:!1,fetch:({url:n=g,key:r,from:o,to:s,text:e})=>{const d=JSON.stringify({q:e,source:o,target:s,api_key:r});return[n,{method:"POST",body:d,headers:{"Content-Type":"application/json"}}]},parse:n=>n.json().then(r=>{if(!r)throw new Error("No response found");if(r.error)throw new Error(r.error);if(!r.translatedText)throw new Error("No response found");return r.translatedText})},$={needkey:!0,fetch:({key:n,from:r,to:o,text:s})=>{const e=/:fx$/.test(n)?"-free":"";return s=encodeURIComponent(s),[`https://api${e}.deepl.com/v2/translate?auth_key=${n}&source_lang=${r}&target_lang=${o}&text=${s}`,{method:"POST",body:""}]},parse:async n=>{if(!n.ok)throw n.status===403?new Error("Auth Error, please review the key for DeepL"):new Error(`Error ${n.status}`);return n.json().then(r=>r.translations[0].text)}},b={google:x,yandex:C,libre:P,deepl:$};if(typeof fetch=="undefined")try{Q.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const D=function(n={}){if(!(this instanceof D))return new D(n);const r={from:"en",to:"en",cache:void 0,languages:v,engines:b,engine:"google",keys:{}},o=async(s,e={})=>{typeof e=="string"&&(e={to:e}),e.text=s,e.from=v(e.from||o.from),e.to=v(e.to||o.to),e.cache=e.cache||o.cache,e.engines=e.engines||{},e.engine=e.engine||o.engine,e.url=e.url||o.url,e.id=e.id||`${e.url}:${e.from}:${e.to}:${e.engine}:${e.text}`,e.keys=e.keys||o.keys||{};for(let S in o.keys)e.keys[S]=e.keys[S]||o.keys[S];e.key=e.key||o.key||e.keys[e.engine];const d=e.engines[e.engine]||o.engines[e.engine],f=k.get(e.id);if(f)return Promise.resolve(f);if(e.to===e.from)return Promise.resolve(e.text);if(d.needkey&&!e.key)throw new Error(`The engine "${e.engine}" needs a key, please provide it`);const E=d.fetch(e);return fetch(...E).then(d.parse).then(S=>k.put(e.id,S,e.cache))};for(let s in r)o[s]=typeof n[s]=="undefined"?r[s]:n[s];return o},I=new D;return I.Translate=D,I})})(W);var pe=W.exports;const[Te,Z,ve,Ee,ee]=V(w.byProps("setString"),w.byProps("openLazy","hideActionSheet"),w.byProps("getChannel","getDMFromUserId"),w.byProps("getMessage","getMessages"),w.byProps("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue")),R=se("dislate"),Se={...me,onStart(){const i=()=>{for(const c of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{ee.dispatch({type:c,message:{}})}catch(l){console.log(`[Dislate Local Error ${l}]`)}R.before(Z,"openLazy",(c,[l,h],u)=>{h==="MessageLongPressActionSheet"&&l.then(v=>{R.after(v,"default",(N,k,z)=>{var x,C;if(z.props.children.props.children.props.children[1][0].key=="1002")return;const g=Ee.getMessage(k[0].message.channel_id,k[0].message.id);if(!((C=(x=k[0])==null?void 0:x.message)!=null&&C.content))return;try{if(!k[0].edited_timestamp._isValid)return}catch{}const[P,$]=a.useState("");z.props.children.props.children.props.children[1].unshift(a.createElement(m,{key:"1002",label:"Translate",leading:a.createElement(m.Icon,{source:y("img_nitro_star")}),onPress:()=>{try{if(pe(g.content,{to:j("Dislate","DislateLangTo","japanese"),engine:j("Dislate","DislateLangEngine","deepl")}).then(b=>{$(b)}),!(g!=null&&g.editedTimestamp)||(g==null?void 0:g.editedTimestamp._isValid)){const b={type:"MESSAGE_UPDATE",message:{...g,edited_timestamp:"invalid_timestamp",content:`${P} \`[${j("Dislate","DislateLangTo","japanese")}]\``,guild_id:ve.getChannel(g.channel_id).guild_id},log_edit:!1};ee.dispatch(b)}Z.hideActionSheet()}catch(b){console.log(`[Dislate Local Error ${b}]`)}}}))})})})};setTimeout(()=>{i()},300)},onStop(){R.unpatchAll()},getSettingsPanel({settings:i}){return a.createElement(fe,{settings:i})}};re(Se);
