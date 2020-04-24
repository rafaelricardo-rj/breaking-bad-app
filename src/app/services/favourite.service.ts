import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

const STORAGE_KEY = "favCharacters";

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
}
