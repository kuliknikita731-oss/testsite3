document.documentElement.classList.add("js");
// Після оновлення сторінки (F5, «потягнути вниз») завжди починаємо з верху головної.
// Якорі розділів (#kviz, #faq…) при завантаженні теж скидаються. Прямі посилання на країни (#chile тощо) працюють як раніше.
(function(){
 try{
  var nav=performance.getEntriesByType("navigation")[0];
  var sect=["top","why","kviz","countries","compare","faq"].indexOf(location.hash.slice(1))>-1;
  if((nav&&nav.type==="reload")||sect){
   if("scrollRestoration" in history)history.scrollRestoration="manual";
   if(location.hash)history.replaceState(null,"",location.pathname+location.search);
   window.scrollTo({top:0,left:0,behavior:"instant"});
   addEventListener("load",function(){setTimeout(function(){window.scrollTo({top:0,left:0,behavior:"instant"});history.scrollRestoration="auto"},200)});
  }
 }catch(e){}
})();
function F(s){return '<img class="fi" alt="" src="data:image/svg+xml,'+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'>"+s+"</svg>")+'">'}
var FL_CL="<rect width='30' height='10' fill='#fff'/><rect y='10' width='30' height='10' fill='#D52B1E'/><rect width='10' height='10' fill='#0039A6'/><circle cx='5' cy='5' r='2' fill='#fff'/>";
var FL_UY="<rect width='30' height='20' fill='#fff'/><g fill='#0038A8'><rect y='2.2' width='30' height='2.2'/><rect y='6.7' width='30' height='2.2'/><rect y='11.1' width='30' height='2.2'/><rect y='15.6' width='30' height='2.2'/></g><rect width='11' height='11' fill='#fff'/><circle cx='5.5' cy='5.5' r='2.6' fill='#FCD116'/>";
var FL_EC="<rect width='30' height='10' fill='#FFDD00'/><rect y='10' width='30' height='5' fill='#034EA2'/><rect y='15' width='30' height='5' fill='#ED1C24'/>";
var $=function(s){return document.querySelector(s)};
var TG="https://t.me/",WA="https://wa.me/";
function ul(a){return '<ul>'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>'}
function tbl(h,r){return '<div class="scroll"><table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(x=>'<tr>'+x.map(y=>'<td>'+y+'</td>').join('')+'</tr>').join('')+'</table></div>'}
function sec(t,b){return '<section><div class="wrap"><h2>'+t+'</h2>'+b+'</div></section>'}
var TBD='<span class="chip">уточнюється</span>';

var C=[
{id:"chile",k:"cl",f:F(FL_CL),name:"Чилі",tag:"ВНЖ без інвестицій",badge:"без інвестицій",hp:"від $1500",hs:"ВНЖ 2 міс",price:"від 1500 USD",
 lead:"Одна зі стабільних країн регіону. ВНЖ можна отримати на підставі віддаленої роботи або доходу з-за кордону, без купівлі нерухомості та місцевої компанії.",
 why2:"підходить для віддаленої роботи, бізнесу та довгострокової стратегії",
 facts:[["Підстава","Підбирається індивідуально"],["Інвестиції","Не потрібні"],["Подача","Можлива дистанційно"]],
 why:[["ВНЖ без інвестицій","Не потрібно купувати нерухомість чи відкривати компанію. Підставою може бути віддалена робота або дохід з-за кордону."],["Стабільність і якість життя","Передбачувана правова система, стабільна банківська система, хороша медицина та безпечні міста."],["Шлях до ПМЖ і громадянства","Тимчасовий ВНЖ, продовження, ПМЖ, громадянство. Подружжя й діти оформлюються разом із вами."]],
 steps:[["Тимчасовий ВНЖ","Підбираємо підставу, готуємо й подаємо документи."],["Продовження","Статус продовжується разом із сім’єю."],["ПМЖ","Постійний вид на проживання."],["Громадянство","Після встановленого строку проживання."]],
 note:"Види підстав, перелік документів, строки й державні збори уточнюються. "+TBD,
 pk:[["Легалізація (ВНЖ)","1500 USD",["аналіз ситуації та підбір оптимальної підстави","консультації щодо документів","допомога з документами, що підтверджують підставу","підготовка й подача документів до міграційної служби Чилі","супровід справи до отримання ВНЖ"]],
 ["Комплексна релокація","2500 USD",["усе з пакета «Легалізація»","консультаційний супровід після переїзду","допомога з RUT (податковий номер) і банківським рахунком","консультації щодо медичного страхування","допомога з житлом та адаптацією"]],
 ["Комплексна релокація + відкриття бізнесу","3500 USD",["усе з пакета «Комплексна релокація»","консультації щодо ведення бізнесу в Чилі","вибір організаційно-правової форми","супровід реєстрації підприємницької діяльності","консультації щодо оподаткування та роботи з держорганами"]],
 ["Сімейна легалізація","2500 USD "+TBD,["легалізація всіх членів сім’ї","підготовка й подача документів","супровід до отримання ВНЖ для всієї сім’ї"]],
 ["Комплексна релокація сім’ї","з дитиною 4500 USD, без дитини 3500 USD "+TBD,["легалізація всієї сім’ї","зустріч в аеропорту","допомога з житлом, RUT і банківськими рахунками","консультації щодо медичного страхування","підбір школи або дитячого садка","адаптація сім’ї в Чилі"]],
 ["Пошук роботи","від 300 до 500 USD "+TBD,[],"Опис послуги уточнюється."]],
 out:["Умови оплати та перелік витрат, що не входять у вартість (державні збори, переклади), уточнюються. "+TBD]},

{id:"uruguay",k:"uy",f:F(FL_UY),name:"Уругвай",tag:"ПМЖ одразу, паспорт Уругваю",badge:"ПМЖ за 1–4 міс",hp:"від $2500",hs:"ПМЖ одразу",price:"від 2500 USD",
 lead:"Одна з найстабільніших і найбезпечніших країн регіону з відкритою міграційною політикою. Українці в’їжджають без візи й подають документи вже всередині країни.",
 why2:"підходить для спокійного життя, сім’ї та шляху до громадянства",
 facts:[["Підстава","Приватні причини"],["Перший документ","Дозвіл на 2 роки + Cédula en trámite"],["Громадянство","Через 3 роки з сім’єю або 5 років одному"]],
 why:[["Безвіз і подача всередині країни","Українці в’їжджають як туристи й подають документи вже в Уругваї, без попередніх дозволів."],["ПМЖ без проміжних кроків","Заяву на постійне проживання зазвичай подають одразу. Після подачі можна жити, працювати й відкривати рахунки."],["Безпека та паспорт Уругваю","Одна з найбезпечніших країн регіону. Шлях до громадянства: від 3 років із сім’єю або від 5 років одному."]],
 steps:[["Етап 1. Заява й тимчасовий статус",["При першому візиті до Migración подається заява на ПМЖ, підстава: приватні причини","почати можна лише з паспорта, решту документів можна надати пізніше; потрібно підтвердити дохід","одразу видається дозвіл на тимчасове проживання на 2 роки","через 1–7 днів можна отримати Cédula en trámite на 2 роки (де-факто ВНЖ)","під час розгляду можна виїжджати з дозволом на повторний в’їзд"]],
  ["Етап 2. Отримання ПМЖ",["за регламентом розгляд триває 90 днів","на практиці: 1–3 місяці в столиці, 2–4 місяці в інших містах, якщо повний пакет подано одразу","після схвалення видається Cédula Legal Prov на 1 рік, потім Cédula Legal на 3 роки","з ПМЖ постійно перебувати в країні не обов’язково, потрібно вчасно оновлювати посвідчення"]],
  ["Етап 3. Громадянство",["легальне проживання (183 дні на рік) 3 роки з сім’єю або 5 років одному","потрібен економічний зв’язок: найпростіше відкрити ІП або компанію й сплачувати внески BPS","також центр життєвих інтересів в Уругваї та базова іспанська","процес триває від 1 до 1,5 року","після схвалення: посвідчення на 10 років і паспорт на 5 років (другий на 10)"]]],
 extra:sec("Строки до громадянства",tbl(["Склад заявників","Загальний строк"],[["Сім’я","від 4 до 4,5 року"],["Один заявник","від 6 до 6,5 року"]]))
  +sec("Документи на кожному етапі",tbl(["Документ","Строк дії","Коли отримують"],[["Cédula en trámite","2 роки","через 1–7 днів після першого візиту"],["Cédula Legal Prov","1 рік","після схвалення ПМЖ"],["Cédula Legal","3 роки","після уругвайського свідоцтва про народження в ЗАГСі"],["Cédula Ciudadano Legal","10 років","після схвалення громадянства"],["Паспорт Уругваю","5 років (другий 10)","після схвалення громадянства"]]))
  +sec("Альтернатива: ВНЖ через бізнес або самозайнятість","<p>Можливі формати: підприємець (реєстрація компанії), самозайнята особа, дохід від бізнесу. Потрібні реєстрація компанії або підтвердження діяльності, достатній дохід, місце проживання в Уругваї та довідка про несудимість. "+TBD+"</p>"),
 pk:[["Дорослий","2500 USD",["комплектування пакета та запис до Migración","безкоштовна медична страховка, медогляд Carné de salud, щеплення","короткострокова оренда житла, зустріч в аеропорту й трансфер по Монтевідео","запис і супровід у DNIC, отримання першої седули (ВНЖ)","довідка про доходи, переклади від акредитованих перекладачів","документи до ЗАГСу, консультації щодо нерухомості","заміна водійського посвідчення, допомога з авто, дитячий садок або школа","консультація щодо переказу криптовалюти, вирішення побутових питань","супровід до отримання ПМЖ"]],
 ["Неповнолітній","1500 USD",[],"Знижка для дітей у складі сім’ї та розрахунок для кількох осіб уточнюються. "+TBD]],
 out:["подача документів не в Монтевідео","відкриття банківського рахунку","реєстрація юрособи або ІП","державні мита та збори, переклади","допомога в організації пологів","пошук житла на довгу оренду (річний контракт)"],
 pay:["50% передоплата по прильоту","50% після отримання першої седули ВНЖ"]},

{id:"ecuador",k:"ec",f:F(FL_EC),name:"Еквадор",tag:"ВНЖ за дипломом онлайн",badge:"ВНЖ дистанційно",hp:"від $1700",hs:"За дипломом",price:"від 1700 USD",
 lead:"ВНЖ оформлюється на підставі вищої освіти. Приїжджати для оформлення не потрібно: процедура проходить дистанційно через консульство.",
 why2:"підходить, якщо потрібен статус «про запас» і дистанційне оформлення",
 facts:[["Підстава","Вища освіта (диплом)"],["Подача","Дистанційно, через консульство"],["ВНЖ","2 роки, продовження без повторної перевірки диплома"]],
 why:[["Без поїздки","Уся процедура проходить дистанційно через консульство."],["ВНЖ на 2 роки без обов’язку переїжджати","Документ видається у вигляді PDF в особистому кабінеті."],["Необмежене продовження","Диплом підтверджують один раз. Жити й працювати в країні за цим ВНЖ можна без обмежень."]],
 steps:[["Підтвердження диплома","Приблизно 2 місяці. На цьому етапі Еквадор перевіряє основну підставу."],["ВНЖ через консульство","У середньому близько 1 місяця, залежить від консульства. Перевіряють лише безпекові питання."],["Отримання документа","ВНЖ на 2 роки у вигляді документа А4 (PDF в особистому кабінеті). Іноді консульство запрошує на співбесіду."],["Продовження","Достатньо подати документи знову, диплом підтверджувати не потрібно."],["Якщо ви вирішили приїхати","Звернення до поліції, фото й пластикове посвідчення (близько 30 хвилин, видають приблизно через тиждень)."]],
 extra:sec("Шлях до ПМЖ і громадянства",ul(["Після 21 місяця проживання: подача на ПМЖ","Після 3 років з ПМЖ: подача на паспорт"])+'<p class="ph">Вимоги до диплома (апостиль, переклад, спеціальність) і перелік консульств уточнюються. '+TBD+'</p>'),
 pk:[["Склад послуг і вартість","від 1700 USD",[],"Пакети й ціни по Еквадору з’являться найближчим часом. Напишіть нам, і ми підготуємо індивідуальну пропозицію."]]}
];
var CMP=[["Підстава для ВНЖ","Підбирається індивідуально: віддалена робота або дохід з-за кордону","Приватні причини","Вища освіта (диплом)"],
["Чи потрібно їхати","Можлива дистанційна подача "+TBD,"Заява під час першого візиту до Migración","Ні, ВНЖ видається через консульство"],
["Перший документ",TBD,"Дозвіл на 2 роки + Cédula en trámite (1–7 днів)","ВНЖ на 2 роки (PDF в особистому кабінеті)"],
["Шлях до ПМЖ","ВНЖ, продовження, ПМЖ "+TBD,"Заява одразу на ПМЖ, розгляд 1–4 місяці","Заява після 21 місяця проживання"],
["Громадянство","Після встановленого строку проживання","3 роки з сім’єю або 5 років одному","3 роки після отримання ПМЖ"],
["Вартість послуг","від 1500 USD","2500 USD (дорослий), 1500 USD (неповнолітній)","від 1700 USD"]];
var QUIZ=[
 {q:"Яка ваша головна мета?",o:[["Безпека та запасний план",{ec:2,uy:2,cl:1}],["Бізнес і робота",{cl:3,uy:1}],["Податки та капітал",{uy:3,cl:1}],["Спокійне життя, сім’я",{uy:2,ec:2}]]},
 {q:"Хто переїжджає?",o:[["Я один",{ec:1,cl:1}],["Пара",{uy:1,ec:1}],["Сім’я з дітьми",{uy:2,cl:1}]]},
 {q:"Що у вас є?",o:[["Диплом про вищу освіту",{ec:3}],["Дистанційний дохід",{ec:2,cl:2,uy:1}],["Капітал для інвестицій",{cl:2,uy:2}],["Поки не знаю",{}]]},
 {q:"Чи готові жити в країні фізично?",o:[["Так, планую переїзд",{cl:2,uy:2}],["Потрібен лише статус «про запас»",{ec:3}],["Поки не визначився",{}]]}
];

function fin(){return '<section><div class="wrap"><div class="final"><h2>Обговоримо вашу ситуацію?</h2><p>Безкоштовна первинна консультація. Відповімо в робочий час.</p><div class="row"><a class="btn gold" href="'+TG+'" target="_blank" rel="noopener">Замовити консультацію</a><a class="btn line" href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a><a class="btn line" href="'+TG+'" target="_blank" rel="noopener">Telegram</a></div></div></div></section>'}
function card(c){return '<div class="country"><div class="top"><span class="fl">'+c.f+'</span><div><h3>'+c.name+'</h3><span class="muted">'+c.tag+'</span></div></div><div class="price">'+c.price+'</div><a class="btn line" href="#'+c.id+'">Детальніше про країну <span class="ar">→</span></a></div>'}
function rowCard(c){return '<a class="crow" href="#'+c.id+'"><span class="fl">'+c.f+'</span><span class="ct"><b>'+c.name+'</b><span class="badge">'+c.badge+'</span></span><span class="arr" aria-hidden="true">→</span></a>'}
function cview(c){
 return '<div class="hero"><div class="wrap"><div><a class="back" href="#countries">‹ Усі країни</a><h1>'+c.f+' '+c.name+'</h1><p>'+c.lead+'</p><a class="btn gold" href="'+TG+'" target="_blank" rel="noopener">Отримати консультацію</a></div><div class="panel show">'+c.facts.map(x=>'<div class="pi"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div></div></div>'
 +sec('Чому '+c.name,'<div class="cards">'+c.why.map(w=>'<div class="country"><h3>'+w[0]+'</h3><p class="muted">'+w[1]+'</p></div>').join('')+'</div>')
 +sec('Шлях легалізації','<ol class="steps v">'+c.steps.map(s=>'<li><div><b>'+s[0]+'</b>'+(Array.isArray(s[1])?ul(s[1]):s[1])+'</div></li>').join('')+'</ol>'+(c.note?'<p class="ph">'+c.note+'</p>':''))
 +(c.extra||'')
 +sec('Пакети послуг',c.pk.map(p=>'<details><summary><span>'+p[0]+'</span><span class="pr">'+p[1]+'</span></summary><div class="in">'+(p[3]?'<p>'+p[3]+'</p>':'')+(p[2].length?ul(p[2]):'')+'</div></details>').join('')+(c.out?'<h3 class="sub">Не входить у вартість</h3>'+ul(c.out):'')+(c.pay?'<h3 class="sub">Умови оплати</h3>'+ul(c.pay):''))
 +fin()}

// головна
$("#cards").innerHTML=C.map(card).join('')+'<div class="country add">Незабаром з’являться нові країни</div>';
function cmpHTML(){
 var d='<div class="cmpd"><table><thead><tr><th></th>'+C.map(c=>'<th><span class="cn">'+c.f+c.name+'</span></th>').join('')+'</tr></thead><tbody>'+CMP.map(r=>'<tr><td class="rk">'+r[0]+'</td>'+C.map((c,i)=>'<td>'+r[i+1]+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
 var m='<div class="cmpm"><div class="ctabs" role="tablist">'+C.map((c,i)=>'<button type="button" role="tab" class="ctab" data-i="'+i+'">'+c.f+' '+c.name+'</button>').join('')+'</div><div class="cpanel" id="cpanel" role="tabpanel"></div></div>';
 return d+m;
}
function setTab(i){
 document.querySelectorAll(".ctab").forEach(function(t,k){t.classList.toggle("on",k==i);t.setAttribute("aria-selected",k==i)});
 var p=$("#cpanel");p.innerHTML=CMP.map(r=>'<div class="kv"><span class="k">'+r[0]+'</span><span class="v">'+r[i+1]+'</span></div>').join('');
 p.classList.remove("pa");void p.offsetWidth;p.classList.add("pa");
}
$("#cmp").innerHTML=cmpHTML();setTab(0);
$("#cmp").addEventListener("click",function(e){var b=e.target.closest(".ctab");if(b)setTab(+b.dataset.i)});
$("#crows").innerHTML=C.map(rowCard).join('')+'<div class="crow add">Незабаром з’являться нові країни</div>';
$("#pills").innerHTML='<a href="#why">Навіщо ВНЖ?</a><a href="#kviz">Підбір програми</a>'+C.map(c=>'<a href="#'+c.id+'">'+c.f+' '+c.name+'</a>').join('')+'<a href="#compare">Порівняння</a><a href="#faq">Часті питання</a><i class="pind" aria-hidden="true"></i>';
$("#hcards").innerHTML=C.map(c=>'<a class="hcard" href="#'+c.id+'"><span class="fl">'+c.f+'</span><span class="ht"><b>'+c.name+'</b><span class="mt"><i>'+c.hp+'</i><i>'+c.hs+'</i></span></span></a>').join('');
$("#finH").innerHTML=fin();
document.querySelectorAll(".lang button").forEach(b=>b.onclick=function(){document.querySelectorAll(".lang button").forEach(x=>x.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true")});

// анімація появи
var io=window.IntersectionObserver&&new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
function split(el){
 var i=0,out=[];
 [].slice.call(el.childNodes).forEach(function(n){
  if(n.nodeType==3){n.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){out.push(document.createTextNode(" "))}else{var s=document.createElement("span");s.className="w";s.style.setProperty("--i",i++);s.textContent=t;out.push(s)}})}
  else{var s=document.createElement("span");s.className="w";s.style.setProperty("--i",i++);s.appendChild(n);out.push(s)}
 });
 el.textContent="";out.forEach(function(x){el.appendChild(x)});
}
function reveal(){
 document.querySelectorAll("#top .wrap>h2,#top .hero h1").forEach(function(el){if(el.dataset.sp)return;el.dataset.sp=1;split(el);el.classList.add("sp");io?io.observe(el):el.classList.add("in")});
 document.querySelectorAll("#top .country,#top .fact,#top .steps li,#top details,#top .scroll,#top .cmpd,#top .ctabs,#top .final,#top .pi,#top .crow,#top .wrap>p").forEach(function(el){if(el.classList.contains("rv"))return;el.classList.add("rv");io?io.observe(el):el.classList.add("in")})
}

// маршрути: #chile, #uruguay, #ecuador, інакше головна
function route(){
 var h=location.hash.slice(1),c=C.find(x=>x.id==h);
 $("#home").hidden=!!c;$("#cpage").hidden=!c;

 if(c){$("#cpage").innerHTML=cview(c);window.scrollTo(0,0);document.title=c.name+": легалізація для українців | Grosmeister Relocation"}
 else{document.title="Grosmeister Relocation: релокація до Латинської Америки";if(h){navUntil=Date.now()+1200;setTimeout(spyLater,1300)}var el=h&&document.getElementById(h);el?el.scrollIntoView():window.scrollTo(0,0)}
 reveal();spy();
}

// квиз: одна логіка для модального вікна (кнопка в Hero) і для секції на сторінці (плашка «Квіз»)
function makeQuiz(body,prog,modal){
 var step=0,score={};
 function go(){
  if(step<QUIZ.length){
   prog.style.width=(step/QUIZ.length*100)+"%";
   var q=QUIZ[step];
   body.innerHTML='<p class="muted qn">Питання '+(step+1)+' з '+QUIZ.length+'</p><h2>'+q.q+'</h2><div class="opts">'+q.o.map((o,i)=>'<button class="opt" data-i="'+i+'">'+o[0]+'</button>').join('')+'</div>';
   body.querySelectorAll(".opt").forEach(btn=>btn.onclick=function(){if(body.classList.contains("qb-out"))return;var s=q.o[+btn.dataset.i][1];for(var k in s)score[k]=(score[k]||0)+s[k];btn.classList.add("sel");body.classList.add("qb-out");setTimeout(function(){body.classList.remove("qb-out");step++;go();if(modal)window.scrollTo(0,0)},220)});
  }else{
   prog.style.width="100%";
   var best=C.slice().sort((a,b)=>(score[b.k]||0)-(score[a.k]||0))[0];
   body.innerHTML='<div class="result"><h2 class="rt">Вам, імовірно, підійде '+best.name+'</h2>'+card(best)+'<p class="why">Ця країна '+best.why2+'. Точний варіант визначимо на консультації.</p><a class="btn gold block" href="'+TG+'" target="_blank" rel="noopener">Надіслати результат у Telegram</a><p></p><button class="btn line block again" style="color:var(--ink)">Пройти знову</button></div>';
   body.querySelector(".again").onclick=function(){step=0;score={};go()};
  }
 }
 return function(){step=0;score={};go()};
}
makeQuiz($("#qinline"),$("#qprog2"),false)();
// підсвітка поточного розділу в плашці під шапкою
var SPY=["why","kviz","countries","compare","faq"],spyKey="",tick=false,navUntil=0;
function spy(){
 var pills=$("#pills"),links=[].slice.call(pills.querySelectorAll("a")),on=[];
 if(!$("#cpage").hidden){
  var h=location.hash.slice(1);on=links.filter(a=>a.getAttribute("href")=="#"+h);
 }else{
  if(window.scrollY<80&&location.hash&&!C.some(c=>"#"+c.id==location.hash)&&Date.now()>navUntil){try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}}
  var line=pills.getBoundingClientRect().bottom+24,id="";
  SPY.forEach(function(s){var el=document.getElementById(s);if(!el)return;var r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line)id=s});
  on=links.filter(a=>{var t=a.getAttribute("href").slice(1);return id=="countries"?C.some(c=>c.id==t):(id&&t==id)});
 }
 links.forEach(a=>a.classList.toggle("on",on.indexOf(a)>-1));
 var ind=pills.querySelector(".pind");
 if(ind){
  if(on.length){
   var f=on[0],l=on[on.length-1],x=f.offsetLeft,w=l.offsetLeft+l.offsetWidth-x,first=!ind.classList.contains("vis");
   if(first)ind.style.transition="none";
   ind.style.transform="translate("+x+"px,"+f.offsetTop+"px)";ind.style.width=w+"px";ind.style.height=f.offsetHeight+"px";
   if(first){void ind.offsetWidth;ind.style.transition="";ind.classList.add("vis")}
  }else ind.classList.remove("vis")
 }
 var key=on.map(a=>a.getAttribute("href")).join();
 if(key!==spyKey){spyKey=key;var a=on[0];
  if(a&&pills.scrollWidth>pills.clientWidth)pills.scrollTo({left:a.offsetLeft-(pills.clientWidth-a.offsetWidth)/2,behavior:"smooth"})}
}
function spyLater(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;spy()})}
addEventListener("scroll",spyLater,{passive:true});addEventListener("resize",spyLater);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(spy);
// плавне розкриття FAQ і пакетів
document.addEventListener("click",function(e){
 var s=e.target.closest&&e.target.closest("summary");if(!s)return;
 var d=s.parentNode,c=d.querySelector(":scope>.in");
 if(!c||!c.animate||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 e.preventDefault();
 if(d._a){d._a.cancel();d._a=null;c.style.overflow="";d.classList.remove("closing")}
 var pb=getComputedStyle(c).paddingBottom,h=0;
 if(!d.open){
  d.open=true;h=c.offsetHeight;c.style.overflow="hidden";
  d._a=c.animate([{height:"0px",paddingBottom:"0px",opacity:0},{height:h+"px",paddingBottom:pb,opacity:1}],{duration:380,easing:"cubic-bezier(.2,.8,.2,1)"});
  d._a.onfinish=function(){c.style.overflow="";d._a=null}
 }else{
  h=c.offsetHeight;c.style.overflow="hidden";d.classList.add("closing");
  d._a=c.animate([{height:h+"px",paddingBottom:pb,opacity:1},{height:"0px",paddingBottom:"0px",opacity:0}],{duration:260,easing:"ease"});
  d._a.onfinish=function(){d.open=false;d.classList.remove("closing");c.style.overflow="";d._a=null}
 }
});
addEventListener("hashchange",route);route();

// кнопка Telegram: з’являється після прокрутки, на телефоні періодично розкривається в підпис
(function(){
 var tg=document.querySelector(".tg");if(!tg)return;
 var shown=false,openT=0,loopT=0,calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
 function open(){if(calm||!shown)return;var t=tg.querySelector(".tgt");tg.style.setProperty("--tgw",t.scrollWidth+"px");tg.classList.add("open");clearTimeout(openT);openT=setTimeout(function(){tg.classList.remove("open")},4800)}
 function check(){
  var on=window.scrollY>350;
  if(on&&!shown){shown=true;tg.classList.add("show");setTimeout(open,700);loopT=setInterval(function(){if(!tg.matches(":hover"))open()},25000)}
  else if(!on&&shown){shown=false;tg.classList.remove("show","open");clearInterval(loopT);clearTimeout(openT)}
 }
 addEventListener("scroll",check,{passive:true});check();
})();
