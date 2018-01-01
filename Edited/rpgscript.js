// DO NOT EDIT OR MODIFY THIS SOURCE CODE.
// � Copyright 1999.  Pok-Ching Lee.  All Rights Reserved.

goodexp = 0;
mebeogd = 0;

function setnum(thenum,digits,place) {
var tempnum = thenum;
var tempnum = tempnum + "";
while (tempnum.length < digits)
	{
	var tempnum = "b" + tempnum;
	}
var loop = 0;
while (loop < digits)
	{
	eval("document." +place+loop+ ".src='pic/number/" +tempnum.charAt(loop)+ ".gif';");
	loop++
	}
}

function setSave() {
if (buttontype == 1) {setSave2()} else {alert("You can only save when you are in town")};
}

function setSave2() {
var theconfirm = confirm("Your previous save game will be deleted and be replace by this game.  Are you sure you want to save?")
if (theconfirm == true) 
	{
	setSave3();
	alert("Your game has been saved.  Do not delelte your cookie files.  If you delete your cookies, your save game will be lost.");
	};
}

function setSave3() {
var expdate=new Date("December 25, 2099");                    
var expdate=expdate.toGMTString();
document.cookie = boss+ "," +ylevel+ "," +mpmore+ "," +hpmore+ "," +nextlevel+ "," +yourweapon+ "," +absorb+ "," +sabsorb+ "," +ygold+ "," +yexp+ "," +str+ "," +end+ "," +agi+ "," +mag+ "," +maxhp+ "," +maxmp+ "," +yevade+ "," +sb+ "," +eb+ "," +ab+ "," +mb+ "," +lb+ "," +mpb+ "," +currenthp+ "," +currentmp+ "," +h1+ "," +h2+ "," +h3+ "," +h4+ "," +h5+ "," +h6+ "," +cname+ "," +suse+ "," +mage+ "," +evadebounus+ "," +healb+ ";expires=" +expdate;
}

function setLoad() {
var theconfirm = confirm("Loading the game will delete the character you are currently using.  Are you sure you want to load the game?");
if (theconfirm == true) 
	{
	if (document.cookie == "")
		{
		alert("WARNING:\n-No save game found");
		}
	else
		{
		setLoad2();
		alert("Save game has been loaded.");
		}
	};
}

function setLoad2() {
var thecookie = document.cookie;
var thecookie = thecookie.split(",");
townbutton();

boss = thecookie[0];
eval("document.qu.review.value = msg" +boss+ ";");

ylevel = thecookie[1];
mpmore = thecookie[2];
hpmore = thecookie[3];
nextlevel = thecookie[4];
yourweapon = thecookie[5];
absorb = thecookie[6];
sabsorb = thecookie[7];
ygold = thecookie[8];
yexp = thecookie[9];
str = thecookie[10];
end = thecookie[11];
agi = thecookie[12];
mag = thecookie[13];
maxhp = thecookie[14];
maxmp = thecookie[15];
yevade = thecookie[16];
sb = thecookie[17];
eb = thecookie[18];
ab = thecookie[19];
mb = thecookie[20];
lb = thecookie[21];
mpb = thecookie[22];
currenthp = thecookie[23];
currentmp = thecookie[24];
h1 = thecookie[25];
h2 = thecookie[26];
h3 = thecookie[27];
h4 = thecookie[28];
h5 = thecookie[29];
h6 = thecookie[30];
cname = thecookie[31];
suse = thecookie[32];
mage = thecookie[33];
evadebounus = thecookie[34];
healb = thecookie[35];
showstat();
showgear();
showitem();
showname();
created = 1;
document.monster.src = "pic/inside.gif";
}


function magicselect() {
numero = window.document.spells.type.options[document.spells.type.selectedIndex].value;
spellselected = numero;
}

function stanceselect() {
numero2 = window.document.spells.type2.options[document.spells.type2.selectedIndex].value;
if (numero2 == 1) {stance = 1.10; att = 1.10;};
if (numero2 == 2) {stance = 1.00; att = 1.00;};
if (numero2 == 3) {stance = 0.90; att = 0.90;};
}

msg1 = "You have just finish your schooling in the cadet academy and you are called upon for you first quest.  A female mercenary has been raiding and killing the town's people lately.  Your quest is to kill the female mercenary.";

msg2 = "After you defeated the female mercenary, you headed toward the town of Malik.  The king of Malik sends you on your second quest.  A dragon is living in a cave near Malik and attacks the town every couple of days.  You quest is to slay the dragon and bring peace to Malik.";

msg3 = "You have slay the dragon and now you moved on to Xantos.  Here, you are greeted by the king's servants.  The servants takes you to the king and are given another quest.  A warlock named Magus has been conjuring monsters to attack the town.  Your quest is to defeat this warlock.";

msg4 = "After finishing your quest, you have became well known in the lands.  You are summoned by the king of Argos for a special quest.  Your quest is to retrieve the golden fleece which is guarded by the Minotaur.";

msg5 = "After returning with the golden fleece, the king promptly gives you your final quest.  A necromancer has been behind all of the past attacks.  You quest is to destroy him and bring peace to the lands." 

function loadit() {
created = 0;
racehuman();
townbutton();
item1();
h1 = 5;
h2 = 1;
h3 = 0;
h4 = 0;
h5 = 0;
h6 = 0;
magicselect();
stanceselect();
pclass1();
race1();
document.qu.review.value = msg1;
}

function outside2() {
if (boss == 1) {fboss1()} else {
if (boss == 2) {fboss2()} else {
if (boss == 3) {fboss3()} else {
if (boss == 4) {fboss4()} else {
if (boss == 5) {fboss5()}
}}}};
fightbutton();
def = 0;
magdef = 0;
sleep = 0;
stop = 0;
mhp = ehp;
addstr = 0;
}

function pclass1() {
document.formb.c1.checked = true;
document.formb.c2.checked = false;
document.formb.c3.checked = false;
document.formb.c4.checked = false;
tsbounus = 2;
tebounus = 3;
tabounus = 0;
tmbounus = 0;
tlbounus = 5;
tmpbounus = 0;
}

function pclass2() {
document.formb.c1.checked = false;
document.formb.c2.checked = true;
document.formb.c3.checked = false;
document.formb.c4.checked = false;
tsbounus = 1;
tebounus = 0;
tabounus = 4;
tmbounus = 1;
tlbounus = 2;
tmpbounus = 0;
}

function pclass3() {
document.formb.c1.checked = false;
document.formb.c2.checked = false;
document.formb.c3.checked = true;
document.formb.c4.checked = false;
tsbounus = 0;
tebounus = 0;
tabounus = 1;
tmbounus = 4;
tlbounus = 0;
tmpbounus = 4;
}

function pclass4() {
document.formb.c1.checked = false;
document.formb.c2.checked = false;
document.formb.c3.checked = false;
document.formb.c4.checked = true;
tsbounus = 2;
tebounus = 0;
tabounus = 0;
tmbounus = 2;
tlbounus = 2;
tmpbounus = 2;
}

function calgear() {
if (yourweapon == 1) {wp1()};
if (yourweapon == 2) {wp2()};
if (yourweapon == 3) {wp3()};
if (yourweapon == 4) {wp4()};
if (yourweapon == 5) {wp5()};
if (yourweapon == 6) {wp6()};
if (yourweapon == 7) {wp7()};
if (yourweapon == 8) {wp8()};
if (yourweapon == 9) {wp9()};
if (yourweapon == 10) {wp10()};

if (absorb == 2) {ar1()};
if (absorb == 4) {ar2()};
if (absorb == 6) {ar3()};
if (absorb == 8) {ar4()};
if (absorb == 10) {ar5()};
if (absorb == 12) {ar6()};
if (absorb == 15) {ar7()};
if (absorb == 20) {ar8()};
if (absorb == 25) {ar9()};
if (absorb == 35) {ar10()};
if (absorb == 100) {ar11()};
if (absorb == 512) {ar12()};

if (sabsorb == 1) {sd1()};
if (sabsorb == 2) {sd2()};
if (sabsorb == 3) {sd3()};
if (sabsorb == 4) {sd4()};
if (sabsorb == 5) {sd5()};
if (sabsorb == 6) {sd6()};
if (sabsorb == 7) {sd7()};
if (sabsorb == 8) {sd8()};
if (sabsorb == 10) {sd9()};
if (sabsorb == 12) {sd10()};
if (sabsorb == 14) {sd11()};
if (sabsorb == 16) {sd12()};
if (sabsorb == 18) {sd13()};
if (sabsorb == 20) {sd14()};
if (sabsorb == 23) {sd15()};
if (sabsorb == 26) {sd16()};
if (sabsorb == 29) {sd17()};
if (sabsorb == 32) {sd18()};
if (sabsorb == 35) {sd19()};
if (sabsorb == 100) {sd20()};
if (sabsorb == 512) {sd21()};

}

function showgear() {
if (yourweapon == 1 || yourweapon == 2)
	{document.weaponpic.src = "weapon/saber.gif"};
if (yourweapon == 3 || yourweapon == 4)
	{document.weaponpic.src = "weapon/mace.gif"};
if (yourweapon == 5 || yourweapon == 6)
	{document.weaponpic.src = "weapon/axe.gif"};
if (yourweapon == 7 || yourweapon == 8)
	{document.weaponpic.src = "weapon/warhammer.gif"};
if (yourweapon == 9)
	{document.weaponpic.src = "weapon/morningstar.gif"};
if (yourweapon == 10)
	{document.weaponpic.src = "weapon/sword.gif"};
if (sabsorb == 1) {document.shieldpic.src = "weapon/shields/sh01.gif"};
if (sabsorb == 2) {document.shieldpic.src = "weapon/shields/sh02.gif"};
if (sabsorb == 3) {document.shieldpic.src = "weapon/shields/sh03.gif"};
if (sabsorb == 4) {document.shieldpic.src = "weapon/shields/sh04.gif"};
if (sabsorb == 5) {document.shieldpic.src = "weapon/shields/sh05.gif"};
if (sabsorb == 6) {document.shieldpic.src = "weapon/shields/sh06.gif"};
if (sabsorb == 7) {document.shieldpic.src = "weapon/shields/sh07.gif"};
if (sabsorb == 8) {document.shieldpic.src = "weapon/shields/sh08.gif"};
if (sabsorb == 10) {document.shieldpic.src = "weapon/shields/sh09.gif"};
if (sabsorb == 12) {document.shieldpic.src = "weapon/shields/sh10.gif"};
if (sabsorb == 14) {document.shieldpic.src = "weapon/shields/sh11.gif"};
if (sabsorb == 16) {document.shieldpic.src = "weapon/shields/sh12.gif"};
if (sabsorb == 18) {document.shieldpic.src = "weapon/shields/sh13.gif"};
if (sabsorb == 20) {document.shieldpic.src = "weapon/shields/sh14.gif"};
if (sabsorb == 23) {document.shieldpic.src = "weapon/shields/sh15.gif"};
if (sabsorb == 26) {document.shieldpic.src = "weapon/shields/sh16.gif"};
if (sabsorb == 29) {document.shieldpic.src = "weapon/shields/sh17.gif"};
if (sabsorb == 32) {document.shieldpic.src = "weapon/shields/sh18.gif"};
if (sabsorb == 35) {document.shieldpic.src = "weapon/shields/sh19.gif"};
if (sabsorb == 100) {document.shieldpic.src = "weapon/shields/sh19.gif"};
if (sabsorb == 512) {document.shieldpic.src = "weapon/shields/sh19.gif"};

calgear();
}

function showitem() {
document.items.heal1.value = h1;
document.items.heal2.value = h2;
document.items.heal3.value = h3;
document.items.heal4.value = h4;
document.items.heal5.value = h5;
document.items.heal6.value = h6;
}

function shop1() {
if (buywindow.document.buystuff.a.checked == true) {ba()};
if (buywindow.document.buystuff.b.checked == true) {bb()};
if (buywindow.document.buystuff.b1.checked == true) {healingbrew()};
if (buywindow.document.buystuff.b2.checked == true) {magicether()};
if (buywindow.document.buystuff.b3.checked == true) {magicpotion()};
if (buywindow.document.buystuff.c.checked == true) {bc()};
if (buywindow.document.buystuff.d.checked == true) {bd()};
if (buywindow.document.buystuff.e.checked == true) {be()};
if (buywindow.document.buystuff.f.checked == true) {bf()};
if (buywindow.document.buystuff.g.checked == true) {bg()};
if (buywindow.document.buystuff.h.checked == true) {bh()};
if (buywindow.document.buystuff.i.checked == true) {bi()};
if (buywindow.document.buystuff.j.checked == true) {bj()};
if (buywindow.document.buystuff.k.checked == true) {bk()};
if (buywindow.document.buystuff.l.checked == true) {bl()};
if (buywindow.document.buystuff.m.checked == true) {bm()};
if (buywindow.document.buystuff.n.checked == true) {bn()};
if (buywindow.document.buystuff.o.checked == true) {bo()};
if (buywindow.document.buystuff.p.checked == true) {bp()};
if (buywindow.document.buystuff.q.checked == true) {bq()};
if (buywindow.document.buystuff.r.checked == true) {br()};
if (buywindow.document.buystuff.s.checked == true) {bs()};
if (buywindow.document.buystuff.t.checked == true) {bt()};
if (buywindow.document.buystuff.u.checked == true) {bu()};
if (buywindow.document.buystuff.v.checked == true) {bv()};
if (buywindow.document.buystuff.w.checked == true) {bw()};
if (buywindow.document.buystuff.x.checked == true) {bx()};
if (buywindow.document.buystuff.y.checked == true) {by()};

if (buywindow.document.buystuff.aa.checked == true) {ba1()};
if (buywindow.document.buystuff.ab.checked == true) {bb2()};
if (buywindow.document.buystuff.ac.checked == true) {bc3()};
if (buywindow.document.buystuff.ad.checked == true) {bd4()};
if (buywindow.document.buystuff.ae.checked == true) {be5()};
if (buywindow.document.buystuff.af.checked == true) {bf6()};
if (buywindow.document.buystuff.ag.checked == true) {bg7()};
if (buywindow.document.buystuff.ah.checked == true) {bh8()};
if (buywindow.document.buystuff.ai.checked == true) {bi9()};
if (buywindow.document.buystuff.aj.checked == true) {bj10()};
if (buywindow.document.buystuff.ak.checked == true) {bk11()};
if (buywindow.document.buystuff.al.checked == true) {bl12()};
if (buywindow.document.buystuff.am.checked == true) {bm13()};
if (buywindow.document.buystuff.an.checked == true) {bn14()};
if (buywindow.document.buystuff.ao.checked == true) {bo15()};
if (buywindow.document.buystuff.ap.checked == true) {bp16()};
if (buywindow.document.buystuff.aq.checked == true) {bq17()};
if (buywindow.document.buystuff.ar.checked == true) {br18()};
if (buywindow.document.buystuff.as.checked == true) {bs19()};
if (buywindow.document.buystuff.at.checked == true) {bt20()};
if (buywindow.document.buystuff.au.checked == true) {bu21()};
buywindow.focus();
}

function shop2() {
buywindow = window.open("buy.html","","width=325,height=550,scrollbars,resizable,top,left")
}

function shop3() {
alert("You left the store and arrived at the town.");
townbutton();
}

function inn() {
var sureinn = confirm("Would you like to rest in the inn for $50?");
if (sureinn == true)
	{
	ygold = (ygold * 1) - (50 * 1);
	currenthp = maxhp;
	currentmp = maxmp;
	showstat();
	}
}

function town1() {
if (created == 1)
	{
buywindow = window.open("buy.html","","width=325,height=550,scrollbars,resizable,top,left");
shopbutton();
	}
else
	{
	alert("Create a character first.");
	}
}

function town2() {
if (created == 1)
				{
if (ygold <= 49)
	{
	alert("The inn cost $50.  Come back when you have the gold.");
	}
else
	{
	inn();	
	}
				}
else
				{
				alert("Create a character first.");
				}
}

function outside1() {
if (boss == 1) {mon1()} else {
if (boss == 2) {mon2()} else {
if (boss == 3) {mon3()} else {
if (boss == 4) {mon4()} else {
if (boss == 5) {mon5()}
}}}};
fightbutton();
def = 0;
magdef = 0;
sleep = 0;
stop = 0;
mhp = ehp;
addstr = 0;
}

function outside3() {
alert("You arrived at the town.");
townbutton();
}

function town3() {
if (created == 1)
	{
alert("You left the town and went outside.");
outsidebutton();
	}
else
	{
	alert("Create a character first.");
	}
}

function button1() {
if (buttontype == 1) {town1();} else {
if (buttontype == 2) {outside1();} else {
if (buttontype == 3) {fight1();} else {
if (buttontype == 4) {shop1();} else {
}}}}
}

function button2() {
if (buttontype == 1) {town2();} else {
if (buttontype == 2) {outside2();} else {
if (buttontype == 3) {fight2();} else {
if (buttontype == 4) {shop2();} else {
}}}}
}

function button3() {
if (buttontype == 1) {town3();} else {
if (buttontype == 2) {outside3();} else {
if (buttontype == 3) {fight3();} else {
if (buttontype == 4) {shop3();} else {
}}}}
}

function townbutton() {
document.forma.one.value = "  Shop  ";
document.forma.two.value = "  Inn  ";
document.forma.three.value = "  Leave  ";
buttontype = 1;
document.monster.src = "pic/inside.gif";
}

function outsidebutton() {
document.forma.one.value = "Random Fight";
document.forma.two.value = " Quest ";
document.forma.three.value = " Town ";
buttontype = 2;
document.monster.src = "pic/outside.gif";
}

function fightbutton() {
document.forma.one.value = " Attack ";
document.forma.two.value = " Use Item ";
document.forma.three.value = " Cast Spell ";
buttontype = 3;
}

function shopbutton() {
document.forma.one.value = "  Buy  ";
document.forma.two.value = " Select ";
document.forma.three.value = " Town ";
buttontype = 4;
document.monster.src = "pic/inside.gif";
}

function item1() {
document.items.rad2.checked = false;
document.items.rad3.checked = false;
document.items.rad4.checked = false;
document.items.rad5.checked = false;
document.items.rad6.checked = false;
itemuse = 1;
}

function item2() {
document.items.rad1.checked = false;
document.items.rad3.checked = false;
document.items.rad4.checked = false;
document.items.rad5.checked = false;
document.items.rad6.checked = false;
itemuse = 2;
}

function item3() {
document.items.rad1.checked = false;
document.items.rad2.checked = false;
document.items.rad4.checked = false;
document.items.rad5.checked = false;
document.items.rad6.checked = false;
itemuse = 3;
}

function item4() {
document.items.rad1.checked = false;
document.items.rad2.checked = false;
document.items.rad3.checked = false;
document.items.rad5.checked = false;
document.items.rad6.checked = false;
itemuse = 4;
}

function item5() {
document.items.rad1.checked = false;
document.items.rad2.checked = false;
document.items.rad3.checked = false;
document.items.rad4.checked = false;
document.items.rad6.checked = false;
itemuse = 5;
}

function item6() {
document.items.rad1.checked = false;
document.items.rad2.checked = false;
document.items.rad3.checked = false;
document.items.rad4.checked = false;
document.items.rad5.checked = false;
itemuse = 6;
}

function showstatb() {
document.formb.s.value = st;
document.formb.e.value = en;
document.formb.a.value = ag;
document.formb.m.value = ma
document.formb.left.value = pleft;
}



function ys() {
	pleft = (pleft * 1) - (1 * 1);
	st = (st * 1) + (1 * 1);
	showstatb();
}

function ns() {
if (st >= 9)
	{
	st = (st * 1) - (1 * 1);
	pleft = (pleft * 1) + (1 * 1);
	showstatb();
	}
else
	{
	alert("You can't go any lower than 8.");
	}
}

function ye() {
	pleft = (pleft * 1) - (1 * 1);
	en = (en * 1) + (1 * 1);
	showstatb();
}

function ne() {
if (en >= 9)
	{
	en = (en * 1) - (1 * 1);
	pleft = (pleft * 1) + (1 * 1);
	showstatb();
	}
else
	{
	alert("You can't go any lower than 8.");
	}
}

function ya() {
	pleft = (pleft * 1) - (1 * 1);
	ag = (ag * 1) + (1 * 1);
	showstatb();
}

function na() {
if (ag >= 9)
	{
	ag = (ag * 1) - (1 * 1);
	pleft = (pleft * 1) + (1 * 1);
	showstatb();
	}
else
	{
	alert("You can't go any lower than 8.");
	}
}

function ym() {
	pleft = (pleft * 1) - (1 * 1);
	ma = (ma * 1) + (1 * 1);
	showstatb();
}

function nm() {
if (ma >= 9)
	{
	ma = (ma * 1) - (1 * 1);
	pleft = (pleft * 1) + (1 * 1);
	showstatb();
	}
else
	{
	alert("You can't go any lower than 8.");
	}
}


function racehuman() {
st = 12;
en = 12;
ag = 12;
ma = 12;
pleft = 15;
showstatb();
yevadet = 0;
hpbounus = 1;
mpbounus = 1;
}

function raceelf() {
st = 8;
en = 8;
ag = 14;
ma = 14;
pleft = 12;
showstatb();
yevadet = 5;
hpbounus = 0;
mpbounus = 5;
}

function racedwarf() {
st = 14;
en = 14;
ag = 8;
ma = 8;
pleft = 12;
showstatb();
yevadet = 0;
hpbounus = 7;
mpbounus = 0;
}

function racehalfing() {
st = 10;
en = 10;
ag = 16;
ma = 10;
pleft = 12;
showstatb();
yevadet = 15;
hpbounus = 2;
mpbounus = 2;
}

function race1() {
document.formb.pick1.checked = true;
document.formb.pick2.checked = false;
document.formb.pick3.checked = false;
document.formb.pick4.checked = false;
racehuman();
}

function race2() {
document.formb.pick1.checked = false;
document.formb.pick3.checked = false;
document.formb.pick4.checked = false;
raceelf();
}

function race3() {
document.formb.pick1.checked = false;
document.formb.pick2.checked = false;
document.formb.pick4.checked = false;
racedwarf();
}

function race4() {
document.formb.pick1.checked = false;
document.formb.pick2.checked = false;
document.formb.pick3.checked = false;
racehalfing();
}

function showname() {
document.stats.gamename.value = cname;
}

function create2() {
if (document.formb.c3.checked == true) {mage = 1} else {mage = 0};
if (document.formb.c4.checked == true) {healb = 1.85} else {healb = 1};
if (document.formb.c1.checked == true) {suse = 1.5} else {suse = 1};

boss = 1;
ylevel = 1;
mpmore = mpbounus;
hpmore = hpbounus;
nextlevel = 85;
if (document.formb.pick1.checked == true) {nextlevel = 75}
yourweapon = 1;
absorb = 2;
sabsorb = 1;
showgear();
ygold = 1500;
yexp = 0;
str = st;
end = en;
agi = ag;
mag = ma;
maxhp = Math.round((30 * 1) + (end * 2.5));
maxmp = Math.round((15 * 1) + (mag * 1.2));
evadebounus = (yevadet * 1);
if (document.formb.c2.checked == true) {evadebounus = (evadebounus * 1) + (15 * 1)};
yevade = Math.round((evadebounus * 1) + (agi * .5));

sb = tsbounus;
eb = tebounus;
ab = tabounus;
mb = tmbounus;
lb = tlbounus;
mpb = tmpbounus;

currenthp = maxhp;
currentmp = maxmp;
showstat();
showitem();
cname = document.formb.yname.value;
showname();
created = 1;
}

function showstat() {
setnum(str,3,"str");
setnum(end,3,"end");
setnum(agi,3,"agi");
setnum(mag,3,"mag");
setnum(yevade,2,"evd");

setnum(maxhp,5,"mhp");
setnum(currenthp,5,"chp");
setnum(maxmp,5,"mmp");
setnum(currentmp,5,"cmp");
setnum(ylevel,3,"level");

setnum(ygold,10,"gold");
setnum(yexp,10,"exp");
setnum(nextlevel,10,"nlev");
}

function create() {
if (created == 0)
	{
	create2();
	}
else
	{
	confirmit();
	};
alert("Character created.  Scroll down to play the game.");
}

function confirmit() {
var sure = confirm("You already have a character created.  Creating a new character will delete your previous charater and start a new game.  Are you sure you want to do this?");
if (sure == true)
		{
		create2();
		}
}




function ba() {
if (ygold <= 49)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a heal cherry.")
	ygold = (ygold * 1) - (50 * 1);
	h1 = (h1 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function bb() {
if (ygold <= 199)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a heal potion.")
	ygold = (ygold * 1) - (200 * 1);
	h2 = (h2 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function healingbrew() {
if (ygold <= 499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a healing brew.")
	ygold = (ygold * 1) - (500 * 1);
	h4 = (h4 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function magicether() {
if (ygold <= 299)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a magic ether.")
	ygold = (ygold * 1) - (300 * 1);
	h5 = (h5 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function magicpotion() {
if (ygold <= 799)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a magic potion")
	ygold = (ygold * 1) - (800 * 1);
	h6 = (h6 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function bc() {
if (ygold <= 1999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased an Elixer.")
	ygold = (ygold * 1) - (2000 * 1);
	h3 = (h3 * 1) + (1 * 1);
	showstat();
	showitem();
	}
}

function bd() {
if (ygold <= 49)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a short saber.");
	ygold = (ygold * 1) - (50 * 1);
	yourweapon = 1;
	showgear();
	showstat();
	}
}

function be() {
if (ygold <= 99)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a long saber.");
	ygold = (ygold * 1) - (100 * 1);
	yourweapon = 2;
	showgear();
	showstat();
	}
}

function bf() {
if (ygold <= 299)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a bronze mace.");
	ygold = (ygold * 1) - (300 * 1);
	yourweapon = 3;
	showgear();
	showstat();
	}
}

function bg() {
if (ygold <= 499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a iron mace.");
	ygold = (ygold * 1) - (500 * 1);
	yourweapon = 4;
	showgear();
	showstat();
	}
}

function bh() {
if (ygold <= 999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a broad axe.");
	ygold = (ygold * 1) - (1000 * 1);
	yourweapon = 5;
	showgear();
	showstat();
	}
}

function bi() {
if (ygold <= 1499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a battle axe.");
	ygold = (ygold * 1) - (1500 * 1);
	yourweapon = 6;
	showgear();
	showstat();
	}
}

function bj() {
if (ygold <= 1999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a bronze warhammer.");
	ygold = (ygold * 1) - (2000 * 1);
	yourweapon = 7;
	showgear();
	showstat();
	}
}

function bk() {
if (ygold <= 2499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a iron warhammer.");
	ygold = (ygold * 1) - (2500 * 1);
	yourweapon = 8;
	showgear();
	showstat();
	}
}

function bl() {
if (ygold <= 4999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a morning star.");
	ygold = (ygold * 1) - (5000 * 1);
	yourweapon = 9;
	showgear();
	showstat();
	}
}

function bm() {
if (ygold <= 7999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased the Knight's Blade.");
	ygold = (ygold * 1) - (8000 * 1);
	yourweapon = 10;
	showgear();
	showstat();
	}
}

function bn() {
if (ygold <= 49)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased clothes.");
	ygold = (ygold * 1) - (50 * 1);
	absorb = 2;
	showgear();
	showstat();
	}
}

function bo() {
if (ygold <= 199)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased leather armour.");
	ygold = (ygold * 1) - (200 * 1);
	absorb = 4;
	showgear();
	showstat();
	}
}

function bp() {
if (ygold <= 499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased studded leather.");
	ygold = (ygold * 1) - (500 * 1);
	absorb = 6;
	showgear();
	showstat();
	}
}

function bq() {
if (ygold <= 999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze chain mail.");
	ygold = (ygold * 1) - (1000 * 1);
	absorb = 8;
	showgear();
	showstat();
	}
}

function br() {
if (ygold <= 1499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron chain mail.");
	ygold = (ygold * 1) - (1500 * 1);
	absorb = 10;
	showgear();
	showstat();
	}
}

function bs() {
if (ygold <= 1999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze half plate.");
	ygold = (ygold * 1) - (2000 * 1);
	absorb = 12;
	showgear();
	showstat();
	}
}

function bt() {
if (ygold <= 2999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron half plate.");
	ygold = (ygold * 1) - (3000 * 1);
	absorb = 15;
	showgear();
	showstat();
	}
}

function bu() {
if (ygold <= 3999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze full plate.");
	ygold = (ygold * 1) - (4000 * 1);
	absorb = 20;
	showgear();
	showstat();
	}
}

function bv() {
if (ygold <= 5999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron full plate.");
	ygold = (ygold * 1) - (6000 * 1);
	absorb = 25;
	showgear();
	showstat();
	}
}

function bw() {
if (ygold <= 9999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased knight's armour.");
	ygold = (ygold * 1) - (10000 * 1);
	absorb = 35;
	showgear();
	showstat();
	}
}

function bx() {
if (ygold <= 99999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased some Godly armour.");
	ygold = (ygold * 1) - (100000 * 1);
	absorb = 100;
	showgear();
	showstat();
	}
}

function by() {
if (ygold <= 999999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased OGd's armour.");
	ygold = (ygold * 1) - (1000000 * 1);
	absorb = 512;
	showgear();
	showstat();
	}
}

function ba1() {
if (ygold <= 49)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased wood round shield.");
	ygold = (ygold * 1) - (50 * 1);
	sabsorb = 1;
	showgear();
	showstat();
	}
}

function bb2() {
if (ygold <= 99)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased oak round shield.");
	ygold = (ygold * 1) - (100 * 1);
	sabsorb = 2;
	showgear();
	showstat();
	}
}

function bc3() {
if (ygold <= 199)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron round shield.");
	ygold = (ygold * 1) - (200 * 1);
	sabsorb = 3;
	showgear();
	showstat();
	}
}

function bd4() {
if (ygold <= 399)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased gold round shield.");
	ygold = (ygold * 1) - (400 * 1);
	sabsorb = 4;
	showgear();
	showstat();
	}
}

function be5() {
if (ygold <= 799)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze small shield.");
	ygold = (ygold * 1) - (800 * 1);
	sabsorb = 5;
	showgear();
	showstat();
	}
}

function bf6() {
if (ygold <= 1199)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron small shield.");
	ygold = (ygold * 1) - (1200 * 1);
	sabsorb = 6;
	showgear();
	showstat();
	}
}

function bg7() {
if (ygold <= 1499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze medium shield.");
	ygold = (ygold * 1) - (1500 * 1);
	sabsorb = 7;
	showgear();
	showstat();
	}
}

function bh8() {
if (ygold <= 1999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron medium shield.");
	ygold = (ygold * 1) - (2000 * 1);
	sabsorb = 8;
	showgear();
	showstat();
	}
}

function bi9() {
if (ygold <= 2499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze large shield.");
	ygold = (ygold * 1) - (2500 * 1);
	sabsorb = 10;
	showgear();
	showstat();
	}
}

function bj10() {
if (ygold <= 2999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron large shield.");
	ygold = (ygold * 1) - (3000 * 1);
	sabsorb = 12;
	showgear();
	showstat();
	}
}

function bk11() {
if (ygold <= 3499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased wood tower shield.");
	ygold = (ygold * 1) - (3500 * 1);
	sabsorb = 14;
	showgear();
	showstat();
	}
}

function bl12() {
if (ygold <= 3999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze tower shield.");
	ygold = (ygold * 1) - (4000 * 1);
	sabsorb = 16;
	showgear();
	showstat();
	}
}

function bm13() {
if (ygold <= 4499)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased iron tower shield.");
	ygold = (ygold * 1) - (4500 * 1);
	sabsorb = 18;
	showgear();
	showstat();
	}
}

function bn14() {
if (ygold <= 4999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased silver tower shield.");
	ygold = (ygold * 1) - (5000 * 1);
	sabsorb = 20;
	showgear();
	showstat();
	}
}


function bo15() {
if (ygold <= 5999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased gold tower shield.");
	ygold = (ygold * 1) - (6000 * 1);
	sabsorb = 23;
	showgear();
	showstat();
	}
}

function bp16() {
if (ygold <= 6999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased bronze warrior's shield.");
	ygold = (ygold * 1) - (7000 * 1);
	sabsorb = 26;
	showgear();
	showstat();
	}
}

function bq17() {
if (ygold <= 7999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased gold warrior's shield.");
	ygold = (ygold * 1) - (8000 * 1);
	sabsorb = 29;
	showgear();
	showstat();
	}
}

function br18() {
if (ygold <= 9999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased medium knight's shield.");
	ygold = (ygold * 1) - (10000 * 1);
	sabsorb = 32;
	showgear();
	showstat();
	}
}

function bs19() {
if (ygold <= 14999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased large knight's shield.");
	ygold = (ygold * 1) - (15000 * 1);
	sabsorb = 35;
	showgear();
	showstat();
	}
}

function bt20() {
if (ygold <= 149999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased a Godly shield.");
	ygold = (ygold * 1) - (150000 * 1);
	sabsorb = 100;
	showgear();
	showstat();
	}
}

function bu21() {
if (ygold <= 1999999)
	{
	alert("You do not have enough money.");
	}
else
	{
	alert("You have purchased OGd's shield.");
	ygold = (ygold * 1) - (1500000 * 1);
	sabsorb = 512;
	showgear();
	showstat();
	}
}



function wp1() {
document.gear.wname.value = "Short Saber";
document.gear.wstat.value = "1-4";
}


function wp2() {
document.gear.wname.value = "Long Saber";
document.gear.wstat.value = "1-6";
}


function wp3() {
document.gear.wname.value = "Bronze Mace";
document.gear.wstat.value = "2-4";
}

function wp4() {
document.gear.wname.value = "Iron Mace";
document.gear.wstat.value = "2-6";
}

function wp5() {
document.gear.wname.value = "Broad Axe";
document.gear.wstat.value = "3-5";
}

function wp6() {
document.gear.wname.value = "Battle Axe";
document.gear.wstat.value = "3-8";
}

function wp7() {
document.gear.wname.value = "Bronze Warhammer";
document.gear.wstat.value = "2-15";
}

function wp8() {
document.gear.wname.value = "Iron Warhammer";
document.gear.wstat.value = "2-20";
}

function wp9() {
document.gear.wname.value = "Morning Star";
document.gear.wstat.value = "3-30";
}

function wp10() {
document.gear.wname.value = "Knight's Blade";
document.gear.wstat.value = "5-50";
}

function wp11() {
document.gear.wname.value = "OGd's Blade";
document.gear.wstat.value = "10-100";
}

function ar1() {
document.gear.aname.value = "Clothes";
document.gear.astat.value = "+2"
}

function ar2() {
document.gear.aname.value = "Leather Armor";
document.gear.astat.value = "+4"
}

function ar3() {
document.gear.aname.value = "Studded Leather";
document.gear.astat.value = "+6"
}

function ar4() {
document.gear.aname.value = "Bronze Chain Mail";
document.gear.astat.value = "+8"
}

function ar5() {
document.gear.aname.value = "Iron Chain Mail";
document.gear.astat.value = "+10"
}

function ar6() {
document.gear.aname.value = "Bronze Half Plate";
document.gear.astat.value = "+12"
}

function ar7() {
document.gear.aname.value = "Iron Half Plate";
document.gear.astat.value = "+15"
}

function ar8() {
document.gear.aname.value = "Bronze Plate Mail";
document.gear.astat.value = "+20"
}

function ar9() {
document.gear.aname.value = "Iron Plate Mail";
document.gear.astat.value = "+25"
}

function ar10() {
document.gear.aname.value = "Knight's Armor";
document.gear.astat.value = "+35"
}

function ar11() {
document.gear.aname.value = "Godly Armor";
document.gear.astat.value = "+100"
}

function ar12() {
document.gear.aname.value = "OGd's Armor";
document.gear.astat.value = "+512"
}

function sd1() {
document.gear.sname.value = "Wood Round Shield";
document.gear.sstat.value = "+1"
}

function sd2() {
document.gear.sname.value = "Oak Round Shield";
document.gear.sstat.value = "+2"
}

function sd3() {
document.gear.sname.value = "Iron Round Shield";
document.gear.sstat.value = "+3"
}

function sd4() {
document.gear.sname.value = "Gold Round Shield";
document.gear.sstat.value = "+4"
}

function sd5() {
document.gear.sname.value = "Bronze Small Shield";
document.gear.sstat.value = "+5"
}

function sd6() {
document.gear.sname.value = "Iron Small Shield";
document.gear.sstat.value = "+6"
}

function sd7() {
document.gear.sname.value = "Bronze Medium Shield";
document.gear.sstat.value = "+7"
}

function sd8() {
document.gear.sname.value = "Iron Medium Shield";
document.gear.sstat.value = "+8"
}

function sd9() {
document.gear.sname.value = "Bronze Large Shield";
document.gear.sstat.value = "+10"
}

function sd10() {
document.gear.sname.value = "Iron Large Shield";
document.gear.sstat.value = "+12"
}

function sd11() {
document.gear.sname.value = "Wood Tower Shield";
document.gear.sstat.value = "+14"
}

function sd12() {
document.gear.sname.value = "Bronze Tower Shield";
document.gear.sstat.value = "+16"
}

function sd13() {
document.gear.sname.value = "Iron Tower Shield";
document.gear.sstat.value = "+18"
}

function sd14() {
document.gear.sname.value = "Silver Tower Shield";
document.gear.sstat.value = "+20"
}

function sd15() {
document.gear.sname.value = "Gold Tower Shield";
document.gear.sstat.value = "+23"
}

function sd16() {
document.gear.sname.value = "Bronze Warrior's Shield";
document.gear.sstat.value = "+26"
}

function sd17() {
document.gear.sname.value = "Gold Warrior's Shield";
document.gear.sstat.value = "+29"
}

function sd18() {
document.gear.sname.value = "Medium Knight's Shield";
document.gear.sstat.value = "+32"
}

function sd19() {
document.gear.sname.value = "Large Knight's Shield";
document.gear.sstat.value = "+35"
}

function sd20() {
document.gear.sname.value = "Godly Shield";
document.gear.sstat.value = "+100"
}

function sd21() {
document.gear.sname.value = "OGd's Shield";
document.gear.sstat.value = "+512"
}





//Monsters and battle system

function ysurvive() {
if ((currenthp <= 0) && (mebeogd != 1))
	{
	window.location="dead.html";
	}
}

function levelup() {
nextlevel = Math.round(nextlevel * 1.8);
ylevel = (ylevel * 1) + (1 * 1);
var up1 = Math.round(Math.random() * 5) + (sb * 1);
var up2 = Math.round(Math.random() * 5) + (ab * 1);
var up3 = Math.round(Math.random() * 5) + (eb * 1);
var up4 = Math.round(Math.random() * 5) + (mb * 1);
var up5 = Math.round(Math.random() * mag * 1) + (mpmore * 1) + (mpb * 1);
var up6 = Math.round((Math.random() * 1.25) + (end * 1.2) + (str * .25)) + (hpmore * 1) + (lb * 1);
var up7 = Math.round((evadebounus * 1) + (agi * .5));

str = (str * 1) + (up1 * 1);
agi = (agi * 1) + (up2 * 1);
end = (end * 1) + (up3 * 1);
mag = (mag * 1) + (up4 * 1);
maxhp = (maxhp * 1) + (up6 * 1);
maxmp = (maxmp * 1) + (up5 * 1);
yevade = (yevade * 1) + (up7 * 1);
if (yevade > 95) {yevade = 95};

alert("You have gained a level.");
alert("Your strength increased by "    + up1 + " to " + str    + ".");
alert("Your endurance increased by "   + up3 + " to " + agi    + ".");
alert("Your agility increased by "     + up2 + " to " + end    + ".");
alert("Your magic increased by "       + up4 + " to " + mag    + ".");
alert("Your max hp increased by "      + up6 + " to " + maxhp  + ".");
alert("Your max mp increased by "      + up5 + " to " + maxmp  + ".");
if (yevade == 95) {alert("Your evasion is capped at 95%")};
if (yevade != 95) {alert("Your evasion has increased by " + up7 + "% to " + yevade + "%.")};
showstat();
}

function callevel() {
if (yexp >= nextlevel)
	{
	levelup();
	}
}

function vboss1() {
alert("You have defeated the female mercenary.  The town's people should be safe now.");
boss = 2;
document.qu.review.value = msg2;
}

function vboss2() {
alert("You have successfully slay the dragon and Malik is now in peace.");
boss = 3;
document.qu.review.value = msg3;
}

function vboss3() {
alert("You have defeated the warlock and brought peace to the lands.")
boss = 4;
document.qu.review.value = msg4;
}

function vboss4() {
alert("You have successfully retrieved the golden fleece for the king.")
boss = 5;
document.qu.review.value = msg5;
}

function vboss5() {
alert("You have defeated the necromancer, but as you turn toward the exit, the necromancer comes back to life")
boss = 6;
fightbutton();
fboss6();
}

function vboss6() {
alert("You have defeated the reaper, but it comes back to life again.")
boss = 7;
fightbutton();
fboss7();
}

function vboss7() {
alert("You have finally defeated the necromancer.");
window.location="win.html";
}

function bossvictory() {
if (boss == 1) {vboss1()} else {
if (boss == 2) {vboss2()} else {
if (boss == 3) {vboss3()} else {
if (boss == 4) {vboss4()} else {
if (boss == 5) {vboss5()} else {
if (boss == 6) {vboss6()} else {
if (boss == 7) {vboss7()}
}}}}}};
}

function victory() {
ygold = (ygold * 1) + (wingold * 1);
alert("yexp = " + yexp);
alert("winexp = " + winexp);
alert("ylevel = " + ylevel);
alert("nextlevel = " + nextlevel);
if ((goodexp == 1) && (winexp < (nextlevel/(ylevel^2*5)))) {winexp = Math.round(nextlevel/(ylevel^2*5),0)};
yexp = (yexp * 1) + (winexp * 1);
alert("You are victorious.  You gained " + wingold + " gold and " + winexp + " experience.")
callevel();
outsidebutton();
document.monster.src = "pic/loot.gif";
if (isboss == 1) {bossvictory()};
showstat();
}

function survive() {
if (spellDamage <= 0) {spellDamage = 0};
ehp = (ehp * 1) - (spellDamage * 1);
if (ehp <= 0)
	{
	victory();
	}
else
	{
	enemyattack();
	};
}

function uitem1() {
if (h1 == 0)
	{
	alert("You don't have any heal cherries.");
	}
else
	{
	currenthp = (currenthp * 1) + (50 * 1);
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	alert("You used a heal cherry and recovered 50 hp.");
	h1 = (h1 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function uitem2() {
if (h2 == 0)
	{
	alert("You don't have any heal potions.");
	}
else
	{
	currenthp = (currenthp * 1) + (150 * 1);
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	alert("You used a heal potion and recovered 150 hp.");
	h2 = (h2 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function uitem3() {
if (h3 == 0)
	{
	alert("You don't have any elixirs.");
	}
else
	{
	currenthp = maxhp;
	currentmp = maxmp;
	showstat();
	alert("You used an elixir and recovered all hp and mp.");
	h3 = (h3 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function uitem4() {
if (h4 == 0)
	{
	alert("You don't have any healing brews.");
	}
else
	{
	currenthp = (currenthp * 1) + (300 * 1);
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	alert("You used a healing brew and recovered 300 hp.");
	h4 = (h4 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function uitem5() {
if (h5 == 0)
	{
	alert("You don't have any magic ethers.");
	}
else
	{
	currentmp = (currentmp * 1) + (40 * 1);
	if (currentmp > maxmp) {currentmp = maxmp};
	showstat();
	alert("You used a magic ether and recovered 40 mp.");
	h5 = (h5 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function uitem6() {
if (h6 == 0)
	{
	alert("You don't have any magic potions.");
	}
else
	{
	currentmp = (currentmp * 1) + (150 * 1);
	if (currentmp > maxmp) {currentmp = maxmp};
	showstat();
	alert("You used a magic potion and recovered 150 mp.");
	h6 = (h6 * 1) - (1 * 1);
	showitem();
	spellDamage = 0;
	survive();
	}
}

function fight2() {
if (document.items.rad1.checked == true) {uitem1()};
if (document.items.rad2.checked == true) {uitem2()};
if (document.items.rad3.checked == true) {uitem3()};
if (document.items.rad4.checked == true) {uitem4()};
if (document.items.rad5.checked == true) {uitem5()};
if (document.items.rad6.checked == true) {uitem6()};


}

function fight3() {
if (spellselected == 1) {cast1()};
if (spellselected == 2) {cast2()};
if (spellselected == 3) {cast3()};
if (spellselected == 4) {cast4()};
if (spellselected == 5) {cast5()};
if (spellselected == 6) {cast6()};
if (spellselected == 7) {cast7()};
if (spellselected == 8) {cast8()};
if (spellselected == 9) {cast9()};
if (spellselected == 10) {cast10()};
if (spellselected == 11) {cast11()};
if (spellselected == 12) {cast12()};
if (spellselected == 13) {cast13()};
if (spellselected == 14) {cast14()};
if (spellselected == 15) {cast15()};
if (spellselected == 16) {cast16()};
if (spellselected == 17) {cast17()};
if (spellselected == 18) {cast18()};
if (spellselected == 19) {cast19()};
}

function counter() {
var rdm45 = Math.round(Math.random() * 99);
if (rdm45 <= yevade)
	{
	alert("The enemy missed you.");
	}
else
	{
	currenthp = (currenthp * 1) - (eattack * 1);
	alert("The enemy hit you for " + eattack + " points of damage.");
	showstat();
	}
ysurvive();
}

function regularattack() {
if (attacktype == 1) {b1()};
if (attacktype == 2) {b2()};
if (attacktype == 3) {b3()};
if (attacktype == 4) {b4()};
if (attacktype == 5) {b5()};
if (attacktype == 6) {b6()};
if (attacktype == 7) {b7()};
if (attacktype == 8) {b8()};
if (attacktype == 9) {b9()};
if (attacktype == 10) {b10()};
if (attacktype == 11) {b11()};
if (attacktype == 12) {b12()};
if (attacktype == 13) {b13()};
if (attacktype == 14) {b14()};
if (attacktype == 15) {b15()};
if (attacktype == 16) {b16()};
if (attacktype == 17) {b17()};
if (attacktype == 18) {b18()};
if (attacktype == 19) {b19()};
if (attacktype == 20) {b20()};
if (attacktype == 21) {b21()};
if (attacktype == 22) {b22()};
if (attacktype == 23) {b23()};
if (attacktype == 24) {b24()};
if (attacktype == 25) {b25()};
if (attacktype == 26) {b26()};
if (attacktype == 27) {b27()};
if (attacktype == 28) {b28()};
}

function specialattack() {
if (attacktype == 1) {regularattack()};
if (attacktype == 2) {regularattack()};
if (attacktype == 3) {regularattack()};
if (attacktype == 4) {special4()};
if (attacktype == 5) {special5()};
if (attacktype == 6) {special6()};
if (attacktype == 7) {regularattack()};
if (attacktype == 8) {special8()};
if (attacktype == 9) {special9()};
if (attacktype == 10) {special10()};
if (attacktype == 11) {special11()};
if (attacktype == 12) {special12()};
if (attacktype == 13) {special13()};
if (attacktype == 14) {special14()};
if (attacktype == 15) {special15()};
if (attacktype == 16) {special16()};
if (attacktype == 17) {special17()};
if (attacktype == 18) {special18()};
if (attacktype == 19) {special19()};
if (attacktype == 20) {special20()};
if (attacktype == 21) {special21()};
if (attacktype == 22) {special22()};
if (attacktype == 23) {special23()};
if (attacktype == 24) {special24()};
if (attacktype == 25) {special25()};
if (attacktype == 26) {special26()};
if (attacktype == 27) {special27()};
if (attacktype == 28) {special28()};
}

function wakeup() {
var wakerdm = Math.round(Math.random() * 100);
if (wakerdm <= wakepower)
	{
	alert("The enemy just woke up.");
	sleep = 0;
	}
else
	{
	alert("The enemy is asleep.");
	}
}

function stopup() {
var stoprdm = Math.round(Math.random() * 100);
if (stoprdm <= stoppower)
	{
	alert("The enemy recovered from being paralyze.");
	stop = 0;
	}
else
	{
	alert("The enemy paralyze.");
	}
}

function enemyattack() {
if (sleep == 1)
	{
	wakeup();
	}
else
	{
	enemyattack2();
	}
}

function enemyattack2() {
if (stop == 1)
	{
	stopup();
	}
else
	{
	fightback();
	}
}

function fightback() {
var rdm0 = Math.round(Math.random() * 99);
if (rdm0 >= 20)
	{ 
	regularattack();
	}
else
	{
	specialattack();
	}
}

function fight1() {
if (yourweapon == 1) {attackb = Math.round(Math.random() * 4 + 1)};
if (yourweapon == 2) {attackb = Math.round(Math.random() * 6 + 1)};
if (yourweapon == 3) {attackb = Math.round(Math.random() * 4 + 2)};
if (yourweapon == 4) {attackb = Math.round(Math.random() * 6 + 2)};
if (yourweapon == 5) {attackb = Math.round(Math.random() * 5 + 3)};
if (yourweapon == 6) {attackb = Math.round(Math.random() * 8 + 3)};
if (yourweapon == 7) {attackb = Math.round(Math.random() * 15 + 2)};
if (yourweapon == 8) {attackb = Math.round(Math.random() * 20 + 2)};
if (yourweapon == 9) {attackb = Math.round(Math.random() * 30 + 2)};
if (yourweapon == 10) {attackb = Math.round(Math.random() * 50 + 5)};
if (yourweapon == 11) {attackb = Math.roung(Math.random() * 100 + 1)};

var rdm4 = Math.round(Math.random() * 99);
var renemyevade = Math.round(enemyevade * 1) - (agi * .5);
if (rdm4 <= renemyevade)
	{
	spellDamage = 0;
	alert("You missed the enemy.");
	}
else
	{
	spellDamage = Math.round(((str * .5) + (str * Math.random() * 1) + (addstr * 1) +(attackb * 1) - (earmor * 1)) * (att * 1));
	if (spellDamage <= 0) {spellDamage = 0};
	alert("You hit the enemy for " + spellDamage + " hit points.");
	};
survive();
}

function mon1() {
var rdm1 = Math.round(Math.random() * 99);
if (rdm1 <= 20) {a1()};
if (rdm1 <= 40 && rdm1 >= 21) {a2()};
if (rdm1 <= 70 && rdm1 >= 41) {a3()};
if (rdm1 >= 71) {a4()};
}

function mon2() {
var rdma = Math.round(Math.random() * 99);
if (rdma <= 20) {a4()};
if (rdma <= 40 && rdma >= 21) {a6()};
if (rdma <= 70 && rdma >= 41) {a7()};
if (rdma >= 71) {a8()};
}

function mon3() {
var rdmb = Math.round(Math.random() * 99);
if (rdmb <= 10) {a8()};
if (rdmb <= 30 && rdmb >= 11) {a10()};
if (rdmb <= 50 && rdmb >= 31) {a11()};
if (rdmb <= 70 && rdmb >= 51) {a12()};
if (rdmb >= 71) {a13()};
}

function mon4() {
var rdmc = Math.round(Math.random() * 99);
if (rdmc <= 10) {a13()};
if (rdmc <= 30 && rdmc >= 11) {a15()};
if (rdmc <= 50 && rdmc >= 31) {a16()};
if (rdmc <= 70 && rdmc >= 51) {a17()};
if (rdmc >= 71) {a18()};
}

function mon5() {
var rdml = Math.round(Math.random() * 99);
if (rdml <= 20) {a20()};
if (rdml <= 30 && rdml >= 21) {a21()};
if (rdml <= 50 && rdml >= 31) {a22()};
if (rdml <= 60 && rdml >= 51) {a23()};
if (rdml <= 80 && rdml >= 61) {a24()};
if (rdml >= 81) {a25()};
}

function cast1() {
if (currentmp >= 10)
	{
	currentmp = (currentmp * 1) - (10 * 1);
	var add = Math.round((mag * .8) + (mag * Math.random() * .5 * healb));
	currenthp = (currenthp * 1) + (add * 1);
	alert("You cast heal and recovered " + add + " hp.");
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	spellDamage = 0;
	survive();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast2() {
if (currentmp >= 8)
	{
	currentmp = (currentmp * 1) - (8 * 1);
	spellDamage = Math.round((Math.random() * 10) + (mag * .8) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast fire and inflicted " + spellDamage + " points of damage.");
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast3() {
if (currentmp >= 10)
	{
	currentmp = (currentmp * 1) - (10 * 1);
	spellDamage = Math.round((Math.random() * 10) + (mag * .9) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast ice and inflicted " + spellDamage + " points of damage.");
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast4() {
if (currentmp >= 12)
	{
	currentmp = (currentmp * 1) - (12 * 1);
	spellDamage = Math.round((Math.random() * 10) + (mag * 1) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast lightning and inflicted " + spellDamage + " points of damage.");
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast5() {
if (currentmp >= 20)
	{
	currentmp = (currentmp * 1) - (20 * 1);
	spellDamage = Math.round((Math.random() * 12) + (mag * .65) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("You cast drain and took " + spellDamage + " hp from the enemy.");
	currenthp = (currenthp * 1) + (spellDamage * 1);
	if (currenthp >= maxhp) {currenthp = maxhp};
	showstat();
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast6() {
if (currentmp >= 30)
	{
	currentmp = (currentmp * 1) - (30 * 1);
	spellDamage = Math.round((Math.random() * 30) + (mag * 1.85) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast fire storm and inflicted " + spellDamage + " points of damage.");
	survive();	
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast7() {
if (currentmp >= 35)
	{
	currentmp = (currentmp * 1) - (35 * 1);
	spellDamage = Math.round((Math.random() * 30) + (mag * 2) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast blizzard and inflicted " + spellDamage + " points of damage.");
	survive();
	showstat();	
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast8() {
if (currentmp >= 40)
	{
	currentmp = (currentmp * 1) - (40 * 1);
	spellDamage = Math.round((Math.random() * 30) + (mag * 2.15) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast shock and inflicted " + spellDamage + " points of damage.");
	survive();
	showstat();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast9() {
if (currentmp >= 25)
	{
	currentmp = (currentmp * 1) - (25 * 1);
	var add = Math.round((mag * 1.6) + (mag * Math.random() * .8 * healb));
	currenthp = (currenthp * 1) + (add * 1);
	alert("You cast heal2 and recovered " + add + " hp.");
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	spellDamage = 0;
	survive();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast10() {
if (mage == 1)
	{
	cast10a();
	}
else
	{
	alert("Only a mage may cast this spell.");
	}
showstat();
}

function cast10a() {
if (currentmp >= 80)
	{
	currentmp = (currentmp * 1) - (80 * 1);
	spellDamage = Math.round((Math.random() * 50) + (mag * 3.5) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("Your cast meteor and inflicted " + spellDamage + " points of damage.");
	survive();	
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast11() {
if (mage == 1)
	{
	cast11z();
	}
else
	{
	alert("Only a mage can cast this spell.");
	}
showstat();
}

function cast11z() {
if (currentmp >= 80)
	{
	currentmp = (currentmp * 1) - (80 * 1);
	showstat();
	cast11a();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast11a() {
if (isboss == 0)
	{
	caldeath();
	survive();
	}
else
	{
	alert("Failed.")
	spellDamage = 0;
	survive();
	}
}

function caldeath() {
var rdmd = Math.round(Math.random() * 99);
var successnumber = Math.round(mag / .33);
if (rdmd <= successnumber)
	{
	spellDamage = ehp;
	alert("Success!");
	}
else
	{
	alert("Failed.");
	spellDamage = 0;
	}
}


function cast12() {
if (currentmp >= 35)
	{
	cast12a();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast12a() {
if (def != 0)
	{
	alert("Spell is already in effect.");
	}
else
	{
	currentmp = ((currentmp * 1) - (35 * 1));
	def = Math.round((Math.random() * mag) + (mag * .10));
	alert("You cast protect and your defence increased by " + def + ".");
	showstat();
	spellDamage = 0;
	survive();
	}
}

function cast13() {
if (currentmp >= 35)
	{
	cast13a();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast13a() {
if (magdef != 0)
	{
	alert("Spell is already in effect.");
	}
else
	{
	currentmp = ((currentmp * 1) - (35 * 1));
	magdef = Math.round((Math.random() * mag) + (mag * .10));
	alert("You cast barrier and your magic defence increased by " + magdef + ".");
	showstat();
	spellDamage = 0;
	survive();
	}
}

function cast14() {
if (currentmp >= 50)
	{
	currentmp = (currentmp * 1) - (50 * 1);
	currenthp = maxhp;
	alert("You cast heal3 and recovered all hp.");
	if (currenthp > maxhp) {currenthp = maxhp};
	showstat();
	spellDamage = 0;
	survive();
	}
else
	{
	alert("You don't have enough mp.");
	}
}


//Sleep
function cast15() {
if (currentmp >= 15)
	{
	currentmp = (currentmp * 1) - (15 * 1);
	showstat();
	cast15a();
	spellDamage = 0;
	survive();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast15a() {
var sleeprdm = Math.round(Math.random() * 100);
var mpower = Math.round((20 * 1) + (Math.random() * mag));
if (sleeprdm <= mpower)
	{
	sleep = 1;
	alert("You have put the enemy to sleep.");
	}
else
	{
	alert("You cast sleep and failed.");
	}

}


//Paralyze
function cast16() {
if (currentmp >= 30)
	{
	currentmp = (currentmp * 1) - (30 * 1);
	showstat();
	cast16a();
	spellDamage = 0;
	survive();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

function cast16a() {
var stoprdm = Math.round(Math.random() * 100);
var mpower = Math.round((25 * 1) + (Math.random() * mag * 1.3));
if (stoprdm <= mpower)
	{
	stop = 1;
	alert("You have paralyzed the enemy.");
	}
else
	{
	alert("You cast paralyze and failed.");
	}

}

//Drain 2
function cast17() {
if (currentmp >= 50)
	{
	currentmp = (currentmp * 1) - (50 * 1);
	spellDamage = Math.round((mag * 1.5) + (mag * Math.random() * 1.8) - (marmor * 1));
	if (spellDamage <= 0) {spellDamage = 1};
	alert("You cast drain2 and took " + spellDamage + " hp from the enemy.");
	currenthp = (currenthp * 1) + (spellDamage * 1);
	if (currenthp >= maxhp) {currenthp = maxhp};
	showstat();
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}

//Analyze
function cast18() {
if (currentmp >= 5)
	{
	currentmp = (currentmp * 1) - (5 * 1);
	spellDamage = 0;
	alert("You have analyze the enemy.");
	alert("HP  " + ehp + " / " + mhp);
	alert("Physical Defense  " + earmor);
	alert("Magic Defense  " + marmor);
	alert("Evade  " + enemyevade + "%");
	alert("Alertness  " + wakepower + "%");
	alert("Constitution  " + stoppower + "%");
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}


//Attack Up

function cast19() {
if (addstr == 0)
	{
	cast19a();
	}
else
	{
	alert("Spell is already in effect.");
	}
}

function cast19a() {
if (currentmp >= 40)
	{
	currentmp = (currentmp * 1) - (40 * 1);
	addstr = Math.round((Math.random() * 10) + (mag * .7));
	spellDamage = 0;
	alert("Your attack power is increased by " + addstr + ".");
	survive();
	showstat();
	}
else
	{
	alert("You don't have enough mp.");
	}
}




















//Enemy and Stats


//Wild Man

function a1() {
document.monster.src = "monster/a1.gif";
alert("You have encountered a wild man.");
ehp = 60;
enemyevade = 20;
earmor = 1;
marmor = 0;
wingold = 50;
winexp = 25;
attacktype = 1;
isboss = 0;
wakepower = 33;
stoppower = 5;
}

function b1() {
eattack = Math.round(((Math.random() * 7) + (7 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}


//Squire

function a2() {
document.monster.src = "monster/a2.gif";
ehp = 60;
alert("You have encountered a squire.");
enemyevade = 10;
earmor = 0;
marmor = 0;
wingold = 60;
winexp = 30;
attacktype = 2;
isboss = 0;
wakepower = 24;
stoppower = 6;
}

function b2() {
eattack = Math.round(((Math.random() * 10)  + (8 * 1)- (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}


//Amazon

function a3() {
document.monster.src = "monster/a3.gif";
alert("You have encountered an amazon.");
ehp = 50;
enemyevade = 35;
earmor = 0;
marmor = 1;
wingold = 60;
winexp = 20;
attacktype = 3;
isboss = 0;
wakepower = 20;
stoppower = 8;
}

function b3() {
eattack = Math.round(((Math.random() * 8) + (6 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (Math.random() * stance));
if (eattack <= 0) {eattack = 1};
counter();
}


//Novice Knight

function a4() {
document.monster.src = "monster/a4.gif";
alert("You have encountered a novice knight.");
ehp = 80;
enemyevade = 5;
earmor = 5;
marmor = 1;
wingold = 100;
winexp = 55;
attacktype = 4;
isboss = 0;
wakepower = 40;
stoppower = 15;
}


function b4() {
eattack = Math.round(((Math.random() * 5) + (12 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special4() {
eattack = Math.round(((Math.random() * 20) + (20 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("Novice knight charges at you and inflicts " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Female Mercenary: (Boss1)

function fboss1() {
alert("You have encountered a female mercenary.");
document.monster.src = "monster/boss1.gif";
ehp = 350;
enemyevade = 30;
earmor = 6;
marmor = 3;
wingold = 800;
winexp = 400;
attacktype = 5;
isboss = 1;
wakepower = 75;
stoppower = 42;
}

function b5() {
eattack = Math.round(((Math.random() * 20) + (20 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special5() {
eattack = Math.round(((Math.random() * 20) + (40 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("Female mercenary trust her spear at you and caused " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Female Barbarian

function a6() {
document.monster.src = "monster/a6.gif";
alert("You have encountered a female barbarian.");
ehp = 100;
enemyevade = 5;
earmor = 1;
marmor = 0;
wingold = 150;
winexp = 55;
attacktype = 6;
isboss = 0;
wakepower = 48;
stoppower = 30;
}


function b6() {
eattack = Math.round(((Math.random() * 10) + (25 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special6() {
eattack = Math.round(((Math.random() * 20) + (40 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 0};
alert("The female barbarian lunges at you and inflicts " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Lizard

function a7() {
document.monster.src = "monster/a7.gif";
alert("You have encountered a lizard.");
ehp = 90;
enemyevade = 30;
earmor = 2;
marmor = 2;
wingold = 140;
winexp = 85;
attacktype = 7;
isboss = 0;
wakepower = 44;
stoppower = 22;
}


function b7() {
eattack = Math.round(((Math.random() * 15) + (30 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}


//Lesser Dragon

function a8() {
document.monster.src = "monster/a8.gif";
alert("You have encountered a lesser dragon.");
ehp = 200;
enemyevade = 10;
earmor = 8;
marmor = 2;
wingold = 350;
winexp = 120;
attacktype = 8;
isboss = 0;
wakepower = 20;
stoppower = 12;
}


function b8() {
eattack = Math.round(((Math.random() * 20) + (40 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special8() {
eattack = Math.round((Math.random() * 10) + (50 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("The lesser dragon breath fire on you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}

//Red Dragon: (Boss2)

function fboss2() {
alert("You have encountered a red dragon.");
document.monster.src = "monster/boss2.gif";
ehp = 800;
enemyevade = 20;
earmor = 9;
marmor = 5;
wingold = 2000;
winexp = 1200;
attacktype = 9;
isboss = 1;
wakepower = 70;
stoppower = 55;
}

function b9() {
eattack = Math.round(((Math.random() * 15) + (55 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special9() {
eattack = Math.round((Math.random() * 25) + (55 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("Red dragon breath fire causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}



//Winged Warrior

function a10() {
document.monster.src = "monster/a10.gif";
alert("You have encountered a winged warrior.");
ehp = 150;
enemyevade = 50;
earmor = 2;
marmor = 2;
wingold = 300;
winexp = 240;
attacktype = 10;
isboss = 0;
wakepower = 38;
stoppower = 25;
}

function b10() {
eattack = Math.round(((Math.random() * 18) + (54 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special10() {
eattack = Math.round(((Math.random() * 28) + (54 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The winged warrior dives toward you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Red Gargoyle

function a11() {
document.monster.src = "monster/a11.gif";
alert("You have encountered a red gargoyle.");
ehp = 160;
enemyevade = 35;
earmor = 3;
marmor = 2;
wingold = 400;
winexp = 280;
attacktype = 11;
isboss = 0;
wakepower = 36;
stoppower = 32;
}


function b11() {
eattack = Math.round(((Math.random() * 35) + (65 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special11() {
alert("The red gargoyle flees.");
outsidebutton();
document.monster.src = "pic/outside.gif";
}


//Werewolf

function a12() {
document.monster.src = "monster/a12.gif";
alert("You have encountered a werewolf.");
ehp = 250;
enemyevade = 20;
earmor = 4;
marmor = 5;
wingold = 500;
winexp = 320;
attacktype = 12;
isboss = 0;
wakepower = 62;
stoppower = 30;
}

function b12() {
eattack = Math.round(((Math.random() * 25) + (84 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special12() {
eattack = Math.round(((Math.random() * 20) + (125 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The werewolf bites you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}



//Apprentice Mage

function a13() {
document.monster.src = "monster/a13.gif";
alert("You have encountered an apprentice mage.");
ehp = 200;
enemyevade = 20;
earmor = 2;
marmor = 8;
wingold = 600;
winexp = 420;
attacktype = 13;
isboss = 0;
wakepower = 50;
stoppower = 45;
}

function b13() {
var morespell = Math.round(Math.random() * 99);
if (morespell >= 40)
	{
	eattack = Math.round(((Math.random() * 20) + (64 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	counter();
	}
else
	{
	special13();
	}
}

function special13() {
if (ehp >= 60)
	{
	eattack = Math.round((Math.random() * 25) + (88 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The apprentice mage cast fire on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
else
	{
	var hself = Math.round((Math.random() * 80) + (40 * 1));
	ehp = (hself * 1) + (ehp * 1);
	if (ehp > 150) {ehp = 150};
	alert("The apprentice mage cast heal on himself and recovered " + hself + " hit points.");
	}
}




//Warlock: (Boss3)

function fboss3() {
alert("You have encountered a warlock.");
document.monster.src = "monster/boss3.gif";
ehp = 1200;
enemyevade = 20;
earmor = 4;
marmor = 15;
wingold = 3000;
winexp = 1400;
attacktype = 14;
isboss = 1;
wakepower = 78;
stoppower = 75;
}

function b14() {
var morespell = Math.round(Math.random() * 99);
if (morespell >= 75)
	{
	eattack = Math.round(((Math.random() * 20) + (75 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	counter();
	}
else
	{
	special14();
	}
}

function special14() {
if (ehp >= 200)
	{
	eattack = Math.round((Math.random() * 30) + (100 * 1) - (mag * .25) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The warlock cast fire storm on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
else
	{
	sp14x();
	}
}

function sp14x() {
var rdmwarlock = Math.round(Math.random() * 99);
if (rdmwarlock <= 40) 
	{
	eattack = Math.round((Math.random() * 30) + (100 * 1) - (mag * .25) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The warlock cast fire storm on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	};
if (rdmwarlock <= 80 && rdmwarlock >= 41)
	{
	eattack = Math.round((Math.random() * 32) + (80 * 1) - (mag * .25) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The warlock cast drain and took " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	};
if (rdmwarlock >= 81)
	{
	var hself = Math.round((Math.random() * 20) + (85 * 1));
	ehp = (hself * 1) + (ehp * 1);
	alert("Warlock cast heal on himself and recovered " + hself + " hit points.");
	};	
}



//Archer

function a15() {
document.monster.src = "monster/a15.gif";
alert("You have encountered an archer.");
ehp = 250;
enemyevade = 20;
earmor = 5;
marmor = 6;
wingold = 600;
winexp = 600;
attacktype = 15;
isboss = 0;
wakepower = 55;
stoppower = 20;
}

function b15() {
eattack = Math.round(((Math.random() * 23) + (84 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special15() {
eattack = Math.round(((Math.random() * 55) + (88 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The archer shoots a flaming arrow causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Blue Dragon

function a16() {
document.monster.src = "monster/a16.gif";
alert("You have encountered a blue dragon.");
ehp = 350;
enemyevade = 5;
earmor = 15;
marmor = 12;
wingold = 600;
winexp = 750;
attacktype = 16;
isboss = 0;
wakepower = 58;
stoppower = 35;
}

function b16() {
eattack = Math.round(((Math.random() * 20) + (88 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special16() {
eattack = Math.round((Math.random() * 50) + (88 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("The blue dragon breath ice causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}



//Long Swordmen

function a17() {
document.monster.src = "monster/a17.gif";
alert("You have encountered a long swordmen.");
ehp = 300;
enemyevade = 12;
earmor = 10;
marmor = 2;
wingold = 580;
winexp = 600;
attacktype = 17;
isboss = 0;
wakepower = 50;
stoppower = 33;
}

function b17() {
eattack = Math.round(((Math.random() * 20) + (84 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special17() {
eattack = Math.round(((Math.random() * 45) + (84 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The long swordmen trust at you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}



//Pegasus

function a18() {
document.monster.src = "monster/a18.gif";
alert("You have encountered a pegasus.");
ehp = 300;
enemyevade = 65;
earmor = 8;
marmor = 14;
wingold = 850;
winexp = 730;
attacktype = 18;
isboss = 0;
wakepower = 60;
stoppower = 50;
}

function b18() {
eattack = Math.round(((Math.random() * 20) + (80 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special18() {
eattack = Math.round(((Math.random() * 30) + (85 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The pegasus charges at you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Minotaur: (Boss4)

function fboss4() {
alert("You have encountered a minotaur.");
document.monster.src = "monster/boss4.gif";
ehp = 2000;
enemyevade = 5;
earmor = 20;
marmor = 7;
wingold = 5000;
winexp = 8000;
attacktype = 19;
isboss = 1;
wakepower = 95;
stoppower = 45;
}

function b19() {
eattack = Math.round(((Math.random() * 20) + (110 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special19() {
eattack = Math.round(((Math.random() * 50) + (160 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("Minotaur charges at you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Dark Knight

function a20() {
document.monster.src = "monster/a20.gif";
alert("You have encountered a dark knight.");
ehp = 480;
enemyevade = 40;
earmor = 15;
marmor = 22;
wingold = 800;
winexp = 2900;
attacktype = 20;
isboss = 0;
wakepower = 60;
stoppower = 55;
}

function b20() {
eattack = Math.round(((Math.random() * 50) + (110 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1) * (1 * stance)));
if (eattack <= 0) {eattack = 1};
counter();
}

function special20() {
eattack = Math.round((Math.random() * 50) + (80 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("The dark knight cast drain and took " + eattack + " hit points from you.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
ehp = (ehp * 1) + (eattack * 1);
if (ehp > 400) {ehp = 400};
}



//Squad Leader

function a21() {
document.monster.src = "monster/a21.gif";
alert("You have encountered a squad leader.");
ehp = 550;
enemyevade = 20;
earmor = 20;
marmor = 4;
wingold = 1000;
winexp = 3125;
attacktype = 21;
isboss = 0;
wakepower = 75;
stoppower = 35;
}

function b21() {
eattack = Math.round(((Math.random() * 20) + (120 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special21() {
eattack = Math.round(((Math.random() * 40) + (140 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
alert("The squad leader charges at you causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Paladin

function a22() {
document.monster.src = "monster/a22.gif";
alert("You have encountered a paladin.");
ehp = 660;
enemyevade = 15;
earmor = 25;
marmor = 18;
wingold = 1200;
winexp = 2350;
attacktype = 22;
isboss = 0;
wakepower = 78;
stoppower = 55;
}

function b22() {
if (ehp >= 200)
	{
	eattack = Math.round(((Math.random() * 40) + (90 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	counter();
	}
else
	{
	special22b();
	}
}

function special22() {
if (ehp >= 200)
	{
	eattack = Math.round(((Math.random() * 40) + (110 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	alert("The paladin charges at you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
else
	{
	special22b();		
	}
}

function special22b() {
var rdms = Math.round(Math.random() * 99);
if (rdms >= 50)
	{
	var hself = Math.round((Math.random() * 80) + (80 * 1));
	ehp = (ehp * 1) + (hself * 1);
	alert("The paladin cast heal and recovered " + hself + " hit points.");
	}
else
	{
	eattack = Math.round(((Math.random() * 35) + (135 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	alert("The paladin charges at you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();	
	}
}


//Heavy Calvary

function a23() {
document.monster.src = "monster/a23.gif";
alert("You have encountered a heavy calvary.");
ehp = 680;
enemyevade = 10;
earmor = 25;
marmor = 9;
wingold = 1500;
winexp = 2680;
attacktype = 23;
isboss = 0;
wakepower = 88;
stoppower = 64;
}

function b23() {
eattack = Math.round(((Math.random() * 35) + (110 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special23() {
if (ehp >= 200)
	{
	eattack = Math.round(((Math.random() * 45) + (120 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	alert("The heavy calvary charges at you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
else
	{
	eattack = Math.round((Math.random() * 40) + (75 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The heavy calvary drained " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	if (ehp > 600) {ehp = 600};
	}
}


//Red Mage

function a24() {
document.monster.src = "monster/a24.gif";
alert("You have encountered a red mage.");
ehp = 480;
enemyevade = 40;
earmor = 10;
marmor = 27;
wingold = 1500;
winexp = 4200;
attacktype = 24;
isboss = 0;
wakepower = 75;
stoppower = 70;
}

function b24() {
eattack = Math.round(((Math.random() * 40) + (96 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special24() {
eattack = Math.round((Math.random() * 100) + (180 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("The red mage cast meteor on you causing " + eattack + " hit points from you.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}


//Fire Dragon

function a25() {
document.monster.src = "monster/a25.gif";
alert("You have encountered a fire dragon.");
ehp = 820;
enemyevade = 15;
earmor = 18;
marmor = 18;
wingold = 1350;
winexp = 1960;
attacktype = 25;
isboss = 0;
wakepower = 75;
stoppower = 45;
}

function b25() {
eattack = Math.round(((Math.random() * 60) + (145 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special25() {
eattack = Math.round((Math.random() * 60) + (175 * 1) - (mag * .75) - (magdef * 1));
if (eattack <= 0) {eattack = 1};
alert("The fire dragon breath fire causing " + eattack + " points of damage.");
currenthp = (currenthp * 1) - (eattack * 1);
showstat();
ysurvive();
}










//Final Boss

//Stage1 Necromancer: (Final Boss1)

function fboss5() {
alert("You have encountered a necromancer.");
document.monster.src = "monster/bossf1.gif";
ehp = 1500;
mhp = 1500;
enemyevade = 8;
earmor = 6;
marmor = 55;
wingold = 12;
winexp = 3;
attacktype = 26;
isboss = 1;
wakepower = 90;
stoppower = 89;
}

function b26() {
var morespell0 = Math.round(Math.random() * 99);
if (morespell0 >= 65)
	{
	eattack = Math.round(((Math.random() * 20) + (100 * 1) - (absorb * 1) - (end * .25) - 	(sabsorb * suse) - (def * 1)) * (1 * stance));
	if (eattack <= 0) {eattack = 1};
	counter()
	}
else
	{
	special26();
	}
}

function special26() {
if (ehp >= 400)
	{
	eattack = Math.round((Math.random() * 45) + (100 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The necromancer cast blizzard on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
else
	{
	sp26x();
	}
}

function sp26x() {
var rdmwarlock0 = Math.round(Math.random() * 99);
if (rdmwarlock0 <= 60) 
	{
	eattack = Math.round((Math.random() * 45) + (100 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The necromacer cast blizzard on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	};
if (rdmwarlock0 <= 90 && rdmwarlock0 >= 61)
	{
	eattack = Math.round((Math.random() * 30) + (75 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The warlock cast drain on you and took " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	if (ehp > 500) {ehp = 500};
	};
if (rdmwarlock0 >= 91)
	{
	eattack = Math.round((Math.random() * 30) + (120 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The warlock cast drain2 on you and took " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	if (ehp > 500) {ehp = 500};
	};	
}

//Stage2 Reaper

function fboss6() {
document.monster.src = "monster/bossf2.gif";
alert("You have encountered a reaper.");
ehp = 2500;
mhp = 4000;
enemyevade = 50;
earmor = 0;
marmor = 90;
wingold = 15;
winexp = 4;
attacktype = 27;
isboss = 1;
wakepower = 80;
stoppower = 75;
}

function b27() {
eattack = Math.round(((Math.random() * 45) + (140 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special27() {
if (ehp <= 300)
	{
	eattack = Math.round((Math.random() * 50) + (120 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The reaper cast drain2 on you and took " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	if (ehp > 1200) {ehp = 1200};
	}
else
	{
	eattack = Math.round((Math.random() * 50) + (150 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The reaper cast blizzard on you causing " + eattack + " points of damage.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
	}
}


//Stage3 Dark Serpent

function fboss7() {
document.monster.src = "monster/bossf3.gif";
alert("You have encountered dark serpent.");
ehp = 6000;
mhp = 1000;
enemyevade = 25;
earmor = 30;
marmor = 45;
wingold = 15;
winexp = 2;
attacktype = 28;
isboss = 1;
wakepower = 95;
stoppower = 92;
}

function b28() {
eattack = Math.round(((Math.random() * 80) + (180 * 1) - (absorb * 1) - (end * .25) - (sabsorb * suse) - (def * 1)) * (1 * stance));
if (eattack <= 0) {eattack = 1};
counter();
}

function special28() {
	eattack = Math.round((Math.random() * 75) + (200 * 1) - (mag * .75) - (magdef * 1));
	if (eattack <= 0) {eattack = 1};
	alert("The dark serpent cast dark matter causing " + eattack + " hit points from you.");
	currenthp = (currenthp * 1) - (eattack * 1);
	showstat();
	ysurvive();
}
