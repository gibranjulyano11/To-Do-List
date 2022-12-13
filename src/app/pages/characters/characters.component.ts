import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(private marvelSvc:MarvelService, private router:Router) { }
  characters?:Observable<any>;

  ngOnInit(){

    this.getAllCharacters();

  }


  getAllCharacters(){

    this.characters= this.marvelSvc.getCharacters();

  }

  getCharacter(id:string){

    this.router.navigate(['/character/',id]);

  }

}