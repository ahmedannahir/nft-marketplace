const BaseRepository = require("./BaseRepository");
const Profile = require("../models").Profile;
const Listing = require("../models").Listing
const Nft = require("../models").Nft

class ProfileRepository extends BaseRepository {
    constructor(Profile, Listing, Nft) {
        super(Profile);
        this.listingModel = Listing;
        this.nftModel = Nft;
    }

    findAboutByProfileId(profileId) {
        return this.model.findOne({
            where: {
                profile_id: profileId
            }
        });
    }

    findOnSaleByProfile(profileAbout) {
        return this.listingModel.findAll({
            include: [
                this.nftModel
            ],
            where: {
                ProfileId: profileAbout.id
            }
        });
    }

}

module.exports = new ProfileRepository(Profile, Listing, Nft);