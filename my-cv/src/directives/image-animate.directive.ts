import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imageAnimate]',
  standalone: true,
})
export class ImageAnimateDirective implements OnInit {
  private observer?: IntersectionObserver;
  private timeoutId: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.elementRef.nativeElement, 'animate')
        this.timeoutId = setTimeout(() => {
          this.renderer.addClass(this.elementRef.nativeElement, 'fast-transistion');
        }, 800);
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