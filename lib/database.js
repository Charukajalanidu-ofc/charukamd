
/**
██╗░░██╗░█████╗░███╗░░██╗░██████╗░█████╗░███╗░░░███╗░█████╗░██╗░░░░░░░░░░░███╗░░░███╗██████╗░
██║░░██║██╔══██╗████╗░██║██╔════╝██╔══██╗████╗░████║██╔══██╗██║░░░░░░░░░░░████╗░████║██╔══██╗
███████║███████║██╔██╗██║╚█████╗░███████║██╔████╔██║███████║██║░░░░░█████╗██╔████╔██║██║░░██║
██╔══██║██╔══██║██║╚████║░╚═══██╗██╔══██║██║╚██╔╝██║██╔══██║██║░░░░░╚════╝██║╚██╔╝██║██║░░██║
██║░░██║██║░░██║██║░╚███║██████╔╝██║░░██║██║░╚═╝░██║██║░░██║███████╗░░░░░░██║░╚═╝░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░
🇲​​​​​🇦​​​​​🇩​​​​​🇪​​​​​ 🇧​​​​​🇾​​​​​ 🇮​​​​​🇲​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇦​​​​​ 🇭​​​​​🇦​​​​​🇳​​​​​🇸​​​​​🇦​​​​​🇲​​​​​🇦​​​​​🇱​​​​​*/


const _0x59a33f=_0x5495;(function(_0x557d30,_0x2ce6b6){const _0x122470=_0x5495,_0x2b3bca=_0x557d30();while(!![]){try{const _0x4839e4=-parseInt(_0x122470(0xa4))/0x1+parseInt(_0x122470(0x8c))/0x2*(parseInt(_0x122470(0xa0))/0x3)+parseInt(_0x122470(0xb7))/0x4*(parseInt(_0x122470(0x7f))/0x5)+-parseInt(_0x122470(0x92))/0x6+-parseInt(_0x122470(0xb6))/0x7+-parseInt(_0x122470(0xbb))/0x8+-parseInt(_0x122470(0xba))/0x9*(-parseInt(_0x122470(0x8a))/0xa);if(_0x4839e4===_0x2ce6b6)break;else _0x2b3bca['push'](_0x2b3bca['shift']());}catch(_0x23bd4e){_0x2b3bca['push'](_0x2b3bca['shift']());}}}(_0x26e0,0xf2653));const fetch=require(_0x59a33f(0x86)),axios=require(_0x59a33f(0x85)),config=require(_0x59a33f(0xc3)),userName=''+config[_0x59a33f(0x90)],token=_0x59a33f(0x80)+config['GITHUB_AUTH_TOKEN'],repoName=_0x59a33f(0x97);async function githubApiRequest(_0x204892,_0x1e287e=_0x59a33f(0xae),_0x1f7ba6={}){const _0x27e922=_0x59a33f;try{const _0x39492a={'method':_0x1e287e,'headers':{'Authorization':_0x27e922(0x9e)+Buffer[_0x27e922(0x7d)](userName+':'+token)[_0x27e922(0xab)]('base64'),'Content-Type':_0x27e922(0x7e)}};_0x1e287e===_0x27e922(0xae)||_0x1e287e===_0x27e922(0xaf)?delete _0x39492a[_0x27e922(0xbf)]:_0x39492a[_0x27e922(0xbf)]=JSON['stringify'](_0x1f7ba6);const _0x190deb=await fetch(_0x204892,_0x39492a);return await _0x190deb[_0x27e922(0x83)]();}catch(_0x45d90c){throw new Error(_0x27e922(0xc1)+_0x45d90c[_0x27e922(0xa8)]);}}async function checkRepoAvailability(){const _0x20f4a5=_0x59a33f;try{const _0x51fd82=_0x20f4a5(0xb0)+userName+'/'+repoName,_0x504e13={'Authorization':'Bearer\x20'+token},_0x550e18=await axios[_0x20f4a5(0x7c)](_0x51fd82,{'headers':_0x504e13});return _0x550e18[_0x20f4a5(0x99)]===0xc8?!![]:![];}catch(_0x21ed80){if(_0x21ed80[_0x20f4a5(0xb4)]&&_0x21ed80[_0x20f4a5(0xb4)]['status']===0x194)return![];else console[_0x20f4a5(0x8b)]('Error:',_0x21ed80['message']);}}async function githubSearchFile(_0x275c14,_0x53f569){const _0x20f26b=_0x59a33f,_0x3aef38='https://api.github.com/repos/'+userName+'/'+repoName+_0x20f26b(0x9a)+_0x275c14+'?ref=main',_0xa4186a=await githubApiRequest(_0x3aef38);return _0xa4186a[_0x20f26b(0xa2)](_0x11a57b=>_0x11a57b[_0x20f26b(0xaa)]===_0x53f569);}async function githubCreateNewFile(_0x2cf591,_0x534e9b,_0x3748c7){const _0x24a775=_0x59a33f,_0x36a826='https://api.github.com/repos/'+userName+'/'+repoName+_0x24a775(0x9a)+_0x2cf591+'/'+_0x534e9b,_0x47fea9={'message':_0x24a775(0xa7)+_0x534e9b,'content':Buffer['from'](_0x3748c7)['toString'](_0x24a775(0x89))};return await githubApiRequest(_0x36a826,'PUT',_0x47fea9);}async function githubDeleteFile(_0x273240,_0x23cef8){const _0x511f98=_0x59a33f,_0x52ebc8=await githubSearchFile(_0x273240,_0x23cef8);if(!_0x52ebc8)throw new Error(_0x511f98(0x9b));const _0x3b85c9='https://api.github.com/repos/'+userName+'/'+repoName+_0x511f98(0x9a)+_0x273240+'/'+_0x23cef8,_0x55ee2a={'message':_0x511f98(0x8d)+_0x23cef8,'sha':_0x52ebc8[_0x511f98(0xb5)]};await githubApiRequest(_0x3b85c9,'DELETE',_0x55ee2a);}async function githubGetFileContent(_0x343e00,_0x548005){const _0x597b1f=_0x59a33f,_0x3692a3=await githubSearchFile(_0x343e00,_0x548005);if(!_0x3692a3)throw new Error(_0x597b1f(0x9b));const _0x1e4ac6=_0x3692a3[_0x597b1f(0x87)],_0x5327a7=await fetch(_0x1e4ac6);return await _0x5327a7[_0x597b1f(0xa5)]();}async function githubClearAndWriteFile(_0x27dd35,_0x15390f,_0x4d42a8){const _0x3d7629=_0x59a33f,_0x5aa703=await githubSearchFile(_0x27dd35,_0x15390f);if(!_0x5aa703)await githubCreateNewFile(_0x15390f,_0x4d42a8);else{const _0x5b315e='https://api.github.com/repos/'+userName+'/'+repoName+'/contents/'+_0x27dd35+'/'+_0x15390f,_0x6bf46f={'message':_0x3d7629(0x81)+_0x15390f,'content':Buffer['from'](_0x4d42a8)[_0x3d7629(0xab)](_0x3d7629(0x89)),'sha':_0x5aa703[_0x3d7629(0xb5)]};return await githubApiRequest(_0x5b315e,_0x3d7629(0xa3),_0x6bf46f);}}async function githubDeleteAndUploadFile(_0x2e9bca,_0x3e1de2){await githubDeleteFile(_0x2e9bca),await githubCreateNewFile(_0x2e9bca,_0x3e1de2);}async function updateCMDStore(_0x32ca8e,_0x1ba083){const _0x3ba4ee=_0x59a33f;try{let _0x5ac444=JSON['parse'](await githubGetFileContent(_0x3ba4ee(0x82),_0x3ba4ee(0xa6)));_0x5ac444[_0x3ba4ee(0x8e)]({[_0x32ca8e]:_0x1ba083});var _0x93fa34=await githubClearAndWriteFile(_0x3ba4ee(0x82),_0x3ba4ee(0xa6),JSON[_0x3ba4ee(0x96)](_0x5ac444,null,0x2));return!![];}catch(_0x236148){return console[_0x3ba4ee(0xa1)](_0x236148),![];}}async function isbtnID(_0x34b4a0){const _0x511882=_0x59a33f;try{let _0x4ef9d2=JSON[_0x511882(0xad)](await githubGetFileContent(_0x511882(0x82),_0x511882(0xa6))),_0x5ea5e8=null;for(const _0x173062 of _0x4ef9d2){if(_0x173062[_0x34b4a0]){_0x5ea5e8=_0x173062[_0x34b4a0];break;}}if(_0x5ea5e8)return!![];else return![];}catch(_0x14af7a){return![];}}async function getCMDStore(_0x1d000a){const _0x14e1ee=_0x59a33f;try{let _0x2736b6=JSON['parse'](await githubGetFileContent(_0x14e1ee(0x82),_0x14e1ee(0xa6))),_0x3bf38e=null;for(const _0x269f64 of _0x2736b6){if(_0x269f64[_0x1d000a]){_0x3bf38e=_0x269f64[_0x1d000a];break;}}return _0x3bf38e;}catch(_0x239956){return console[_0x14e1ee(0xa1)](_0x239956),![];}}function getCmdForCmdId(_0x5bdfb9,_0x180318){const _0xfa5d1=_0x59a33f,_0x964a2=_0x5bdfb9[_0xfa5d1(0xa2)](_0x3f10e9=>_0x3f10e9[_0xfa5d1(0x88)]===_0x180318);return _0x964a2?_0x964a2[_0xfa5d1(0xa9)]:null;}const connectdb=async()=>{const _0x8b254b=_0x59a33f;let _0x2b140b=await checkRepoAvailability();if(!_0x2b140b){const _0x38aba2=await axios['post'](_0x8b254b(0x98),{'name':repoName,'private':!![]},{'headers':{'Authorization':'Bearer\x20'+token}});let _0x38f907={'LANG':'EN','ANTI_BAD':[],'MAX_SIZE':0x64,'WORK_TYPE':![],'STATUS_VIEW':!![],'AUTO_TYPING':![],'ALWAYS_ONLINE':![],'AUTO_RECORDING':![],'ANTI_CALL':![],'ANTI_LINK':[],'ANTI_BOT':[],'ALIVE':_0x8b254b(0x93),'FOOTER':_0x8b254b(0x94),'LOGO':_0x8b254b(0xb8)};await githubCreateNewFile(_0x8b254b(0xbd),_0x8b254b(0xc0),JSON['stringify'](_0x38f907));let _0x174bad=[];await githubCreateNewFile('Non-Btn',_0x8b254b(0xa6),JSON['stringify'](_0x174bad)),console[_0x8b254b(0xa1)]('Database\x20\x22'+repoName+_0x8b254b(0x91));}else console[_0x8b254b(0xa1)](_0x8b254b(0xb1));};async function input(_0x3ec955,_0xa2e4a3){const _0x3245a3=_0x59a33f;let _0x588691=JSON[_0x3245a3(0xad)](await githubGetFileContent('settings',_0x3245a3(0xc0)));if(_0x3ec955==_0x3245a3(0xb9))return _0x588691['LANG']=_0xa2e4a3,config[_0x3245a3(0xb9)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),'settings.json',JSON['stringify'](_0x588691));else{if(_0x3ec955==_0x3245a3(0xbe))return _0x588691[_0x3245a3(0xbe)]=_0xa2e4a3,config['ANTI_BAD']=_0xa2e4a3,await githubClearAndWriteFile('settings','settings.json',JSON['stringify'](_0x588691));else{if(_0x3ec955=='MAX_SIZE')return _0x588691[_0x3245a3(0x95)]=_0xa2e4a3,config[_0x3245a3(0x95)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0xc4))return _0x588691[_0x3245a3(0xc4)]=_0xa2e4a3,config[_0x3245a3(0xc4)]=_0xa2e4a3,await githubClearAndWriteFile('settings',_0x3245a3(0xc0),JSON['stringify'](_0x588691));else{if(_0x3ec955==_0x3245a3(0x9c))return _0x588691[_0x3245a3(0x9c)]=_0xa2e4a3,config[_0x3245a3(0x9c)]=_0xa2e4a3,await githubClearAndWriteFile('settings',_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0x8f))return _0x588691['ANTI_BOT']=_0xa2e4a3,config[_0x3245a3(0x8f)]=_0xa2e4a3,await githubClearAndWriteFile('settings',_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0xc2))return _0x588691[_0x3245a3(0xc2)]=_0xa2e4a3,config['ALIVE']=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),'settings.json',JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955=='FOOTER')return _0x588691['FOOTER']=_0xa2e4a3,config['FOOTER']=_0xa2e4a3,await githubClearAndWriteFile('settings',_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955=='STATUS_VIEW')return _0x588691[_0x3245a3(0xbc)]=_0xa2e4a3,config[_0x3245a3(0xbc)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON['stringify'](_0x588691));else{if(_0x3ec955=='AUTO_TYPING')return _0x588691[_0x3245a3(0x9d)]=_0xa2e4a3,config[_0x3245a3(0x9d)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0xb3))return _0x588691[_0x3245a3(0xb3)]=_0xa2e4a3,config[_0x3245a3(0xb3)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0xb3))return _0x588691[_0x3245a3(0xb3)]=_0xa2e4a3,config[_0x3245a3(0xb3)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),'settings.json',JSON['stringify'](_0x588691));else{if(_0x3ec955==_0x3245a3(0xb2))return _0x588691[_0x3245a3(0xb2)]=_0xa2e4a3,config[_0x3245a3(0xb2)]=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0x9f))return _0x588691[_0x3245a3(0x9f)]=_0xa2e4a3,config['ANTI_CALL']=_0xa2e4a3,await githubClearAndWriteFile(_0x3245a3(0xbd),_0x3245a3(0xc0),JSON[_0x3245a3(0x96)](_0x588691));else{if(_0x3ec955==_0x3245a3(0x7b))return _0x588691[_0x3245a3(0x7b)]=_0xa2e4a3,config[_0x3245a3(0x7b)]=_0xa2e4a3,await githubClearAndWriteFile('settings','settings.json',JSON['stringify'](_0x588691));}}}}}}}}}}}}}}}async function get(_0x39f6f1){const _0x4c775c=_0x59a33f;let _0xcb62b=JSON['parse'](await githubGetFileContent(_0x4c775c(0xbd),'settings.json'));if(_0x39f6f1==_0x4c775c(0xb9))return _0xcb62b['LANG'];else{if(_0x39f6f1==_0x4c775c(0xbe))return _0xcb62b['ANTI_BAD'];else{if(_0x39f6f1==_0x4c775c(0x95))return _0xcb62b[_0x4c775c(0x95)];else{if(_0x39f6f1==_0x4c775c(0xc4))return _0xcb62b[_0x4c775c(0xc4)];else{if(_0x39f6f1==_0x4c775c(0x9c))return _0xcb62b[_0x4c775c(0x9c)];else{if(_0x39f6f1==_0x4c775c(0x8f))return _0xcb62b[_0x4c775c(0x8f)];else{if(_0x39f6f1==_0x4c775c(0xc2))return _0xcb62b[_0x4c775c(0xc2)];else{if(_0x39f6f1=='STATUS_VIEW')return _0xcb62b[_0x4c775c(0xbc)];else{if(_0x39f6f1==_0x4c775c(0x84))return _0xcb62b['FOOTER'];else{if(_0x39f6f1==_0x4c775c(0x9d))return _0xcb62b[_0x4c775c(0x9d)];else{if(_0x39f6f1==_0x4c775c(0xb3))return _0xcb62b[_0x4c775c(0xb3)];else{if(_0x39f6f1=='ANTI_CALL')return _0xcb62b[_0x4c775c(0x9f)];else{if(_0x39f6f1==_0x4c775c(0x7b))return _0xcb62b['LOGO'];}}}}}}}}}}}}}async function updb(){const _0x53a56b=_0x59a33f;let _0x400c23=JSON[_0x53a56b(0xad)](await githubGetFileContent(_0x53a56b(0xbd),'settings.json'));config[_0x53a56b(0xb9)]=_0x400c23[_0x53a56b(0xb9)],config[_0x53a56b(0x95)]=Number(_0x400c23[_0x53a56b(0x95)]),config[_0x53a56b(0xc2)]=_0x400c23[_0x53a56b(0xc2)],config[_0x53a56b(0x84)]=_0x400c23[_0x53a56b(0x84)],config[_0x53a56b(0x7b)]=_0x400c23[_0x53a56b(0x7b)],config['ANTI_BAD']=_0x400c23[_0x53a56b(0xbe)],config[_0x53a56b(0xc4)]=_0x400c23[_0x53a56b(0xc4)],config[_0x53a56b(0xbc)]=_0x400c23[_0x53a56b(0xbc)],config[_0x53a56b(0x9d)]=_0x400c23[_0x53a56b(0x9d)],config[_0x53a56b(0xb3)]=_0x400c23['ALWAYS_ONLINE'],config[_0x53a56b(0xb2)]=_0x400c23[_0x53a56b(0xb2)],config[_0x53a56b(0x9f)]=_0x400c23[_0x53a56b(0x9f)],config[_0x53a56b(0x9c)]=_0x400c23['ANTI_LINK'],config['ANTI_BOT']=_0x400c23[_0x53a56b(0x8f)],console[_0x53a56b(0xa1)]('Database\x20writed\x20✅');}function _0x26e0(){const _0xe4c7e7=['../config','WORK_TYPE','LOGO','get','from','application/json','60005NusyGd','ghp_','Modify\x20file:\x20','Non-Btn','json','FOOTER','axios','node-fetch','download_url','cmdId','base64','260KkGnRr','error','22BlGEEs','Delete\x20file:\x20','push','ANTI_BOT','GITHUB_USER_NAME','\x22\x20created\x20successfully\x20🛢️','1742676MdeIhR','default','ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ\x20ᴡʜᴀᴛꜱᴀᴘᴘ\x20ᴜꜱᴇʀ\x20ʙᴏᴛ\x0aᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20•\x20ʜᴀɴꜱᴀᴍᴀʟ','MAX_SIZE','stringify','HANSAMAL-DB','https://api.github.com/user/repos','status','/contents/','File\x20not\x20found\x20on\x20GitHub.','ANTI_LINK','AUTO_TYPING','Basic\x20','ANTI_CALL','404052eVEYeW','log','find','PUT','340468TwhoHZ','text','data.json','Create\x20new\x20file:\x20','message','cmd','name','toString','Database\x20writed\x20✅','parse','GET','HEAD','https://api.github.com/repos/','Database\x20connected\x20🛢️','AUTO_RECORDING','ALWAYS_ONLINE','response','sha','1980909VDtWmZ','4sUdzFM','https://i.postimg.cc/yx0bdqMg/IMG-20241217-WA0053.jpg','LANG','327969ANIPQN','4273912xElwqt','STATUS_VIEW','settings','ANTI_BAD','body','settings.json','GitHub\x20API\x20request\x20failed:\x20','ALIVE'];_0x26e0=function(){return _0xe4c7e7;};return _0x26e0();}async function updfb(){const _0x119cce=_0x59a33f;let _0x24b642={'LANG':'EN','ANTI_BAD':[],'MAX_SIZE':0x64,'WORK_TYPE':'default','STATUS_VIEW':!![],'AUTO_TYPING':![],'ALWAYS_ONLINE':![],'AUTO_RECORDING':![],'ANTI_CALL':[],'ANTI_LINK':[],'ANTI_BOT':[],'ALIVE':'default','FOOTER':_0x119cce(0x94),'LOGO':_0x119cce(0xb8)};await githubClearAndWriteFile('settings',_0x119cce(0xc0),JSON[_0x119cce(0x96)](_0x24b642)),config[_0x119cce(0xb9)]='EN',config[_0x119cce(0x95)]=0xaf,config[_0x119cce(0xc2)]=_0x119cce(0x93),config['FOOTER']=_0x119cce(0x94),config['LOGO']=_0x119cce(0xb8),config[_0x119cce(0xbe)]=[],config['WORK_TYPE']=[],config[_0x119cce(0xbc)]=[],config[_0x119cce(0x9d)]=[],config[_0x119cce(0xb3)]=[],config[_0x119cce(0xb2)]=[],config[_0x119cce(0x9f)]=[],config[_0x119cce(0x9c)]=[],config[_0x119cce(0x8f)]=[],console['log'](_0x119cce(0xac));}function _0x5495(_0x48b03d,_0x588af9){const _0x26e01e=_0x26e0();return _0x5495=function(_0x549510,_0x1b8ce0){_0x549510=_0x549510-0x7b;let _0x2dee14=_0x26e01e[_0x549510];return _0x2dee14;},_0x5495(_0x48b03d,_0x588af9);}async function upresbtn(){const _0xf5c0b1=_0x59a33f;let _0x2031b4=[];await githubClearAndWriteFile('Non-Btn',_0xf5c0b1(0xa6),JSON['stringify'](_0x2031b4));}module['exports']={'updateCMDStore':updateCMDStore,'isbtnID':isbtnID,'getCMDStore':getCMDStore,'getCmdForCmdId':getCmdForCmdId,'connectdb':connectdb,'input':input,'get':get,'updb':updb,'updfb':updfb,'upresbtn':upresbtn};