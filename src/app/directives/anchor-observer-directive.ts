import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  type OnDestroy,
  type OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[iskObserveElement]',
  standalone: true,
})
export class ObserveElementDirective implements OnInit, OnDestroy {
  @Output() visible = new EventEmitter<Anchor>();
  private observer: IntersectionObserver | undefined;

  // FIXME: use signals

  // constructor(private el: ElementRef) {}
  private el = inject(ElementRef);

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].target);
        // console.log(entries[0].intersectionRect);
        console.log(entries[0].intersectionRatio);
        console.log(entries[0].isIntersecting);

        // if (entries[0].isIntersecting) {
        // console.log(entries[0].isIntersecting, this.el.nativeElement.id);
        // this.observer.unobserve(entries[0].target);
        // Emitimos el ID del elemento cuando es visible
        // this.visible.emit(this.el.nativeElement.id);
        // } else console.error('leaving...', entries[0].target);
        // TODO: add fade-in FX
      },
      {
        // threshold: 0.1,
        // Ajusta este "umbral" según necesites
        // FIXME:
        // rootMargin: '-200px 0px -200px',
        /*
        Esto crea una "línea invisible" en el viewport:
          El elemento no se considera "activo" en cuanto toca el borde inferior, sino cuando entra en la zona central/superior.
          Esto evita que dos secciones se marquen como activas al mismo tiempo si son pequeñas
        */
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
