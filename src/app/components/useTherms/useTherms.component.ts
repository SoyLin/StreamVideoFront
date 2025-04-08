import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-useTherms',
  templateUrl: './useTherms.component.html',
  styleUrl: './useTherms.component.css'
})
export class UseThermsComponent implements OnInit {
  private routeSubscription: Subscription = new Subscription();
  language:string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.language = this.route.snapshot.paramMap.get('language');
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.language = params.get('language') || 'es';
      console.log("MUESTA : "+ this.language)
    });
  }
}
