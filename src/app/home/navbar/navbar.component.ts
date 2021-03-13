import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
@Component({
selector: 'app-home-nav',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input()
title: string;
count = 0;
constructor() {}
countNumber() {
    this.count = this.count + 1;
}
}
