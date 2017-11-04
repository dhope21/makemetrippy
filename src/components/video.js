import React, {Component} from 'react';
import YouTube from 'react-youtube';
import _ from "lodash";


 class Video extends Component{
  constructor(props) {
    super(props);
    console.log("inside league container", window.innerWidth);
    this.state = {
      path: null,     
      data : ['ssFAkvLdH4g','StrbppmsZJw','fj-10lIrboM','WuSPRu4lzag', 'bpOSxM0rNPM', '0fKBhvDjuy0', '-gP_Q2myNWo', '_tEFRAI9WSE', 'q2D-4niMueo', 's5FyfQDO5g0', 'cRewCBZZhRQ',"MZnfzTZmIKE", "-1Pq7VTuaB8", "bqICL_EwlOo", "vY3dyUJoQLs", "62UoIqSyGSY", "vlbKmiBuOog", "W1xM9otgG6c", "cQLwkIhwfKg", "C1ej1ToP6J0", "_xLH6MtqA9E", "BNybLzT5z-s", "OZCqz-BPhyE", "5JTQR1MTxL0", "o-itqilqHSs", "Qlc5dWRdWMQ", "lF4KJ-T8yAI", "FVfsbrtD4Fo", "kuBP97qEwvU", "q-cPe4wtTTw", "s-PLpiXNxVU", "7IxUFYmkk2I", "vwj1QgJ3UAs", "MPl4WLM55Vg", "r0fb0G3hfjo", "wzI8XmXvjkY", "6SaneO1NRXI", "1Z3Pz3lrX-Y", "QHgh77iE6qc", "2jmz-Ie5vj8", "3SZ7r1GOwGI", "Rz4vKHRfIRA", "SAXvVpOX430", "HbsbieBog1c", "zCu8Q1r6Lx0", "alIwnMCuR5M", "j6SEthkZCWg", "22DAdaN_8XY", "qvF1D_L59BQ", "si5WxvxOrZM", "BxwAPBxc0lU", "y9yMUB9cUYI", "Sn56w7C3pCA", "qOR4IW6_4w8", "-E6BK82RUJw", "smHEBIkITW0", "TLn04b-ICME", "IE8Z-srSYWY", "41IyRfhuueU", "GnFQzVr9_HI", "jMqNXa0FVyU", "jMqNXa0FVyU","zkWXtr6AuA8","do7XS-59yBQ","gp_Du6uO9V4","ERoS6y5zE0Y","dJ1VorN9Cl0","kG9CJvMI8wg","GJcVPlkYZZs","WK5y3TDKOpA","dkFzpfoALdE","61l7q2D0rBM","IotmDL01F0k","u_qFuHDf0Xo","WQqTFJdNpZI","k3AklbemM1M","gb2oBZWPndQ","NBJTywsyiO4","MvJfiuvDfeo","Gwadm1ic4CQ","kpIk1kVVVxI","mfbHvm3OZSQ","TfT-K9vCEPQ","f4YvWIBwhOo","4zbTyWWICto","Zi4yYCL2reU","IP-iKQn8hWw","2K4Zqcd3QNs","d86luPyzEUw","l1A-YOT6VmU","U9mZC3o8Ia4","vrJHZxAcGKw","oyxwoLHFv_U","gq7YwOIVW1Y","5qh5goRI9vw","A6yd8JOEUGY","kKqw8nY6-Eg","RwMio6Vq19k","4yEkamV1DEs","Wr5f6hpYxmE","QwpTwhvYAPc","VXlDzUIAks4","NhheiPTdZCw","Q3EEaPj-5qs","Mf6JCpJjdiY","NLXnWBOYCjE","Q085gw3r0l8","bCArpwzIIx8","5zj3aHgLFQE","lHvC1elHuQU","VvnizNlna1k","dqBOqEy7GKg","0eoVLfPszeQ","T-0ieGt_I60","ULGoPzfUQGA","m8wtGxoAHos","wycjnCCgUes","pD0Ioz8IqIQ","pZIU4z95LkE","W2ZTVYHsNyA","UZV-rauHTyw","4PMJihr4nY8","IddDWBpkzYg","Kevdt1T9daA","ggLh9P9x24Q","55CXVn1Fltk","js9EY7iHNfs","5WaoImXPMtE","WF34N4gJAKE","CxCqeZESSkA","g8epoReNLCo","NZ44ljwS48w","xm-nCFHqiFA","96fg9N00QX0","KafBKdnm5hs","6W_ETBVdoKc","yhvjZQYyRHg","ZHNDfMOt700","6qmVNB4nalk","smmErdX4N8c","iUiV1XemMXA","SPffFTWZWlI","MXwFbz0MyUU","yubUVy34nrE","NbUfQpF3PFA","xCq20qGdjFg","_dNht9Zr0CE","QxyPrXp2LLM","Ie4xmySx08M","TZkQ65WAa2Q","b20SV7v0fzE","z9aGmLspjuE","VBCkK1Kd8L0","6KxtgS2lU94","aRvBhlgWN_Q","KQ2nXdYAkYI","0S43IwBF0uM","vs4i41cOv0s","NSmCKo3W82k","jMNw--kDdUE","7rJSqUQItgw","2_NCeCo4lqY","Q-WM-x__BOk","0r2COvWPO4Y","JzcZttcpYFQ","sao3NAapOAI","8Hd7iwf1g44","MWowQub_jVU","s5FyfQDO5g0","ZDykTjFFNIE","bRO7fCgHSyY","th0LBpscgdg","NPbGHpOrjEo","O0EDDKGQYPA","f18p7NXgbS0","KZvgeMRGPcw","ZWrUEsVrdSU","FaNY75mMV-I","rk7nwwlWa8M","QXcAB2kcr3Y","feeIShBaLP8","u76XEmLdWz0","jhAqRroei7g","mEpfyBOdKxU","bhdVV58l0vA","l_4O3jS6Uiw","n3yGeN1NDkU","TIW1m3jbEsg","0J2QdDbelmY","HVpir5vSA78","Rcp8SE_FxBg","lF_C7BvAf_A","qLrnkK2YEcE","E7CaTJ2SvG8","TAImG6OPq0I","wtjZOf0WmdE","bY6iyZzpamg","yzC4hFK5P3g","ozdGYpcdVJk","OJWJE0x7T4Q","DjxH_a5U7wA","TKTbbf4z1PQ","MGQjyGT1-mc","YTCg1Ovu64E","zol2MJf6XNE","MPaA4HVISLo","uawaDJ-b0_k","O_kk8mGqBj8","lxzPzfkXpWs","S8gDxyys4Fk","htuTKyiJWnk","27k7ARJ7NCw","Z-3z3DNUGiE","GTKmxBtaMF4","eQzZ_Wr1m5U","rpPVPEoJdb0","Whv1tLqKZig","mVFeHv4oxJc","xPLMwI1wabE","co3qMdkucM0","zPLNK3mn7zE","X6jprOZ29wY","CuDuXsMVarA","vo4rbhR_vsk","JCdtryoFtfI","E7GRLcqzd0o","0xgboqLY_Iw","UHz0XU624-M","gkQoCCsu_fA","dwAv6vla9S4","R-RZfLG7XdY","1osmNEp2XGc","FW9zthj9Lbc","ktoaj1IpTbw","gMGp-o1UpeM","AixpRQUtG8A","LQ_LUoLTKLo","YdYj-jCcMFg","DYSNkAdgoNs","IwU-23sGeg4","OzZig-Q8fm4","hXEhVJ-zo_M","dUCXZV96l9A","uf5Oka-XouQ","uRdx44-u14g","lSKuYBtdzFI","zCQgGsHV_-I","yI6Kw-7CFGM","2FmFXQSIzCo","lR9ICvcBYZg","HezXYS5fgQQ","U714BQfVYLs","9qxMJAdpJYE","NC0CZyWAUWM","Z4kyMhIvL_Y","rumNQRfCoqw","CkxHj5OVfu4","pL_UOq0xlKk","xyZnIAU9yXw","4CWhPozi7Kg","khlLc7NNOok","g2U3NG1TdEc","7kZgFNFDTY8","bpOSxM0rNPM","GdhvZpcvk5k","LnKUD_OztRE","ftDETiG7PKA","kjbH9XTQrlA","w8iTFP-hYPk","FqQi2EEx9QI","Blc0qOpTJI8","ITLZefT74w4","W2vSnPq8wkI","mtCGhJ5rvBk","1fTs8FsO_ww","5ojlyR2ODe8","xK9IRQq4AgI","wUCcoT_daF8","OWa5rzEOumQ","9bmWAZbFPqI","kRChLx2Qdto","J7hIFOJ32vY","FdE3butAwxU","6-fIrDoe_8M","q2D-4niMueo","WW8VmSfYLAU","GPxCEOVVP1Y","xNa1Ftc5sWc","jS6S-JZs46Y","exwn2X9RKXw","svakc8t1UYY","xIfxK96osjw","TwIEOkZ-e7I","7h9z2VjTZ9E","eESjNNdE9D4","lMp3hovjQyQ","PydxQCgwh0M","0FBKE9wItd4","IreYSQgPcn0","fetoksX1VDE","wght5bg2lKU","nEAToDqkHsE","1n80Xvgb_7U","Bj3qXnQ24Hw","zfcHq0hhFWg","Nd5CygPXwK4","QglMzJT35Og","4LOy2bL6ifk","ex-8nR6hK-8","zzrNI66FUWE","bJEB30Hdb4I","Z1UhMdu53Ak","HINIs3Sp5Lk","_3zX_AT0Xco","5UgmCQUJRGw","LFB7zgDXtjo","j7uFw6jCf3I","ZtRh_o5hvdY","jS7NgvYVI8s","qKxDzyHPo0o","eP6boAGnQmE","qJILRWBKnQ4","pR1_tVCuztY","Vajhs2wBeCU","-An-D5COpsw","97KfDhJdOKI","p1CSMdDIRGg","XYTKvWIOsvE","SVTjtfKning","oQgicu6G6n8","ScAsA_X60GY","syOmZns5kmM","0ZutRhiFmHM","lt3jnsv6x7o","m6k-GEvlnnM","5WW2Xti7A-o","wHa7YZnl-EM","H-7S9RB7BOI","bSFws0yC380","deRODcAG3os","CkWGoqiqdAc","SxIoBlfRK8A","Dg3X_IkFW1c","yKZWBl2levI","v3M9ddNqF7o","gjP5vjn-Lac","GrqWdUt6WpE","cPCLbJujU8E","HIG7PVa8SS8","8BA9W5-SOh8","g8XJkioujwM","XUEOSi6Xa3Y","efE67w2f1KQ","rMGaJLEMjSM","r7PEFjT_dVw","0osXTPmNkAw","xXLZo1k8JZU","VoUVgfG5G4o","Ntc4l-poovo","D0oxj32HkZ0","44BxMFaMdt4","Cw3dJC5ZBWs","9mJSzU2-iDg","S7weP864MVU","c-M7cvJy1IY","udAHb_BIcbs","V8z9sMC_omo","WDeCmK9dH04","MUXnwE-BJlQ","Al6M_lsxTxY","WPlq6C_Wtr4","Si9DnOllsOA","nS7QvOX8LVk","Br2EIkwbtmY","O08mx2_xLDQ","0Kq_o-ezxeE","eZN9iOKgYvM","oqgmo62FMO0","XNljTOTjvyo","1bW6USsmR70","PlRCViVRUJo","PDFX2Vl6lKo","nOLl4KDna28","66lguXotwjM","7EDqTWrbqyU","0kCgMJ36dAg","Tpz47Ca_qDo","CwX1am9Uq5o","GwqR1odHnpw","ZoLP53g4E2o","XofNbkTkuP8","fIml_CAF4-s","T2JjObJY_ZM","efnsrLg03e4","TKYrwuxLZtY","TxmnxhACJPU","_FDaiuH2UcI","evdByn5O7nI","KWp7tdhjxaU","udc1kQvTblQ","MCJ7_NPtNEo","9JqN-3EvP88","CednBwoop-0","2H4yiIx9R-g","QtYm5CA1CMw","xc1u9X4HFAE","Saaaqqv2Szc","52ltv1j43Ig","OxFnrPQmzyk","sm5ARfxfVAo","n0qcc33c93Y","UVWKtXDvr04","vcgMiyv05Tc","jSYg0D4luIE","A4F414LFY6I","Qq2bfXngwbQ","XMk8KQEty4c","aW6q7P9u7FI","b1bWJkrT6r4","FbKwbh3pC-g","kJRDEcfXETM","Y-gHy0Hiq84","6Fk_hu7M9Ak","iIpwbbkFi-8","pP1MCw7645c","2c3RXqzOGtU","IK8RcnZWzMQ","wAaZcU8f4Ig","XIIxKjbF0Ns","i5Q42ZXrykk","lrKAx_UKGZ0","x3xvCY_Pedw","jbiFcPhccu8","1gCOlmY-YKQ","Awh8B_6fOrA","tCe18SYVOt0","fBWB6YTrdjM","xOGaFCgVGtw","iFyIGHh5Fa8","7tYycv0P3BE","fNphU2LH_as","BcqC8LSoBws","0xdfgUYlNfQ","eKoD2CRr_KA","T41nXIxL_tE","oW5a-FnZfko","_woNBiIyOKI","P7bbC3z3b5U","sYJdL31iedY","4z5OKFieFog","vJDw4tB78ug","YkdCHN4c_CQ","3Ph13QzfQHU","hnAqgll3Kjo","xOYc1iXC1ww","YU1lzC0nnhw","X26TYPz0NqA","0q9chV8Jmfk","K32l-6TFpOo","Aj_cwiTJjRM","jSVms94NVSY","NeoXV5-x_Cw","NM99mTEHdZY","RQw89PhD56g","JrBRwfSWyaM","NeiqMuky3oo","9RHFFeQ2tu4","V_48Rn6hoR0","RxY1Zmkln3A","b6kQFXimEl8","a7CTo2-bAA8","kFtMl-uipA8","J_ztRihCmuQ","j8usuRuPZiQ","DuUy2k0Xm0w","fciOlbI3pGE","YSMQwM0tYkI","Ij9JNC0UGEY","u8hezMx3wfg","FIMiN-KHN48","46IJi0Tv0_w","3TvWjpYAy7U","cUSUoLC_BVY","7ycnjVnqKgg","le9yZeczUss","htBsb6m8tIs","8z1FHAW3OeY","SjRPyrZsJ44","prBaZzYmQrI","OiHWBy4g4AQ","wBxmTZAqAoI","j1RepjjWTqY","vNy_7tXTgVc","OZCfqhRgJ0Q","ULrKvcw8m0w","zNXxd3yYDaM","K8KCPw9kYpo","BRaGuQR6L5c","92u-RqtdB2Y","7v4oh-ovKq4","IpT5SBg1Mmk","TwDOa-lvizM","nwfEBABNyQQ","_U389fISBXg","7gJ8BY0YEmw","3TB84pUkJXo","I_3mCDJ_iWc","PyLgnymvtRo","ebLYgVPDORM","gwHtVWUoJyw","V_tDiEwjAEU","WHCehNHDbNo","9S0ONyRctyE","-N43K6oadp4","D1sZ_vwqwcE","0I4ltgqamzs","1vmnMy3Jbzo","d_0yuWbh8mw","WKZ3AjEmSSU","Rxm86ebL2Rw","8XssNq5f7Ac","XGx9sgw4wMI","COfoXcUmmmA","pex1AeSwF4Y","GVa-tjhcDRQ","RtjS3KN162s","5Z8oYH_bhnA","TGGc9mRhRlI","jxmO4KtIddY","WUn3Zrc0VwE","N-Lfdz9tpvU","EPv8bTYy2Y4","8P6PJ2m6MHM","B-JSMeCmMSw","e1JWr_ayz2E","vZHtjv4oJw8","CyKKyk0g6V8","MwcE_arwT_Q","mK1Va1cHmhQ","cxwV0KJjQnA","7XLnKm7LuoE","B4Y36tq-8C0","NXS0Rk5sliU","jREZtQU0ktk","kfoJUeyMsOE","8avokW7jya4","kJHijvIpUbk","R_P-EOUpYtI","IRubT-Il1ow","R8o3l9RsbJg","p5jjj7BvSSo","frj-s33lpwg","tAMNzmoMTIU","wRMXTvsCBwQ","uPw7cS-S4aA","NtjnO-ge6s0","CjG92cKFKc8","4Six8gabMVg","5tV37E7xie4","yEG2VTHS9yg","S7mox7xxhGE","hefh9dFnChY","GGxnCQ2w3sA","KeYGph03Ma0","bisN6i93spQ","9X4fYP9bqqw","Y1MkJOe3w7U","zF7SX6QWMbo","LqfBnE1cxDU","vAyCl4IHIz8","bW_-PQkCTzw","nUCoYcxNMBE","KsY7Q1bhCxU","a49p48EI3r4","ZF4jq72LPeo","J8NUoavtgXY","eZ8S1HSeakc","KViNLeLHb24","MZwVnT_U39Y","ggFIQMAp7SU","YoZHqykR04k","NtOiUpo3S-I","1zE3SWEkOGo","-Q7skb6Prvs","trraz2SRmYQ","c2hWTDB_hWM","C2Efid1Jtmk","zKgDnjAgzQ4","94hC9too8xs","ZQyv7fc30eI","eRHMeuIR_2I","z2EcSLaK15w","46rPYiNvI7U","VcVOGibiHOY","sJL7MAiMP2A","lrC7oLPpxUw","caLcG23HIBA","XOSs1l9pgms","Pf1DO_SIHTM","Djw12KoW5q0","EZddyk07UtM","g5nEmPAlgMU","DgPaCWJL7XI","zrWrNRaFKu8","EEzVbqmCz_w","QJyL-zkS7DI","5pw5W2oIEzA","nNjJ4n4ntU0","Hj7huS_oHAc","EG8CeZGBUD0","rfGw5jOl2sQ","gx4rsZkCCss","EHNsLGi2VdE","TDUQ4-DAEUY","koAtzvSBvfE","m5nY-6cxB0E","LsuWX5TMF4w","MPkLz2quNOw","rKPNMq8cfwk","TPgyR3wdok0","XqjWidsMhvM","NYVg-V8-7q0","anc35Md3xWQ","0uCdJKVjPmQ","UnWMHmFANEU","Pm6_QJcU2tg","a9waD_rdWNU","bYR31F8bRro","00F3w0y38nI","FLmQT35AaUs","cuoIvNFUY7I","4I995zLCopk","m2qRaEO7Uok","1wl5BbUg05M","IbpTgPMOfcs","twZODj0yERs","0xWTCLwRMd0","RILGZ9jqyAY","Otd15iyp51E","Qdd-SSTunXk","Y7O0rBGSqjI","hyfmnQHShaM","o46PiLC9If4","qYqjOcsXjMI","eJUJTGUH0mc","mred0h3jdVM","xPTS3Qtbh8s","k_wjL6Dgut8","Fyw0Ypg92Lk","rcXh7SIB76A","7f44H2aFUB4","_lzmhTchVGM","22mYhSEsRqw","3aOKTCbKuC8","-WfsLHPHCkc","IPpz1qqzSLA","CJDpjMIK5YI","hyp8CK04E0g","zihlnhsmqDk","Lrq1ZTjqUHs","1LAiZKOw5jk","E-YYdJfHtCE","rzEqlhWQADc","wrw9kDwrXMU","X6KtV3P0XmI","xbQeO_t6KF0","Q64xPR6Y5ZI","2EXslhx989M","DuIGk84raFU","J4NPQZ8yGag","vS1MDk9Fhbc","yXJl5Gf05zg","i6KLCSEjb78","FKpA8ILL7Go","C_3d6GntKbk","gRRcyvdO1_w","roZb1sPIbSM","KX8bZIlUEOg","-sZe_oEuZxs","-1_ypXZ9kqY","Aztiwn17vpE","hjthQW86O4M","BRWK5I49jOs","cqkdnO-pZ1Q","ZXkJbNQDmRY","6uesIRHe3fE","Bih6JQzbFY0","ZEH6x_I6_ic","6z7c1u5j7RQ","DEzuZlUB3zM","ocKxmL32pHU","gxCihaylF5k","tQ4bok2GFpE","Ub55pETG718","OY86LGCMRQ4","YJqu8HYsjNg","4D25rEAJCBI","6XSinSw9YdY","1auoI5CPm1I","uE543tmqLOQ","4UZKb8wuSg4","Oei7SYOYodI","dwZcuwfiCjE","nDaLiMYcP_w","6SpqX8g4Kpk","JHlxtDlvrHQ","mn7wYW2APGA","oi67kVUzuws","2gk7EkZcVoQ","QTrno6aTcQc","dR4pecTKBKo","qqE8hbV5zvY","fboZFwmv6DE","GozdgqO8yv8","gabuAyRAx-I","WuSPRu4lzag","XIfNcsnjXQw","U-XcSCbAhrs","auh79JH2deQ","di_WnHkUW30","zZLMNVpbA3k","tV_N2QI9Mh8","rJIZUNESPcA","YbdHHzUCzAk","4j2srunofPI","0T9dDF4JThU","avFiPTYLLIg","d0_w-dok75Y","iw9WGECCF_w","geGziPUQD2U","I0Ju0uIT004","t1xOZyBc2Ck","CqaAs_3azSs","oboSbcHBtpg","aPpZex_QxGE","pyCkhPTU13w","bHk4-GMsS78","0YwhEgflFRM","JkWs1cFngWw","NQrJ649nwwc","YehkWOl4CDk","1ykDNxDl7Zs","V35XNBedkhM","_FQdSBJuca4","QEIOF7WfkZk","uOJFhKriSH8","5N4GaAxyEhQ","cSzBG8awAW0","f8pn13UZyCA","VGfayDKveAs","vpsBWPxLW8Q","nq_E8kva_gM","KDP7z6__IMw","qVilZiHkQw0","xTj1rA7gSaQ","2YHQEjsEJMQ","gCoD0mmt0KA","j7JzvdJhuBo","EevqLRiyykc","GIs7YgU6XG8","DVKEhce6Hqw","ZiHaMnlkGx8","r02-GRjoA5s","tmzWJhcPbCo","HfrcAuF2QDo","8IMTKQ5YoTw","jZ7Pk3rBx4U","hWVJC6wiHEs","p_4NM9yOq0A","y7Ulph8799I","0IT9o2xzv3Y","lh-IxlSgdwk","tB50GkEPHbs","Nfm5XdQU2gA","VPFll9xiNcE","8RrVyR-0BcU","_AN5aTzclbQ","f6oQxfzFaRM","vqlLReoIQsw","vykhXVCSmz0","JDE0459Ba_k","ntlpTad3PLM","wLwJj-EVw2g","1Y2mNfE8pdU","0nqqCAqVgZE","Yuz6yTYHqoo","UjlTEB63iqU","rWp2uGH0z3U","AsNCIH2sqwY","6mTeFW6p9fE","JT5l8uP2EOQ","WIA8Jt3aNVs","R1uT9huLwCQ","cM-jmM3Q1o8","Pup28REM6c8","FIjxQKHZPvY","_Hs4lT-xbLI","5rEXy3KMh1g","CV-Do6PoT58","SNtb09c4K8w","FTVHW3mwmKQ","k3mFGQRfkzI","-DTV8ZbIP5k","W_ZE_HCGxds","_KHRGBCP7zA","9Z7uKY2tAac","4964HYZG204","Ou0Ub24r7RM","QmAJbUaE5fs","vIOrsJJTq_E","2c9Kp3PZWWU","goegShPV3i0","8eohNsFWCLU","ZgnClGC8-WQ","NBICGVAZgx8","X-iHAMLXZ1M","1MWUgBBBqsA","WrcIykW0mq8","UfcAVejslrU","N96Z16Rx5XI","-ysJN4YUKHM","m7EG62ISEHc","4bCIZw7ZXBQ","6y5nm3Ys34E","rln4xYfyjI8","XOic6pVAN30","NlgkgTURZxo","S7gZfdzEosk","TOqXonsdB1E","nWx2TAjMcQU","KvoqHgNFveM","3xx5ui2YQxo","jvGB3lVEnfM","b5ZH18X1YOQ","kYdidkfswkY","FvvWzUCF8Ao","S0Q4gqBUs7c","1u5nc1C33N0","8NGa3wIyWoY","TT1xNzbg_Jo","pvjA5qHXvQ8","mbJR56B4Qik","UHvYCQTkOEo","3yiVDrX6vG0","PNfIyWfxbjE","aEAdoLpWrI4","qiCUgd7wJOA","mNP1IJWZBtM","nurMSfSbPhk","5r5-THZLI1M","XeFylPXyIJw","8_h94q4Tja8","3amDfEc9JM4","Wcrtfj_Lh8g","_7wKjTf_RlI","4hVhMaGUneE","6IgykkU5z-A","9uxs52-D0Ro","q7OYTF1kJMQ","RHxHJ9lXYAY","QMbdytgLpy4","jBXsf6fCeNk","NwYHkC06600","ebzEEEdjHj0","SMPAUiBZk2w","D6mkplLZL84","1isRH9E9WAE","uVXEW_FvBbs","rKeMJDxDtCY","s5Yh2zJFXGg","vKqEkJ5nkZc","yS6GLk25jCI","blO1zYU0Vqg","lF0rXnrdGuE","VwZG_jY9gFs","zXMYKHHPCes","f5x8RX4XbqM","ikl16iLeHIY","rIVGtd5kjsI","s79pNrycneQ","CuENvQsheyo","Nk7YNnJJG_o","RG_TfS7ZopY","NLislFGjfnI","9ca7xSFne9A","00Q0YmCRa1Y","7rP-9axxbO4","GfYOOuuTHmc","-Ymrw0pRSRw","MLP54KOE67w","ls8-NwffvgE","QRVtFgDFhbw","Ik5WXjhX1K8","cPzs9pmk1W0","iOwOUvdmsn8","sOxvcCGHBj4","ycNATMlXxzA","iOB-cSgzWe4","XZcBD9snjlk","Am6XTjWDtOE","mWul7e4zy3Y","iOnnV7uhXlw","4PDEyrk22mk","PpNfOqbt0a8","PBlmUZjqvx4","NIhWIsYim2w","czGjnLiQOVg","GTuKvBoA5AY","k4WKH74w5Pw","FI2ivcTN0Xk","LChjribbj6w","XO4xNQ-pWPQ","r-RfH8aKbws","u8w9mS_zsS0","VzmEIbUARpM","g7Px2wK10jg","1AbLstAAbcM","swYdKF1MpWg","EtI7f3Rwqkw","m6gFfsdIDU0","1BiRxOEh7PM","oE1bUiQcQUM","Z3cTGe-prWY"],
      current_video:'ssFAkvLdH4g',
      count:0,
      width : window.innerWidth*.98,
      height : window.innerHeight*.95
    }
  }


  changeVideoId(){
      var random_count = _.random(this.state.data.length)
      this.setState({
        current_video : this.state.data[random_count]
      });
      this.state.count+=1;

      console.log(' this.state.current_video',this.state.data.length,random_count, this.state.current_video);
      return this.state.current_video;
    }

    componentWillMount(){
      this.changeVideoId()
    }

  render() {
  const opts = {
      height: this.state.height,
      width: this.state.width,
      // height: "100%",
      // width: "100%",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1  // commented for pause on open
      }
    

    };
    return (
      <div className='row'>
        <div className='col-sm-12 col-centered'>
            <button type="button" onClick={() => this.changeVideoId()}  >next trip</button>
        </div>

        <div className='col-sm-12'>
            <YouTube
              videoId={this.state.current_video}
              opts={opts}
              onPause={() => console.log('inside youyubr')}
              // onReady={this._onReady}
            />
        </div>
      </div>

    );
  }


}


 export default Video;