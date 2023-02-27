export const FlowData = [
  {
    flow_id: 1,
    flow_name: "",
    flow_list: [
      {
        flow_order: 1,
        work_id: 1,
        work_name: "실시간",
        item_id: 3,
        item_name: "파티션(경비)",
        properties: {
          ip: "127.0.0.1",
          port: "48030",
        },
      },
      {
        flow_order: 2,
        work_id: 1,
        work_name: "실시간",
        item_id: 3,
        item_name: "파티션(경비)",
        properties: {
          regx: "{EventTime: Time}",
        },
      },
      {
        flow_order: 3,
        work_id: 1,
        work_name: "실시간",
        item_id: 3,
        item_name: "파티션(경비)",
        properties: {
          url: "http://127.0.0.1:48035",
          method: "POST",
        },
      },
    ],
  },
];
