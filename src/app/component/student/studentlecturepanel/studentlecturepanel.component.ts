import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-studentlecturepanel',
  templateUrl: './studentlecturepanel.component.html',
  styleUrls: ['./studentlecturepanel.component.css']
})
export class StudentlecturepanelComponent implements OnInit {

  

  title = 'angular-videoplayer-app';
 
  
  playlist = [
    {
      title: 'History',
      src: '../../assets/his31.mp4',
      type: 'video/mp4'
    },
    {
      title: 'history21',
      src: '../../assets/his21.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Geography',
      src: '../../assets/Geo8.mkv',
      type: 'video/mp4'
    }
  ];

  videolist = [
    {
      title: 'firstvideo',
      src: '../../assets/his31.mp4',
      type: 'video/mp4'
    },
    {
      title: 'secondvideo',
      src: '../../assets/his21.mp4',
      type: 'video/mp4'
    },
    {
      title: 'thirdvideo',
      src: '../../assets/Geo8.mkv',
      type: 'video/mp4'
    },
  ];

  currentIndex = 0;
  activeVideo = this.playlist[this.currentIndex];
  api!: { getDefaultMedia: () => { (): any; new(): any; subscriptions: { (): any; new(): any; loadedMetadata: { (): any; new(): any; subscribe: { (arg0: () => void): void; new(): any; }; }; ended: { (): any; new(): any; subscribe: { (arg0: () => void): void; new(): any; }; }; }; }; play: () => void; };
 
  titlepk!: {};
 
  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
debugger
    this.titlepk= this.route.queryParamMap.subscribe(params=>console.log(params))
  }
  onPlayerSet(api: any) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.startVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  nextVideo() {
    this.currentIndex++;
    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }
    this.activeVideo = this.playlist[this.currentIndex];
  }
  startVideo() {
    this.api.play();
  }
  onClickPlaylistVideo(item: { title: string; src: string; type: string; }, index: number) {
    this.currentIndex = index;
    this.activeVideo = item;
  }
}