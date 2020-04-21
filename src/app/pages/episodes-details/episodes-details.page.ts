import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { HelperService } from "src/app/services/helper.service";
import { LoadingSingletonService } from "src/app/services/loading-singleton.service";

@Component({
  selector: "app-episodes-details",
  templateUrl: "./episodes-details.page.html",
  styleUrls: ["./episodes-details.page.scss"],
})
export class EpisodesDetailsPage implements OnInit {
  episode: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public helpService: HelperService,
    public loading: LoadingSingletonService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.loading.show();

    this.api.getEpisode(id).subscribe(
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
  }
}
