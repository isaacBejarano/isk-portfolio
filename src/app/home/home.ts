import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { Featured } from "@app/featured/featured";
import { Masterhead } from "@app/masterhead/masterhead";
import { Portfolio } from "@app/portfolio/portfolio";
import { Skills } from "@app/skills/skills";
import { Store } from "@app/store-model";
import { getLast } from "@app/utils/array-utils";
import { isOpenLink } from "@app/utils/nav-utils";

@Component({
  selector: "isk-home",
  templateUrl: "./home.html",
  imports: [Masterhead, Featured, Portfolio, Skills],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // MODEL
  private readonly _model = new Store();

  // CTRL
  ////

  protected readonly featured = signal<string>(this._model.get("featured"));
  protected readonly skills = signal<StoreSkills>(this._model.get("skills"));
  protected readonly masterhead = signal<StoreMasterhead>(
    this._model.get("masterhead"),
  );
  protected readonly portfolio = signal<StorePortfolio>(
    this._model.get("portfolio"),
  );

  isOpenLink = isOpenLink;
  getLast = getLast;
}
