export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email required' })
  }

  try {
    // Replace with your newsletter service (Mailchimp, ConvertKit, etc.)
    const response = await fetch(`https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['ragspro-website']
      })
    })

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed!' })
    } else {
      throw new Error('Newsletter service error')
    }
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return res.status(500).json({ message: 'Subscription failed. Please try again.' })
  }
}