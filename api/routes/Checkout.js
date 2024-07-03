const express = require('express');
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { price,title } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: title,
                    },
                    unit_amount: price * 100, // price in cents
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5173/success', 
            cancel_url: 'http://localhost:5173/failed',
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
