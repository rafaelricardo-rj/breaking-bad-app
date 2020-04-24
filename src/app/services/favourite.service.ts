import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

const STORAGE_KEY = "favCharacters";
const STORAGE_FAV_EPI_KEY = "favEpisodes";

@Injectable({
  providedIn: "root",
})
export class FavouriteService {
  constructor(private storage: Storage) {}

  getAllFavCharacters() {
    return this.storage.get(STORAGE_KEY);
  }

  isFavourite(charaId) {
    return this.getAllFavCharacters().then((result) => {
      return result && result.indexOf(charaId) !== -1;
    });
  }

  favouriteChar(charaId) {
    return this.getAllFavCharacters().then((result) => {
      if (result) {
        result.push(charaId);

        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [charaId]);
      }
    });
  }

  unfavouriteChar(charaId) {
    return this.getAllFavCharacters().then((result) => {
      if (result) {
        var index = result.indexOf(charaId);

        result.splice(index, 1);

        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
  // ############## FAVOURITE EPISODES BELOW ################
  getAllFavEpisodes() {
    return this.storage.get(STORAGE_FAV_EPI_KEY);
  }

  isFavouriteEpi(epiId) {
    return this.getAllFavEpisodes().then((result) => {
      return result && result.indexOf(epiId) !== -1;
    });
  }

  favouriteEpisode(epiId) {
    return this.getAllFavEpisodes().then((result) => {
      if (result) {
        result.push(epiId);

        return this.storage.set(STORAGE_FAV_EPI_KEY, result);
      } else {
        return this.storage.set(STORAGE_FAV_EPI_KEY, [epiId]);
      }
    });
  }

  unfavouriteEpisode(epiId) {
    return this.getAllFavEpisodes().then((result) => {
      if (result) {
        var index = result.indexOf(epiId);

        result.splice(index, 1);

        return this.storage.set(STORAGE_FAV_EPI_KEY, result);
      }
    });
  }
}
