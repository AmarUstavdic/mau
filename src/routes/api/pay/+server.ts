import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

// Simulated database or state
let payments = {};
let secret = 'secret_user_token';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        const { action, requestSecret, amount, currency, merchantId, source } = data;

        // Validate API key
        if (secret !== requestSecret) {
            return json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        switch (action) {
            case 'initiate':
                const paymentId = `pay_${Date.now()}`;
                payments[paymentId] = { amount, currency, merchantId, source, status: 'pending' };
                return json({
                    success: true,
                    paymentId,
                    status: 'pending',
                    message: "Payment initiated successfully."
                });

            case 'confirm':
                const { paymentId: confirmPaymentId } = data;
                if (payments[confirmPaymentId] && payments[confirmPaymentId].status === 'pending') {
                    payments[confirmPaymentId].status = 'confirmed';
                    const transactionId = `txn_${Date.now()}`;
                    return json({
                        success: true,
                        paymentId: confirmPaymentId,
                        transactionId,
                        status: 'confirmed',
                        message: "Payment confirmed and processed."
                    });
                } else {
                    return json({ success: false, message: 'Payment not found or already confirmed' }, { status: 404 });
                }

            default:
                return json({ success: false, message: 'Invalid action' }, { status: 400 });
        }
    } catch (err) {
        return json({ success: false, message: 'Server error' }, { status: 500 });
    }
};


// EXAMPLE OF JSON THAT NEEDS TO BE SENT TO API
// {
//     "action": "initiate",
//     "apiKey": "your_secret_api_key",
//     "amount": 100.00,
//     "currency": "USD",
//     "merchantId": "merchant123",
//     "source": "token_generated_by_client"
//   }
  