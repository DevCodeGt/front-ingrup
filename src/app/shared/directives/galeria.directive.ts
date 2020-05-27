import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
declare var $: any

@Directive({
  selector: '[onlyMyGallery]'
})
export class onlyMyGallery implements OnInit, OnDestroy {
    constructor(private elRef: ElementRef) {}

    ngOnInit() {
      this.elRef.nativeElement.addEventListener('mouseenter', this.onMouseClick);
    }

    ngOnDestroy() {
      this.elRef.nativeElement.removeEventListener('mouseenter', this.onMouseClick);
    }

    onMouseClick() {
        $('.ngx-gallery-preview-top .ngx-gallery-preview-icons .ngx-gallery-icon').html('<div class="lb-dataContainer" style="animation-duration: 0.7s; width: 877px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption animation fadeIn" style="animation-duration: 0.7s;">https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EFuuA51ZYMwKp5PF07uP2zCfYcwOrA4JDP77iA9A.png</span><span class="lb-number animation fadeIn" hidden="" style="animation-duration: 0.7s;"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div>')

    }

}
