import { Injectable } from '@angular/core';
import { Campaign } from '@app/_models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private upersons: Campaign[] = [
    {
      id: "9BDFA47E-E6E4-438B-852A-274AB3C513B2",
      point: 1,
      name: "Campaign1",
      details: "Details1",
      date: "28.11.2021"
    },
    {
      id: "9CDFA47E-E6E4-438B-852A-274AB3C513B2",
      point: 2,
      name: "Campaign2",
      details: "Details2",
      date: "28.11.2021"
    },
    {
      id: "9DDFA47E-E6E4-438B-852A-274AB3C513B2",
      point: 3,
      name: "Campaign3",
      details: "Details3",
      date: "28.11.2021"
    },

    {
      id: "9FDFA47E-E6E4-438B-852A-274AB3C513B2",
      point: 4,
      name: "Campaign4",
      details: "Details4",
      date: "28.11.2021"}
  ];

  constructor() { }

  getCampaignsFromData(): Campaign[] {
    return this.upersons;
  }

  addCampaign(campaign: Campaign) {
    this.upersons.push(campaign);

  }
  updateCampaign(campaign: Campaign) {
    const index = this.upersons.findIndex(u => campaign.point === u.point);
    this.upersons[index] = campaign;
  }
  deleteCampaign(campaign: Campaign) {
    this.upersons.splice(this.upersons.indexOf(campaign), 1);
  }
}
