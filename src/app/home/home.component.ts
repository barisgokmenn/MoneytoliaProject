import { Component, OnInit } from '@angular/core';
import { Campaign } from '@app/_models/campaign';
import { CampaignService } from '@app/_services/campaign.service';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ 
  selector: 'app-root',
  templateUrl: 'home.component.html' })

export class HomeComponent {

    user: User;
    campaigns: Campaign[];
    campaignForm: boolean;
    searchText: string = "";
    isNewCampaign: boolean;
    newCampaign: any = {};
    editCampaignForm: boolean;
    editedCampaign: any = {};

    constructor(private campaignService: CampaignService) { }

    ngOnInit() {
    this.campaigns = this.getCampaigns();
    }

    getCampaigns(): Campaign[] {
    return this.campaignService.getCampaignsFromData();
    }

    showEditCampaignForm(campaign: Campaign) {
    if (!campaign) {
      this.campaignForm = false;
      return;
    }
    this.editCampaignForm = true;
    this.editedCampaign = campaign;
    }

    showAddCampaignForm() {
    // resets form if edited user
    if (this.campaigns.length) {
      this.newCampaign = {};
    }
    this.campaignForm = true;
    this.isNewCampaign = true;
    }

    saveCampaign(campaign: Campaign) {
    if (this.isNewCampaign) {
      campaign.point = 0;
      this.campaignService.addCampaign(campaign);
    }
    this.campaignForm = false;
    }

    updateCampaign() {
    this.campaignService.updateCampaign(this.editedCampaign);
    this.editCampaignForm = false;
    this.editedCampaign = {};
    }

    removeCampaign(campaign: Campaign) {
    this.campaignService.deleteCampaign(campaign);
    }

    cancelEdits() {
    this.editedCampaign = {};
    this.editCampaignForm = false;
    }

    cancelNewCampaign() {
    this.newCampaign = {};
    this.campaignForm = false;
    }

    CounterCampaignPoint(campaign: Campaign) {
      if (campaign) {
        var selectedCampaign = this.campaigns.find(x=>x.id === campaign.id);
        selectedCampaign.point +=1;
      }
    }

    MinusCampaignPoint(campaign: Campaign) {
      if (campaign) {
        var selectedCampaign = this.campaigns.find(x=>x.id === campaign.id);
        if ( selectedCampaign.point > 0 )
          selectedCampaign.point -=1;
      }
    }

    HighestRatedPoints(){
      this.campaigns= this.campaigns.sort((a, b) => (a.point) - (b.point));
    }

    LowestRatedPoints(){
      this.campaigns= this.campaigns.sort((a, b) => (b.point) - (a.point));
    }

    onChange(deviceValue) {
      if (deviceValue === "1")
      {
        this.campaigns= this.campaigns.sort((a, b) => (a.point) - (b.point)).reverse();
      }
      else{
        this.campaigns= this.campaigns.sort((a, b) => (a.point) - (b.point));
      }
      console.log(deviceValue);
  }
}