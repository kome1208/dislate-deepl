const{components:m}=window.enmity;m.Alert,m.Button;const Je=m.FlatList,fe=m.Image;m.ImageBackground,m.KeyboardAvoidingView,m.Modal,m.Pressable;const Xe=m.RefreshControl,re=m.ScrollView;m.SectionList,m.StatusBar,m.StyleSheet,m.Switch;const L=m.Text;m.TextInput,m.TouchableHighlight;const A=m.TouchableOpacity;m.TouchableWithoutFeedback,m.Touchable;const T=m.View;m.VirtualizedList,m.Form,m.FormArrow,m.FormCTA,m.FormCTAButton,m.FormCardSection,m.FormCheckbox;const N=m.FormDivider;m.FormHint,m.FormIcon;const Qe=m.FormInput;m.FormLabel,m.FormRadio;const y=m.FormRow;m.FormSection,m.FormSelect,m.FormSubLabel;const se=m.FormSwitch;m.FormTernaryCheckBox,m.FormText,m.FormTextColors,m.FormTextSizes;function Ze(e){window.enmity.plugins.registerPlugin(e)}const B={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function et(e,t){return window.enmity.modules.getModule(e,t)}function tt(...e){return window.enmity.modules.bulk(...e)}function I(...e){return window.enmity.modules.getByProps(...e)}function pe(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const d=window.enmity.modules.common.Constants,ie=window.enmity.modules.common.Clipboard;window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const le=window.enmity.modules.common.Storage,w=window.enmity.modules.common.Toasts,k=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const we=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation;const be=window.enmity.modules.common.NavigationNative;window.enmity.modules.common.NavigationStack;const Ee=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking;const P=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function nt(e){return window.enmity.patcher.create(e)}var i="Dislate-DeepL",Y="1.4.2",at="Translates text into a desired language.",Se="stable",ot=[{name:"kome1",id:"783305816702844990",profile:"https://github.com/kome1208/"}],M={download:"https://raw.githubusercontent.com/kome1208/dislate-deepl/main/dist/Dislate-DeepL.js",repo:"https://github.com/kome1208/dislate-deepl",originalRepo:"https://github.com/acquitelol/dislate",build:"patch-2.2.8",hash:"2bdbf757"},rt="#ff91ff",S={name:i,version:Y,description:at,release:Se,authors:ot,plugin:M,color:rt};function _(e,t,a){window.enmity.settings.set(e,t,a)}function h(e,t,a){return window.enmity.settings.get(e,t,a)}function q(e,t,a){return window.enmity.settings.getBoolean(e,t,a)}function ve(e,t,a){return window.enmity.utilities.findInReactTree(e,t,a)}const st="https://api-free.deepl.com/v2/translate",Te={fetch:({from:e,to:t,text:a})=>`${st}?target_lang=${t}${e=="AUTO"?"":`&source_lang=${e}`}&text=${encodeURIComponent(a)}`,parse:e=>e.json().then(t=>{if(!t.translations[0].text)throw new Error("Invalid Translation!");return t.translations[0].text})};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}async function it(e,{fromLanguage:t,toLanguage:a}){const r=Te.fetch({text:e,from:t,to:a});return await fetch(r,{method:"POST",headers:{Authorization:`DeepL-Auth-Key ${h(i,"deeplApiKey")}`}}).then(Te.parse)}async function lt(e,{fromLanguage:t="Detect",toLanguage:a="English"},r,o){return o?e:await it(e,{fromLanguage:r[t],toLanguage:r[a]})}var J={string:lt};const{native:K}=window.enmity;function ct(){K.reload()}const ce=K.version;K.build;const mt=K.device;K.version;var j=(e,t,a,r,o)=>{try{return e(...t)}catch(s){console.warn(`[${a}] The following error happened when trying to ${r} ${o!=null?o:"unspecificied label"}: ${s}`);return}};async function $e(){var e,t,a;const r=window.HermesInternal.getRuntimeProperties(),o=I("View","Text").Platform.constants,s=o.reactNativeVersion;return{Plugin:{Version:Y,Build:M.hash,Channel:Se},Client:{Version:V.InfoDictionaryManager.Version,Build:V.InfoDictionaryManager.Build,Release:V.InfoDictionaryManager.ReleaseChannel,Bundle:V.InfoDictionaryManager.Identifier.split(".")[2]},React:{Version:n.version,Bytecode:r["Bytecode Version"],Hermes:r["OSS Release Version"],Native:`${(e=s.major)!=null?e:0}.${(t=s.minor)!=null?t:0}.${(a=s.patch)!=null?a:0}`},Native:{Version:V.DCDDeviceManager.systemVersion,Device:mt,Manufacturer:V.DCDDeviceManager.deviceManufacturer,Idiom:o.interfaceIdiom}}}async function gt(e,t){return await j(async function(){let a=[`**[${i}] Debug Information**
`];const r=await $e();return Object.keys(e).forEach(o=>{Object.values(e[o]).some(s=>s)&&a.push(`[**${o}**]`),Object.keys(e[o]).forEach(s=>{e[o][s]&&r[o][s]&&a.push(`> **${s}**: ${r[o][s]}`)})}),a.join(`
`)},[e],i,"creating debug info at",t)}var O={fetchDebugArguments:$e,debugInfo:gt};function b(e){return window.enmity.assets.getIDByName(e)}var u={Translate:b("img_nitro_star"),Revert:b("ic_highlight"),Debug:b("debug"),Retry:b("ic_message_retry"),Failed:b("Small"),Cancel:b("ic_megaphone_nsfw_16px"),Delete:b("ic_message_delete"),Copy:b("toast_copy_link"),Open:b("ic_leave_stage"),Clipboard:b("pending-alert"),Add:b("ic_add_perk_24px"),Clock:b("clock"),Settings:{Toasts:{Context:b("toast_image_saved"),Settings:b("ic_selection_checked_24px"),Failed:b("ic_close_circle_24px")},TranslateFrom:b("ic_raised_hand_list"),TranslateTo:b("ic_activity_24px"),Debug:b("ic_rulebook_16px"),Initial:b("coffee"),Update:b("discover"),Locale:b("ic_locale_24px"),Back:b("ios-back")}};const ut={messageSpoofer:"69",copyEmbed:"1337",invisChat:"420",cutMessage:"512",dislate:"1002",viewRaw:"-1"},dt=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),me=P.createThemedStyleSheet({container:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:d.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.PRIMARY_MEDIUM,fontSize:16},title:{color:"white",fontFamily:d.Fonts.PRIMARY_NORMAL}}),ht={cardStyle:me.card,headerStyle:me.header,headerTitleContainerStyle:{color:d.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}},yt=(e,t)=>{w.open({content:t=="clipboard"?`Copied ${e} to clipboard.`:e,source:t=="clipboard"?u.Clipboard:u.Settings.Initial})},ft=e=>j(()=>{if(parseInt(ce.substring(0,3))>164){const{RawColor:t}=I("SemanticColor");return t[e[Ee.theme].raw]}return e[{dark:0,light:1,amoled:2}[Ee.theme]]},[e],i,"getting a formatted color for both newest and older versions"),pt=(e,t,a,r=186,o)=>j(()=>{var s;let l=(s=ft(e))==null?void 0:s.replace("#","");const g=(v,R,F)=>parseInt(v.substring(R[0],R[1]),F),p=g(l,[0,2],16),c=g(l,[2,4],16),f=g(l,[4,6],16);return(p+c+f)/(255*3)>r?a:t},[e,t,a,r],i,"checking if color should be light or dark at",o);var E={externalPlugins:ut,shadow:dt,PageStyles:me,PageOptions:ht,displayToast:yt,filterColor:pt};async function wt(e,t){await j(async function(){var a;e.type==="storage"?await le.setItem(e.name,JSON.stringify(e.content)):_(i,e.name,e.content);const r=JSON.parse((a=h(i,"state_store",null))!=null?a:"[]");r.find(o=>o.name===e.name)||r.push(e),_(i,"state_store",JSON.stringify(r))},[e],i,"storing an item in plugin file or storage at",t)}var X={item:wt};const bt=(e,t)=>e.split(t?/(?=[A-Z])/:"_").map(a=>a[0].toUpperCase()+a.slice(1)).join(" ");var $={string:bt};async function Et(){await j(async function(){const e=`${M.download}?${Math.floor(Math.random()*1001)}.js`,t=await(await fetch(e)).text(),a=t.match(/\d+\.\d+\.\d+/g),r=t.match(/hash:"(.*?)"/);if(!a&&!r)return vt(i,[Y,M.build]);const o=a&&a[0],s=r&&r[1];return o&&o!=Y?De(e,o,"version"):s&&s!=M.hash?De(e,s,"build"):St(i,[Y,M.hash])},[M],i,"checking if latest version at","the async check for updates callback")}const De=(e,t,a)=>{k.show({title:"Update found",body:`A newer ${a} is available for ${i}. ${a=="build"?`
The version will remain at ${Y}, but the build will update to ${t}.`:""}
Would you like to install ${a} \`${t}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Tt(e,t,a)})},St=(e,[t,a])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${t} and build ${a}`),k.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${t}\`
Build: \`${a}\``,confirmText:"Okay"})},vt=(e,[t,a])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${t} and ${a}`),k.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${t}\`
Build: \`${a}\``,confirmText:"Okay"})};async function Tt(e,t,a){await j(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?k.show({title:`Updated ${i}`,body:`Successfully updated to ${a} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>ct()}):console.log(`[${i}] Plugin failed to update to ${a} ${t}.`)})},[e,t,a],i,"installing plugin because","new version available")}var $t={checkForUpdates:Et},Le;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Le||(Le={}));var Q;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(Q||(Q={}));var Z;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(Z||(Z={}));var Ce;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Ce||(Ce={}));var z;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(z||(z={}));var xe;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(xe||(xe={}));var U=["Detect","Bulgarian","Czech","Danish","German","Greek","English","Spanish","Estonian","Finnish","French","Hungarian","Indonesian","Italian","Japanese","Korean","Lithuanian","Latvian","Norwegian","Dutch","Polish","Portuguese","Romanian","Russian","Slovak","Slovenian","Swedish","Turkish","Ukrainian","Chinese"],W=["AUTO","BG","CS","DA","DE","EL","EN","ES","ET","FI","FR","HU","ID","IT","JA","KO","LT","LV","NB","NL","PL","PT","RO","RU","SK","SL","SV","TR","UK","ZH"];const ge=P.createThemedStyleSheet({icon:{color:d.ThemeColorMap.INTERACTIVE_NORMAL},disabled:{color:d.ThemeColorMap.TEXT_MUTED},enabled:{color:d.ThemeColorMap.INTERACTIVE_NORMAL}});var Dt=({option:e,parent:t,debugOptions:a,onConfirm:r})=>{const[o,s]=n.useState(h(i,t,{})[e]);return n.useEffect(()=>{const l=h(i,t,{});l[e]||X.item({name:t,content:{...l,[e]:!1},type:"setting",override:{}})},[]),n.createElement(y,{key:e,label:e,onPress:()=>{const l=h(i,t,{});X.item({name:t,content:{...l,[e]:!l[e]},type:"setting",override:{}}),s(h(i,t,{})[e])},onLongPress:async function(){await r(await O.debugInfo({[t]:{[e]:!0}}),`${t} \u279D ${e}`)},leading:n.createElement(y.Icon,{style:ge.icon,source:o?u.Settings.Toasts.Settings:u.Settings.Toasts.Failed}),trailing:()=>n.createElement(L,{style:[{paddingTop:5,paddingBottom:5,paddingRight:10},o?ge.enabled:ge.disabled]},a[t][e])})};const Re={standard:{backgroundColor:"rgba(0, 0, 0, 0.5)",marginTop:20},floating:{position:"absolute",bottom:0,marginBottom:30,backgroundColor:"rgba(0, 0, 0, 0.8)"}},G=P.createThemedStyleSheet({button:{width:"90%",borderRadius:10,marginLeft:"5%",marginRight:"5%",...E.shadow()},text:{color:"#f2f2f2",textAlign:"left",letterSpacing:.25,padding:10},textHeader:{fontSize:20,fontFamily:d.Fonts.PRIMARY_BOLD},textContent:{fontSize:16,fontFamily:d.Fonts.PRIMARY_NORMAL},image:{width:25,height:25,borderRadius:4,position:"absolute",right:0,margin:10}}),Ae=window.enmity,ue=Ae.modules.common.Components.General.Animated,Lt=Ae.modules.common.Components.General.Easing;var Ie=({label:e,content:t,type:a})=>{const r=n.useRef(new ue.Value(1)).current;async function o(){const l=()=>ue.timing(r,{toValue:0,duration:250,useNativeDriver:!0,easing:Lt.sin}).start();k.show({title:"Close Tip?",body:"You can either hide this information box forever, or just hide it until you open this page again.",confirmText:"Don't Show Again",cancelText:"Cancel",onConfirm:async function(){await X.item({name:e,content:!0,type:"setting",override:!1},`storing dialog at ${e} in Dialog component`),l()}})}const s={transform:[{scale:r}]};return h(i,e,!1)?n.createElement(n.Fragment,null):n.createElement(ue.View,{style:s},n.createElement(A,{style:[G.button,Re[a]||Re.standard],onPress:async function(){await o()}},n.createElement(T,{style:{width:"100%",flexDirection:"row"}},n.createElement(fe,{style:G.image,source:{uri:we.getCurrentUser().getAvatarURL()}})),n.createElement(L,{style:[G.text,G.textHeader]},e),n.createElement(L,{style:[G.text,G.textContent]},t)))};const Pe=P.createThemedStyleSheet({text:{color:d.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:d.Fonts.PRIMARY_BOLD,fontSize:12}});var ee=({label:e,children:t})=>n.createElement(T,{style:{marginTop:10}},n.createElement(L,{style:[Pe.text,Pe.optionText]},e.toUpperCase()),t);const D=P.createThemedStyleSheet({button:{width:"42.5%",height:50,justifyContent:"center",alignItems:"center",backgroundColor:d.ThemeColorMap.HEADER_PRIMARY,borderRadius:10,marginLeft:"5%",marginTop:20,marginBottom:5},buttonContainer:{flexDirection:"row"},text:{color:E.filterColor(d.ThemeColorMap.HEADER_PRIMARY,"#f2f2f2","#121212",.8,"buttons in debug info menu"),textAlign:"center",paddingLeft:10,paddingRight:10,letterSpacing:.25,fontFamily:d.Fonts.PRIMARY_BOLD},buttonText:{fontSize:16},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...E.shadow()},pageContainer:{paddingTop:200,top:-200,paddingBottom:300,marginBottom:-450,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY},searchWrapper:{flexDirection:"row"},searchContainer:{borderRadius:11,width:"65%",overflow:"hidden",marginTop:15,marginLeft:"5%",marginRight:"5%"},search:{margin:0,padding:0,borderBottomWidth:0,background:"none",backgroundColor:"none"},title:{color:d.ThemeColorMap.HEADER_SECONDARY,fontFamily:d.Fonts.DISPLAY_BOLD,letterSpacing:.25,textAlign:"center"},titleContainer:{width:"20%",marginTop:15,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,borderRadius:10,justifyContent:"center",alignItems:"center"}}),Ct=pe("StaticSearchBarContainer"),xt=I("openLazy","hideActionSheet");var Rt=({onConfirm:e,type:t})=>{const[a,r]=n.useState([]),[o,s]=n.useState("");return n.useEffect(async function(){r(await O.fetchDebugArguments())},[]),n.createElement(re,{style:D.pageContainer},n.createElement(T,{style:[D.searchWrapper,{...E.shadow(.05)}]},n.createElement(T,{style:D.searchContainer},n.createElement(Ct,{placeholder:"Search...",style:D.search,inputStyle:D.search,onChangeText:l=>s(l),collapsable:!0,value:o})),n.createElement(A,{style:D.titleContainer,onPress:()=>{Object.keys(a).forEach(l=>{Object.keys(a[l]).forEach(g=>{X.item({name:l,content:{...h(i,l),[g]:!1},type:"setting",override:{}})})}),xt.hideActionSheet(),w.open({content:"Successfully cleared all debug options.",source:u.Delete})}},n.createElement(L,{style:D.title},"Clear All"))),n.createElement(T,{style:D.buttonContainer},n.createElement(A,{style:D.button,onPress:async function(){await e(await O.debugInfo(await O.fetchDebugArguments()),"full debug log")}},n.createElement(L,{style:[D.text,D.buttonText]},$.string(t!=null?t:"send")," All")),n.createElement(A,{style:D.button,onPress:async function(){const l=Object.keys(a).map(g=>{var p;return{[g]:(p=h(i,g,{}))!=null?p:{}}}).reduce((g,p)=>({...g,...p}),{});await e(await O.debugInfo(l),"partial debug log")}},n.createElement(L,{style:[D.text,D.buttonText]},$.string(t!=null?t:"send")," Message"))),Object.keys(a).map(l=>n.createElement(ee,{label:l},n.createElement(T,{style:D.container},Object.keys(a[l]).filter(g=>o?g.toLowerCase().includes(o):g).map((g,p,c)=>n.createElement(n.Fragment,null,n.createElement(Dt,{option:g,parent:l,debugOptions:a,onConfirm:e}),p!==c.length-1?n.createElement(N,null):null))))),n.createElement(Ie,{label:"Information",content:`You can either tap on each item to toggle it and press "${$.string(t!=null?t:"send")} Message", or you can long-press on an item to only send that item.

To close this dialog, press on it.`,type:"standard"}))},Me;const _e=((Me=et(e=>{var t,a;return((a=(t=e.default)==null?void 0:t.render)==null?void 0:a.name)==="ActionSheet"}))!=null?Me:{default:{render:!1}}).default.render,At=I("BottomSheetScrollView").BottomSheetScrollView,It=I("openLazy","hideActionSheet");function Fe({onConfirm:e,type:t}){_e?It.openLazy(new Promise(a=>a({default:Pt})),"DebugInfoActionSheet",{onConfirm:e,type:t}):w.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:u.Failed})}function Pt({onConfirm:e,type:t}){return n.createElement(_e,{scrollable:!0},n.createElement(At,{contentContainerStyle:{marginBottom:50}},n.createElement(Rt,{onConfirm:e,type:t})))}var Ne,Be,ke;const Mt=I("openLazy","hideActionSheet"),Oe=e=>({async debug(){return await new Promise(t=>{Fe({onConfirm:(a,r)=>{Mt.hideActionSheet(),w.open({content:`Sent ${r} in #${e}`,source:u.Settings.Toasts.Settings}),t({content:a})},type:"send"})})},async example(){const t="Example Message. Enmity is a state or feeling of active opposition or hostility.",a=Math.floor(Math.random()*U.length),r=U[a],o=await J.string(t,{fromLanguage:"Detect",toLanguage:r},Object.assign({},...U.map((s,l)=>({[s]:W[l]}))));return await new Promise(s=>{k.show({title:"Are you sure?",body:`**This is a testing message.**
You are about to send the following:

**English:** ${t}

**${$.string(r)}:** ${o}

Are you sure you want to send this? :3`,confirmText:"Yep, send it!",cancelText:"Nope, don't send it",onConfirm:()=>{w.open({content:`Sent test message in #${e}.`,source:u.Translate}),s({content:`**[${i}] Test Message**

**English:** ${t}
**${$.string(r)}:** ${o}`})},onCancel:()=>{w.open({content:"Cancelled translated message request.",source:u.Cancel}),s({})}})})},async clearStores(){var t,a;const r=(t=JSON.parse(h(i,"state_store",null)))!=null?t:[];for(let o=0;o<r.length;o++){const s=r[o];s.type==="storage"?await le.removeItem(s.name):_(i,s.name,(a=s.override)!=null?a:!1)}_(i,"state_store",null),w.open({content:`Cleared all ${i} stores.`,source:u.Settings.Toasts.Settings})},async download(){return await new Promise(t=>{ie.setString(`${M.download}?${Math.floor(Math.random()*1001)}.js`),E.displayToast("download link","clipboard"),t({})})}}),_t=Object.keys(Oe("placeholder")).map(e=>({name:$.string(e,!0),displayName:$.string(e,!0),value:e}));var Ft={id:`${(Ne=i)==null?void 0:Ne.toLowerCase()}`,name:`${(Be=i)==null?void 0:Be.toLowerCase()}`,displayName:`${(ke=i)==null?void 0:ke.toLowerCase()}`,description:`Choose from a list of options for debugging in ${i}.`,displayDescription:`Choose from a list of options for debugging in ${i}.`,type:Q.Chat,inputType:Z.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute.",displayDescription:"The type of command to execute.",type:z.String,choices:[..._t],required:!0}],async execute(e,t){var a;const r=e.find(l=>l.name==="type").value,o=Oe(t.channel.name),s=()=>{w.open({content:"Invalid command argument.",source:u.Clock})};return await((a=o[r])!=null?a:s)()}};function Nt(e,t,a,r){window.enmity.clyde.sendReply(e,t,a,r)}const Bt=U.filter(e=>e!=="Detect").map(e=>({name:$.string(e),displayName:$.string(e),value:e}));var kt={id:"translate",name:"translate",displayName:"translate",description:`Send a message using ${i} in any language chosen, using the Google Translate API.`,displayDescription:`Send a message using ${i} in any language chosen, using the Google Translate API.`,type:Q.Chat,inputType:Z.BuiltInText,options:[{name:"text",displayName:"text",description:`The text/message for ${i} to translate. Please note some formatting of mentions and emojis may break due to the API.`,displayDescription:`The text/message for ${i} to translate. Please note some formatting of mentions and emojis may break due to the API.`,type:z.String,required:!0},{name:"language",displayName:"language",description:`The language that ${i} will translate the text into. This can be any language from the list, except "Detect".`,displayDescription:`The language that ${i} will translate the text into. This can be any language from the list, except "Detect".`,type:z.String,choices:[...Bt],required:!0}],async execute(e,t){const a=e.find(c=>c.name==="text").value,r=e.find(c=>c.name==="language").value,o=Object.assign({},...U.map((c,f)=>({[c]:W[f]}))),s=/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}?:fx/,l=h("Dislate-DeepL","deeplApiKey");if(!l||!s.test(l)){w.open({content:"Invalid API Key",source:u.Failed});return}const g=await J.string(a,{fromLanguage:h(i,"DislateLangFrom","Detect"),toLanguage:r},o),p=await J.string(g,{fromLanguage:h(i,"DislateLangFrom","Detect"),toLanguage:h(i,"DislateLangTo","English")},o);return!g||!p?(Nt(t.channel.id,`Failed to send message in #${t.channel.name}`),{}):await new Promise(c=>{k.show({title:"Are you sure?",body:`The message **about to be sent** is:
\`${g}\`

In **${$.string(h(i,"DislateLangTo","English"))}**, this will translate to:
\`${p}\`

${h(i,"DislateBothLangToggle",!1)?`**Note: Sending original and translated**
`:""}Are you sure you want to send this? :3`,confirmText:"Yep, send it!",cancelText:"Nope, don't send it",onConfirm:()=>{w.open({content:`Sent message in #${t.channel.name}, which was translated into ${$.string(r)}.`,source:u.Translate}),c({content:h(i,"DislateBothLangToggle",!1)?`${a}

${g}`:g})},onCancel:()=>{w.open({content:"Cancelled translated message request.",source:u.Cancel}),c({})}})})}};const Ot=P.createThemedStyleSheet({container:{width:"95%",marginLeft:"2.5%",borderRadius:10,marginTop:15,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY}}),te=window.enmity.modules.common.Components.General.Animated;var Ut=({language:e,languages:t,selected:a,setSelected:r})=>{const o=be.useNavigation(),s=Object.assign({},...W.map(v=>[v])),l=n.useRef(new te.Value(1)).current,g=()=>te.spring(l,{toValue:1.05,duration:250,useNativeDriver:!0}).start(),p=()=>te.spring(l,{toValue:1,duration:250,useNativeDriver:!0}).start(),c={transform:[{scale:l}]},f=v=>{var R;_(i,`DislateLang${h(i,"DislateLangFilter")?"To":"From"}`,v),w.open({content:`Set ${t[v].toUpperCase()} as Language to Translate ${h(i,"DislateLangFilter")?"to":"from"}.`,source:h(i,"DislateLangFilter")?u.Settings.TranslateTo:u.Settings.TranslateFrom}),r(h(i,`DislateLang${h(i,"DislateLangFilter")?"To":"From"}`)),(R=o==null?void 0:o.pop)==null||R.call(o)};return n.createElement(n.Fragment,null,n.createElement(A,{onPress:()=>f(e),onLongPress:()=>f(e),onPressIn:g,onPressOut:p},n.createElement(te.View,{style:[c,Ot.container]},n.createElement(y,{label:$.string(e),subLabel:`Aliases: ${t[e]}, ${s[t[e]]}`,trailing:()=>n.createElement(y.Arrow,null),leading:n.createElement(y.Icon,{style:{color:d.ThemeColorMap.INTERACTIVE_NORMAL},source:a===e?u.Settings.Toasts.Settings:u.Add})}))))};const Vt=pe("StaticSearchBarContainer");var Yt=({languages:e})=>{const[t,a]=n.useState([]),[r,o]=n.useState(e),[s,l]=n.useState(!1),[g,p]=n.useState(h(i,`DislateLang${h(i,"DislateLangFilter")?"To":"From"}`));return n.createElement(T,{style:{marginBottom:50}},n.createElement(Vt,{placeholder:"Search Language",onChangeText:c=>a(c)}),n.createElement(re,{refreshControl:n.createElement(Xe,{refreshing:s,onRefresh:async function(){l(!0),o(Object.assign({},...U.map((c,f)=>({[c]:W[f]})))),l(!1)}})},n.createElement(T,{style:{paddingBottom:30}},n.createElement(Je,{data:Object.keys(r).filter(c=>c.toLowerCase().includes(t)),renderItem:({item:c})=>h(i,"DislateLangFilter")&&c=="Detect"?n.createElement(n.Fragment,null):n.createElement(Ut,{language:c,languages:r,selected:g,setSelected:p}),keyExtractor:c=>c}))),n.createElement(Ie,{label:"Important",content:`You can either press or long-press on an item to select it as the language to translate ${h(i,"DislateLangFilter")?"to":"from"}. Your current selected language has a \u2713 next to it.

To hide this dialog, press on it.`,type:"floating"}))};const x=P.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...E.shadow()},image:{width:75,height:75,borderRadius:10,...E.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:d.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),ne=window.enmity.modules.common.Components.General.Animated,de=I("transitionToGuild","openURL");var jt=({manifest:{name:e,version:t,plugin:a,authors:r}})=>{const o=n.useRef(new ne.Value(1)).current,s=()=>ne.spring(o,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),l=()=>ne.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start(),g=()=>de.openURL(a.repo),p={transform:[{scale:o}]};return n.createElement(T,{style:x.container},n.createElement(A,{onPress:g,onPressIn:s,onPressOut:l},n.createElement(ne.View,{style:p},n.createElement(fe,{style:[x.image],source:{uri:we.getCurrentUser().getAvatarURL()}}))),n.createElement(T,{style:x.textContainer},n.createElement(A,{onPress:()=>de.openURL(a.repo)},n.createElement(L,{style:[x.mainText,x.header]},e)),n.createElement(T,{style:{flexDirection:"row"}},n.createElement(L,{style:[x.mainText,x.subHeader]},"A project by"),r.map((c,f,v)=>n.createElement(A,{onPress:()=>de.openURL(c.profile)},n.createElement(L,{style:[x.mainText,x.subHeader,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},c.name,f<v.length-1?",":null)))),n.createElement(T,null,n.createElement(A,{style:{flexDirection:"row"},onPress:async function(){const c=await O.fetchDebugArguments();ie.setString(await O.debugInfo(c)),E.displayToast("debug information","clipboard")}},n.createElement(L,{style:[x.mainText,x.subHeader]},"Version:"),n.createElement(L,{style:[x.mainText,x.subHeader,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},t)))))};const C=P.createThemedStyleSheet({icon:{tintColor:d.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:d.ThemeColorMap.TEXT_MUTED,fontFamily:d.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...E.shadow()},subheaderText:{color:d.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:d.Fonts.PRIMARY_BOLD,fontSize:14}});function Ue({manifest:e,renderPage:t,Navigation:a,languages:r,kind:o}){return n.createElement(y,{label:`Translate ${$.string(o)}`,leading:n.createElement(y.Icon,{style:C.icon,source:o==="to"?u.Settings.TranslateTo:u.Settings.TranslateFrom}),trailing:()=>{var s;return n.createElement(T,{style:{flexDirection:"row",justifyContent:"center",alignItems:"center"}},n.createElement(L,{adjustsFontSizeToFit:!0,style:C.item},(s=$.string(h(e.name,`DislateLang${$.string(o)}`,"Detect")))!=null?s:"N/A"),n.createElement(y.Arrow,null))},onPress:()=>{_(e.name,"DislateLangFilter",o==="to"),t(a,{pageName:`Translate ${q(e.name,"DislateLangFilter",!0)?"To":"From"}`,pagePanel:()=>n.createElement(Yt,{languages:r})})},onLongPress:()=>E.displayToast('Open a new page allowing you to choose a language that you can translate from. The default is "Detect".',"tooltip")})}const Ve=I("transitionToGuild","openURL"),Gt=I("openLazy","hideActionSheet"),H=parseInt(ce.split(".")[0])>163?15:0;var Ht=({settings:e,manifest:t,languages:a,renderPage:r})=>{const o=be.useNavigation();return n.createElement(re,null,n.createElement(jt,{manifest:t}),n.createElement(T,{style:{marginTop:20}},n.createElement(ee,{label:"Translate"},n.createElement(T,{style:C.container},n.createElement(Qe,{value:e.get("deeplApiKey"),onChange:s=>e.set("deeplApiKey",s||void 0),title:"API Key",placeholder:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx"}),n.createElement(Ue,{manifest:t,renderPage:r,Navigation:o,languages:a,kind:"from"}),n.createElement(N,null),n.createElement(Ue,{manifest:t,renderPage:r,Navigation:o,languages:a,kind:"to"}),n.createElement(N,null),n.createElement(y,{label:"Abbreviate Language",leading:n.createElement(y.Icon,{style:C.icon,source:u.Retry}),subLabel:"Label language in a shorter form when translating (English \u279D EN).",onLongPress:()=>E.displayToast("Convert the full language name to an abbreviation when translating someone else's message. (test [English] \u279D test [EN])","tooltip"),trailing:()=>n.createElement(se,{value:e.getBoolean("DislateLangAbbr",!1),style:{marginLeft:-H},onValueChange:()=>{e.toggle("DislateLangAbbr",!1),w.open({content:`Successfully ${e.getBoolean("DislateLangAbbr",!1)?"enabled":"disabled"} language abbreviations.`,source:u.Settings.Toasts.Settings})}})}),n.createElement(N,null),n.createElement(y,{label:"Send Original",leading:n.createElement(y.Icon,{style:C.icon,source:u.Settings.Locale}),subLabel:"Send both the Original and Translated message when using /translate.",onLongPress:()=>E.displayToast("When using the /translate command, send both the original message and the translated message at once.","tooltip"),trailing:()=>n.createElement(se,{value:e.getBoolean("DislateBothLangToggle",!1),style:{marginLeft:-H},onValueChange:()=>{e.toggle("DislateBothLangToggle",!1),w.open({content:`Now sending ${e.getBoolean("DislateBothLangToggle",!1)?"original and translated":"only translated"} message.`,source:u.Settings.Toasts.Settings})}})}))),n.createElement(ee,{label:"Utility"},n.createElement(T,{style:C.container},n.createElement(y,{label:"Initialisation Toasts",leading:n.createElement(y.Icon,{style:C.icon,source:u.Settings.Initial}),subLabel:`Toggle initialisation toasts to display loading state of ${t.name}.`,onLongPress:()=>E.displayToast(`When Enmity is first started, show toasts based on ${t.name}'s current state (starting, failed, retrying, etc)`,"tooltip"),trailing:()=>n.createElement(se,{value:e.getBoolean("toastEnable",!1),style:{marginLeft:-H},onValueChange:()=>{e.toggle("toastEnable",!1),w.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:u.Settings.Toasts.Settings})}})}),n.createElement(N,null),n.createElement(y,{label:"Open Debug Info",subLabel:`Open useful page to copy debug information like version and build of ${t.name} to clipboard.`,onLongPress:()=>E.displayToast(`Copy the full debug log to clipboard including ${t.name}'s Version, Build, and Release, Enmity's Version and Build, etc.`,"tooltip"),leading:n.createElement(y.Icon,{style:C.icon,source:u.Copy}),trailing:()=>n.createElement(y.Arrow,{style:{marginLeft:-H}}),onPress:()=>{Fe({onConfirm:(s,l)=>{Gt.hideActionSheet(),ie.setString(s),E.displayToast(`${l}`,"clipboard")},type:"copy"})}}),n.createElement(N,null),n.createElement(y,{label:"Clear Stores",subLabel:`Void most of the settings and stores used throughout ${t.name} to store data locally.`,onLongPress:()=>E.displayToast(`Clear stores and settings throughout ${t.name} including the settings to hide popups forever and the list of device codes.`,"tooltip"),leading:n.createElement(y.Icon,{style:C.icon,source:u.Delete}),trailing:()=>n.createElement(y.Arrow,{style:{marginLeft:-H}}),onPress:async function(){var s,l;const g=(s=JSON.parse(h(t.name,"state_store",null)))!=null?s:[];for(let p=0;p<g.length;p++){const c=g[p];c.type==="storage"?await le.removeItem(c.name):_(t.name,c.name,(l=c.override)!=null?l:!1)}_(t.name,"state_store",null),w.open({content:`Cleared all ${t.name} stores.`,source:u.Settings.Toasts.Settings})}}))),n.createElement(ee,{label:"Source"},n.createElement(T,{style:C.container},n.createElement(y,{label:"Check for Updates",subLabel:`Search for any ${t.name} updates and notify you if an update is available.`,onLongPress:()=>E.displayToast(`Search GitHub for any new version or build of ${t.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:n.createElement(y.Icon,{style:C.icon,source:u.Settings.Update}),trailing:()=>n.createElement(y.Arrow,{style:{marginLeft:-H}}),onPress:async function(){await $t.checkForUpdates()}}),n.createElement(N,null),n.createElement(y,{label:"Source",subLabel:`Open the repository of ${t.name} externally.`,onLongPress:()=>E.displayToast(`Opens the repository of ${t.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:n.createElement(y.Icon,{style:C.icon,source:u.Open}),trailing:()=>n.createElement(y.Arrow,null),onPress:()=>{Ve.openURL(t.plugin.repo)}}),n.createElement(y,{label:"Original Source",subLabel:"Open the repository of original Dislate externally.",onLongPress:()=>E.displayToast("Opens the repository of Dislate on GitHub in an external page to view any source code of the plugin.","tooltip"),leading:n.createElement(y.Icon,{style:C.icon,source:u.Open}),trailing:()=>n.createElement(y.Arrow,null),onPress:()=>{Ve.openURL(t.plugin.originalRepo)}})))),n.createElement(L,{style:C.subheaderText},`Build: (${t.plugin.hash}) Release: (${t.release})`))};const[Kt,zt,Ye,je,Ge,He,he]=tt(B.byProps("getChannel","getDMFromUserId"),B.byName("Icon"),B.byProps("openLazy","hideActionSheet"),B.byProps("Messages"),B.byName("ActionSheet",!1),B.byProps("EmojiRow"),B.byProps("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue")),ae=nt(S.name),ye=Object.assign({},...U.map((e,t)=>({[e]:W[t]})));let oe=[{invalid_id:"rosie sucks"}];const Ke={...S,commands:[],patchActionSheet({data:{message:e,res:t}}){let a="Translate",r=0;if(!(t!=null&&t.props)){console.log(`[${S.name} Local Error: Property "props" Does not Exist on "res"]`);return}const o=ve(t,c=>Array.isArray(c)&&c.find(f=>{var v;return typeof(f==null?void 0:f.key)=="string"&&typeof((v=f==null?void 0:f.props)==null?void 0:v.message)=="string"}));if(!o){console.log(`[${S.name} Local Error: 'finalLocation' seems to be undefined!]`);return}Object.values(E.externalPlugins).forEach(c=>{o.find(f=>{if(f.key!==E.externalPlugins.dislate)return f.key===c})&&r++});for(const c of[o.find(f=>{var v;return((v=f.props)==null?void 0:v.message)===je.Messages.MESSAGE_ACTION_REPLY}),o.find(f=>{var v;return((v=f.props)==null?void 0:v.message)===je.Messages.EDIT_MESSAGE})])c&&r++;if(!(e!=null&&e.content)){console.log(`[${S.name}] No message content.`);return}const s=e==null?void 0:e.id,l=e==null?void 0:e.content,g=oe.find(c=>Object.keys(c)[0]===s,"cache object");a=g?"Revert":"Translate";const p=n.createElement(y,{key:E.externalPlugins.dislate,label:a,leading:n.createElement(zt,{source:a==="Translate"?u.Translate:u.Revert}),onPress:()=>{const c=/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}?:fx/,f=h("Dislate-DeepL","deeplApiKey");if(!f||!c.test(f)){Ye.hideActionSheet(),w.open({content:"Invalid API Key",source:u.Failed});return}const v=h(S.name,"DislateLangFrom","Detect"),R=h(S.name,"DislateLangTo","English"),F=a==="Translate";J.string(e.content,{fromLanguage:v,toLanguage:R},ye,!F).then(ze=>{const We={type:"MESSAGE_UPDATE",message:{...e,content:`${F?ze:g[s]} ${F?`\`[${q(S.name,"DislateLangAbbr",!1)?ye[R].toUpperCase():$.string(R)}]\``:""}`,guild_id:Kt.getChannel(e.channel_id).guild_id},log_edit:!1};he.dispatch(We),w.open({content:F?`Modified message to ${$.string(h(S.name,"DislateLangTo","English"))}.`:"Reverted message back to original state.",source:u.Translate}),F?oe.unshift({[s]:l}):oe=oe.filter(qe=>qe!==g,"cached data override")}),Ye.hideActionSheet()}});o.splice(r,0,p)},onStart(){var e;this.commands=[Ft,kt];let t=0;const a=3;try{t++;let r=q(S.name,"toastEnable",!1);try{he==null||he.dispatch({type:"MESSAGE_UPDATE",message:{}})}catch(o){console.error(`[${S.name} Local Error When Waking Up FluxDispatcher ${o}]`)}console.log(`[${S.name}] delayed start attempt ${t}/${a}.`),r&&((e=w)==null||e.open({content:`[${S.name}] start attempt ${t}/${a}.`,source:u.Debug}));try{parseInt(ce.substring(0,3))>164?typeof Ge.default=="function"&&ae.after(Ge,"default",(o,s,l)=>{const g=ve(l,p=>p.sheetKey);(g==null?void 0:g.sheetKey)&&g.sheetKey!=="MessageLongPressActionSheet"||ae.after(g==null?void 0:g.content,"type",(p,[{message:c}],f)=>{this.patchActionSheet({data:{message:c,res:f}})})}):typeof He.default=="function"&&ae.after(He,"default",(o,[{message:s}],l)=>{this.patchActionSheet({data:{message:s,res:l}})})}catch(o){console.error(`[${S.name}] Local ${o} At Intermediate Level`),r&&w.open({content:`[${S.name}] failed to open action sheet.`,source:u.Retry})}}catch(r){console.error(`[${S.name}] Local ${r} At Top Level`);let o=q(S.name,"toastEnable",!1);if(t<a){const s=`[${S.name}] failed to initialise. Trying again in ${t}0s.`;console.warn(s),o&&w.open({content:s,source:u.Retry}),setTimeout(this.initializeActionSheet(),t*1e4)}else{const s=`[${S.name}] failed to initialise. Giving up.`;console.error(s),o&&w.open({content:s,source:u.Failed})}}},onStop(){ae.unpatchAll(),this.commands=[]},renderPage(e,{pageName:t,pagePanel:a}){var r;return(r=e==null?void 0:e.push)==null?void 0:r.call(e,"EnmityCustomPage",{pageName:t,pagePanel:a})},getSettingsPanel({settings:e}){return n.createElement(Ht,{settings:e,manifest:S,renderPage:Ke.renderPage,languages:ye})}};Ze(Ke);
