export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    const email = data.email || "";
    const orderId = data.orderId || "";
    const productType = data.productType || "";
    const name = data.name || "";
    const message = data.message || "";

    if (!email || !orderId || !productType) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    await env.DB.prepare(
      `INSERT INTO registrations (email, order_id, product_type, name, message)
       VALUES (?, ?, ?, ?, ?)`
    )
      .bind(email, orderId, productType, name, message)
      .run();

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}