import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private UserService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.UserService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log());
  }

}
