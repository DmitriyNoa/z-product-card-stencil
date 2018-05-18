import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag:      'z-product-card',
  styleUrl: 'z-product-card.css',
  shadow:   true
})
export class ZProductCard {

  @Prop() product: any;
  productDataParsed: any;

  @Event() productLiked: EventEmitter;

  productLikedHandler() {
    this.productLiked.emit(this.product);
  }

  componentWillLoad() {
    if(typeof this.product === "string") {
      this.productDataParsed = JSON.parse(this.product);;
    } else {
     this.productDataParsed = this.product;
    }
    console.log('Component is about to be rendered');
  }

  componentDidLoad() {
    console.log('Component has been rendered');
  }

  render() {
    console.log("Rendering component");
    console.log("Input data: ", this.product);
    return (
      <div class="z-product-card">
        <button class="z-product-card-wishlist" onClick={(event) => { event.preventDefault(); this.productLikedHandler(); }}><span class="z-icon z-icon-wishlist z-icon-small z-icon-black z-product-card-wishlist_icon"></span></button>

        <div class="z-product-image">
          <img src={this.productDataParsed.image} alt="Zalando" class="z-product-image_image" />
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
            <span class="z-text z-product-card-title_brand z-text-block z-text-detail-text-bold z-text-black">{this.productDataParsed.brand}</span>
            <span class="z-text z-product-card-title_name z-text-block z-text-detail-text-regular z-text-black">{this.productDataParsed.name}</span>
          </div>
          <div class="z-product-card-price"><span class="z-text z-product-card-price_price is-sale z-text-block z-text-detail-text-regular z-text-black">{this.productDataParsed.price.old}</span>
            <span class="z-text z-product-card-price_sale-price z-text-block z-text-detail-text-regular z-text-black">{this.productDataParsed.price.current}</span>
          </div>
        </div>
      </div>
    );
  }
}
