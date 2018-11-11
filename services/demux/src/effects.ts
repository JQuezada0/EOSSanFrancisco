const logOfferAccept = (_: any, payload: any) => {
  console.info("Offer Accepted ===> Payload:\n", payload)
}

const effects = [
  {
    actionType: "eoslocal::accept_offer",
    effect: logOfferAccept,
  },
]

export { effects }
