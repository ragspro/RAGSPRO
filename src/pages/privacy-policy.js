import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - RAGSPRO</title>
      </Head>
      
      <section className="min-h-screen bg-primary pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-gray-400 mb-6">Last updated: January 2025</p>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
                  <p>We collect information you provide directly to us, such as when you contact us through our forms or email.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
                  <p>We use the information we collect to respond to your inquiries and provide our services.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Information Sharing</h2>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at raghav@ragspro.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}