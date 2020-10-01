import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `<div></div>
    <div class="socials">
      <a href="https://github.com/Paylocity" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/public/Paylocity" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Paylocity" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/paylocity/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
