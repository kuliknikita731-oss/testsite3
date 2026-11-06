document.documentElement.classList.add("js");
function F(s){return '<img class="fi" alt="" src="data:image/svg+xml,'+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'>"+s+"</svg>")+'">'}
var FL_CL="<rect width='30' height='10' fill='#fff'/><rect y='10' width='30' height='10' fill='#D52B1E'/><rect width='10' height='10' fill='#0039A6'/><circle cx='5' cy='5' r='2' fill='#fff'/>";
var FL_UY="<rect width='30' height='20' fill='#fff'/><g fill='#0038A8'><rect y='2.2' width='30' height='2.2'/><rect y='6.7' width='30' height='2.2'/><rect y='11.1' width='30' height='2.2'/><rect y='15.6' width='30' height='2.2'/></g><rect width='11' height='11' fill='#fff'/><circle cx='5.5' cy='5.5' r='2.6' fill='#FCD116'/>";
var FL_EC="<rect width='30' height='10' fill='#FFDD00'/><rect y='10' width='30' height='5' fill='#034EA2'/><rect y='15' width='30' height='5' fill='#ED1C24'/>";
var $=function(s){return document.querySelector(s)};
var TG="https://t.me/grosmeisterkyiv",WA="https://wa.me/380509030195";
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
var CMP=[["Підстава для ВНЖ","Підбирається індивідуально: віддалена робота, дохід з-за кордону або контракт з чилійською фірмою","Приватні причини","Вища освіта (диплом)"],
["Чи потрібно їхати","Можлива дистанційна подача, але забирати документи треба буде особисто","Заява під час першого візиту до Migración","Ні, ВНЖ видається через консульство"],
["Перший документ","—","Дозвіл на 2 роки + Cédula en trámite (1–7 днів)","ВНЖ на 2 роки (PDF в особистому кабінеті)"],
["Шлях до ПМЖ","ВНЖ, продовження, ПМЖ","Заява одразу на ПМЖ, розгляд 1–4 місяці","Заява після 21 місяця проживання"],
["Громадянство","Через 5–7 років","3 роки з сім’єю або 5 років одному","3 роки після отримання ПМЖ"],
["Вартість послуг","від 1500 USD","2500 USD (дорослий), 1500 USD (неповнолітній)","від 1700 USD"]];
var QUIZ=[
 {q:"Яка ваша головна мета?",o:[["Безпека та запасний план",{ec:2,uy:2,cl:1}],["Бізнес і робота",{cl:3,uy:1}],["Податки та капітал",{uy:3,cl:1}],["Спокійне життя, сім’я",{uy:2,ec:2}]]},
 {q:"Хто переїжджає?",o:[["Я один",{ec:1,cl:1}],["Пара",{uy:1,ec:1}],["Сім’я з дітьми",{uy:2,cl:1}]]},
 {q:"Що у вас є?",o:[["Диплом про вищу освіту",{ec:3}],["Дистанційний дохід",{ec:2,cl:2,uy:1}],["Капітал для інвестицій",{cl:2,uy:2}],["Поки не знаю",{}]]},
 {q:"Чи готові жити в країні фізично?",o:[["Так, планую переїзд",{cl:2,uy:2}],["Потрібен лише статус «про запас»",{ec:3}],["Поки не визначився",{}]]}
];

var P_WA='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',P_TG='M21.9 3.6 2.6 11c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.4-1.5ZM8.5 13.7l9.8-6.2c.5-.3.9-.1.5.2l-8.1 7.3-.3 3.4-1.9-4.7Z';
function msgLink(cls,href,p,label){return '<a class="msg '+cls+'" href="'+href+'" target="_blank" rel="noopener"><span class="ico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="'+p+'"/></svg></span><span class="mt">'+label+'</span></a>'}
function fin(){return '<section class="finS"><div class="wrap"><div class="final"><div class="blobs" aria-hidden="true"><i></i><i></i><i></i></div><h2>Обговоримо вашу ситуацію?</h2><p>Безкоштовна первинна консультація. Відповімо в робочий час.</p><div class="row">'+msgLink('tgm',TG,P_TG,'Написати в Telegram')+msgLink('wa',WA,P_WA,'Написати в WhatsApp')+'</div></div></div></section>'}
function card(c){return '<div class="country"><div class="top"><span class="fl">'+c.f+'</span><div><h3>'+c.name+'</h3><span class="muted">'+c.tag+'</span></div></div><div class="price">'+c.price+'</div><a class="btn line" href="#'+c.id+'">Детальніше про країну <svg class="ar" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></div>'}
function cview(c){
 return '<div class="hero"><div class="wrap"><div><a class="back" href="#countries"><svg class="ar" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>Усі країни</a><h2 class="h1">'+c.f+' '+c.name+'</h2><p>'+c.lead+'</p><a class="btn gold" href="'+TG+'" target="_blank" rel="noopener">Отримати консультацію</a></div><div class="panel show">'+c.facts.map(x=>'<div class="pi"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div></div></div>'
 +sec('Чому '+c.name,'<div class="cards">'+c.why.map(w=>'<div class="country"><h3>'+w[0]+'</h3><p class="muted">'+w[1]+'</p></div>').join('')+'</div>')
 +sec('Шлях легалізації','<ol class="steps v">'+c.steps.map(s=>'<li><div><b>'+s[0]+'</b>'+(Array.isArray(s[1])?ul(s[1]):s[1])+'</div></li>').join('')+'</ol>'+(c.note?'<p class="ph">'+c.note+'</p>':''))
 +(c.extra||'')
 +sec('Пакети послуг',c.pk.map(p=>'<details><summary><span>'+p[0]+'</span><span class="pr">'+p[1]+'</span></summary><div class="in">'+(p[3]?'<p>'+p[3]+'</p>':'')+(p[2].length?ul(p[2]):'')+'</div></details>').join('')+(c.out?'<h3 class="sub">Не входить у вартість</h3>'+ul(c.out):'')+(c.pay?'<h3 class="sub">Умови оплати</h3>'+ul(c.pay):''))
 +fin()}

// головна
$("#cards").innerHTML=C.map(card).join('');
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
$("#pills").innerHTML='<a href="#why">Навіщо ВНЖ?</a><a href="#kviz">Підбір програми</a>'+C.map(c=>'<a href="#'+c.id+'">'+c.f+' '+c.name+'</a>').join('')+'<a href="#compare">Порівняння</a><a href="#faq">Часті питання</a><i class="pind" aria-hidden="true"></i>';
$("#hcards").innerHTML=C.map(c=>'<a class="hcard" href="#'+c.id+'"><span class="fl">'+c.f+'</span><span class="ht"><b>'+c.name+'</b><span class="mt"><i>'+c.hp+'</i><i>'+c.hs+'</i></span></span></a>').join('');
$("#finH").innerHTML=fin();
document.querySelectorAll(".lang button").forEach(b=>b.onclick=function(){document.querySelectorAll(".lang button").forEach(x=>x.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true")});

// анімація появи
var io=window.IntersectionObserver&&new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
function reveal(){
 document.querySelectorAll("#top .wrap>h2,#top .country,#top .fact,#top .steps li,#top details,#top .scroll,#top .cmpd,#top .ctabs,#top .final,#top .pi,#top .wrap>p").forEach(function(el){if(el.classList.contains("rv"))return;el.classList.add("rv");io?io.observe(el):el.classList.add("in")})
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
// результат квізу -> готове повідомлення для чату (WhatsApp підставляє текст сам, у Telegram текст копіюється)
var TOPIC={
 cl:"умови ВНЖ у Чилі без інвестицій: підстава через віддалену роботу або дохід з-за кордону та потрібні документи",
 uy:"ПМЖ в Уругваї та шлях до громадянства (паспорт Уругваю): документи і терміни",
 ec:"ВНЖ в Еквадорі за дипломом онлайн, статус «про запас» та потрібні документи"
};
var QLAB=["Мета","Хто переїжджає","Що є","Готовність жити в країні"];
function quizPick(score){
 var rank=C.slice().sort((a,b)=>(score[b.k]||0)-(score[a.k]||0)),best=rank[0];
 return {best:best,tied:rank.slice(1).filter(c=>(score[c.k]||0)===(score[best.k]||0))};
}
function quizMsg(pick,ans){
 var b=pick.best,t="Добрий день! Пройдено квіз на сайті Grosmeister Relocation.\n#квіз #"+b.name+"\n\nРезультат: "+b.name+" — "+b.tag+"\n";
 if(pick.tied.length)t+="Однакова кількість балів також у: "+pick.tied.map(c=>c.name).join(", ")+"\n";
 t+="\nМої відповіді:\n"+QUIZ.map((q,i)=>"• "+QLAB[i]+": "+q.o[ans[i]][0]).join("\n");
 t+="\n\nХочу обговорити: "+TOPIC[b.k];
 return t;
}
function copyText(t){
 function legacy(){
  var a=document.createElement("textarea"),ok=false;a.value=t;a.setAttribute("readonly","");a.style.cssText="position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(a);a.select();a.setSelectionRange(0,t.length);
  try{ok=document.execCommand("copy")}catch(e){}
  a.remove();return ok;
 }
 if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t).then(function(){return true},function(){return legacy()});
 return Promise.resolve(legacy());
}
function toast(t){
 var d=document.createElement("div");d.className="toast";d.setAttribute("role","status");d.textContent=t;document.body.appendChild(d);
 requestAnimationFrame(function(){d.classList.add("in")});
 setTimeout(function(){d.classList.remove("in");setTimeout(function(){d.remove()},400)},4500);
}
function makeQuiz(body,prog,modal){
 var step=0,score={},ans=[];
 function render(){
  if(step<QUIZ.length){
   prog.style.width=(step/QUIZ.length*100)+"%";
   var q=QUIZ[step];
   body.innerHTML=qHTML(step);
   body.querySelectorAll(".opt").forEach(btn=>btn.onclick=function(){if(body.classList.contains("qb-out"))return;var s=q.o[+btn.dataset.i][1];ans[step]=+btn.dataset.i;for(var k in s)score[k]=(score[k]||0)+s[k];btn.classList.add("sel");body.classList.add("qb-out");setTimeout(function(){body.classList.remove("qb-out");step++;go();if(modal)window.scrollTo(0,0)},220)});
  }else{
   prog.style.width="100%";
   var pick=quizPick(score),best=pick.best,msg=quizMsg(pick,ans);
   body.innerHTML='<div class="result"><h2 class="rt">Вам, імовірно, підійде '+best.name+'</h2>'+card(best)+'<p class="why">Ця країна '+best.why2+'. Точний варіант визначимо на консультації.</p><div class="rmsg">'+msgLink('tgm sm',TG+'?text='+encodeURIComponent(msg),P_TG,'Надіслати результат у Telegram')+msgLink('wa sm',WA+'?text='+encodeURIComponent(msg),P_WA,'Надіслати результат у WhatsApp')+'</div><button class="btn line block again" style="color:var(--ink)">Пройти знову</button></div>';
   body.querySelector(".msg.tgm").onclick=function(){copyText(msg).then(function(ok){toast(ok?"Текст підставлено в чат. Якщо його не видно, результат уже скопійовано, просто вставте.":"Не вдалося скопіювати автоматично. Напишіть у чат, яка країна вам підійшла: "+best.name)})};
   body.querySelector(".again").onclick=function(){step=0;score={};ans=[];go()};
  }
 }
 function qHTML(i){var q=QUIZ[i];return '<p class="muted qn">Питання '+(i+1)+' з '+QUIZ.length+'</p><h2>'+q.q+'</h2><div class="opts">'+q.o.map((o,j)=>'<button class="opt" data-i="'+j+'">'+o[0]+'</button>').join('')+'</div>'}
 // усі питання мають однакову висоту (як найвище), щоб сторінка нижче не стрибала
 function lock(){
  var w=body.clientWidth;if(!w)return;
  var m=document.createElement("div");m.className="qmeasure";m.setAttribute("aria-hidden","true");m.style.width=w+"px";
  body.parentNode.appendChild(m);
  var mx=0;for(var i=0;i<QUIZ.length;i++){m.innerHTML=qHTML(i);mx=Math.max(mx,m.getBoundingClientRect().height)}
  m.remove();body.style.minHeight=Math.ceil(mx)+"px";
 }
 // плавна зміна висоти (перехід до результату і назад)
 function glide(h0,h1){
  if(Math.abs(h1-h0)<3||!body.animate||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  body.style.overflow="hidden";
  var a=body.animate([{height:h0+"px"},{height:h1+"px"}],{duration:380,easing:"cubic-bezier(.2,.8,.2,1)"});
  a.onfinish=a.oncancel=function(){body.style.overflow=""};
 }
 function go(){var h0=body.offsetHeight;render();glide(h0,body.offsetHeight)}
 var lw=body.clientWidth;
 addEventListener("resize",function(){var w=body.clientWidth;if(Math.abs(w-lw)>1){lw=w;lock()}});
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(lock);
 return function(){step=0;score={};ans=[];lock();go()};
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
 var pb=getComputedStyle(c).paddingBottom,pbn=parseFloat(pb)||0,h=0;
 if(!d.open){
  d.open=true;h=c.getBoundingClientRect().height-pbn;c.style.overflow="hidden";
  d._a=c.animate([{height:"0px",paddingBottom:"0px",opacity:0},{height:h+"px",paddingBottom:pb,opacity:1}],{duration:380,easing:"cubic-bezier(.2,.8,.2,1)"});
  d._a.onfinish=function(){c.style.overflow="";d._a=null}
 }else{
  h=c.getBoundingClientRect().height-pbn;c.style.overflow="hidden";d.classList.add("closing");
  d._a=c.animate([{height:h+"px",paddingBottom:pb,opacity:1},{height:"0px",paddingBottom:"0px",opacity:0}],{duration:260,easing:"ease"});
  d._a.onfinish=function(){d.open=false;d.classList.remove("closing");c.style.overflow="";d._a=null}
 }
});
addEventListener("hashchange",route);route();

// кнопка Telegram: з’являється після прокрутки, на телефоні періодично розкривається в підпис
(function(){
 var tg=document.querySelector(".tg");if(!tg)return;
 var shown=false,openT=0,loopT=0,nearFooter=false,calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
 var ft=document.querySelector("footer");
 if(ft&&"IntersectionObserver" in window)new IntersectionObserver(function(es){nearFooter=es[0].isIntersecting;if(nearFooter){tg.classList.remove("open");clearTimeout(openT)}}).observe(ft);
 function open(){if(calm||!shown||nearFooter)return;var t=tg.querySelector(".tgt");tg.style.setProperty("--tgw",t.scrollWidth+"px");tg.classList.add("open");clearTimeout(openT);openT=setTimeout(function(){tg.classList.remove("open")},4800)}
 function check(){
  var on=window.scrollY>350;
  if(on&&!shown){shown=true;tg.classList.add("show");setTimeout(open,700);loopT=setInterval(function(){if(!tg.matches(":hover"))open()},25000)}
  else if(!on&&shown){shown=false;tg.classList.remove("show","open");clearInterval(loopT);clearTimeout(openT)}
 }
 addEventListener("scroll",check,{passive:true});check();
})();
