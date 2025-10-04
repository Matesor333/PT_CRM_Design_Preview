function Subscription(){
    return (<div className="cards-grid">

        <div className="card">
            <div className="card__body">
                <h3 className="section-title">Current Subscription</h3>
                <div className="subscription-card">
                    <div className="plan-header">
                        <div className="plan-info">
                            <h4>Professional Plan</h4>
                            <div className="plan-price">$49.99/month</div>
                        </div>
                        <div className="plan-status">
                            <span className="status status--success">Active</span>
                            <div className="renewal-info">Auto-renews Nov 4, 2025</div>
                        </div>
                    </div>
                    <div className="plan-features">
                        <div className="feature">✓ Up to 50 clients</div>
                        <div className="feature">✓ Unlimited workout programs</div>
                        <div className="feature">✓ Advanced analytics</div>
                        <div className="feature">✓ 10GB storage</div>
                        <div className="feature">✓ Email support</div>
                        <div className="feature">✓ Custom branding</div>
                    </div>
                </div>
            </div>
        </div>



        <div className="card">
            <div className="card__body">
                <h3 className="section-title">Payment Method</h3>
                <div className="payment-method">
                    <div className="card-display">
                        <div className="card-icon">💳</div>
                        <div className="card-details">
                            <div className="card-type">Visa •••• 4242</div>
                            <div className="card-expiry">Expires 12/2026</div>
                        </div>
                    </div>
                    <button className="btn btn--outline" id="update-payment">Update Payment</button>
                </div>
                <div className="billing-address">
                    <h5>Billing Address</h5>
                    <p>123 Business St<br/>San Francisco, CA 94102<br/>USA</p>
                </div>
            </div>
        </div>


        <div className="card full-width">
            <div className="card__body">
                <h3 className="section-title">Billing History</h3>
                <div className="billing-history" id="billing-history">

                </div>
            </div>
        </div>


        <div className="card full-width">
            <div className="card__body">
                <h3 className="section-title">Plan Management</h3>
                <div className="plan-options">
                    <div className="plan-option">
                        <h5>Starter Plan</h5>
                        <div className="plan-price">$19.99/month</div>
                        <div className="plan-features-list">
                            <div>• Up to 10 clients</div>
                            <div>• Basic reporting</div>
                            <div>• 2GB storage</div>
                        </div>
                        <button className="btn btn--outline">Downgrade</button>
                    </div>
                    <div className="plan-option current">
                        <h5>Professional Plan</h5>
                        <div className="plan-price">$49.99/month</div>
                        <div className="plan-features-list">
                            <div>• Up to 50 clients</div>
                            <div>• Advanced analytics</div>
                            <div>• 10GB storage</div>
                        </div>
                        <button className="btn btn--primary" disabled>Current Plan</button>
                    </div>
                    <div className="plan-option">
                        <h5>Enterprise Plan</h5>
                        <div className="plan-price">$99.99/month</div>
                        <div className="plan-features-list">
                            <div>• Unlimited clients</div>
                            <div>• White-label solution</div>
                            <div>• 50GB storage</div>
                        </div>
                        <button className="btn btn--primary">Upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Subscription;