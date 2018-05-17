import { Component, Prop } from '@stencil/core';

@Component({
  tag:      'z-product-card',
  styleUrl: 'z-product-card.css',
  shadow:   true
})
export class ZProductCard {

  @Prop() productData: any;

  render() {
    return (
      <div class="z-product-card">
        <button class="z-product-card-wishlist"><span class="z-icon z-icon-wishlist z-icon-small z-icon-black z-product-card-wishlist_icon"></span></button>

        <div class="z-product-image">
          <img src="https://mosaic01.ztat.net/vgs/media/catalog-sm/TP/72/1D/0D/FJ/11/TP721D0DF-J11@10.jpg" alt="Zalando" class="z-product-image_image" />
            <div class="z-product-image_overlay">
              <div class="z-product-card-flags ">
                <div class="z-product-card-flags_wrapper">
                  <div class="z-flag z-flag-sale">Selling out fast</div>
                  <div class="z-flag z-flag-info">Hot product</div>
                </div>
              </div>
            </div>
        </div>
        <div class="z-product-card-details">
          <div class="z-product-card-title ">
            <span class="z-text z-product-card-title_brand z-text-block z-text-detail-text-bold z-text-black">Nike Performance</span>
            <span class="z-text z-product-card-title_name z-text-block z-text-detail-text-regular z-text-black">Langarmshirt - black/legion green/reflective silver</span>
          </div>
          <div class="z-product-card-price"><span class="z-text z-product-card-price_price is-sale z-text-block z-text-detail-text-regular z-text-black">€19,99</span>
            <span class="z-text z-product-card-price_sale-price z-text-block z-text-detail-text-regular z-text-black">€12,49</span>
          </div>
        </div>
      </div>
    );
  }
}
