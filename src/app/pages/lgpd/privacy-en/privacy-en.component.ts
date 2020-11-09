import { Component, OnInit } from '@angular/core';
import { store } from '../../../store/store';

@Component({
  selector: 'app-privacy-en',
  templateUrl: './privacy-en.component.html',
  styleUrls: ['./privacy-en.component.scss'],
})
export class PrivacyEnComponent implements OnInit {
  // declaración
  heading1: string;
  titular: string;
  website: string;
  // identidad del responsable
  heading2: string;
  email: string;
  // principios tratamiento de datos
  heading3: string;
  principle1: string;
  principle2: string;
  principle3: string;
  principle4: string;
  // obtención de datos
  heading4: string;
  // Tus derechos
  heading5: string;
  // finalidad
  heading6: string;
  tratamiento: string;
  socialLink1: string;
  socialLink2: string;
  socialTitle1: string;
  socialTitle2: string;
  // Seguridad de los datos personales
  heading7: string;
  hostingLink: string;
  hostingTitle: string;
  // contenido
  heading8: string;
  // cookies
  heading9: string;
  // legitimación
  heading10: string;
  // categoria datos
  heading11: string;
  // conservación datos
  heading12: string;
  // destinatarios datos
  heading13: string;
  thirdPartyLink: string;
  thirdPartyTitle: string;
  // navegación web
  heading14: string;
  // veracidad de datos
  heading15: string;
  // aceptación
  heading16: string;
  // revocabilidad
  heading17: string;
  // cambios en la política
  heading18: string;
  // shared methods
  openLink: () => void;

  constructor() {}

  ngOnInit(): void {
    // declaración
    this.heading1 = 'Declaración';
    this.titular = 'Isaac Bejarano';
    this.website = 'isaacbejarano.site';
    // identidad del responsable
    this.heading2 = 'Identidad del responsable';
    this.email = 'isaacbejaranopro@gmail.com';
    // principios tratamiento de datos
    this.heading3 = 'Principios aplicados en el tratamiento de datos';
    this.principle1 = 'Principio de licitud, lealtad y transparencia';
    this.principle2 = 'Principio de minimización de datos';
    this.principle3 = 'Principio de limitación del plazo de conservación';
    this.principle4 = 'Principio de integridad y confidencialidad';
    // obtención de datos
    this.heading4 = 'Obtención de datos personales';
    // tus derechos
    this.heading5 = 'Tus derechos';
    // finalidad
    this.heading6 = 'Finalidad del tratamiento de datos personales';
    this.tratamiento = 'Formularios de contacto';
    this.socialLink1 = 'https://es.linkedin.com/legal/privacy-policy';
    this.socialLink2 =
      'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement';
    this.socialTitle1 = 'Linked In';
    this.socialTitle2 = 'Github';
    // Seguridad de los datos personales
    this.heading7 = 'Seguridad de los datos personales';
    this.hostingLink = 'https://www.cdmon.com/es/';
    this.hostingTitle = 'cdmon';
    // contenido
    this.heading8 = 'Contenido de otros sitios web';
    // cookies
    this.heading9 = 'Política de Cookies';
    // legitimación
    this.heading10 = 'Legitimación para el tratamiento de datos';
    // categoria datos
    this.heading11 = 'Categorías de datos personales';
    // conservación datos
    this.heading12 = 'Conservación de datos personales';
    // destinatarios datos
    this.heading13 = 'Destinatarios de datos personales';
    this.thirdPartyLink = 'https://analytics.google.com';
    this.thirdPartyTitle = 'Google Analytics';
    // navegación web
    this.heading14 = 'Navegación Web';
    // veracidad de datos
    this.heading15 = 'Exactitud y veracidad de los datos personales';
    // aceptación
    this.heading16 = 'Aceptación y consentimiento';
    // revocabilidad
    this.heading17 = 'Revocabilidad';
    // cambios en la política
    this.heading18 = 'Cambios en la Política de Privacidad';
    // shared methods
    this.openLink = store.openLink;
  }
}
