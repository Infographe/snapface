import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model"
import {FaceSnapService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: String;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    const snapId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonText = 'Oh Snap!'
  }

  onSnap(id: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, un Snap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }

}