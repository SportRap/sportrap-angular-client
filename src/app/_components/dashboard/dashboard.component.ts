import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../../_services/token.storage';
import { AuthService } from "../../_services/auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private token: TokenStorage,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }


  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    if(!this.token.isLoged()){
      this.router.navigate(['']);
    }
    //Funcao do toggle do menu, e para o menu mobile !
    $(document).ready(function () {
      $('.nav-dropdown-toggle').on('click', function (e) {
          e.preventDefault();
          $(this).parent().toggleClass('open');
      });

      $('ul.nav').find('a.active').parent().parent().parent().addClass('open');

      $('.sidebar-toggle').on('click', function (e) {
          e.preventDefault();
          $('body').toggleClass('sidebar-hidden');
      });

      $('.sidebar-mobile-toggle').on('click', function () {
          $('body').toggleClass('sidebar-mobile-show');
      });
  }); 
  }
}