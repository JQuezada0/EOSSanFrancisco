#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include "sneakers.cpp"

using namespace eosio;
using namespace std;

CONTRACT eoslocal : public eosio::contract {

public:
  using contract::contract;

  eoslocal(name receiver, name code, datastream<const char*> ds) : contract(receiver, code, ds) {}

  ACTION init() {

    assets_table v_assets(_code, _code.value);
    offers_table v_offers(_code, _code.value);
    users_table v_users(_code, _code.value);

    int x;

    sneakers assets;

    for (x = 0; x < sizeof(assets.sneakerList); x++) {
      sneaker asset = assets.sneakerList[x];
      v_assets.emplace(get_self(), [&](auto& newAsset){
        newAsset.id = asset.id;
        newAsset.owner_id = asset.owner_id;
        newAsset.display_name = asset.display_name;
        newAsset.subtitle = asset.subtitle;
      });
    }

    v_users.emplace(get_self(), [&](auto& user){
      user.id = 1;
      user.eos_account = "eoslocalusra"_n;
      user.display_name = "Hassan K. Bazzi";
    });

    v_users.emplace(get_self(), [&](auto& user){
      user.id = 2;
      user.eos_account = "eoslocalusrb"_n;
      user.display_name = "Johnil Quezada";
    });

    v_offers.emplace(get_self(), [&](auto& offer){
      offer.id = 1;
      offer.requested_asset_id = 1;
      offer.offered_asset_id = 11;
      offer.offered_dollar_amount = 150;
      offer.offered_by_id = 2;
    });
  }

  ACTION acceptoffer(uint64_t offer_id, uint64_t accepting_user_id, name accepting_user_name) {
    require_auth(accepting_user_name);

    offers_table v_offers(_code, _code.value);
    assets_table v_assets(_code, _code.value);

    offers_table_struct offerBeingAccepted;

    for (auto& offer: v_offers) {
      if (offer.id == offer_id) {
        offerBeingAccepted = offer;
        break;
      }
    }

    auto updateRequestedAssetItr = v_assets.find(offerBeingAccepted.requested_asset_id);
    auto updateOfferedAssetItr = v_assets.find(offerBeingAccepted.offered_asset_id);
    auto offerItr = v_offers.find(offer_id);

    // Requested Asset to bidder
    if (updateRequestedAssetItr != v_assets.end()) {
      v_assets.modify(updateRequestedAssetItr, get_self(), [&](auto &asset) {
        asset.owner_id = offerBeingAccepted.offered_by_id;
      });
    }

    // Offered Asset to seller
    if (updateOfferedAssetItr != v_assets.end()) {
      v_assets.modify(updateOfferedAssetItr, get_self(), [&](auto &asset) {
        asset.owner_id = accepting_user_id;
      });
    }

    // now delete the offer
    if (offerItr != v_offers.end()) {
      v_offers.erase(offerItr);
    }
  }

private:
  TABLE users_table_struct {
    uint64_t    id;
    name        eos_account;
    string display_name;

    uint64_t primary_key() const { return id; };
    name by_eos_account() const { return eos_account; };
  };

  typedef eosio::multi_index<"users"_n, users_table_struct> users_table;

  TABLE assets_table_struct {
    uint64_t    id;
    uint64_t    owner_id;
    string display_name;
    string subtitle;


    uint64_t primary_key() const { return id; };
  };

  typedef eosio::multi_index<"assets"_n, assets_table_struct> assets_table;

  TABLE offers_table_struct {
    uint64_t id;
    uint64_t requested_asset_id;
    uint64_t offered_asset_id;
    uint64_t offered_dollar_amount;
    uint64_t offered_by_id;

    uint64_t primary_key() const { return id; };
    uint64_t secondary_key() const { return requested_asset_id; };
  };

  typedef eosio::multi_index<"offers"_n, offers_table_struct> offers_table;
};
EOSIO_DISPATCH(eoslocal, (init)(acceptoffer));
