const{components:i}=window.enmity;i.Alert;const Oe=i.Button;i.FlatList;const He=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const ke=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const D=i.Text;i.TextInput,i.TouchableHighlight;const B=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const P=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const A=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const u=i.FormRow,ee=i.FormSection;i.FormSelect,i.FormSubLabel;const Ke=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function Xe(e){window.enmity.plugins.registerPlugin(e)}const p={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,a)=>window.enmity.modules.filters.byName(e,a),byTypeName:(e,a)=>window.enmity.modules.filters.byTypeName(e,a),byDisplayName:(e,a)=>window.enmity.modules.filters.byDisplayName(e,a)};function U(...e){return window.enmity.modules.bulk(...e)}function pe(...e){return window.enmity.modules.getByProps(...e)}function We(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const $=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const Se=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const q=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const te=window.enmity.modules.common.Storage,b=window.enmity.modules.common.Toasts,Ee=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const Je=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const j=window.enmity.modules.common.Navigation,Qe=window.enmity.modules.common.NavigationNative,_e=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ne=window.enmity.modules.common.StyleSheet,Ze=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function et(e){return window.enmity.patcher.create(e)}var m="Dislate",F="1.1.5",tt="Translates text into a desired language.",C="stable",De=[{name:"Acquite <3",id:"581573474296791211"}],S=[{download:"https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js",repo:"https://github.com/acquitelol/dislate",user:"https://github.com/acquitelol/"}],nt="#ff1f84",d={name:m,version:F,description:tt,release:C,authors:De,plugin:S,color:nt};const $e=_e.createStackNavigator(),{ThemeColorMap:N}=Ze;var Te=({name:e="Page",component:a=P}={})=>{const n=ne.createThemedStyleSheet({container:{backgroundColor:N.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:N.BACKGROUND_MOBILE_PRIMARY,color:N.TEXT_NORMAL},header:{backgroundColor:N.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:N.HEADER_PRIMARY},close:{color:N.HEADER_PRIMARY}});return o.createElement(Qe.NavigationContainer,null,o.createElement($e.Navigator,{initialRouteName:e,style:n.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:n.cardStyle,headerStyle:n.header,headerTitleContainerStyle:n.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement($e.Screen,{name:e,component:a,options:{headerTitleStyle:{color:"white"},headerLeft:()=>o.createElement(Oe,{color:n.close.color,title:"Close",onPress:()=>{j.pop()}}),..._e.TransitionPresets.ModalSlideFromBottomIOS}})))},T={detect:"auto",afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese_simplified:"zh-cn",chinese_traditional:"zh-tw",church_slavic:"cu",old_slavonic:"cu",church_slavonic:"cu",old_bulgarian:"cu",old_church_slavonic:"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr",western_frisian:"fy",fulah:"ff",georgian:"ka",gaelic:"gd",scottish_gaelic:"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht",haitian_creole:"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi",hiri_motu:"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io",sichuan_yi:"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk",central_khmer:"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv",south_ndebele:"nr",north_ndebele:"nd",ndonga:"ng",nepali:"ne",norwegian_nynorsk:"nn",norwegian_bokm\u00E5l:"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl",northern_sami:"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, Southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function V(e,a,n){window.enmity.settings.set(e,a,n)}function v(e,a,n){return window.enmity.settings.get(e,a,n)}function ae(e,a,n){return window.enmity.settings.getBoolean(e,a,n)}var at=["auto","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh-cn","zh-tw","zu"],ot={auto:"auto",aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chis:"zh-cn",chit:"zh-tw",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},oe=e=>{if(typeof e!="string")throw new Error(`The "language" must be a string, received ${typeof e}`);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=T[e]||ot[e]||e,!at.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function xe(){var e=Object.create(null);this.put=function(n,r,t,c){if(typeof t!="undefined"&&(typeof t!="number"||isNaN(t)||t<=0))throw new Error("Cache timeout must be a positive number");if(typeof c!="undefined"&&typeof c!="function")throw new Error("Cache timeout callback must be a function");var h=e[n];h&&clearTimeout(h.timeout);var s={value:r,expire:t+Date.now()};return isNaN(s.expire)||(s.timeout=setTimeout(function(){a(n),c&&c(n,r)}.bind(this),t)),e[n]=s,r},this.del=function(n){var r=!0,t=e[n];return t?(clearTimeout(t.timeout),!isNaN(t.expire)&&t.expire<Date.now()&&(r=!1)):r=!1,r&&a(n),r};function a(n){delete e[n]}this.clear=function(){for(var n in e)clearTimeout(e[n].timeout);e=Object.create(null)},this.get=function(n){var r=e[n];if(typeof r!="undefined"){if(isNaN(r.expire)||r.expire>=Date.now())return r.value;delete e[n]}return null}}const re=new xe;re.Cache=xe;const rt="https://translate.googleapis.com/translate_a/single";var it={fetch:({key:e,from:a,to:n,text:r})=>[`${rt}?client=gtx&sl=${a}&tl=${n}&dt=t&q=${encodeURI(r)}`],parse:e=>e.json().then(a=>{if(a=a&&a[0]&&a[0][0]&&a[0].map(n=>n[0]).join(""),!a)throw new Error("Translation not found");return a})},st={google:it};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const G=function(e={}){if(!(this instanceof G))return new G(e);const a={from:"auto",to:"ja",cache:void 0,languages:oe,engines:st,engine:"google",keys:{}},n=(r,t={})=>{typeof t=="string"&&(t={to:t}),t.text=r,t.from=oe(t.from||n.from),t.to=oe(t.to||n.to),t.cache=t.cache||n.cache,t.engines=t.engines||{},t.engine=t.engine||n.engine,t.url=t.url||n.url,t.id=t.id||`${t.url}:${t.from}:${t.to}:${t.engine}:${t.text}`,t.keys=t.keys||n.keys||{};for(let E in n.keys)t.keys[E]=t.keys[E]||n.keys[E];t.key=t.key||n.key||t.keys[t.engine];const c=t.engines[t.engine]||n.engines[t.engine],h=re.get(t.id);if(h)return Promise.resolve(h);if(t.to===t.from)return Promise.resolve(t.text);if(c.needkey&&!t.key)throw new Error(`The engine "${t.engine}" needs a key, please provide it`);const s=c.fetch(t);return fetch(...s).then(c.parse).then(E=>re.put(t.id,E,t.cache))};for(let r in a)n[r]=typeof e[r]=="undefined"?a[r]:e[r];return n},ie=new G;ie.Translate=G;async function Le(e,a,n){return a?await ie(e,{from:T[a],to:T[n]}):await ie(e,T[n])}const w=e=>e.split("_").map(a=>a[0].toUpperCase()+a.slice(1)).join(" "),R=e=>{let a=0;for(let n in e)a++;return a},lt=e=>{let a=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return a[0]=`{${a[0]}`,a[R(a)]=`${a[R(a)]}}`,a=a.join(""),a=a.replaceAll("undefined",""),a=a.split("").reverse().join("").replace(",","").split("").reverse().join(""),a};async function Fe(){try{let e=await te.getItem("device_list");if(e)return JSON.parse(e);let a=(await Je.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=lt(a);te.setItem("device_list",n);let r=await te.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[${m} Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function se(e,a){let n=await Fe();return`**[${m}] Debug Information**
> **Plugin Version:** ${e}
> **Release Channel:** ${a}
> **Software Version:** ${q.DCDDeviceManager.systemVersion}
> **Device:** ${n[q.DCDDeviceManager.device]}`}function f(e){return window.enmity.assets.getIDByName(e)}const l={Translate:f("img_nitro_star"),Revert:f("ic_highlight"),Debug:f("debug"),Retry:f("ic_message_retry"),Failed:f("Small"),Cancel:f("ic_megaphone_nsfw_16px"),Copy:f("toast_copy_link"),Open:f("ic_leave_stage"),Clipboard:f("pending-alert"),Debug_Command:{Sent:f("ic_application_command_24px"),Clock:f("clock")},Settings:{Toasts:{Context:f("toast_image_saved"),Settings:f("ic_selection_checked_24px")},Translate_From:f("ic_raised_hand"),Translate_To:f("ic_activity_24px"),Debug:f("ic_rulebook_16px")}},Y=e=>{b.open({content:`Copied ${e} to clipboard.`,source:l.Clipboard})},ct=()=>({message_spoofer:"69",copy_embed:"1337",invis_chat:"420",dislate:"1002"}),x=(e,a,n)=>{try{if(!e)return;let r=R(e);for(let t=0;t<r;t++)if(n(e[t],t,n))return e[t];return}catch(r){console.warn(`[${m}] The following error happened when trying to find an item in ${a}: ${r}`)}},ut=(e,a,n,r)=>{try{if(!e)return;let t=R(e),c=a,h=n;t++,h++;for(let s=t-1;s>=h;s--)e[s]=e[s-1];e[h-1]=c;return}catch(t){console.warn(`[${m}] The following error happened when trying to use the insert method at ${r}: ${t}`);return}},mt=(e,a)=>{let n=e.length;return e[n]=a,n++,e.length=n,n},dt=(e,a)=>{for(let n=0;n<R(e);n++)a(e[n],n,e)},gt=(e,a)=>{const n=[];for(let r=0;r<R(e);r++)mt(n,a(e[r],r,e));return n};async function ht(){let e=q.DCDDeviceManager.device,a=await Fe();e.includes("iPhone")&&(e=e.replace("iPhone",""),e=e.replace(",","."),(parseFloat(e)<10.6&&parseFloat(e)!=10.3||parseFloat(e)==14.6||parseFloat(e)==12.8)&&Ee.show({title:"Incompatible iPhone",body:`Please note that you're on an${a[q.DCDDeviceManager.device]}.
Some features of ${m} may behave in an unexpected manner.`,confirmText:"I understand"}))}const ft=We("StaticSearchBarContainer"),yt=u.Arrow;var Ne=()=>{const[e,a]=o.useState([]),[n,r]=o.useState([]);return o.useEffect(()=>{let t=Object.keys(T);a(t)},[]),o.createElement(o.Fragment,null,o.createElement(ft,{placeholder:"Search Language",onChangeText:t=>r(t)}),o.createElement(ke,null,e.filter(t=>t.includes(n)).map(t=>v("Dislate","DislateLangFilter")&&t=="detect"?o.createElement(o.Fragment,null):o.createElement(u,{label:w(t),trailing:yt,onPress:()=>{v(m,"DislateLangFilter")?V("Dislate","DislateLangTo",t):V("Dislate","DislateLangFrom",t),b.open({content:`Set ${T[t].toUpperCase()} as Language to Translate ${v("Dislate","DislateLangFilter")?"to":"from"}.`,source:v("Dislate","DislateLangFilter")?l.Settings.Translate_To:l.Settings.Translate_From}),j.pop()}}))))};const O=window.enmity.modules.common.Components.General.Animated,[le,wt]=U(p.byProps("transitionToGuild"),p.byProps("setString"));var bt=()=>{const e=ne.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:$.ThemeColorMap.HEADER_PRIMARY,fontFamily:$.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:$.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),a=o.useRef(new O.Value(1)).current,n=()=>{O.spring(a,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{O.spring(a,{toValue:1,duration:250,useNativeDriver:!0}).start()},t=()=>{le.openURL(S[0].repo)},c={transform:[{scale:a}]};return o.createElement(o.Fragment,null,o.createElement(P,{style:e.container},o.createElement(B,{onPress:t,onPressIn:n,onPressOut:r},o.createElement(O.View,{style:[c]},o.createElement(He,{style:[e.image],source:{uri:"https://i.imgur.com/rl1ga06.png"}}))),o.createElement(P,{style:e.text_container},o.createElement(B,{onPress:()=>{le.openURL(S[0].repo)}},o.createElement(D,{style:[e.main_text,e.header]},m," ")),o.createElement(P,{style:{flexDirection:"row"}},o.createElement(D,{style:[e.main_text,e.sub_header]},"A project by"),o.createElement(B,{onPress:()=>{le.openURL(S[0].user)}},o.createElement(D,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:$.Fonts.DISPLAY_BOLD}]},De[0].name))),o.createElement(P,null,o.createElement(B,{style:{flexDirection:"row"},onPress:()=>{wt.setString(se(F,C)),Y("debug information")}},o.createElement(D,{style:[e.main_text,e.sub_header]},"Version:"),o.createElement(D,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:$.Fonts.DISPLAY_BOLD}]},F," "))))))};const[vt,Re]=U(p.byProps("transitionToGuild"),p.byProps("setString"));var kt=({settings:e})=>{const a=l.Settings.Toasts.Settings,n=ne.createThemedStyleSheet({icon:{color:$.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:$.ThemeColorMap.TEXT_MUTED}}),[r,t]=o.useState(),[c,h]=o.useState();return o.createElement(o.Fragment,null,o.createElement(ke,{onTouchStart:s=>{t(s.nativeEvent.pageX),h(s.nativeEvent.pageY)},onTouchEnd:s=>{r-s.nativeEvent.pageX<-100&&c-s.nativeEvent.pageY<40&&c-s.nativeEvent.pageY>-40&&j.pop()}},o.createElement(bt,null),o.createElement(ee,{title:"Language"},o.createElement(u,{label:"Translate From",leading:o.createElement(u.Icon,{style:n.icon,source:l.Settings.Translate_From}),trailing:()=>{var s;return o.createElement(D,{style:n.item},(s=w(v(m,"DislateLangFrom","detect")))!=null?s:"N/A")},onPress:()=>{V(m,"DislateLangFilter",!1),j.push(Te,{component:Ne,name:"Dislate: Language From"})}}),o.createElement(A,null),o.createElement(u,{label:"Translate To",leading:o.createElement(u.Icon,{style:n.icon,source:l.Settings.Translate_To}),trailing:()=>{var s;return o.createElement(D,{style:n.item},(s=w(v(m,"DislateLangTo","japanese")))!=null?s:"N/A")},onPress:()=>{V(m,"DislateLangFilter",!0),j.push(Te,{component:Ne,name:"Dislate: Language To"})}})),o.createElement(A,null),o.createElement(ee,{title:"Utility"},o.createElement(u,{label:"Initialisation Toasts",leading:o.createElement(u.Icon,{style:n.icon,source:l.Settings.Toasts.Context}),subLabel:`Enable Toasts to display Loading State of ${m}`,trailing:o.createElement(Ke,{value:e.getBoolean("toastEnable",!1),onValueChange:()=>{e.toggle("toastEnable",!1),b.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:a})}})}),o.createElement(A,null),o.createElement(u,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${m} to clipboard.`,leading:o.createElement(u.Icon,{style:n.icon,source:l.Settings.Debug}),trailing:u.Arrow,onPress:async function(){Re.setString(await se(F,C)),Y("debug information")}})),o.createElement(A,null),o.createElement(ee,{title:"Source"},o.createElement(u,{label:"Download",subLabel:`Copy the link of ${m} to Clipboard`,leading:o.createElement(u.Icon,{style:n.icon,source:l.Copy}),trailing:u.Arrow,onPress:()=>{Re.setString(`${S[0].download}?${Math.floor(Math.random()*1001)}.js`),Y("download link")}}),o.createElement(u,{label:"Source",subLabel:`Open the Repo of ${m} Externally`,leading:o.createElement(u.Icon,{style:n.icon,source:l.Open}),trailing:u.Arrow,onPress:()=>{vt.openURL(S[0].repo)}})),o.createElement(u,{label:`Plugin Version: ${F}
Release Channel: ${C}`})))};function pt(e,a,n,r){window.enmity.clyde.sendReply(e,a,n,r)}var Pe;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Pe||(Pe={}));var H;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(H||(H={}));var K;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(K||(K={}));var je;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(je||(je={}));var z;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(z||(z={}));var Ce;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Ce||(Ce={}));let St=gt(Object.keys(T),e=>({name:w(e),displayName:w(e),value:e}));const Et={id:"translate",name:"translate",displayName:"translate",description:"Send a message in the language chosen.",displayDescription:"Send a message in the language chosen.",type:H.Chat,inputType:K.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to send translated",displayDescription:"Text to send translated",type:z.String,required:!0},{name:"language",displayName:"language",description:"Language that it will translate to.",displayDescription:"The Language that Dislate will translate into.",type:z.String,choices:[...St.filter(e=>e.name!=="Detect")],required:!0}],execute:async function(e,a){let n=x(e,"translate text",t=>t.name=="text").value,r=x(e,"translate language",t=>t.name=="language").value;Le(n,v(m,"DislateLangFrom","detect"),r).then(t=>t?(Ee.show({title:"Are you sure?",body:`The message about to be sent is:
\`${t}\`
Are you sure you want to send this?`,confirmText:"Yeah, send it",cancelText:"Nope, don't send it",onConfirm:()=>{Se.sendMessage(a.channel.id,{content:t}),b.open({content:`Sent message in ${w(r)}.`,source:l.Translate})},onCancel:()=>{b.open({content:"Cancelled translated message request.",source:l.Cancel})}}),{}):(pt(a.channel.id,"Failed to send Translated Message."),{}))}},[_t,Dt]=U(p.byProps("transitionToGuild"),p.byProps("setString"));let ce=m.toLowerCase();const $t={id:`${ce}`,name:`${ce}`,displayName:`${ce}`,description:`Choose from a list of options for debugging in ${m}`,displayDescription:`Choose from a list of options for debugging in ${m}`,type:H.Chat,inputType:K.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute",displayDescription:"The type of command to execute",type:z.String,choices:[{name:w("debug"),displayName:w("debug"),value:"debug"},{name:w("download"),displayName:w("download"),value:"download"},{name:w("repo"),displayName:w("repo"),value:"repo"}],required:!0}],execute:async function(e,a){var n;let r=e.find(h=>h.name=="type").value;const t={debug:async function(){Se.sendMessage(a.channel.id,{content:await se(F,C)}),b.open({content:"Sent debug info in current channel.",source:l.Debug_Command.Sent})},download:()=>{Dt.setString(`${S[0].download}?${Math.floor(Math.random()*1001)}.js`),Y("download link")},repo:()=>{_t.openURL(S[0].repo)}},c=()=>{b.open({content:"Invalid command argument.",source:l.Debug_Command.Clock})};return((n=t[r])!=null?n:c)(),{}}},[ue,ze]=U(p.byProps("openLazy","hideActionSheet"),p.byProps("getChannel","getDMFromUserId")),me=et("dislate");var Tt=(e=>(e[e.Translate=0]="Translate",e[e.Revert=1]="Revert",e))(Tt||{});let X=[{invalid_id:"acquite sucks"}];const xt={...d,commands:[],patches:[],onStart(){this.commands=[Et,$t];let e=0,a=3;async function n(){try{e++;let r=ae(d.name,"toastEnable",!1);const t=pe("getMessage","getMessages");await ht();const c=pe("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");for(const h of["MESSAGE_UPDATE"])try{c.dispatch({type:h,message:{}})}catch(s){console.log(`[${d.name} Local Error ${s}]`)}console.log(`[${d.name}] delayed start attempt ${e}/${a}.`),r&&b.open({content:`[${d.name}] start attempt ${e}/${a}.`,source:l.Debug});try{me.before(ue,"openLazy",(h,[s,E],Lt)=>{E==="MessageLongPressActionSheet"&&s.then(W=>{let Me=W.default;return W.default=({message:de,user:Ie,channel:ge,canAddNewReactions:Be},Ae)=>{var he,fe,ye,we,be;let _=Me({message:de,user:Ie,channel:ge,canAddNewReactions:Be},Ae);const M=ct(),[I,ve]=o.useState(0);if(!_.props)return console.log(`[${d.name} Local Error: Property "Props" Does not Exist on "res"]`),_;let L=(be=(we=(ye=(fe=(he=_==null?void 0:_.props)==null?void 0:he.children)==null?void 0:fe.props)==null?void 0:ye.children)==null?void 0:we.props)==null?void 0:be.children[1];if(!L)return console.log(`[${d.name} Local Error: 'finalLocation' seems to be undefined!]`),_;const[Ue,J]=o.useState(0);o.useEffect(()=>{dt(Object.values(M),g=>{x(L,"external plugin list",y=>{if(y.key!==M.dislate)return y.key===g})&&J(y=>y+1)}),x(L,"reply button",g=>{var y;return((y=g.props)==null?void 0:y.message)==="Reply"})&&J(g=>g+1),x(L,"edit message button",g=>{var y;return((y=g.props)==null?void 0:y.message)==="Edit Message"})&&J(g=>g+1)},[]);const k=t.getMessage(ge.id,de.id);if(!k.content)return console.log(`[${d.name}] No message content.`),_;const Q=k.id,qe=k.content,Z=x(X,"cache object",g=>Object.keys(g)[0]===Q);o.useEffect(()=>{ve(Z?1:0)},ve);const Ve=o.createElement(u,{key:M.dislate,label:`${I===0?"Translate":"Revert"}`,leading:o.createElement(u.Icon,{source:I===0?l.Translate:l.Revert}),onPress:()=>{try{if(I===0){const g=v(d.name,"DislateLangFrom","detect"),y=v(d.name,"DislateLangTo","japanese");Le(k.content,g,y).then(Ge=>{const Ye={type:"MESSAGE_UPDATE",message:{...k,content:`${Ge} \`[${w(y)}]\``,guild_id:ze.getChannel(k.channel_id).guild_id},log_edit:!1};c.dispatch(Ye),b.open({content:`Modified message to ${w(v(d.name,"DislateLangTo","japanese"))}.`,source:l.Translate}),X.unshift({[Q]:qe})}),ue.hideActionSheet()}else if(I===1){const g={type:"MESSAGE_UPDATE",message:{...k,content:Z[Q],guild_id:ze.getChannel(k.channel_id).guild_id},log_edit:!1};c.dispatch(g),b.open({content:"Reverted message back to original state.",source:l.Translate}),X=X.filter(y=>y!==Z),ue.hideActionSheet()}}catch(g){console.log(`[Dislate Local Error ${g}]`)}}});return x(L,"existing key of dislate",g=>g.key===M.dislate)||ut(L,Ve,Ue,"insert translate button"),_},W})})}catch(h){console.log(`[${d.name} Local Error ${h}]`),ae(d.name,"toastEnable",!1)&&b.open({content:`[${d.name}] failed to open action sheet.`,source:l.Retry})}}catch(r){console.log(`[${d.name} Local Error ${r}]`);let t=ae(d.name,"toastEnable",!1);e<a?(console.warn(`[${d.name}] failed to start. Trying again in ${e}0s.`),t&&b.open({content:`[${d.name}] failed to start. Trying again in ${e}0s.`,source:l.Retry}),setTimeout(n,e*1e4)):(console.error(`[${d.name}] failed to start. Giving up.`),t&&b.open({content:`[${d.name}] failed to start. Giving up.`,source:l.Failed}))}}setTimeout(()=>{n(),this.patches.push(me)},500)},onStop(){this.commands=[],this.patches=[],me.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(kt,{settings:e})}};Xe(xt);
