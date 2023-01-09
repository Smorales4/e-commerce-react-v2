import React from 'react';
import support from './images/support.png';
import discount from './images/discount.png';
import shipping from './images/shipping.png';
import service from './images/great-service.png';
import onlineStore from './images/online-store2.png';
const FeatureSection = () => {
return (
<section className="feature">
<div className="feature-box">
<img src={ onlineStore } className="w-full mb-2" alt="" />
<button className="btn-features">Entire Online Store</button>
</div>
<div className="feature-box">
<img src={ discount } className="feature-img" alt="" />
<button className="btn-features">Savings</button>
</div>
<div className="feature-box">
<img src={ service } className="feature-img" alt="" />
<button className="btn-features">Great service</button>
</div>
<div className="feature-box">
<img src={ support } className="feature-img" alt="" />
<button className="btn-features">24/7 Support</button>
</div>
<div className="feature-box">
<img src={ shipping } className="feature-img" alt="" />
<button className="btn-features">Free shipping</button>
</div>
</section>
);
};

export default FeatureSection;