import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.page.html',
  styleUrls: ['./fitness.page.scss'],
})
export class FitnessPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  async account() {
    this.router.navigate(['/account'])

  }

}
