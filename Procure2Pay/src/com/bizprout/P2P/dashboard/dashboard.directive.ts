import { Directive, HostListener } from '@angular/core';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '.menu-toggle',
})
export class SidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event:any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('menu-collapsed');
    document.querySelector('.main-menu').clientWidth;
  }
}



export const SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective];
