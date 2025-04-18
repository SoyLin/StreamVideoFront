import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css'
})
export class AboutUsComponent implements OnInit {
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
