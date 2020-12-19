import { createDomElement } from '@js/utils/createDomElement.js';
import { footer } from '@js/elements/body/body.js';

const school = createDomElement('div', 'school', '', footer);
const schollLink = createDomElement('a', 'school__link', '', school, 'href', 'https://rs.school/js/');
const schoolLogo = createDomElement('img', 'school__logo', 'Mykola Nazimkov', schollLink, 'src', 'https://rs.school/images/rs_school_js.svg');
schoolLogo.setAttribute('alt', 'Roling Scope School Logo');

const paternity = createDomElement('div', 'paternity', '', footer);

createDomElement('p', 'design', 'design by:', paternity);
createDomElement('a', 'paternity__name-first', 'Mykola Nazimkov', paternity, 'href', 'https://github.com/Nazimkov-1984');
createDomElement('a', 'paternity__name-second', '| Ilya Safyan |', paternity, 'href', 'https://github.com/roadToTheFuture');
createDomElement('p', 'paternity__date', 'december 2020', paternity);
