/* eslint-disable @typescript-eslint/no-unused-vars */
import type { EvtProps, PPDrawToolProps, PPDrawToolRet, PPRenderFuncProps } from './drawUtils';
import type { Stage as StageType } from 'konva/lib/Stage';
import type { Annotation } from '@/models/Annotation';
import { useModel } from 'umi';
import { Label } from '@/models';
import { message } from 'antd';
import { IntlInit } from '@/services/utils';

const SAMPLE_RESULT = {
  result: [
    [
      0.3779466152191162, 0.38711845874786377, 0.36106088757514954, 0.35420000553131104,
      0.35632404685020447, 0.36673659086227417, 0.3709605634212494, 0.33228039741516113,
      0.3710925579071045, 0.3494248390197754, 0.34312722086906433, 0.3462066650390625,
      0.3746175765991211, 0.3791941702365875, 0.4216013550758362, 0.44569116830825806,
      0.40616583824157715, 0.4613204002380371, 0.49154922366142273, 0.4584124684333801,
      0.4600294828414917, 0.4803354740142822, 0.46287786960601807, 0.43543994426727295,
      0.43747758865356445, 0.4064893126487732, 0.3941977620124817, 0.39790475368499756,
      0.39159834384918213, 0.3925873935222626, 0.3789200186729431, 0.36321160197257996,
    ],
    [
      0.3818621039390564, 0.3770502805709839, 0.36075377464294434, 0.3548894226551056,
      0.3503073453903198, 0.335567444562912, 0.3341645896434784, 0.33101293444633484,
      0.3728009760379791, 0.364932656288147, 0.37297818064689636, 0.37586647272109985,
      0.3893028497695923, 0.39986884593963623, 0.41131657361984253, 0.4522101581096649,
      0.4333687722682953, 0.5002316832542419, 0.4971569776535034, 0.473648339509964,
      0.4820094704627991, 0.46783292293548584, 0.4617140591144562, 0.44852927327156067,
      0.44560548663139343, 0.44700291752815247, 0.4248964786529541, 0.44343101978302,
      0.41931068897247314, 0.43451547622680664, 0.4378070831298828, 0.3568068742752075,
    ],
    [
      0.3652324676513672, 0.35223522782325745, 0.35097530484199524, 0.360146701335907,
      0.36671239137649536, 0.3395833373069763, 0.35282737016677856, 0.33361345529556274,
      0.377223938703537, 0.38735657930374146, 0.39466923475265503, 0.3888944387435913,
      0.3632313311100006, 0.3888370096683502, 0.4123692810535431, 0.41089701652526855,
      0.4431883990764618, 0.5125359296798706, 0.5071693658828735, 0.47963064908981323,
      0.46734818816185, 0.4608532786369324, 0.4394238293170929, 0.40698742866516113,
      0.42963457107543945, 0.4184359908103943, 0.39965513348579407, 0.4161875247955322,
      0.4067150950431824, 0.45255592465400696, 0.44494757056236267, 0.34891369938850403,
    ],
    [
      0.364960253238678, 0.3754047155380249, 0.3721790313720703, 0.37246841192245483,
      0.3652416467666626, 0.32984012365341187, 0.3496708571910858, 0.3422262966632843,
      0.3380891978740692, 0.3428453207015991, 0.36001724004745483, 0.36075884103775024,
      0.36690282821655273, 0.375881552696228, 0.3909446597099304, 0.3976140320301056,
      0.43047186732292175, 0.5223039984703064, 0.5174918174743652, 0.5091606974601746,
      0.4703259766101837, 0.46562325954437256, 0.4584425091743469, 0.4025508463382721,
      0.4088236391544342, 0.41495299339294434, 0.41274765133857727, 0.394614577293396,
      0.3999204635620117, 0.43086522817611694, 0.443092942237854, 0.3433324098587036,
    ],
    [
      0.34178581833839417, 0.3906759023666382, 0.3692866563796997, 0.361131876707077,
      0.3499326705932617, 0.3162209391593933, 0.31167617440223694, 0.3333600163459778,
      0.3163505494594574, 0.338070273399353, 0.35670241713523865, 0.3636510670185089,
      0.35625404119491577, 0.35763710737228394, 0.38493406772613525, 0.39124634861946106,
      0.4325636029243469, 0.5645959973335266, 0.5685874223709106, 0.5350329279899597,
      0.4992934465408325, 0.4620708227157593, 0.45242631435394287, 0.41027894616127014,
      0.4038461744785309, 0.3944956958293915, 0.39921683073043823, 0.3937588334083557,
      0.38950315117836, 0.3928646147251129, 0.4300973415374756, 0.33759239315986633,
    ],
    [
      0.34255340695381165, 0.384326696395874, 0.35354241728782654, 0.32820284366607666,
      0.34075650572776794, 0.310611367225647, 0.3198155462741852, 0.3376222848892212,
      0.3267553746700287, 0.33798253536224365, 0.3261478543281555, 0.3417035639286041,
      0.34279346466064453, 0.3464927673339844, 0.3819480240345001, 0.3768705129623413,
      0.43024203181266785, 0.5799015164375305, 0.5669912099838257, 0.5345537066459656,
      0.5366686582565308, 0.5029425621032715, 0.4881816804409027, 0.4266446828842163,
      0.3896041512489319, 0.38750505447387695, 0.3878398835659027, 0.401533305644989,
      0.38611483573913574, 0.4102136492729187, 0.43251603841781616, 0.3381301164627075,
    ],
    [
      0.34610551595687866, 0.37768492102622986, 0.3577062487602234, 0.321483314037323,
      0.3238357901573181, 0.31036683917045593, 0.32922878861427307, 0.33748194575309753,
      0.34403321146965027, 0.3489550054073334, 0.32951661944389343, 0.35581493377685547,
      0.3549908995628357, 0.34664082527160645, 0.37512969970703125, 0.37657931447029114,
      0.4325118064880371, 0.6002883911132812, 0.5718269348144531, 0.5072413086891174,
      0.5073626041412354, 0.5133922100067139, 0.48958104848861694, 0.45026227831840515,
      0.41855117678642273, 0.38928452134132385, 0.3869919180870056, 0.3884861171245575,
      0.38088345527648926, 0.4067824184894562, 0.42561301589012146, 0.3727574646472931,
    ],
    [
      0.36236464977264404, 0.38462936878204346, 0.33172523975372314, 0.2767360210418701,
      0.28566184639930725, 0.29154667258262634, 0.32516488432884216, 0.3253626823425293,
      0.30838415026664734, 0.3315502405166626, 0.3262888789176941, 0.3520568013191223,
      0.35253870487213135, 0.3447986841201782, 0.3818697929382324, 0.3651794195175171,
      0.4231885075569153, 0.5827294588088989, 0.5951063632965088, 0.6352673768997192,
      0.5757752656936646, 0.48387131094932556, 0.46553540229797363, 0.4512472450733185,
      0.44570550322532654, 0.4316057562828064, 0.41964590549468994, 0.3941313624382019,
      0.37175554037094116, 0.3886064291000366, 0.40585458278656006, 0.3790917694568634,
    ],
    [
      0.35083019733428955, 0.3677082061767578, 0.33382877707481384, 0.3098861575126648,
      0.3019915223121643, 0.3109188377857208, 0.3330777883529663, 0.331575870513916,
      0.31939375400543213, 0.34113019704818726, 0.34969979524612427, 0.3529251217842102,
      0.36156511306762695, 0.35511070489883423, 0.37965914607048035, 0.37223300337791443,
      0.4537010192871094, 0.5680437088012695, 0.6448143720626831, 0.7226863503456116,
      0.729232907295227, 0.6868923902511597, 0.5698102116584778, 0.4619525372982025,
      0.46818724274635315, 0.43513986468315125, 0.42044782638549805, 0.3994002342224121,
      0.39396214485168457, 0.3904518187046051, 0.40890100598335266, 0.3930703103542328,
    ],
    [
      0.3359583914279938, 0.3705343008041382, 0.35527661442756653, 0.3399384319782257,
      0.34458956122398376, 0.3259856700897217, 0.347974956035614, 0.3495017886161804,
      0.3527892231941223, 0.35826316475868225, 0.35742005705833435, 0.335483193397522,
      0.34679195284843445, 0.36213573813438416, 0.38948914408683777, 0.3846794366836548,
      0.4752236008644104, 0.5317398905754089, 0.6341782212257385, 0.7260967493057251,
      0.7400858402252197, 0.7263891696929932, 0.6071794629096985, 0.49351879954338074,
      0.4718652367591858, 0.4380945563316345, 0.44395726919174194, 0.42750805616378784,
      0.4137647747993469, 0.41625750064849854, 0.42252638936042786, 0.4066489040851593,
    ],
    [
      0.3289949595928192, 0.37435805797576904, 0.3653024733066559, 0.34567791223526,
      0.37014514207839966, 0.36809563636779785, 0.36826398968696594, 0.32743436098098755,
      0.3298226594924927, 0.34234797954559326, 0.34268611669540405, 0.3254646956920624,
      0.3090794086456299, 0.3477054834365845, 0.37110430002212524, 0.3621593713760376,
      0.4475082755088806, 0.487918496131897, 0.601881742477417, 0.6983312964439392,
      0.7557751536369324, 0.7451871633529663, 0.5793305039405823, 0.4939006268978119,
      0.47265419363975525, 0.42300844192504883, 0.43300366401672363, 0.41770070791244507,
      0.414137601852417, 0.42620089650154114, 0.41289666295051575, 0.4050122797489166,
    ],
    [
      0.2583468556404114, 0.3622201085090637, 0.3609732985496521, 0.35103529691696167,
      0.3431868553161621, 0.36043819785118103, 0.3594401776790619, 0.33510416746139526,
      0.31773367524147034, 0.32706841826438904, 0.33306169509887695, 0.329282283782959,
      0.3103845715522766, 0.3467973470687866, 0.36439552903175354, 0.35807719826698303,
      0.40837693214416504, 0.46938514709472656, 0.6127392053604126, 0.7233112454414368,
      0.7669434547424316, 0.7611733675003052, 0.5953957438468933, 0.5389460921287537,
      0.4672558009624481, 0.42192357778549194, 0.42329633235931396, 0.42473718523979187,
      0.40417638421058655, 0.408004492521286, 0.4068392515182495, 0.45992550253868103,
    ],
    [
      0.26873499155044556, 0.3717286288738251, 0.3643631339073181, 0.3532456159591675,
      0.3495698571205139, 0.3619597554206848, 0.3786068260669708, 0.3432343006134033,
      0.3145405650138855, 0.32395321130752563, 0.33640119433403015, 0.33749133348464966,
      0.31600821018218994, 0.3369048535823822, 0.3504919409751892, 0.34988847374916077,
      0.3846014440059662, 0.4548245966434479, 0.6552940011024475, 0.7398929595947266,
      0.7898313999176025, 0.7753756642341614, 0.6361410617828369, 0.550889790058136,
      0.4542275369167328, 0.41850578784942627, 0.4201924800872803, 0.4233487844467163,
      0.4089168310165405, 0.40734779834747314, 0.4125276207923889, 0.45579835772514343,
    ],
    [
      0.2889721095561981, 0.3404158651828766, 0.34746238589286804, 0.3323819637298584,
      0.36239108443260193, 0.36021608114242554, 0.3564058542251587, 0.34031766653060913,
      0.3106665015220642, 0.32129210233688354, 0.32644376158714294, 0.3231737017631531,
      0.30393165349960327, 0.34000542759895325, 0.3698198199272156, 0.3764057457447052,
      0.37690526247024536, 0.44695284962654114, 0.6244124174118042, 0.7085537910461426,
      0.7864880561828613, 0.7922757267951965, 0.6478504538536072, 0.5585101842880249,
      0.46907946467399597, 0.43042469024658203, 0.4196140766143799, 0.4143720269203186,
      0.41768819093704224, 0.4123932123184204, 0.40979909896850586, 0.40944749116897583,
    ],
    [
      0.33511802554130554, 0.3354792892932892, 0.3483961820602417, 0.3393648862838745,
      0.36110979318618774, 0.37371599674224854, 0.3693099021911621, 0.3380741477012634,
      0.31597936153411865, 0.3110752999782562, 0.3071911334991455, 0.29553914070129395,
      0.28971895575523376, 0.3283897936344147, 0.3738657832145691, 0.359753280878067,
      0.37170153856277466, 0.45006322860717773, 0.622103214263916, 0.7240833044052124,
      0.8724844455718994, 0.8468523025512695, 0.6292383670806885, 0.5481832027435303,
      0.47547808289527893, 0.4294469654560089, 0.4108424484729767, 0.4051211476325989,
      0.4253206253051758, 0.42601343989372253, 0.4097977876663208, 0.3356857895851135,
    ],
    [
      0.3555319011211395, 0.3408556282520294, 0.35363197326660156, 0.3417183756828308,
      0.3509896397590637, 0.38215622305870056, 0.41220414638519287, 0.3597573935985565,
      0.3141809105873108, 0.299405962228775, 0.2974483370780945, 0.2919771671295166,
      0.2913997769355774, 0.32095572352409363, 0.373879075050354, 0.3556964099407196,
      0.3629939556121826, 0.47226566076278687, 0.6256035566329956, 0.7390267252922058,
      0.8593417406082153, 0.8262102603912354, 0.6343622803688049, 0.5576579570770264,
      0.4742991030216217, 0.41313984990119934, 0.3864082098007202, 0.3817637264728546,
      0.4082636833190918, 0.41419312357902527, 0.4119032323360443, 0.2635403275489807,
    ],
    [
      0.3506373465061188, 0.32203149795532227, 0.34963458776474, 0.32425546646118164,
      0.33225691318511963, 0.35579705238342285, 0.38111579418182373, 0.3564165532588959,
      0.3126765489578247, 0.3007081151008606, 0.30092623829841614, 0.30085325241088867,
      0.2974894046783447, 0.326341450214386, 0.36822161078453064, 0.35820019245147705,
      0.3826185166835785, 0.4894598424434662, 0.6533626317977905, 0.70644211769104,
      0.7451343536376953, 0.7429384589195251, 0.6669357419013977, 0.5394930243492126,
      0.45886534452438354, 0.41244491934776306, 0.39533960819244385, 0.370727002620697,
      0.386724591255188, 0.3909628987312317, 0.40651923418045044, 0.24896344542503357,
    ],
    [
      0.3370128571987152, 0.30008041858673096, 0.3007066547870636, 0.2964634597301483,
      0.31920456886291504, 0.3513490855693817, 0.3618793785572052, 0.3482736349105835,
      0.3220705986022949, 0.3098466992378235, 0.306601345539093, 0.30917924642562866,
      0.32083860039711, 0.33934545516967773, 0.3853139877319336, 0.3959599435329437,
      0.42794349789619446, 0.5098592042922974, 0.6510905027389526, 0.7034169435501099,
      0.7345707416534424, 0.7295455932617188, 0.6945785880088806, 0.5392878651618958,
      0.46230608224868774, 0.4132283627986908, 0.40620577335357666, 0.39428097009658813,
      0.39259806275367737, 0.38836321234703064, 0.3802737891674042, 0.2869125008583069,
    ],
    [
      0.3107353448867798, 0.28716710209846497, 0.2810332477092743, 0.28914326429367065,
      0.3127279281616211, 0.349570631980896, 0.35278424620628357, 0.3424120545387268,
      0.3312514126300812, 0.3183543384075165, 0.31009000539779663, 0.3195717930793762,
      0.31631040573120117, 0.32442909479141235, 0.3819769620895386, 0.39367008209228516,
      0.41426554322242737, 0.48430579900741577, 0.6400377750396729, 0.682829737663269,
      0.7346150875091553, 0.7265263199806213, 0.6635222434997559, 0.5312811732292175,
      0.4713155925273895, 0.40454715490341187, 0.41512030363082886, 0.4182337820529938,
      0.39747387170791626, 0.3760755658149719, 0.3628138303756714, 0.3463020622730255,
    ],
    [
      0.30060598254203796, 0.3060090243816376, 0.3139290511608124, 0.3145269751548767,
      0.30912041664123535, 0.35013264417648315, 0.35046622157096863, 0.33206114172935486,
      0.322023868560791, 0.3207645118236542, 0.3205072283744812, 0.32279807329177856,
      0.3099812865257263, 0.3307061493396759, 0.3545922636985779, 0.3684121072292328,
      0.39094099402427673, 0.43648841977119446, 0.6046525239944458, 0.6440432071685791,
      0.6817156672477722, 0.6866225600242615, 0.6455923318862915, 0.5251345634460449,
      0.4481634497642517, 0.4150755703449249, 0.4251801371574402, 0.404987633228302,
      0.37328672409057617, 0.36327677965164185, 0.3602195680141449, 0.3206213116645813,
    ],
    [
      0.30405154824256897, 0.3178442716598511, 0.33336877822875977, 0.3373711109161377,
      0.32321715354919434, 0.3630528748035431, 0.3537922501564026, 0.3336135447025299,
      0.30300673842430115, 0.31718388199806213, 0.3529442846775055, 0.34015488624572754,
      0.3124402165412903, 0.3555675745010376, 0.35390767455101013, 0.37345024943351746,
      0.4144602119922638, 0.44640690088272095, 0.573625922203064, 0.6119270324707031,
      0.6456900835037231, 0.6455104351043701, 0.5934235453605652, 0.484555721282959,
      0.4161651134490967, 0.3811432719230652, 0.3861028552055359, 0.3659202456474304,
      0.34390294551849365, 0.3247116208076477, 0.3456142544746399, 0.32664284110069275,
    ],
    [
      0.2826228737831116, 0.2938840985298157, 0.30609411001205444, 0.29632243514060974,
      0.2861210107803345, 0.30216431617736816, 0.28895461559295654, 0.2819651961326599,
      0.2588002383708954, 0.30655887722969055, 0.34061241149902344, 0.32973647117614746,
      0.3005189895629883, 0.29779112339019775, 0.2948862910270691, 0.3190575838088989,
      0.3858416974544525, 0.4116919934749603, 0.5491650104522705, 0.5732342004776001,
      0.5938672423362732, 0.5976152420043945, 0.5155865550041199, 0.45706799626350403,
      0.3356960117816925, 0.31694191694259644, 0.3380652368068695, 0.3176265358924866,
      0.315368115901947, 0.3020714521408081, 0.3154049515724182, 0.32578057050704956,
    ],
  ],
};
function getBase64Image(img?: HTMLImageElement) {
  if (!img) return '';
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  console.log('img.width', img.width);
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(img, 0, 0, img.width, img.height);
  const dataURL = canvas.toDataURL('image/png');
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}

/**
 * Color lines on canvas as label.color
 */
function drawAnnotation(param: PPRenderFuncProps) {
  const { canvasRef } = param;
  if (!param.interactorData || !param.label?.color) return <></>;
  const result: number[][] = param.interactorData.predictData;
  const ctx = canvasRef.current?.getContext('2d');
  if (!ctx) return <></>;
  console.log(`PPInteractor.drawAnnotation`, param.interactorData);
  renderPoints(filterPoints(result, param.threshold), ctx, param.label.color);
  renderMousePoints(param.interactorData.mousePoints, ctx, param.radius || 10);
  return <></>;
}

function renderMousePoints(mousePoints: any[][], ctx: CanvasRenderingContext2D, radius: number) {
  if (!mousePoints) return;
  for (const [x, y, positive] of mousePoints) {
    ctx.beginPath();
    if (positive) ctx.fillStyle = '#008000';
    else ctx.fillStyle = '#FF0000';
    // Filled triangle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.fill();

    // Stroked triangle
    ctx.strokeStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

function filterPoints(result: number[][], thresholdRaw?: number) {
  const threshold = thresholdRaw ? thresholdRaw * 0.01 : 0.5;
  // 域值
  const points: number[] = [];
  let rowNum = 0;
  for (const row of result) {
    let colNum = 0;
    for (const point of row) {
      if (point >= threshold) {
        points.push(colNum, rowNum);
        // console.log(`point:`, point, `x y:`, rowNum, colNum);
      }
      colNum++;
    }
    rowNum++;
  }
  return points;
}

export function interactorToAnnotation(
  threshold: number,
  annotations: Annotation[],
  interactorData?: number[][],
  dataId?: number,
  finlyList?: Annotation[],
  selectFinly?: Annotation,
  label?: Label,
): Annotation | null {
  if (!dataId || !label || !interactorData) return null;
  const points = filterPoints(interactorData, threshold);
  const width = 0; // Pixel type
  console.log('selectFinly', selectFinly);

  let frontendId;
  // 有模型
  if (selectFinly?.frontendId) {
    frontendId = selectFinly?.frontendId;
  } else {
    frontendId = finlyList?.length ? getMaxFrontendId(finlyList) + 1 : 1;
  }
  // if (finlyList) {
  //   if (finlyList?.length > 0 && selectFinly) {
  //     frontendId = selectFinly.frontendId;
  //   } else if (finlyList?.length > 0 && !selectFinly) {
  //     frontendId = getMaxFrontendId(finlyList) + 1;
  //   } else if (finlyList?.length === 0) {
  //     frontendId = getMaxFrontendId(finlyList) + 1;
  //   }
  // } else {
  //   frontendId = getMaxFrontendId(finlyList) + 1;
  // }
  console.log('frontendIds', frontendId);
  const result = `${width},${frontendId},` + points.join(',');
  const anno = {
    dataId: dataId,
    label: label,
    labelId: label.labelId,
    frontendId: frontendId,
    result: result,
    type: 'brush',
  };
  return anno;
}
export function ectInteractorToAnnotation(
  annotations: Annotation[],
  result?: string,
  dataId?: number,
  label?: Label,
): Annotation | null {
  if (!dataId || !label || !result) return null;
  const frontendId = annotations?.length ? getMaxFrontendId(annotations) + 1 : 1;
  const anno = {
    dataId: dataId,
    label: label,
    labelId: label.labelId,
    frontendId: frontendId,
    result: result,
    type: 'rectangle',
    predictedBy: 'PicoDet',
  };

  return anno;
}

function renderPoints(points: number[], ctx: CanvasRenderingContext2D, color: string | undefined) {
  // console.log(`renderPoints: `, points, annotation, annotation.label?.color, ctx);
  // Draw shape
  if (points.length < 4) {
    console.log('found incorrect points:', points);
    return;
  }
  renderPixel(ctx, points.slice(2), color);
}
function renderPixel(ctx: CanvasRenderingContext2D, points: number[], color: string | undefined) {
  // console.log(`renderPixel: `, points, color, ctx);
  ctx.globalCompositeOperation = color ? 'source-over' : 'destination-out';
  if (color) ctx.fillStyle = color;
  for (let i = 0; i <= points.length / 2 - 1; i++) {
    const x = points[2 * i];
    const y = points[2 * i + 1];
    // console.log(`points.length: ${points.length}, i: ${i}, lineTo: ${x}, ${y}`);
    ctx.fillRect(x, y, 1, 1);
  }
}

function getMaxFrontendId(annotations?: Annotation[]) {
  if (!annotations || annotations.length == 0) return 0;
  let max = 0;
  for (const annotation of annotations) {
    if (annotation.frontendId > max) max = annotation.frontendId;
  }
  return max;
}

export default function (props: PPDrawToolProps): PPDrawToolRet {
  const { interactorData, setInteractorData } = useModel('InteractorData');
  const model = props.model;
  const tbIntl = IntlInit('pages.toolBar');

  /**
   * Record +- points, send API for latest mark, render on Canvas.
   */
  const OnMouseDown = async (param: EvtProps) => {
    if (props.currentTool != 'interactor') return;
    if (!props.currentLabel?.color) {
      message.error(tbIntl('chooseCategoryFirst'));
      return;
    }
    const mouseX = Math.round(param.mouseX);
    const mouseY = Math.round(param.mouseY);
    const frontendId =
      props.frontendIdOps.frontendId > 0
        ? props.frontendIdOps.frontendId
        : getMaxFrontendId(props.annotations) + 1;
    if (frontendId != props.frontendIdOps.frontendId) props.frontendIdOps.setFrontendId(frontendId);
    interactorData.mousePoints.push(new Array(mouseX, mouseY, param.e.evt.button != 2));
    // Predict from ML Backend
    if (!interactorData.mousePoints.length || !param.stageRef.current || frontendId == undefined) {
      return;
    }
    console.log('param.img', param.img?.width, interactorData.mousePoints);

    const imgBase64 = getBase64Image(param.img);

    const line = await model.predict({
      format: 'b64',
      img: imgBase64,
      other: { clicks: interactorData.mousePoints },
    });
    if (!line) return;
    console.log('line.result', line.result);

    setInteractorData({
      active: true,
      mousePoints: interactorData.mousePoints,
      predictData: line.result,
    });
  };

  const OnMouseMove = () => {};

  const OnMouseUp = () => {
    if (props.currentTool != 'interactor') return;
    // console.log(`OnMouseUp`);
    props.onMouseUp();
  };
  return {
    onMouseDown: OnMouseDown,
    onMouseMove: OnMouseMove,
    onMouseUp: OnMouseUp,
    drawAnnotation: drawAnnotation,
  };
}
