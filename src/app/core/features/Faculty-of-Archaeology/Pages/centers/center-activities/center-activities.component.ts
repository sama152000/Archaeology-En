// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CentersService } from '../../../Services/center.service';
// import { Center } from '../../../model/center.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-center-activities',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './center-activities.component.html',
//   styleUrls: ['./center-activities.component.css']
// })
// export class CenterActivitiesComponent implements OnInit {
//   center?: Center;

//   constructor(
//     private route: ActivatedRoute,
//     private centersService: CentersService
//   ) {}

//   ngOnInit(): void {
//     this.route.parent?.params.subscribe(params => {
//       const id = +params['id'];
//       this.centersService.getCenter(id).subscribe(center => {
//         this.center = center;
//       });
//     });
//   }
// }