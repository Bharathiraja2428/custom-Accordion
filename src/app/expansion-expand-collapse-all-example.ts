import { Component, Inject, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrls: ['expansion-expand-collapse-all-example.css'],
})
export class ExpansionExpandCollapseAllExample {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public filterData: any = [
    { id: 1, attrId: '33', attrName: 'Code moteur', unitName: null },
    { id: 2, attrId: '40', attrName: "Type d'entraînement", unitName: null },
    { id: 3, attrId: '564', attrName: 'Coté du volant', unitName: null },
    {
      id: 4,
      attrId: '20002',
      attrName: 'Période de construction',
      unitName: null,
    },
    { id: 5, attrId: '65', attrName: 'Nombre de portes', unitName: null },
  ];
  public genartList: any = {
    id: 1,
    genarts: [
      {
        genartNr: 3245,
        genartName: 'Douille de palier, bras transversal',
        active: true,
      },
      { genartNr: 2, genartName: 'Démarreur', active: true },
      { genartNr: 4, genartName: 'Alternateur', active: true },
      {
        genartNr: 5,
        genartName: 'Joint homocinétique de transmission',
        active: true,
      },
      { genartNr: 7, genartName: 'Filtre à huile', active: true },
      { genartNr: 8, genartName: 'Filtre à air', active: true },
      { genartNr: 9, genartName: 'Filtre à carburant', active: true },
      { genartNr: 10, genartName: 'Courroie trapézoïdale', active: true },
    ],
  };
  public brandList = [
    {
      brandName: 'BMW',
    },
    {
      brandName: 'Nissan',
    },
    {
      brandName: 'PEUGEOT',
    },
  ];

  public countriesList = [
    { id: 'AFG', countryCode: 'AF', name: 'Afghanistan' },
    { id: 'ZA', countryCode: 'ZA', name: 'Afrique du Sud' },
    { id: 'AL', countryCode: 'AL', name: 'Albanie' },
    { id: 'DZ', countryCode: 'DZ', name: 'Algérie' },
    { id: 'D', countryCode: 'DE', name: 'Allemagne' },
    { id: 'AND', countryCode: 'AD', name: 'Andorre' },
    { id: 'ANG', countryCode: 'AO', name: 'Angola' },
    { id: 'AIA', countryCode: 'AI', name: 'Anguilla' },
    { id: 'ATG', countryCode: 'AG', name: 'Antigua' },
    { id: 'AN', countryCode: 'AN', name: 'Antilles néerlandaises' },
    { id: 'SA', countryCode: 'SA', name: 'Arabie Saoudite' },
    { id: 'WS', countryCode: 'WS', name: 'Archipel des Samoa' },
    { id: 'RA', countryCode: 'AR', name: 'Argentine' },
    { id: 'ARM', countryCode: 'AM', name: 'Arménie' },
    { id: 'AW', countryCode: 'AW', name: 'Aruba' },
    { id: 'AUS', countryCode: 'AU', name: 'Australie' },
    { id: 'A', countryCode: 'AT', name: 'Autriche' },
    { id: 'AZ', countryCode: 'AZ', name: 'Azerbaidjan' },
    { id: 'BS', countryCode: 'BS', name: 'Bahamas' },
    { id: 'BRN', countryCode: 'BH', name: 'Bahreïn' },
    { id: 'BD', countryCode: 'BD', name: 'Bangladesh' },
    { id: 'BDS', countryCode: 'BB', name: 'Barbade' },
    { id: 'PW', countryCode: 'PW', name: 'Belau' },
    { id: 'B', countryCode: 'BE', name: 'Belgique' },
    { id: 'BH', countryCode: 'BZ', name: 'Belize' },
    { id: 'DY', countryCode: 'BJ', name: 'Bénin' },
    { id: 'BY', countryCode: 'BY', name: 'Biélorussie' },
    { id: 'BOL', countryCode: 'BO', name: 'Bolivie' },
    { id: 'BQ', countryCode: 'BQ', name: 'Bonaire, Saint-Eustache et Saba' },
    { id: 'BIH', countryCode: 'BA', name: 'Bosnie-Herzégovine' },
    { id: 'RB', countryCode: 'BW', name: 'Botswana' },
    { id: 'BR', countryCode: 'BR', name: 'Brésil' },
    { id: 'BRU', countryCode: 'BN', name: 'Brunei' },
    { id: 'BG', countryCode: 'BG', name: 'Bulgarie' },
    { id: 'BF', countryCode: 'BF', name: 'Burkina Faso' },
    { id: 'RU', countryCode: 'BI', name: 'Burundi' },
    { id: 'CAL', countryCode: 'KA', name: 'Californie' },
    { id: 'K', countryCode: 'KH', name: 'Cambodge' },
    { id: 'CM', countryCode: 'CM', name: 'Cameroun' },
    { id: 'CDN', countryCode: 'CA', name: 'Canada' },
    { id: 'RCH', countryCode: 'CL', name: 'Chili' },
    { id: 'TJ', countryCode: 'CN', name: 'Chine' },
    { id: 'CY', countryCode: 'CY', name: 'Chypre' },
    { id: 'V', countryCode: 'VA', name: 'Cité du Vatican' },
    { id: 'CO', countryCode: 'CO', name: 'Colombie' },
    { id: 'KM', countryCode: 'KM', name: 'Comores' },
    { id: 'RCB', countryCode: 'CG', name: 'Congo' },
    { id: 'ROK', countryCode: 'KR', name: 'Corée' },
    { id: 'CR', countryCode: 'CR', name: 'Costa Rica' },
    { id: 'HR', countryCode: 'HR', name: 'Croatie' },
    { id: 'C', countryCode: 'CU', name: 'Cuba' },
    { id: 'CW', countryCode: 'CW', name: 'Curaçao' },
    { id: 'DK', countryCode: 'DK', name: 'Danemark' },
    { id: 'DJ', countryCode: 'DJ', name: 'Djibouti' },
    { id: 'WD', countryCode: 'DM', name: 'Dominique' },
    { id: 'ET', countryCode: 'EG', name: 'Egypte' },
    { id: 'UAE', countryCode: 'AE', name: 'Émirats Arabes Unis' },
    { id: 'EC', countryCode: 'EC', name: 'Équateur' },
    { id: 'ER', countryCode: 'ER', name: 'Érythrée' },
    { id: 'E', countryCode: 'ES', name: 'Espagne' },
    { id: 'EW', countryCode: 'EE', name: 'Estonie' },
    { id: 'USA', countryCode: 'US', name: 'États-Unis' },
    { id: 'ETH', countryCode: 'ET', name: 'Éthiopie' },
    { id: 'FJI', countryCode: 'FJ', name: 'Fidji' },
    { id: 'SF', countryCode: 'FI', name: 'Finlande' },
    { id: 'F', countryCode: 'FR', name: 'France' },
    { id: 'GA', countryCode: 'GA', name: 'Gabon' },
    { id: 'WAG', countryCode: 'GM', name: 'Gambie' },
    { id: 'GO', countryCode: 'GE', name: 'Géorgie' },
    {
      id: 'GS',
      countryCode: 'GS',
      name: 'Géorgie du Sud-et-les Îles Sandwich du Sud',
    },
    { id: 'GH', countryCode: 'GH', name: 'Ghana' },
    { id: 'GBZ', countryCode: 'GI', name: 'Gibraltar' },
    { id: 'GB', countryCode: 'GB', name: 'Grande-Bretagne' },
  ];

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
