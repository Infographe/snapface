import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapService} from "../../../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(private faceSnapsService: FaceSnapService,
              private router: Router) {

  }


  ngOnInit() {

    this.buttonText = 'Oh Snap!'
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}