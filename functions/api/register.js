export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    const email = data.email || '';
    const orderId = data.orderId || '';
    const productType = data.productType || '';
    const name = data.name || '';
    const message = data.message || '';
    const purchaseChannel = data.purchaseChannel || '';
    if (!email) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), {
        status: 400,
      });
    }

    await env.DB.prepare(
      `INSERT INTO registrations (email, order_id, product_type, purchase_channel, name, message)
   VALUES (?, ?, ?, ?, ?, ?)`
    )
      .bind(email, orderId, productType, purchaseChannel, name, message)
      .run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
