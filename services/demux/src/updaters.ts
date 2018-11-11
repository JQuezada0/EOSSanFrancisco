import { BlockInfo } from "demux"

const storeGreetingMessage = async (db: any, payload: any, blockInfo: BlockInfo) => {
  console.info("\n\n==== Greeting Updater ====")
  console.info("\n\nUpdater Payload >>> \n", payload)
  console.info("\n\nUpdater Block Info >>> \n", blockInfo)

  const data = {
    greeting: payload.data.msg,
    created_block: blockInfo.blockNumber,
    created_trx: payload.transactionId,
    created_at: blockInfo.timestamp,
    created_eosacc: payload.data.user,
  }

  console.info("DB Data to Insert >>> ", data)

  const res = await db.greetings.insert(data)

  console.info("DB State Result >>> ", res)
}

const acceptOffer = async (db: any, payload: any, blockInfo: BlockInfo) => {
  console.info("\n\n==== Greeting Updater ====")
  console.info("\n\nUpdater Payload >>> \n", payload)
  console.info("\n\nUpdater Block Info >>> \n", blockInfo)

  const offer = await db.offers.find({ id: payload.data.offer_id })

  const offeredAsset = await db.assets.update({ id: offer.offered_asset_id }, { owner_id: payload.data.accepting_user_id })
  const requestedAsset = await db.assets.update({ id: offer.requested_asset_id }, { owner_id: offer.offered_by_id })
  const deletedOffer = await db.assets.offers.destroy({ id: offer.id })

  console.info("DB Updated ownership of offered >>> ", offeredAsset)

  console.info("DB Updated ownership of requested >>> ", requestedAsset)

  console.info("DB Deleted offer >>> ", deletedOffer)
}

const updaters = [
  {
    actionType: "eoslocal::accept_offer",
    updater: acceptOffer,
  },
]

export { updaters }
