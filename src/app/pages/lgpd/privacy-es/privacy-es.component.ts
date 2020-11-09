import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';

@Component({
  selector: 'app-privacy-es',
  templateUrl: './privacy-es.component.html',
})
export class PrivacyEsComponent {
  title = 'Política de Privacidad';
  // declaración
  heading1 = 'Declaración';
  titular = 'Isaac Bejarano';
  website = 'isaacbejarano.site';
  // identidad del responsable
  heading2 = 'Identidad del responsable';
  email = 'isaacbejaranopro@gmail.com';
  // principios tratamiento de datos
  heading3 = 'Principios aplicados en el tratamiento de datos';
  principle1 = 'Principio de licitud, lealtad y transparencia';
  principle2 = 'Principio de minimización de datos';
  principle3 = 'Principio de limitación del plazo de conservación';
  principle4 = 'Principio de integridad y confidencialidad';
  // obtención de datos
  heading4 = 'Obtención de datos personales';
  // tus derechos
  heading5 = 'Tus derechos';
  // finalidad
  heading6 = 'Finalidad del tratamiento de datos personales';
  tratamiento = 'Formularios de contacto';
  socialLink1 = 'https://es.linkedin.com/legal/privacy-policy';
  socialLink2 =
    'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement';
  socialTitle1 = 'Linked In';
  socialTitle2 = 'Github';
  // Seguridad de los datos personales
  heading7 = 'Seguridad de los datos personales';
  hostingLink = 'https://www.cdmon.com/es/';
  hostingTitle = 'cdmon';
  // contenido
  heading8 = 'Contenido de otros sitios web';
  // cookies
  heading9 = 'Política de Cookies';
  // legitimación
  heading10 = 'Legitimación para el tratamiento de datos';
  // categoria datos
  heading11 = 'Categorías de datos personales';
  // conservación datos
  heading12 = 'Conservación de datos personales';
  // destinatarios datos
  heading13 = 'Destinatarios de datos personales';
  thirdPartyLink = 'https://analytics.google.com';
  thirdPartyTitle = 'Google Analytics';
  // navegación web
  heading14 = 'Navegación Web';
  // veracidad de datos
  heading15 = 'Exactitud y veracidad de los datos personales';
  // aceptación
  heading16 = 'Aceptación y consentimiento';
  // revocabilidad
  heading17 = 'Revocabilidad';
  // cambios en la política
  heading18 = 'Cambios en la Política de Privacidad';
  // shared methods
  openLink = Shared.openLink;

  constructor() {}
}
