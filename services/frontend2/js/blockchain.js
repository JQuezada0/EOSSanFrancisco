$("#tradebutton").click(tradeAsset)

function tradeAsset() {
  const keys = [
    "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
    "5KacG2v3XYrjmxazgriHVo1updD7PKXJMWzcaQmBMMXE9Y69aW9",
    "5Hy5kAujsv4fVWa9xv784Pgy4eLgrrDf3trP49J3FvDpKRfzaNn",
    "5K4MHQN7sPdEURaxzjCnbynUwkEKRJzs8zVUf24ofaFiZNK815J",
    "5JHCQDi7jsbnQnWdyxteRjT2DdNZHePiEG1DTaPQQDDP2X6aor6",
  ]
  const eos = Eos({
    httpEndpoint: "http://localhost:8888",
    chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
    keyProvider: keys,
  })

  console.log(eos)

  /** @return {Promise} */
  eos
    .transaction(
      {
        // ...headers,
        actions: [
          {
            account: "eoslocal",
            name: "acceptoffer",
            authorization: [
              {
                actor: "eoslocalusra",
                permission: "active",
              },
            ],
            data: {
              offer_id: "1",
              accepting_user_id: "1",
              accepting_user_name: "eoslocalusra",
            },
          },
        ],
      }
      // options -- example: {broadcast: false}
    )
    .then(res => {
      console.log("RESULT")
    })
}
