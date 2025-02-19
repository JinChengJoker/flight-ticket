const ROUTES = [
  {
    label: "上海-约翰内斯堡",
    value: "sha_jnb",
    flights: [
      [SHA_ADD_ET685, ADD_JNB_ET809],
      [JNB_ADD_ET808, ADD_SHA_ET684],
    ],
    co2_emissions: '1458.33',
  },
  {
    label: "上海-德班",
    value: "sha_dur",
    flights: [
      [SHA_ADD_ET685, ADD_JNB_ET809, JNB_DUR_ET1820],
      [DUR_JNB_4Z554, JNB_ADD_ET808, ADD_SHA_ET684],
    ],
    co2_emissions: '1733.82',
  },
  {
    label: "深圳-约翰内斯堡",
    value: "szx_jnb",
    flights: [
      [SZX_JNB_CA867],
      [JNB_SZX_CA868],
    ],
    co2_emissions: '1040.53',
  },
  {
    label: "深圳-德班",
    value: "szx_dur",
    flights: [
      [SZX_JNB_CA867, JNB_DUR_FA661],
      [DUR_JNB_FA411, JNB_SZX_CA868],
    ],
    co2_emissions: '1222.54',
  },
  {
    label: "约翰内斯堡-上海",
    value: "jnb_sha",
    flights: [
      [JNB_ADD_ET808, ADD_SHA_ET684],
      [SHA_ADD_ET685, ADD_JNB_ET809],
    ],
    co2_emissions: '1458.33',
  },
  {
    label: "约翰内斯堡-深圳",
    value: "jnb_szx",
    flights: [
      [JNB_SZX_CA868],
      [SZX_JNB_CA867],
    ],
    co2_emissions: '1040.53',
  },
  {
    label: "德班-上海",
    value: "dur_sha",
    flights: [
      [DUR_JNB_4Z554, JNB_ADD_ET808, ADD_SHA_ET684],
      [SHA_ADD_ET685, ADD_JNB_ET809, JNB_DUR_ET1820],
    ],
    co2_emissions: '1733.82',
  },
  {
    label: "德班-深圳",
    value: "dur_szx",
    flights: [
      [DUR_JNB_FA411, JNB_SZX_CA868],
      [SZX_JNB_CA867, JNB_DUR_FA661],
    ],
    co2_emissions: '1222.54',
  },
  {
    label: "拉各斯-约翰内斯堡",
    value: "los_jnb",
    flights: [
      [LOS_ADD_ET900, ADD_JNB_ET859],
      [JNB_ADD_ET858, ADD_LOS_ET901],
    ],
    co2_emissions: '1323.47',
  },
];

