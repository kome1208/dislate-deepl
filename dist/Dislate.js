const{components:r}=window.enmity;r.Alert;const He=r.Button;r.FlatList;const Xe=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const Ee=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const $=r.Text;r.TextInput,r.TouchableHighlight;const A=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const C=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const U=r.FormDivider;r.FormHint,r.FormIcon,r.FormInput,r.FormLabel,r.FormRadio;const c=r.FormRow,ne=r.FormSection;r.FormSelect,r.FormSubLabel;const Ke=r.FormSwitch;r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;function We(e){window.enmity.plugins.registerPlugin(e)}const p={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function q(...e){return window.enmity.modules.bulk(...e)}function Se(...e){return window.enmity.modules.getByProps(...e)}function Je(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const T=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const _e=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const G=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,Y=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const De=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const P=window.enmity.modules.common.Navigation,Qe=window.enmity.modules.common.NavigationNative,$e=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ae=window.enmity.modules.common.StyleSheet,Ze=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function et(e){return window.enmity.patcher.create(e)}var u="Dislate",E="1.1.6",tt="Translates text into a desired language.",j="stable",Te=[{name:"Acquite <3",id:"581573474296791211"}],S=[{download:"https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js",repo:"https://github.com/acquitelol/dislate",user:"https://github.com/acquitelol/"}],nt="#ff1f84",d={name:u,version:E,description:tt,release:j,authors:Te,plugin:S,color:nt};const xe=$e.createStackNavigator(),{ThemeColorMap:N}=Ze;var Le=({name:e="Page",component:t=C}={})=>{const a=ae.createThemedStyleSheet({container:{backgroundColor:N.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:N.BACKGROUND_MOBILE_PRIMARY,color:N.TEXT_NORMAL},header:{backgroundColor:N.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:N.HEADER_PRIMARY},close:{color:N.HEADER_PRIMARY}});return o.createElement(Qe.NavigationContainer,null,o.createElement(xe.Navigator,{initialRouteName:e,style:a.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:a.cardStyle,headerStyle:a.header,headerTitleContainerStyle:a.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement(xe.Screen,{name:e,component:t,options:{headerTitleStyle:{color:"white"},headerLeft:()=>o.createElement(He,{color:a.close.color,title:"Close",onPress:()=>{P.pop()}}),...$e.TransitionPresets.ModalSlideFromBottomIOS}})))},x={detect:"auto",afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese_simplified:"zh-cn",chinese_traditional:"zh-tw",church_slavic:"cu",old_slavonic:"cu",church_slavonic:"cu",old_bulgarian:"cu",old_church_slavonic:"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr",western_frisian:"fy",fulah:"ff",georgian:"ka",gaelic:"gd",scottish_gaelic:"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht",haitian_creole:"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi",hiri_motu:"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io",sichuan_yi:"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk",central_khmer:"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv",south_ndebele:"nr",north_ndebele:"nd",ndonga:"ng",nepali:"ne",norwegian_nynorsk:"nn",norwegian_bokm\u00E5l:"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl",northern_sami:"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, Southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function O(e,t,a){window.enmity.settings.set(e,t,a)}function v(e,t,a){return window.enmity.settings.get(e,t,a)}function oe(e,t,a){return window.enmity.settings.getBoolean(e,t,a)}var at=["auto","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh-cn","zh-tw","zu"],ot={auto:"auto",aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chis:"zh-cn",chit:"zh-tw",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},ie=e=>{if(typeof e!="string")throw new Error(`The "language" must be a string, received ${typeof e}`);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=x[e]||ot[e]||e,!at.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function Fe(){var e=Object.create(null);this.put=function(a,i,n,m){if(typeof n!="undefined"&&(typeof n!="number"||isNaN(n)||n<=0))throw new Error("Cache timeout must be a positive number");if(typeof m!="undefined"&&typeof m!="function")throw new Error("Cache timeout callback must be a function");var s=e[a];s&&clearTimeout(s.timeout);var w={value:i,expire:n+Date.now()};return isNaN(w.expire)||(w.timeout=setTimeout(function(){t(a),m&&m(a,i)}.bind(this),n)),e[a]=w,i},this.del=function(a){var i=!0,n=e[a];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(i=!1)):i=!1,i&&t(a),i};function t(a){delete e[a]}this.clear=function(){for(var a in e)clearTimeout(e[a].timeout);e=Object.create(null)},this.get=function(a){var i=e[a];if(typeof i!="undefined"){if(isNaN(i.expire)||i.expire>=Date.now())return i.value;delete e[a]}return null}}const re=new Fe;re.Cache=Fe;const it="https://translate.googleapis.com/translate_a/single";var rt={fetch:({key:e,from:t,to:a,text:i})=>[`${it}?client=gtx&sl=${t}&tl=${a}&dt=t&q=${encodeURI(i)}`],parse:e=>e.json().then(t=>{if(t=t&&t[0]&&t[0][0]&&t[0].map(a=>a[0]).join(""),!t)throw new Error("Translation not found");return t})},st={google:rt};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const H=function(e={}){if(!(this instanceof H))return new H(e);const t={from:"auto",to:"ja",cache:void 0,languages:ie,engines:st,engine:"google",keys:{}},a=(i,n={})=>{typeof n=="string"&&(n={to:n}),n.text=i,n.from=ie(n.from||a.from),n.to=ie(n.to||a.to),n.cache=n.cache||a.cache,n.engines=n.engines||{},n.engine=n.engine||a.engine,n.url=n.url||a.url,n.id=n.id||`${n.url}:${n.from}:${n.to}:${n.engine}:${n.text}`,n.keys=n.keys||a.keys||{};for(let _ in a.keys)n.keys[_]=n.keys[_]||a.keys[_];n.key=n.key||a.key||n.keys[n.engine];const m=n.engines[n.engine]||a.engines[n.engine],s=re.get(n.id);if(s)return Promise.resolve(s);if(n.to===n.from)return Promise.resolve(n.text);if(m.needkey&&!n.key)throw new Error(`The engine "${n.engine}" needs a key, please provide it`);const w=m.fetch(n);return fetch(...w).then(m.parse).then(_=>re.put(n.id,_,n.cache))};for(let i in t)a[i]=typeof e[i]=="undefined"?t[i]:e[i];return a},se=new H;se.Translate=H;async function Ne(e,t,a){return t?await se(e,{from:x[t],to:x[a]}):await se(e,x[a])}const b=e=>e.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" "),R=e=>{let t=0;for(let a in e)t++;return t},lt=e=>{let t=e.split(`
`).map(a=>{if(a!="")return`"${a.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[R(t)]=`${t[R(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function Re(){try{let e=await G.getItem("device_list");if(e)return JSON.parse(e);let t=(await De.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,a=lt(t);await G.setItem("device_list",a);let i=await G.getItem("device_list");return JSON.parse(i)}catch(e){console.warn(`[${u} Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function le(e,t){let a=await Re();return`**[${u}] Debug Information**
> **Plugin Version:** ${e}
> **Release Channel:** ${t}
> **Software Version:** ${V.DCDDeviceManager.systemVersion}
> **Device:** ${a[V.DCDDeviceManager.device]}`}function h(e){return window.enmity.assets.getIDByName(e)}const l={Translate:h("img_nitro_star"),Revert:h("ic_highlight"),Debug:h("debug"),Retry:h("ic_message_retry"),Failed:h("Small"),Cancel:h("ic_megaphone_nsfw_16px"),Delete:h("ic_message_delete"),Copy:h("toast_copy_link"),Open:h("ic_leave_stage"),Clipboard:h("pending-alert"),Debug_Command:{Sent:h("ic_application_command_24px"),Clock:h("clock")},Settings:{Toasts:{Context:h("toast_image_saved"),Settings:h("ic_selection_checked_24px")},Translate_From:h("ic_raised_hand"),Translate_To:h("ic_activity_24px"),Debug:h("ic_rulebook_16px")}},ce=e=>{y.open({content:`Copied ${e} to clipboard.`,source:l.Clipboard})},ct=()=>({message_spoofer:"69",copy_embed:"1337",invis_chat:"420",dislate:"1002"}),L=(e,t,a)=>{try{if(!e)return;let i=R(e);for(let n=0;n<i;n++)if(a(e[n],n,a))return e[n];return}catch(i){console.warn(`[${u}] The following error happened when trying to find an item in ${t}: ${i}`)}},ut=(e,t,a,i)=>{try{if(!e)return;let n=R(e),m=t,s=a;n++,s++;for(let w=n-1;w>=s;w--)e[w]=e[w-1];e[s-1]=m;return}catch(n){console.warn(`[${u}] The following error happened when trying to use the insert method at ${i}: ${n}`);return}},mt=(e,t)=>{let a=e.length;return e[a]=t,a++,e.length=a,a},dt=(e,t)=>{for(let a=0;a<R(e);a++)t(e[a],a,e)},gt=(e,t)=>{const a=[];for(let i=0;i<R(e);i++)mt(a,t(e[i],i,e));return a};async function ht(){let e=V.DCDDeviceManager.device,t=await Re();e.includes("iPhone")&&(e=e.replace("iPhone",""),e=e.replace(",","."),(parseFloat(e)<10.6&&parseFloat(e)!=10.3||parseFloat(e)==14.6||parseFloat(e)==12.8)&&Y.show({title:"Incompatible iPhone",body:`Please note that you're on an${t[V.DCDDeviceManager.device]}.
Some features of ${u} may behave in an unexpected manner.`,confirmText:"I understand"}))}const ft=Je("StaticSearchBarContainer"),yt=c.Arrow;var Ce=()=>{const[e,t]=o.useState([]),[a,i]=o.useState([]);return o.useEffect(()=>{let n=Object.keys(x);t(n)},[]),o.createElement(o.Fragment,null,o.createElement(ft,{placeholder:"Search Language",onChangeText:n=>i(n)}),o.createElement(Ee,null,e.filter(n=>n.includes(a)).map(n=>v("Dislate","DislateLangFilter")&&n=="detect"?o.createElement(o.Fragment,null):o.createElement(c,{label:b(n),trailing:yt,onPress:()=>{v(u,"DislateLangFilter")?O("Dislate","DislateLangTo",n):O("Dislate","DislateLangFrom",n),y.open({content:`Set ${x[n].toUpperCase()} as Language to Translate ${v("Dislate","DislateLangFilter")?"to":"from"}.`,source:v("Dislate","DislateLangFilter")?l.Settings.Translate_To:l.Settings.Translate_From}),P.pop()}}))))};const X=window.enmity.modules.common.Components.General.Animated,[ue,wt]=q(p.byProps("transitionToGuild"),p.byProps("setString"));var bt=()=>{const e=ae.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:T.ThemeColorMap.HEADER_PRIMARY,fontFamily:T.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:T.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),t=o.useRef(new X.Value(1)).current,a=()=>{X.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{X.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},n=()=>{ue.openURL(S[0].repo)},m={transform:[{scale:t}]};return o.createElement(o.Fragment,null,o.createElement(C,{style:e.container},o.createElement(A,{onPress:n,onPressIn:a,onPressOut:i},o.createElement(X.View,{style:[m]},o.createElement(Xe,{style:[e.image],source:{uri:"https://i.imgur.com/rl1ga06.png"}}))),o.createElement(C,{style:e.text_container},o.createElement(A,{onPress:()=>{ue.openURL(S[0].repo)}},o.createElement($,{style:[e.main_text,e.header]},u," ")),o.createElement(C,{style:{flexDirection:"row"}},o.createElement($,{style:[e.main_text,e.sub_header]},"A project by"),o.createElement(A,{onPress:()=>{ue.openURL(S[0].user)}},o.createElement($,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:T.Fonts.DISPLAY_BOLD}]},Te[0].name))),o.createElement(C,null,o.createElement(A,{style:{flexDirection:"row"},onPress:()=>{wt.setString(le(E,j)),ce("debug information")}},o.createElement($,{style:[e.main_text,e.sub_header]},"Version:"),o.createElement($,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:T.Fonts.DISPLAY_BOLD}]},E," "))))))};const{native:z}=window.enmity;function vt(){z.reload()}z.version,z.build,z.device,z.version;async function kt(){const e=`${S[0].download}?${Math.floor(Math.random()*1001)}.js`;let t=(await(await De.get(e)).text).match(/[0-9].[0-9].[0-9]/g);!t||(t=t[0].replaceAll('"',""),t!=E?pt(e,t):Et(u,E))}const pt=(e,t)=>{Y.show({title:"Update found",body:`A newer version is available for ${u}.
Would you like to install version ${t} now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>St(e,t)})},Et=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is version ${t}`),y.open({content:`${e} is on latest version (${t})`,source:l.Clipboard})};async function St(e,t){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed-plugin"||a=="overriden-plugin"?Y.show({title:`Updated ${u}`,body:`Successfully updated to version ${t}. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>{vt()}}):console.log(`[Dislate] Plugin failed to update to version ${t}.`)})}const[_t,Dt]=q(p.byProps("transitionToGuild"),p.byProps("setString"));var $t=({settings:e})=>{const t=ae.createThemedStyleSheet({icon:{color:T.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:T.ThemeColorMap.TEXT_MUTED}}),[a,i]=o.useState(),[n,m]=o.useState();return o.createElement(o.Fragment,null,o.createElement(Ee,{onTouchStart:s=>{i(s.nativeEvent.pageX),m(s.nativeEvent.pageY)},onTouchEnd:s=>{a-s.nativeEvent.pageX<-100&&n-s.nativeEvent.pageY<40&&n-s.nativeEvent.pageY>-40&&P.pop()}},o.createElement(bt,null),o.createElement(ne,{title:"Language"},o.createElement(c,{label:"Translate From",leading:o.createElement(c.Icon,{style:t.icon,source:l.Settings.Translate_From}),trailing:()=>{var s;return o.createElement($,{style:t.item},(s=b(v(u,"DislateLangFrom","detect")))!=null?s:"N/A")},onPress:()=>{O(u,"DislateLangFilter",!1),P.push(Le,{component:Ce,name:"Dislate: Language From"})}}),o.createElement(U,null),o.createElement(c,{label:"Translate To",leading:o.createElement(c.Icon,{style:t.icon,source:l.Settings.Translate_To}),trailing:()=>{var s;return o.createElement($,{style:t.item},(s=b(v(u,"DislateLangTo","english")))!=null?s:"N/A")},onPress:()=>{O(u,"DislateLangFilter",!0),P.push(Le,{component:Ce,name:"Dislate: Language To"})}})),o.createElement(ne,{title:"Utility"},o.createElement(c,{label:"Initialisation Toasts",leading:o.createElement(c.Icon,{style:t.icon,source:l.Settings.Toasts.Context}),subLabel:`Enable Toasts to display Loading State of ${u}`,trailing:o.createElement(Ke,{value:e.getBoolean("toastEnable",!1),onValueChange:()=>{e.toggle("toastEnable",!1),y.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:l.Settings.Toasts.Settings})}})}),o.createElement(U,null),o.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${u} to clipboard.`,leading:o.createElement(c.Icon,{style:t.icon,source:l.Settings.Debug}),trailing:c.Arrow,onPress:async function(){Dt.setString(await le(E,j)),ce("debug information")}}),o.createElement(U,null),o.createElement(c,{label:"Clear Device Cache",subLabel:"Void the fetched device list storage.",leading:o.createElement(c.Icon,{style:t.icon,source:l.Delete}),trailing:c.Arrow,onPress:async function(){await G.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:l.Settings.Toasts.Settings})}})),o.createElement(ne,{title:"Source"},o.createElement(c,{label:"Check for Updates",subLabel:`Filter for any ${u} updates`,leading:o.createElement(c.Icon,{style:t.icon,source:l.Copy}),trailing:c.Arrow,onPress:()=>{kt()}}),o.createElement(U,null),o.createElement(c,{label:"Source",subLabel:`Open the Repo of ${u} Externally`,leading:o.createElement(c.Icon,{style:t.icon,source:l.Open}),trailing:c.Arrow,onPress:()=>{_t.openURL(S[0].repo)}})),o.createElement(c,{label:`Plugin Version: ${E}
Release Channel: ${j}`})))};function Tt(e,t,a,i){window.enmity.clyde.sendReply(e,t,a,i)}var Pe;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Pe||(Pe={}));var K;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(K||(K={}));var W;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(W||(W={}));var je;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(je||(je={}));var M;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(M||(M={}));var ze;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(ze||(ze={}));let xt=gt(Object.keys(x),e=>({name:b(e),displayName:b(e),value:e}));const Lt={id:"translate",name:"translate",displayName:"translate",description:"Send a message in the language chosen.",displayDescription:"Send a message in the language chosen.",type:K.Chat,inputType:W.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to send translated",displayDescription:"Text to send translated",type:M.String,required:!0},{name:"language",displayName:"language",description:"Language that it will translate to.",displayDescription:"The Language that Dislate will translate into.",type:M.String,choices:[...xt.filter(e=>e.name!=="Detect")],required:!0}],execute:async function(e,t){let a=L(e,"translate text",n=>n.name=="text").value,i=L(e,"translate language",n=>n.name=="language").value;Ne(a,v(u,"DislateLangFrom","detect"),i).then(n=>n?(Y.show({title:"Are you sure?",body:`The message about to be sent is:
\`${n}\`
Are you sure you want to send this?`,confirmText:"Yeah, send it",cancelText:"Nope, don't send it",onConfirm:()=>{_e.sendMessage(t.channel.id,{content:n}),y.open({content:`Sent message in ${b(i)}.`,source:l.Translate})},onCancel:()=>{y.open({content:"Cancelled translated message request.",source:l.Cancel})}}),{}):(Tt(t.channel.id,"Failed to send Translated Message."),{}))}},[Ft,Nt]=q(p.byProps("transitionToGuild"),p.byProps("setString"));let me=u.toLowerCase();const Rt={id:`${me}`,name:`${me}`,displayName:`${me}`,description:`Choose from a list of options for debugging in ${u}`,displayDescription:`Choose from a list of options for debugging in ${u}`,type:K.Chat,inputType:W.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute",displayDescription:"The type of command to execute",type:M.String,choices:[{name:b("debug"),displayName:b("debug"),value:"debug"},{name:b("download"),displayName:b("download"),value:"download"},{name:b("repo"),displayName:b("repo"),value:"repo"}],required:!0}],execute:async function(e,t){var a;let i=e.find(s=>s.name=="type").value;const n={debug:async function(){_e.sendMessage(t.channel.id,{content:await le(E,j)}),y.open({content:"Sent debug info in current channel.",source:l.Debug_Command.Sent})},download:()=>{Nt.setString(`${S[0].download}?${Math.floor(Math.random()*1001)}.js`),ce("download link")},repo:()=>{Ft.openURL(S[0].repo)}},m=()=>{y.open({content:"Invalid command argument.",source:l.Debug_Command.Clock})};return((a=n[i])!=null?a:m)(),{}}},[de,Me]=q(p.byProps("openLazy","hideActionSheet"),p.byProps("getChannel","getDMFromUserId")),ge=et("dislate");var Ct=(e=>(e[e.Translate=0]="Translate",e[e.Revert=1]="Revert",e))(Ct||{});let J=[{invalid_id:"acquite sucks"}];const Pt={...d,commands:[],patches:[],onStart(){this.commands=[Lt,Rt];let e=0,t=3;async function a(){try{e++;let i=oe(d.name,"toastEnable",!1);const n=Se("getMessage","getMessages");await ht();const m=Se("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");for(const s of["MESSAGE_UPDATE"])try{m.dispatch({type:s,message:{}})}catch(w){console.log(`[${d.name} Local Error ${w}]`)}console.log(`[${d.name}] delayed start attempt ${e}/${t}.`),i&&y.open({content:`[${d.name}] start attempt ${e}/${t}.`,source:l.Debug});try{ge.before(de,"openLazy",(s,[w,_],jt)=>{_==="MessageLongPressActionSheet"&&w.then(Q=>{let Ie=Q.default;return Q.default=({message:he,user:Be,channel:fe,canAddNewReactions:Ae},Ue)=>{var ye,we,be,ve,ke;let D=Ie({message:he,user:Be,channel:fe,canAddNewReactions:Ae},Ue);const I=ct(),[B,pe]=o.useState(0);if(!D.props)return console.log(`[${d.name} Local Error: Property "Props" Does not Exist on "res"]`),D;let F=(ke=(ve=(be=(we=(ye=D==null?void 0:D.props)==null?void 0:ye.children)==null?void 0:we.props)==null?void 0:be.children)==null?void 0:ve.props)==null?void 0:ke.children[1];if(!F)return console.log(`[${d.name} Local Error: 'finalLocation' seems to be undefined!]`),D;const[qe,Z]=o.useState(0);o.useEffect(()=>{dt(Object.values(I),g=>{L(F,"external plugin list",f=>{if(f.key!==I.dislate)return f.key===g})&&Z(f=>f+1)}),L(F,"reply button",g=>{var f;return((f=g.props)==null?void 0:f.message)==="Reply"})&&Z(g=>g+1),L(F,"edit message button",g=>{var f;return((f=g.props)==null?void 0:f.message)==="Edit Message"})&&Z(g=>g+1)},[]);const k=n.getMessage(fe.id,he.id);if(!k.content)return console.log(`[${d.name}] No message content.`),D;const ee=k.id,Ve=k.content,te=L(J,"cache object",g=>Object.keys(g)[0]===ee);o.useEffect(()=>{pe(te?1:0)},pe);const Ge=o.createElement(c,{key:I.dislate,label:`${B===0?"Translate":"Revert"}`,leading:o.createElement(c.Icon,{source:B===0?l.Translate:l.Revert}),onPress:()=>{try{if(B===0){const g=v(d.name,"DislateLangFrom","detect"),f=v(d.name,"DislateLangTo","japanese");Ne(k.content,g,f).then(Ye=>{const Oe={type:"MESSAGE_UPDATE",message:{...k,content:`${Ye} \`[${b(f)}]\``,guild_id:Me.getChannel(k.channel_id).guild_id},log_edit:!1};m.dispatch(Oe),y.open({content:`Modified message to ${b(v(d.name,"DislateLangTo","japanese"))}.`,source:l.Translate}),J.unshift({[ee]:Ve})}),de.hideActionSheet()}else if(B===1){const g={type:"MESSAGE_UPDATE",message:{...k,content:te[ee],guild_id:Me.getChannel(k.channel_id).guild_id},log_edit:!1};m.dispatch(g),y.open({content:"Reverted message back to original state.",source:l.Translate}),J=J.filter(f=>f!==te),de.hideActionSheet()}}catch(g){console.log(`[Dislate Local Error ${g}]`)}}});return L(F,"existing key of dislate",g=>g.key===I.dislate)||ut(F,Ge,qe,"insert translate button"),D},Q})})}catch(s){console.log(`[${d.name} Local Error ${s}]`),oe(d.name,"toastEnable",!1)&&y.open({content:`[${d.name}] failed to open action sheet.`,source:l.Retry})}}catch(i){console.log(`[${d.name} Local Error ${i}]`);let n=oe(d.name,"toastEnable",!1);e<t?(console.warn(`[${d.name}] failed to start. Trying again in ${e}0s.`),n&&y.open({content:`[${d.name}] failed to start. Trying again in ${e}0s.`,source:l.Retry}),setTimeout(a,e*1e4)):(console.error(`[${d.name}] failed to start. Giving up.`),n&&y.open({content:`[${d.name}] failed to start. Giving up.`,source:l.Failed}))}}setTimeout(()=>{a(),this.patches.push(ge)},500)},onStop(){this.commands=[],this.patches=[],ge.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement($t,{settings:e})}};We(Pt);
