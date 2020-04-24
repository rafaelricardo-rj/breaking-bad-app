import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { HelperService } from "src/app/services/helper.service";
import { LoadingSingletonService } from "src/app/services/loading-singleton.service";
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: "app-episodes-details",
  templateUrl: "./episodes-details.page.html",
  styleUrls: ["./episodes-details.page.scss"],
})
export class EpisodesDetailsPage implements OnInit {
  episode: any;
  isFavourite = false;
  epiId = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public helpService: HelperService,
    public loading: LoadingSingletonService,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.epiId = this.activatedRoute.snapshot.paramMap.get("id");

    this.loading.show();

    this.api.getEpisode(this.epiId).subscribe(
      (res) => {
        this.episode = res[0];
        this.loading.dismiss();
      },
      (erro) => {
        if (erro.status) {
          this.helpService.toastHttpCodeError(erro.status);
        }
      }
    );
    this.favouriteService.isFavouriteEpi(this.epiId).then((isFav) => {
      this.isFavourite = isFav;
    });
  }

  favouriteEpisode() {
    this.favouriteService.favouriteEpisode(this.epiId).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteEpisode() {
    this.favouriteService.unfavouriteEpisode(this.epiId).then(() => {
      this.isFavourite = false;
    });
  }
}
