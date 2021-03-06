/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 250.062155,
        y: 178.704785
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "m" }, this.whenKeyMPressed)
    ];

    this.vars.fov = 120;
    this.vars.res = 1;
    this.vars.cameraDir = -43.38000000000335;
    this.vars.dv = 138.56406460302037;
    this.vars.drawIdx = 110;
    this.vars.mapGhost = 0;
    this.vars.health = 90;
    this.vars.stars = 4;
    this.vars.delta = 32.070000000000164;
    this.vars.fps = 1;
    this.vars.milk = 4;
    this.vars.framesMissed = 8171;
    this.vars.drawX = [
      0,
      -13.604712802324856,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      -101,
      -100,
      -99,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      8.79272590230203,
      52,
      51,
      50,
      49,
      48,
      47,
      46,
      45,
      44,
      43,
      42,
      -102,
      41,
      -103,
      -104,
      -105,
      -106,
      -107,
      -108,
      -109,
      -110,
      -111,
      -112,
      -113,
      -114,
      -115,
      -116,
      -117,
      -118,
      -119,
      -120,
      -121,
      -122,
      -123,
      -124,
      -125,
      -126,
      -127,
      -128,
      -129,
      -130,
      -131,
      -132,
      -133,
      -134,
      -135,
      -136,
      -137,
      -138,
      -139,
      -140,
      -141,
      -142,
      -143,
      -144,
      -145,
      -146,
      -147,
      -148,
      -149,
      -150,
      -151,
      -152,
      -153,
      -154,
      -155,
      -156,
      -157,
      -158,
      -159,
      -160,
      -161,
      -162,
      74.6025839531985,
      -163,
      -164,
      -165,
      -166,
      -167,
      -170,
      -168,
      -171,
      -169,
      -172,
      83,
      -173,
      84,
      -174,
      85,
      -175,
      86,
      -176,
      87,
      -177,
      88,
      -178,
      89,
      -179,
      90,
      -180,
      -181,
      -182,
      -183,
      91,
      -184,
      92,
      -185,
      93,
      -186,
      94,
      -187,
      95,
      -188,
      96,
      -189,
      97,
      -190,
      98,
      -191,
      99,
      -192,
      100,
      -193,
      101,
      -194,
      102,
      -195,
      103,
      -198,
      -196,
      104,
      -199,
      -197,
      105,
      -200,
      106,
      -201,
      107,
      -202,
      -203,
      -204,
      -205,
      -206,
      108,
      -207,
      109,
      -208,
      110,
      -209,
      111,
      -210,
      112,
      -211,
      113,
      -212,
      114,
      -213,
      115,
      -214,
      116,
      -215,
      117,
      -216,
      118,
      -217,
      -220,
      119,
      -218,
      -221,
      -219,
      -222,
      -223,
      -224,
      -225,
      -226,
      -227,
      -228,
      -229,
      -7,
      -8,
      -230,
      -4,
      -5,
      -6,
      -9,
      -10,
      -231,
      -232,
      -2,
      -3,
      -11,
      -12,
      -13,
      -233,
      0,
      -1,
      -14,
      -15,
      -234,
      1,
      2,
      3,
      -235,
      -16,
      40,
      -17,
      -18,
      -236,
      4,
      5,
      38,
      39,
      -237,
      -19,
      -20,
      -21,
      37,
      6,
      7,
      8,
      -238,
      -239,
      -22,
      -23,
      -24,
      36,
      -25,
      9,
      10,
      11,
      34,
      35,
      -26,
      -27,
      -28,
      12,
      13,
      14,
      33,
      -29,
      -30,
      15,
      -31,
      31,
      16,
      17,
      -32,
      32,
      18,
      30,
      -33,
      19,
      20,
      -34,
      21,
      -35,
      -36,
      28,
      29,
      22,
      23,
      24,
      -37,
      25,
      26,
      -38,
      27,
      -39,
      -40,
      -41,
      -42,
      -43,
      -44,
      -45,
      -46,
      -47,
      212,
      209,
      -48,
      213,
      -49,
      210,
      214,
      -50,
      211,
      -51,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      -52,
      222,
      -53,
      -54,
      223,
      -55,
      -98,
      224,
      -56,
      225,
      -57,
      -58,
      226,
      227,
      228,
      -97,
      229,
      233,
      230,
      234,
      231,
      235,
      232,
      236,
      -96,
      -59,
      237,
      -60,
      238,
      -61,
      239,
      -62,
      -63,
      240,
      -64,
      -65,
      -66,
      -95,
      -37.29768652592835,
      -67,
      -68,
      -69,
      -94,
      -70,
      -71,
      -72,
      -73,
      -74,
      -93,
      -75,
      -76,
      -92,
      -77,
      -78,
      -91,
      -79,
      -80,
      -81,
      -82,
      -83,
      -90,
      -84,
      -85,
      -86,
      -87,
      -88,
      -89,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      179,
      171,
      180,
      172,
      181,
      173,
      182,
      174,
      183,
      175,
      184,
      176,
      185,
      177,
      186,
      178,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208
    ];
    this.vars.drawDist = [
      999999,
      395.93312847262087,
      306.354527404,
      304.68079236479997,
      303.0032798987999,
      301.32230076000013,
      300.5629712475001,
      298.8736166808,
      297.181682667,
      295.487465231,
      294.7064937404,
      293.0061348012001,
      291.304335232,
      290.50921568,
      288.80286525639997,
      287.9986981245,
      286.28880805080007,
      284.57879517029994,
      283.76407160000014,
      282.05199486399994,
      281.23050789719997,
      279.51730046100005,
      278.68991078250014,
      252.93789552119992,
      222.99333487749968,
      218.06146311440028,
      177.30022674029993,
      176.76734671589998,
      176.23218624599997,
      174.82076118,
      174.28408038000003,
      173.7454823199999,
      172.33905535620013,
      171.79967264210003,
      171.25871629570003,
      153.25822291312087,
      112.34924157599998,
      110.737423379,
      109.11356279200008,
      108.42053008149998,
      106.7749636224999,
      105.1175916189001,
      104.39758292699996,
      102.71893793759995,
      101.98187485939988,
      100.28227536599998,
      99.52836692240007,
      99.05594100510004,
      98.76707502299998,
      98.71474370369997,
      98.37377049599998,
      98.03306273459997,
      97.69266072660001,
      97.35260369670002,
      97.01292982410001,
      96.67367627939997,
      95.55166877559995,
      95.21611370480004,
      94.88108006200002,
      94.54660075059998,
      94.21270768579997,
      93.87943185559999,
      93.54680330860002,
      93.21485119060002,
      92.88360374460004,
      92.55308832299997,
      92.22333141199998,
      91.8943586438,
      91.56619480879999,
      91.23886386780002,
      90.91238898859999,
      90.58679250940001,
      90.26209603640001,
      89.93832035839998,
      88.88093239629997,
      88.56169611190002,
      88.2434306105,
      87.92615366699998,
      87.6098823182,
      87.29463299589999,
      86.98042143010002,
      86.66726273369999,
      86.3551713541,
      86.04416117000001,
      85.73424544300002,
      85.42543682970002,
      85.1177474301,
      84.8111887876,
      84.50577190109999,
      84.20150722500003,
      83.8984046813,
      83.59647370799998,
      83.29572323490002,
      82.9961617199,
      82.6977971369,
      82.40063700000002,
      82.10468838770001,
      81.8099579308,
      81.51645184870003,
      81.22417591310003,
      80.93313554480001,
      80.6433357411,
      80.35478112420002,
      80.06747592909998,
      79.7814240762,
      79.49662907449998,
      79.21309415469999,
      78.9308221724,
      78.64981566859998,
      78.48762152962087,
      78.37007688179999,
      78.09160774799999,
      77.81440991279997,
      77.5384847314,
      77.26383325649998,
      77.07932571959999,
      76.99045632300002,
      76.80754695400002,
      76.71835445120001,
      76.53705395859998,
      76.35050336270004,
      76.26784633080003,
      76.10730421439996,
      75.99992341180001,
      75.86354328029996,
      75.73328433540001,
      75.6192662263,
      75.46792804020002,
      75.37451785499998,
      75.20385325739998,
      75.12934215020005,
      74.94105851079998,
      74.88378223240002,
      74.67954215339999,
      74.63788037660004,
      74.41930231859999,
      74.16033701779999,
      73.90264403059997,
      73.64622102680002,
      73.5558164528,
      73.39106548100001,
      73.31212340320005,
      73.13717472140003,
      73.06821263280001,
      72.88454594199999,
      72.82412259760004,
      72.6331761904,
      72.57989092640001,
      72.3830623434,
      72.33555441200006,
      72.13420120459999,
      72.09114903759992,
      71.8865894068,
      71.84670994160004,
      71.6402234608,
      71.60227147039991,
      71.39509979199998,
      71.35786716080011,
      71.15121467939998,
      71.11352973120003,
      70.9085643044,
      70.86929112559986,
      70.6671447508,
      70.62518248720009,
      70.5235928751,
      70.42695199259997,
      70.38123417600006,
      70.2851166252,
      70.1879819306,
      70.13747577759996,
      70.04786008020001,
      69.89393612960006,
      69.8118187629,
      69.65064329519996,
      69.5769880731,
      69.34336337369999,
      69.11093994149998,
      68.87971300409998,
      68.64967769069996,
      68.61890158289985,
      68.4208290936,
      68.37894175860012,
      68.1931622436,
      68.1393047826002,
      67.96667212230003,
      67.90001551080006,
      67.74135366210001,
      67.66109807700013,
      67.5172017093,
      67.42257594509984,
      67.2942111225,
      67.18447187430007,
      67.0723766742,
      66.94680796260019,
      66.85169309999999,
      66.70960563810011,
      66.63215512320001,
      66.47288568510015,
      66.4137573933,
      66.23666824410006,
      66.19649457210001,
      66.08440003999999,
      66.00097282050022,
      65.9803612353,
      65.86989263840003,
      65.76535197090001,
      65.6565018816,
      65.44422220200002,
      65.23304801959998,
      65.0229737172,
      64.81399367760002,
      64.60610227120004,
      64.39929385600003,
      64.19356276520003,
      63.91848931840001,
      63.893599263999945,
      63.47286378900002,
      62.973766396799974,
      62.959024384200006,
      62.94102042690001,
      62.86752837540002,
      62.836575599699984,
      62.75651456879994,
      62.044483772699984,
      61.993542675200004,
      61.98547385880002,
      61.80555399419997,
      61.76879969360003,
      61.728923637200026,
      61.33674024000001,
      61.00000000000005,
      60.99841152340003,
      60.69100953859998,
      60.64568916160002,
      60.63325298169999,
      59.99843756399999,
      59.99375097599996,
      59.98594244400002,
      59.93399122820001,
      59.60395606800003,
      59.56767321359995,
      59.55347210400003,
      59.50006843800002,
      59.2389243693,
      58.975432022399936,
      58.961626010599986,
      58.827924200000005,
      58.71851910179997,
      58.54802195519998,
      58.45303956779995,
      58.39485579740003,
      58.333875202800016,
      57.96892886400008,
      57.945701345400025,
      57.92613094480002,
      57.90357433300001,
      57.861253766500006,
      57.68015630900003,
      57.28249550819998,
      57.21713021580002,
      57.14909813560001,
      57.104202382999894,
      57.07842881859999,
      56.88014472059998,
      56.8521398283,
      56.821235123700006,
      56.329044806599995,
      56.23381856220001,
      56.022305305499984,
      55.947761703000005,
      55.870718895600014,
      55.791173916800005,
      55.75515683360002,
      55.7163366256,
      55.449182668799956,
      54.81241627680003,
      54.731911068800045,
      54.68053940800007,
      54.64904872000001,
      54.64904871999996,
      54.636959729000004,
      54.59068276200001,
      54.5638634072,
      54.563863407199975,
      54.541729401500035,
      53.754555513999904,
      53.50359731200001,
      53.49939214680001,
      53.44613920439997,
      53.41547352350005,
      53.39032645680003,
      53.32517277449998,
      53.2327310349999,
      52.93015474319997,
      52.85482998120006,
      52.344349343699996,
      52.28461899029994,
      52.222451744600036,
      52.17203597759999,
      52.157874610100045,
      52.090915459499996,
      52.07717880000001,
      52.02160298699999,
      51.98032838519997,
      51.88152183119999,
      50.82189297300002,
      50.72118698930001,
      50.618672327599995,
      50.51438661260003,
      50.40836769159994,
      50.300653592100005,
      49.2442771548,
      49.23966667500007,
      49.17913673889995,
      49.13538148999996,
      49.077348786000016,
      49.02493534119999,
      49.01610143030008,
      48.915873,
      48.91297642400003,
      48.85391017990004,
      48.79954250599999,
      48.75523545600002,
      48.595432238999926,
      48.43645944300008,
      48.278313099000016,
      48.12098924700004,
      47.964483900000005,
      47.80879304400005,
      47.74842766979996,
      47.65391265599993,
      47.63439298049999,
      47.51902266239996,
      47.49983869499996,
      47.40235360379998,
      47.353513370599984,
      47.34656711099995,
      47.2844225808,
      47.19409382699995,
      47.165266257300026,
      47.04492114420002,
      47.04241476599997,
      46.89152584199987,
      46.74142296,
      46.69540335390002,
      46.592102006999966,
      46.51369468200002,
      46.44355886999997,
      46.36660522130003,
      46.29578943600005,
      46.22028137090001,
      46.14878958299996,
      46.07471895389995,
      46.03171644400001,
      46.00335644999999,
      45.929913775200035,
      45.88314677499998,
      45.785861676099984,
      45.76187791000003,
      45.64255847059996,
      45.63958486,
      45.51630238000002,
      45.50000000000003,
      45.39206494999998,
      45.26690677999999,
      45.140861775,
      44.53766034120001,
      44.414466212620866,
      44.11368425940002,
      43.98852038909999,
      43.86258520000002,
      43.859982928099996,
      43.735910596000004,
      43.60852812329999,
      43.48046896059998,
      43.35176389949999,
      43.222443334700024,
      43.17667110119999,
      43.092537259100006,
      42.96207525399997,
      42.48770788139999,
      41.95698268319996,
      41.82817929120003,
      41.793077529999984,
      41.69891575679999,
      41.56921938239999,
      41.4391170192,
      41.308635086399995,
      41.1777995664,
      41.092765600599996,
      41.04663598079998,
      40.91516940960001,
      40.7834244816,
      40.65142536,
      40.5191957664,
      40.386758956800016,
      26.457513109999997,
      26.36313567649999,
      26.268990314,
      26.175083896499995,
      26.081423070499994,
      25.98801424449998,
      25.89486361699999,
      25.80197715200001,
      25.7093606105,
      25.61701953650002,
      25.524959267499973,
      25.433184945000008,
      25.341701496999995,
      25.250513676499992,
      25.15962603350002,
      25.06904293949999,
      24.978768573499995,
      24.88880695000001,
      24.79916190499997,
      24.709837099500024,
      24.620836033500016,
      24.53216204600001,
      24.443818318499975,
      24.35580787499999,
      24.268133585500003,
      24.180798179999986,
      24.093804241500013,
      24.0071542165,
      23.920850411500002,
      23.83489499999999,
      23.749290029500006,
      23.66403741799999,
      23.57913896450001,
      23.494596338499996,
      23.410411107999984,
      23.326584718500012,
      23.243118506999988,
      23.16001369850002,
      23.077271427000024,
      22.9948927075,
      22.912878474499987,
      22.831229554,
      22.749946681000004,
      22.669030502999973,
      22.58848158,
      22.508300387999995,
      22.428487319,
      22.34904267749999,
      22.26996670499999,
      22.19125955199999,
      22.112921313000015,
      22.036586209200003,
      22.034951995,
      21.95979412680001,
      21.957351545499986,
      21.883378136400026,
      21.880119848999975,
      21.807337582800013,
      21.8032567165,
      21.731671778400003,
      21.72676189949998,
      21.65637997799999,
      21.65063509350001,
      21.5814613932,
      21.5748759345,
      21.506915196000005,
      21.49948399900001,
      21.432740515199995,
      21.358936429200007,
      21.285501994800015,
      21.212436218399993,
      21.139738070399993,
      21.06740649600001,
      20.99544039719999,
      20.923838647200018,
      20.852600090400003,
      20.781723538799998,
      20.711207782800017,
      20.641051573199984,
      20.571253646400006,
      20.501812706400003,
      20.43272744279999,
      20.363996509200003,
      20.295618548399993,
      20.227592178000013,
      20.15991600120001,
      20.092588592400002,
      20.0256085152,
      19.958974315200013
    ];
    this.vars.drawType = [
      0,
      5,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      58,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      0,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      4,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      58,
      58,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      58,
      53,
      58,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      58,
      53,
      53,
      53,
      53,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      58,
      53,
      53,
      53,
      53,
      53,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      58,
      53,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      53,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      58,
      58,
      53,
      58,
      58,
      53,
      53,
      58,
      58,
      53,
      58,
      58,
      53,
      53,
      58,
      53,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      58,
      53,
      53,
      58,
      53,
      58,
      53,
      53,
      58,
      53,
      58,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      58,
      53,
      58,
      58,
      53,
      58,
      53,
      53,
      58,
      53,
      58,
      58,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      58,
      53,
      58,
      53,
      58,
      53,
      58,
      58,
      53,
      58,
      58,
      58,
      53,
      0,
      58,
      58,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      58,
      58,
      53,
      58,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      58,
      58,
      58,
      58,
      58,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      53
    ];
  }

  *whenGreenFlagClicked() {
    this.vars.mapGhost = 100;
    while (true) {
      /* TODO: Implement data_showvariable */ null;
      if (this.vars.health < 1) {
        null;
      }
      yield;
    }
  }

  *whenKeyMPressed() {
    this.vars.mapGhost = 100 - this.vars.mapGhost;
    this.broadcast("Toggle Map");
  }
}
