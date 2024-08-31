var R="ReplaceTimestamps",T="1.3.0",V="Replaces plaintext 24 hour timestamps into Discord's timestamps",L=[{name:"domi.btnr",id:"354191516979429376"}],B="#E54B4B",H="https://raw.githubusercontent.com/domi-btnr/Enmity-Stuff/main/dist/ReplaceTimestamps.js",k="https://github.com/domi-btnr/Enmity-Stuff/tree/main/ReplaceTimestamps",A=["Improved REGEX",'Support for relative Times. Use "in 5m" or "2h ago"','"s" for seconds','"m" for minutes','"h" for hours','"d" for days','"w" for weeks','"mo" for months','"y" for years'],P="DEBUG",$={name:R,version:T,description:V,authors:L,color:B,rawUrl:H,sourceUrl:k,changelog:A,hash:P};function D(o,e,n){window.enmity.settings.set(o,e,n)}function x(o,e,n){return window.enmity.settings.get(o,e,n)}function Y(o){window.enmity.plugins.registerPlugin(o)}const y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const O=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const M=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const j=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const z=window.enmity.modules.common.Linking,G=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function W(o){return window.enmity.patcher.create(o)}const{native:E}=window.enmity;function X(){E.reload()}E.version,E.build,E.device,E.version;const U={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:o,version:e,rawUrl:n,changelog:i,hash:s}){if(!o||!e||!n||!i||!s)return console.error(`[${o||__filename}] Missing parameters in constructor`);this.name=o,this.version=e,this.rawUrl=n,this.changelog=i,this.hash=s,x(o,"_didUpdate",!1)||(x(o,"_changelog",e)!==e&&this.showChangelog(),x(o,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),D(o,"_didUpdate",!1)},showChangelog(){!this.changelog||M.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>D(this.name,"_changelog",this.version)})},async checkForUpdates(o=!1){var e,n,i,s,d,l;const w=await fetch(`${this.rawUrl}?${Math.random()}`);if(!w.ok)return console.error(`[${this.name}] Failed to fetch remote version`);const a=await w.text(),c=(e=a.match(/hash:(\w+)/))==null?void 0:e[1],u=(n=a.match(new RegExp(`${c}="([^,"]+)"`)))==null?void 0:n[1];u?this.remoteHash=u!=null?u:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const m=(i=a.match(/version:(\w+)/))==null?void 0:i[1],S=(s=a.match(new RegExp(`${m}="([^,"]+)"`)))==null?void 0:s[1];S?this.remoteVersion=S!=null?S:"0.0.0":console.warn(`[${this.name}] Failed to fetch remote version`);const h=(d=a.match(/changelog:(\w+)/))==null?void 0:d[1],g=(l=a.match(new RegExp(`${h}=\\["(.*?)"\\]`)))==null?void 0:l[0];if(g?this.remoteChangelog=JSON.parse(g.replace(`${h}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const p=this.version.split(".").map(Number),_=this.remoteVersion.split(".").map(Number);for(let b=0;b<p.length;b++){if(_[b]>p[b])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(_[b]<p[b])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!o||M.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:o,hash:e,changelog:n}){if(!o&&!e)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let i="";o?i=`New Version for ${this.name} is available!`:i=`New Build for ${this.name} is available!`,i+=`
Would you like to update now?`,n&&(i+=`

Changelog:
- ${n.join(`
- `)}`),M.show({title:"Plugin Updater",body:i,confirmText:"Update",cancelText:"No",onConfirm:()=>{D(this.name,"_didUpdate",!0),this.installPlugin(!!e)}})},installPlugin(o=!1){var e;const n=o?"updated Build":"updated Version",i=o?`\`${(e=this.remoteHash)==null?void 0:e.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:s})=>{s==="installed_plugin"||s==="overridden_plugin"?M.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${n} to **${i}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:X}):console.error(`[${this.name}] Failed to install v${i}`)})}},{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const K=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const f=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const F=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const v=t.FormRow,I=t.FormSection;t.FormSelect,t.FormSubLabel;const J=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes,U.create($);var q=({settings:o})=>{const e=G.createThemedStyleSheet({item:{color:y.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[n,i]=r.useState(),[s,d]=r.useState();return r.createElement(r.Fragment,null,r.createElement(K,{onTouchStart:l=>{i(l.nativeEvent.pageX),d(l.nativeEvent.pageY)},onTouchEnd:l=>{n-l.nativeEvent.pageX<-100&&s-l.nativeEvent.pageY<40&&s-l.nativeEvent.pageY>-40&&j.pop()}},r.createElement(F,null,r.createElement(F,{style:e.text_container},r.createElement(f,{style:[e.main_text,e.header]},R),r.createElement(F,{style:{flexDirection:"row"}},r.createElement(f,{style:[e.main_text,e.sub_header]},"Author:"),r.createElement(f,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},` ${L.map(l=>l.name).join(", ")}`)),r.createElement(F,{style:{flexDirection:"row"}},r.createElement(f,{style:[e.main_text,e.sub_header]},"Version:"),r.createElement(f,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},` ${T}`)),r.createElement(F,{style:{flexDirection:"row"}},r.createElement(f,{style:[e.main_text,e.sub_header]},"Hash:"),r.createElement(f,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},` ${P.slice(0,7)}`)))),r.createElement(I,{title:"Updates"},r.createElement(v,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:r.createElement(J,{value:o.getBoolean("autoUpdateCheck",!0),onValueChange:()=>o.toggle("autoUpdateCheck",!0)})}),r.createElement(v,{label:"Check for Updates",trailing:v.Arrow,onPress:()=>U.checkForUpdates(!0)}),r.createElement(v,{label:"Show Changelog",subLabel:`Shows the changelog for v${T}`,trailing:v.Arrow,onPress:()=>U.showChangelog(),disabled:!A.length})),r.createElement(I,{title:"Source"},r.createElement(v,{label:"Source",subLabel:`See the Source Code for ${R}`,trailing:v.Arrow,onPress:()=>z.openURL(k)}))))};const C=({str:o,format:e,dateRegexMatch:n,timeRegexMatch:i})=>{const s=o.match(i),d=o.match(n),l=x("dateFormat","dd.MM.yyyy").split(/[./]/);let w,a,c;l.forEach((h,g)=>{h.includes("dd")&&(w=g),h.includes("MM")&&(a=g),h.includes("yyyy")&&(c=g)});let u=new Date;if(d){const h=parseInt(d[w+1]),g=parseInt(d[a+1]),p=parseInt(d[c+1]);u=new Date(p,g-1,h)}let m=u;if(s){let[h,g]=s[1].split(";").map(p=>parseInt(p));s[2]&&s[2].toLowerCase()==="pm"&&h<12&&h!==0?(h+=12,g=g.toString().padStart(2,"0")):s[2]&&s[2].toLowerCase()==="am"&&h===12||h===24?h=0:g>=60&&(h+=Math.floor(g/60),g=(g%60).toString().padStart(2,"0")),m=new Date(u),m.setHours(h),m.setMinutes(g)}const S=Math.round(m.getTime()/1e3);return isNaN(S)?o:`<t:${S}${e?`:${e}`:""}>`},Q=({str:o,relativeRegexMatch:e})=>{const n=o.match(e);if(!n)return o;const i=new Date;let s=!1,d,l;if(n[1]&&n[2]?(d=parseInt(n[1]),l=n[2],s=!0):n[3]&&n[4]&&(d=parseInt(n[3]),l=n[4],s=!1),isNaN(d))return o;const w=((a,c,u,m)=>{switch(u.toLowerCase()){case"s":a.setSeconds(a.getSeconds()+(m?c:-c));break;case"m":a.setMinutes(a.getMinutes()+(m?c:-c));break;case"h":a.setHours(a.getHours()+(m?c:-c));break;case"d":a.setDate(a.getDate()+(m?c:-c));break;case"w":a.setDate(a.getDate()+(m?c*7:-c*7));break;case"mo":a.setMonth(a.getMonth()+(m?c:-c));break;case"y":a.setFullYear(a.getFullYear()+(m?c:-c));break}return a})(i,d,l,s);return`<t:${Math.round(w.getTime()/1e3)}:R>`},N=W($.name),Z={...$,onStart(){N.before(O,"sendMessage",(o,[,e])=>{const n=/(?<!\d)\d{1,2};\d{2}(?!\d)(am|pm)?/gi,i=/((?<!\d)\d{1,2};\d{2}(?!\d))(am|pm)?/i,s=x($.name,"dateFormat","dd.MM.yyyy").replace(/[./]/g,"[./]").replace("dd","(\\d{2})").replace("MM","(\\d{2})").replace("yyyy","(\\d{4})"),d=new RegExp(`${s}`,"gi"),l=new RegExp(`${s}`,"i"),w=new RegExp(`(${n.source})\\s+${d.source}`,"gi"),a=new RegExp(`${d.source}\\s+(${n.source})`,"gi"),c=/\b(?:in\s+(\d+)([smhdw]|mo|y)|(\d+)([smhdw]|mo|y)\s+ago)\b/gi,u=/\b(?:in\s+(\d+)([smhdw]|mo|y)|(\d+)([smhdw]|mo|y)\s+ago)\b/i;e.content.search(w)!==-1&&(e.content=e.content.replace(w,m=>C({str:m,dateRegexMatch:l,timeRegexMatch:i}))),e.content.search(a)!==-1&&(e.content=e.content.replace(a,m=>C({str:m,dateRegexMatch:l,timeRegexMatch:i}))),e.content.search(n)!==-1&&(e.content=e.content.replace(n,m=>C({str:m,format:"t",dateRegexMatch:l,timeRegexMatch:i}))),e.content.search(d)!==-1&&(e.content=e.content.replace(d,m=>C({str:m,format:"d",dateRegexMatch:l,timeRegexMatch:i}))),e.content.search(c)!==-1&&(e.content=e.content.replace(c,m=>Q({str:m,relativeRegexMatch:u})))})},onStop(){N.unpatchAll()},getSettingsPanel({settings:o}){return r.createElement(q,{settings:o})}};Y(Z);
