import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'emo-plant',
    template: '<p>dit is dus de plant</p>'
})
export class PlantComponent implements OnInit {
    constructor() {
        console.log('plant called for XXX');
    }

    public ngOnInit() {

    }
}
