/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2017-11-16: 21h:14m
**
*/

/* ATSextcode_beg() */
function
height_get()
{
  return parseInt(document.getElementById("param_height").value);
}
function
delay_time_get()
{
  return parseInt(document.getElementById("param_delay_time").value);
}
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
document_getElementById
  (id)
{
  return document.getElementById(id);
}
//
function
xmldoc_set_innerHTML
  (xmldoc, text)
  { xmldoc.innerHTML = text; return; }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
button_enable(button)
{
  button.disabled=false; return;
}
function
button_disable(button)
{
  button.disabled = true; return;
}
/* ATSextcode_end() */

var HanoiTowers__statmp12

var HanoiTowers__statmp13

var HanoiTowers__statmp18

var HanoiTowers__statmp19

var HanoiTowers__statmp20

var HanoiTowers__statmp21

var HanoiTowers__statmp22

var HanoiTowers__statmp32

var HanoiTowers__statmp33

var HanoiTowers__statmp34

var HanoiTowers__statmp35

var HanoiTowers__statmp36

var HanoiTowers__statmp37

function
HanoiTowers__patsfun_2__closurerize(env0, env1, env2, env3, env4)
{
  return [function(cenv) { return HanoiTowers__patsfun_2(cenv[1], cenv[2], cenv[3], cenv[4], cenv[5]); }, env0, env1, env2, env3, env4];
}


function
HanoiTowers__patsfun_3__closurerize(env0, env1, env2, env3, env4)
{
  return [function(cenv) { return HanoiTowers__patsfun_3(cenv[1], cenv[2], cenv[3], cenv[4], cenv[5]); }, env0, env1, env2, env3, env4];
}


function
HanoiTowers__patsfun_10__closurerize(env0)
{
  return [function(cenv, arg0) { return HanoiTowers__patsfun_10(cenv[1], arg0); }, env0];
}


function
HanoiTowers__patsfun_11__closurerize(env0)
{
  return [function(cenv, arg0) { return HanoiTowers__patsfun_11(cenv[1], arg0); }, env0];
}


function
HanoiTowers__patsfun_13__closurerize(env0)
{
  return [function(cenv, arg0) { return HanoiTowers__patsfun_13(cenv[1], arg0); }, env0];
}


function
HanoiTowers__patsfun_17__closurerize(env0, env1, env2, env3)
{
  return [function(cenv, arg0) { return HanoiTowers__patsfun_17(cenv[1], cenv[2], cenv[3], cenv[4], arg0); }, env0, env1, env2, env3];
}


function
HanoiTowers__patsfun_24__closurerize(env0, env1, env2, env3)
{
  return [function(cenv) { return HanoiTowers__patsfun_24(cenv[1], cenv[2], cenv[3], cenv[4]); }, env0, env1, env2, env3];
}


function
HanoiTowers__patsfun_25__closurerize()
{
  return [function(cenv) { return HanoiTowers__patsfun_25(); }];
}


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__nmove(arg0, arg1, arg2, arg3)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var tmp1
  var tmp3
  var tmp5
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_nmove
    tmp1 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp1) {
      tmp3 = ats2jspre_sub_int0_int0(arg0, 1);
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__nmove(tmp3, arg1, arg3, arg2);
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__move(arg1, arg2);
      tmp5 = ats2jspre_sub_int0_int0(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp5;
      apy1 = arg3;
      apy2 = arg2;
      apy3 = arg1;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      funlab_js = 1; // __patsflab_nmove
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // end-of-if
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__k_nmove(arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var apy4
  var tmp7
  var tmp8
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_k_nmove
    tmp7 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp7) {
      tmp8 = ats2jspre_sub_int0_int0(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp8;
      apy1 = arg1;
      apy2 = arg3;
      apy3 = arg2;
      apy4 = HanoiTowers__patsfun_2__closurerize(arg0, arg1, arg2, arg3, arg4);
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      arg4 = apy4;
      funlab_js = 1; // __patsflab_k_nmove
      // ATStailcalseq_end
    } else {
      arg4[0](arg4);
    } // end-of-if
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
HanoiTowers__patsfun_2(env0, env1, env2, env3, env4)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_2
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__k_move(env1, env2, HanoiTowers__patsfun_3__closurerize(env0, env1, env2, env3, env4));
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_3(env0, env1, env2, env3, env4)
{
//
// knd = 0
  var tmp11
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_3
  tmp11 = ats2jspre_sub_int0_int0(env0, 1);
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__k_nmove(tmp11, env3, env2, env1, env4);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_get()
{
//
// knd = 0
  var tmpret14
  var tmplab, tmplab_js
//
  // __patsflab_N_get
  tmpret14 = ats2jspre_ref_get_elt(HanoiTowers__statmp12);
  return tmpret14;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_set(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_N_set
  ats2jspre_ref_set_elt(HanoiTowers__statmp12, arg0);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__theDelayTime_get()
{
//
// knd = 0
  var tmpret16
  var tmplab, tmplab_js
//
  // __patsflab_theDelayTime_get
  tmpret16 = ats2jspre_ref_get_elt(HanoiTowers__statmp13);
  return tmpret16;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__theDelayTime_set(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_theDelayTime_set
  ats2jspre_ref_set_elt(HanoiTowers__statmp13, arg0);
  return/*_void*/;
} // end-of-function


function
param_initize()
{
//
// knd = 0
  var tmp30
  var tmp31
  var tmplab, tmplab_js
//
  // __patsflab_param_initize
  tmp30 = height_get();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_set(tmp30);
  tmp31 = delay_time_get();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__theDelayTime_set(tmp31);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__k_move(arg0, arg1, arg2)
{
//
// knd = 0
  var tmp39
  var tmp40
  var tmp41
  var tmp44
  var tmp47
  var tmp48
  var tmp49
  var tmp52
  var tmp53
  var tmplab, tmplab_js
//
  // __patsflab_k_move
  tmp39 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, arg0);
  tmp40 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, arg1);
  tmp41 = array0_find_index(tmp39, HanoiTowers__patsfun_10__closurerize(tmp39));
  tmp44 = array0_find_index(tmp40, HanoiTowers__patsfun_11__closurerize(tmp40));
  tmp48 = ats2jspre_gte_int1_int1(tmp44, 0);
  if(tmp48) {
    tmp47 = tmp44;
  } else {
    tmp47 = ats2jspre_ML_array0_size(tmp40);
  } // end-of-if
  tmp49 = ats2jspre_ML_array0_get_at(tmp39, tmp41);
  ats2jspre_ML_array0_set_at(tmp39, tmp41, 0);
  tmp52 = ats2jspre_sub_int0_int0(tmp47, 1);
  ats2jspre_ML_array0_set_at(tmp40, tmp52, tmp49);
  tmp53 = [arg2];
  ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp53);
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_10(env0, arg0)
{
//
// knd = 0
  var tmpret42
  var tmp43
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_10
  tmp43 = ats2jspre_ML_array0_get_at(env0, arg0);
  tmpret42 = ats2jspre_gt_int0_int0(tmp43, 0);
  return tmpret42;
} // end-of-function


function
HanoiTowers__patsfun_11(env0, arg0)
{
//
// knd = 0
  var tmpret45
  var tmp46
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_11
  tmp46 = ats2jspre_ML_array0_get_at(env0, arg0);
  tmpret45 = ats2jspre_gt_int0_int0(tmp46, 0);
  return tmpret45;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_init()
{
//
// knd = 0
  var tmp55
  var tmp56
  var tmp58
  var tmp60
  var tmp62
  var tmp63
  var tmp64
  var tmplab, tmplab_js
//
  // __patsflab_thePoles_init
  tmp55 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_get();
  tmp56 = ats2jspre_max_int1_int1(tmp55, 0);
  tmp58 = ats2jspre_ML_array0_make_elt(tmp56, 0);
  ats2jspre_ML_array0_set_at(HanoiTowers__statmp33, 0, tmp58);
  tmp60 = ats2jspre_ML_array0_make_elt(tmp56, 0);
  ats2jspre_ML_array0_set_at(HanoiTowers__statmp33, 1, tmp60);
  tmp62 = ats2jspre_ML_array0_make_elt(tmp56, 0);
  ats2jspre_ML_array0_set_at(HanoiTowers__statmp33, 2, tmp62);
  tmp63 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, 0);
  tmp64 = ats2jspre_ML_array0_foreach_method(tmp63);
  tmp64[0](tmp64, HanoiTowers__patsfun_13__closurerize(tmp63));
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_13(env0, arg0)
{
//
// knd = 0
  var tmp66
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_13
  tmp66 = ats2jspre_add_int1_int1(arg0, 1);
  ats2jspre_ML_array0_set_at(env0, arg0, tmp66);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_show()
{
//
// knd = 0
  var tmp68
  var tmp69
  var tmp70
  var tmp71
  var tmp83
  var tmp84
  var tmp85
  var tmplab, tmplab_js
//
  // __patsflab_thePoles_show
  tmp68 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, 0);
  tmp69 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, 1);
  tmp70 = ats2jspre_ML_array0_get_at(HanoiTowers__statmp33, 2);
  tmp71 = ats2jspre_ML_array0_size(tmp68);
  tmp84 = ats2jspre_mul_int1_int1(2, tmp71);
  tmp83 = ats2jspre_add_int1_int1(tmp84, 6);
  tmp85 = ats2jspre_int_foreach_method(tmp71);
  tmp85[0](tmp85, HanoiTowers__patsfun_17__closurerize(tmp68, tmp69, tmp70, tmp83));
  return/*_void*/;
} // end-of-function


function
HanoiTowers__dshow1_15(arg0)
{
//
// knd = 0
  var tmp73
  var tmp76
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__dshow1_15
  tmp73 = ats2jspre_gt_int0_int0(arg0, 0);
  if(tmp73) {
    ats2jspre_print_string("O");
    tmp76 = ats2jspre_sub_int0_int0(arg0, 1);
    HanoiTowers__dshow1_15(tmp76);
    ats2jspre_print_string("O");
  } else {
    ats2jspre_print_string("|");
  } // end-of-if
  return/*_void*/;
} // end-of-function


function
HanoiTowers__dshow2_16(arg0, arg1)
{
//
// knd = 0
  var tmp78
  var tmp79
  var tmp82
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__dshow2_16
  tmp79 = ats2jspre_mul_int0_int0(2, arg1);
  tmp78 = ats2jspre_gt_int0_int0(arg0, tmp79);
  if(tmp78) {
    ats2jspre_print_string(" ");
    tmp82 = ats2jspre_sub_int0_int0(arg0, 2);
    HanoiTowers__dshow2_16(tmp82, arg1);
    ats2jspre_print_string(" ");
  } else {
    HanoiTowers__dshow1_15(arg1);
  } // end-of-if
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_17(env0, env1, env2, env3, arg0)
{
//
// knd = 0
  var tmp88
  var tmp90
  var tmp92
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_17
  tmp88 = ats2jspre_ML_array0_get_at(env0, arg0);
  HanoiTowers__dshow2_16(env3, tmp88);
  tmp90 = ats2jspre_ML_array0_get_at(env1, arg0);
  HanoiTowers__dshow2_16(env3, tmp90);
  tmp92 = ats2jspre_ML_array0_get_at(env2, arg0);
  HanoiTowers__dshow2_16(env3, tmp92);
  ats2jspre_print_newline();
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_init()
{
//
// knd = 0
  var tmp94
  var tmp97
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersShow_init
  tmp94 = document.getElementById("theStage");
  ats2jspre_the_print_store_clear();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_show();
  tmp97 = ats2jspre_the_print_store_join();
  xmldoc_set_innerHTML(tmp94, tmp97);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_step()
{
//
// knd = 0
  var tmp99
  var tmp101
  var tmp102
  var tmp106
  var tmp107
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersShow_step
  tmp99 = ats2jspre_ref_get_elt(HanoiTowers__statmp36);
  tmp101 = null;
  ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp101);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptriscons(tmp99)) {
        { tmplab_js = 4; break; }
      } // ifthen
      case 2: // __atstmplab1
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      case 4: // __atstmplab3
      tmp102 = tmp99[0];
      tmp102[0](tmp102);
      ats2jspre_the_print_store_clear();
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_show();
      tmp106 = ats2jspre_the_print_store_join();
      tmp107 = document.getElementById("theStage");
      xmldoc_set_innerHTML(tmp107, tmp106);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop()
{
//
// knd = 0
  var tmp109
  var tmp111
  var tmp112
  var tmp116
  var tmp117
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersShow_loop
  tmp109 = ats2jspre_ref_get_elt(HanoiTowers__statmp36);
  tmp111 = null;
  ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp111);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(tmp109)) {
        { tmplab_js = 4; break; }
      } // ifthen
      case 2: // __atstmplab5
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      case 4: // __atstmplab7
      tmp112 = tmp109[0];
      tmp112[0](tmp112);
      ats2jspre_the_print_store_clear();
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_show();
      tmp116 = ats2jspre_the_print_store_join();
      tmp117 = document.getElementById("theStage");
      xmldoc_set_innerHTML(tmp117, tmp116);
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop_delay();
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop_delay()
{
//
// knd = 0
  var tmp120
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersShow_loop_delay
  tmp120 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__theDelayTime_get();
  setTimeout(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop, tmp120);
  return/*_void*/;
} // end-of-function


function
HanoiTowersControl_start()
{
//
// knd = 0
  var tmp128
  var tmp129
  var tmp132
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersControl_start
  button_enable(HanoiTowers__statmp20);
  button_disable(HanoiTowers__statmp18);
  button_disable(HanoiTowers__statmp21);
  button_disable(HanoiTowers__statmp22);
  param_initize();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_init();
  tmp128 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_get();
  tmp129 = ats2jspre_ref_get_elt(HanoiTowers__statmp34);
  ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp129);
  tmp132 = null;
  ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp132);
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop();
  return/*_void*/;
} // end-of-function


function
HanoiTowersControl_reset()
{
//
// knd = 0
  var tmp140
  var tmp142
  var tmp147
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersControl_reset
  param_initize();
  button_enable(HanoiTowers__statmp18);
  button_enable(HanoiTowers__statmp21);
  button_disable(HanoiTowers__statmp20);
  button_disable(HanoiTowers__statmp22);
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__thePoles_init();
  tmp140 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__N_get();
  tmp142 = [HanoiTowers__patsfun_24__closurerize(tmp140, 0, 1, 2)];
  ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp142);
  tmp147 = null;
  ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp147);
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_init();
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_24(env0, env1, env2, env3)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_24
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__k_nmove(env0, env1, env2, env3, HanoiTowers__patsfun_25__closurerize());
  return/*_void*/;
} // end-of-function


function
HanoiTowers__patsfun_25()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowers__patsfun_25
  ats2jspre_alert("HanoiTowers: Done!");
  HanoiTowersControl_reset();
  return/*_void*/;
} // end-of-function


function
HanoiTowersControl_pause()
{
//
// knd = 0
  var tmp152
  var tmp154
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersControl_pause
  button_enable(HanoiTowers__statmp21);
  button_enable(HanoiTowers__statmp22);
  button_disable(HanoiTowers__statmp20);
  tmp152 = ats2jspre_ref_get_elt(HanoiTowers__statmp36);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab8
      if(ATSCKptriscons(tmp152)) {
        { tmplab_js = 4; break; }
      } // ifthen
      case 2: // __atstmplab9
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab10
      case 4: // __atstmplab11
      ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp152);
      tmp154 = null;
      ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp154);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
HanoiTowersControl_step1()
{
//
// knd = 0
  var tmp158
  var tmp161
  var tmp163
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersControl_step1
  button_enable(HanoiTowers__statmp22);
  button_disable(HanoiTowers__statmp18);
  tmp158 = ats2jspre_ref_get_elt(HanoiTowers__statmp34);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab12
      if(ATSCKptriscons(tmp158)) {
        { tmplab_js = 4; break; }
      } // ifthen
      case 2: // __atstmplab13
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab14
      case 4: // __atstmplab15
      ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp158);
      tmp161 = null;
      ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp161);
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_step();
      tmp163 = ats2jspre_ref_get_elt(HanoiTowers__statmp36);
      ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp163);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
HanoiTowersControl_resume()
{
//
// knd = 0
  var tmp168
  var tmp171
  var tmplab, tmplab_js
//
  // __patsflab_HanoiTowersControl_resume
  button_enable(HanoiTowers__statmp20);
  button_disable(HanoiTowers__statmp21);
  button_disable(HanoiTowers__statmp22);
  tmp168 = ats2jspre_ref_get_elt(HanoiTowers__statmp34);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab16
      if(ATSCKptriscons(tmp168)) {
        { tmplab_js = 4; break; }
      } // ifthen
      case 2: // __atstmplab17
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab18
      case 4: // __atstmplab19
      ats2jspre_ref_set_elt(HanoiTowers__statmp36, tmp168);
      tmp171 = null;
      ats2jspre_ref_set_elt(HanoiTowers__statmp34, tmp171);
      _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__HanoiTowersShow_loop();
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function

// dynloadflag_minit
var _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynloadflag = 0;

function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynloadflag(314))
  if(ATSCKiseqz(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynloadflag)) {
    _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynloadflag = 1 ; // flag is set
    HanoiTowers__statmp12 = ats2jspre_ref(8);
    HanoiTowers__statmp13 = ats2jspre_ref(500);
    HanoiTowers__statmp18 = document_getElementById("button_start");
    HanoiTowers__statmp19 = document_getElementById("button_reset");
    HanoiTowers__statmp20 = document_getElementById("button_pause");
    HanoiTowers__statmp21 = document_getElementById("button_step1");
    HanoiTowers__statmp22 = document_getElementById("button_resume");
    button_enable(HanoiTowers__statmp19);
    button_disable(HanoiTowers__statmp18);
    button_disable(HanoiTowers__statmp21);
    button_disable(HanoiTowers__statmp20);
    button_disable(HanoiTowers__statmp22);
    HanoiTowers__statmp32 = ats2jspre_ML_array0_make_elt(0, 0);
    HanoiTowers__statmp33 = ats2jspre_ML_array0_make_elt(3, HanoiTowers__statmp32);
    HanoiTowers__statmp35 = null;
    HanoiTowers__statmp34 = ats2jspre_ref(HanoiTowers__statmp35);
    HanoiTowers__statmp37 = null;
    HanoiTowers__statmp36 = ats2jspre_ref(HanoiTowers__statmp37);
  } // end-of-if
  return/*_void*/;
} // end-of-function


function
HanoiTowers__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_doc_057_BOOK_057_ATS2FUNCRASH_057_LECTURE_057_12_055_10_057_CODE_057_HanoiTowers_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
//
function
HanoiTowers__initize()
{
//
HanoiTowers__dynload(); return;
//
} // end of [HanoiTowers__initize]
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
jQuery(document).ready(function(){HanoiTowers__initize();});
//
/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */
