(function(){
const C={name:"Strength Society",wa:"",phone:"",draft:true,query:"Strength Society, DSK Chintamani, Kishore Bhadbhade Path, Shaniwar Peth, Pune, Maharashtra 411030"};
const HR=null; // e.g. [[6,22],[6,22],...] Sun..Sat. null = not added yet
const IMG=k=>"img/"+k+".jpg";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=[["Weight training","Machines, racks, benches and free weights for building strength and muscle.","rack"],["CrossFit","Open turf and plyo boxes for functional, high-energy training.","turf1"],["Personal training","One-to-one guidance from trainers who know their stuff.","mach"],["Yoga classes","Yoga sessions to build mobility and help you recover.","wide"],["Cycling","Cardio equipment, including ellipticals, to warm up or push harder.","ell"]];
const RV=[["Soham Bhutkar","Hands down one of the best gyms around. Huge shoutout to Shreyas, Pratik, and Akshay—they keep the floor running smooth, the gear dialed in, and the standards high. What sets this place apart is the genuine community; vibing and training …"],["Saiprasad Gurav","Strength Society Fitness is an excellent gym with a spacious 5,000 sq. ft. …"]];
const SP=["rack","turf1","plat","wide","bench","mach","ell"];

if(!C.draft){const d=$("#dr");d&&d.remove()}
const DIR="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(C.query);
["#dir","#dir2","#mdir","#dir3"].forEach(s=>{const e=$(s);if(e)e.href=DIR});
const shm=$("#shm");if(shm)shm.onclick=()=>{$("#mapbox").innerHTML='<iframe title="Map to Strength Society" src="https://www.google.com/maps?q='+encodeURIComponent(C.query)+'&output=embed"></iframe>'};
const hrs=$("#hrs");if(hrs)hrs.textContent=HR?"":"Opening hours: to be added.";

/* header, progress bar, floating button, parallax */
const hb=$("#hb"),fj=$("#fj"),pgp=$("#pgp");
const onS=()=>{document.body.classList.toggle("sc",scrollY>30);if(hb)hb.style.transform="translateY("+Math.min(scrollY,900)*.3+"px)";
 if(fj)fj.classList.toggle("show",scrollY>innerHeight*.8);
 if(pgp){const h=document.documentElement.scrollHeight-innerHeight;pgp.style.width=(h>0?Math.min(100,scrollY/h*100):0)+"%"}};
addEventListener("scroll",onS,{passive:true});onS();
const mn=$("#mn");if(mn)mn.onclick=()=>document.body.classList.toggle("open");

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
$$(".rv").forEach(e=>io.observe(e));

/* count-up numbers */
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io2.unobserve(e.target);const el=e.target,to=+el.dataset.c,dd=+(el.dataset.d||0),t0=performance.now();
 const f=t=>{const k=Math.min(1,(t-t0)/1500);el.textContent=(to*(1-Math.pow(1-k,3))).toFixed(dd);if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}));
$$("[data-c]").forEach(e=>io2.observe(e));

/* home: hero slideshow, strips, ticker */
if(hb){["rack","turf1","wide","plat"].forEach(k=>{const m=document.createElement("img");m.alt="";m.src=IMG(k);hb.append(m)});
 let hi=0;const hbi=$$("img",hb);hbi[0].classList.add("on");setInterval(()=>{hbi[hi].classList.remove("on");hi=(hi+1)%hbi.length;hbi[hi].classList.add("on")},5000)}
const st=$("#st");if(st){const mk=k=>'<img alt="" src="'+IMG(k)+'">',R=[...SP].reverse();
 st.innerHTML=SP.map(mk).join("")+SP.map(mk).join("");$("#st2").innerHTML=R.map(mk).join("")+R.map(mk).join("")}
const bd=$("#bd");if(bd){const bw=["Train hard","Weights","CrossFit","Yoga","Cycling","Personal training"].map(x=>"<span>"+x+" <i>●</i></span>").join("");bd.innerHTML=bw+bw+bw+bw}

/* home: programs list with preview */
const pr=$("#pr"),pv=$("#pv");
if(pr&&pv){let cur=0,at;
 const setOn=i=>{cur=i;$$(".row",pr).forEach((x,j)=>x.classList.toggle("on",j===i));$$("img",pv).forEach((x,j)=>x.classList.toggle("on",j===i))};
 P.forEach(([tt,d,k],i)=>{const r=document.createElement("a");r.href="training.html#p"+(i+1);r.className="row rv"+(i?"":" on");r.style.cssText+="transition-delay:"+i*90+"ms;display:grid;text-decoration:none;color:inherit";
  r.innerHTML='<div class="n">0'+(i+1)+'</div><div><h3></h3><p></p></div><img class="th" alt="">';
  $("h3",r).textContent=tt;$("p",r).textContent=d;$("img",r).src=IMG(k);pr.append(r);io.observe(r);
  const im=document.createElement("img");im.alt="";im.src=IMG(k);if(!i)im.className="on";pv.append(im);
  const go=()=>{clearInterval(at);setOn(i)};r.onmouseenter=go;r.onfocus=go});
 at=setInterval(()=>setOn((cur+1)%P.length),3500)}

/* reviews */
const rq=$("#rq");if(rq){rq.innerHTML=RV.map(()=>'<div class="q"><p></p><b></b></div>').join("");
 $$(".q",rq).forEach((q,i)=>{$("p",q).textContent="“"+RV[i][1]+"”";$("b",q).textContent=RV[i][0]})}

/* home: find-your-program quiz */
const qz=$("#qz");
if(qz){const Q=[["What is your main goal?",[["Build muscle",{w:3}],["Lose fat",{w:1,c:2,y:1}],["Get fitter and faster",{c:3,y:0}],["Feel better and move well",{y:3}]]],
 ["How do you like to train?",[["Alone, at my own pace",{w:2,y:1}],["With a group and some energy",{c:3}],["With a coach guiding me",{p:3}],["Calm and mindful",{y:3}]]],
 ["How much experience do you have?",[["Just starting",{p:2,y:1}],["Some experience",{w:1,c:1}],["Years of training",{w:2,c:2}]]]];
 const R={w:["Weight training","Machines, racks, benches and free weights to build strength and size.","rack","#p1"],c:["CrossFit","Open turf, plyo boxes and group energy for all-round fitness.","turf1","#p2"],p:["Personal training","A trainer builds the plan and keeps you accountable.","mach","#p3"],y:["Yoga classes","Mobility, recovery and calm to balance your training.","wide","#p4"]};
 let step=0,sc={w:0,c:0,p:0,y:0};
 const draw=()=>{if(step<Q.length){const [t,o]=Q[step];qz.innerHTML='<div class="qbar"><i style="width:'+(step/Q.length*100)+'%"></i></div><div class="st">Question '+(step+1)+' of '+Q.length+'</div><h3></h3><div class="qo"></div>';
   $("h3",qz).textContent=t;const box=$(".qo",qz);o.forEach(([l,s])=>{const b=document.createElement("button");b.type="button";b.textContent=l;b.onclick=()=>{for(const k in s)if(sc[k]!==undefined)sc[k]+=s[k];step++;draw()};box.append(b)})}
  else{const k=Object.keys(sc).sort((a,b)=>sc[b]-sc[a])[0],r=R[k];
   qz.innerHTML='<div class="qbar"><i style="width:100%"></i></div><div class="st">Your match</div><div class="qres"><img alt="" src="'+IMG(r[2])+'"><div><h3></h3><p></p><a class="bt" href="training.html'+r[3]+'">See the details</a><button type="button" class="qre">Try again</button></div></div>';
   $("h3",qz).textContent=r[0];$(".qres p",qz).textContent=r[1];$(".qre",qz).onclick=()=>{step=0;sc={w:0,c:0,p:0,y:0};draw()}}};
 draw()}

/* training: timetable tabs (sample) */
const tt=$("#tt");
if(tt){const D=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
 const S={wk:[["06:00","Open floor · Weights","Open"],["07:30","Yoga class","Yoga"],["10:00","Open floor","Open"],["17:30","CrossFit group","CrossFit"],["19:00","Cycling and cardio","Cardio"]],we:[["07:00","Yoga class","Yoga"],["08:30","CrossFit group","CrossFit"],["10:00","Open floor","Open"]]};
 const tabs=$(".tabs",tt),list=$(".tl",tt);
 const show=i=>{$$("button",tabs).forEach((b,j)=>b.setAttribute("aria-selected",j===i));const d=i>4?S.we:S.wk;
  list.innerHTML=d.map(s=>'<div class="slot"><b>'+s[0]+'</b><span>'+s[1]+'</span><em>'+s[2]+'</em></div>').join("")};
 D.forEach((d,i)=>{const b=document.createElement("button");b.type="button";b.textContent=d;b.setAttribute("role","tab");b.onclick=()=>show(i);tabs.append(b)});
 const today=(new Date().getDay()+6)%7;show(today)}

/* training: BMI */
const bm=$("#bmi");
if(bm){const h=$("#bh"),w=$("#bw"),o=$("#bo"),l=$("#bl");
 const calc=()=>{const H=+h.value/100,W=+w.value;if(!(H>0.5&&W>10)){o.textContent="--";l.textContent="Enter height and weight";return}
  const v=W/(H*H);o.textContent=v.toFixed(1);l.textContent=v<18.5?"Underweight range":v<25?"Healthy range":v<30?"Overweight range":"Obese range"};
 h.oninput=w.oninput=calc;calc()}

/* gallery */
const gl=$("#gal");
if(gl){const G=[["rack","Weights","Racks and benches"],["turf1","Turf","Open turf and plyo boxes"],["mach","Weights","Strength machines"],["ell","Cardio","Treadmills and cross trainer"],["bench","Weights","Bench station"],["plat","Weights","Lifting platform"],["wide","Turf","Turf and yoga area"]];
 gl.innerHTML=G.map((g,i)=>'<a href="'+IMG(g[0])+'" data-c="'+g[1]+'" data-i="'+i+'"><img alt="'+g[2]+'" loading="lazy" src="'+IMG(g[0])+'"><span>'+g[2]+'</span></a>').join("");
 const fb=$$(".fil button");fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.setAttribute("aria-pressed",x===b));$$("a",gl).forEach(a=>a.hidden=!(b.dataset.f==="All"||a.dataset.c===b.dataset.f))});
 const lb=$("#lb"),li=$("img",lb),lc=$("small",lb);let idx=0,vis=[];
 const open=i=>{vis=$$("a",gl).filter(a=>!a.hidden);idx=i;const a=vis[idx];li.src=a.href;li.alt=a.title||"";lc.textContent=(idx+1)+" / "+vis.length+" · "+$("span",a).textContent;lb.classList.add("on")};
 const mv=d=>{idx=(idx+d+vis.length)%vis.length;open(idx)};
 gl.onclick=e=>{const a=e.target.closest("a");if(!a)return;e.preventDefault();vis=$$("a",gl).filter(x=>!x.hidden);open(vis.indexOf(a))};
 $(".x",lb).onclick=()=>lb.classList.remove("on");$(".pv2",lb).onclick=()=>mv(-1);$(".nx",lb).onclick=()=>mv(1);lb.onclick=e=>{if(e.target===lb)lb.classList.remove("on")};
 addEventListener("keydown",e=>{if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")mv(-1);if(e.key==="ArrowRight")mv(1)})}

/* join form */
const fm=$("#fm");
if(fm)fm.onsubmit=e=>{e.preventDefault();const n=$("#nm").value.trim(),p=$("#ph").value.trim(),m=$("#msg");
 if(!n||!p){m.textContent="Please add your name and phone number.";return}
 if(!C.wa){m.textContent="This is a draft. The gym’s WhatsApp number has not been added yet.";return}
 const t="Hi "+C.name+", I would like to start training.\nName: "+n+"\nPhone: "+p+"\nGoal: "+$("#gal").value+"\nBest time: "+$("#tm").value;
 location.href="https://wa.me/"+C.wa+"?text="+encodeURIComponent(t)};
const wa=$("#wa");if(wa&&C.wa)wa.href="https://wa.me/"+C.wa;
})();
