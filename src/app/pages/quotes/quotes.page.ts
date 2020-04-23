import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { HelperService } from "src/app/services/helper.service";
import { LoadingSingletonService } from "src/app/services/loading-singleton.service";
import { Observable } from "rxjs";
import { CharactersImagesSingletonService } from "../../services/characters-images-singleton.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.page.html",
  styleUrls: ["./quotes.page.scss"],
})
export class QuotesPage implements OnInit {
  quotes: Observable<any>;
  chars = [];
  charsImages = this.charsImg.getImageUrl();

  constructor(
    private api: ApiService,
    public helpService: HelperService,
    public loading: LoadingSingletonService,
    public charsImg: CharactersImagesSingletonService
  ) {}

  ngOnInit() { this.loadQuotes(); }

  loadQuotes() {
    this.loading.show();
    this.quotes = this.api.getQuotesAll();
    this.quotes.subscribe(
      (res) => {
        this.chars = res;
        this.loading.dismiss();
      },
      (erro) => {
        if (erro.status) {
          this.helpService.toastHttpCodeError(erro.status);
        }
      }
    );
  }

  /**
   * Adapted from Simon Grimm code watched on Youtube - Link https://www.youtube.com/watch?v=Nc1RqvDY-B8
   * @param ev 
   */
  filterQuotes(ev){
    const val = ev.target.value;
    if(val && val.trim() != '' && val.length > 2){
      //console.log(val);
	    this.quotes.subscribe(
          res => this.chars = res.filter( 
                res => res.quote.toLowerCase().indexOf(val.toLowerCase()) > -1 
                || 
                res.author.toLowerCase().indexOf(val.toLowerCase()) > -1
              )
      )
    } else {
      this.quotes.subscribe( res => this.chars = res );
    }
  }
  
}
