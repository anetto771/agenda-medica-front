import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exit',
  template: '<p>Loading...</p>',
})
export class ExitComponent implements OnInit {

  private auth: AuthService;
  private toastr: ToastrService;
  private router: Router;

  constructor(router: Router , auth: AuthService, toastr: ToastrService) { 
    this.auth = auth;
    this.toastr = toastr;
    this.router = router;
  }

  ngOnInit(): void {
    this.router.navigate(['/login']);
    this.auth.logout();
    this.toastr.info("Logout realizado com sucesso.", "Logout");
  }

}
