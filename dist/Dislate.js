const{components:i}=window.enmity;i.Alert;const $e=i.Button;i.FlatList,i.Image,i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const re=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const le=i.Text;i.TextInput,i.TouchableHighlight,i.TouchableOpacity,i.TouchableWithoutFeedback,i.Touchable;const ze=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const N=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const c=i.FormRow,C=i.FormSection;i.FormSelect,i.FormSubLabel;const je=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function Fe(e){window.enmity.plugins.registerPlugin(e)}function l(e){return window.enmity.assets.getIDByName(e)}const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,a)=>window.enmity.modules.filters.byName(e,a),byTypeName:(e,a)=>window.enmity.modules.filters.byTypeName(e,a),byDisplayName:(e,a)=>window.enmity.modules.filters.byDisplayName(e,a)};function q(...e){return window.enmity.modules.bulk(...e)}function ce(...e){return window.enmity.modules.getByProps(...e)}function Me(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const ue=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const me=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const d=window.enmity.modules.common.Toasts,Re=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const _=window.enmity.modules.common.Navigation,Ie=window.enmity.modules.common.NavigationNative,de=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ge=window.enmity.modules.common.StyleSheet,Be=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Pe(e){return window.enmity.patcher.create(e)}var v="Dislate",$="1.1.0",Ce="Translates text into a desired language.",z="stable",qe=[{name:"acquite",id:"581573474296791211"}],p=[{download:"https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js",repo:"https://github.com/acquitelol/dislate"}],Ue="#ff1f84",Ge={name:v,version:$,description:Ce,release:z,authors:qe,plugin:p,color:Ue};const he=de.createStackNavigator(),{ThemeColorMap:E}=Be;var we=({name:e="Page",component:a=ze}={})=>{const t=ge.createThemedStyleSheet({container:{backgroundColor:E.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:E.BACKGROUND_MOBILE_PRIMARY,color:E.TEXT_NORMAL},header:{backgroundColor:E.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:E.HEADER_PRIMARY},close:{color:E.HEADER_PRIMARY}});return o.createElement(Ie.NavigationContainer,null,o.createElement(he.Navigator,{initialRouteName:e,style:t.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:t.cardStyle,headerStyle:t.header,headerTitleContainerStyle:t.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement(he.Screen,{name:e,component:a,options:{headerTitleStyle:{color:"white"},headerLeft:()=>o.createElement($e,{color:t.close.color,title:"Close",onPress:()=>{_.pop()}}),...de.TransitionPresets.ModalSlideFromBottomIOS}})))},k={detect:"auto",afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese_simplified:"zh-cn",chinese_traditional:"zh-tw",church_slavic:"cu",old_slavonic:"cu",church_slavonic:"cu",old_bulgarian:"cu",old_church_slavonic:"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr",western_frisian:"fy",fulah:"ff",georgian:"ka",gaelic:"gd",scottish_gaelic:"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht",haitian_creole:"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi",hiri_motu:"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io",sichuan_yi:"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk",central_khmer:"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv",south_ndebele:"nr",north_ndebele:"nd",ndonga:"ng",nepali:"ne",norwegian_nynorsk:"nn",norwegian_bokm\u00E5l:"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl",northern_sami:"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, Southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function j(e,a,t){window.enmity.settings.set(e,a,t)}function h(e,a,t){return window.enmity.settings.get(e,a,t)}function U(e,a,t){return window.enmity.settings.getBoolean(e,a,t)}var Ve=["auto","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh-cn","zh-tw","zu"],Ae={auto:"auto",aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chis:"zh-cn",chit:"zh-tw",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},G=e=>{if(typeof e!="string")throw new Error(`The "language" must be a string, received ${typeof e}`);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=k[e]||Ae[e]||e,!Ve.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function fe(){var e=Object.create(null);this.put=function(t,s,n,u){if(typeof n!="undefined"&&(typeof n!="number"||isNaN(n)||n<=0))throw new Error("Cache timeout must be a positive number");if(typeof u!="undefined"&&typeof u!="function")throw new Error("Cache timeout callback must be a function");var g=e[t];g&&clearTimeout(g.timeout);var r={value:s,expire:n+Date.now()};return isNaN(r.expire)||(r.timeout=setTimeout(function(){a(t),u&&u(t,s)}.bind(this),n)),e[t]=r,s},this.del=function(t){var s=!0,n=e[t];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(s=!1)):s=!1,s&&a(t),s};function a(t){delete e[t]}this.clear=function(){for(var t in e)clearTimeout(e[t].timeout);e=Object.create(null)},this.get=function(t){var s=e[t];if(typeof s!="undefined"){if(isNaN(s.expire)||s.expire>=Date.now())return s.value;delete e[t]}return null}}const V=new fe;V.Cache=fe;const Ye="https://translate.googleapis.com/translate_a/single";var He={fetch:({key:e,from:a,to:t,text:s})=>[`${Ye}?client=gtx&sl=${a}&tl=${t}&dt=t&q=${encodeURI(s)}`],parse:e=>e.json().then(a=>{if(a=a&&a[0]&&a[0][0]&&a[0].map(t=>t[0]).join(""),!a)throw new Error("Translation not found");return a})},Ke={google:He};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const F=function(e={}){if(!(this instanceof F))return new F(e);const a={from:"auto",to:"ja",cache:void 0,languages:G,engines:Ke,engine:"google",keys:{}},t=(s,n={})=>{typeof n=="string"&&(n={to:n}),n.text=s,n.from=G(n.from||t.from),n.to=G(n.to||t.to),n.cache=n.cache||t.cache,n.engines=n.engines||{},n.engine=n.engine||t.engine,n.url=n.url||t.url,n.id=n.id||`${n.url}:${n.from}:${n.to}:${n.engine}:${n.text}`,n.keys=n.keys||t.keys||{};for(let y in t.keys)n.keys[y]=n.keys[y]||t.keys[y];n.key=n.key||t.key||n.keys[n.engine];const u=n.engines[n.engine]||t.engines[n.engine],g=V.get(n.id);if(g)return Promise.resolve(g);if(n.to===n.from)return Promise.resolve(n.text);if(u.needkey&&!n.key)throw new Error(`The engine "${n.engine}" needs a key, please provide it`);const r=u.fetch(n);return fetch(...r).then(u.parse).then(y=>V.put(n.id,y,n.cache))};for(let s in a)t[s]=typeof e[s]=="undefined"?a[s]:e[s];return t},A=new F;A.Translate=F;async function ye(e,a,t){return a?await A(e,{from:k[a],to:k[t]}):await A(e,k[t])}const m=e=>e.split("_").map(a=>a[0].toUpperCase()+a.slice(1)).join(" "),be=(e,a)=>`
            **[Dislate] Debug Information**
            > **Version:** ${e}
            > **Channel:** ${a}
            `,Y=e=>{d.open({content:`Copied ${e} to clipboard`,source:l("pending-alert")})},Xe=Me("StaticSearchBarContainer"),Oe=c.Arrow;var ve=()=>{const[e,a]=o.useState([]),[t,s]=o.useState([]);return o.useEffect(()=>{let n=Object.keys(k);a(n)},[]),o.createElement(o.Fragment,null,o.createElement(Xe,{placeholder:"Search Language",onChangeText:n=>s(n)}),o.createElement(re,null,e.filter(n=>n.includes(t)).map(n=>h("Dislate","DislateLangFilter")&&n=="detect"?o.createElement(o.Fragment,null):o.createElement(c,{label:m(n),trailing:Oe,onPress:()=>{h("Dislate","DislateLangFilter")?j("Dislate","DislateLangTo",n):j("Dislate","DislateLangFrom",n),d.open({content:`Set ${k[n].toUpperCase()} as Language to Translate ${h("Dislate","DislateLangFilter")?"to":"from"}.`,source:h("Dislate","DislateLangFilter")?l("ic_activity_24px"):l("ic_raised_hand")}),_.pop()}}))))};const[We,ke]=q(D.byProps("transitionToGuild"),D.byProps("setString"));var Qe=({settings:e})=>{const a=l("ic_selection_checked_24px"),t=ge.createThemedStyleSheet({icon:{color:ue.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:ue.ThemeColorMap.TEXT_MUTED}}),[s,n]=o.useState(),[u,g]=o.useState();return o.createElement(o.Fragment,null,o.createElement(re,{onTouchStart:r=>{n(r.nativeEvent.pageX),g(r.nativeEvent.pageY)},onTouchEnd:r=>{s-r.nativeEvent.pageX<-100&&u-r.nativeEvent.pageY<40&&u-r.nativeEvent.pageY>-40&&_.pop()}},o.createElement(C,{title:"Language"},o.createElement(c,{label:"Translate From",leading:o.createElement(c.Icon,{style:t.icon,source:l("ic_raised_hand")}),trailing:()=>{var r;return o.createElement(le,{style:t.item},(r=m(h("Dislate","DislateLangFrom","detect")))!=null?r:"N/A")},onPress:()=>{j("Dislate","DislateLangFilter",!1),_.push(we,{component:ve,name:"Dislate: Language From"})}}),o.createElement(N,null),o.createElement(c,{label:"Translate To",leading:o.createElement(c.Icon,{style:t.icon,source:l("ic_activity_24px")}),trailing:()=>{var r;return o.createElement(le,{style:t.item},(r=m(h("Dislate","DislateLangTo","japanese")))!=null?r:"N/A")},onPress:()=>{j("Dislate","DislateLangFilter",!0),_.push(we,{component:ve,name:"Dislate: Language To"})}})),o.createElement(N,null),o.createElement(C,{title:"Utility"},o.createElement(c,{label:"Initialisation Toasts",leading:o.createElement(c.Icon,{style:t.icon,source:l("toast_image_saved")}),subLabel:`Enable Toasts to display Loading State of ${v}`,trailing:o.createElement(je,{value:e.getBoolean("toastEnable",!1),onValueChange:()=>{e.toggle("toastEnable",!1),d.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:a})}})}),o.createElement(N,null),o.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${v} to clipboard.`,leading:o.createElement(c.Icon,{style:t.icon,source:l("ic_rulebook_16px")}),trailing:c.Arrow,onPress:()=>{ke.setString(be($,z)),Y("debug information")}})),o.createElement(N,null),o.createElement(C,{title:"Source"},o.createElement(c,{label:"Download",subLabel:`Copy the link of ${v} to Clipboard`,leading:o.createElement(c.Icon,{style:t.icon,source:l("toast_copy_link")}),trailing:c.Arrow,onPress:()=>{ke.setString(`${p[0].download}?${Math.floor(Math.random()*1001)}.js`),Y("download link")}}),o.createElement(c,{label:"Source",subLabel:`Open the Repo of ${v} Externally`,leading:o.createElement(c.Icon,{style:t.icon,source:l("ic_leave_stage")}),trailing:c.Arrow,onPress:()=>{We.openURL(p[0].repo)}})),o.createElement(c,{label:`Plugin Version: ${$}
Release Channel: ${z}`})))};function Je(e,a,t,s){window.enmity.clyde.sendReply(e,a,t,s)}var De;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(De||(De={}));var M;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(M||(M={}));var R;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(R||(R={}));var Ee;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Ee||(Ee={}));var L;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(L||(L={}));var Se;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Se||(Se={}));let _e=[];for(const[e,a]of Object.entries(k))_e.push({name:m(e),displayName:m(e),value:e});const Ze={id:"translate",name:"translate",displayName:"translate",description:"Send a message in the language chosen.",displayDescription:"Send a message in the language chosen.",type:M.Chat,inputType:R.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to send translated",displayDescription:"Text to send translated",type:L.String,required:!0},{name:"language",displayName:"language",description:"Language that it will translate to.",displayDescription:"The Language that Dislate will translate into.",type:L.String,choices:[..._e.filter(e=>e.name!=="Detect")],required:!0}],execute:async function(e,a){let t=e.find(n=>n.name=="text").value,s=e.find(n=>n.name=="language").value;ye(t,h("Dislate","DislateLangFrom","detect"),s).then(n=>n?(Re.show({title:"Are you sure?",body:`The message about to be sent is:
\`${n}\`
Are you sure you want to send this?`,confirmText:"Yeah, send it",cancelText:"Nope, don't send it",onConfirm:()=>{me.sendMessage(a.channel.id,{content:n}),d.open({content:`Sent message in ${m(s)}.`,source:l("img_nitro_star")})},onCancel:()=>{d.open({content:"Cancelled translated message request.",source:l("ic_megaphone_nsfw_16px")})}}),{}):(Je(a.channel.id,"Failed to send Translated Message."),{}))}},[en,nn]=q(D.byProps("transitionToGuild"),D.byProps("setString"));let H=v.toLowerCase();const tn={id:`${H}`,name:`${H}`,displayName:`${H}`,description:`Choose from a list of options for debugging in ${v}`,displayDescription:`Choose from a list of options for debugging in ${v}`,type:M.Chat,inputType:R.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute",displayDescription:"The type of command to execute",type:L.String,choices:[{name:m("debug"),displayName:m("debug"),value:"debug"},{name:m("download"),displayName:m("download"),value:"download"},{name:m("repo"),displayName:m("repo"),value:"repo"}],required:!0}],execute:async function(e,a){var t;let s=e.find(g=>g.name=="type").value;const n={debug:()=>{me.sendMessage(a.channel.id,{content:be($,z)}),d.open({content:"Sent debug info in current channel.",source:l("ic_application_command_24px")})},download:()=>{nn.setString(`${p[0].download}?${Math.floor(Math.random()*1001)}.js`),Y("download link")},repo:()=>{en.openURL(p[0].repo)}},u=()=>{d.open({content:"Invalid command argument.",source:l("clock")})};return((t=n[s])!=null?t:u)(),{}}},[K,pe]=q(D.byProps("openLazy","hideActionSheet"),D.byProps("getChannel","getDMFromUserId")),X=Pe("dislate");var an=(e=>(e[e.Translate=0]="Translate",e[e.Revert=1]="Revert",e))(an||{});const on={...Ge,commands:[],onStart(){let e=[{invalid_id:"acquite sucks"}];this.commands=[Ze,tn];let a=0,t=3;const s=()=>{try{a++;let n=U("Dislate","masterDisable",!1),u=U("Dislate","toastEnable",!1);const g=ce("getMessage","getMessages"),r=ce("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");for(const y of["MESSAGE_UPDATE"])try{r.dispatch({type:y,message:{}})}catch(I){console.log(`[Dislate Local Error ${I}]`)}console.log(`[Dislate] delayed start attempt ${a}/${t}.`),u?d.open({content:`[Dislate] start attempt ${a}/${t}.`,source:l("debug")}):console.log("[Dislate] Init Toasts are disabled."),X.before(K,"openLazy",(y,[I,Le],sn)=>{Le==="MessageLongPressActionSheet"&&I.then(Te=>{X.after(Te,"default",(rn,O,T)=>{var W,Q,J,Z,ee;const[x,ne]=o.useState(0);if(!T.props)return console.log('[Dislate Local Error: Property "Props" Does not Exist on "res"]'),T;const S=(ee=(Z=(J=(Q=(W=T==null?void 0:T.props)==null?void 0:W.children)==null?void 0:Q.props)==null?void 0:J.children)==null?void 0:Z.props)==null?void 0:ee.children[1],te=()=>{const w=f=>{var ae,oe,ie,se;return((oe=(ae=S[0+f])==null?void 0:ae.props)==null?void 0:oe.message)=="Reply"?1+f:((se=(ie=S[1+f])==null?void 0:ie.props)==null?void 0:se.message)=="Reply"?2+f:0+f};return S[0].key=="420"?w(1):w(0)};if(S[te()].key=="1002")return;const b=g.getMessage(O[0].message.channel_id,O[0].message.id);if(!b.content)return console.log("[Dislate] No message content.");const B=b.id,xe=b.content,P=e.find(w=>Object.keys(w)[0]===B);o.useEffect(()=>{ne(P?1:0)},ne);const Ne=o.createElement(c,{key:"1002",label:`${x===0?"Translate":"Revert"}`,leading:o.createElement(c.Icon,{source:l(x===0?"img_nitro_star":"ic_highlight")}),onPress:()=>{try{if(x===0)ye(b.content,h("Dislate","DislateLangFrom","detect"),h("Dislate","DislateLangTo","japanese")).then(w=>{const f={type:"MESSAGE_UPDATE",message:{...b,content:`${w} \`[${m(h("Dislate","DislateLangTo","japanese"))}]\``,guild_id:pe.getChannel(b.channel_id).guild_id},log_edit:!1};r.dispatch(f),d.open({content:`Modified message to ${m(h("Dislate","DislateLangTo","japanese"))}.`,source:l("img_nitro_star")}),e.unshift({[B]:xe})}),K.hideActionSheet();else if(x===1){const w={type:"MESSAGE_UPDATE",message:{...b,content:P[B],guild_id:pe.getChannel(b.channel_id).guild_id},log_edit:!1};r.dispatch(w),d.open({content:"Reverted message back to original state.",source:l("img_nitro_star")}),e=e.filter(f=>f!==P),K.hideActionSheet()}}catch(w){console.log(`[Dislate Local Error ${w}]`)}}});S.splice(te(),0,Ne)})})})}catch(n){console.log(`[Dislate Local Error ${n}]`);let u=U("Dislate","toastEnable",!1);a<t?(console.warn(`[Dislate] failed to start. Trying again in ${a}0s.`),u?d.open({content:`[Dislate] failed to start trying again in ${a}0s.`,source:l("ic_message_retry")}):console.log("[Dislate] Init toasts are disabled."),setTimeout(s,a*1e4)):(console.error("[Dislate] failed to start. Giving up."),u?d.open({content:"[Dislate] failed to start. Giving up.",source:l("Small")}):console.log("[Dislate] Init toasts are disabled."))}};setTimeout(()=>{s()},300)},onStop(){this.commands=[],X.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(Qe,{settings:e})}};Fe(on);
