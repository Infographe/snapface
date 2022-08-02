import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model"
import {FaceSnapService} from "../../../core/services/face-snaps.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: "./face-snap-list.component.html",
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  // faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    // this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();

  }
}