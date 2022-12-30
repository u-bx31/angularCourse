import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.scss'],
})
export class BookingRoomsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id$ = this.router.paramMap.pipe(
    map((parms)=> parms.get('id'))
  );
  // id$ = this.router.params.pipe(map((parms) => parms['id']));

  ngOnInit(): void {}
}
