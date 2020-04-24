import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { HelperService } from "src/app/services/helper.service";
import { LoadingSingletonService } from "../../services/loading-singleton.service";
import { FavouriteService } from "src/app/services/favourite.service";

@Component({
  selector: "app-cast-details",
  templateUrl: "./cast-details.page.html",
  styleUrls: ["./cast-details.page.scss"],
})
export class CastDetailsPage implements OnInit {
  character: any;
  isFavourite = false;
  charaId = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public helpService: HelperService,
    public loading: LoadingSingletonService,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.charaId = this.activatedRoute.snapshot.paramMap.get("id");

    this.loading.show();

    this.api.getCharacter(this.charaId).subscribe(
      (res) => {
        this.character = res[0];
        this.loading.dismiss();
      },
      (erro) => {
        if (erro.status) {
          this.helpService.toastHttpCodeError(erro.status);
        }
      }
    );

    this.favouriteService.isFavourite(this.charaId).then((isFav) => {
      this.isFavourite = isFav;
    });
  }

  favouriteChar() {
    this.favouriteService.favouriteChar(this.charaId).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteChar() {
    this.favouriteService.unfavouriteChar(this.charaId).then(() => {
      this.isFavourite = false;
    });
  }
}
