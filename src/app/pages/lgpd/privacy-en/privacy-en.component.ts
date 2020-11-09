import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';

@Component({
  selector: 'app-privacy-en',
  templateUrl: './privacy-en.component.html',
})
export class PrivacyEnComponent {
  title = 'Privacy Policy';
  // declaración
  heading1 = 'Statement';
  titular = 'Isaac Bejarano';
  website = 'isaacbejarano.site';
  // identidad del responsable
  heading2 = 'Responsible identity';
  email = 'isaacbejaranopro@gmail.com';
  // principios tratamiento de datos
  heading3 = 'Principles applied in data processing';
  principle1 = 'Principle of legality, loyalty and transparency';
  principle2 = 'Data minimization principle';
  principle3 = 'Principle of limitation of the conservation period';
  principle4 = 'Principle of integrity and confidentiality';
  // obtención de datos
  heading4 = 'Obtaining personal data';
  // tus derechos
  heading5 = 'Your rights';
  // finalidad
  heading6 = 'Purpose of the processing of personal data';
  tratamiento = 'Contact forms';
  socialLink1 = 'https://es.linkedin.com/legal/privacy-policy';
  socialLink2 =
    'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement';
  socialTitle1 = 'Linked In';
  socialTitle2 = 'Github';
  // Seguridad de los datos personales
  heading7 = 'Personal data security';
  hostingLink = 'https://www.cdmon.com/es/';
  hostingTitle = 'cdmon';
  // contenido
  heading8 = 'Content from other websites';
  // cookies
  heading9 = 'Cookies policy';
  // legitimación
  heading10 = 'Legitimation for data processing';
  // categoria datos
  heading11 = 'Categories of personal data';
  // conservación datos
  heading12 = 'Preservation of personal data';
  // destinatarios datos
  heading13 = 'Recipients of personal data';
  thirdPartyLink = 'https://analytics.google.com';
  thirdPartyTitle = 'Google Analytics';
  // navegación web
  heading14 = 'Web navegation';
  // veracidad de datos
  heading15 = 'Accuracy and veracity of personal data';
  // aceptación
  heading16 = 'Acceptance and consent';
  // revocabilidad
  heading17 = 'Revocability';
  // cambios en la política
  heading18 = 'Changes to the Privacy Policy';
  // shared methods
  openLink = Shared.openLink;

  constructor() {}
}
