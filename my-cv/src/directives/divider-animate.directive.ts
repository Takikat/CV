import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dividerAnimate]',
  standalone: true,
})
export class DividerAnimateDirective implements OnInit {
  private observer?: IntersectionObserver;
  private timeoutId: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.elementRef.nativeElement, 'animate-text')
        this.timeoutId = setTimeout(() => {
          this.renderer.addClass(this.elementRef.nativeElement, 'animate-bars');
        }, 700);
        this.observer?.unobserve(this.elementRef.nativeElement);
      }
    });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}