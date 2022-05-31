'use strict'

const listingRepository = require("../repositories/ListingRepository");

class ListingService {
    constructor(listingRepository) {
        this.listingRepository = listingRepository;
    }

    create(listing) {
        return this.listingRepository.create(listing);
    }

    listAll() {
        return this.listingRepository.listAll();
    }

    findAllActiveListings(limit, offset, name=null) {
        return this.listingRepository.findAllActiveListings(limit, offset, name);
    }

    findListingByTokenId(tokenId) {
        return this.listingRepository.findListingByTokenId(tokenId);
    }
}
module.exports = new ListingService(listingRepository);