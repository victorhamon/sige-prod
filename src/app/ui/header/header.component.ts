import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  DropMenu = [
    { titulo: 'Relatórios', id: 'id_home', route: '', hasSubMenu: true,
    submenus: [{tituloSub: 'Produção', route: ''},
    {tituloSub: 'Marketing', route: ''},
    {tituloSub: 'RH', route: ''},
    {tituloSub: 'Financeiro', route: ''}
  ] }
];
  user = 'Teste';

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }

  // rebuildDynamicMenu() {
  //   this.authService.getMenu({IsICP: this.isICP, Role: this.selected})
  //   .subscribe((data: any) => {
  //     this.DropMenu = data;
  //     this.router.navigate(['home']);
  //   },
  //   error => {
  //     console.log('error: ' + error);
  //   },
  //   () => console.log('menu successfully rebuilt.')
  //   );
  // }
}
