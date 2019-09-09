import React from 'react'
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from 'react-native-svg'

const AchievementBG = props => (
  <Svg width="303px" height="126px" viewBox="0 0 303 126" {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <Stop stopColor="#8DC3FA" offset="0%" />
        <Stop stopColor="#82B5FF" offset="100%" />
      </LinearGradient>
    </Defs>
    <G
      id="UI-Design"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <G
        id="Achievement---Detail"
        transform="translate(-30.000000, -143.000000)"
      >
        <G id="AchievementBG" transform="translate(-3632.000000, -2435.000000)">
          <Path
            d="M3662,2653 C3687.32023,2669.15859 3705.65356,2679.65859 3717,2684.5 C3755.0262,2700.7254 3786.59356,2704 3812,2704 C3834.68653,2704 3868.62428,2701.43731 3901.5,2688.5 C3915.11336,2683.14284 3935.4467,2671.30951 3962.5,2653"
            id="Line"
            fill="#82B5FF"
          />
          <Path
            d="M3681.22914,2578 L3942.77086,2578 C3949.45725,2578 3951.8819,2578.69619 3954.32634,2580.0035 C3956.77079,2581.3108 3958.6892,2583.22921 3959.9965,2585.67366 C3961.30381,2588.1181 3962,2590.54275 3962,2597.22914 L3962,2653 L3962,2653 L3662,2653 L3662,2597.22914 C3662,2590.54275 3662.69619,2588.1181 3664.0035,2585.67366 C3665.3108,2583.22921 3667.22921,2581.3108 3669.67366,2580.0035 C3672.1181,2578.69619 3674.54275,2578 3681.22914,2578 Z"
            id="Rectangle"
            fill="url(#linearGradient-1)"
          />
          <Path
            d="M3687.97058,2600.31318 C3687.71953,2600.31318 3687.55217,2600.14659 3687.3848,2599.98001 C3687.30112,2599.64684 3687.3848,2599.31366 3687.71953,2599.23037 C3688.30532,2598.98049 3688.80742,2598.48074 3689.05847,2597.89768 C3689.30952,2597.31463 3689.30952,2596.64829 3689.05847,2596.06524 C3688.97479,2595.89865 3688.97479,2595.81536 3688.8911,2595.64878 C3688.72374,2595.3989 3688.64005,2595.06572 3688.55637,2594.73255 C3688.389,2594.06621 3688.55637,2593.39987 3688.8911,2592.73352 C3689.14215,2592.23376 3689.56057,2591.8173 3690.06267,2591.31754 C3690.31372,2591.06766 3690.73214,2591.15096 3690.89951,2591.40084 C3691.15056,2591.65071 3691.06687,2592.06718 3690.81582,2592.23376 C3690.39741,2592.65023 3690.06267,2592.9834 3689.89531,2593.31657 C3689.64425,2593.73304 3689.56057,2594.1495 3689.72794,2594.48267 C3689.81162,2594.73255 3689.89531,2594.89914 3689.97899,2595.14902 C3690.06267,2595.3156 3690.14636,2595.48219 3690.23004,2595.64878 C3690.56477,2596.565 3690.56477,2597.48122 3690.14636,2598.39744 C3689.81162,2599.23037 3689.05847,2599.98001 3688.22163,2600.31318 C3688.13795,2600.31318 3688.05427,2600.31318 3687.97058,2600.31318 Z"
            id="Path"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
          />
          <Path
            d="M3694.33053,2592.31706 C3694.58158,2592.31706 3694.83263,2592.40035 3694.91632,2592.65023 C3695.08368,2592.90011 3695,2593.31657 3694.66527,2593.48316 C3694.07948,2593.81633 3693.66106,2594.39938 3693.4937,2594.98243 C3693.32633,2595.64878 3693.41001,2596.31512 3693.66106,2596.89817 C3693.74475,2597.06476 3693.82843,2597.14805 3693.91211,2597.31463 C3694.07948,2597.56451 3694.24685,2597.89768 3694.41422,2598.23086 C3694.66527,2598.8972 3694.58158,2599.56354 3694.33053,2600.31318 C3694.07948,2600.81294 3693.74475,2601.3127 3693.24265,2601.89575 C3692.9916,2602.14562 3692.65686,2602.14562 3692.40581,2601.89575 C3692.15476,2601.64587 3692.15476,2601.3127 3692.40581,2601.06282 C3692.82423,2600.64635 3693.07528,2600.22989 3693.24265,2599.89672 C3693.41001,2599.48025 3693.41001,2598.98049 3693.32633,2598.64732 C3693.24265,2598.48074 3693.15896,2598.23086 3692.9916,2597.98098 C3692.90791,2597.81439 3692.82423,2597.64781 3692.65686,2597.48122 C3692.23844,2596.64829 3692.15476,2595.64878 3692.40581,2594.73255 C3692.65686,2593.81633 3693.32633,2592.9834 3694.16316,2592.56694 C3694.16316,2592.40035 3694.24685,2592.31706 3694.33053,2592.31706 Z"
            id="Path"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
          />
          <Path
            d="M3725.18273,2670.80421 C3726.10325,2671.88702 3726.60535,2673.21971 3726.68903,2674.30252 C3726.77272,2675.46862 3726.27061,2676.8846 3725.09904,2677.46765 C3724.59694,2677.71753 3724.01116,2677.80082 3723.34169,2677.80082 C3722.08644,2677.80082 3721.33329,2677.38435 3720.91487,2676.46813 C3720.58013,2675.7185 3720.58013,2674.71898 3721.16592,2673.96934 C3721.66802,2673.38629 3722.42117,2673.303 3722.92327,2673.71946 C3723.09064,2673.88605 3723.17432,2674.13593 3723.00696,2674.30252 C3722.83959,2674.4691 3722.58854,2674.55239 3722.42117,2674.38581 C3722.17012,2674.21922 3721.83539,2674.4691 3721.83539,2674.4691 C3721.41697,2674.88557 3721.50065,2675.55191 3721.66802,2676.05167 C3721.91907,2676.55142 3722.42117,2676.8013 3723.34169,2676.8846 C3723.92748,2676.8846 3724.34589,2676.8013 3724.68063,2676.63472 C3725.43378,2676.21825 3725.8522,2675.30203 3725.8522,2674.30252 C3725.76851,2673.13641 3725.01536,2671.47056 3723.84379,2670.55433 C3723.17432,2670.05458 3722.50486,2669.88799 3721.83539,2670.05458 C3721.33329,2670.13787 3720.83119,2670.47104 3720.32908,2670.80421 C3719.32488,2671.63714 3718.48805,2672.63666 3718.06963,2673.80276 C3717.65121,2674.96886 3717.73489,2676.30155 3718.40436,2677.55094 C3718.48805,2677.80082 3718.40436,2678.0507 3718.237,2678.13399 C3717.98595,2678.21728 3717.73489,2678.13399 3717.65121,2677.9674 C3716.89806,2676.46813 3716.81438,2674.96886 3717.31648,2673.55288 C3717.73489,2672.30348 3718.65541,2671.05409 3719.82698,2670.13787 C3720.49645,2669.63811 3721.08224,2669.30494 3721.66802,2669.22165 C3722.58854,2668.97177 3723.50906,2669.22165 3724.42958,2669.88799 C3724.59694,2670.13787 3724.93168,2670.47104 3725.18273,2670.80421 Z"
            id="Path"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
          />
          <Circle
            id="Oval"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
            cx={3844}
            cy={2601.16667}
            r={1}
          />
          <Circle
            id="Oval"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
            cx={3846}
            cy={2598.16667}
            r={1}
          />
          <Circle
            id="Oval"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
            cx={3848}
            cy={2601.16667}
            r={1}
          />
          <Path
            d="M3921.82828,2624.58051 C3921.07086,2623.73908 3920.31345,2622.89765 3919.47188,2622.05622 C3920.31345,2621.13065 3921.23918,2620.20507 3921.91243,2619.19535 C3922.08075,2618.94292 3921.99659,2618.52221 3921.74412,2618.35392 C3921.49165,2618.18564 3921.07086,2618.26978 3920.90255,2618.52221 C3920.2293,2619.53193 3919.47188,2620.37336 3918.63031,2621.21479 C3917.8729,2620.4575 3917.11549,2619.61607 3916.27392,2618.85878 C3916.02145,2618.60635 3915.68482,2618.60635 3915.43235,2618.85878 C3915.17988,2619.11121 3915.17988,2619.44778 3915.43235,2619.70021 C3916.18977,2620.4575 3916.94718,2621.21479 3917.70459,2622.05622 C3917.53628,2622.22451 3917.36796,2622.39279 3917.11549,2622.56108 C3916.44224,2623.15008 3915.76898,2623.82323 3915.17988,2624.41223 C3914.92741,2624.66466 3914.92741,2625.00123 3915.17988,2625.25366 L3915.17988,2625.25366 C3915.43235,2625.50609 3915.76898,2625.50609 3916.02145,2625.25366 C3916.61055,2624.58051 3917.2838,2623.99151 3917.95706,2623.40251 C3918.12537,2623.23422 3918.29369,2623.06594 3918.54616,2622.89765 C3919.30357,2623.73908 3920.06098,2624.58051 3920.81839,2625.42195 C3920.81839,2625.42195 3920.81839,2625.42195 3920.81839,2625.42195 C3921.07086,2625.67438 3921.40749,2625.67438 3921.65996,2625.42195 C3921.99659,2625.25366 3921.99659,2624.83294 3921.82828,2624.58051 Z M3735.42078,2616.92349 L3735.33663,2616.50277 C3735.08416,2614.73577 3735,2612.88462 3735,2610.69689 C3735,2609.85546 3735,2608.84575 3735,2607.75188 C3735,2607.66774 3735,2607.49945 3735,2607.41531 C3735,2606.65802 3735,2605.64831 3735.5891,2605.31173 C3735.92573,2605.14345 3736.43067,2605.14345 3736.93561,2605.48002 C3737.86133,2605.98488 3739.03953,2606.82631 3739.71279,2607.83603 C3740.55435,2609.09817 3740.89098,2610.52861 3740.4702,2611.8749 C3739.96526,2613.81019 3738.1138,2616.7552 3735.75741,2616.92349 L3735.42078,2616.92349 Z M3736.1782,2605.98488 C3736.09404,2605.98488 3736.09404,2605.98488 3736.1782,2605.98488 C3736.09404,2605.98488 3736.00988,2606.06902 3735.92573,2606.40559 C3735.84157,2606.74217 3735.84157,2607.07874 3735.84157,2607.41531 C3735.84157,2607.5836 3735.84157,2607.66774 3735.84157,2607.75188 C3735.84157,2608.84575 3735.84157,2609.77132 3735.84157,2610.61275 C3735.84157,2612.54804 3735.92573,2614.31505 3736.1782,2615.91377 C3737.94549,2615.49305 3739.37616,2613.0529 3739.79694,2611.53833 C3740.13357,2610.44447 3739.8811,2609.18232 3739.12369,2608.1726 L3739.12369,2608.1726 C3738.53459,2607.33117 3737.44055,2606.48974 3736.59898,2606.06902 C3736.43067,2606.06902 3736.26235,2605.98488 3736.1782,2605.98488 Z M3765.21232,2587.3051 C3765.21232,2587.3051 3765.21232,2587.3051 3765.21232,2587.3051 C3764.79154,2587.22096 3764.53907,2587.13681 3764.11828,2587.22096 C3764.03412,2587.22096 3763.94997,2587.13681 3763.86581,2587.05267 C3763.86581,2586.96853 3763.94997,2586.88438 3764.03412,2586.80024 C3764.53907,2586.80024 3764.79154,2586.80024 3765.21232,2586.88438 C3765.29648,2586.88438 3765.38063,2587.05267 3765.38063,2587.13681 C3765.38063,2587.22096 3765.29648,2587.3051 3765.21232,2587.3051 Z M3763.61334,2588.81968 C3763.52918,2588.81968 3763.44503,2588.73553 3763.44503,2588.65139 C3763.36087,2588.31482 3763.27671,2587.97824 3763.27671,2587.64167 C3763.27671,2587.55753 3763.36087,2587.47338 3763.44503,2587.47338 C3763.52918,2587.47338 3763.61334,2587.55753 3763.61334,2587.64167 C3763.61334,2587.97824 3763.6975,2588.23067 3763.78165,2588.56725 C3763.78165,2588.65139 3763.78165,2588.81968 3763.61334,2588.81968 C3763.61334,2588.81968 3763.61334,2588.81968 3763.61334,2588.81968 Z M3761.67773,2587.8941 C3761.59357,2587.8941 3761.50942,2587.8941 3761.50942,2587.80996 C3761.42526,2587.72581 3761.42526,2587.55753 3761.50942,2587.55753 C3761.76189,2587.3051 3762.09852,2587.13681 3762.43514,2586.96853 C3762.5193,2586.88438 3762.68761,2586.96853 3762.68761,2587.05267 C3762.77177,2587.13681 3762.68761,2587.3051 3762.60346,2587.3051 C3762.26683,2587.47338 3762.01436,2587.64167 3761.76189,2587.80996 C3761.84605,2587.8941 3761.76189,2587.8941 3761.67773,2587.8941 Z M3762.68761,2586.46367 C3762.60346,2586.46367 3762.5193,2586.37952 3762.5193,2586.37952 C3762.43514,2586.21124 3762.35099,2586.04295 3762.18267,2585.87467 C3762.09852,2585.70638 3762.01436,2585.62224 3762.01436,2585.53809 C3761.9302,2585.45395 3761.9302,2585.28566 3762.01436,2585.28566 C3762.09852,2585.20152 3762.26683,2585.20152 3762.26683,2585.28566 C3762.35099,2585.36981 3762.43514,2585.45395 3762.43514,2585.53809 C3762.60346,2585.79052 3762.77177,2585.95881 3762.85593,2586.12709 C3762.94008,2586.21124 3762.94008,2586.37952 3762.68761,2586.46367 C3762.77177,2586.46367 3762.77177,2586.46367 3762.68761,2586.46367 Z M3763.6975,2586.37952 C3763.61334,2586.37952 3763.61334,2586.37952 3763.52918,2586.37952 C3763.44503,2586.29538 3763.44503,2586.21124 3763.44503,2586.12709 C3763.61334,2585.87467 3763.78165,2585.62224 3763.94997,2585.28566 C3764.03412,2585.20152 3764.11828,2585.11738 3764.20244,2585.20152 C3764.28659,2585.28566 3764.37075,2585.36981 3764.28659,2585.45395 C3764.11828,2585.79052 3763.94997,2586.04295 3763.6975,2586.29538 C3763.78165,2586.37952 3763.78165,2586.37952 3763.6975,2586.37952 Z M3846.17124,2638.12756 C3846.17124,2638.12756 3846.17124,2638.12756 3846.17124,2638.12756 C3845.75046,2637.95928 3845.49799,2637.95928 3845.0772,2637.95928 C3844.99304,2637.95928 3844.90889,2637.87513 3844.82473,2637.79099 C3844.82473,2637.70685 3844.90889,2637.6227 3844.99304,2637.53856 C3845.49799,2637.53856 3845.75046,2637.53856 3846.17124,2637.6227 C3846.2554,2637.6227 3846.33955,2637.79099 3846.33955,2637.87513 C3846.33955,2638.04342 3846.2554,2638.12756 3846.17124,2638.12756 Z M3844.57226,2639.64214 C3844.4881,2639.64214 3844.40395,2639.558 3844.40395,2639.558 C3844.23563,2639.22142 3844.23563,2638.88485 3844.23563,2638.54828 C3844.23563,2638.46413 3844.31979,2638.37999 3844.40395,2638.37999 C3844.4881,2638.37999 3844.57226,2638.46413 3844.57226,2638.54828 C3844.57226,2638.88485 3844.65642,2639.13728 3844.74057,2639.47385 C3844.74057,2639.47385 3844.74057,2639.558 3844.57226,2639.64214 C3844.57226,2639.64214 3844.57226,2639.64214 3844.57226,2639.64214 Z M3842.63665,2638.63242 C3842.55249,2638.63242 3842.55249,2638.63242 3842.46834,2638.54828 C3842.38418,2638.46413 3842.38418,2638.29585 3842.46834,2638.29585 C3842.72081,2638.04342 3843.05744,2637.87513 3843.39406,2637.70685 C3843.47822,2637.6227 3843.64653,2637.70685 3843.64653,2637.79099 C3843.64653,2637.87513 3843.64653,2638.04342 3843.56238,2638.04342 C3843.22575,2638.2117 3842.97328,2638.37999 3842.72081,2638.54828 C3842.72081,2638.63242 3842.72081,2638.63242 3842.63665,2638.63242 Z M3843.64653,2637.20199 C3843.56238,2637.20199 3843.47822,2637.11784 3843.47822,2637.11784 C3843.39406,2636.94956 3843.30991,2636.78127 3843.14159,2636.61299 C3843.05744,2636.52884 3843.05744,2636.4447 3842.97328,2636.36056 C3842.88912,2636.27641 3842.88912,2636.10813 3842.97328,2636.10813 C3843.05744,2636.02398 3843.22575,2636.02398 3843.22575,2636.10813 C3843.30991,2636.19227 3843.30991,2636.27641 3843.39406,2636.36056 C3843.56238,2636.61299 3843.73069,2636.78127 3843.81485,2636.94956 C3843.899,2637.0337 3843.81485,2637.20199 3843.64653,2637.20199 C3843.73069,2637.20199 3843.73069,2637.20199 3843.64653,2637.20199 Z M3844.65642,2637.20199 C3844.57226,2637.20199 3844.57226,2637.20199 3844.57226,2637.20199 C3844.4881,2637.11784 3844.4881,2637.0337 3844.4881,2636.94956 C3844.65642,2636.69713 3844.82473,2636.4447 3844.99304,2636.10813 C3845.0772,2636.02398 3845.16136,2635.93984 3845.24551,2636.02398 C3845.32967,2636.10813 3845.41383,2636.19227 3845.32967,2636.27641 C3845.16136,2636.61299 3844.99304,2636.86541 3844.74057,2637.20199 C3844.74057,2637.11784 3844.74057,2637.20199 3844.65642,2637.20199 Z M3893.55156,2668.16667 C3893.29909,2668.16667 3893.13078,2668.16667 3892.87831,2668.08252 C3891.5318,2667.66181 3890.26945,2666.06309 3889.93282,2664.88508 C3889.84866,2664.63265 3889.84866,2664.46437 3889.7645,2664.21194 C3888.50215,2664.7168 3887.32396,2665.8948 3887.32396,2667.49352 C3887.32396,2667.74595 3887.15564,2667.91424 3886.90317,2667.91424 L3886.90317,2667.91424 C3886.6507,2667.91424 3886.48239,2667.74595 3886.48239,2667.49352 C3886.48239,2666.39966 3886.81901,2665.47409 3887.57643,2664.63265 C3888.16552,2663.95951 3888.92294,2663.53879 3889.7645,2663.20222 C3889.84866,2662.1925 3890.26945,2661.18279 3890.9427,2660.4255 C3892.03674,2659.24749 3893.80403,2658.99506 3895.2347,2658.82678 L3895.31886,2658.82678 C3895.57133,2658.82678 3895.73964,2658.99506 3895.8238,2659.16335 C3895.8238,2659.41578 3895.65549,2659.58407 3895.48717,2659.66821 L3895.40302,2659.66821 C3894.05651,2659.83649 3892.45752,2660.08892 3891.61596,2661.0145 C3891.11101,2661.51936 3890.85854,2662.1925 3890.69023,2662.94979 C3891.95258,2662.78151 3893.46741,2663.11808 3894.56145,2663.87537 C3895.2347,2664.29608 3895.65549,2665.13751 3895.65549,2665.8948 C3895.65549,2666.56795 3895.40302,2667.24109 3894.81392,2667.66181 C3894.39313,2667.99838 3894.05651,2668.16667 3893.55156,2668.16667 Z M3890.60607,2663.95951 C3890.60607,2664.21194 3890.69023,2664.46437 3890.77439,2664.63265 C3891.02686,2665.55823 3892.1209,2666.90452 3893.13078,2667.24109 C3893.55156,2667.40938 3893.97235,2667.32524 3894.22482,2667.07281 C3894.6456,2666.73623 3894.72976,2666.31552 3894.72976,2666.06309 C3894.72976,2665.55823 3894.39313,2665.05337 3893.97235,2664.7168 C3893.13078,2664.1278 3891.70011,2663.79122 3890.60607,2663.95951 Z"
            id="Shape"
            fillOpacity={0.81}
            fill="#FFFFFF"
            fillRule="nonzero"
          />
          <Path
            d="M3782,2636.22914 C3782.41592,2636.05596 3785.90965,2634.8437 3785.99284,2635.01688 C3786.07602,2635.10347 3785.41055,2638.91341 3785.24418,2639 C3785.24418,2639 3782.83184,2637.00844 3782,2636.22914 Z"
            id="Path"
            fill="#B7FF59"
            fillRule="nonzero"
          />
          <Path
            d="M3877.94513,2613.92529 C3877.94513,2613.92529 3877.1194,2612.37356 3876.75242,2611.5977 C3876.75242,2611.51149 3876.66067,2611.42529 3876.66067,2611.33908 C3876.66067,2611.25287 3876.56892,2611.25287 3876.56892,2611.16667 C3876.47717,2611.16667 3876.47717,2611.16667 3876.38543,2611.16667 L3874.09175,2613.14943 L3874.09175,2613.14943 C3874.09175,2613.14943 3874,2613.23563 3874,2613.32184 C3874,2613.40805 3874,2613.40805 3874,2613.49425 C3874,2613.49425 3874.27524,2613.92529 3874.36699,2614.0977 C3874.73398,2614.70115 3875.46795,2616.08046 3875.46795,2616.08046 C3875.46795,2616.16667 3875.5597,2616.16667 3875.5597,2616.16667 C3875.65145,2616.16667 3875.65145,2616.16667 3875.65145,2616.08046 C3875.65145,2616.08046 3875.92669,2615.64943 3876.11018,2615.47701 C3876.38543,2615.21839 3876.66067,2614.95977 3876.93591,2614.70115 C3877.1194,2614.52874 3877.21115,2614.44253 3877.3029,2614.44253 C3877.39465,2614.35632 3877.48639,2614.35632 3877.76163,2614.0977 C3878.03688,2614.0977 3878.03688,2614.01149 3877.94513,2613.92529 Z"
            id="Path"
            fill="#B7FF59"
            fillRule="nonzero"
          />
          <Path
            d="M3711,2638.09481 C3711.15686,2637.61577 3713.11765,2634.16667 3713.27451,2634.16667 C3713.43137,2634.26248 3715,2637.999 3715,2638.09481 C3714.92157,2638.19062 3712.01961,2638.19062 3711,2638.09481 Z"
            id="Path"
            fill="#FFB28F"
            fillRule="nonzero"
          />
          <Path
            d="M3875.72727,2651.41667 C3875.72727,2651.41667 3874.54545,2650.16667 3874.09091,2649.5 C3874.09091,2649.41667 3874,2649.33333 3874,2649.25 C3874,2649.16667 3873.90909,2649.16667 3873.90909,2649.16667 C3873.81818,2649.16667 3873.81818,2649.16667 3873.81818,2649.25 L3872,2651.58333 L3872,2651.58333 C3872,2651.58333 3872,2651.66667 3872,2651.75 C3872,2651.83333 3872,2651.83333 3872.09091,2651.91667 C3872.09091,2651.91667 3872.36364,2652.25 3872.54545,2652.41667 C3873.09091,2652.91667 3874,2654.08333 3874.09091,2654.08333 C3874.09091,2654.16667 3874.18182,2654.16667 3874.27273,2654.16667 C3874.36364,2654.16667 3874.36364,2654.16667 3874.36364,2654.08333 C3874.36364,2654.08333 3874.54545,2653.66667 3874.72727,2653.41667 C3874.90909,2653.08333 3875.09091,2652.83333 3875.36364,2652.58333 C3875.54545,2652.33333 3875.54545,2652.33333 3875.63636,2652.25 C3875.72727,2652.16667 3875.81818,2652.16667 3876,2651.91667 C3875.81818,2651.58333 3875.81818,2651.5 3875.72727,2651.41667 Z"
            id="Path"
            fill="#FFB28F"
            fillRule="nonzero"
          />
          <Path
            d="M3799.06383,2605.16667 L3799.06383,2605.16667 C3799.14894,2605.16667 3799.23404,2605.16667 3799.31915,2605.08333 C3799.31915,2605.08333 3799.31915,2605.08333 3799.31915,2605 C3799.31915,2604.75 3799.74468,2603 3800,2601.91667 C3800,2601.83333 3800,2601.83333 3800,2601.83333 C3800,2601.75 3799.91489,2601.75 3799.91489,2601.75 C3799.91489,2601.75 3799.14894,2601.58333 3798.97872,2601.58333 L3796.85106,2601.16667 C3796.76596,2601.16667 3796.76596,2601.16667 3796.68085,2601.16667 C3796.68085,2601.16667 3796.59574,2601.25 3796.59574,2601.25 L3796.59574,2601.25 C3796.42553,2602.25 3796.25532,2603.33333 3796,2604.25 C3796,2604.33333 3796,2604.33333 3796,2604.41667 C3796,2604.5 3796.08511,2604.5 3796.08511,2604.5 C3797.02128,2604.75 3798.12766,2605 3799.06383,2605.16667 Z"
            id="Path"
            fill="#FFB28F"
            fillRule="nonzero"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default AchievementBG;